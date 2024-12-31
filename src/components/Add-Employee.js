import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddEmployeeContainer = styled.div`
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
`;

const FormSection = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adds spacing between fields */
`;

const FormGroup = styled.div`
  flex: 1 1 calc(33.333% - 1rem); /* 3 items per row with spacing */
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #171717;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    employeeNumber: "",
    email: "",
    mobileNumber: "",
    dateOfJoining: "",
    employeeStatus: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
    isPhysicalChallenged: "No",
    bloodGroup: "",
    personalEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data Submitted: ", employeeData);
  };

  return (
    <AddEmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <h1>Employee</h1>

          <FormSection>
            <h2>Add details of an employee</h2>
            <form onSubmit={handleFormSubmit}>
              <Row>
                <FormGroup>
                  <Label>Employee Name *</Label>
                  <Input
                    type="text"
                    name="employeeName"
                    value={employeeData.employeeName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Employee Number *</Label>
                  <Input
                    type="text"
                    name="employeeNumber"
                    value={employeeData.employeeNumber}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Date of Joining *</Label>
                  <Input
                    type="date"
                    name="dateOfJoining"
                    value={employeeData.dateOfJoining}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Mobile Number *</Label>
                  <Input
                    type="text"
                    name="mobileNumber"
                    value={employeeData.mobileNumber}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Employee Status *</Label>
                  <Select
                    name="employeeStatus"
                    value={employeeData.employeeStatus}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Probation">Probation</option>
                  </Select>
                </FormGroup>
              </Row>
            </form>
          </FormSection>

          <FormSection>
            <h2>Personal Details</h2>
            <Row>
              <FormGroup>
                <Label>Date of Birth *</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={employeeData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Gender *</Label>
                <Select
                  name="gender"
                  value={employeeData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Marital Status *</Label>
                <Select
                  name="maritalStatus"
                  value={employeeData.maritalStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Is Physical Challenged *</Label>
                <Select
                  name="isPhysicalChallenged"
                  value={employeeData.isPhysicalChallenged}
                  onChange={handleInputChange}
                  required
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Blood Group *</Label>
                <Select
                  name="bloodGroup"
                  value={employeeData.bloodGroup}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Personal Email *</Label>
                <Input
                  type="email"
                  name="personalEmail"
                  value={employeeData.personalEmail}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Row>
          </FormSection>

          <FormSection>
            <h4>Department</h4>
          </FormSection>

          <FormSection>
            <h4>Configuration</h4>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <Button type="button">Cancel</Button>
              <Button type="submit">Save</Button>
            </div>
          </FormSection>
        </ContentWrapper>
      </MainContent>
    </AddEmployeeContainer>
  );
};

export default AddEmployee;
