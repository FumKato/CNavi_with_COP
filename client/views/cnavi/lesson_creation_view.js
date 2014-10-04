LessonCreationView = function(){
	var _this = LessonCreationView;
};

Template.lesson_creation.helpers({
	get_class_name: function(){
		if(Session.get('class_id') == null) return;
		return classes_model.get_classes_by_id(Session.get('class_id')).name;
	}
});
