const express = require('express');
const router = express.Router();

const temas = {
  ansiedade: {
    titulo: 'Ansiedade',
    texto: 'A ansiedade é uma sensação de inquietação, como se algo estivesse prestes a acontecer...'
  },
  autoestima: {
    titulo: 'Autoestima',
    texto: 'Autoestima é a forma como nos percebemos e nos valorizamos...'
  },
  medo: {
    titulo: 'Medo',
    texto: 'O medo é uma emoção básica que serve como um mecanismo de proteção...'
  },
  raiva: {
    titulo: 'Raiva',
    texto: 'A raiva pode surgir diante de frustrações ou injustiças e é uma emoção natural...'
  },
  'inteligencia emocional': {
    titulo: 'Inteligência Emocional',
    texto: 'É a capacidade de reconhecer, compreender e lidar com as próprias emoções...'
  },
  TDAH: {
    titulo: 'TDAH',
    texto: 'Transtorno de Déficit de Atenção com Hiperatividade afeta a capacidade de concentração...'
  },
  autismo: {
    titulo: 'Autismo',
    texto: 'O autismo é um transtorno do neurodesenvolvimento que afeta a comunicação e o comportamento...'
  }
};

router.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const conteudo = temas[tema];

  if (!conteudo) {
    return res.status(404).send('Tema não encontrado');
  }

  res.render('tema', {
    titulo: conteudo.titulo,
    descricao: conteudo.texto, // adicione essa linha
    tema
  });
  
});

module.exports = router;
