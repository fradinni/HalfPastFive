window.Group = Backbone.Model.extend({
	idAttribute: "_id",
	defaults: {
		"name": "New Group"
	}
});


window.GroupCollection = Backbone.Collection.extend({
	model: Group
});


window.groups = new GroupCollection([
	{_id: 1, name: "Ski Noel 2012"},
	{_id: 2, name: "Ete 2012"},
	{_id: 3, name: "Divers"}
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