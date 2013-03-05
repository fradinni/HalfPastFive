var AppRouter = Backbone.Router.extend({

	routes: {
		"" : "home",
		"groups": "groups",
		"groups/:id": "groupDetails"
	},

	home: function() {
		var home_view = new HomeView({el: $("#content")});
		home_view.render();
	},

	groups: function() {
		var groups_view = new GroupsView({el: $("#content")});
		groups_view.render();
	},

	groupDetails: function(id) {
		var self = this;
		var group = groups.get(id);
		var groupDetailsView = new GroupDetailsView({el: $("#content"), model: group});
		groupDetailsView.render();
	}
});


$(document).ready(function() {
	tpl.loadTemplates(["home", "groups", "group-item", "group-details", "itemList-item"], function() {
		app = new AppRouter();
		Backbone.history.start();
	});
});