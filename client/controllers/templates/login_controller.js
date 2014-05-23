$(function() {
	$('input[name=login]').click(function(){
		var id = $('input[name=id]').val();
		var password = $('input[name=password]').val();
		
		Meteor.subscribe('user', id, password, function(){
			var user = users_model.get_my_users();
			if(user != null) {
				Session.set('myself', user);
				Meteor.subscribe('classes', user.class_ids, function(){
					cnavi_view.render('classList');		
				});
			} else {
				alert('Invalid ID or password');
			}
		});
	});
});
