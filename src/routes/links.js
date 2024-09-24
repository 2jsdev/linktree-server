const express = require('express')

const router = express.Router()

const links = [
    {
        id: 1,
        name: "Google",
        url: "http://google.com",
        visible: true,
        archived: false
    },
    {
        id: 2,
        name: "Facebook",
        url: "http://facebook.com",
        visible: true,
        archived: false
    },
]

router.get('/links', (req, res) => {
    res.json(links)
})

module.exports = router