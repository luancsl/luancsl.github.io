import React from "react";
import mockGrowApp from "../assets/images/mock-growapp.png";
import mockSiaApi from "../assets/images/mock-sia.png";
import mockEvApp from "../assets/images/mock-evapp.png";
import mockTaxiCar from "../assets/images/mock-taxicar.gif";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Some Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/luancsl/SIA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mockSiaApi}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/luancsl/SIA"
            target="_blank"
            rel="noreferrer"
          >
            <h2>SIA API</h2>
          </a>
          <p>
            The Smart Irrigation API (SIA) is a REST API that provides climate
            data and crop coefficients. It uses a cache system that stores
            information for 1 hour and accesses data from five providers: AEMET,
            AFRIGIS, NASA-POWER, INMET, and NOAA.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/luancsl/EvApp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mockEvApp}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/luancsl/EvApp"
            target="_blank"
            rel="noreferrer"
          >
            <h2>EvApp</h2>
          </a>
          <p>
            EvApp is a React-Native application for calculating reference
            evapotranspiration (ETo), aimed at agronomist technicians and
            related areas. Using data from the{" "}
            <a href="https://github.com/luancsl/SIA" target="_blank">
              SIA API
            </a>{" "}
            allows custom calculations and manual comparison with external data.
            It uses methods such as Penman-Monteith and Hargreaves-Samani and
            requires only geographic coordinates, obtained via GPS.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/luancsl/GrowApp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mockGrowApp}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/luancsl/GrowApp"
            target="_blank"
            rel="noreferrer"
          >
            <h2>GrowApp</h2>
          </a>
          <p>
            GrowApp is a water management application for rural producers, made
            in React-Native. It allows you to download climate data, calculate
            evapotranspiration, configure irrigation profiles and synchronize
            with the GrowConnect device.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/luancsl/TaxiCarSimulator"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mockTaxiCar}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/luancsl/TaxiCarSimulator"
            target="_blank"
            rel="noreferrer"
          >
            <h2>TaxiCar Simulator</h2>
          </a>
          <p>
            Optimization and simulation project in React to evaluate matching
            algorithms between app passengers and drivers in a geospatial
            region. It uses the H3 library to match and evaluates the
            computational cost, time and number of optimal matches.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
