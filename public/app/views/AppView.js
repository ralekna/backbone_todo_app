import { Model, View, Collection, Router, LocalStorage } from 'backbone';
import { ItemsView, LayoutView } from 'backbone.marionette';
import taskTemplate from './templates/task-view.tmpl.html!text';

console.log(taskTemplate);

export default LayoutView.extend({
    
    el: 'body',

    template: taskTemplate,

    initialize() {
        console.log('app view');
    }

});