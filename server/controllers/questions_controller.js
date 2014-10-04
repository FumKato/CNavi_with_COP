Meteor.publish('questions', function(user, lesson_id){
	return questions_model.get_questions_by_lesson_id(user, lesson_id);
});

QuestionsController = function(){
	var _this = QuestionsController;
	
	_this.prototype.set_questions = function(lesson_id, user_id, questions, answers){
		var user = users_model.get_users_by_user_id(user_id);
		if(user == null || user.role != 'teacher') return;
		questions_model.set_questions(lesson_id, questions, answers);
	};
};

questions_controller = new QuestionsController();

Meteor.methods({
	set_questions: function(lesson_id, user_id, questions, answers){
		questions_controller.set_questions(lesson_id, user_id, questions, answers);
	}
});
