import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {

    let usuarios = await User.find({})

    usuarios.map(user => {
        console.log(user.name.firstName, user.name.lastName);
    });

    console.log("USUARIOS", usuarios);

    let usuario = await User.findOne({
        email: 'caio@outlook.com',
        age: { $gte: 18, $lt: 100 } // greater than or equal to 18 and less than 100
    })

    console.log("USUARIO", usuario);

    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};