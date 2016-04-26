/**
 * Created by Rytis on 2016-04-26.
 */
"use strict";

const _ = require('lodash');
const router = require('express').Router();

const itemKeys = ['id', 'title', 'createdAt', 'completed'];
let id = 1;
let items = {
    1: {id: 1, name: 'First'}
};

router
    .post('/', (request, response) => {
        let item = _.pick(request.body, itemKeys);
        item.id = ++id;
        items[item.id] = item;
        response.json(item);
    })
    .put('/', (request, response) => {
        let item = _.pick(request.body, itemKeys);
        if (items[item.id]) {
            items[item.id] = item;
            response.json(item);
        } else {
            response.status(404).end();
        }
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

    });

module.exports = router;