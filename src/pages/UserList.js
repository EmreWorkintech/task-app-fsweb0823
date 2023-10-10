import User from "../components/User";
import "./UserList.css";

const UserList = (props) => {
  const { allUsers } = props;

  return (
    <>
      <h2>USERS</h2>
      <div className="users-container">
        {allUsers.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

export default UserList;
