if(Meteor.isClient){
	Deps.autorun(function(){
		if(Session.get('myself') != null){
			switch(Session.get('myself').role){
				case 'teacher':
					teacher_context.adapt('CNaviView', 'render_header', 'render_header');
					teacher_context.adapt('LessonListView', 'render_button', 'render_create_button');
					teacher_context.adapt('SubmissionView', 'render_button', 'render_register_button');
					teacher_context.adapt('SubmissionView', 'render_answer', 'render_answer');
					teacher_context.adapt('SubmissionView', 'get_lesson_name', 'get_lesson_name');
					teacher_context.adapt('LessonListController', 'create_button_clicked', 'create_button_clicked');
					teacher_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					teacher_context.adapt('SubmissionController', 'back_button_clicked', 'back_button_clicked');
					teacher_context.adapt('SubmissionController', 'registration_button_clicked', 'registration_button_clicked');
					break;
				case 'assistant':
					assistant_context.adapt('CNaviView', 'render_header', 'render_header');
					assistant_context.adapt('SubmissionView', 'render_button', 'render_button');
					assistant_context.adapt('SubmissionView', 'render_answer', 'render_answer');
					assistant_context.adapt('SubmissionView', 'get_lesson_name', 'get_lesson_name');
					assistant_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					assistant_context.adapt('SubmissionController', 'back_button_clicked', 'back_button_clicked');
					assistant_context.adapt('SubmissionController', 'registration_button_clicked', 'registration_button_clicked');
					break;
				case 'student':
					student_context.adapt('CNaviView', 'render_header', 'render_header');
					student_context.adapt('SubmissionView', 'render_button', 'render_button');
					student_context.adapt('LessonListView', 'get_lesson_list_item_class', 'get_lesson_list_item_class');
					student_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					student_context.adapt('SubmissionController', 'back_button_clicked', 'back_button_clicked');
					student_context.adapt('SubmissionController', 'submission_button_clicked', 'submission_button_clicked');
					break;
			}
		}
	});
}

if(Meteor.isServer) {
	adapt_context = function(user_id){
		var user = users_model.get_users_by_user_id(user_id);
		switch(user.role){
			case 'teacher':
				teacher_context.adapt('LessonsController', 'set_lessons', 'set_lessons');
				teacher_context.adapt('QuestionsController', 'set_questions', 'set_questions');
				teacher_context.adapt('SubmissionsController', 'set_scores', 'set_scores');
				break;
			case 'assistant':
				assistant_context.adapt('SubmissionsController', 'set_scores', 'set_scores');
				break;
			case 'student':
				student_context.adapt('SubmissionsController', 'set_answers', 'set_answers');
				break;
		}
	};
	
	deactivate_context = function(user_id){
		var user = users_model.get_users_by_user_id(user_id);
		switch(user.role){
			case 'teacher':
				teacher_context.deactivate('LessonsController', 'set_lessons');
				teacher_context.deactivate('QuestionsController', 'set_questions');
				teacher_context.deactivate('SubmissionsController', 'set_scores');
				break;
			case 'assistant':
				assistant_context.deactivate('SubmissionsController', 'set_scores');
				break;
			case 'student':
				student_context.deactivate('SubmissionsController', 'set_answers');
				break;
		}
	};
}
