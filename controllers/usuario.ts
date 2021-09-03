import { Request, Response } from "express";



export const getUsuarios = (req: Request, res: Response) => {

	res.json({
		msg: 'get Usuarios'
	})
	
}

export const getUsuario = (req: Request, res: Response) => {

	const { id } = req.params;

	res.json({
		msg: 'get Usuario',
		id
	})
	
}


export const postUsuario = (req: Request, res: Response) => {

	const { body } = req;

	res.json({
		msg: 'post Usuario',
		body
	})
	
}

export const putUsuario = (req: Request, res: Response) => {

	const { id } = req.params;
	const { body } = req;

	res.json({
		msg: 'put Usuario',
		body,
		id
	})
	
}


export const deleteUsuario = ( req: Request, res: Response ) => {

	const { id } = req.params;

	res.json({
		msg: 'delete Usuario',
		id
	});

}