<html>
<head>
<title>音乐链接</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;音乐链接</td>
		<td class="font14plus" align="right">操作：<a href="#" class="font14plus" onclick="window.close(); return false;">关闭窗口</a>&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr>
		<td bgcolor="#b5d8e6" height="3" colspan="2"></td>
	</tr>
</table>
<center>
<script lanuage="javascript">
function insert_do()
{
	if(opener.document.getElementById("htmedit_iframe").style.display == "none")
	{
		return;
	}

	if(window.idsrc.value == "")
	{
		alert("请输入音乐地址！");
		window.idsrc.focus();
		return;
	}
	if(window.idsrc.value.length < 4)
	{
		alert("音乐格式错误！");
		window.idsrc.focus();
		return;
	}
	else if(window.idsrc.value.substring(window.idsrc.value.length - 4) != ".mp3")
	{
		alert("音乐格式错误！");
		window.idsrc.focus();
		return;
	}
	try
	{
		var strautostart = "";
		var strloop = "";
		if(window.idautostart.checked)
		{
			strautostart = "true";
		}
		else
		{
			strautostart = "false";
		}
		if(window.idloop.checked)
		{
			strloop = "true";
		}
		else
		{
			strloop = "false";
		}
		
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<embed src='" + window.idsrc.value + "' autostart='" + strautostart + "' loop='" + strloop + "' controls='ControlPanel' width='200' height='45' />");
		opener.document.frames["htmedit_iframe"].document.selection.createRange().collapse(false);
		opener.document.frames["htmedit_iframe"].document.selection.createRange().select();
		opener.document.frames["htmedit_iframe"].focus();
	}
	catch(err)
	{
	}
	window.close();
}
</script>
<TABLE border="0" width="90%" cellpadding="0" cellspacing="0">
	<TBODY>
		<TR>
			<TD height="30">音乐地址：<input size="45" type="text" value="" id="idsrc" onkeypress="if(event.keyCode == 13) insert_do();"></TD>
		</TR>
		<TR>
			<TD height="36">　　　　　<input type="checkbox" id="idautostart">自动播放　　<input type="checkbox" id="idloop">循环播放</TD>
		</TR>
		<TR>
			<TD><FONT color="#999999">温馨提示：仅支持mp3格式文件。</FONT></TD>
		</TR>
		<TR>
			<TD height="42" align="center"><input type="button" value="确定" onclick="insert_do();"></TD>
		</TR>
	</TBODY>
</TABLE>
</center>
</body>
</html>