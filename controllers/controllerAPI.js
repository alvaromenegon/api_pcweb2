const Animal = require('../models/models_nosql/animal');

module.exports = {
    async getAnimais(req, res) {
        const animals = await Animal.find();
        return res.json({ "data": { "status": "success", animals } });
    },
    async getAnimalById(req, res) {
        const { id } = req.params;
        const animal = await Animal.findById(id);
        res.json({ "data": { "status": "success", animal } });
    },
    async postAnimal(req, res) {
        const { nome, nomeDoProprietario, endereco, tipo, raca } = req.body;
        const animal = new Animal({ nome, nomeDoProprietario, endereco, tipo, raca });
        await console.log(animal)
        await animal.save().then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    },
    async putAnimal(req, res) {
        await Animal.findOneAndUpdate({ _id: { $in: req.params.id } }, req.body).then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    },
    async deleteAnimal(req, res) {
        await Animal.findOneAndRemove({ _id: { $in: req.params.id } }).then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    }

}
