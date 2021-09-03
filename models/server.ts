import express, { Application } from 'express';
import userRoutes from '../routes/usuario';




class Server {

	private app: Application;
	private port: string;
	private apiPaths = {
		usuarios: '/api/usuarios'
	}

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';

		this.routes();//lo llamamos al constructor para definir mis rutas
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