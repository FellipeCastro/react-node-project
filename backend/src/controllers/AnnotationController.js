const Annotations = require('../models/annotationData.js')

module.exports = {

    async read(req, res) {
        const annotationList = await Annotations.find()

        return res.json(annotationList)
    },

    async create(req, res) {
        const { title, notes, priority } = request.body

        console.log(title, notes, priority)
    }
}
