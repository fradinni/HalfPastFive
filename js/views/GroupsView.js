window.GroupsView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get('groups'));
		return this;
	},

	render: function() {
		var self = this;
		$(this.el).fadeOut(200, function() {
			$(self.el).html(self.template());
			this.listView = new GroupsListView({el: $("#groups_list"), model: groups});
			this.listView.render();
			$(self.el).fadeIn(200);
		});
		return this;
	}
});


window.GroupsListView = Backbone.View.extend({
	initialize: function() {
		if(!this.model) {
			throw new Error("No model for GroupListView !");
		}

		this.model.bind("reset", this.render, this);
	},

	render: function() {
		$(this.el).empty();
		_.each(this.model.models, function(group) {
			$(this.el).append(new GroupsListItem({model: group}).render().el);
		}, this);
		return this;
	}
});

window.GroupsListItem = Backbone.View.extend({

	tagName: "div",

	initialize: function() {
		this.template = _.template(tpl.get('group-item'));
		this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
	},

	render: function() {
		var self = this;
		$(this.el).fadeOut(200, function() {
			console.log("Model: " + self.model);
			$(self.el).html(self.template(self.model.toJSON()));
			$(self.el).addClass("row-fluid");
			$(self.el).fadeIn(200);
		});
		return this;
	}
});


window.GroupDetailsView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get('group-details'));
		this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
	},

	render: function() {
		var self = this;
		$(this.el).fadeOut(200, function() {
			$(self.el).html(self.template(self.model.toJSON()));
			var groupItems = items.filter(function(item) {
				return item.get('groupId') == self.model.get('_id');
			})
			self.itemsList = new GroupItemListView({ el: $("#photos-gallery"), model: new GroupCollection(groupItems) });
			self.itemsList.render();
			$(self.el).fadeIn(200);
		});
		return this;
	}
});


window.GroupItemListView = Backbone.View.extend({
	initialize: function() {
		if(!this.model) {
			throw new Error("No model for GroupListView !");
		}

		this.model.bind("reset", this.render, this);
	},

	render: function() {
		$(this.el).empty();
		_.each(this.model.models, function(group) {
			$(this.el).append(new GroupItemListItem({model: group}).render().el);
		}, this);
		
		var options = {
			captionAndToolbarHide: true, 
			imageScaleMethod: 'fitNoUpscale',
			margin: 0,
		};
		$("#photos-gallery a").photoSwipe(options);
		return this;
	}
});


window.GroupItemListItem = Backbone.View.extend({
	tagName: "li",

	initialize: function() {
		this.template = _.template(tpl.get('itemList-item'));

		if(!this.model) {
			throw new Error("No model for GroupListView !");
		}
		this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		$(this.el).addClass("itemList-item");
		return this;
	}
});

