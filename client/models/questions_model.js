QuestionsModel = function(){
	var _this = QuestionsModel;
	
	_this.prototype.get_questions_by_lesson_id = function(lesson_id){
		return Questions.find({lesson_id: lesson_id}).fetch();
	};
	
	_this.prototype.set_questions = function(lesson_id, questions, answers){
		Meteor.call('set_questions', lesson_id, Session.get('myself').id, questions, answers);
	};
};

questions_model = new QuestionsModel();
