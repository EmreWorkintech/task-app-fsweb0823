import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";
import { getStatusTexts } from "../utils/util";

const Task = (props) => {
  const { task, changeTaskStatus } = props;

  const statusTexts = getStatusTexts(task.status); //{texttoShow, textToSet};

  const handleStatusChange = () => {
    changeTaskStatus(task, statusTexts.textToSet);
  };

  return (
    <div className="task-card">
      <Card data-cy={`${task.status}-task`} className="my-2">
        <CardHeader>{task.deadline}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{task.subject}</CardTitle>
          <CardText>{task.description}</CardText>
          <Button
            data-cy="status-button"
            color={statusTexts.color}
            onClick={handleStatusChange}
          >
            {statusTexts.textToShow}
          </Button>
        </CardBody>
        <CardFooter>{task.assignees.join(", ")}</CardFooter>
      </Card>
    </div>
  );
};

export default Task;
