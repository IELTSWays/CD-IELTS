import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setAnswersAll } from '@/store/slices/user/userSlice'
// store

const Container = styled("div")`
  display: flex;
  // background-color: ${props => (props?.isDraggingOver ? "#639ee2" : "inherit")};`;

const DND = () => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const init = {
    tasks: {
      "a": { id: "a", content: "A - included in cost of hiring room" },
      "b": { id: "b", content: "B - available at extra charge" },
      "c": { id: "c", content: "C - not available" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c",].filter(x =>
          x !== localStorage.getItem('8') &&
          x !== localStorage.getItem('9') &&
          x !== localStorage.getItem('10')
        )
      },
      8: {
        id: 8,
        title: "outdoor swimming pool",
        taskIds: localStorage.getItem('8') ? localStorage.getItem('8')?.split("") : []
      },
      9: {
        id: 9,
        title: "gym",
        taskIds: localStorage.getItem('9') ? localStorage.getItem('9')?.split("") : []
      },
      10: {
        id: 10,
        title: "tennis courts",
        taskIds: localStorage.getItem('10') ? localStorage.getItem('10')?.split("") : []
      }
    },
    columnOrder: ["column-1", 8, 9, 10]
  }

  const [starter, setStarter] = useState(init);
  const [flag, setFlag] = useState(flags['8'])

  const [answer8, setAnswer8] = useState(localStorage.getItem('8'));
  const [answer9, setAnswer9] = useState(localStorage.getItem('9'));
  const [answer10, setAnswer10] = useState(localStorage.getItem('10'));

  useEffect(() => {
    localStorage.setItem('8', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('9', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('10', Object.values(starter.columns)[2]?.taskIds);
  }, [starter]);

  useEffect(() => {
    setAnswer8(Object.values(starter.columns)[0]?.taskIds)
    setAnswer9(Object.values(starter.columns)[1]?.taskIds)
    setAnswer10(Object.values(starter.columns)[2]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer8 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '8': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer8])

  useEffect(() => {
    answer9 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '9': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer9])

  useEffect(() => {
    answer10 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '10': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer10])

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) return;
    // if (
    //   Object.values(starter.columns).filter(obj => obj.id === destination.droppableId)[0].taskIds.length == 1 && destination?.droppableId !== 'column-1'
    // ) return
    // Function to check if the destination is droppable
    const isDestinationDroppable = (obj: any) => obj.id === destination.droppableId;

    // Check if the destination has any items
    const destinationHasItems =
      Object.values(starter.columns).filter(isDestinationDroppable)?.[0]?.taskIds?.length ?? 0;

    // If the destination is not 'column-1' and has items, proceed with the swapping
    if (destination?.droppableId !== "column-1" && destinationHasItems) {
      // Get the item from the source
      const sourceItem = starter.columns[source.droppableId].taskIds[source.index];

      // Get the item from the destination
      const destinationItem = starter.columns[destination.droppableId].taskIds[destination.index];

      // Get the destination column
      const destinationColumn = starter.columns[destination.droppableId];

      // Create a new destination column by replacing the destination item with the source item
      const updatedDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationColumn.taskIds.map((taskId) =>
          taskId === destinationItem ? sourceItem : taskId
        ),
      };

      // Update the starter data with the new destination column
      let updatedStarterData = {
        ...starter,
        columns: {
          ...starter.columns,
          [destination.droppableId]: updatedDestinationColumn,
        },
      };

      // Get the source column
      const sourceColumn = starter.columns[source.droppableId];

      // Create a new source column by removing the source item
      const updatedSourceColumn = {
        ...sourceColumn,
        taskIds: sourceColumn.taskIds.filter((taskId) => taskId !== sourceItem),
      };

      // Add the old destination item back to the source column
      updatedSourceColumn.taskIds.splice(source.index, 0, destinationItem);

      // Update the starter data with the new source column
      updatedStarterData = {
        ...updatedStarterData,
        columns: {
          ...updatedStarterData.columns,
          [source.droppableId]: updatedSourceColumn,
        },
      };

      // Update the state with the new starter data
      setStarter(updatedStarterData);
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = starter.columns[source.droppableId];
    const end = starter.columns[destination.droppableId];

    if (start === end) {
      const column = starter.columns[source.droppableId];
      const taskIds = [...column.taskIds];
      taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        taskIds
      };
      setStarter({
        ...starter,
        columns: {
          ...starter.columns,
          [column.id]: newColumn
        }
      });
      return;
    }

    const startTaskIds = [...start.taskIds];
    const endTaskIds = [...end.taskIds];

    startTaskIds.splice(source.index, 1);
    endTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      taskIds: startTaskIds
    };
    const endTaskColumn = {
      ...end,
      taskIds: endTaskIds
    };

    setStarter({
      ...starter,
      columns: {
        ...starter.columns,
        [start.id]: newStartColumn,
        [end.id]: endTaskColumn
      }
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-column" type="column" direction="horizontal">
        {(provided, snapshot) => (
          <Container
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <section className="dnd-cols" id={`q-8`}>
              {(starter.columnOrder).slice(1)?.map((columnId, index) => {
                const column = starter.columns[columnId];
                const tasks = column.taskIds.map(taskId => starter.tasks[taskId]);

                return (
                  <Column
                    index={index}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                  />
                );
              })}
            </section>

            <section className="dnd-options">
              <div className="title"> Decisions </div>
              {(starter.columnOrder).slice(0, 1)?.map((columnId, index) => {
                const column = starter.columns[columnId];
                const tasks = column.taskIds.map(taskId => starter.tasks[taskId]);

                return (
                  <Column
                    index={index}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                  />
                );
              })}
            </section>

            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DND;