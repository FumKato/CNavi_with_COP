$(function(){
	$(document).on('mouseenter', '.classListTableItem', function(){
		$(this).addClass('blue');
	});
	
	$(document).on('mouseleave', '.classListTableItem', function(){
		$(this).removeClass('blue');
	});
	
	$(document).on('click', '.classListTableItem', function(){
		Session.set('class_id', $(this).attr('id'));
		Meteor.subscribe('lessons', Session.get('class_id'), function(){
			cnavi_view.render('lessonList');
		});
	});
});
