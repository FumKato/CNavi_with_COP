Template.class_list.helpers({
	get_classes: function(){
		return classes_model.get_classes();
	},
	
	render_class_list_item: function(class_list_item){
		return class_list_view.render(class_list_item);
	}
});

ClassListView = function(){
	var _this = ClassListView;
	
	_this.prototype.render = function(class_list_item){
		return '<tr id="' + class_list_item._id + '" class="classListTableItem"><td>' + class_list_item.name + '</td><td>' +
				class_list_item.day + '</td><td>' + class_list_item.period + '</td><td>' +
				class_list_item.semester + '</td></tr>';
	};
};

class_list_view = new ClassListView();
