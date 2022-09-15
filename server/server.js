require("dotenv").config();
const express = require("express");
const { nextTick } = require("process");

const app = express();

//Middleware

app.use(express.json());


app.use((req, res, next) => {
    console.log('middleware');
    next();
});



//Get transactions

app.get("/api/v1/transactions", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            
        },
    });
});

//Get a transaction
app.get("/api/v1/transactions/:id", (req, res) => {
    console.log(req.params.id);

    try {

    } catch (err) {

    }
    res.status(200).json({
        status: "success",
        data: {
            
        },
    });
});


//Create transaction

app.post("/api/v1/transactions/create", (req, res) => {
    console.log(req.body);   
    res.status(201).json({
        status: "success",
        data: {

        },
    });
});


//Edit transaction

app.put("/api/v1/transactions/:id/edit", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {

        },
    });
});


//Delete transaction

app.delete("/api/v1/transactions/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});






const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening in ${port}`);
});

