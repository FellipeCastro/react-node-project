const Annotations = require('../models/annotationData.js')

module.exports = {

    async update(req, res) {
        const { id } = req.params
        const { notes } = req.body

        try {
            const annotation = await Annotations.findOne({ _id : id })

            if (notes) {
                annotation.notes = notes
                
                await annotation.save()
            }

            return res.json(annotation)            
        } catch(err) {
            console.log(`Erro ao atualizar nota: ${err}`)
        }
    }

}