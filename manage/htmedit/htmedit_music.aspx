<html>
<head>
<title>��������</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;��������</td>
		<td class="font14plus" align="right">������<a href="#" class="font14plus" onclick="window.close(); return false;">�رմ���</a>&nbsp;&nbsp;&nbsp;</td>
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
		alert("���������ֵ�ַ��");
		window.idsrc.focus();
		return;
	}
	if(window.idsrc.value.length < 4)
	{
		alert("���ָ�ʽ����");
		window.idsrc.focus();
		return;
	}
	else if(window.idsrc.value.substring(window.idsrc.value.length - 4) != ".mp3")
	{
		alert("���ָ�ʽ����");
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
			<TD height="30">���ֵ�ַ��<input size="45" type="text" value="" id="idsrc" onkeypress="if(event.keyCode == 13) insert_do();"></TD>
		</TR>
		<TR>
			<TD height="36">����������<input type="checkbox" id="idautostart">�Զ����š���<input type="checkbox" id="idloop">ѭ������</TD>
		</TR>
		<TR>
			<TD><FONT color="#999999">��ܰ��ʾ����֧��mp3��ʽ�ļ���</FONT></TD>
		</TR>
		<TR>
			<TD height="42" align="center"><input type="button" value="ȷ��" onclick="insert_do();"></TD>
		</TR>
	</TBODY>
</TABLE>
</center>
</body>
</html>