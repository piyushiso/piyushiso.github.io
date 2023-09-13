const file = require("fs");           //For file reading/writing purpose

file.readFile("../assets/temp.json", "utf8", (err, jsonString) => {   //Reading JSON file.
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const questions = JSON.parse(jsonString);
      console.log(questions); // => "Customer address is: Infinity Loop Drive"
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });