<% @page language="c#" inherits="cnfly_htmedit_flash_delete_do" %>
<% string pub_limit = ""; %>
<!--#include file="htmedit_limit.aspx"-->
<%
int intreturn = page_do();

if(intreturn == 0)
{
	Response.Write("<script>alert('�ļ�ɾ���ɹ���'); window.location='htmedit_flash.aspx?key=" + objinfo["key"] + "';</script>");
}
else if(intreturn == 1)
{
	Response.Write("<script>alert('�����쳣��'); history.back();</script>");
}
%>