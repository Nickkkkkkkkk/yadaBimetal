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

	if(window.idtext.value == "")
	{
		alert("�������������ݣ�");
		window.idtext.focus();
		return;
	}
	if(window.idsrc.value == "" || window.idsrc.value == "http://")
	{
		alert("���������ӵ�ַ��");
		window.idsrc.focus();
		return;
	}
	try
	{
		var strblank = "";
		if(window.idblank.checked)
		{
			strblank = " target='_blank'";
		}
		
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<a href='" + window.idsrc.value + "'" + strblank + ">" + window.idtext.value + "</a>");
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
			�������ݣ�<input type="text" id="idtext" size="35" value="" onkeypress="if(event.keyCode == 13){insert_do();}"><br>
			���ӵ�ַ��<input type="text" id="idsrc" size="35" value="http://" onkeypress="if(event.keyCode == 13){insert_do();}">
			<input type="checkbox" id="idblank" checked>�´���<br>
			<center><input type="button" value="ȷ��" onclick="insert_do();"></center>
		</td>
	</tr>
</table>
</center>
</body>
</html>