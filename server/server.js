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
    next();
});

//Get all transactions

app.get("/api/v1/transactions", async (req, res) => {

    try {
const results = await db.query("select * from transactions ");
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



//Get all income transactions

app.get("/api/v1/transactions/incomes", async (req, res) => {
    try {
const results = await db.query("select * from transactions where isincome = true");
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

//Get all expense transactions

app.get("/api/v1/transactions/expenses", async (req, res) => {
    try {
const results = await db.query("select * from transactions where isincome = false");
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





//Sum all transactions where isincome = true

app.get("/api/v1/transactions/sumincomes", async (req, res) => {

    try {
const results = await db.query("SELECT SUM(amount) FROM transactions WHERE isincome = true;");
    //  console.log(results.rows[0].sum);
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            transactions: results.rows[0].sum            
        },
    });
    } catch (err) {
        console.log(err);
    }
    
});



//Sum all transactions where isincome = false

app.get("/api/v1/transactions/sumexpenses", async (req, res) => {

    try {
const results = await db.query("SELECT SUM(amount) FROM transactions WHERE isincome = false;");
    //  console.log(results.rows[0].sum);
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            transactions: results.rows[0].sum            
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

        const transactions = await db.query("select * from transactions where ID = $1", [req.params.id]);
        // console.log(results.rows[0])
        res.status(200).json({
        status: "success",
        data: {
            transactions: transactions.rows[0]
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

    const results = await db.query("INSERT INTO transactions (name, amount, day, isincome, category, user_id) values ($1, $2, $3, $4, $5, $6) returning *", 
    [req.body.name, req.body.amount, req.body.day, req.body.isincome, req.body.category, req.body.user_id]);
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

app.put("/api/v1/transactions/:id", async (req, res) => {
    try {
    const results = await db.query("UPDATE transactions SET name = $1, amount = $2, day = $3, isincome = $4, category = $5, user_id = $6 where id = $7 returning *", 
    [req.body.name, req.body.amount, req.body.day, req.body.isincome, req.body.category, req.body.user_id, req.params.id]);
    console.log(results);
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
app.listen(port, () => {
    console.log(`listening in ${port}`);
});

const DB_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/my_db'