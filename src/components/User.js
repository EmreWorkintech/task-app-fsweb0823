import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const User = ({ user }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={user.avatar} />
      <CardBody>
        <CardTitle tag="h5">{user.first_name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {user.email}
        </CardSubtitle>
        <Button>Details</Button>
      </CardBody>
    </Card>
  );
};

export default User;
