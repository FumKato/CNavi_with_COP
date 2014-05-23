ClassesModel = function(){
	this.get_classes = function(){
		return Classes.find({}, {sort: {semester: -1, number: 1}}).fetch();
	};
	
	this.get_classes_by_id = function(id){
		return Classes.findOne({_id: id});
	};
};

classes_model = new ClassesModel();
