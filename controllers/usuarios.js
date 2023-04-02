const { response } = require('express');


const usuariosGet = (req,res=response) =>{

    const { q, nombre = "No name", apikey, page = 1, limit = 10} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPut = (req,res) =>{

    const id = req.params.id;
    const entero = parseInt(id);

    res.json({
        msg: 'put API - controlador',
        entero
     });
 };

 const usuariosPost = (req,res) =>{

    const { nombre, edad} = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
};

const usuariosPatch = (req,res) =>{
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req,res) =>{
    res.json({
        msg: 'delete API - controlador'
     });
 };




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}