function htmedit(pardiv, parcontent, parwidth, parheight, parkey)
{
	var strpath = "htmedit/";
	var intwidth2 = parwidth - 2;
	var strview = "y";
	var strhtmedit = "\
	<div id='htmedit_div_tools' style='position:relative; width:" + parwidth + "px; height:58; border:1px solid #808080; background-color:#F7F5F4;'><img\
		src='" + strpath + "blank.gif' alt='字体大小' id='htmedit_box_size' style='position:absolute; left:2px; top:6px; width:94px; height:22px; background:url(" + strpath + "htmedit_tools.gif); background-position:-3px -6px;'><img\
		src='" + strpath + "blank.gif' alt='字体' id='htmedit_box_font' style='position:absolute; left:98px; top:6px; width:71px; height:22px; background:url(" + strpath + "htmedit_tools.gif); background-position:-99px -6px;'><img\
		src='" + strpath + "blank.gif' alt='粗体' id='htmedit_box_bold' style='position:absolute; left:2px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-3px -30px;'><img\
		src='" + strpath + "blank.gif' alt='斜体' id='htmedit_box_italic' style='position:absolute; left:26px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-27px -30px;'><img\
		src='" + strpath + "blank.gif' alt='下划线' id='htmedit_box_underline' style='position:absolute; left:50px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-51px -30px;'><img\
		src='" + strpath + "blank.gif' alt='文字颜色' id='htmedit_box_forecolor' style='position:absolute; left:74px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-75px -30px;'><img\
		src='" + strpath + "blank.gif' alt='背景颜色' id='htmedit_box_backcolor' style='position:absolute; left:98px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-99px -30px;'><img\
		src='" + strpath + "blank.gif' alt='文字链接' id='htmedit_box_texturl' style='position:absolute; left:122px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-123px -30px;'><img\
		src='" + strpath + "blank.gif' alt='图片链接' id='htmedit_box_imgurl' style='position:absolute; left:146px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-147px -30px;'><img\
		src='" + strpath + "blank.gif' style='position:absolute; left:171px; top:6px; width:3px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-172px -6px;'><img\
		src='" + strpath + "blank.gif' alt='左对齐' id='htmedit_box_justifyleft' style='position:absolute; left:176px; top:6px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-177px -6px;'><img\
		src='" + strpath + "blank.gif' alt='居中对齐' id='htmedit_box_justifycenter' style='position:absolute; left:200px; top:6px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-201px -6px;'><img\
		src='" + strpath + "blank.gif' alt='右对齐' id='htmedit_box_justifyright' style='position:absolute; left:224px; top:6px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-225px -6px;'><img\
		src='" + strpath + "blank.gif' alt='两端对齐' id='htmedit_box_justifyfull' style='position:absolute; left:248px; top:6px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-249px -6px;'><img\
		src='" + strpath + "blank.gif' alt='编号' id='htmedit_box_ordered' style='position:absolute; left:176px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-177px -30px;'><img\
		src='" + strpath + "blank.gif' alt='项目符号' id='htmedit_box_unordered' style='position:absolute; left:200px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-201px -30px;'><img\
		src='" + strpath + "blank.gif' alt='减少缩进' id='htmedit_box_outdent' style='position:absolute; left:224px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-225px -30px;'><img\
		src='" + strpath + "blank.gif' alt='增加缩进' id='htmedit_box_indent' style='position:absolute; left:248px; top:30px; width:23px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-249px -30px;'><img\
		src='" + strpath + "blank.gif' alt='段落' id='htmedit_box_duan' style='position:absolute; left:274px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-275px -6px;'><img\
		src='" + strpath + "blank.gif' alt='布局' id='htmedit_box_layout' style='position:absolute; left:308px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-309px -6px;'><img\
		src='" + strpath + "blank.gif' style='position:absolute; left:342px; top:6px; width:3px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-343px -6px;'><img\
		src='" + strpath + "blank.gif' alt='图片' id='htmedit_box_picture' style='position:absolute; left:347px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-348px -6px;'><img\
		src='" + strpath + "blank.gif' alt='文件' id='htmedit_box_file' style='position:absolute; left:381px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-382px -6px;'><img\
		src='" + strpath + "blank.gif' alt='音乐' id='htmedit_box_music' style='position:absolute; left:415px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-416px -6px;'><img\
		src='" + strpath + "blank.gif' alt='视频' id='htmedit_box_video' style='position:absolute; left:449px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-450px -6px;'><img\
		src='" + strpath + "blank.gif' alt='Flash' id='htmedit_box_flash' style='position:absolute; left:483px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-484px -6px;'><img\
		src='" + strpath + "blank.gif' alt='滚动' id='htmedit_box_marquee' style='position:absolute; left:517px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-518px -6px;'><img\
		src='" + strpath + "blank.gif' alt='时间' id='htmedit_box_time' style='position:absolute; left:551px; top:6px; width:32px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-552px -6px;'><img\
		src='" + strpath + "blank.gif' style='position:absolute; left:586px; top:6px; width:3px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-587px -6px;'><img\
		src='" + strpath + "blank.gif' alt='撤销' id='htmedit_box_undo' style='position:absolute; left:590px; top:6px; width:26px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-591px -6px;'><img\
		src='" + strpath + "blank.gif' alt='重做' id='htmedit_box_redo' style='position:absolute; left:590px; top:30px; width:26px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-591px -30px;'><img\
		src='" + strpath + "blank.gif' style='position:absolute; left:619px; top:6px; width:3px; height:47px; background:url(" + strpath + "htmedit_tools.gif); background-position:-620px -6px;'><img\
		src='" + strpath + "blank.gif' alt='HTML视图' id='htmedit_box_view' style='position:absolute; left:623px; top:6px; width:65px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-624px -6px;'><img\
		src='" + strpath + "blank.gif' alt='HTML源码' id='htmedit_box_source' style='position:absolute; left:623px; top:30px; width:65px; height:23px; background:url(" + strpath + "htmedit_tools.gif); background-position:-624px -30px;'>\
		<div id='htmedit_div_size_list' style='cursor:default; position:absolute; width:163px; left:2px; top:29px; display:none;'>\
			<div style='text-align:center; height:20px; padding-left:6px; padding-top:6px; background-image:url(" + strpath + "pop_top.gif);'><b>字体大小</b></div>\
			<div id='htmedit_div_size_boxes' style='height:238px!important ;height:215px; background-image:url(" + strpath + "pop_background.gif);'>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:10px' unselectable='on' value='10'>10px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:12px' unselectable='on' value='12'>12px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:14px' unselectable='on' value='14'>14px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:16px' unselectable='on' value='16'>16px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:18px' unselectable='on' value='18'>18px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:20px' unselectable='on' value='20'>20px</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:22px' unselectable='on' value='22'>22px</div>\
			</div>\
			<div style='height:10px; background-image:url(" + strpath + "pop_bottom.gif); font-size:1px;'></div>\
		</div>\
		<div id='htmedit_div_font_list' style='cursor: default; position:absolute; width:163px; left:99px; top:29px; display: none;'>\
			<div style='text-align:center; height:20px; padding-left:6px; padding-top:6px; background-image:url(" + strpath + "pop_top.gif);'><b>字体</b></div>\
			<div id='htmedit_div_font_boxes' style='height:296px!important ;height:290px; background-image:url(" + strpath + "pop_background.gif);'>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important ; width: 158px; font-family: 宋体' unselectable='on' value='宋体'>宋体</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:黑体' unselectable='on' value='黑体'>黑体</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:隶书' unselectable='on' value='隶书'>隶书</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:楷体' unselectable='on' value='楷体'>楷体</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:幼圆' unselectable='on' value='幼圆'>幼圆</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Arial' unselectable='on' value='Arial'>Arial</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Impact' unselectable='on' value='Impact'>Impact</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Georgia' unselectable='on' value='Georgia'>Georgia</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Verdana' unselectable='on' value='Verdana'>Verdana</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Courier New' unselectable='on' value='Courier New'>Courier New</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-family:Times New Roman' unselectable='on' value='Times New Roman'>Times New Roman</div>\
			</div>\
			<div style='height:10px; background-image:url(" + strpath + "pop_bottom.gif); font-size:1px;'></div>\
		</div>\
		<div id='htmedit_div_forecolor_list' style='background:#ffffff; position:absolute; left:74px; top:54px; display:none;'>\
			<img src=strpath + 'blank.gif' value='#FF9999' style='background:#FF9999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FFFF80' style='background:#FFFF80; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#80FF80' style='background:#80FF80; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#80FFFF' style='background:#80FFFF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0080FF' style='background:#0080FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF80C0' style='background:#FF80C0; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#FF0000' style='background:#FF0000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#CCCC66' style='background:#CCCC66; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#00FF40' style='background:#00FF40; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0099CC' style='background:#0099CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#9999CC' style='background:#9999CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF00FF' style='background:#FF00FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#CC3333' style='background:#CC3333; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF9933' style='background:#FF9933; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#009999' style='background:#009999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#006699' style='background:#006699; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#9999FF' style='background:#9999FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#990033' style='background:#990033; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#990000' style='background:#990000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF9900' style='background:#FF9900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#009900' style='background:#009900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0000FF' style='background:#0000FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0000CC' style='background:#0000CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#990099' style='background:#990099; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#660000' style='background:#660000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#006666' style='background:#006666; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#999900' style='background:#999900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#660099' style='background:#660099; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#339999' style='background:#339999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#66CCCC' style='background:#66CCCC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#000000' style='background:#000000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#494949' style='background:#494949; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#767676' style='background:#767676; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#A6A6A6' style='background:#A6A6A6; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#C7C7C7' style='background:#C7C7C7; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FFFFFF' style='background:#FFFFFF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
		</div>\
		<div id='htmedit_div_backcolor_list' style='background: #ffffff; position: absolute; left: 98px; top: 54px; display: none;'>\
			<img src=strpath + 'blank.gif' value='#FF9999' style='background:#FF9999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FFFF80' style='background:#FFFF80; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#80FF80' style='background:#80FF80; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#80FFFF' style='background:#80FFFF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0080FF' style='background:#0080FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF80C0' style='background:#FF80C0; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#FF0000' style='background:#FF0000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#CCCC66' style='background:#CCCC66; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#00FF40' style='background:#00FF40; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0099CC' style='background:#0099CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#9999CC' style='background:#9999CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF00FF' style='background:#FF00FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#CC3333' style='background:#CC3333; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF9933' style='background:#FF9933; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#009999' style='background:#009999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#006699' style='background:#006699; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#9999FF' style='background:#9999FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#990033' style='background:#990033; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#990000' style='background:#990000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FF9900' style='background:#FF9900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#009900' style='background:#009900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0000FF' style='background:#0000FF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#0000CC' style='background:#0000CC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#990099' style='background:#990099; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#660000' style='background:#660000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#006666' style='background:#006666; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#999900' style='background:#999900; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#660099' style='background:#660099; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#339999' style='background:#339999; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#66CCCC' style='background:#66CCCC; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
			<img src=strpath + 'blank.gif' value='#000000' style='background:#000000; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#494949' style='background:#494949; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#767676' style='background:#767676; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#A6A6A6' style='background:#A6A6A6; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#C7C7C7' style='background:#C7C7C7; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><img src=strpath + 'blank.gif' value='#FFFFFF' style='background:#FFFFFF; border:1px solid #999; margin:0px; padding:0px; margin-top:1px; margin-left:1px; width:14px; height:14px; cursor:hand; cursor:pointer;' /><br>\
		</div>\
		<div id='htmedit_div_duan_list' style='cursor:default; position:absolute; width:163px; left:274px; top:54px; display:none;'>\
			<div style='text-align: center; height:20px; padding-left:6px; padding-top:6px; background-image:url(" + strpath + "pop_top.gif);'><b>段落</b></div>\
			<div id='htmedit_div_duan_boxes' style='height:201px!important ;height:187px; background-image:url(" + strpath + "pop_background.gif);'>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:32px' unselectable='on' value='<H1>'>H1</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:24px' unselectable='on' value='<H2>'>H2</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:18px' unselectable='on' value='<H3>'>H3</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:16px' unselectable='on' value='<H4>'>H4</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:12px' unselectable='on' value='<H5>'>H5</div>\
				<div style='text-align:center; background:#f4f4f4; border:1px solid #ccc; margin:2px; padding:4px; width:149px!important; width:158px; font-size:10px' unselectable='on' value='<H6>'>H6</div>\
			</div>\
			<div style='height:10px; background-image:url(" + strpath + "pop_bottom.gif); font-size:1px;'></div>\
		</div>\
	</div>\
	<div id='htmedit_div_body' align='center' style='position: static; width: " + parwidth + "px; background-color: #808080; border-bottom: 1px solid #808080;'>\
		<textarea id='htmedit_textarea' name='htmedit_textarea' style='width: " + intwidth2 + "px; height: " + parheight + "px; display: none;'></textarea>\
		<iframe id='htmedit_iframe' style='width: " + intwidth2 + "px; height: " + parheight + "px; padding-top: 0px; over-flow: auto;' border='0' frameborder='0' scrolling='yes'></iframe>\
	</div>\
	";
	document.getElementById(pardiv).innerHTML = strhtmedit;
	
	var arrdiv = null;
	
	document.getElementById("htmedit_box_size").onmouseover = function()
	{
		this.style.backgroundPosition = "-3px -72px";
	}
	document.getElementById("htmedit_box_size").onmouseout = function()
	{
		this.style.backgroundPosition = "-3px -6px";
	}
	document.getElementById("htmedit_box_size").onclick = function()
	{
		if(document.getElementById("htmedit_div_size_list").style.display == "none")
		{
			document.getElementById("htmedit_div_size_list").style.display = "";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
		else
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	arrdiv = document.getElementById("htmedit_div_size_boxes").getElementsByTagName("div");
	for(var i = 0; i < arrdiv.length; i ++)
	{
		arrdiv[i].onmouseover = function()
		{
			this.style.border = "solid #ff9900 1px";
			this.style.background = "#ffffff";
		}
		arrdiv[i].onmouseout = function()
		{
			this.style.border = "solid #cccccc 1px";
			this.style.background = "#f4f4f4";
		}
		arrdiv[i].onclick = function()
		{
			if(document.frames["htmedit_iframe"].document.selection.createRange().htmlText != null &&
				document.frames["htmedit_iframe"].document.selection.createRange().htmlText != "")
			{
				document.frames["htmedit_iframe"].focus();
				document.frames["htmedit_iframe"].document.execCommand("fontname", "", "htmedit_font");
				document.frames["htmedit_iframe"].focus();
				document.getElementById("htmedit_div_size_list").style.display = "none";
				document.getElementById("htmedit_div_font_list").style.display = "none";
				document.getElementById("htmedit_div_duan_list").style.display = "none";
				document.getElementById("htmedit_div_forecolor_list").style.display = "none";
				document.getElementById("htmedit_div_backcolor_list").style.display = "none";
				
				var objfont = document.frames["htmedit_iframe"].document.selection.createRange().parentElement();
				if(objfont.tagName == "FONT")
				{
					objfont.style.fontSize = this.getAttribute("value");
					objfont.removeAttribute("face");
				}
				var arrfont = objfont.getElementsByTagName("font");
				for(var j = 0; j < arrfont.length; j = j + 1)
				{
					arrfont[j].style.fontSize = this.getAttribute("value");
					arrfont[j].removeAttribute("face");
				}
			}
			else
			{
				document.getElementById("htmedit_div_size_list").style.display = "none";
				document.getElementById("htmedit_div_font_list").style.display = "none";
				document.getElementById("htmedit_div_duan_list").style.display = "none";
				document.getElementById("htmedit_div_forecolor_list").style.display = "none";
				document.getElementById("htmedit_div_backcolor_list").style.display = "none";
			}
		}
	}
	
	document.getElementById("htmedit_box_font").onmouseover = function()
	{
		this.style.backgroundPosition = "-99px -72px";
	}
	document.getElementById("htmedit_box_font").onmouseout = function()
	{
		this.style.backgroundPosition = "-99px -6px";
	}
	document.getElementById("htmedit_box_font").onclick = function()
	{
		if(document.getElementById("htmedit_div_font_list").style.display == "none")
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
		else
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	arrdiv = document.getElementById("htmedit_div_font_boxes").getElementsByTagName("div");
	for(var i = 0; i < arrdiv.length; i ++)
	{
		arrdiv[i].onmouseover = function()
		{
			this.style.border = "solid #ff9900 1px";
			this.style.background = "#ffffff";
		}
		arrdiv[i].onmouseout = function()
		{
			this.style.border = "solid #cccccc 1px";
			this.style.background = "#f4f4f4";
		}
		arrdiv[i].onclick = function()
		{
			document.frames["htmedit_iframe"].focus();
			document.frames["htmedit_iframe"].document.execCommand("fontname", "", this.getAttribute("value"));
			document.frames["htmedit_iframe"].focus();
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	document.getElementById("htmedit_box_bold").onmouseover = function()
	{
		this.style.backgroundPosition = "-3px -96px";
	}
	document.getElementById("htmedit_box_bold").onmouseout = function()
	{
		this.style.backgroundPosition = "-3px -30px";
	}
	document.getElementById("htmedit_box_bold").onclick = function()
	{
		commanddo("Bold");
	}
	
	document.getElementById("htmedit_box_italic").onmouseover = function()
	{
		this.style.backgroundPosition = "-27px -96px";
	}
	document.getElementById("htmedit_box_italic").onmouseout = function()
	{
		this.style.backgroundPosition = "-27px -30px";
	}
	document.getElementById("htmedit_box_italic").onclick = function()
	{
		commanddo("Italic");
	}
	
	document.getElementById("htmedit_box_underline").onmouseover = function()
	{
		this.style.backgroundPosition = "-51px -96px";
	}
	document.getElementById("htmedit_box_underline").onmouseout = function()
	{
		this.style.backgroundPosition = "-51px -30px";
	}
	document.getElementById("htmedit_box_underline").onclick = function()
	{
		commanddo("Underline");
	}
	
	document.getElementById("htmedit_box_forecolor").onmouseover = function()
	{
		this.style.backgroundPosition = "-75px -96px";
	}
	document.getElementById("htmedit_box_forecolor").onmouseout = function()
	{
		this.style.backgroundPosition = "-75px -30px";
	}
	document.getElementById("htmedit_box_forecolor").onclick = function()
	{
		if(document.getElementById("htmedit_div_forecolor_list").style.display == "none")
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
		else
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	arrdiv = document.getElementById("htmedit_div_forecolor_list").getElementsByTagName("img");
	for(var i = 0; i < arrdiv.length; i ++)
	{
		arrdiv[i].onclick = function()
		{
			document.frames["htmedit_iframe"].focus();
			document.frames["htmedit_iframe"].document.execCommand("forecolor", false, this.getAttribute("value"));
			document.frames["htmedit_iframe"].focus();
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	document.getElementById("htmedit_box_backcolor").onmouseover = function()
	{
		this.style.backgroundPosition = "-99px -96px";
	}
	document.getElementById("htmedit_box_backcolor").onmouseout = function()
	{
		this.style.backgroundPosition = "-99px -30px";
	}
	document.getElementById("htmedit_box_backcolor").onclick = function()
	{
		if(document.getElementById("htmedit_div_backcolor_list").style.display == "none")
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "";
		}
		else
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	arrdiv = document.getElementById("htmedit_div_backcolor_list").getElementsByTagName("img");
	for(var i = 0; i < arrdiv.length; i ++)
	{
		arrdiv[i].onclick = function()
		{
			document.frames["htmedit_iframe"].focus();
			document.frames["htmedit_iframe"].document.execCommand("backcolor", false, this.getAttribute("value"));
			document.frames["htmedit_iframe"].focus();
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	document.getElementById("htmedit_box_texturl").onmouseover = function()
	{
		this.style.backgroundPosition = "-123px -96px";
	}
	document.getElementById("htmedit_box_texturl").onmouseout = function()
	{
		this.style.backgroundPosition = "-123px -30px";
	}
	document.getElementById("htmedit_box_texturl").onclick = function()
	{
		window.open(strpath + "htmedit_link_text.aspx", "htmedit_link_text", "width=450, height=140, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_imgurl").onmouseover = function()
	{
		this.style.backgroundPosition = "-147px -96px";
	}
	document.getElementById("htmedit_box_imgurl").onmouseout = function()
	{
		this.style.backgroundPosition = "-147px -30px";
	}
	document.getElementById("htmedit_box_imgurl").onclick = function()
	{
		window.open(strpath + "htmedit_link_picture.aspx?key=" + parkey, "htmedit_link_picture", "width=450, height=210, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_justifyleft").onmouseover = function()
	{
		this.style.backgroundPosition = "-177px -72px";
	}
	document.getElementById("htmedit_box_justifyleft").onmouseout = function()
	{
		this.style.backgroundPosition = "-177px -6px";
	}
	document.getElementById("htmedit_box_justifyleft").onclick = function()
	{
		commanddo("justifyleft");
	}
	
	document.getElementById("htmedit_box_justifycenter").onmouseover = function()
	{
		this.style.backgroundPosition = "-201px -72px";
	}
	document.getElementById("htmedit_box_justifycenter").onmouseout = function()
	{
		this.style.backgroundPosition = "-201px -6px";
	}
	document.getElementById("htmedit_box_justifycenter").onclick = function()
	{
		commanddo("justifycenter");
	}
	
	document.getElementById("htmedit_box_justifyright").onmouseover = function()
	{
		this.style.backgroundPosition = "-225px -72px";
	}
	document.getElementById("htmedit_box_justifyright").onmouseout = function()
	{
		this.style.backgroundPosition = "-225px -6px";
	}
	document.getElementById("htmedit_box_justifyright").onclick = function()
	{
		commanddo("justifyright");
	}
	
	document.getElementById("htmedit_box_justifyfull").onmouseover = function()
	{
		this.style.backgroundPosition = "-249px -72px";
	}
	document.getElementById("htmedit_box_justifyfull").onmouseout = function()
	{
		this.style.backgroundPosition = "-249px -6px";
	}
	document.getElementById("htmedit_box_justifyfull").onclick = function()
	{
		commanddo("justifyfull");
	}
	
	document.getElementById("htmedit_box_ordered").onmouseover = function()
	{
		this.style.backgroundPosition = "-177px -96px";
	}
	document.getElementById("htmedit_box_ordered").onmouseout = function()
	{
		this.style.backgroundPosition = "-177px -30px";
	}
	document.getElementById("htmedit_box_ordered").onclick = function()
	{
		commanddo("insertorderedlist");
	}
	
	document.getElementById("htmedit_box_unordered").onmouseover = function()
	{
		this.style.backgroundPosition = "-201px -96px";
	}
	document.getElementById("htmedit_box_unordered").onmouseout = function()
	{
		this.style.backgroundPosition = "-201px -30px";
	}
	document.getElementById("htmedit_box_unordered").onclick = function()
	{
		commanddo("insertunorderedlist");
	}
	
	document.getElementById("htmedit_box_outdent").onmouseover = function()
	{
		this.style.backgroundPosition = "-225px -96px";
	}
	document.getElementById("htmedit_box_outdent").onmouseout = function()
	{
		this.style.backgroundPosition = "-225px -30px";
	}
	document.getElementById("htmedit_box_outdent").onclick = function()
	{
		commanddo("outdent");
	}
	
	document.getElementById("htmedit_box_indent").onmouseover = function()
	{
		this.style.backgroundPosition = "-249px -96px";
	}
	document.getElementById("htmedit_box_indent").onmouseout = function()
	{
		this.style.backgroundPosition = "-249px -30px";
	}
	document.getElementById("htmedit_box_indent").onclick = function()
	{
		commanddo("indent");
	}
	
	document.getElementById("htmedit_box_duan").onmouseover = function()
	{
		this.style.backgroundPosition = "-275px -72px";
	}
	document.getElementById("htmedit_box_duan").onmouseout = function()
	{
		this.style.backgroundPosition = "-275px -6px";
	}
	document.getElementById("htmedit_box_duan").onclick = function()
	{
		if(document.getElementById("htmedit_div_duan_list").style.display == "none")
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
		else
		{
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	arrdiv = document.getElementById("htmedit_div_duan_boxes").getElementsByTagName("div");
	for(var i = 0; i < arrdiv.length; i ++)
	{
		arrdiv[i].onmouseover = function()
		{
			this.style.border = "solid #ff9900 1px";
			this.style.background = "#ffffff";
		}
		arrdiv[i].onmouseout = function()
		{
			this.style.border = "solid #cccccc 1px";
			this.style.background = "#f4f4f4";
		}
		arrdiv[i].onclick = function()
		{
			document.frames["htmedit_iframe"].focus();
			document.frames["htmedit_iframe"].document.execCommand("formatblock", false, this.getAttribute("value"));
			document.frames["htmedit_iframe"].focus();
			document.getElementById("htmedit_div_font_list").style.display = "none";
			document.getElementById("htmedit_div_size_list").style.display = "none";
			document.getElementById("htmedit_div_duan_list").style.display = "none";
			document.getElementById("htmedit_div_forecolor_list").style.display = "none";
			document.getElementById("htmedit_div_backcolor_list").style.display = "none";
		}
	}
	
	document.getElementById("htmedit_box_layout").onmouseover = function()
	{
		this.style.backgroundPosition = "-309px -72px";
	}
	document.getElementById("htmedit_box_layout").onmouseout = function()
	{
		this.style.backgroundPosition = "-309px -6px";
	}
	document.getElementById("htmedit_box_layout").onclick = function()
	{
		window.open(strpath + "htmedit_layout.aspx", "htmedit_layout", "width=380, height=410, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_picture").onmouseover = function()
	{
		this.style.backgroundPosition = "-348px -72px";
	}
	document.getElementById("htmedit_box_picture").onmouseout = function()
	{
		this.style.backgroundPosition = "-348px -6px";
	}
	document.getElementById("htmedit_box_picture").onclick = function()
	{
		window.open(strpath + "htmedit_picture.aspx?key=" + parkey, "htmedit_picture", "width=700, height=450, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_file").onmouseover = function()
	{
		this.style.backgroundPosition = "-382px -72px";
	}
	document.getElementById("htmedit_box_file").onmouseout = function()
	{
		this.style.backgroundPosition = "-382px -6px";
	}
	document.getElementById("htmedit_box_file").onclick = function()
	{
		window.open(strpath + "htmedit_file.aspx?key=" + parkey, "htmedit_file", "width=700, height=450, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_music").onmouseover = function()
	{
		this.style.backgroundPosition = "-416px -72px";
	}
	document.getElementById("htmedit_box_music").onmouseout = function()
	{
		this.style.backgroundPosition = "-416px -6px";
	}
	document.getElementById("htmedit_box_music").onclick = function()
	{
		window.open(strpath + "htmedit_music.aspx", "htmedit_music", "width=450, height=160, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_video").onmouseover = function()
	{
		this.style.backgroundPosition = "-450px -72px";
	}
	document.getElementById("htmedit_box_video").onmouseout = function()
	{
		this.style.backgroundPosition = "-450px -6px";
	}
	document.getElementById("htmedit_box_video").onclick = function()
	{
		window.open(strpath + "htmedit_video.aspx", "htmedit_video", "width=450, height=160, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_flash").onmouseover = function()
	{
		this.style.backgroundPosition = "-484px -72px";
	}
	document.getElementById("htmedit_box_flash").onmouseout = function()
	{
		this.style.backgroundPosition = "-484px -6px";
	}
	document.getElementById("htmedit_box_flash").onclick = function()
	{
		window.open(strpath + "htmedit_flash.aspx?key=" + parkey, "htmedit_flash", "width=700, height=450, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_marquee").onmouseover = function()
	{
		this.style.backgroundPosition = "-518px -72px";
	}
	document.getElementById("htmedit_box_marquee").onmouseout = function()
	{
		this.style.backgroundPosition = "-518px -6px";
	}
	document.getElementById("htmedit_box_marquee").onclick = function()
	{
		window.open(strpath + "htmedit_marquee.aspx", "htmedit_marquee", "width=450, height=170, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
	}
	
	document.getElementById("htmedit_box_time").onmouseover = function()
	{
		this.style.backgroundPosition = "-552px -72px";
	}
	document.getElementById("htmedit_box_time").onmouseout = function()
	{
		this.style.backgroundPosition = "-552px -6px";
	}
	document.getElementById("htmedit_box_time").onclick = function()
	{
		var mydatetime = new Date();
		document.frames["htmedit_iframe"].focus();
		document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML(mydatetime.toLocaleString());
		document.frames["htmedit_iframe"].document.selection.createRange().collapse(false);
		document.frames["htmedit_iframe"].document.selection.createRange().select();
		document.frames["htmedit_iframe"].focus();
	}
	
	document.getElementById("htmedit_box_undo").onmouseover = function()
	{
		this.style.backgroundPosition = "-591px -72px";
	}
	document.getElementById("htmedit_box_undo").onmouseout = function()
	{
		this.style.backgroundPosition = "-591px -6px";
	}
	document.getElementById("htmedit_box_undo").onclick = function()
	{
		commanddo("Undo");
	}
	
	document.getElementById("htmedit_box_redo").onmouseover = function()
	{
		this.style.backgroundPosition = "-591px -96px";
	}
	document.getElementById("htmedit_box_redo").onmouseout = function()
	{
		this.style.backgroundPosition = "-591px -30px";
	}
	document.getElementById("htmedit_box_redo").onclick = function()
	{
		commanddo("Redo");
	}
	
	document.getElementById("htmedit_box_view").onmouseover = function()
	{
		this.style.backgroundPosition = "-624px -72px";
	}
	document.getElementById("htmedit_box_view").onmouseout = function()
	{
		this.style.backgroundPosition = "-624px -6px";
	}
	document.getElementById("htmedit_box_view").onclick = function()
	{
		var strvalue;
		if(strview == "n")
		{
			document.getElementById("htmedit_iframe").style.display = "";
			document.getElementById("htmedit_textarea").style.display = "none";
			strvalue = document.getElementById("htmedit_textarea").value;
			strvalue = strvalue.replace(/<script/gi, "&lt;");
			strvalue = strvalue.replace(/\/script>/gi, "&gt;");
			strvalue = strvalue.replace(/<%/gi, "&lt;");
			strvalue = strvalue.replace(/\/%>/gi, "&gt;");
			document.frames["htmedit_iframe"].document.body.innerHTML = strvalue;
			
			strview = "y";
		}
	}
	
	document.getElementById("htmedit_box_source").onmouseover = function()
	{
		this.style.backgroundPosition = "-624px -96px";
	}
	document.getElementById("htmedit_box_source").onmouseout = function()
	{
		this.style.backgroundPosition = "-624px -30px";
	}
	document.getElementById("htmedit_box_source").onclick = function()
	{
		var strvalue;
		if(strview == "y")
		{
			document.getElementById("htmedit_iframe").style.display = "none";
			document.getElementById("htmedit_textarea").style.display = "";
			strvalue = document.frames["htmedit_iframe"].document.body.innerHTML;
			strvalue = strvalue.replace(/<script/gi, "&lt;");
			strvalue = strvalue.replace(/\/script>/gi, "&gt;");
			strvalue = strvalue.replace(/<%/gi, "&lt;");
			strvalue = strvalue.replace(/\/%>/gi, "&gt;");
			//strvalue = strvalue.replace(/&amp;/gi, "&");
			document.getElementById("htmedit_textarea").value = strvalue;
			
			strview = "n";
		}
	}
	
	function commanddo(parorder)
	{
		document.frames["htmedit_iframe"].focus();
		document.frames["htmedit_iframe"].document.execCommand(parorder, false, null);
		document.frames["htmedit_iframe"].focus();
	}
	
	var strhtm = "\
	<html>\
	<head>\
	<style type='text/css'>\
	body{margin:0px;padding:0px;font-size:12px;line-height:22px;font-family:'Courier New',Courier,'宋体';overflow:auto;word-wrap:break-word;}\
	.clslayout {display:inline;}\
	.clslayout td{border:silver 1px dashed;}\
	</style>\
	</head>\
	<body>\n\
	" + parcontent + "\
	</body>\
	</html>\
	";
	document.frames["htmedit_iframe"].document.open();
	document.frames["htmedit_iframe"].document.write(strhtm);
	document.frames["htmedit_iframe"].document.close();
	document.frames["htmedit_iframe"].document.designMode = "on";
	
	document.getElementById("htmedit_textarea").value = parcontent;
	
	this.savecontent = function()
	{
		var strvalue;
		if(strview == "y")
		{
			strvalue = document.frames["htmedit_iframe"].document.body.innerHTML;
			//strvalue = strvalue.replace(/&amp;/gi, "&");
		}
		else
		{
			strvalue = document.getElementById("htmedit_textarea").value;
		}
		strvalue = strvalue.replace(/<script/gi, "&lt;");
		strvalue = strvalue.replace(/\/script>/gi, "&gt;");
		strvalue = strvalue.replace(/<%/gi, "&lt;");
		strvalue = strvalue.replace(/\/%>/gi, "&gt;");
		document.getElementById("htmedit_textarea").value = strvalue;
	}
}