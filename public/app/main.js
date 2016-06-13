/**
 * Created by Rytis on 2016-04-25.
 */
import {Application} from 'backbone.marionette';
import Tasks from './models/Tasks';
import TasksView from './views/TasksView';
import FormView from './views/FormView';
import AppView from './views/AppView';
let TodoApp = Application.extend({
    // initialize(options) {
    //     console.log(options);
    // }
});

export class Main {
    constructor() {

        let app = new Application(); // new TodoApp({name: 'My todo'});

        app.addRegions({
            mainRegion: '#container'
        });

        app.on("start", function(){

            let tasks = new Tasks();
            tasks.fetch();


            let appView = new AppView();

            appView.on('show',()=> {
                appView.list.show(new TasksView({
                    collection: tasks
                }));

                appView.form.show(new FormView());
            });

            app.mainRegion.show(appView);



            // app.mainRegion.show();
        });

        app.start();

        // app.rootView = new AppView();

        // let item = new Task();
        // item.get('title');

        // debugger;

    }
}
