Meteor.publish('lessons', function(class_id){
	return lessons_model.get_lessons_by_class_id(class_id);
});
