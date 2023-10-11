import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./App.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!loggedInUser.name) {
      history.push("/login");
    }
  }, []); //DidMount

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=20")
      .then((res) => {
        setAllUsers(res.data.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, []);

  const handleLogin = (credentials) => {
    //login credentials check in allUsers
    //setLoggedInUser

    const user = allUsers.find(
      (user) =>
        user.first_name === credentials.password &&
        user.email === credentials.email
    );

    if (user) {
      setLoggedInUser(user);
      history.push("/tasks");
    } else {
      console.error("User login", credentials);
    }
  };

  const handleLogout = () => {
    setLoggedInUser({});
    history.push("/login");
  };

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
  };
  //template
  return (
    <div className="App">
      <Header user={loggedInUser} handleLogout={handleLogout} />
      <Main
        handleLogin={handleLogin}
        tasks={tasks}
        allUsers={allUsers}
        addTask={addTask}
      />
      <Footer />
    </div>
  );
}

export default App;
