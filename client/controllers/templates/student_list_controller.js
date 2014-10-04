StudentListController = function(){
	var _this = StudentListController;
	
	_this.prototype.student_list_item_clicked = function($this){
		Session.set('student_id', $this.attr('id'));
		Meteor.subscribe('questions', Session.get('myself'), Session.get('lesson_id'), function(){
			cnavi_view.render('submission');
		});
	};
};

student_list_controller = new StudentListController();

$(function(){
	$(document).on('mouseenter', '.studentListItem', function(){
		var $this = $(this);
		if(!$this.hasClass('overed')){
			$(this).addClass('blue');
		}
	});
	
	$(document).on('mouseleave', '.studentListItem', function(){
		$(this).removeClass('blue');
	});
	
	$(document).on('click', '.studentListItem', function(){
		student_list_controller.student_list_item_clicked($(this));
	});
	
	$('#studentListButtons').find('.backButton').click(function(){
		cnavi_view.render('lessonList');
	});
});
