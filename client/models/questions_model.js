QuestionsModel = function(){
	var _this = QuestionsModel;
	_this.prototype.get_questions_by_lesson_id = function(lesson_id){
		return Questions.find({lesson_id: lesson_id}).fetch();
	};
};

questions_model = new QuestionsModel();
