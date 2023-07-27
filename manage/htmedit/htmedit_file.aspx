<% @page language="c#" inherits="cnfly_htmedit_file" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
page_do();
%>
<html>
<head>
<title>文件管理</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td align="left">&nbsp;&nbsp;&nbsp;<a href="htmedit_file.aspx?key=<%=objinfo["key"]%>" class="font14plus">文件列表</a></td>
		<td class="font14plus" align="right">操作：<a href="#" class="font14plus" onclick="window.close(); return false;">关闭窗口</a>&nbsp;&nbsp;&nbsp;</td>
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
		alert("请选择上传文件！");
		frmitem.filfile.focus();
		return false;
	}
	
	return true;
}
</script>
<form name="frmitem" method="post" action="htmedit_file_upload_do.aspx" encType="multipart/form-data" onsubmit="return submit_do();">
<input type="hidden" name="hidkey" value="<%=objinfo["key"]%>">
			<tr>
				<td>文件上传：<input type="file" name="filfile" size="30"> <input type="submit" value="上传"></td>
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
				<td>文件名</td><td>文件大小</td><td>更新日期</td><td>操作</td>
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
				<a href="#" onclick="select_do('<%=arrname[i]%>'); return false;">选择</a>
				<a href="htmedit_file_delete_do.aspx?key=<%=objinfo["key"]%>&name=<%=Server.UrlEncode(arrname[i]).Replace("+", "%20")%>" onclick="return confirm('确认要删除该文件吗？');">删除</a>
				</td>
			</tr>
<%
	}
}
%>
		</table>
		<table width="90%" border="0">
			<tr>
				<td>支持文件格式包括：.rar .zip .doc .xls .pdf</td>
			</tr>
		</table>
		</center>
		</td>
	</tr>
</table>
</body>
</html>