SubmissionView = function(){
	var _this = SubmissionView;
	
	_this.prototype.get_lesson_name = function(){
		var lesson = lessons_model.get_lessons_by_id(Session.get('lesson_id'));
		if(lesson == null) return;
		return lesson.name;
	};
	
	_this.prototype.render_answer = function(num, question){
		return '<div class="questionAnswerForm"> <input type="text" class="questionAnswerTextForm" name=" + ' + question + '"/></div>';
	};
	
	_this.prototype.render_button = function(){
		return '';
	};
};

submission_view = new SubmissionView();

Template.submission.helpers({
	get_lesson_name : function(){
		return submission_view.get_lesson_name();
	},
	
	get_questions: function(){
		var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
		if(questions.length == 0) return;
		return questions[0].questions;
	},
	
	render_answer: function(num, question){
		return submission_view.render_answer(num, question);
	},
	
	render_button: function(){
		return submission_view.render_button(Session.get('myself'));
	}
});
