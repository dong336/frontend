/**
 *	dragDrop v1.0
 *
 *	@author		HanSeungho landboy@gmail.com
 *	@copyright	Copyright (c) HanSeungho
 *
 *	작성일 :			2011-02-17
 *	최종수정일 :	2011-02-17
 **/

var dragDrop = {
	isMSIE: (navigator.userAgent.toLowerCase().indexOf("msie") != -1),

	wrap: null,
	boxClsName: null,
	moveClsName: null,
	dragSrc: null,
	dragHelper: null,
	lastSrc: null,
	srcHeight: 0,
	gapTop: 0,
	previouseY: 0,

	useArrow: true,

	restore: {
		border: '',
		background: ''
	},

	highlight: {
		border: '',
		background: ''
	},

	getMouseCoords: function(e) {
		if (e.pageX || e.pageY) {
			return { x: e.pageX, y: e.pageY };
		}
		else {
			return {
				x: e.clientX+document.body.scrollLeft-document.body.clientLeft,
				y: e.clientY+document.body.scrollTop-document.body.clientTop
			};
		}
	},

	getMouseOffset: function(target, e) {
		e = e || window.event;

		var pos = getOffset(target);
		var mousePos = dragDrop.getMouseCoords(e);
		return { x: mousePos.x-pos.x, y: mousePos.y-pos.y};
	},

	getPreviousElement: function(target) {
		var result = null;
		if (target) {
			result = target.previousSibling;
			while (result) {
				if (result.className == dragDrop.boxClsName) break;
				result = result.previousSibling;
			}
		}
		return result;
	},

	getNextElement: function(target) {
		var result = null;
		if (target) {
			result = target.nextSibling;
			while (result) {
				if (result.className == dragDrop.boxClsName) break;
				result = result.nextSibling;
			}
		}
		return result;
	},

	cancelEvent: function() {
		return false;
	},

	cancelSelectionEvent: function() {
		if (!dragDrop.dragSrc) return true;
		return false;
	},

	init: function (wrap, boxClass, moveClass) {
		this.wrap = (typeof (wrap)=='string' ? document.getElementById(wrap) : wrap);
		this.boxClsName = boxClass;
		this.moveClsName = (moveClass ? moveClass : boxClass);

		if (!wrap) return false;

		var dragHelper = wrap.parentNode.appendChild(document.createElement('div'));
		dragHelper.id = 'dragHelper';
		with (dragHelper.style) {
			position = 'absolute';
			display = 'none';
			filter = 'alpha(opacity=70)';
			opacity = '0.7';
		}

		this.wrap.onselectstart = dragDrop.cancelSelectionEvent;
		this.wrap.ondragstart = dragDrop.cancelEvent;

		document.onmousedown = dragDrop.down;
		document.onmousemove = dragDrop.move;
		document.onmouseup = dragDrop.up;
		document.onkeydown = dragDrop.arrow;
	},

	getDragElement: function(item) {
		var elements = { box: null, move: null };

		var parent = item;
		while (parent) {
			if (parent.className == dragDrop.moveClsName) {
				elements.move = parent;
			}
			if (parent.className == dragDrop.boxClsName) {
				elements.box = parent;
				break;
			}
			parent = parent.parentNode;
		}
		return (elements.move && elements.box ? elements : null);
	},

	cloneHelper: function() {
		if (dragDrop.dragSrc) {
			dragDrop.dragHelper = document.getElementById('dragHelper');
			dragDrop.dragHelper.appendChild(dragDrop.dragSrc.cloneNode(true));
		}
	},

	move: function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var dragElms = [];
		var beforeElement = null;

		if (dragDrop.dragHelper) {
			var mousePos = dragDrop.getMouseCoords(e);
			var wrapOffset = getOffset(dragDrop.wrap);
			var wrapHeight = parseInt(dragDrop.wrap.offsetHeight, 10);

			var top = mousePos.y-dragDrop.gapTop;

			if (top < wrapOffset.top) {
				top = wrapOffset.top;
			}
			else if ((top+dragDrop.srcHeight) > (wrapOffset.top+wrapHeight-(dragDrop.isMSIE?2:0))) {
				top = wrapOffset.top+wrapHeight-dragDrop.srcHeight-(dragDrop.isMSIE?2:0);
			}

			dragDrop.dragSrc.style.visibility = "hidden";

			dragDrop.dragHelper.style.top = top+'px';
			dragDrop.dragHelper.style.left = wrapOffset.left+'px';
			dragDrop.dragHelper.style.display = '';
			dragDrop.dragHelper.style.cursor = "n-resize";

			var direction = mousePos.y-dragDrop.previouseY;
			var over = parseInt(dragDrop.srcHeight/3, 10);

			if (direction > 0) {
				if (top > (getOffset(dragDrop.dragSrc).top+over)) {
					beforeElement = dragDrop.getNextElement(dragDrop.getNextElement(dragDrop.dragSrc));
					if (beforeElement) dragDrop.wrap.insertBefore(dragDrop.dragSrc, beforeElement);
					else dragDrop.wrap.appendChild(dragDrop.dragSrc);
				}
			}
			else {
				if ((getOffset(dragDrop.dragSrc).top-over) >= top) {
					beforeElement = dragDrop.getPreviousElement(dragDrop.dragSrc);
				}
				if (beforeElement) dragDrop.wrap.insertBefore(dragDrop.dragSrc, beforeElement);
			}

			dragDrop.previouseY = mousePos.y;
		}
		return false;
	},

	arrow: function(e) {
		e = e || window.event;

		if (dragDrop.useArrow) {
			var key = (window.event ? e.keyCode : e.which);
			var beforeElement = null;
			var direction;

			switch (key) {
				case 38:	direction = -1;	break;
				case 40:	direction = 1;	break;
				default:	direction = 0;
			}

			if (dragDrop.dragSrc && direction != 0) {
				var wrapOffset = getOffset(dragDrop.wrap);
				var divs = dragDrop.wrap.getElementsByTagName('div');

				if (direction > 0) {
					if (dragDrop.getNextElement(dragDrop.dragSrc)) {
						beforeElement = dragDrop.getNextElement(dragDrop.getNextElement(dragDrop.dragSrc));
					}
					else {
						for (var i=0; i<divs.length; i++) {
							if (divs[i].className == dragDrop.boxClsName) {
								beforeElement = divs[i];
								break;
							}
						}
					}
				}
				else {
					beforeElement = dragDrop.getPreviousElement(dragDrop.dragSrc);
				}
				if (beforeElement) dragDrop.wrap.insertBefore(dragDrop.dragSrc, beforeElement);
				else dragDrop.wrap.appendChild(dragDrop.dragSrc);

				var scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
				var bodyHeight = document.body.clientHeight;
				var targetTop = getOffset(dragDrop.dragSrc).top;
				var targetHeight = dragDrop.dragSrc.clientHeight;

				var moveTop = null;
				if ((scrollTop+bodyHeight) < (targetTop+targetHeight)) {
					moveTop = targetTop;
				}
				else if (scrollTop > targetTop) {
					moveTop = (wrapOffset.top==targetTop?0:scrollTop-bodyHeight);
				}
				if (moveTop != null) window.scrollTo(0, moveTop);
			}

			if (window.event)
				e.returnValue = false;
			else
				e.preventDefault();
		}
	},

	down: function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if (target.className == 'btn') return false;
		if (dragDrop.dragHelper) return false;

		dragDrop.dragSrc = dragDrop.dragHelper = null;

		target = dragDrop.getDragElement(target);

		if (target) {
			dragDrop.dragSrc = target.box;
			dragDrop.active(dragDrop.dragSrc);
			dragDrop.lastSrc = dragDrop.dragSrc;

			var mousePos = dragDrop.getMouseCoords(e);
			var srcOffset = getOffset(dragDrop.dragSrc);

			dragDrop.previouseY = mousePos.y;
			dragDrop.gapTop = mousePos.y - srcOffset.top;
			dragDrop.srcHeight = parseInt(dragDrop.dragSrc.offsetHeight, 10);

			dragDrop.cloneHelper();
			return false;
		}
	},

	up: function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if (dragDrop.dragHelper) {
			var mousePos = dragDrop.getMouseCoords(e);
			var srcTop = mousePos.y-dragDrop.gapTop;

			var divs = dragDrop.wrap.getElementsByTagName('div');
			for (var i=0; i<divs.length; i++) {
				if (divs[i].className == dragDrop.boxClsName) {
					var offset = getOffset(divs[i]);
					var height = parseInt(divs[i].offsetHeight);

					if (offset.top+height >= srcTop) {
						break;
					}
				}
			}

			dragDrop.dragHelper.removeChild(dragDrop.dragHelper.firstChild);
			dragDrop.dragHelper.style.cursor = "";
			dragDrop.dragHelper.style.display = 'none';
			dragDrop.dragSrc.style.visibility = "visible";
		}

		dragDrop.dragHelper = null;
		return false;
	},

	active: function(target) {
		if (dragDrop.lastSrc) {
			dragDrop.lastSrc.style.border = dragDrop.restore.border;
			dragDrop.lastSrc.style.backgroundColor = dragDrop.restore.background;
		}
		if (target) {
			target.style.border = dragDrop.highlight.border;
			target.style.backgroundColor = dragDrop.highlight.background;
		}
	}
}
