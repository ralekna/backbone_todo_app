/**
 * Created by Rytis on 2016-04-27.
 */
import { CollectionView } from 'backbone.marionette';
import { Model, View, Collection, Router, LocalStorage } from 'backbone';
import TaskView from './TaskView';

export default CollectionView.extend({

    tagName: 'ul',
    childView: TaskView,


    collectionEvents: {
        "sync": "render"
    }
});