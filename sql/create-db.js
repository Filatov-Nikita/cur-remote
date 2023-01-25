import mariadb from 'mariadb';

const connection = mariadb.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456'
});

connection.then(db => {
	db.query(
		`CREATE DATABASE IF NOT EXISTS sliders`
	)
		.then(console.log)
		.catch(console.log)
		.finally(() => {
			db.end();
		});
});
