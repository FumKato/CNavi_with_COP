Template.student_list.helpers({
	get_lesson_name: function(){
		var lesson = lessons_model.get_lessons_by_id(Session.get('lesson_id'));
		if(lesson == null) return;
		return lesson.name;
	},
	
	get_submissions: function(){
		return submissions_model.get_submissions_by_lesson_id(Session.get('lesson_id'));
	}
});
