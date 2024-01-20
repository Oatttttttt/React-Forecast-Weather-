import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ImgWeather from "../image/bg.jpg";
import "./css/Weather.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Weather() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`http://localhost:80/weather/${city}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="Box-Weather">
      <h2>Weather Forecast {city.toUpperCase()}</h2>
      <img src={ImgWeather} alt="bg-Img-Weather" />
      <TableContainer className="table-box" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date&Time</TableCell>
              <TableCell align="center">Temperature</TableCell>
              <TableCell align="center">Weather</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weatherData && weatherData.list && weatherData.list.length > 0 ? (
              weatherData.list.map((item) => (
                <TableRow key={item.dt}>
                  <TableCell align="center" component="th" scope="row">
                    {item.dt_txt}
                  </TableCell>
                  <TableCell align="center">{item.main.temp} °K</TableCell>
                  <TableCell align="center">
                    {item.weather[0].description}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  No weather data available for {city.toUpperCase()}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">
        <Button className="bt" variant="contained">
          Go Back
        </Button>
      </Link>
    </div>
  );
}
