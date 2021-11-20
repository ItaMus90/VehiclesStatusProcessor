const express = require('express');
const router = express.Router();

module.exports = app => {
    const vehicleCtrl = require('../controllers/vehicleCtrl')(app);
    router.get('/:vehicle_id/data/',  vehicleCtrl.getVehicle);
    return router;
}