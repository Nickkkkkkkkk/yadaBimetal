<html>
<head>
<title>滚动效果</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;滚动效果</td>
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

	if(window.idtext.value == "")
	{
		alert("请输入文字内容！");
		window.idtext.focus();
		return;
	}
	try
	{
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<marquee behavior=alternate direction=left scrollamount=3 border=1>" + window.idtext.value.replace("\r\n", "<br>\r\n") + "</marquee>");
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
<table width="90%" height="85" border="0">
	<tr>
		<td>
			文字内容：<textarea rows="6" cols="35" id="idtext"></textarea><br>
			<center><input type="button" value="确定" onclick="insert_do();"></center>
		</td>
	</tr>
</table>
</center>
</body>
</html>