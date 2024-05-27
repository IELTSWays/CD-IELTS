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

const DND_23_27 = () => {

  const dispatch = useAppDispatch();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {
    tasks: {
      "a": { id: "a", content: "A - They both expected this to be more traditional." },
      "b": { id: "b", content: "B - They both thought this was original." },
      "c": { id: "c", content: "C - They agree this created the right atmosphere." },
      "d": { id: "d", content: "D - They agree this was a major strength." },
      "e": { id: "e", content: "E - They were both disappointed by this." },
      "f": { id: "f", content: "F - They disagree about why this was an issue." },
      "g": { id: "g", content: "G - They disagree about how this could be improved." },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c", "d", "e", "f", "g"].filter(x =>
          x !== localStorage.getItem('23') &&
          x !== localStorage.getItem('24') &&
          x !== localStorage.getItem('25') &&
          x !== localStorage.getItem('26') &&
          x !== localStorage.getItem('27')
        )
      },
      23: {
        id: 23,
        title: "the set",
        taskIds: localStorage.getItem('23') ? localStorage.getItem('23')?.split("") : []
      },
      24: {
        id: 24,
        title: "the lighting ",
        taskIds: localStorage.getItem('24') ? localStorage.getItem('24')?.split("") : []
      },
      25: {
        id: 25,
        title: "the costume design",
        taskIds: localStorage.getItem('25') ? localStorage.getItem('25')?.split("") : []
      },
      26: {
        id: 26,
        title: "the music",
        taskIds: localStorage.getItem('26') ? localStorage.getItem('26')?.split("") : []
      },
      27: {
        id: 27,
        title: "the actors’ delivery",
        taskIds: localStorage.getItem('27') ? localStorage.getItem('27')?.split("") : []
      },
    },
    columnOrder: ["column-1", 23, 24, 25, 26, 27]
  }

  const [starter, setStarter] = useState(init);

  const [answer23, setAnswer23] = useState(localStorage.getItem('23'));
  const [answer24, setAnswer24] = useState(localStorage.getItem('24'));
  const [answer25, setAnswer25] = useState(localStorage.getItem('25'));
  const [answer26, setAnswer26] = useState(localStorage.getItem('26'));
  const [answer27, setAnswer27] = useState(localStorage.getItem('27'));

  useEffect(() => {
    localStorage.setItem('23', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('24', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('25', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('26', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('27', Object.values(starter.columns)[4]?.taskIds);
  }, [starter]);

  useEffect(() => {
    setAnswer23(Object.values(starter.columns)[0]?.taskIds)
    setAnswer24(Object.values(starter.columns)[1]?.taskIds)
    setAnswer25(Object.values(starter.columns)[2]?.taskIds)
    setAnswer26(Object.values(starter.columns)[3]?.taskIds)
    setAnswer27(Object.values(starter.columns)[4]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer23 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '23': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer23])

  useEffect(() => {
    answer24 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '24': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer24])

  useEffect(() => {
    answer25 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '25': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer25])

  useEffect(() => {
    answer26 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '26': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer26])

  useEffect(() => {
    answer27 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '27': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  }, [answer27])

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
            <section className="dnd-cols" id={`q-23`}>
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

export default DND_23_27;