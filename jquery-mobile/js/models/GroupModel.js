window.Group = Backbone.Model.extend({
	idAttribute: "_id",
	defaults: {
		"name": "New Group"
	}
});


window.GroupCollection = Backbone.Collection.extend({
	model: Group,

	findByName: function(name) {
		if(name == "") {
			this.reset(groups.models);
			console.log("reset");
			return;
		}

		var model = _.filter(this.models, function(model) {
			return model.get('name').toLowerCase().indexOf(name.toLowerCase()) >= 0;
		});

		console.log("Search result =" + model);
		
		this.reset(model);
	}
});


window.groups = new GroupCollection([
	{_id: 1, name: "Ski Noel 2012"},
	{_id: 2, name: "Ete 2012"},
	{_id: 3, name: "Divers"},
	{_id: 4, name: "Paris"},
	{_id: 5, name: "Londres 2010"},
	{_id: 5, name: "Londres 2012"},
	{_id: 6, name: "Berlin 2010"},
	{_id: 7, name: "Disney Land 2013"},
	{_id: 8, name: "Val Thorens 2013"},
	{_id: 9, name: "Anniversaire Pauline 2012"},
	{_id: 10, name: "Travaux Appart Paris"},
	{_id: 11, name: "Les Enfants"},
	{_id: 12, name: "Plage"},
	{_id: 13, name: "En terrasse"},
	{_id: 14, name: "Souvenirs souvenirs"},
	{_id: 15, name: "Divers"},
	{_id: 16, name: "Pantheon"},
	{_id: 17, name: "Grece 2011"},
	{_id: 18, name: "Demenagement Paris"},
	{_id: 19, name: "Zoo"},
	{_id: 20, name: "Voyage New York 2008"}
]);


window.Item = Backbone.Model.extend({
	idAttribute: "_id",
	defaults: {
	},
});


window.ItemCollection = Backbone.Collection.extend({
	model: Item
});


window.items = new ItemCollection([
	{_id: 1, groupId: 3, title: "Clock", thumb: "clock-icon.png", full: "clock-icon.png"},
	{_id: 2, groupId: 3, title: "Groups", thumb: "groups-icon.png", full: "groups-icon.png"},
	{_id: 3, groupId: 3, title: "Home", thumb: "home-icon.png", full: "home-icon.png"},
	{_id: 4, groupId: 2, title: "", thumb: "thumb/001.jpg", full: "full/001.jpg"},
	{_id: 5, groupId: 2, title: "", thumb: "thumb/002.jpg", full: "full/002.jpg"},
	{_id: 6, groupId: 2, title: "", thumb: "thumb/003.jpg", full: "full/003.jpg"},
	{_id: 7, groupId: 2, title: "", thumb: "thumb/004.jpg", full: "full/004.jpg"},
	{_id: 8, groupId: 2, title: "", thumb: "thumb/005.jpg", full: "full/005.jpg"},
	{_id: 9, groupId: 2, title: "", thumb: "thumb/006.jpg", full: "full/006.jpg"},
	{_id: 10, groupId: 2, title: "", thumb: "thumb/007.jpg", full: "full/007.jpg"},
	{_id: 11, groupId: 2, title: "", thumb: "thumb/008.jpg", full: "full/008.jpg"},
	{_id: 12, groupId: 2, title: "", thumb: "thumb/009.jpg", full: "full/009.jpg"},
	{_id: 13, groupId: 2, title: "", thumb: "thumb/010.jpg", full: "full/010.jpg"}
]);