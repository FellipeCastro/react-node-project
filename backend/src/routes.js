const express = require('express')
const routes = express.Router()

const AnnotationController = require('./controllers/AnnotationController.js')
const PriorityController = require('./controllers/PriorityController.js')
const ContentController = require('./controllers/ContentController.js')

// Rota Annotation
routes.get('/annotations', AnnotationController.read)
routes.post('/annotations', AnnotationController.create)
routes.delete('/annotations/:id', AnnotationController.delete)

//Rota Priority
routes.get('/priorities', PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)

// Rota Content
routes.post('/contents/:id', ContentController.update)

module.exports = routes
