/**
 * Created by gerardo on 4/11/2016.
 */


App.Views.Calendar = Marionette.ItemView.extend({

    htmlFile: 'views/calendar.html',

    getTemplate: function () {
        return _.template(this.html)
    },

    onRender: function () {

        var component = new this.Component();

        this.$el.find('#calendar').append(component.el);


    },
    onShow: function () {

        // $('body').find('.fc-today-button').trigger('click');
    }

});


//http://stackoverflow.com/questions/20285201/using-fullcalendar-with-backbone-and-require

App.Views.Calendar = Backbone.View.extend({
    //  el: "#singlecolumn",
    initialize: function (models) {
        //  _.bindAll(this, "render");
        //this.eventCollection = models.model;
        //this.eventCollection.bind('reset', this.addAll);
        // this.render();
    },

    render: function () {
        console.log("Rendering Calendar...");
        this.$el.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay',
                ignoreTimezone: false
            },
            selectable: true,
            selectHelper: true,
            editable: false
        });

        this.addAll();
    },

    addAll: function () {
        console.log("Fill Data Calendar...");
        this.$el.fullCalendar('addEventSource', [
                {
                    title: 'All Day Event',
                    start: '2016-01-01'
                },
                {
                    title: 'Long Event',
                    start: '2016-01-07',
                    end: '2016-01-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-01-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-01-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-01-11',
                    end: '2016-01-13'
                },
                {
                    title: 'Meeting',
                    start: '2016-01-12T10:30:00',
                    end: '2016-01-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2016-01-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2016-01-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2016-01-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2016-01-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2016-01-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-01-28'
                }
            ]
        );
    }

});