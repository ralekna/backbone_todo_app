/**
 * Created by Rytis on 2016-04-25.
 */
import ToDoItem from './models/ToDoItem';

export class Main {
    constructor() {
        console.log('hi');

        let item = new ToDoItem();
        item.get('title');

    }
}
