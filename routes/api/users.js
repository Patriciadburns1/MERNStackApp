const express = require('express'); 
const router = express.Router(); 

//@route GET api/users
//@descr TestRoute
//@access Public
router.get('/',(req,res)=> res.send("user route"))

module.exports = router;