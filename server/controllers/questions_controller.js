Meteor.publish('questions', function(user, lesson_id){
	return questions_model.get_questions_by_lesson_id(user, lesson_id);
});

QuestionsController = function(){
	var _this = QuestionsController;
	
	_this.prototype.set_questions = function(lesson_id, user_id, questions, answers){
		// Default: Do nothing
	};
};

questions_controller = new QuestionsController();

Meteor.methods({
	set_questions: function(lesson_id, user_id, questions, answers){
		adapt_context(user_id);
		questions_controller.set_questions(lesson_id, user_id, questions, answers);
		deactivate_context(user_id);
	}
});
