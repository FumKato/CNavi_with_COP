if(Meteor.isClient){
	student_context_operations = {
		// client/views/cnavi_view.js
		render_header: function(user){
			return '<div id="header" class="green"><div id="logo">CNavi</div><div id="headerName">Welcome back <b>' + 
				user.name + '</b></div></div>';
		},
		
		// client/views/lesson_list_view.js
		get_lesson_list_item_class: function(lesson){
			var className = this.proceeds.get_lesson_list_item_class(lesson);
			var date = new Date();
			if(lesson.month < date.getMonth() || (lesson.month == date.getMonth() && lesson.date < date.getDate())){
				className += " overed";
			}
			return className;
		},
		
		// client/views_submission_view.js
		render_button: function(){
			return '<input type="button" class="submissionButton" value="Submit" />';
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			this.proceeds.lesson_list_item_clicked($this);
			if(!$this.hasClass('overed')){
				Meteor.subscribe('questions', Session.get('myself'), $this.attr('id'), function(){
					cnavi_view.render('submission');
				});
			}
		},
		
		// client/controllers/templates/submission_controller.js
		back_button_clicked: function(){
			cnavi_view.render('lessonList');
		},
		
		// client/controllers/templates/submission_controller.js
		submission_button_clicked: function(){
			var answers = new Array();
			$('.questionAnswerTextForm').each(function(){
				answers.push($(this).val());
			});
			submissions_model.set_answers(Session.get('lesson_id'), Session.get('myself').id, answers);
			alert('Submision is completed');
			cnavi_view.render('lessonList');
		},
	};

	student_context = new Context('student', student_context_operations);
}

if(Meteor.isServer){
	student_context_operations = {
		// server/controllers/submissions_controller.js
		set_answers: function(lesson_id, user_id, answers){
			var user = this.proceeds.set_answers(lesson_id, user_id, answers);
			submissions_model.set_submissions(user_id, user.name, lesson_id, answers);
		}
	};
	
	student_context = new Context('student', student_context_operations);
}
