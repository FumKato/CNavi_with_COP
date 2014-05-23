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
		var user = users_model.get_users_by_id(user.id, user.password).fetch()[0];
		if(user == null) return;
		if(user.role == 'student'){
			return Questions.find(
				{
					lesson_id: lesson_id
				},
				{
					fields:{
						answers: 0
					}
				}
			);
		} else if(user.role == 'teacher' || user.role == 'assistant'){
			return Questions.find(
				{
					lesson_id: lesson_id
				}
			);
		}
	};
};

questions_model = new QuestionsModel;