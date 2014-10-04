LessonsModel = function(){
	var _this = LessonsModel;
	
	_this.prototype.get_lessons_by_class_id = function(class_id){
		return Lessons.find({class_id: class_id}, {sort: {num: 1}}).fetch();
	};
	
	_this.prototype.get_lessons_by_id = function(lesson_id){
		return Lessons.findOne({_id: lesson_id});
	};
	
	_this.prototype.set_lessons = function(class_id, user_id, lesson_name, lesson_date, questions, answers){
		Meteor.call('set_lessons', class_id, user_id, lesson_name, lesson_date, function(error, result){
			if(error != null) return;
			questions_model.set_questions(result, questions, answers);
		});
	};
};

lessons_model = new LessonsModel();
