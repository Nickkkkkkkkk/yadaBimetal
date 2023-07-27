<html>
<head>
<title>布局</title>
<link rel="stylesheet" href="htmedit.css" type="text/css">
</head>
<body>
<table width="100%" height="25" border="0" cellpadding="0" cellspacing="0">
	<tr bgcolor="#0080c0">
		<td class="font14plus">&nbsp;&nbsp;&nbsp;布局</td>
		<td class="font14plus" align="right">操作：<a href="#" class="font14plus" onclick="window.close(); return false;">关闭窗口</a>&nbsp;&nbsp;&nbsp;</td>
	</tr>
	<tr>
		<td bgcolor="#b5d8e6" height="3" colspan="2"></td>
	</tr>
</table>
<center>
<script lanuage="javascript">
var strlayout = "";
function select_do(strid)
{
	for(var i = 1; i <= 9; i = i + 1)
	{
		document.getElementById("idlayout" + i).bgColor = "#999999";
	}
	document.getElementById("idlayout" + strid).bgColor = "#fc9e03";
	
	if(strid == "1")
	{
		strlayout = "\
<table cellspacing='0' cellpadding='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='10'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "2")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='215' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5'></td>\
		<td>\
    <table cellspacing='0' cellpadding='0' width='215' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5'></td>\
		<td>\
    <table cellspacing='0' cellpadding='0' width='215' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "3")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td><table cellspacing='0' cellpadding='0' width='650' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table></td>\
	</tr>\
	<tr>\
		<td height='10' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='650' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "4")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td rowspan='3' width='5'></td>\
		<td rowspan='3'>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "5")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td rowspan='3'>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5' rowspan='3'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "6")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' colspan='3' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='157' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "7")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td rowspan='5'>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td rowspan='5' width='5'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "8")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td rowspan='5' width='5'></td>\
		<td rowspan='5'>\
		<table cellspacing='0' cellpadding='0' width='325' height='320' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else if(strid == "9")
	{
		strlayout = "\
<table border='0' cellpadding='0' cellspacing='0'>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td width='5' rowspan='5'></td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' colspan='2' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
	<tr>\
		<td height='5' colspan='2' style='font-size:5px;'></td>\
	</tr>\
	<tr>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
		<td>\
		<table cellspacing='0' cellpadding='0' width='325' height='103' class='clslayout'>\
			<tr>\
				<td valign='top'>&nbsp;</td>\
			</tr>\
		</table>\
		</td>\
	</tr>\
</table>\
		";
	}
	else
	{
		strlayout = "";
	}
}
function insert_do()
{
	if(opener.document.getElementById("htmedit_iframe").style.display == "none")
	{
		return;
	}

	if(strlayout == "")
	{
		alert("请选择布局！")
		return;
	}
	try
	{
		opener.document.frames["htmedit_iframe"].focus();
		opener.document.frames["htmedit_iframe"].document.selection.createRange().pasteHTML(strlayout);
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
<TABLE border="0" width="314" cellpadding="0" cellspacing="7">
	<TBODY>
	  <TR>
	    <TD id="idlayout1" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_1.gif" width="90" height="100" border="0" onclick="select_do('1');"></TD>
	    <TD id="idlayout2" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_2.gif" width="90" height="100" border="0" onclick="select_do('2');"></TD>
	    <TD id="idlayout3" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_3.gif" width="90" height="100" border="0" onclick="select_do('3');"></TD>
	  </TR>
	  <TR>
	    <TD id="idlayout4" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_4.gif" width="90" height="100" border="0" onclick="select_do('4');"></TD>
	    <TD id="idlayout5" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_5.gif" width="90" height="100" border="0" onclick="select_do('5');"></TD>
	    <TD id="idlayout6" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_6.gif" width="90" height="100" border="0" onclick="select_do('6');"></TD>
	  </TR>
	  <TR>
	    <TD id="idlayout7" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_7.gif" width="90" height="100" border="0" onclick="select_do('7');"></TD>
	    <TD id="idlayout8" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_8.gif" width="90" height="100" border="0" onclick="select_do('8');"></TD>
	    <TD id="idlayout9" bgcolor="#999999" height="108" align="center" valign="middle"><IMG src="layout_9.gif" width="90" height="100" border="0" onclick="select_do('9');"></TD>
	  </TR>
	</TBODY>
</TABLE>
<input type="button" value="确定" onclick="insert_do();">
</center>
</body>
</html>