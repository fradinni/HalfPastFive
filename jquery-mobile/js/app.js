var AppRouter = Backbone.Router.extend({
 
    routes:{
        "" : "home",
        "groups" : "groups",
        "groups/:all" : "groups",
        "group/:id" : "groupDetails",
        "new_group" : "new_group",
        "about" : "about"
    },

    initialize: function() {
        // Handle back button throughout the application
        $('#back').on('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
        this.searchResults = new GroupCollection(groups.models);
    },
 
    home: function() {
        this.changePage(new HomeView());
    },
 
    groups: function(param) {
        var groups_view = new GroupsView({model: this.searchResults});
        this.changePage(groups_view);
        if(param == "all") {
            $("#groups_menu").css("display", "none");
            $("#groupsList").fadeIn();
        }
    },

    groupDetails: function(id) {
        var group = _.find(groups.models, function(group) {
            return group.get("_id") == id;
        });
        this.changePage(new GroupDetailsView({model: group}));
        $('.thumbs a').touchTouch();
    },

    new_group: function() {
        this.changePage(new NewGroupView());
    },

    about: function() {
        this.changePage(new AboutView());
    },
 
    changePage: function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition = 'slide';
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
 
});

$(document).ready(function() {
    tpl.loadTemplates(["home", "groups", "new_group", "groups-list-item", "group-details", "about"], function() {
        var app = new AppRouter();
        Backbone.history.start();
    });
});