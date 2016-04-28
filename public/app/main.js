/**
 * Created by Rytis on 2016-04-25.
 */
import * as Mn from 'backbone.marionette';
import Tasks from './models/Tasks';


export class Main {
    constructor() {
        console.log('hi');

        let items = new Tasks();


        // let item = new Task();
        // item.get('title');

        debugger;

        this.layout = new Mn.LayoutView.extend({
            regions: {
                list: '#list',
                form: '#form'
            }
        });

    }
}
