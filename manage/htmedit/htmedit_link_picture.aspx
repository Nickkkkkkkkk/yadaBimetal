<% @page language="c#" inherits="cnfly_htmedit_link_picture" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
page_do();
%>
<html>
<head>
<title>ͼƬ����</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;ͼƬ����</td>
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

	if(window.idpicture.value == "" || window.idpicture.value == "http://")
	{
		alert("������ͼƬ��ַ��");
		window.idpicture.focus();
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
		if(window.idsrc.value == "" || window.idsrc.value == "http://")
		{
			opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<img src='" + window.idpicture.value + "' border='0'>");
		}
		else
		{
			opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<a href='" + window.idsrc.value + "'" + strblank + "><img src='" + window.idpicture.value + "' border='0'></a>");
		}
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
<script language="javascript">
function submit_do()
{
	if(frmitem.filpicture.value == "")
	{
		alert("��ѡ���ϴ��ļ���");
		frmitem.filpicture.focus();
		return false;
	}
	
	return true;
}
</script>
<form name="frmitem" method="post" action="htmedit_link_picture_upload_do.aspx" encType="multipart/form-data" onsubmit="return submit_do();">
<input type="hidden" name="hidkey" value="<%=objinfo["key"]%>">
		<TR>
			<TD height="30">ͼƬ�ϴ���<input size="30" type="file" name="filpicture">
			<INPUT type="submit" value="�ϴ�"></TD>
		</TR>
</form>
		<TR>
			<TD height="30">ͼƬ��ַ��<input type="text" id="idpicture" size="35" value="<%=objinfo["picture"]%>" onkeypress="if(event.keyCode == 13) insert_do();"></TD>
		</TR>
		<TR>
			<TD height="30">���ӵ�ַ��<input type="text" id="idsrc" size="35" value="http://" onkeypress="if(event.keyCode == 13) insert_do();">
			<input type="checkbox" id="idblank" checked>�´���</TD>
		</TR>
		<TR>
			<TD height="50"><FONT color="#999999">��ܰ��ʾ��������ͼƬ������ͼƬ��ַ������ͼƬ·������<br>����http://www.baidu.com/picture/123.jpg</FONT></TD>
		</TR>
		<TR>
			<TD height="42" align="center"><INPUT type="button" value="ȷ��" onclick="insert_do();"></TD>
		</TR>
	</TBODY>
</TABLE>
</center>
</body>
</html>