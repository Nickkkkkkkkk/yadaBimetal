<% @page language="c#" inherits="cnfly_htmedit_file_upload_do" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
int intreturn = page_do();

if(intreturn == 0)
{
	Response.Write("<script>alert('�ļ��ϴ��ɹ���'); window.location='htmedit_file.aspx?key=" + objinfo["key"] + "';</script>");
}
else if(intreturn == 2)
{
	Response.Write("<script>alert('�ļ��ϴ�ʧ�ܣ�'); history.back();</script>");
}
else if(intreturn == 1)
{
	Response.Write("<script>alert('�����쳣��'); history.back();</script>");
}
%>