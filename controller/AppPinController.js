const AppPin = require('../modelos/AppPin');

exports.getAppPins = async (req, res) => {
    try {
        const pins = await AppPin.findAll();
        res.json(pins);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener registros de PIN' });
    }
};

exports.getAppPinById = async (req, res) => {
    const { id } = req.params;
    try {
        const pin = await AppPin.findByPk(id);
        if (!pin) {
            return res.status(404).json({ error: 'Registro de PIN no encontrado' });
        }
        res.json(pin);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener registro de PIN por ID' });
    }
};
