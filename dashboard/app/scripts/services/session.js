App.factory("AddEditDel", function() {
	var showFlag={
		backcoverShow: false,
		addShow: false,
		editShow: false,
		delShow: false
	};

	return {
		add: function() {
			showFlag.backcoverShow=true;
			showFlag.addShow=true;
		},
		edit: function() {
			showFlag.backcoverShow=true;
			showFlag.editShow=true;
		},
		del: function() {
			showFlag.backcoverShow=true;
			showFlag.delShow=true;
		},
		cancel: function() {
			showFlag.backcoverShow=false;
			showFlag.addShow=false;
			showFlag.editShow=false;
			showFlag.delShow=false;
		},
	};
});