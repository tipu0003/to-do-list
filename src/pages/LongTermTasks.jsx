// src/pages/LongTermTasks.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LongTermTasks = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("longTermTasks")) || [];
  });
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  useEffect(() => {
    localStorage.setItem("longTermTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, details: taskDetails, completed: false }]);
      setTaskName("");
      setTaskDetails("");
    }
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <motion.div className="container mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-primary">Long-Term Tasks</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Task Details"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        <motion.button className="btn btn-primary mt-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addTask}
        >
          Add Task
        </motion.button>
      </div>
      <h4>Pending Tasks</h4>
      <ul className="list-group">
        {tasks.map((task, index) =>
          !task.completed ? (
            <motion.li className="list-group-item d-flex justify-content-between"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {task.name} - {task.details}
              <div>
                <button className="btn btn-success btn-sm me-2" onClick={() => toggleComplete(index)}>Mark Done</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </motion.li>
          ) : null
        )}
      </ul>
      <h4 className="mt-4">Completed Tasks</h4>
      <ul className="list-group">
        {tasks.map((task, index) =>
          task.completed ? <li className="list-group-item" key={index}>{task.name}</li> : null
        )}
      </ul>
    </motion.div>
  );
};

export default LongTermTasks;
