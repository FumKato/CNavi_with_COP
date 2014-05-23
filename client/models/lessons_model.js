LessonsModel = function(){
	var _this = LessonsModel;
	
	_this.prototype.get_lessons_by_class_id = function(class_id){
		return Lessons.find({class_id: class_id}, {sort: {num: 1}}).fetch();
	};
	
	_this.prototype.get_lessons_by_id = function(lesson_id){
		return Lessons.findOne({_id: lesson_id});
	};
};

lessons_model = new LessonsModel();
