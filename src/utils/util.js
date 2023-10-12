export const fullName = (user) => {
  return `${user.first_name} ${user.last_name}`;
};

export const getTasksWithStatus = (tasks, status) => {
  return tasks.filter((task) => task.status === status);
};

export const getStatusTexts = (status) => {
  const textToShow = status === "incomplete" ? "Complete" : "Set Incomplete";
  const textToSet = status === "incomplete" ? "completed" : "incomplete";
  const color = status === "incomplete" ? "primary" : "danger";

  return { textToShow, textToSet, color };

  /*
  return {
            textToShow: textToShow,
            textToSet: textToSet
          }
  */
};
