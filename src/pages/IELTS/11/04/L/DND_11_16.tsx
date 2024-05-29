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

const DND_11_16 = () => {

  const dispatch = useAppDispatch();
  const answersAll = useAppSelector((state: any) => state.user.answersAll)

  const init = {
    tasks: {
      "a": { id: "a", content: "A - was given by one person" },
      "b": { id: "b", content: "B - was recently publicised in the media" },
      "c": { id: "c", content: "C - includes some items given by members of the public" },
      "d": { id: "d", content: "D - includes some items given by the artists" },
      "e": { id: "e", content: "E - includes the most popular exhibits in the museum" },
      "f": { id: "f", content: "F - is the largest of its kind in the country" },
      "g": { id: "g", content: "G - has had some of its contents relocated" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c", "d", "e", "f", "g"].filter(x =>
          x !== localStorage.getItem('11') &&
          x !== localStorage.getItem('12') &&
          x !== localStorage.getItem('13') &&
          x !== localStorage.getItem('14') &&
          x !== localStorage.getItem('15') &&
          x !== localStorage.getItem('16') 
        )
      },
      11: {
        id: 11,
        title: "20th- and 21st-century paintings",
        taskIds: localStorage.getItem('11') ? localStorage.getItem('11')?.split("") : []
      },
      12: {
        id: 12,
        title: "19th-century paintings",
        taskIds: localStorage.getItem('12') ? localStorage.getItem('12')?.split("") : []
      },
      13: {
        id: 13,
        title: "Sculptures",
        taskIds: localStorage.getItem('13') ? localStorage.getItem('13')?.split("") : []
      },
      14: {
        id: 14,
        title: "‘Around the world’ exhibition",
        taskIds: localStorage.getItem('14') ? localStorage.getItem('14')?.split("") : []
      },
      15: {
        id: 15,
        title: "Coins",
        taskIds: localStorage.getItem('15') ? localStorage.getItem('15')?.split("") : []
      },
      16: {
        id: 16,
        title: "Porcelain and glass",
        taskIds: localStorage.getItem('16') ? localStorage.getItem('16')?.split("") : []
      }

    },
    columnOrder: ["column-1", 11, 12, 13, 14, 15, 16]
  }

  const [starter, setStarter] = useState(init);

  const [answer11, setAnswer11] = useState(localStorage.getItem('11'));
  const [answer12, setAnswer12] = useState(localStorage.getItem('12'));
  const [answer13, setAnswer13] = useState(localStorage.getItem('13'));
  const [answer14, setAnswer14] = useState(localStorage.getItem('14'));
  const [answer15, setAnswer15] = useState(localStorage.getItem('15'));
  const [answer16, setAnswer16] = useState(localStorage.getItem('16'));

  useEffect(() => {
    localStorage.setItem('11', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('12', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('13', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('14', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('15', Object.values(starter.columns)[4]?.taskIds);
    localStorage.setItem('16', Object.values(starter.columns)[5]?.taskIds);
  }, [starter]);

  useEffect(() => {
    setAnswer11(Object.values(starter.columns)[0]?.taskIds)
    setAnswer12(Object.values(starter.columns)[1]?.taskIds)
    setAnswer13(Object.values(starter.columns)[2]?.taskIds)
    setAnswer14(Object.values(starter.columns)[3]?.taskIds)
    setAnswer15(Object.values(starter.columns)[4]?.taskIds)
    setAnswer16(Object.values(starter.columns)[5]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer11 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '11': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer11])

  useEffect(() => {
    answer12 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '12': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer12])

  useEffect(() => {
    answer13 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '13': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer13])

  useEffect(() => {
    answer14 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '14': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer14])

  useEffect(() => {
    answer15 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '15': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  }, [answer15])

  useEffect(() => {
    answer16 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '16': (Object.values(starter.columns)[5]?.taskIds).join("") })))
  }, [answer16])


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
            <section className="dnd-cols" id={`q-11`}>
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

export default DND_11_16;