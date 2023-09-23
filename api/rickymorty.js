const express = require('express')
const Character = require("../models/character")
const router = express.Router()

// define the home page route
router.get('/characters', async(req, res) => {
  const characters = await Character.find();
  res.send(characters)
})

// define the home page route
router.get('/character/:id', async(req, res) => {
  try{
    const {id} = req.params;
    const character = await Character.findById(id);
    res.send(character)
  } catch (error) {
    console.log("error");
    res.status(500).json({ error, msg: 'Error al crear el personaje' });
  }
})
// define the about route
router.post('/create-character', async (req, res) => {
  try {
    const lastCharacter = await Character.findOne({}, {}, { sort: { id: -1 } });
    const lastId = (lastCharacter.id ?? 0) + 1;

    // Obtén la fecha actual en el formato deseado
    const currentDate = new Date().toISOString();

    const newCharacter = new Character({
      id: lastId,
      created: currentDate,
      ...req.body, // Resto de los datos del personaje desde el cuerpo de la solicitud
    });
    const savedCharacter = await newCharacter.save();
    res.status(200).json(savedCharacter);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error, msg: 'Error al crear el personaje' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const character = await Character.findByIdAndRemove(id);
    res.status(200).json({character, msg: "Personaje eliminado" });
  }catch(error){
    res.status(500).json({ error, msg: 'Error al eliminar el personaje' });

  }
})

module.exports = router;