import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PlusIcon from "../assets/icons/Plus.svg";
import WPlusIcon from "../assets/icons/WPlus.svg";
import { useNavigate } from "react-router-dom";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;

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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => (color === "white" ? "#ffffff" : "#171717")};
  color: ${({ color }) => (color === "white" ? "#000" : "#fff")};
  border: ${({ color }) => (color === "white" ? "1px solid #000" : "none")};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ color }) => (color === "white" ? "#f0f0f0" : "#000")};
  }
`;

const EmployeeListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
  }

  th {
    background: #f9f9f9;
  }
`;

const AccordionCard = styled.div`
  display: block;
  background: #f9f9f9;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    cursor: pointer;
  }

  p {
    margin: 0.5rem 0 0 0;
  }

  &.collapsed {
    p {
      display: none;
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const EmployeeList = () => {
  const navigate = useNavigate();
  const [nameQuery, setNameQuery] = useState("");
  const [idQuery, setIdQuery] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const employees = [
    { id: "11D001", name: "MAGHESH", email: "magesh@Dotcod.in", joinDate: "4/15/23", designation: "Software Engineer", status: "Confirmed" },
    { id: "11D002", name: "Tesla", email: "Rshahull@Dotcod.in", joinDate: "1/2/23", designation: "Software Engineer", status: "Probation" },
    { id: "11D003", name: "GM", email: "gm@Dotcod.in", joinDate: "9/4/23", designation: "Software Engineer", status: "Confirmed" },
    { id: "11D004", name: "AARP", email: "aarp@Dotcod.in", joinDate: "6/3/22", designation: "Software Engineer", status: "Probation" },
    { id: "11D005", name: "Disney", email: "disney@Dotcod.in", joinDate: "12/2/22", designation: "Software Engineer", status: "Confirmed" },
    { id: "11D006", name: "Chevy", email: "chevy@Dotcod.in", joinDate: "4/19/23", designation: "Software Engineer", status: "Probation" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
      employee.id.toLowerCase().includes(idQuery.toLowerCase()) &&
      (!designationFilter || employee.designation === designationFilter) &&
      (!statusFilter || employee.status === statusFilter)
    );
  });

  return (
    <EmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <HeaderSection>
            <h1>Attendance</h1>
            <ButtonContainer>
              <ActionButton color="white">
                <img src={PlusIcon} alt="Import Excel" width="20" /> Import Excel
              </ActionButton>
              <ActionButton
                color="black"
                onClick={() => navigate("/employee/employee-list/add-employee")}
              >
                <img src={WPlusIcon} alt="Add Employee" width="20" /> Add Employee
              </ActionButton>
            </ButtonContainer>
          </HeaderSection>
          <EmployeeListContainer>
            <FiltersContainer>
              <FilterInput
                type="text"
                placeholder="Search by Name"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
              />
              <FilterInput
                type="text"
                placeholder="Search by ID"
                value={idQuery}
                onChange={(e) => setIdQuery(e.target.value)}
              />
              <FilterSelect
                value={designationFilter}
                onChange={(e) => setDesignationFilter(e.target.value)}
              >
                <option value="">All Designations</option>
                <option value="Software Engineer">Software Engineer</option>
              </FilterSelect>
              <FilterSelect
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Probation">Probation</option>
              </FilterSelect>
            </FiltersContainer>
            {isMobile ? (
              filteredEmployees.map((employee) => (
                <AccordionCard key={employee.id}>
                  <h3 onClick={(e) => e.target.parentElement.classList.toggle("collapsed")}>
                    {employee.name} - {employee.id}
                  </h3>
                  <p><strong>Email:</strong> {employee.email}</p>
                  <p><strong>Join Date:</strong> {employee.joinDate}</p>
                  <p><strong>Designation:</strong> {employee.designation}</p>
                  <p><strong>Status:</strong> {employee.status}</p>
                </AccordionCard>
              ))
            ) : (
              <TableWrapper>
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Join Date</th>
                      <th>Designation</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.joinDate}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableWrapper>
            )}
          </EmployeeListContainer>
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default EmployeeList;
