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

const DND_16_20 = () => {

  const dispatch = useAppDispatch();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {
    tasks: {
      "a": { id: "a", content: "A - has limited availability" },
      "b": { id: "b", content: "B - is no longer available" },
      "c": { id: "c", content: "C - is for over 8s only" },
      "d": { id: "d", content: "D - requires help from parents" },
      "e": { id: "e", content: "E - involves an additional fee" },
      "f": { id: "f", content: "F - is a new activity" },
      "g": { id: "g", content: "G - was requested by children" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c", "d", "e", "f", "g"].filter(x =>
          x !== localStorage.getItem('16') &&
          x !== localStorage.getItem('17') &&
          x !== localStorage.getItem('18') &&
          x !== localStorage.getItem('19') &&
          x !== localStorage.getItem('20')
        )
      },
      16: {
        id: 16,
        title: "Spanish",
        taskIds: localStorage.getItem('16') ? localStorage.getItem('16')?.split("") : []
      },
      17: {
        id: 17,
        title: "Music",
        taskIds: localStorage.getItem('17') ? localStorage.getItem('17')?.split("") : []
      },
      18: {
        id: 18,
        title: "Painting",
        taskIds: localStorage.getItem('18') ? localStorage.getItem('18')?.split("") : []
      },
      19: {
        id: 19,
        title: "Yoga",
        taskIds: localStorage.getItem('19') ? localStorage.getItem('19')?.split("") : []
      },
      20: {
        id: 20,
        title: "Cooking",
        taskIds: localStorage.getItem('20') ? localStorage.getItem('20')?.split("") : []
      },
    },
    columnOrder: ["column-1", 16, 17, 18, 19, 20]
  }

  const [starter, setStarter] = useState(init);

  const [answer16, setAnswer16] = useState(localStorage.getItem('16'));
  const [answer17, setAnswer17] = useState(localStorage.getItem('17'));
  const [answer18, setAnswer18] = useState(localStorage.getItem('18'));
  const [answer19, setAnswer19] = useState(localStorage.getItem('19'));
  const [answer20, setAnswer20] = useState(localStorage.getItem('20'));

  useEffect(() => {
    localStorage.setItem('16', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('17', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('18', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('19', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('20', Object.values(starter.columns)[4]?.taskIds);
  }, [starter]);

  useEffect(() => {
    setAnswer16(Object.values(starter.columns)[0]?.taskIds)
    setAnswer17(Object.values(starter.columns)[1]?.taskIds)
    setAnswer18(Object.values(starter.columns)[2]?.taskIds)
    setAnswer19(Object.values(starter.columns)[3]?.taskIds)
    setAnswer20(Object.values(starter.columns)[4]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer16 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '16': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer16])

  useEffect(() => {
    answer17 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '17': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer17])

  useEffect(() => {
    answer18 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '18': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer18])

  useEffect(() => {
    answer19 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '19': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer19])

  useEffect(() => {
    answer20 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '20': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  }, [answer20])

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
            <section className="dnd-cols" id={`q-16`}>
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

export default DND_16_20;