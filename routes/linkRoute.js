// ORGANIZING THE CODE
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.send('Hello World!'));

// module.exports = router;


// CREATING A DOCUMENT BY FORMS 
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.send('Hello World!'));

// router.post('/', express.urlencoded({ extended: true}), linkController.addLink);

// module.exports = router;


//INTEGRATING WITH FRONTEND
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// module.exports = router;


//SEARCHING ALL LINKS
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/all', linkController.allLinks);

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// module.exports = router;


//DELETING A DOC
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/all', linkController.allLinks);

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// router.delete('/:id', linkController.deleteLink);

// router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);

// module.exports = router;


//DELETING A DOC - FRONTEND
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/all', linkController.allLinks);

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// router.delete('/:id', linkController.deleteLink);

// router.delete('/', express.json(), linkController.deleteLink);

// module.exports = router;


//ANOTHER WAY TO DELETE - FORM METHOD OVERRIDE
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController');
// var methodOverride = require('method-override');

// router.use(methodOverride('_method'));

// router.get('/all', linkController.allLinks);

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// router.delete('/:id', linkController.deleteLink);

// router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);

// module.exports = router;

//ADJUSTING THE ROUTES
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController');
// var methodOverride = require('method-override');

// router.use(methodOverride('_method'));

// router.get('/', linkController.allLinks);

// router.get('/add', (req, res) => res.render('index', { error: false, body: {} }));

// router.get('/:title', linkController.redirect)

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

// router.delete('/:id', linkController.deleteLink);

// router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);

// module.exports = router;


//EDITING LINKS
const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
var methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', linkController.allLinks);
router.get('/add', (req, res) => res.render('add', { error: false, body: {} }));
router.get('/:title', linkController.redirect);
router.get('/edit/:id', linkController.loadLink);

router.post('/', express.urlencoded({ extended: true }), linkController.addLink);
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink);

router.delete('/:id', linkController.deleteLink);
router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);

module.exports = router;