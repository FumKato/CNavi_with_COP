if(Meteor.isClient){
	assistant_context_operations = {
		render_header: function(user){
			return '<div id="header" class="red"><div id="logo">CNavi</div><div id="headerName">Welcome back <b>' + 
				user.name + '</b></div></div>';
		},
		
		// client/views/lesson_list_view.js
		get_lesson_list_item_class: function(){
			return "lessonListItem ";
		},
		
		// client/views/submission_view.js
		get_lesson_name: function(){
			var lesson = this.proceed();
			var submission = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(submission == null) return;
			return lesson.name + ': ' + submission.user_name;
		},
		
		// client/views/submission_view.js
		render_answer: function(num, question){
			var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
			var submissions = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(questions == null || submissions == null) return;
			var answers = '<div class="questionListAnswer">TA. ' + questions[0].answers[num] + '</div>' +
				'<div class="submittedAnswer">A. ' + submissions.answers[num] + '</div>';
			return answers;
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			this.proceed($this);
			Meteor.subscribe('submissions', Session.get('myself'), $this.attr('id'), function(){
				cnavi_view.render('studentList');
			});
		}
	};

	assistant_context = new Context('assistant', assistant_context_operations);
}