/**
 * Created by User on 2016-06-12.
 */
import { ItemView } from 'backbone.marionette';
export default ItemView.extend({

    template: _=>`
        <form id="todoCreateForm">
            <div>
                <label for="title">Title: </label>
                <input id="title" type="text" value="${_.title}">
            </div>
            <div>
                <input type="submit" id="submit" value="Submit">
            </div>
        </form>`,

    events: {
        'submit #todoCreateForm': 'onSubmit',
        'click #submit':'onSubmit'
    },

    onSubmit(event) {
        event.preventDefault();
        debugger;
    }

});