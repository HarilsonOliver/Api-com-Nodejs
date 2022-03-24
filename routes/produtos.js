const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//LISTA TODOS PRODUTOS
router.get('/',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    });
});

//INSERE UM PRODUTO

router.post('/', (req, res,next)=>{

    mysql.getConnection((error,conn)=>{
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field)=>{
                conn.release();

                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso!',
                    id_produto: resultado.insertId
                })
            }
        )
    });

});

//LISTA DADOS DE UM PRODUTO
router.get('/:id_produto',(req, res, next) =>{
    const id = req.params.id_produto

    if(id === 'especial' ){
        res.status(201).send({
            mensagem: 'ID especial correto',
            id: id
        })

    }else{
        res.status(200).send({
            mensagem: "Voce passou um ID"
        })
    }

    res.status(200).send({
        mensagem: 'Usando o GET de produto exclusivo',
        id: id
    });
});

//ALTERA UM PRODUTO

router.patch('/', (req, res,next)=>{
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

//DELETA UM PRODUTO
router.delete('/', (req, res,next)=>{
    res.status(201).send({
        mensagem: 'Produto deletado'
    })
})

module.exports = router;