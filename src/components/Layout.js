import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto; /* Center horizontally */
  padding: 0 16px; /* Add small padding for spacing on small screens */
  box-sizing: border-box;
  min-height: 100vh; /* Ensure content stretches full height */
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
