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
                if 
                (variable = document.getElementsByClassName("aboutMe")[0]) {
                    document.getElementsByClassName("aboutMe")[0].innerHTML = paragArray[0].aboutMe;
                } else if 
                (variable = document.getElementsByClassName("pro1")[0]) {
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

    function validateForm() {
        let contactForm = document.forms[0];

        if (contactForm) {
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => {
                if (firstName.value.length < 2) {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter at least 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => {
                if (lastName.value.length < 2) {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter at least 2 or more characters";
                } 
                else {
                    errorMessage.hidden = true;
                }
            });

            let contactNumber = document.getElementById("contactNumber");
            contactNumber.addEventListener("blur", (event) => {
                let phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Ref: https://www.w3resource.com/javascript/form/javascript-form-validation.php
                if (contactNumber.value.match(phoneNo)) {
                    errorMessage.hidden = true;
                    contactNumber.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
                }
                else {
                    contactNumber.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid Phone number >>10 digits<<<";
                    contactNumber.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
                }
            });

            let email = document.getElementById("email");
            email.addEventListener("blur", (event) => {
                let eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Ref: https://www.w3resource.com/javascript/form/javascript-form-validation.php
                if (email.value.match(eMail)) {
                    errorMessage.hidden = true;
                    email.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
                }
                else {
                    email.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid email address";
                    email.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
                 }
            });

            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Form Successfully Submitted!");
            });
        }
        return false;
    }

    // Start the functions
    function Start() {
        console.log('%cApp Successfully Started...', "color:darkred; font-size: 45px;");

        HeaderLoader();
        Paragraphs()
        FooterLoader();
        validateForm();
    }

    window.addEventListener("load", Start);

})();










