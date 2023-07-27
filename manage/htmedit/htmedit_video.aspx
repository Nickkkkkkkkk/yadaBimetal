<html>
<head>
<title>视频链接</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;视频链接</td>
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
		alert("请输入视频地址！");
		window.idsrc.focus();
		return;
	}
	if(window.idsrc.value.length < 4)
	{
		alert("视频格式错误！");
		window.idsrc.focus();
		return;
	}
	else if(window.idsrc.value.substring(window.idsrc.value.length - 4) != ".swf")
	{
		alert("视频格式错误！");
		window.idsrc.focus();
		return;
	}
	try
	{
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0'><param name='movie' value='" + window.idsrc.value + "'></object>");
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
			<TD height="30">视频地址：<input size="45" type="text" id="idsrc" onkeypress="if(event.keyCode == 13) insert_do();"></TD>
		</TR>
		<TR>
			<TD><FONT color="#999999">温馨提示：请输入视频的网络源地址，目前支持Ku6、六间房、56、优酷等多家视频网站。目前仅支持swf格式视频文件。</FONT></TD>
		</TR>
		<TR>
			<TD height="42" align="center"><input type="button" value="确定" onclick="insert_do();"></TD>
		</TR>
	</TBODY>
</TABLE>
</center>
</body>
</html>