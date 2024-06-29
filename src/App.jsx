
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h1 className="my-2 text-center display-5">Redux Todo </h1>
        <Form />
        <ListGroup />
      </div>
    </>
  );
};

export default App;
