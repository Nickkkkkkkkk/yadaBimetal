<html>
<head>
<title>��Ƶ����</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;��Ƶ����</td>
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
		alert("��������Ƶ��ַ��");
		window.idsrc.focus();
		return;
	}
	if(window.idsrc.value.length < 4)
	{
		alert("��Ƶ��ʽ����");
		window.idsrc.focus();
		return;
	}
	else if(window.idsrc.value.substring(window.idsrc.value.length - 4) != ".swf")
	{
		alert("��Ƶ��ʽ����");
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
			<TD height="30">��Ƶ��ַ��<input size="45" type="text" id="idsrc" onkeypress="if(event.keyCode == 13) insert_do();"></TD>
		</TR>
		<TR>
			<TD><FONT color="#999999">��ܰ��ʾ����������Ƶ������Դ��ַ��Ŀǰ֧��Ku6�����䷿��56���ſ�ȶ����Ƶ��վ��Ŀǰ��֧��swf��ʽ��Ƶ�ļ���</FONT></TD>
		</TR>
		<TR>
			<TD height="42" align="center"><input type="button" value="ȷ��" onclick="insert_do();"></TD>
		</TR>
	</TBODY>
</TABLE>
</center>
</body>
</html>