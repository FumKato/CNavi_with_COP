LessonsModel = function(){
	var _this = LessonsModel;
	_this.prototype.get_lessons_by_class_id = function(class_id){
		return Lessons.find({class_id: class_id});
	};
	
	_this.prototype.set_lessons = function(class_id, lesson_name, lesson_date){
		var number = Lessons.find({class_id: class_id}).count() + 1;
		return Lessons.insert({
			class_id: class_id,
			number: number,
			name: lesson_name,
			month: lesson_date.month,
			date: lesson_date.date
		});
	};
};

lessons_model = new LessonsModel();
