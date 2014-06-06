if(Meteor.isClient){
	Deps.autorun(function(){
		if(Session.get('myself') != null){
			switch(Session.get('myself').role){
				case 'teacher':
					teacher_context.adapt('CNaviView', 'render_header', 'render_header');
					teacher_context.adapt('LessonListView', 'get_lesson_list_item_class', 'get_lesson_list_item_class');
					teacher_context.adapt('SubmissionView', 'get_lesson_name', 'get_lesson_name');
					teacher_context.adapt('SubmissionView', 'render_answer', 'render_answer');
					teacher_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					break;
				case 'assistant':
					assistant_context.adapt('CNaviView', 'render_header', 'render_header');
					assistant_context.adapt('LessonListView', 'get_lesson_list_item_class', 'get_lesson_list_item_class');
					assistant_context.adapt('SubmissionView', 'get_lesson_name', 'get_lesson_name');
					assistant_context.adapt('SubmissionView', 'render_answer', 'render_answer');
					assistant_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					break;
				case 'student':
					student_context.adapt('CNaviView', 'render_header', 'render_header');
					student_context.adapt('LessonListController', 'lesson_list_item_clicked', 'lesson_list_item_clicked');
					break;
			}
		}
	});
}