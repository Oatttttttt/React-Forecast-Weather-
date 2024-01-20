import React, { useState } from "react";
import img from "../image/bg.jpg";
import cloud1 from "../image/cloud1.png";
import cloud2 from "../image/cloud2.png";
import cloud3 from "../image/cloud3.png";
import cloud4 from "../image/cloud4.png";
import cloud5 from "../image/cloud5.png";
import "./css/Home.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!inputValue || inputValue.match(/[0-9]/)) {
        alert("Please enter a valid city name using only letters.");
      } else {
        navigate(`/weather/${inputValue}`);
      }
    }
  };

  const handleLinkClick = () => {
    if (!inputValue || inputValue.match(/[0-9]/)) {
      alert("Please enter a valid city name using only letters.");
    } else {
      navigate(`/weather/${inputValue}`);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="banner">
        <img src={img} alt="bg-img" />
        <h2> Weather Forecast </h2>
        <TextField
          className="input"
          id="filled-basic"
          label="City"
          variant="filled"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleLinkClick} variant="contained">
          Submit
        </Button>
        <div className="clouds">
          <img src={cloud1} style={{ "--i": 1 }} alt="Cloud 1" />
          <img src={cloud2} style={{ "--i": 2 }} alt="Cloud 2" />
          <img src={cloud3} style={{ "--i": 3 }} alt="Cloud 3" />
          <img src={cloud4} style={{ "--i": 4 }} alt="Cloud 4" />
          <img src={cloud5} style={{ "--i": 5 }} alt="Cloud 5" />
        </div>{" "}
      </div>{" "}
    </>
  );
}
