window.HomeView = Backbone.View.extend({
	initialize: function() {
		this.template = _.template(tpl.get('home'));
	},

	render: function() {
		var self = this;
		$(this.el).fadeOut(200, function() {
			$(self.el).html(self.template());
			$(self.el).fadeIn(200);
		});
		
	}
});