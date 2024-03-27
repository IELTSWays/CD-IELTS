import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import './style.css';

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
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
      "a": { id: "a", content: "A - use visuals" },
      "b": { id: "b", content: "B - keep it short" },
      "c": { id: "c", content: "C - involve other students" },
      "d": { id: "d", content: "D - check the information is accurate" },
      "e": { id: "e", content: "E - provide a handout" },
      "f": { id: "f", content: "F - focus on one example" },
      "g": { id: "g", content: "G - do online research" }
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["a", "b", "c", "d", "e", "f", "g"].filter(x =>
          x !== localStorage.getItem('26') &&
          x !== localStorage.getItem('27') &&
          x !== localStorage.getItem('28') &&
          x !== localStorage.getItem('29') &&
          x !== localStorage.getItem('30')
        )
      },
      26: {
        id: 26,
        title: "Historical background",
        taskIds: localStorage.getItem('26') ? localStorage.getItem('26')?.split("") : []
      },
      27: {
        id: 27,
        title: "Geographical factors",
        taskIds: localStorage.getItem('27') ? localStorage.getItem('27')?.split("") : []
      },
      28: {
        id: 28,
        title: "Past mistakes",
        taskIds: localStorage.getItem('28') ? localStorage.getItem('28')?.split("") : []
      },
      29: {
        id: 29,
        title: "Future risks",
        taskIds: localStorage.getItem('29') ? localStorage.getItem('29')?.split("") : []
      },
      30: {
        id: 30,
        title: "International implications",
        taskIds: localStorage.getItem('30') ? localStorage.getItem('30')?.split("") : []
      }

    },
    columnOrder: ["column-1", 26, 27, 28, 29, 30]
  }

  const [starter, setStarter] = useState(init);
  const [flag, setFlag] = useState(flags['26'])

  const [answer26, setAnswer26] = useState(localStorage.getItem('26'));
  const [answer27, setAnswer27] = useState(localStorage.getItem('27'));
  const [answer28, setAnswer28] = useState(localStorage.getItem('28'));
  const [answer29, setAnswer29] = useState(localStorage.getItem('29'));
  const [answer30, setAnswer30] = useState(localStorage.getItem('30'));

  useEffect(() => {
    localStorage.setItem('26', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('27', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('28', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('29', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('30', Object.values(starter.columns)[4]?.taskIds);
    }, [starter]);

  useEffect(() => {
    setAnswer26(Object.values(starter.columns)[0]?.taskIds)
    setAnswer27(Object.values(starter.columns)[1]?.taskIds)
    setAnswer28(Object.values(starter.columns)[2]?.taskIds)
    setAnswer29(Object.values(starter.columns)[3]?.taskIds)
    setAnswer30(Object.values(starter.columns)[4]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer26 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '26': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer26])

  useEffect(() => {
    answer27 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '27': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer27])

  useEffect(() => {
    answer28 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '28': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer28])

  useEffect(() => {
    answer29 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '29': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer29])

  useEffect(() => {
    answer30 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '30': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  }, [answer30])  

  console.log('answersAll', answersAll)

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
  };

  const qn = ["26", "27", "28", "29", "30"]

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-column" type="column" direction="horizontal">
        {(provided, snapshot) => (
          <Container
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <section className="dnd-cols" id={`q-26`}> 
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