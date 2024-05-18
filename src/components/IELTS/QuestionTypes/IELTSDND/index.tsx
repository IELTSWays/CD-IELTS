// import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import Column from "./Column";

// // store
// import { useAppSelector, useAppDispatch } from '@/store/hooks';
// import { setAnswersAll } from '@/store/slices/user/userSlice';
// // store

// const Container = styled("div")`
//   display: flex;
// `;

// const index = ({ questionIds, tasks, taskIds }) => {
//   const dispatch = useAppDispatch();
//   const flags = useAppSelector((state) => state.user.flag);
//   const answersAll = useAppSelector((state) => state.user.answersAll);

//   const init = {
//     tasks,
//     columns: {
//       "column-1": {
//         id: "column-1",
//         title: "",
//         taskIds: taskIds.filter(
//           (x) => !questionIds.some((id) => x === localStorage.getItem(id))
//         )
//       },
//       ...Object.fromEntries(
//         questionIds.map((id) => [
//           id,
//           {
//             id: id,
//             title: `Question ${id}`,
//             taskIds: localStorage.getItem(id) ? localStorage.getItem(id).split("") : []
//           }
//         ])
//       )
//     },
//     columnOrder: ["column-1", ...questionIds]
//   };

//   const [starter, setStarter] = useState(init);
//   const [flag, setFlag] = useState(flags[questionIds[0]]);

//   const [answers, setAnswers] = useState(
//     questionIds.reduce((acc, id) => ({ ...acc, [id]: localStorage.getItem(id) }), {})
//   );

//   useEffect(() => {
//     questionIds.forEach((id) => {
//       localStorage.setItem(id, Object.values(starter.columns).find(col => col.id === id)?.taskIds.join(""));
//     });
//   }, [starter]);

//   useEffect(() => {
//     setAnswers(
//       questionIds.reduce((acc, id) => ({ ...acc, [id]: Object.values(starter.columns).find(col => col.id === id)?.taskIds }), {})
//     );
//   }, [starter]);

//   useEffect(() => {
//     questionIds.forEach((id) => {
//       answers[id] && dispatch(setAnswersAll({ ...answersAll, [id]: answers[id].join("") }));
//     });
//   }, [answers]);

//   const onDragEnd = ({ destination, source, draggableId }) => {
//     if (!destination) return;

//     const start = starter.columns[source.droppableId];
//     const end = starter.columns[destination.droppableId];

//     if (start === end) {
//       const taskIds = Array.from(start.taskIds);
//       taskIds.splice(source.index, 1);
//       taskIds.splice(destination.index, 0, draggableId);

//       const newColumn = {
//         ...start,
//         taskIds
//       };

//       setStarter({
//         ...starter,
//         columns: {
//           ...starter.columns,
//           [newColumn.id]: newColumn
//         }
//       });
//       return;
//     }

//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds
//     };

//     const endTaskIds = Array.from(end.taskIds);
//     endTaskIds.splice(destination.index, 0, draggableId);
//     const newEnd = {
//       ...end,
//       taskIds: endTaskIds
//     };

//     setStarter({
//       ...starter,
//       columns: {
//         [newStart.id]: newStart,
//         [newEnd.id]: newEnd
//       }
//     });
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="all-column" type="column" direction="horizontal">
//         {(provided, snapshot) => (
//           <Container
//             isDraggingOver={snapshot.isDraggingOver}
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             <section className="dnd-cols" id={`q-${questionIds[0]}`}>
//               {starter.columnOrder.slice(1).map((columnId, index) => {
//                 const column = starter.columns[columnId];
//                 const tasks = column.taskIds.map((taskId) => starter.tasks[taskId]);

//                 return (
//                   <Column
//                     index={index}
//                     key={column.id}
//                     column={column}
//                     tasks={tasks}
//                   />
//                 );
//               })}
//             </section>

//             <section className="dnd-options">
//               <div className="title"> Decisions </div>
//               {starter.columnOrder.slice(0, 1).map((columnId, index) => {
//                 const column = starter.columns[columnId];
//                 const tasks = column.taskIds.map((taskId) => starter.tasks[taskId]);

//                 return (
//                   <Column
//                     index={index}
//                     key={column.id}
//                     column={column}
//                     tasks={tasks}
//                   />
//                 );
//               })}
//             </section>

//             {provided.placeholder}
//           </Container>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default index

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

// store
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setAnswersAll } from '@/store/slices/user/userSlice';
// store

const Container = styled('div')`
display: flex;
`;

const index = ({ questionIds, tasks, taskIds }) => {
  const dispatch = useAppDispatch();
  const flags = useAppSelector((state) => state.user.flag);
  const answersAll = useAppSelector((state) => state.user.answersAll);

  // Initialize the columns based on the provided questionIds and taskIds
  const initColumns = questionIds.reduce((cols, id) => {
    cols[id] = {
      id,
      title: `Question ${id}`,
      taskIds: localStorage.getItem(id) ? localStorage.getItem(id).split('') : []
    };
    return cols;
  }, {});

  // Initialize the state with the provided tasks and the initialized columns
  const [starter, setStarter] = useState({
    tasks,
    columns: {
      'column-1': {
        id: 'column-1',
        title: '',
        taskIds: taskIds.filter(
          (x) => !questionIds.some((id) => x === localStorage.getItem(id))
        )
      },
      ...initColumns
    },
    columnOrder: ['column-1', ...questionIds]
  });

  // Function to handle the end of dragging
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = starter.columns[source.droppableId];
    const finish = starter.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...starter,
        columns: {
          ...starter.columns,
          [newColumn.id]: newColumn,
        },
      };

      setStarter(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...starter,
      columns: {
        ...starter.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setStarter(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {starter.columnOrder.map((columnId) => {
              const column = starter.columns[columnId];
              const tasks = column.taskIds.map((taskId) => starter.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default index;