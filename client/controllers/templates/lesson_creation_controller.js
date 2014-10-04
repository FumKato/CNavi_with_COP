LessonCreationController = function(){
	var _this = LessonCreationController;
};
lesson_creation_controller = new LessonCreationController();

$(function(){
	$('#lessonCreationButtons').find('.backButton').click(function(){
		cnavi_view.render('lessonList');
	});
	
	$('#lessonCreationButtons').find('.lessonCreationButton').click(function(){
		var $questionForm = $('#lessonCreationQuestions');
		var questions = new Array();
		var answers = new Array();
		var i = 0;
		$questionForm.find('.lessonCreationContents').each(function(){
			questions.push({num: i, question: $(this).find('textarea[name=question' + i + ']').val()});
			answers.push($(this).find('textarea[name=answer' + i + ']').val());
			i++;
		});
		var lesson_name = $('input[name=lessonName]').val();
		var lesson_date = {
			month: $('select[name=month]').val(),
			date: $('select[name=date]').val()
		};
		lessons_model.set_lessons(Session.get('class_id'), Session.get('myself').id, lesson_name, lesson_date, questions, answers);
		alert('done');
		cnavi_view.render('lessonList');
	});
	
	$('.questionAddButton').click(function(){
		var $lessonCreationQuestions = $('#lessonCreationQuestions');
		var questionNumber = $lessonCreationQuestions.find('.lessonCreationContents').length;
		var questionForm = '<div class="lessonCreationContents"><div class="lessonCreationContentsLabel">Q' + questionNumber +
			'</div><textarea name="question' + questionNumber + '" class="lessonCreationContentsTextarea"> </textarea><div class="lessonCreationContentsLabel">A' +
			questionNumber + '</div><textarea name="answer' + questionNumber + '" class="lessonCreationContentsTextarea"> </textarea></div><div class="dline"> </div>';
		
		$lessonCreationQuestions.append(questionForm);
	});
});
