const db = require('./setup.js');

function getAll() {
	const queryPromise = db.manyOrNone(`SELECT * FROM tasks`);
	return queryPromise;
}

function getById(id) {
	const queryPromise = db.one(`SELECT * FROM tasks WHERE tasks.id=$1`, [id]);
	return queryPromise;
}

function create(task, priority, status, start_date, due_date, completion) {
	const queryPromise = db.one(`INSERT INTO tasks (task, priority, status, start_date, due_date, completion) VALUES ($1,$2, $3, $4, $5, $6) RETURNING id`, [task, priority, status, start_date, due_date, completion]);
	return queryPromise;
}

function update(task, priority, status, start_date, due_date, completion, id) {
	const queryPromise = db.one(`UPDATE tasks SET task=$1, priority=$2, status=$3, start_date=$4, due_date=$5, completion=$6 WHERE id=$7 RETURNING id`, [task, priority, status, start_date, due_date, completion, id]);
	return queryPromise;
}

function destroy(id) {
	const queryPromise = db.none(`DELETE FROM tasks WHERE tasks.id=$1`, [id]);
	return queryPromise;
}

module.exports = { getAll, getById, create, update, destroy };


