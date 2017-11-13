const express = require('express'),
	router = express.Router(),
	tasksModel = require('../models/tasksModel');

//READ
router.get('/', (req,res) => {
	tasksModel
		.getAll()
		.then((tasksData) => {
			res.render('tasks/index', {tasksData});
		});
});

router.get('/new', (req, res) => {
	res.render('tasks/new');		
})

router.get('/:id/edit', (req, res) => {
	const id = parseInt(req.params.id);

	tasksModel
		.getById(id)
		.then((tasksData) => {
			res.render('tasks/edit', tasksData);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;

	tasksModel
		.getById(id)
		.then((tasksData) => {
			res.render('tasks/show', tasksData);
		});
});

//CREATE
router.post('/', (req, res) => {
	const task = req.body.task,
		priority = req.body.priority,
		status = req.body.status,
		start_date = req.body.start_date,
		due_date = req.body.due_date,
		completion = req.body.completion;

	tasksModel
		.create(task, priority, status, start_date, due_date, completion)
		.then(data => res.json(data))
		.catch(err => console.log('ERROR: ', err));
});

//UPDATE
router.put('/:id', (req,res) => {
	const task = req.body.task,
		priority = req.body.priority,
		status = req.body.status,
		start_date = req.body.start_date,
		due_date = req.body.due_date,
		completion = req.body.completion;
		id = req.params.id;

	tasksModel
		.update(task, priority, status, start_date, due_date, completion, id)
		.then((data) => res.json(data))
		.catch(err => console.log('ERROR: ', err));
})

//DELETE
router.delete('/:id', (req,res) => {
	const id = parseInt(req.params.id);

	// console.log(id);
	tasksModel
		.destroy(id)
		.then((data) => res.json(data))
		.catch(err => console.log('ERROR: ', err));
})

module.exports = router;