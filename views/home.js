/**
 * Created by gerardo on 4/11/2016.
 */

App.Views.Home = Marionette.ItemView.extend({
    htmlFile: 'views/home.html',

    getTemplate: function () {
        return _.template(this.html);
    }

    //tagName: 'h1',
    //template: _.template('Hello Inicio ')
});