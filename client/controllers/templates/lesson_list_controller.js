LessonListController = function(){
	var _this = LessonListController;
	
	_this.prototype.lesson_list_item_clicked = function($this){
		if(!$this.hasClass('overed')){
			Session.set('lesson_id', $this.attr('id'));
			if(Session.get('myself').role == 'student'){
				Meteor.subscribe('questions', Session.get('myself'), $this.attr('id'), function(){
					cnavi_view.render('submission');
				});
			} else if(Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant'){
				Meteor.subscribe('submissions', Session.get('myself'), $this.attr('id'), function(){
					cnavi_view.render('studentList');
				});
			}
		}
	};
	
	_this.prototype.create_button_clicked = function(){
		if(Session.get('myself').role != 'teacher') return;
		cnavi_view.render('lessonCreation');
	};
};

lesson_list_controller = new LessonListController();

$(function(){
	$(document).on('mouseenter', '.lessonListItem', function(){
		var $this = $(this);
		if(!$this.hasClass('overed')){
			$(this).addClass('blue');
		}
	});
	
	$(document).on('mouseleave', '.lessonListItem', function(){
		$(this).removeClass('blue');
	});
	
	$(document).on('click', '.lessonListItem', function(){
		lesson_list_controller.lesson_list_item_clicked($(this));
	});
	
	$('#lessonListButtons').find('.backButton').click(function(){
		cnavi_view.render('classList');
	});
	
	$(document).on('click', '.createButton', function(){
		lesson_list_controller.create_button_clicked();
	});
});
