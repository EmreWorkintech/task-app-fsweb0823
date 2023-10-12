import { getTasksWithStatus } from "../utils/util";
import Task from "./Task";

const TaskList = (props) => {
  const { title, tasks, type, changeTaskStatus } = props;

  const tasksToShow = getTasksWithStatus(tasks, type);

  return (
    <>
      <div className="tasklist-area">
        <h3>{title}</h3>
        <div className="tasklist-container">
          {tasksToShow.map((task) => (
            <Task task={task} changeTaskStatus={changeTaskStatus} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
