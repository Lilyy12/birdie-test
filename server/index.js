const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    port: "3306",
    database: "birdietest"
  });

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({extended: true}));

    //density of individual dashboard
    app.get('/api/get/summary', (req, res) => {

    const carer_id = req.body.carer_id;

    const sqlQuery = "SELECT payload, timestamp, caregiver_id, event_type, count(*) AS counter FROM events WHERE care_recipient_id='df50cac5-293c-490d-a06c-ee26796f850d' GROUP BY event_type ORDER BY count(*) DESC";
    
    db.query(sqlQuery, [carer_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
   });


   //payload for individual event_type
   
 
   
   //home
   app.get('/api/get', (req, res) => {

    const sqlQuery = "SELECT event_type, count(*) AS counter FROM events GROUP BY event_type ORDER BY count(*) DESC;";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
     });
});

    //chart (display top 5)
    app.get('/api/get/top5', (req, res) => {

        const sqlQuery = "SELECT event_type, count(*) AS counter FROM events GROUP BY event_type ORDER BY count(*) DESC LIMIT 5;";
        db.query(sqlQuery, (err, result) => {
            res.send(result);
         });
    });

app.listen(3001, () => {
    console.log('running on port 3001');
});
