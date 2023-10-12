import { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { fullName } from "../utils/util";
import * as Yup from "yup";

import "./AddTask.css";

const d = new Date();

const initialTaskValues = {
  subject: "",
  description: "",
  deadline: d.toISOString().slice(0, 10),
  assignees: [],
  status: "incomplete",
};

const initialErrors = {
  subject: "",
  description: "",
  deadline: "",
  assignees: "",
  status: "",
};

const AddTask = (props) => {
  const { allUsers, tasks, addTask } = props;
  const [taskForm, setTaskForm] = useState(initialTaskValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const taskSchema = Yup.object().shape({
    subject: Yup.string()
      .min(5, "Lütfen açıklayıcı bir başlık giriniz")
      .required("Başlık alanı gereklidir!"),
    description: Yup.string()
      .min(10, "Lütfen task'i açıklayınız.")
      .required("Açıklama alanı gereklidir!"),
    deadline: Yup.string(),
    assignees: Yup.array()
      .min(1, "Lütfen görevi en az bir kişiye atayınız.")
      .max(5, "Bir görevi 5 kişiden fazlaya atayamazsınız!"),
  });

  useEffect(() => {
    taskSchema.isValid(taskForm).then((valid) => setIsValid(valid));
    console.log(taskForm);
  }, [taskForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(taskForm);
    setTaskForm({ ...initialTaskValues, assignees: [] });
  };

  const handleChange = (evt) => {
    const { checked, type } = evt.target;
    let { name, value } = evt.target;
    const updatedTaskForm = { ...taskForm };
    if (type === "checkbox") {
      if (checked) {
        updatedTaskForm.assignees.push(name);
      } else {
        const index = updatedTaskForm.assignees.indexOf(name);
        updatedTaskForm.assignees.splice(index, 1);
      }
      name = "assignees";
      value = updatedTaskForm.assignees;
    } else {
      updatedTaskForm[name] = value;
    }

    setTaskForm(updatedTaskForm);

    Yup.reach(taskSchema, name)
      .validate(value)
      .then((valid) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  return (
    <div className="add-task-container">
      <h3>AddTask Area</h3>
      <Form className="task-form" onSubmit={handleSubmit}>
        <FormGroup className="position-relative">
          <Label for="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Task başlığı"
            type="text"
            //valid={errors.subject ? false : true}
            data-cy="subject-input"
            value={taskForm.subject}
            onChange={handleChange}
          />
          <FormFeedback className={errors.subject ? "d-block" : null} tooltip>
            {errors.subject}
          </FormFeedback>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Task detayları"
            type="textarea"
            data-cy="description-input"
            //valid={errors.description ? false : true}
            value={taskForm.description}
            onChange={handleChange}
          />
          <FormFeedback
            className={errors.description ? "d-block" : null}
            tooltip
          >
            {errors.description}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            data-cy="deadline-input"
            value={taskForm.deadline}
            onChange={handleChange}
          />
        </FormGroup>
        <div className="assignee-container">
          {allUsers.map((user) => (
            <FormGroup>
              <Input
                id={fullName(user)}
                name={fullName(user)}
                type="checkbox"
                checked={taskForm.assignees.includes(fullName(user))}
                onChange={handleChange}
              />
              <Label for={fullName(user)}>{fullName(user)}</Label>
            </FormGroup>
          ))}
        </div>
        <FormGroup className="position-relative">
          <FormFeedback className={errors.assignees ? "d-block" : null} tooltip>
            {errors.assignees}
          </FormFeedback>
        </FormGroup>
        <Button disabled={!isValid} id="button-center" color="primary">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
