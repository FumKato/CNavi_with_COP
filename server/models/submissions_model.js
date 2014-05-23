SubmissionsModel = function(){
	var _this = SubmissionsModel;
	
	_this.prototype.set_submissions = function(user_id, user_name, lesson_id, answers){
		var date = new Date();
		var submission_date = {
			year : date.getYear() + 1900,
			month: date.getMonth() + 1,
			date: date.getDate(),
			hours: date.getHours(),
			minutes: date.getMinutes()
		};
		Submissions.insert({
			user_id: user_id,
			user_name: user_name,
			lesson_id: lesson_id,
			answers: answers,
			date: submission_date
		});
	};
	
	_this.prototype.get_submissions_by_lesson_id = function(user, lesson_id){
		var user = users_model.get_users_by_id(user.id, user.password).fetch()[0];
		if(user == null || user.role == 'student') return;
		return Submissions.find({
			lesson_id: lesson_id
		});
	};
};

submissions_model = new SubmissionsModel();