import { Switch, Route } from "react-router-dom";
import UserList from "../pages/UserList";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import UserPage from "../pages/UserPage";

const Main = (props) => {
  const { allUsers, handleLogin, addTask, tasks, changeTaskStatus } = props;

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/login">
          {" "}
          {/* emre.com/ -> girer emre.com/task -> girmez(exact dedik)*/}
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/tasks">
          {" "}
          {/* emre.com/tasks/1/add -> girer  emre.com/add/tasks -> girmez!!!*/}
          <Tasks
            allUsers={allUsers}
            addTask={addTask}
            tasks={tasks}
            changeTaskStatus={changeTaskStatus}
          />
        </Route>
        <Route exact path="/users">
          <UserList allUsers={allUsers} />
        </Route>
        <Route path="/users/:id/:name/:surname">
          {/* emre.com/users/1/emre/sahiner  emre.com/users/elma/emenike/sahmerdan !!!*/}
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
