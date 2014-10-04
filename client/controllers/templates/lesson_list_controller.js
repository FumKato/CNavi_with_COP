LessonListController = function(){
	var _this = LessonListController;
	
	_this.prototype.lesson_list_item_clicked = function($this){
		Session.set('lesson_id', $this.attr('id'));
	};
	
	_this.prototype.create_button_clicked = function(){
		// Default: do nothing
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
