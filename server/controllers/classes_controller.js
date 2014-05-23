Meteor.publish('classes', function(class_ids){
	return classes_model.get_classes_by_class_ids(class_ids);
});
