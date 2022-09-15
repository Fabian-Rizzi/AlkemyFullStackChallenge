require("dotenv").config();
const express = require("express");


const app = express();

//Get transactions

app.get("/api/v1/transactions", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            
        },
    });
});

//Create transaction

app.post("/api/v1/transactions/create", (req, res) => {
    res.status(201).json({
        status: "success",
        data: {

        },
    });
});


//edit transaction

app.put("/api/v1/transactions/:id/edit", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {

        },
    });
});


//delete transaction

app.delete("/api/v1/transactions/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});




const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening in ${port}`);
});

