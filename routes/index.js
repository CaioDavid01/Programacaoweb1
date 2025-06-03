const express = require('express');
const router = express.Router();

const temas = [
  { nome: 'ansiedade', titulo: 'Ansiedade' },
  { nome: 'autoestima', titulo: 'Autoestima' },
  { nome: 'medo', titulo: 'Medo' },
  { nome: 'raiva', titulo: 'Raiva'},
  { nome: 'inteligencia emocional', titulo: 'Inteligencia emocional'},
  { nome: 'TDAH', titulo: 'TDAH'},
  { nome: 'autismo', titulo: 'Autismo'},
  


];

router.get('/', (req, res) => {
  res.render('index', { temas });
});

module.exports = router;
