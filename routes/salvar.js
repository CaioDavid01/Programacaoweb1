const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { reflexao, tema } = req.body;
  console.log(`Reflexão sobre ${tema}: ${reflexao}`);
  res.render('obrigado', { tema });
});

module.exports = router;
