const express = require("express")
const router = express.Router()

/**
 * Get frutose list
 * 
 * @returns frutose list | empty
 */
router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has sucessfully"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).send("Server error")
    }

})

module.exports = router;