UsersModel = function(){
	this.get_users_by_id = function(id, password){
		return Users.find(
			{
				id: id,
				password: password
			}
		);
	};
	
	this.get_users_by_user_id = function(id){
		return Users.findOne({
			id: id
		});
	};
};

users_model = new UsersModel();
