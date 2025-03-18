// src/pages/Home.jsx
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="card p-4 shadow-lg">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <motion.img
              src={profilePic}
              alt="Dr. Rupesh Kumar Tipu"
              className="img-fluid rounded-circle"
              width={200}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-primary">Rupesh Kumar Tipu</h2>
            <p><strong>Assistant Professor, K. R. Mangalam University</strong></p>
            <p>With 11+ years of teaching experience and expertise in Structural Engineering, Machine Learning, Deep Learning, and Web Development.</p>
            <p>Email: <a href="mailto:tipu0003@gmail.com">tipu0003@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dr-rupesh-kumar-a60096270/" target="_blank" rel="noopener noreferrer">Profile</a></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;