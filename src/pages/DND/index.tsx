import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import './style.css';

const Container = styled("div")`
  display: flex;
  background-color: ${props => (props?.isDraggingOver ? "#639ee2" : "inherit")};`;

const init = {
  tasks: {
    "A": { id: "A", content: "I am task A" },
    "B": { id: "B", content: "I am task B" },
    "C": { id: "C", content: "I am task C" },
    "D": { id: "D", content: "I am task D" },
    "E": { id: "E", content: "I am task E" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "ALL",
      taskIds: ["A", "B", "C", "D", "E"].filter(x => x !== "A" && x !== "E")
    },
    27: {
      id: 27,
      title: "A",
      taskIds: []
    },
    28: {
      id: 28,
      title: "B",
      taskIds: []
    },
    29: {
      id: 29,
      title: "C",
      taskIds: []
    }

  },
  columnOrder: ["column-1", 27, 28, 29]
}

const DND = () => {

  const [starter, setStarter] = useState(init);

  console.log(Object.values(starter.columns)[0]);

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) return;
    if (
      Object.values(starter.columns).filter(obj => obj.id === destination.droppableId)[0].taskIds.length == 1 && destination?.droppableId !== 'column-1'
    ) return
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
    // console.log("new starter", starter);
    // console.log(destination, source, draggableId);
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
            {starter.columnOrder.map((columnId, index) => {
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
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DND;