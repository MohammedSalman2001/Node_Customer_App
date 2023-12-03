

const connectionPool=require('../db/DatabaseConnection')

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection) => {
        if (error) {
            throw error
        }
        console.log(connection.threadId)
    })


}
module.exports={
    initializeUi
};