import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import PlusIcon from "../assets/icons/Plus.svg"; // Importing icons
import WPlusIcon from "../assets/icons/WPlus.svg"; // Importing icons
import { FaSearch } from "react-icons/fa";

// Styled components for layout and styling
const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  background: #fff;
  z-index: 0;

  @media (min-width: 768px) {
    margin-left: 238px;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ color }) =>
    color === "white"
      ? "#ffffff"
      : "#171717"}; /* Apply white or blue background */
  color: ${({ color }) =>
    color === "white" ? "#000" : "#fff"}; /* Apply text color */
  border: ${({ color }) =>
    color === "white"
      ? "1px solid #000"
      : "none"}; /* Add border for white button */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ color }) =>
      color === "white" ? "#f0f0f0" : "#00000"}; /* Hover effect */
  }
`;

const EmployeeListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative; /* For positioning the search bar */
`;

const EmployeeListHeading = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Heading = styled.p`
  font-weight: bold;
`;

const EmployeeCount = styled.p``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const TableHeader = styled.thead`
  background-color: #f9f9f9;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  color: #333;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  border-bottom: 2px solid #e0e0e0;
`;

// Styled component for the Search Bar
const SearchBarContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  border-radius: 7px;
  width: 250px;
  border: 1px solid rgb(212, 212, 212);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const SearchIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding-top: 3px;
  color: #777;
`;

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const employees = [
    {
      id: "11D001",
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      joinDate: "4/15/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: "11D002",
      name: "Tesla",
      email: "Rshahull@Dotcod.in",
      joinDate: "1/2/23",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: "11D003",
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "9/4/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: "11D004",
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "6/3/22",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: "11D005",
      name: "Disney",
      email: "disney@Dotcod.in",
      joinDate: "12/2/22",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: "11D006",
      name: "Chevy",
      email: "chevy@Dotcod.in",
      joinDate: "4/19/23",
      designation: "Software Engineer",
      status: "Probation",
    },
  ];

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <EmployeeContainer>
      <Sidebar /> {/* Sidebar */}
      <MainContent>
        <Navbar /> {/* Navbar */}
        <ContentWrapper>
          <HeaderSection>
            <h1>Employee</h1>
            <ButtonContainer>
              <ActionButton color="white">
                <img src={PlusIcon} alt="Import Excel" width="20" /> Import
                Excel
              </ActionButton>
              <ActionButton color="black">
                <img src={WPlusIcon} alt="Add Employee" width="20" /> Add
                Employee
              </ActionButton>
            </ButtonContainer>
          </HeaderSection>
          <EmployeeListContainer>
            <EmployeeListHeading>
              <Heading>Employee</Heading>
              <EmployeeCount>{filteredEmployees.length}</EmployeeCount>
            </EmployeeListHeading>
            {/* Search bar with icon in the top-right corner */}
            <SearchBarContainer>
              <SearchIconWrapper>
                <FaSearch />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Search Employee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBarContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>ID</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Join Date</TableHeaderCell>
                  <TableHeaderCell>Designation</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.joinDate}</TableCell>
                    <TableCell>{employee.designation}</TableCell>
                    <TableCell>{employee.status}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </EmployeeListContainer>
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default EmployeeList;
