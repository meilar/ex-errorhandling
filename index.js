function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    return new Error("Not a valid number!");
  } else {
    return true;
  }
}

$(function () {
  $("#submittedNumber").click (function () {
    const inputtedNumber = parseInt($("#number").val());
    $("#number").val("");

    try {
      const isNumberValid = checkNumber(inputtedNumber);

      if (isNumberValid instanceof Error) {
        console.error(isNumberValid.message);
        throw RangeError("Not a valid number");
      } else {
        console.log("Successful, no need to catch");
        $("#displayNumber").text("This number is valid. You may continue.");
      }
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`);
    }
  });
});