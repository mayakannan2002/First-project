import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LeftSection,
  RightSection,
  Logo,
  Title,
  Subtitle,
  Input,
  CheckboxContainer,
  Button,
  Graphic,
  ErrorMessage,
} from "./LoginPage.styles"; // Importing the styled components
import "./loginpage.css";

// Import images from images folder
import LogoImage from "./images/logo.png"; // Make sure the path is correct
import GraphicImage from "./images/graphic.png"; // Make sure the path is correct

function LoginPage() {
  const navigate = useNavigate();

  // State for form fields and error
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the Sign In button click
  const handleSignIn = () => {
    const { email, password } = formData;

    // Validation logic
    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    if (email !== "mayakannanc2002@gmail.com" || password !== "1234567a") {
      setError("Invalid email or password!");
      return;
    }

    // Clear error message and navigate to the dashboard page
    setError("");
    navigate("/dashboard"); // Replace with your next page route
  };

  return (
    <Container>
      <div className="log">
        {/* Left Section */}
        <LeftSection>
          <Logo>
            <img src={LogoImage} alt="Logo" />
            Your Logo
          </Logo>
          <Title>Sign Into</Title>
          <Subtitle>Your Account</Subtitle>
          {/* Input Fields */}
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <ErrorMessage show={Boolean(error)}>{error}</ErrorMessage>
          {/* Remember Me Checkbox */}
          <CheckboxContainer>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </CheckboxContainer>
          {/* Sign-in Button */}
          <Button onClick={handleSignIn}>Sign In</Button>
        </LeftSection>

        {/* Right Section with Graphic */}
        <RightSection>
          <Graphic>
            <img src={GraphicImage} alt="Abstract Shapes" />
          </Graphic>
        </RightSection>
      </div>
    </Container>
  );
}

export default LoginPage;
