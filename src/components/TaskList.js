import Task from "./Task";

const TaskList = (props) => {
  const { title, tasks, type } = props;

  return (
    <>
      <div className="tasklist-area">
        <h3>{title}</h3>
        <div className="tasklist-container">
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
