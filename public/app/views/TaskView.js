/**
 * Created by User on 2016-06-10.
 */
import { ItemView } from 'backbone.marionette';
export default ItemView.extend({

    events: {
        'change input': 'setCompleted',
        'change': 'render'
    },

    template: _=>`<li ${ _.completed ? 'style="text-decoration: line-through"' : ""}><input type="checkbox" ${ _.completed ? "checked" : ""}><strong>${_.title}</strong></li>`,

    setCompleted(event) {
        this.model.set('completed', event.target.checked);
    }
});