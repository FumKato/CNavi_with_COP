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
	
	_this.prototype.render_header = function(){
		//default operation (no role)
		return '<div id="header"><div id="logo">CNavi</div><div id="headerName"></div></div>';
	};
};

cnavi_view = new CNaviView();
