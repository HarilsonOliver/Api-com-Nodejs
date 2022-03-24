const express = require('express');
const router = express.Router();

//LISTA TODOS PEDIDOS
router.get('/',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//INSERE UM PEDIDO

router.post('/', (req, res,next)=>{

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'Pedido inserido',
        pedidoCriado: pedido
    })
})

//LISTA DADOS DE UM PEDIDO
router.get('/:id_pedido',(req, res, next) =>{
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    });
});

//DELETA UM PEDIDO
router.delete('/', (req, res,next)=>{
    res.status(201).send({
        mensagem: 'Pedido deletado'
    })
})

module.exports = router;