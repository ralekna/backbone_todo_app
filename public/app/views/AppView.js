import { Model, View, Collection, Router, LocalStorage } from 'backbone';
import { ItemsView, LayoutView } from 'backbone.marionette';

//console.log(taskTemplate);

export default LayoutView.extend({

    template: _=>`<div><div class="list"></div><div class="form"></div></div>`,

    regions: {
        list: '.list',
        form: '.form'
    }

});