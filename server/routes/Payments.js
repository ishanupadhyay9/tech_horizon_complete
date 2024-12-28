// Import the required modules
const express = require("express")
const router = express.Router()

const { capturePayment } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", auth, isStudent, capturePayment)


module.exports = router