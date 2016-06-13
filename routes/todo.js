/**
 * Created by Rytis on 2016-04-26.
 */
const _ = require('lodash');
const router = require('express').Router();

const itemKeys = ['id', 'title', 'createdAt', 'completed'];
let id = 1;
let items = {
    1: {id: 1, title: 'First', completed: false}
};

router
    .post('/', (request, response) => {
        let item = _.pick(request.body, itemKeys);
        item.id = ++id;
        items[item.id] = item;
        response.json(item);
    })
    .put('/:id', (request, response) => {
        let item = _.pick(request.body, itemKeys);
        item.id = request.params.id;
        items[request.params.id] = item;
        response.json(item);
    })
    .get('/', (request, response) => {
        response.json(_.values(items));
    })
    .get('/:id', (request, response) => {
        if (items[request.params.id]) {
            response.json(items[request.params.id]);
        } else {
            response.status(404).end();
        }

    })
    .delete('/:id', (request, response) => {
        if (items[request.params.id]) {
            delete items[request.params.id];
            response.status(200);
        } else {
            response.status(404).end();
        }
    });

module.exports = router;