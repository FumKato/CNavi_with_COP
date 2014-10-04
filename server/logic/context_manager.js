ContextManager = function(){
	this.set_context = function(user_id){
		var user = users_model.get_users_by_user_id(user_id);
		if(user != null){
			switch(user.role){
				case 'teacher':
					break;
				case 'assistant':
					break;
				case 'student':
					break;
				default:
					break;
			}
		}
	};
	
	this.unset_context = function(){
		
	};
};
