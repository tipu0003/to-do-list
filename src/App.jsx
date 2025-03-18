// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DailyTasks from "./pages/DailyTasks";
import LongTermTasks from "./pages/LongTermTasks";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/long-term-tasks" element={<LongTermTasks />} />
      </Routes>
    </Router>
  );
};

export default App;