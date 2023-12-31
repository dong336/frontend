/**
 *	SelectCategory v1.0
 *
 *	@author		HanSeungho landboy@gmail.com
 *	@copyright	Copyright (c) HanSeungho
 *
 *	작성일 :			2011-02-17
 *	최종수정일 :	2012-02-22
 **/

function SelectCategory() {
	this.elements = new Array();
	this.heads = new Array();
	this.delimiter = '_';
	this.target = null;
	this.child = 0;
}

SelectCategory.prototype = {
	addOption: function (obj, text, value) {
		if (typeof value == 'undefined') value = '';
		if (text) {
			var option = document.createElement('option');
			option.text = text;
			option.value = value;
			obj.options.add(option);
		}
		return option;
	},

	removeOption: function (obj, index) {
		obj.remove(index);
	},

	removeOptionAll: function (obj) {
		for (var i = obj.length - 1; i > -1; i--) {
			obj.remove(i);
		}
	},

	add: function () {
		if (this.target) {
			var name = this.target.name;

			var selects = document.getElementsByTagName('select');
			for (var i = 0; i < selects.length; i++) {
				if (selects[i].name.match(new RegExp(name + this.delimiter, 'gi'))) {
					var depth = selects[i].name.split(this.delimiter)[1].toNumeric();

					this.elements[depth - 1] = selects[i];
					this.heads[depth - 1] = selects[i].getAttribute('head');
				}
			}
		}
	},

	init: function (target) {
		var self = this;

		this.target = target;
		this.add();

		if (this.elements.length) {
			this.get(null, this.target.value.toNumeric());
		}
	},

	get: function (item, cate) {
		var self = this;
		var depth = item ? item.getAttribute('depth') : 0;
		var parent = item ? item.value : 0;
		var _depth = depth;
		var _parent = parent;

		if (depth == null) depth = 0;
		if (typeof cate == 'undefined') cate = 0;

		$.ajax({
			type: 'POST',
			url: '/common/ajax/category_ajax',
			cache: false,
			data: {
				parent: parent,
				depth: depth,
				choice: cate,
			},
			dataType: 'json',
			error: function (request, status, error) {
				alert(request.responseText);
			},
			success: function (data) {
				if (data) {
					var depth = data.depth;
					var selected = data.selected.cate;
					var index = depth - 1;

					for (var i = index; i < self.elements.length; i++) {
						if (self.elements[i]) {
							self.removeOptionAll(self.elements[i]);
							self.addOption(self.elements[i], self.heads[i]);
						}
					}

					if (!selected) {
						self.target.value = '';
						for (var i = 0; i < self.elements.length; i++) {
							if (self.elements[i].value) {
								self.target.value = self.elements[i].value;
							} else break;
						}
					}

					if (_parent == '' && _depth == 1) {
						$("select[name='scate_2'] option").not("[value='']").remove();
					} else if (_parent == '' && _depth == 2) {
						$("select[name='scate_3'] option").not("[value='']").remove();
					} else {
						var obj = self.elements[index];
						if (obj) {
							if (data.list) {
								for (var i = 0; i < data.list.length; i++) {
									var option = self.addOption(
										obj,
										data.list[i].name,
										data.list[i].cate,
									);
									if (self.child)
										option.setAttribute('child', data.list[i].child);
								}
								if (selected) obj.value = selected;
							}

							if (self.elements.length > depth && cate) {
								self.get(self.elements[index], cate);
							}
						}
					}
				}
			},
		});
	},
};
