/**
 * Created by Rytis on 2016-04-25.
 */
import { Model, View, Collection, Router, LocalStorage } from 'backbone';

export default class ToDoItem extends Model {
    defaults () {
        return {
            title: 'untitled',
            createdAt: new Date(),
            completed: false
        };
    }
}