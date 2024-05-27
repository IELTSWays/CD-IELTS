import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "@/components/IELTS/QuestionTypes/IELTSDargDrop/Column";

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setAnswersAll } from '@/store/slices/user/userSlice'

const Container = styled("div")`
  display: flex;
  // background-color: ${props => (props?.isDraggingOver ? "#639ee2" : "inherit")};`;

const DND_25_30 = () => {

  const dispatch = useAppDispatch();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {
    tasks: {
      "a": { id: "a", content: "A - being flexible" },
      "b": { id: "b", content: "B - focusing on details" },
      "c": { id: "c", content: "C - having a smart appearance" },
      "d": { id: "d", content: "D - hiding your emotions" },
      "e": { id: "e", content: "E - relying on experts" },
      "f": { id: "f", content: "F - trusting your own views" },
      "g": { id: "g", content: "G - doing one thing at a time" },
      "h": { id: "h", content: "H - thinking of the future" }
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c", "d", "e", "f", "g", "h"].filter(x =>
          x !== localStorage.getItem('25') &&
          x !== localStorage.getItem('26') &&
          x !== localStorage.getItem('27') &&
          x !== localStorage.getItem('28') &&
          x !== localStorage.getItem('29') &&
          x !== localStorage.getItem('30') 
        )
      },
      25: {
        id: 25,
        title: "Communication",
        taskIds: localStorage.getItem('25') ? localStorage.getItem('25')?.split("") : []
      },
      26: {
        id: 26,
        title: "Organisation",
        taskIds: localStorage.getItem('26') ? localStorage.getItem('26')?.split("") : []
      },
      27: {
        id: 27,
        title: "Time management",
        taskIds: localStorage.getItem('27') ? localStorage.getItem('27')?.split("") : []
      },
      28: {
        id: 28,
        title: "Creativity",
        taskIds: localStorage.getItem('28') ? localStorage.getItem('28')?.split("") : []
      },
      29: {
        id: 29,
        title: "Leadership",
        taskIds: localStorage.getItem('29') ? localStorage.getItem('29')?.split("") : []
      },
      30: {
        id: 30,
        title: "Networking",
        taskIds: localStorage.getItem('30') ? localStorage.getItem('30')?.split("") : []
      }

    },
    columnOrder: ["column-1", 25, 26, 27, 28, 29, 30]
  }

  const [starter, setStarter] = useState(init);

  const [answer25, setAnswer25] = useState(localStorage.getItem('25'));
  const [answer26, setAnswer26] = useState(localStorage.getItem('26'));
  const [answer27, setAnswer27] = useState(localStorage.getItem('27'));
  const [answer28, setAnswer28] = useState(localStorage.getItem('28'));
  const [answer29, setAnswer29] = useState(localStorage.getItem('29'));
  const [answer30, setAnswer30] = useState(localStorage.getItem('30'));

  useEffect(() => {
    localStorage.setItem('25', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('26', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('27', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('28', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('29', Object.values(starter.columns)[4]?.taskIds);
    localStorage.setItem('30', Object.values(starter.columns)[5]?.taskIds);
  }, [starter]);

  useEffect(() => {
    setAnswer25(Object.values(starter.columns)[0]?.taskIds)
    setAnswer26(Object.values(starter.columns)[1]?.taskIds)
    setAnswer27(Object.values(starter.columns)[2]?.taskIds)
    setAnswer28(Object.values(starter.columns)[3]?.taskIds)
    setAnswer29(Object.values(starter.columns)[4]?.taskIds)
    setAnswer30(Object.values(starter.columns)[5]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer25 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '25': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer25])

  useEffect(() => {
    answer26 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '26': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer26])

  useEffect(() => {
    answer27 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '27': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer27])

  useEffect(() => {
    answer28 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '28': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer28])

  useEffect(() => {
    answer29 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '29': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  }, [answer29])

  useEffect(() => {
    answer30 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '30': (Object.values(starter.columns)[5]?.taskIds).join("") })))
  }, [answer30])


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
            <section className="dnd-cols" id={`q-25`}>
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

export default DND_25_30;