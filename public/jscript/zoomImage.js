function zoomImage(obj) {
	var me = this;

	var imgPreloader = new Image();
	imgPreloader.src = obj.src.split('?')[0];

	this.run = function () {
		if (!imgPreloader.complete) {
			setTimeout(function () {
				me.run();
			}, 100);
			return false;
		}

		var imgs = { w: imgPreloader.width, h: imgPreloader.height };
		var scrs = {
			w: parseInt(screen.width, 10),
			h: parseInt(screen.availHeight, 10),
		};
		var pos = { left: (scrs.w - imgs.w) / 2, top: (scrs.h - imgs.h) / 2 };

		if (imgs.w >= scrs.w) pos.left = 0;
		if (imgs.h >= scrs.h) pos.top = 0;

		var style =
			'' +
			'<' +
			'style type="text/css">\n' +
			'	body{margin:0;padding:0;border:none 0;background-color:#ddd;overflow:hidden}\n' +
			'	table{border-collapse:collapse;border-spacing:0;width:100%;height:100%}\n' +
			'	td{padding:0;text-align:center;vertical-align:middle}\n' +
			'	img{position:relative;border:none 0}\n' +
			'</style>';

		var script =
			'' +
			'<' +
			'script type="text/javascript">\n' +
			'//<![CDATA[\n' +
			'	var isDrag = false;\n' +
			'	var objDrag;\n' +
			'	var dl, dt, ex, ey;\n' +
			'	function doMove(e) {\n' +
			'		var e = window.event || e;\n' +
			'		if (isDrag) {\n' +
			'			objDrag.style.left = dl + e.clientX - ex;\n' +
			'			objDrag.style.top = dt + e.clientY - ey;\n' +
			'			return false;\n' +
			'		}\n' +
			'	}\n' +
			'	function doDown(e) {\n' +
			'		var e = window.event || e;\n' +
			'		var element = e.srcElement ? e.srcElement : e.target;\n' +
			'		if (element.className == "drag") {\n' +
			'			isDrag = true; objDrag = element;\n' +
			'			dl = parseInt(element.style.left+0, 10); dt = parseInt(element.style.top+0, 10);\n' +
			'			ex = parseInt(e.clientX, 10); ey = parseInt(e.clientY, 10);\n' +
			'			document.onmousemove = doMove;\n' +
			'			return false;\n' +
			'		}\n' +
			'	}\n' +
			'	document.onmousedown = doDown;\n' +
			'	document.onmouseup = function() { isDrag = false; };\n' +
			'//-->\n' +
			'</' +
			'script>';

		var title = '이미지 사이즈 : ' + imgs.w + ' x ' + imgs.h;
		var attrs = '';

		var pop = window.open(
			'',
			'ImageZoom',
			'width=' +
				imgs.w +
				',height=' +
				imgs.h +
				',left=' +
				pos.left +
				',top=' +
				pos.top +
				',scrollbars=no,resizable=yes,status=yes',
		);

		pop.document.open();
		pop.document.writeln('<html>');
		pop.document.writeln('<head>');
		pop.document.writeln('<title>' + title + '</title>');
		pop.document.writeln('<meta http-equiv="Imagetoolbar" content="no" />');
		if (imgs.w > scrs.w || imgs.h > scrs.h) {
			pop.document.writeln(script);

			attrs =
				' onDblClick="window.close()"' +
				' style="cursor:move"' +
				' alt="마우스 왼쪽버튼을 클릭한 후, \n움직이면 이미지가 이동시킬 수 있습니다. \n\n이미지를 더블 클릭하면 닫힙니다."' +
				' title="마우스 왼쪽버튼을 클릭한 후, \n움직이면 이미지가 이동시킬 수 있습니다. \n\n이미지를 더블 클릭하면 닫힙니다."';
		} else {
			attrs = ' onClick="window.close()"' + ' style="cursor:pointer"';
		}
		pop.document.writeln(style);
		pop.document.writeln('</head>');
		pop.document.writeln('<body>');
		pop.document.writeln('<table><tr>');
		pop.document.writeln(
			'<td><img src="' +
				imgPreloader.src +
				'" class="drag" ' +
				attrs +
				' /></td>',
		);
		pop.document.writeln('</tr></table>');
		pop.document.writeln('</body>');
		pop.document.writeln('</html>');
		pop.document.close();
		pop.window.focus();
	};

	this.run();
}

function zoomImageAll(wrap) {
	$(wrap)
		.find('img')
		.each(function () {
			$(this)
				.css({ cursor: 'pointer' })
				.click(function () {
					zoomImage(this);
					return false;
				});
		});
}
