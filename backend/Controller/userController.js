const express = require('express');
require('dotenv/config');
const port = process.env.PORT;
const service = require("../Database/userMethods");
const { response } = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");


router.get("/", verifyJWT,(req,res)=>{
    const allUsers = service.getAllUsers();
    allUsers
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.get("/get", verifyJWT,(req,res)=>{
    const user = service.getUserById(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.post("/createUser", verifyJWT,(req,res) => {
    const user = service.createdUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));

})

router.put("/updateUser", verifyJWT,(req,res) => {
    const user = service.updatedUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.delete("/deleteUser", verifyJWT,(req,res)=>{
    const user = service.deleteUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
    
})


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

module.exports = router;