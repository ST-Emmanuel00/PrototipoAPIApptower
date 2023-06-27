const { Router } = require('express');
const {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva
} = require('../controllers/reservas');

const router = Router();

router.get('/', getReservas);
router.post('/', createReserva);
router.put('/', updateReserva);
router.delete('/', deleteReserva);

module.exports = router;