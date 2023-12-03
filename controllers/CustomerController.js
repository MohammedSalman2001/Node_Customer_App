

const connectionPool=require('../db/DatabaseConnection')
const e = require("express");

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
        console.log(connection.threadId)

        const selectAllQuery="SELECT * FROM customer";
        connection.query(selectAllQuery,(error,rows)=>{
            connection.release();
            if(!error){
                resp.render('home',{rows})
            }else {
                console.log(error)
            }

            console.log(rows)
        });
    });


}

const findcustomers=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
        console.log(connection.threadId)

        const searchText=req.body.text


        connection.query('SELECT * FROM customer WHERE name LIKE ? OR address LIKE ?',
            ['%'+searchText+'%','%'+searchText+'%'],(error,rows)=>{
            connection.release();
            if(!error){
                resp.render('home',{rows})
            }else {
                console.log(error)
            }

            console.log(rows)
        });
    });


}

module.exports={
    initializeUi,findcustomers
};

