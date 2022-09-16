require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { nextTick } = require("process");
const db = require('./db')
const app = express();


//Middleware
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    console.log('middleware');
    next();
});



//Get all transactions

app.get("/api/v1/transactions", async (req, res) => {

    try {
const results = await db.query("select * from transactions");
    // console.log(results);
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            transactions: results.rows            
        },
    });
    } catch (err) {
        console.log(err);
    }
    
});

//Get a transaction
app.get("/api/v1/transactions/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query("select * from transactions where ID = $1", [req.params.id]);
        // console.log(results.rows[0])
        res.status(200).json({
        status: "success",
        data: {

        },
    });
    } catch (err) {
        console.log(err);
    }

});


//Create transaction

app.post("/api/v1/transactions", async (req, res) => {
    // console.log(req.body);   

    try {

    const results = await db.query("INSERT INTO transactions (name, amount, day, isIncome, category, user_id) values ($1, $2, $3, $4, $5, $6) returning *", 
    [req.body.name, req.body.amount, req.body.day, req.body.isIncome, req.body.category, req.body.user_id]);
    // console.log(results);

    res.status(201).json({
        status: "success",
        data: {
            transaction: results.rows[0],
        },
    });
    } catch (err) {
        console.log(err);
    }
});


//Edit transaction

app.put("/api/v1/transactions/:id/edit", async (req, res) => {
    try {
    const results = await db.query("UPDATE transactions SET name = $1, amount = $2, day = $3, isIncome = $4, category = $5, user_id = $6 where id = $7 returning *", 
    [req.body.name, req.body.amount, req.body.day, req.body.isIncome, req.body.category, req.body.user_id, req.params.id]);
    // console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            transaction: results.rows[0],
        },
    });
    } catch (err) {
        console.log(err);
    }
});

//Delete transaction

app.delete("/api/v1/transactions/:id", async (req, res) => {

    try { 
        const results = db.query('DELETE FROM transactions WHERE id = $1', [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    } catch (err) {
        console.log(err);
    }
});


const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening in ${port}`);
});

