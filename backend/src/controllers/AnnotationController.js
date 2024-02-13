const Annotations = require('../models/annotationData.js')

module.exports = {

    read(req, res) {
        return res.json({
            success: true
        })
    },

    create(req, res) {
        const { title, notes, priority } = request.body

        console.log(title, notes, priority)
    }
}
