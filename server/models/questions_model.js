QuestionsModel = function(){
	var _this = QuestionsModel;
	_this.prototype.set_questions = function(lesson_id, questions, answers){
		Questions.insert({
			lesson_id: lesson_id,
			questions: questions,
			answers: answers
		});
	};
	
	_this.prototype.get_questions_by_lesson_id = function(user, lesson_id){
		// Default: Do nothing
	};
};

questions_model = new QuestionsModel;