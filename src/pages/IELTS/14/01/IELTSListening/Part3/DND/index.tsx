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
      "A": { id: "A", content: "use visuals" },
      "B": { id: "B", content: "keep it short" },
      "C": { id: "C", content: "involve other students" },
      "D": { id: "D", content: "check the information is accurate" },
      "E": { id: "E", content: "provide a handout" },
      "F": { id: "F", content: "focus on one example" },
      "G": { id: "G", content: "do online research" }
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: ["A", "B", "C", "D", "E", "F", "G"].filter(x =>
          x !== localStorage.getItem('00026') &&
          x !== localStorage.getItem('00027') &&
          x !== localStorage.getItem('00028') &&
          x !== localStorage.getItem('00029') &&
          x !== localStorage.getItem('00030')
        )
      },
      26: {
        id: 26,
        title: "Historical background",
        taskIds: localStorage.getItem('00026') ? localStorage.getItem('00026')?.split("") : []
      },
      27: {
        id: 27,
        title: "Geographical factors",
        taskIds: localStorage.getItem('00027') ? localStorage.getItem('00027')?.split("") : []
      },
      28: {
        id: 28,
        title: "Past mistakes",
        taskIds: localStorage.getItem('00028') ? localStorage.getItem('00028')?.split("") : []
      },
      29: {
        id: 29,
        title: "Future risks",
        taskIds: localStorage.getItem('00029') ? localStorage.getItem('00029')?.split("") : []
      },
      30: {
        id: 30,
        title: "International implications",
        taskIds: localStorage.getItem('00030') ? localStorage.getItem('00030')?.split("") : []
      }

    },
    columnOrder: ["column-1", 26, 27, 28, 29, 30]
  }

  const [starter, setStarter] = useState(init);
  const [flag, setFlag] = useState(flags['26'])

  const [answer26, setAnswer26] = useState(localStorage.getItem('00026'));
  const [answer27, setAnswer27] = useState(localStorage.getItem('00027'));
  const [answer28, setAnswer28] = useState(localStorage.getItem('00028'));
  const [answer29, setAnswer29] = useState(localStorage.getItem('00029'));
  const [answer30, setAnswer30] = useState(localStorage.getItem('00030'));

  useEffect(() => {
    localStorage.setItem('00026', Object.values(starter.columns)[0]?.taskIds);
    localStorage.setItem('00027', Object.values(starter.columns)[1]?.taskIds);
    localStorage.setItem('00028', Object.values(starter.columns)[2]?.taskIds);
    localStorage.setItem('00029', Object.values(starter.columns)[3]?.taskIds);
    localStorage.setItem('00030', Object.values(starter.columns)[4]?.taskIds);
    }, [starter]);

  // localStorage.setItem('00026', Object.values(starter.columns)[0]?.taskIds)
  // localStorage.setItem('00027', Object.values(starter.columns)[1]?.taskIds)
  // localStorage.setItem('00028', Object.values(starter.columns)[2]?.taskIds)
  // localStorage.setItem('00029', Object.values(starter.columns)[3]?.taskIds)
  // localStorage.setItem('00030', Object.values(starter.columns)[4]?.taskIds)

  useEffect(() => {
    setAnswer26(Object.values(starter.columns)[0]?.taskIds)
    setAnswer27(Object.values(starter.columns)[1]?.taskIds)
    setAnswer28(Object.values(starter.columns)[2]?.taskIds)
    setAnswer29(Object.values(starter.columns)[3]?.taskIds)
    setAnswer30(Object.values(starter.columns)[4]?.taskIds)
  }, [starter])

  useEffect(() => {
    answer26 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '00026': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  }, [answer26])

  useEffect(() => {
    answer27 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '00027': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  }, [answer27])

  useEffect(() => {
    answer28 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '00028': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  }, [answer28])

  useEffect(() => {
    answer29 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '00029': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  }, [answer29])

  useEffect(() => {
    answer30 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '00030': (Object.values(starter.columns)[4]?.taskIds).join("") })))
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