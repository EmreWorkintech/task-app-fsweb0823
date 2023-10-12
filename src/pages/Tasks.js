import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

import "./Tasks.css";

const Tasks = (props) => {
  const { tasks, allUsers, addTask, changeTaskStatus } = props;

  return (
    <div className="tasks-container">
      <AddTask allUsers={allUsers} addTask={addTask} />
      <TaskList
        title="Active Tasks"
        type="incomplete"
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
      />
      <TaskList
        title="Completed Tasks"
        type="completed"
        tasks={tasks}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
};

export default Tasks;
