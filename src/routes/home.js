const express = require('express')
const router = express.Router();

const homeController = require('../controllers/homeController');
const contactoController = require('../controllers/contactoController');

router.get('/',homeController.render);
router.post('/verificar',homeController.verificar);
router.get('/principal',homeController.principal);
router.get('/',homeController.falloinicio);
router.post('/guardar',homeController.save);
router.get('/registro',homeController.registro);
router.post('/guardarContacto',contactoController.save);
router.post('/editar/:id',contactoController.editar);
router.post('/borrar/:id',contactoController.borrar);


module.exports = router;