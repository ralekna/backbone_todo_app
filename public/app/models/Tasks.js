/**
 * Created by Rytis on 2016-04-27.
 */
import { Model, View, Collection, Router, LocalStorage } from 'backbone';
import Task from './Task';

export default Collection.extend({
    url: 'api/items',
    model: Task
});
