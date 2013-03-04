///////////////////////////////////////////////////////////////////////////////
//
// Half Past Five
// Author: Nicolas FRADIN
// Date: 04/03/2013
//
///////////////////////////////////////////////////////////////////////////////

var HPFRouter = Backbone.Router.extend({
	
	// Define HalfPastFive routes
	routes: {
		"":"list",
		"list":"list",
		"groups/:id","groupDetails",
		"groups/:id/items":"groupItems"
	},

	initialize: function() {

	},

	list: function() {

	},

	groupDetails: function(id) {

	},

	groupItems: function(id) {

	},

	changePage: function(page) {
		
	}
});