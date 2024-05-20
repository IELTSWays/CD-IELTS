import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setFlags } from '@/store/slices/user/userSlice'
// store

const Container = styled("div")`
  margin: 8px;
  border-radius: 2px;
  // border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  width: 220px;
  background: white;
`;
const Title = styled("p")`
  padding: 8px;
`;

const TaskList = styled("div")`
  padding: 6px;
  flex-grow: 0.5;
  text-align: -webkit-center;
  transition: background-color ease 0.2s;
  background-color: ${props =>
    props.isDraggingOver ? "#F1F2ED" : "#d3d3d3"};
  max-width: ${props =>
    props.isDraggingOver ? "260px" : "260px"};
`;
const Column = ({ tasks, column, index }) => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state) => state.user.flag)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState()
  const [id, setId] = useState()

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { [id]: !flag })))
  }

  return (
    <Draggable draggableId={column.id} index={index} type="column"
    >
      {provided => (
        <>
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Title className="dnd-text-before" id={`q-${column.id}`}>
              <strong className={`question-now  ${flag && 'active-flag'} ${currentQuestion == column.id && 'active'} `}> 
                {column.id} 
              </strong>
              &nbsp;
              {column.title}
            </Title>
            <Droppable droppableId={column.id} type="task" id="item">
              {(provided, snapshot) => (
                <TaskList
                  isDraggingOver={snapshot.isDraggingOver}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
            <div onClick={() => flagHandler()} onMouseOver={() => setId(column.id)} className={`dnd-flag flag active`}>
              {flags[column.id] ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>

          </Container>
        </>
      )}
    </Draggable>
  );
};

export default Column;