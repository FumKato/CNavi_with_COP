Template.cnavi.render_header = function(){
	return cnavi_view.render_header(Session.get('myself'));
};

CNaviView = function(){
	var _this = CNaviView;
	
	_this.prototype.render = function(target){
		$('.cnavi_contents').hide();
		var targetID = '#' + target;
		$(targetID).show();
	};
	
	_this.prototype.render_header = function(user){
		if(user == null) {
			return '<div id="header"><div id="logo">CNavi</div><div id="headerName"></div></div>';
		}
		var class_name = '';
		switch(user.role){
			case 'student':
				class_name = 'green';
				break;
			case 'teacher':
				class_name = 'blue';
				break;
			case 'assistant':
				class_name = 'red';
				break;
		}
		return '<div id="header" class="' + class_name + '"><div id="logo">CNavi</div><div id="headerName">Welcome back <b>' + 
			user.name + '</b></div></div>';
	};
};

cnavi_view = new CNaviView();
