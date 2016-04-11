/**
 * Created by gerardo on 4/11/2016.
 */



window.App = {
    Instance: {},
    Models: {},
    Channels: {},
    Collections: {},
    Views: {},
    Router: {},
    Utils: {}
};

App.Utils.loadTemplates = function (Views) {
    var deferred = $.Deferred();
    var promises = [];

    $.each(Object.keys(Views), function (i, view) {
        try {
            var request = $.get(Views[view].prototype.htmlFile)
                .done(function (html) {
                    Views[view].prototype.html = html;
                });
            promises.push(request);
        } catch (e) {
            console.log(e)
        }
    });

    $.when.apply($, promises)
        .done(function (res) {
            deferred.resolve(res);
        })
        .fail(function (err) {
            deferred.reject(err);
        });

    return deferred.promise();
};


App.Views.Root = Marionette.LayoutView.extend({

    el: 'body',

    regions: {
        mainNavbar: '#mainNavbar',
        leftNavbar: '#leftNavbar',
        views: '#views',
        footer: '#footer'
    },

    initialize: function () {
        var self = this;
        App.Channels.Root = Backbone.Radio.channel('root');

        this.listenTo(App.Channels.Root, 'set:content', function (contentView) {
            self.getRegion('views').show(contentView);
        });

    }
});