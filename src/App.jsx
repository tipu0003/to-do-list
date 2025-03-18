// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DailyTasks from "./pages/DailyTasks";
import LongTermTasks from "./pages/LongTermTasks";

const App = () => {
  return (
    <Router basename="/to-do-list">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/long-term-tasks" element={<LongTermTasks />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;