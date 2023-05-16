import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/todo" element={<Todo />}>
            Todo
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
