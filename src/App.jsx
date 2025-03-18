import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DailyTasks from "./pages/DailyTasks";
import LongTermTasks from "./pages/LongTermTasks";

const App = () => {
  return (
    <Router basename="/to-do-list">  {/* Ensures correct GitHub Pages routing */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/long-term-tasks" element={<LongTermTasks />} />
        {/* Redirect unknown routes to Home Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
