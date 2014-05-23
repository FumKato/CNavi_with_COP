Meteor.publish('questions', function(user, lesson_id){
	return questions_model.get_questions_by_lesson_id(user, lesson_id);
});
