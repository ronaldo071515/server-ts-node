import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';
import db from '../db/connection';




class Server {

	private app: Application;
	private port: string;
	private apiPaths = {
		usuarios: '/api/usuarios'
	}

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';

		this.dbConnection();

		this.middlewares();

		this.routes();//lo llamamos al constructor para definir mis rutas
	}

	//Conectar BD
	async dbConnection() {

		try {

			await db.authenticate();
			console.log('db online');
			
		} catch (error: any ) {
			throw new Error(error);
		}

	}

	//funciones que se ejecutan antes que nuestras rutas
	middlewares() {
		//CORS
		this.app.use( cors() );

		//lectura del body
		this.app.use( express.json() );

		//Carpeta publica
		this.app.use( express.static('public') )

	}

	routes() {
		this.app.use( this.apiPaths.usuarios, userRoutes )
	}


	listen() {
		this.app.listen( this.port, () => {
			console.log('Server runing in PORT: ', this.port);
		})
	}

}


export default Server;