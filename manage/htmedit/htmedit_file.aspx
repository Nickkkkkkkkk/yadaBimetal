<% @page language="c#" inherits="cnfly_htmedit_file" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
page_do();
%>
<html>
<head>
<title>�ļ�����</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td align="left">&nbsp;&nbsp;&nbsp;<a href="htmedit_file.aspx?key=<%=objinfo["key"]%>" class="font14plus">�ļ��б�</a></td>
		<td class="font14plus" align="right">������<a href="#" class="font14plus" onclick="window.close(); return false;">�رմ���</a>&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr>
		<td bgcolor="#b5d8e6" height="3" colspan="2"></td>
	</tr>
</table>
<table width="100%" height="390" border="0">
	<tr>
		<td valign="top">
		<center>
		<table width="90%" border="0">
<script language="javascript">
function submit_do()
{
	if(frmitem.filfile.value == "")
	{
		alert("��ѡ���ϴ��ļ���");
		frmitem.filfile.focus();
		return false;
	}
	
	return true;
}
</script>
<form name="frmitem" method="post" action="htmedit_file_upload_do.aspx" encType="multipart/form-data" onsubmit="return submit_do();">
<input type="hidden" name="hidkey" value="<%=objinfo["key"]%>">
			<tr>
				<td>�ļ��ϴ���<input type="file" name="filfile" size="30"> <input type="submit" value="�ϴ�"></td>
			</tr>
</form>
		</table>
<script language="javascript">
function select_do(parname)
{
	if(opener.document.getElementById("htmedit_iframe").style.display == "none")
	{
		return;
	}

	opener.document.frames["htmedit_iframe"].focus();
	opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<a href='/picture/<%=objinfo["key"]%>/" + parname + "'>" + parname + "</a>");
	opener.document.frames["htmedit_iframe"].document.selection.createRange().collapse(false);
	opener.document.frames["htmedit_iframe"].document.selection.createRange().select();
	opener.document.frames["htmedit_iframe"].focus();
	window.close();
}
</script>
		<table width="90%" cellpadding="1" cellspacing="1" bgcolor="#73aac8">
			<tr bgcolor="#bfd8e6" align="center">
				<td>�ļ���</td><td>�ļ���С</td><td>��������</td><td>����</td>
			</tr>
<%
for(int i = 0; i < arrname.Length; i = i + 1)
{
	if(arrtype[i] == ".rar" || arrtype[i] == ".zip" || arrtype[i] == ".doc" || arrtype[i] == ".xls" || arrtype[i] == ".pdf")
	{
%>
			<tr height="100" bgcolor="#ffffff" align="center">
				<td><%=arrname[i]%></td>
				<td><%=arrlength[i]%></td>
				<td><%=arrdatetime[i]%></td>
				<td>
				<a href="#" onclick="select_do('<%=arrname[i]%>'); return false;">ѡ��</a>
				<a href="htmedit_file_delete_do.aspx?key=<%=objinfo["key"]%>&name=<%=Server.UrlEncode(arrname[i]).Replace("+", "%20")%>" onclick="return confirm('ȷ��Ҫɾ�����ļ���');">ɾ��</a>
				</td>
			</tr>
<%
	}
}
%>
		</table>
		<table width="90%" border="0">
			<tr>
				<td>֧���ļ���ʽ������.rar .zip .doc .xls .pdf</td>
			</tr>
		</table>
		</center>
		</td>
	</tr>
</table>
</body>
</html>