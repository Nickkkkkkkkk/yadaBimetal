<% @page language="c#" inherits="cnfly_link_htmedit_picture_upload_do" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
int intreturn = page_do();

if(intreturn == 0)
{
	Response.Write("<script>alert('�ļ��ϴ��ɹ���'); window.location='htmedit_link_picture.aspx?key=" + objinfo["key"] + "&picture=" + objinfo["picture"]
		+ "';</script>");
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