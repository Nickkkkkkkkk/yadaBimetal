<% @page language="c#" inherits="cnfly_htmedit_file_upload_do" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
int intreturn = page_do();

if(intreturn == 0)
{
	Response.Write("<script>alert('文件上传成功！'); window.location='htmedit_file.aspx?key=" + objinfo["key"] + "';</script>");
}
else if(intreturn == 2)
{
	Response.Write("<script>alert('文件上传失败！'); history.back();</script>");
}
else if(intreturn == 1)
{
	Response.Write("<script>alert('操作异常！'); history.back();</script>");
}
%>