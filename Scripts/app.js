/*
Name: app.js
Author: Noushig Chitjian
Student Number: 301117936
Subject / Description: COMP 125 / Assignment03 
File Description: my Java Script file for all my pages functionality.
*/

"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    function HeaderLoader() {
        // console message for the header
        console.info("Header added successfully!");

        // this will create the Loader object for the header
        let Head = new XMLHttpRequest();

        // Gets all the informations from the header.html
        Head.open("GET", "./View/partials/header.html")

        // Send all the information from the header.html 
        Head.send();

        // this will inject all the informations from the header.html to any currently open page
        Head.addEventListener("readystatechange", function () {
            if ((Head.readyState === 4) && (Head.status === 200)) {
                let header = document.getElementsByTagName("header")[0];
                let headerData = Head.responseText;
                header.innerHTML = headerData;
            }
        });
    }

    function Paragraphs() {
        // console message for the paragraphs
        console.info("Paragraphs added successfully!");
        
        // this will create the Loader object for the paragraphs
        let Parag = new XMLHttpRequest();

        // Gets all the informations from the paragraghs.json
        Parag.open("GET", "Scripts/paragraphs.json");

        // Send all the information from the paragraphs.json
        Parag.send();

        // this will make the json file to read the texts then inject them to the required fields
        Parag.addEventListener("readystatechange", function () {
            if ((Parag.readyState === 4) && (Parag.status === 200)) {

                let paragraph = JSON.parse(Parag.responseText);
                let paragArray = paragraph.Paragraphs;
                let variable = document.getElementsByClassName("aboutMe")[0];

                // Loop to see which page we are in
                if (variable = document.getElementsByClassName("aboutMe")[0]) {
                    document.getElementsByClassName("aboutMe")[0].innerHTML = paragArray[0].aboutMe;
                } else if (variable = document.getElementsByClassName("pro1")[0]) {
                    document.getElementsByClassName("pro1")[0].innerHTML = paragArray[0].ProjectOne;
                    document.getElementsByClassName("pro2")[0].innerHTML = paragArray[0].ProjectTwo;
                    document.getElementsByClassName("pro3")[0].innerHTML = paragArray[0].ProjectThree;
                }
            }
        });
    }
        
    

    function FooterLoader() {
        // console message for the footer
        console.log("Footer added successfully!");

        // this will create the Loader object for the footer
        let Foot = new XMLHttpRequest();

        // Gets all the informations from the footer.html 
        Foot.open("GET", "./View/partials/footer.html")

        // Send all the information from the footer.html 
        Foot.send();

        // this will inject all the informations from the footer.html to any currently open page
        Foot.addEventListener("readystatechange", function () {
            if ((Foot.readyState === 4) && (Foot.status === 200)) {
                let footer = document.getElementsByTagName("footer")[0];
                let footerInfo = Foot.responseText;
                footer.innerHTML = footerInfo;
            }
        });
    }
})
