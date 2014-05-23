UsersModel = function(){
	this.get_users_by_id = function(id, password){
		return Users.find(
			{
				id: id,
				password: password
			}
		);
	};
};

users_model = new UsersModel();
