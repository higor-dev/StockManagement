const express = require('express');
require('dotenv/config');
const General = express.Router();
const { Company, Transaction, Product, Installment } = require("../Database/model");
const { sequelize } = require("../Database/dbConnection");
const jwt = require("jsonwebtoken");
const moment = require('moment');
const product = require('./productController');

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}


General.get("/getAllTransactions", verifyJWT, (req,res)=>{
    const allTransactions = Transaction.findAll();
    allTransactions
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

General.get("/getOneTransaction/:id", verifyJWT, (req,res)=>{
    const transaction = Transaction.findOne({ where: {id: req.params.id}});
    transaction
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

// General.delete("/deleteTransaction", verifyJWT, (req,res)=> {
//     const transactionObject = Transaction.destroy({where: {id: req.body.id}});
//     transactionObject
//         .then(data => res.json(data))
//         .catch(err => res.json(err));
// })

General.get("/getBalance", verifyJWT, async (req,res)=>{
        const user = await getBalance(req.body.id);
        res.json(user[0][0]);
})

General.get("/getProductByType/:type", verifyJWT, async (req,res) => {
    const optional = await getProductByType(req.params.type);
    res.json(optional[0]);
})


General.get("/getStatistics", verifyJWT, async (req, res) => {
    // const transaction= await sequelize.query("select * from storage.transactions t");
    // const installment = await sequelize.query("select * from storage.installments i");
    // const products = await sequelize.query("select p.id, p.productName, p.quantity, p.price, p.`type` , p.image from storage.products p, storage.transactions t where t.productId = p.id")
    
    // transaction[0].map((value,index)=> {
    //     value.installments = []; 
    //     if(products[0][index].id == value.productId){
    //         value.product = products[0][index];
    //     }
    // })

    // //Sempre terá installment >= transaction

    // installment[0].map((value,index) => {
        
    //     for(i=0;i<transaction[0].length;i++){
            
    //         if(installment[0][index].transactionId == transaction[0][i].id){
                
    //             transaction[0][i].installments.push(installment[0][index]);
    //             break
                
    //         }
    //     }
    
    // })

// HASH MAP DE ID PRA TRANSACTION 
//     AI EU POSSO USAR O ID DA INSTALLMENT COMO CHAVE PARA ACHAR A TRANSACTION
//     transaction_hash_map[installment.transaction_id].installmentList.push(installment);



    const transaction = await Transaction.findAll({

        include: {
            all:true,
            nested:true
          }


    });

    

    
    res.json(transaction);

})

async function getBalance(){
    const users = await sequelize.query(`SELECT balance from storage.companies where id= 1`);
    return users;
}

async function updateBalance(beforeProduct, postproduct){

    const balanceAfter = (postproduct.quantity * postproduct.price);
    const balanceBefore = (beforeProduct.quantity * beforeProduct.price);

    const difference = balanceAfter - balanceBefore;

    const value = await getBalance(1);
    const balance = value[0][0].balance - difference;
    const users = await sequelize.query(`UPDATE storage.companies SET balance = ${balance} WHERE id = 1`);
}

async function getProductByType(type){
    return await sequelize.query("SELECT * FROM storage.products p WHERE p.`type`" + ` LIKE '%${type}%'`); 
}

async function createTransaction(transaction){
    const transactionObject = await Transaction.create(transaction);
        
    moment().format('MMMM Do YYYY, h:mm:ss a');
    var date = Date.now();
    var endDateMoment = moment(date); 
    const installment = await Installment.create({
        transactionId: transactionObject.id,
        price: transaction.received,
        paymentDay: endDateMoment.toISOString(),
        paid: true
    })  

    var formatedDate = moment(date).set('date', 4);

    for(i=1; i < transaction.portion; i++){
        formatedDate.add(1, 'months');
        const installment = await Installment.create({
            transactionId: transactionObject.id,
            price: transaction.received,
            paymentDay: formatedDate.toISOString(),
            paid: false
        })       
         
    }

    return transactionObject;
}




module.exports = {
    General: General,
    getBalance,
    updateBalance,
    createTransaction,
    getProductByType


}