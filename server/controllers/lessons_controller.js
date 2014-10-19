Meteor.publish('lessons', function(class_id){
	return lessons_model.get_lessons_by_class_id(class_id);
});

LessonsController = function(){
	var _this = LessonsController;
	
	_this.prototype.set_lessons = function(class_id, user_id, lesson_name, lesson_date){
		// Default: Do nothing
	};
};

lessons_controller = new LessonsController();

Meteor.methods({
	set_lessons: function(class_id, user_id, lesson_name, lesson_date){
		adapt_context(user_id);
		var result = lessons_controller.set_lessons(class_id, user_id, lesson_name, lesson_date);
		deactivate_context(user_id);
		return result;
	}
});
