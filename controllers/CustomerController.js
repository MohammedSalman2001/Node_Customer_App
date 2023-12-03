

const connectionPool=require('../db/DatabaseConnection')
const e = require("express");

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
       // console.log(connection.threadId)

        const selectAllQuery="SELECT * FROM customer";
        connection.query(selectAllQuery,(error,rows)=>{
            connection.release();
            if(!error){
                resp.render('home',{rows})
            }else {
                console.log(error)
            }

          //  console.log(rows)
        });
    });


}

const findCustomers=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
        console.log(connection.threadId)

        const searchText=req.body.text
        console.log(searchText);


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

const newCustomerForm=(req,resp)=>{
    resp.render('new-customer-form')
}
const saveCustomers=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
        console.log(connection.threadId)

      const customers={
            nic:req.body.nic,
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
      }
        console.log(customers)
        connection.query('INSERT INTO customer VALUES(?,?,?,?)',
            [customers.nic,customers.name,customers.address,customers.salary],(error,result)=>{
                if(error){

                    console.log(error)
                }else {
                    console.log(result)

                }
            })


    });



}
module.exports={
    initializeUi,findCustomers,newCustomerForm,saveCustomers
};

