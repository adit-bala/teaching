import React from "react";
import "../styles/Body.css";

export default function Body() {
  return (
    <div className="body-container">
      <div className="announcements-container">
        <div className="title-div">
          <h1 className="title"> Announcements </h1>
        </div>
        <p className="announcements">
          Welcome to cs 61a! make sure to check the course website for classwide
          announcements!
        </p>
      </div>
      <div className="container">
        <div className="title-div">
          <h1 className="title"> Weekly Materials </h1>
        </div>
        <div className="container">
          <div className="week-div">
            <p className="current-week"> <b>week 2: 6/27 - 7/1</b> </p>
            <div className="wrapper">
              <p className="week">lab 01: Variables and Functions, Control </p>
              <a className="button slides"> attendance </a>
              <a className="button"> assignment </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 02: Environment Diagrams, HOF</p>
              <a
                href="https://tinyurl.com/adit-disc02"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc02/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a className="button slides"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 02: </p>
              <a
                href="https://slides.aditbala.com/su22/disc02"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc02.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            <br></br>
            <p className="current-week"> <b>week 1: 6/21 - 6/24</b> </p>
            <div className="wrapper">
              <p className="week">lab 00: getting started</p>
              <a
                href="https://cs61a.org/lab/lab00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 00: getting started </p>
              <a
                href="https://tinyurl.com/adit-welcome"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 00: </p>
              <a
                href="https://slides.aditbala.com/su22/disc00"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc00.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            <br></br>
            <div className="wrapper">
              <p className="week">lab 01: Variables and Functions, Control </p>
              <a
                href="https://tinyurl.com/adit-lab01"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://tinyurl.com/adit-study"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                study group{" "}
              </a>
              <a
                href="https://cs61a.org/lab/lab01/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week">
                {" "}
                disc 01: Variables and Functions, Control{" "}
              </p>
              <a
                href="https://forms.gle/JTQSuP9PVVGNY58u7"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc01/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc01/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 01: </p>
              <a
                href="https://slides.aditbala.com/su22/disc01"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc00.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
