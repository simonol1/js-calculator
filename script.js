
//function to test the number of digits on the screen, number length.
//If the number is between 9-15 character long, return the number
//If the number is longer then 15, return err message on screen
$(document).ready(function(){
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };

    // declare empty global variables
    var number = "";
    var newnumber = "";
    var operator = "";

    // totals will be added to the display screen, but the default number showing will be 0
    var totaldiv = $("#total");
    totaldiv.text("0");

    // add events listener/click function for numbers, but do not include C & AC
    //use this.text() to grab value from button and append to number
    //set the .text of totaldiv to number
    //call the testNumLength function and pass the number in as the parameter
    $("#numbers a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });

    // add events listener/click function for operators
    // declare local variables
    $("#operators a").not("#equals").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });

    //AC and C buttons, add events listeners for these.
    //If they are clicked the screen will return an empty string
    //declare local variable
    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });

  // add events listener for the equals button.
  //If/else statement used to show process for each operator.
  //Use parseINT to change string into number.
  // declare the local variables
    $("#equals").click(function(){
        if (operator === "+"){
            number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
        }
        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newnumber = "";
    });
});