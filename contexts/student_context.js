if(Meteor.isClient){
	student_context_operations = {
		// client/views/cnavi_view.js
		render_header: function(user){
			return '<div id="header" class="green"><div id="logo">CNavi</div><div id="headerName">Welcome back <b>' + 
				user.name + '</b></div></div>';
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			this.proceed($this);
			if(!$this.hasClass('overed')){
				Meteor.subscribe('questions', Session.get('myself'), $this.attr('id'), function(){
					cnavi_view.render('submission');
				});
			}
		}
	};

	student_context = new Context('teacher', student_context_operations);
}