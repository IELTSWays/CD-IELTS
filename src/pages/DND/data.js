export default {
  tasks: {
    "task-1": { id: "task-1", content: "I am task 1" },
    "task-2": { id: "task-2", content: "I am task 2" },
    "task-3": { id: "task-3", content: "I am task 3" },
    "task-4": { id: "task-4", content: "I am task 4" },
    "task-5": { id: "task-5", content: "I am task 5" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "ALL",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"]
    },
    "column-2": {
      id: "column-2",
      title: "A",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "B",
      taskIds: []
    },
    "column-4": {
      id: "column-4",
      title: "C",
      taskIds: []
    }

  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};
