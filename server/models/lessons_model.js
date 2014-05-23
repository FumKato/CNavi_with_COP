LessonsModel = function(){
	var _this = LessonsModel;
	_this.prototype.get_lessons_by_class_id = function(class_id){
		return Lessons.find({class_id: class_id});
	};
};

lessons_model = new LessonsModel();
