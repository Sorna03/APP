import Message from "./message";
import "./App.css";
import Home from "./components/Home";
import Offer from "./components/Offer";
import Button from "./components/Button";
function App() {
  return (
    <>
      <div>
        <Message />
        <Home />
        <Offer />
        <Button />
      </div>
    </>
  );
}

export default App;
