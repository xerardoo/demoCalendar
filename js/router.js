App.Instance = new Marionette.Application();


App.Utils.loadTemplates(App.Views)
    .then(function () {

        var publicRouter = Marionette.AppRouter.extend({

            initialize: function () {
              new App.Views.Root();
            },

            routes: {
                "": "index",
                "calendar": "calendar"
            },

            index: function () {
                App.Channels.Root.trigger('set:content', new App.Views.Home());
            },

            calendar: function () {
                App.Channels.Root.trigger('set:content', new App.Views.Calendar());
            }
        });


        App.Instance.on("start", function () {
            App.Router.Public = new publicRouter();
            Backbone.history.start()
        });//start

        App.Instance.start();
    });

