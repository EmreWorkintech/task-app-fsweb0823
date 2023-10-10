import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id, name, surname } = useParams();
  return (
    <>
      <div className="userlist-container">name: {name}</div>
      <div className="userlist-container">surname: {surname}</div>
      <div className="userlist-container">id: {id}</div>
    </>
  );
};

export default UserPage;
