import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import EmployeeList from "./components/Employeelist";
import Attendance from "./components/Attendance"; // Import Attendance component
import LeaveRequest from "./components/LeaveRequest"; // Import LeaveRequest component
import Attendances from "./components/Attendances"; // Import Attendances component
import AddEmployee from "./components/Add-Employee";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Employee layout route */}
        <Route path="/employee" element={<Employee />} />

        {/* Direct route for Employee List on a new page */}
        <Route path="/employee/employee-list" element={<EmployeeList />} />

        <Route path="/employee/employee-list/add-employee" element={<AddEmployee/>} />

        {/* Attendance layout route */}
        <Route path="/attendance" element={<Attendance />}/>
          {/* Nested routes for Attendance */}
          <Route path="/attendance/leave-request" element={<LeaveRequest />} />
          <Route path="/attendance/attendances" element={<Attendances />} />
       
      </Routes>
    </Router>
  );
}

export default App;
