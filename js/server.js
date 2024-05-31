// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PIawKJx8FPTYqD2A9uPRhcX5I6fTFMfrigU7XFSZt4NMHKIGAEnNF6RRl3onYeJ8ruLTJHHNwCgBUnksknimdCW00RV1Y2wfw');
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://19690148:49MByYka5iqz82po@cluster0.oibl7pb.mongodb.net/myDatabaseName";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const YOUR_DOMAIN = 'http://localhost:5000';
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});

/* CONEXION A LAS COLECCIOES */
app.get('/user', async (req, res) => {
        try {
        await client.connect();
        const collection = client.db("electronica").collection("user");
        const data = await collection.find({}).toArray();
        console.log(data);
        res.json(data);
        } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
        } finally {
        await client.close();
        }
});

app.post('/login', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db("electronica").collection("user");
        const user = await collection.findOne({username: req.body.username, password: req.body.password});
        if (user) {
            res.redirect('/home.html');
        } else {
            res.status(401).json({status: 'error', message: 'Invalid username or password'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});

app.get('/articles', async (req, res) => {
        try {
        await client.connect();
        const collection = client.db("electronica").collection("articles");
        const data = await collection.find({}).toArray();
        console.log(data);
        res.json(data);
        } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
        } finally {
        await client.close();
        }
});

app.listen(5000, () => console.log('Running on port 4242'));