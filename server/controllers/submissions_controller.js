Meteor.publish('submissions', function(user, lesson_id){
	return submissions_model.get_submissions_by_lesson_id(user, lesson_id);
});
