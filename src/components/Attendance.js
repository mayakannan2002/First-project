import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import LeaveRequestIcon from "../assets/icons/leave_request.png"; // Leave request icon
import AttendancesIcon from "../assets/icons/attendances.png"; // Attendances icon

// Main container for the Attendance section
const AttendanceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 238px;
  background: #fff;
  z-index: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  width: 20%;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Attendance = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to Leave Request page when the "Leave Request" card is clicked
  const handleLeaveRequest = () => {
    navigate("/attendance/leave-request");
  };

  // Navigate to Attendances page when the "Attendances" card is clicked
  const handleAttendances = () => {
    navigate("/attendance/attendances");
  };

  return (
    <AttendanceContainer>
      <Sidebar /> {/* Sidebar component */}
      <MainContent>
        <Navbar /> {/* Navbar component */}
        <ContentWrapper>
          <h1>Attendance</h1>
          {/* Conditionally render the CardContainer only if not on the leave-request or attendances page */}
          {location.pathname === "/attendance" && (
            <CardContainer>
              {/* Card to navigate to Leave Request */}
              <Card onClick={handleLeaveRequest}>
                <CardIcon src={LeaveRequestIcon} alt="Leave Request" />
                <CardTitle>Leave Request</CardTitle>
              </Card>
              {/* Card to navigate to Attendances */}
              <Card onClick={handleAttendances}>
                <CardIcon src={AttendancesIcon} alt="Attendances" />
                <CardTitle>Attendances</CardTitle>
              </Card>
            </CardContainer>
          )}
          {/* Outlet renders nested routes like LeaveRequest and Attendances */}
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </AttendanceContainer>
  );
};

export default Attendance;
