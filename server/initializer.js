Meteor.startup(function(){
	Classes.remove({});
	Users.remove({});
	Lessons.remove({});
	Submissions.remove({});
	
	process.on('uncaughtException', function(err) {
    	console.log(err);
　	});
	
	var a01id = Users.insert({id: 'A001', name: 'Foo Bar', password: 'foo', role: 'student'});
	var a02id = Users.insert({id: 'A002', name: 'Bar Bar', password: 'foo', role: 'student'});
	var b01id = Users.insert({id: 'B001', name: 'Bar Baz', password: 'bar', role: 'teacher'});
	var b02id = Users.insert({id: 'B002', name: 'Baz Baz', password: 'bar', role: 'teacher'});
	var c01id = Users.insert({id: 'C001', name: 'Baz Foobar', password: 'baz', role: 'assistant'});
	var c02id = Users.insert({id: 'C002', name: 'Foo Foobar', password: 'baz', role: 'assistant'});
	
	var a01 = Users.findOne({_id: a01id});
	var a02 = Users.findOne({_id: a02id});
	
	var class_ids_a1 = new Array();
	var class_ids_a2 = new Array();
	var class_ids_b1 = new Array();
	var class_ids_b2 = new Array();
	var class_ids_c1 = new Array();
	var class_ids_c2 = new Array();
	var i = 1;
	for(i; i<=30; i++){
		switch(Math.floor(Math.random() * 5)){
			case 0:
				var classDay = 'Mon';
				break;
			case 1:
				var classDay = 'Tue';
				break;
			case 2:
				var classDay = 'Wed';
				break;
			case 3:
				var classDay = 'Thu';
				break;
			case 4:
				var classDay = 'Fri';
				break;
			default:
				var classDay = 'Mon';
		}
		var classPeriod = Math.floor(Math.random() * 5) + 1;
		if(Math.floor(Math.random() * 2) == 0){
			var classSemester = 'Fall';
		} else {
			var classSemester = 'Spring';
		}
		var className = 'class' + i;
		var id = '';
		var id = Classes.insert({
			number: i,
			name: className,
			day: classDay,
			period: classPeriod,
			semester: classSemester
		});
		var j = 1;
		var max = Math.floor(Math.random() * 30) + 1;
		for(j; j< max; j++){
			var monthLimit = Math.floor(Math.random() * 12) + 1;
			var dateLimit = Math.floor(Math.random() * 30) + 1;
			var lesson_id = Lessons.insert({
				class_id: id,
				number: j,
				name: 'lesson' + j,
				month: monthLimit,
				date: dateLimit
			});
			var k = 0;
			var qmax = Math.floor(Math.random() * 30) + 1;
			var questions = new Array(qmax);
			var answers = new Array(qmax);
			var a01answers = new Array(qmax);
			var a02answers = new Array(qmax);
			for(k; k<qmax; k++){
				questions[k] = {
					num: k,
					question: 'question' + k,
				}
				answers[k] = 'answer' + k;
				a01answers[k] = Math.floor(Math.random() * 30) + 1;
				a02answers[k] = Math.floor(Math.random() * 30) + 1;
			}
			questions_model.set_questions(lesson_id, questions, answers);
			submissions_model.set_submissions(a01.id, a01.name, lesson_id, a01answers);
			submissions_model.set_submissions(a02.id, a02.name, lesson_id, a02answers);
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_a1.unshift(id);
				break;
			case 2:
				class_ids_a2.unshift(id);
				break;
			case 3:
				class_ids_a1.unshift(id);
				class_ids_a2.unshift(id);
				break;
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_b1.unshift(id);
				break;
			case 2:
				class_ids_b2.unshift(id);
				break;
			case 3:
				class_ids_b1.unshift(id);
				class_ids_b2.unshift(id);
				break;
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_c1.unshift(id);
				break;
			case 2:
				class_ids_c2.unshift(id);
				break;
			case 3:
				class_ids_c1.unshift(id);
				class_ids_c2.unshift(id);
				break;
		}
	}
	
	Users.update({_id: a01id}, {$set: {class_ids: class_ids_a1}});
	Users.update({_id: a02id}, {$set: {class_ids: class_ids_a2}});
	Users.update({_id: b01id}, {$set: {class_ids: class_ids_b1}});
	Users.update({_id: b02id}, {$set: {class_ids: class_ids_b2}});
	Users.update({_id: c01id}, {$set: {class_ids: class_ids_c1}});
	Users.update({_id: c02id}, {$set: {class_ids: class_ids_c2}});
});
