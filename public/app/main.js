/**
 * Created by Rytis on 2016-04-25.
 */
import {Application} from 'backbone.marionette';
import Tasks from './models/Tasks';
import AppView from './views/AppView';

let TodoApp = Application.extend({
    initialize(options) {
        console.log(options);
    }
});

export class Main {
    constructor() {

        let app = new TodoApp({name: 'My todo'});

        app.on('initialize:after', () => {
            console.log('started');
        });

        app.start();

        // app.rootView = new AppView();

        // let item = new Task();
        // item.get('title');

        debugger;

    }
}
