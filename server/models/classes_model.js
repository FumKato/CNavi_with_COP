ClassesModel = function(){
	this.get_classes_by_class_ids = function(class_ids){
		var i = 0;
		return Classes.find(
			{
				_id: {$in: class_ids}
			}
		);
	};
};

classes_model = new ClassesModel();
