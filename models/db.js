const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log("Error in connecting to database : " + err);
    } else {
        console.log("Successfully connected to database");
    }
});

require("./employee.model");