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

const DND = ({ listOptions, columnsData, question }) => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const excludedIds = columnsData.map(column => column.id);

  const init = {
    listOptions: listOptions,
    columns: {
      "column-1": {
        id: "column-1",
        title: "",
        taskIds: Object.keys(listOptions).filter(x =>
          !excludedIds.includes(parseInt(x))
        )
      },
      ...columnsData.reduce((acc, column) => {
        acc[column.id] = {
          id: column.id,
          title: column.title,
          taskIds: localStorage.getItem(column.id.toString()) ? localStorage.getItem(column.id.toString())?.split("") : []
        };
        return acc;
      }, {})
    },
    columnOrder: ["column-1", ...columnsData.map(column => column.id)]
  }

  const [starter, setStarter] = useState(init);
  const [flag, setFlag] = useState(flags[columnsData[0].id])

  useEffect(() => {
    Object.entries(starter.columns).forEach(([columnId, column]) => {
      if (!isNaN(columnId) && parseInt(columnId) >= columnsData[0].id && parseInt(columnId) <= columnsData[columnsData.length - 1].id) {
        localStorage.setItem(columnId, column.taskIds.join(''));
      }
    });
  }, [starter]);

  // [======================================================================== STATE ]
  // const [answer26, setAnswer26] = useState(localStorage.getItem('26'));
  // const [answer27, setAnswer27] = useState(localStorage.getItem('27'));
  // const [answer28, setAnswer28] = useState(localStorage.getItem('28'));
  // const [answer29, setAnswer29] = useState(localStorage.getItem('29'));
  // const [answer30, setAnswer30] = useState(localStorage.getItem('30'));

  // useEffect(() => {
  //   setAnswer26(Object.values(starter.columns)[0]?.taskIds)
  //   setAnswer27(Object.values(starter.columns)[1]?.taskIds)
  //   setAnswer28(Object.values(starter.columns)[2]?.taskIds)
  //   setAnswer29(Object.values(starter.columns)[3]?.taskIds)
  //   setAnswer30(Object.values(starter.columns)[4]?.taskIds)
  // }, [starter])

  // useEffect(() => {
  //   answer26 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '26': (Object.values(starter.columns)[0]?.taskIds).join("") })))
  // }, [answer26])

  // useEffect(() => {
  //   answer27 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '27': (Object.values(starter.columns)[1]?.taskIds).join("") })))
  // }, [answer27])

  // useEffect(() => {
  //   answer28 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '28': (Object.values(starter.columns)[2]?.taskIds).join("") })))
  // }, [answer28])

  // useEffect(() => {
  //   answer29 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '29': (Object.values(starter.columns)[3]?.taskIds).join("") })))
  // }, [answer29])

  // useEffect(() => {
  //   answer30 && dispatch(setAnswersAll(Object.assign({}, answersAll, { '30': (Object.values(starter.columns)[4]?.taskIds).join("") })))
  // }, [answer30])


  // [======================================================================== STATE ]

  const idsArray = columnsData.map(column => String(column.id));

  const [answers, setAnswers] = useState(() => {
    return idsArray.reduce((acc, key) => {
      acc[key] = localStorage.getItem(key) || '';
      return acc;
    }, {});
  });

  useEffect(() => {
    const newAnswers = Object.keys(starter.columns).reduce((acc, columnId) => {
      const taskIds = starter.columns[columnId]?.taskIds || [];
      acc[columnId] = taskIds.join('');
      return acc;
    }, {});

    setAnswers(newAnswers);
  }, [starter]);

  useEffect(() => {
    Object.entries(answers).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    dispatch(setAnswersAll({ ...answers }));
  }, [answers]);


  console.log('[answersAll-DRAG]', answersAll)

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) return;

    const isDestinationDroppable = (obj: any) => obj.id === destination.droppableId;

    const destinationHasItems =
      Object.values(starter.columns).filter(isDestinationDroppable)?.[0]?.taskIds?.length ?? 0;

    if (destination?.droppableId !== "column-1" && destinationHasItems) {
      const sourceItem = starter.columns[source.droppableId].taskIds[source.index];

      const destinationItem = starter.columns[destination.droppableId].taskIds[destination.index];

      const destinationColumn = starter.columns[destination.droppableId];

      const updatedDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationColumn.taskIds.map((taskId) =>
          taskId === destinationItem ? sourceItem : taskId
        ),
      };

      let updatedStarterData = {
        ...starter,
        columns: {
          ...starter.columns,
          [destination.droppableId]: updatedDestinationColumn,
        },
      };

      const sourceColumn = starter.columns[source.droppableId];

      const updatedSourceColumn = {
        ...sourceColumn,
        taskIds: sourceColumn.taskIds.filter((taskId) => taskId !== sourceItem),
      };

      updatedSourceColumn.taskIds.splice(source.index, 0, destinationItem);

      updatedStarterData = {
        ...updatedStarterData,
        columns: {
          ...updatedStarterData.columns,
          [source.droppableId]: updatedSourceColumn,
        },
      };

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
    <>
      <strong> {columnsData[0].id} - {columnsData[columnsData.length - 1].id} </strong>{question}
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
                  const listOptions = column.taskIds.map(taskId => starter.listOptions[taskId]);

                  return (
                    <Column
                      index={index}
                      key={column.id}
                      column={column}
                      tasks={listOptions}
                    />
                  );
                })}
              </section>

              <section className="dnd-options">
                <div className="title"> Decisions </div>
                {(starter.columnOrder).slice(0, 1)?.map((columnId, index) => {
                  const column = starter.columns[columnId];
                  const listOptions = column.taskIds.map(taskId => starter.listOptions[taskId]);

                  return (
                    <Column
                      index={index}
                      key={column.id}
                      column={column}
                      tasks={listOptions}
                    />
                  );
                })}
              </section>

              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DND;