/**
 * Created by Rytis on 2016-04-25.
 */
import Item from './models/Item';

export class Main {
    constructor() {
        console.log('hi');

        let item = new Item();
        item.get('title');

    }
}
