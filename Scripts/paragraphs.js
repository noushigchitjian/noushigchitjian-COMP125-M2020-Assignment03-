// IIFE module
//IIFE - Immediately Invoked Function Expressions.
/*File name : paragraph.js
  Author's name : Noushig Chitjian
  Student number : 301117936
  Web site name : CHITJIAN Inc.
  file description: my js file to excecute the paragraphs from my json file */

  "use strict";
  let objects;
(function(objects)
{
    class Par
    {
        //this is the constructor of my Par class
        constructor(paragraph="")
        {
            this.paragraph = paragraph;
        }

        //this is the toString method of my Par class
        toString()
        {
            let Pstring ="";
            Pstring = Pstring + this.paragraph;
            return Pstring;
        }

        //this is the setParagraph method of my Par class
        setParagraph(JSON_Data)
        {
            this.paragraph = JSON_Data.paragraph;
        }
    }
    objects.Paragraph = Par;
}
(objects || (objects = {})));










