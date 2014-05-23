Meteor.publish('user', function(id, password){
	return users_model.get_users_by_id(id, password);
});
