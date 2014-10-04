SubmissionController = function(){
	var _this = SubmissionController;
	
	_this.prototype.back_button_clicked = function(){
		// Default: do nothing
	};
	
	_this.prototype.submission_button_clicked = function(){
		// Default: do nothing
	};
	
	_this.prototype.registration_button_clicked = function(){
		// Default: do nothing
	};
};

submission_controller = new SubmissionController();

$(function(){
	$('#submissionButtons').find('.backButton').click(function(){
		submission_controller.back_button_clicked();
	});
	
	$(document).on('click', '.submissionButton', function(){
		submission_controller.submission_button_clicked();
	});
	
	$(document).on('click', '.registrationButton', function(){
		submission_controller.registration_button_clicked();
	});
});
