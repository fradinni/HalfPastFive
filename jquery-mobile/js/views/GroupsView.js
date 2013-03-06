window.GroupsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('groups'));
        this.allGroupsTriggered = false;
    },

    render: function () {
        $(this.el).html(this.template());
		this.listView = new GroupsListView({el: $('#groupsList', this.el), model: this.model});
        this.listView.render();
        return this;
    },

    events: {
        "keyup .search-query":"search",
        "click .ui-input-clear" : "search",
        "click #btn_all_groups" : "all_groups"
    },

    search: function () {
        var key = $('.search-query').val();
        console.log('search ' + key);
        this.model.findByName(key);

        if(!this.allGroupsTriggered) {
        	this.all_groups();
        }
    },

    all_groups: function() {
    	$("#groups_menu").css("display", "none");
        $("#groupsList").fadeIn();
        allGroupsTriggered = true;
    }

});

window.GroupsListView = Backbone.View.extend({

    initialize:function () {
        this.model.bind("reset", this.render, this);
    },

    render: function () {
        $(this.el).empty();
        $('#groups_menu').remove();
        _.each(this.model.models, function (group) {
            $(this.el).append(new GroupsListItemView({model:group}).render().el);
        }, this);
        $('#groupsList').listview('refresh');
        return this;
    }
});

window.GroupsListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.template = _.template(tpl.get('groups-list-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});


window.GroupDetailsView = Backbone.View.extend({

    initialize:function () {
        this.template = _.template(tpl.get('group-details'));
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});


window.NewGroupView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('new_group'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});