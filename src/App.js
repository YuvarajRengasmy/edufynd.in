import "./App.css";
import RoutePage from "./Route/RoutePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </>
  );
}

export default App;
