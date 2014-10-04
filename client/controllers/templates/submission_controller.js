SubmissionController = function(){
	var _this = SubmissionController;
	
};

submission_controller = new SubmissionController();

$(function(){
	$('#submissionButtons').find('.backButton').click(function(){
		if(Session.get('myself').role == 'student'){
			cnavi_view.render('lessonList');
		} else if(Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant'){
			cnavi_view.render('studentList');
		}
	});
	
	$(document).on('click', '.submissionButton', function(){
		if(Session.get('myself').role == 'student'){
			var answers = new Array();
			$('.questionAnswerTextForm').each(function(){
				answers.push($(this).val());
			});
			submissions_model.set_answers(Session.get('lesson_id'), Session.get('myself').id, answers);
			alert('Submision is completed');
			cnavi_view.render('lessonList');
		}
	});
	
	$(document).on('click', '.registrationButton', function(){
		if(Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant'){
			var scores = new Array();
			$('.markForm').each(function(){
				scores.push($(this).val());
			});
			submissions_model.set_scores(Session.get('lesson_id'), Session.get('myself').id, scores);
			alert('Score is registered');
			cnavi_view.render('lessonList');
		}
	});
});
