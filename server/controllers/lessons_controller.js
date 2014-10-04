Meteor.publish('lessons', function(class_id){
	return lessons_model.get_lessons_by_class_id(class_id);
});

LessonsController = function(){
	var _this = LessonsController;
	
	_this.prototype.set_lessons = function(class_id, user_id, lesson_name, lesson_date){
		var user = users_model.get_users_by_user_id(user_id);
		if(user == null || user.role != 'teacher') return;
		return lessons_model.set_lessons(class_id, lesson_name, lesson_date);
	};
};

lessons_controller = new LessonsController();

Meteor.methods({
	set_lessons: function(class_id, user_id, lesson_name, lesson_date){
		return lessons_controller.set_lessons(class_id, user_id, lesson_name, lesson_date);
	}
});
