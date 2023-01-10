import React from "react";
import { useState } from "react";
import '../styles/Card.css';

function CardComponent() {
  const numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "J",
    "Q",
    "K",
  ];
  const faces = ["Spade", "Heart", "Club", "Diamond"];

  const [coords, setCoords] = useState({ x: 0 });
  const [side, setSide] = useState("");

  const handleMouseOut = (event) => {
    document
      .getElementsByClassName("card")[0]
      .setAttribute("data-side", "none");
  };

  const handleMouseMove = (event) => {
    // innerwidth gives the width of viewport and half in the middle point
    setCoords({
      x: event.clientX - window.innerWidth / 2,
    });

    // For CSS purposes
    if (100 > coords.x > 0) {
      setSide("rightHalf");
    }
    if (coords.x > 100) {
      setSide("right");
    }
    if (coords.x < 0) {
      setSide("leftHalf");
    }
    if (coords.x < -100) {
      setSide("left");
    }
    document.getElementsByClassName("card")[0].setAttribute("data-side", side);
  };

  const displayRandomCard = () => {
    // Generate random number and face from given arrays
    const randomnumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomface =
      faces[Math.floor(Math.random() * faces.length)].toLowerCase();

    // Getting classnames of all childrent elements except digits and setting it to be blank
    // Everytime starting with a clean state in card
    let cardelements = document.getElementsByClassName("card")[0].children;
    for (var i = 1; i < cardelements.length - 1; i++) {
      cardelements[i].className = "blank";
    }
    cardelements[0].className = "digit";
    cardelements[0].textContent = "";
    cardelements[24].className = "digit";
    cardelements[24].textContent = "";

    // Get the text content from desired element
    // let digitelement1 = document.getElementsByClassName('digit')[0].textContent
    // let digitelement2 = document.getElementsByClassName('digit')[1].textContent

    // Get the classname and add the face name for css changes
    const numberclass1 = document.getElementsByClassName("digit")[0].className;
    const numberclass2 = document.getElementsByClassName("digit")[1].className;
    const newnumberclass1 = numberclass1.split(" ")[0].concat(" " + randomface);
    const newnumberclass2 = numberclass2.split(" ")[0].concat(" " + randomface);

    // Setting attribute value with the generated number to display the faces accordingly
    document
      .getElementsByClassName("card")[0]
      .setAttribute("card-number", randomnumber);

    switch (randomface) {
        default : 
      case "spade":
        switch (randomnumber) {
            default:
            case "one":
            // Changing text content of start and end digit with generated number
            document.getElementsByClassName("digit")[0].textContent = 1;
            document.getElementsByClassName("digit")[1].textContent = 1;
            // Adding the random generated face to the class of both digits
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // Adding the random generated face to the class of required elements
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
            case "two":
            document.getElementsByClassName("digit")[0].textContent = 2;
            document.getElementsByClassName("digit")[1].textContent = 2;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface + " two";
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface + " two";
            return;
          case "three":
            document.getElementsByClassName("digit")[0].textContent = 3;
            document.getElementsByClassName("digit")[1].textContent = 3;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            return;
          case "four":
            document.getElementsByClassName("digit")[0].textContent = 4;
            document.getElementsByClassName("digit")[1].textContent = 4;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "five":
            document.getElementsByClassName("digit")[0].textContent = 5;
            document.getElementsByClassName("digit")[1].textContent = 5;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "six":
            document.getElementsByClassName("digit")[0].textContent = 6;
            document.getElementsByClassName("digit")[1].textContent = 6;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "seven":
            document.getElementsByClassName("digit")[0].textContent = 7;
            document.getElementsByClassName("digit")[1].textContent = 7;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "eight":
            document.getElementsByClassName("digit")[0].textContent = 8;
            document.getElementsByClassName("digit")[1].textContent = 8;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "nine":
            document.getElementsByClassName("digit")[0].textContent = 9;
            document.getElementsByClassName("digit")[1].textContent = 9;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "ten":
            document.getElementsByClassName("digit")[0].textContent = 10;
            document.getElementsByClassName("digit")[1].textContent = 10;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[1].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[3].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[21].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[23].className =
              "blank " + randomface;
            return;
          case "J":
            document.getElementsByClassName("digit")[0].textContent = "J";
            document.getElementsByClassName("digit")[1].textContent = "J";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "Q":
            document.getElementsByClassName("digit")[0].textContent = "Q";
            document.getElementsByClassName("digit")[1].textContent = "Q";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "K":
            document.getElementsByClassName("digit")[0].textContent = "K";
            document.getElementsByClassName("digit")[1].textContent = "K";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
        }
      case "heart":
        switch (randomnumber) {
            default:
          case "one":
            // Changing text content of start and end digit with generated number
            document.getElementsByClassName("digit")[0].textContent = 1;
            document.getElementsByClassName("digit")[1].textContent = 1;
            // Adding the random generated face to the class of both digits
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // Adding the random generated face to the class of required elements
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
          case "two":
            document.getElementsByClassName("digit")[0].textContent = 2;
            document.getElementsByClassName("digit")[1].textContent = 2;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface + " two";
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface + " two";
            return;
          case "three":
            document.getElementsByClassName("digit")[0].textContent = 3;
            document.getElementsByClassName("digit")[1].textContent = 3;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            return;
          case "four":
            document.getElementsByClassName("digit")[0].textContent = 4;
            document.getElementsByClassName("digit")[1].textContent = 4;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "five":
            document.getElementsByClassName("digit")[0].textContent = 5;
            document.getElementsByClassName("digit")[1].textContent = 5;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "six":
            document.getElementsByClassName("digit")[0].textContent = 6;
            document.getElementsByClassName("digit")[1].textContent = 6;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "seven":
            document.getElementsByClassName("digit")[0].textContent = 7;
            document.getElementsByClassName("digit")[1].textContent = 7;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "eight":
            document.getElementsByClassName("digit")[0].textContent = 8;
            document.getElementsByClassName("digit")[1].textContent = 8;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "nine":
            document.getElementsByClassName("digit")[0].textContent = 9;
            document.getElementsByClassName("digit")[1].textContent = 9;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "ten":
            document.getElementsByClassName("digit")[0].textContent = 10;
            document.getElementsByClassName("digit")[1].textContent = 10;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[1].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[3].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[21].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[23].className =
              "blank " + randomface;
            return;
          case "J":
            document.getElementsByClassName("digit")[0].textContent = "J";
            document.getElementsByClassName("digit")[1].textContent = "J";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "Q":
            document.getElementsByClassName("digit")[0].textContent = "Q";
            document.getElementsByClassName("digit")[1].textContent = "Q";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "K":
            document.getElementsByClassName("digit")[0].textContent = "K";
            document.getElementsByClassName("digit")[1].textContent = "K";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
        }
      case "diamond":
        switch (randomnumber) {
            default:
          case "one":
            // Changing text content of start and end digit with generated number
            document.getElementsByClassName("digit")[0].textContent = 1;
            document.getElementsByClassName("digit")[1].textContent = 1;
            // Adding the random generated face to the class of both digits
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // Adding the random generated face to the class of required elements
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
          case "two":
            document.getElementsByClassName("digit")[0].textContent = 2;
            document.getElementsByClassName("digit")[1].textContent = 2;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface + " two";
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface + " two";
            return;
          case "three":
            document.getElementsByClassName("digit")[0].textContent = 3;
            document.getElementsByClassName("digit")[1].textContent = 3;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            return;
          case "four":
            document.getElementsByClassName("digit")[0].textContent = 4;
            document.getElementsByClassName("digit")[1].textContent = 4;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "five":
            document.getElementsByClassName("digit")[0].textContent = 5;
            document.getElementsByClassName("digit")[1].textContent = 5;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "six":
            document.getElementsByClassName("digit")[0].textContent = 6;
            document.getElementsByClassName("digit")[1].textContent = 6;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "seven":
            document.getElementsByClassName("digit")[0].textContent = 7;
            document.getElementsByClassName("digit")[1].textContent = 7;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "eight":
            document.getElementsByClassName("digit")[0].textContent = 8;
            document.getElementsByClassName("digit")[1].textContent = 8;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "nine":
            document.getElementsByClassName("digit")[0].textContent = 9;
            document.getElementsByClassName("digit")[1].textContent = 9;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "ten":
            document.getElementsByClassName("digit")[0].textContent = 10;
            document.getElementsByClassName("digit")[1].textContent = 10;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[1].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[3].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[21].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[23].className =
              "blank " + randomface;
            return;
          case "J":
            document.getElementsByClassName("digit")[0].textContent = "J";
            document.getElementsByClassName("digit")[1].textContent = "J";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "Q":
            document.getElementsByClassName("digit")[0].textContent = "Q";
            document.getElementsByClassName("digit")[1].textContent = "Q";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "K":
            document.getElementsByClassName("digit")[0].textContent = "K";
            document.getElementsByClassName("digit")[1].textContent = "K";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
        }
      case "club":
        switch (randomnumber) {
            default:
          case "one":
            // Changing text content of start and end digit with generated number
            document.getElementsByClassName("digit")[0].textContent = 1;
            document.getElementsByClassName("digit")[1].textContent = 1;
            // Adding the random generated face to the class of both digits
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // Adding the random generated face to the class of required elements
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
          case "two":
            document.getElementsByClassName("digit")[0].textContent = 2;
            document.getElementsByClassName("digit")[1].textContent = 2;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface + " two";
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface + " two";
            return;
          case "three":
            document.getElementsByClassName("digit")[0].textContent = 3;
            document.getElementsByClassName("digit")[1].textContent = 3;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            return;
          case "four":
            document.getElementsByClassName("digit")[0].textContent = 4;
            document.getElementsByClassName("digit")[1].textContent = 4;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "five":
            document.getElementsByClassName("digit")[0].textContent = 5;
            document.getElementsByClassName("digit")[1].textContent = 5;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "six":
            document.getElementsByClassName("digit")[0].textContent = 6;
            document.getElementsByClassName("digit")[1].textContent = 6;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "seven":
            document.getElementsByClassName("digit")[0].textContent = 7;
            document.getElementsByClassName("digit")[1].textContent = 7;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "eight":
            document.getElementsByClassName("digit")[0].textContent = 8;
            document.getElementsByClassName("digit")[1].textContent = 8;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "nine":
            document.getElementsByClassName("digit")[0].textContent = 9;
            document.getElementsByClassName("digit")[1].textContent = 9;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[7].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[17].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            return;
          case "ten":
            document.getElementsByClassName("digit")[0].textContent = 10;
            document.getElementsByClassName("digit")[1].textContent = 10;
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            document.getElementsByClassName("card")[0].children[1].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[3].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[6].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[8].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[11].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[13].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[16].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[18].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[21].className =
              "blank " + randomface;
            document.getElementsByClassName("card")[0].children[23].className =
              "blank " + randomface;
            return;
          case "J":
            document.getElementsByClassName("digit")[0].textContent = "J";
            document.getElementsByClassName("digit")[1].textContent = "J";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "Q":
            document.getElementsByClassName("digit")[0].textContent = "Q";
            document.getElementsByClassName("digit")[1].textContent = "Q";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";

            return;
          case "K":
            document.getElementsByClassName("digit")[0].textContent = "K";
            document.getElementsByClassName("digit")[1].textContent = "K";
            document.getElementsByClassName("digit")[0].className =
              newnumberclass1;
            document.getElementsByClassName("digit")[1].className =
              newnumberclass2;
            // document.getElementsByClassName('card')[0].children[1].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[3].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[6].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[7].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[8].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[11].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[12].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[13].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[16].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[17].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[18].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[21].className = "blank " + randomface
            // document.getElementsByClassName('card')[0].children[23].className = "blank " + randomface
            document.getElementsByClassName("card")[0].children[12].className =
              "blank " + randomface + " one";
            return;
        }
    }
  };
  return (
    <div className="deck">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
      >
        <div className="card" card-number="one">
          <div className="digit spade">A</div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="spade"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div id="digit-end" className="digit spade">
            A
          </div>
        </div>
        <button
          onClick={() => {
            displayRandomCard();
          }}
        >
          Generate Random Card
        </button>
      </div>
      {/* <div>
          <FibonacciComponent/>
          <LoginComponent/>
        </div> */}
    </div>
  );
}

export default CardComponent;
