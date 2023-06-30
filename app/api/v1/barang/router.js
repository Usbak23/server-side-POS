const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/barang', function (req, res,) {
    res.status(200).json({ message: 'Raouter Auth' });
});

module.exports = router;
