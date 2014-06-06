LessonListController = function(){
	var _this = LessonListController;
	
	_this.prototype.lesson_list_item_clicked = function($this){
			Session.set('lesson_id', $this.attr('id'));
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
});
