const express = require('express'); 
const router = express.Router(); 

//@route GET api/profile
//@descr TestRoute
//@access Public
router.get('/',(req,res)=> res.send("profiles route"))

module.exports = router;