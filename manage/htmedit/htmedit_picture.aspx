<% @page language="c#" inherits="cnfly_htmedit_picture" %>
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
		<td align="left">&nbsp;&nbsp;&nbsp;<a href="htmedit_picture.aspx?key=<%=objinfo["key"]%>" class="font14plus">ͼƬ�б�</a></td>
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
	if(frmitem.filpicture.value == "")
	{
		alert("��ѡ���ϴ��ļ���");
		frmitem.filpicture.focus();
		return false;
	}
	
	return true;
}
</script>
<form name="frmitem" method="post" action="htmedit_picture_upload_do.aspx" encType="multipart/form-data" onsubmit="return submit_do();">
<input type="hidden" name="hidkey" value="<%=objinfo["key"]%>">
			<tr>
				<td>ͼƬ�ϴ���<input type="file" name="filpicture" size="30"> <input type="submit" value="�ϴ�"></td>
			</tr>
</form>
		</table>
<script language="javascript">
function image_do(parimage, parwidth, parheight)
{
	var objimage=new Image();
	objimage.src = parimage.src;
	
	var intwidth = objimage.width;
	var intheight = objimage.height;

	if(intwidth > 0 && intheight > 0)
	{
		if(intwidth / intheight >= parwidth / parheight)
		{
			parimage.width = parwidth;
			parimage.heigth = (intheight * parwidth) / intwidth;
		}
		else
		{
			parimage.width = (intwidth * parheight) / intheight;
			parimage.height = parheight;
		}
	}
}
function select_do(parname)
{
	if(opener.document.getElementById("htmedit_iframe").style.display == "none")
	{
		return;
	}

	try
	{
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML("<img src='/picture/<%=objinfo["key"]%>/" + parname + "' border='0'>");
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
		<table width="90%" cellpadding="1" cellspacing="1" bgcolor="#73aac8">
			<tr bgcolor="#bfd8e6" align="center">
				<td>ͼƬ</td><td>�ļ���</td><td>�ļ���С</td><td>��������</td><td>����</td>
			</tr>
<%
for(int i = 0; i < arrname.Length; i = i + 1)
{
	if(arrtype[i] == ".jpg" || arrtype[i] == ".gif")
	{
%>
			<tr height="100" bgcolor="#ffffff" align="center">
				<td><a href="/picture/<%=objinfo["key"]%>/<%=Server.UrlEncode(arrname[i]).Replace("+", "%20")%>" target="_blank"><img src="/picture/<%=objinfo["key"]%>/<%=arrname[i]%>" border="0" onload="image_do(this, 100, 100);"></a></td>
				<td><%=arrname[i]%></td>
				<td><%=arrlength[i]%></td>
				<td><%=arrdatetime[i]%></td>
				<td>
				<a href="#" onclick="select_do('<%=arrname[i]%>'); return false;">ѡ��</a>
				<a href="htmedit_picture_delete_do.aspx?key=<%=objinfo["key"]%>&name=<%=Server.UrlEncode(arrname[i]).Replace("+", "%20")%>" onclick="return confirm('ȷ��Ҫɾ�����ļ���');">ɾ��</a>
				</td>
			</tr>
<%
	}
}
%>
		</table>
		<table width="90%" border="0">
			<tr>
				<td>֧���ļ���ʽ������.jpg .gif</td>
			</tr>
		</table>
		</center>
		</td>
	</tr>
</table>
</body>
</html>