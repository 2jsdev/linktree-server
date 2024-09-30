const express = require('express')

const { getLinks, createLink, updateLinkById, deleteLinkById } = require('../controllers/links')

const router = express.Router()

router.get('/api/links', getLinks)
router.post('/api/links', createLink)
router.put('/api/links/:linkId', updateLinkById)
router.delete('/api/links/:linkId', deleteLinkById)

module.exports = router