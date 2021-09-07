import { Request, Response } from "express";
import Usuario from '../models/usuario';



export const getUsuarios = async(req: Request, res: Response) => {

	const usuarios = await Usuario.findAll();

	res.json({ usuarios });
	
}

export const getUsuario = async(req: Request, res: Response) => {

	const { id } = req.params;

	const usuario = await Usuario.findByPk(id);

	if ( usuario ) {
		res.json({ usuario })
	} else {
		res.status(404).json({
			msg: `No existe usuario con el id: ${ id }`
		});
	}

	
}


export const postUsuario = async(req: Request, res: Response) => {

	const { body } = req;

	try {

		const existeEmail = await Usuario.findOne({
			where:{
				email: body.email
			}
		});

		if(existeEmail) {
			return res.status(400).json({
				msg: `El email ${body.email}, ya existe`
			});
		}

		// const usuario =  Usuario.build(body);
		// await usuario.save();
		const usuario = await Usuario.create(body);

		res.json( usuario );
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg:'Comuniquese con el administrador'
		})
	}

	
}

export const putUsuario = async(req: Request, res: Response) => {

	const { id } = req.params;
	const { body } = req;

	try {

		const usuario = await Usuario.findByPk(id);

		if( !usuario ){
			return res.status(400).json({
				msg: `No existe un usuario con el id: ${ id }`
			});
		}

		await usuario.update( body );

		res.json(usuario);
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg:'Comuniquese con el administrador'
		})
	}
	
}


export const deleteUsuario = ( req: Request, res: Response ) => {

	const { id } = req.params;

	res.json({
		msg: 'delete Usuario',
		id
	});

}