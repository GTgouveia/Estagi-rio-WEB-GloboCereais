const express = require('express');
const router = express.Router();
const controller = require('../controllers/cow-controller');

router.get('/',controller.get);
router.get('/:idFilial',controller.getByIdFilial);
router.get('/admin/:id',controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
