const express = require('express')

const { getLinks, createLink } = require('../controllers/links')

const router = express.Router()

router.get('/links', getLinks)

router.post('/links', createLink)

module.exports = router