import { Sequelize } from 'sequelize';


//creamos una nueva instancia de sequelize
const db = new Sequelize('node', 'root', '1234', {
	host: 'localhost',
	dialect: 'mysql',
	// logging: false
});


export default db;