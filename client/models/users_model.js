UsersModel = function(){
	this.get_my_users = function(){
		return Users.findOne({});
	};
	
	this.get_users_by_id = function(id){
		return Users.findOne({id: id});
	};
};

users_model = new UsersModel();
