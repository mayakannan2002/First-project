import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import { FaSearch } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";

// Styled Components
const LeaveContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    margin-left: 238px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  background: #f9f9fc;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1;
  text-align: center;
  min-width: 200px;
`;

const SummaryTitle = styled.h3`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const SummaryCount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const SummaryChange = styled.p`
  font-size: 0.9rem;
  color: #28a745;
  margin-top: 0.3rem;
`;

const LeaveRequestContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeaveRequestHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-weight: bold;
  color: #333;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f1f3f5;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 0.5rem;
`;

const SearchIconWrapper = styled.div`
  color: #777;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.thead`
  background: #f8f9fa;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f1f1f1;
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
  font-weight: bold;
  color: #555;
  border-bottom: 2px solid #ddd;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => (props.status === "Approved" ? "#28a745" : "#ffc107")};
  background-color: ${(props) =>
    props.status === "Approved" ? "#e6f9e6" : "#fff8e6"};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #555;
`;

// Component
const LeaveRequests = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const leaveRequests = [
    {
      id: "REQ001",
      name: "MAGHESH",
      requestDate: "6/3/22",
      leaveType: "Casual Leave",
      reason: "Not Well...",
      days: "01",
      status: "Pending",
    },
    // More leave request data...
  ];

  const filteredRequests = leaveRequests.filter((request) =>
    request.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LeaveContainer>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
          {/* Summary Cards */}
          <SummarySection>
            <SummaryCard>
              <SummaryTitle>Casual Leave</SummaryTitle>
              <SummaryCount>04</SummaryCount>
              <SummaryChange>+2% Jan month</SummaryChange>
            </SummaryCard>
            <SummaryCard>
              <SummaryTitle>Emergency Leave</SummaryTitle>
              <SummaryCount>06</SummaryCount>
              <SummaryChange>+2% Jan month</SummaryChange>
            </SummaryCard>
            <SummaryCard>
              <SummaryTitle>Total Leave Jan</SummaryTitle>
              <SummaryCount>10</SummaryCount>
              <SummaryChange>+2% Jan month</SummaryChange>
            </SummaryCard>
            <SummaryCard>
              <SummaryTitle>Today Leave</SummaryTitle>
              <SummaryCount>02</SummaryCount>
              <SummaryChange>23/01 Monday</SummaryChange>
            </SummaryCard>
          </SummarySection>

          {/* Leave Requests Table */}
          <LeaveRequestContainer>
            <LeaveRequestHeading>
              <Heading>Leave Requests</Heading>
              <SearchBarContainer>
                <SearchIconWrapper>
                  <FaSearch />
                </SearchIconWrapper>
                <SearchInput
                  type="text"
                  placeholder="Search Requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBarContainer>
            </LeaveRequestHeading>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Request Date</TableHeaderCell>
                  <TableHeaderCell>Leave Type</TableHeaderCell>
                  <TableHeaderCell>Reason</TableHeaderCell>
                  <TableHeaderCell>No Days</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>{request.leaveType}</TableCell>
                    <TableCell>{request.reason}</TableCell>
                    <TableCell>{request.days}</TableCell>
                    <TableCell>
                      <StatusBadge status={request.status}>
                        {request.status}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      <ActionButton>
                        <BiDotsVerticalRounded />
                      </ActionButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </LeaveRequestContainer>
        </ContentWrapper>
      </MainContent>
    </LeaveContainer>
  );
};

export default LeaveRequests;
