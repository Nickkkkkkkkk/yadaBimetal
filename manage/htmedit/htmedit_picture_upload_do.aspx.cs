using System;
using System.Web;
using System.Collections.Generic;

public class cnfly_htmedit_picture_upload_do : System.Web.UI.Page
{
	protected Dictionary<string, string> objinfo = new Dictionary<string, string>();
	
	protected int page_do()
	{
		string strkey = Request.QueryString["key"];
		strkey = cnfly_api.value_sign_string(strkey, "");
		
		objinfo.Add("key", strkey);
		if(objinfo["key"] == "")
		{
			objinfo["key"] = ".";
		}
		
		int intreturn = 0;
		try
		{
			string strfile = upload_save("picture", Server.MapPath("/") + "picture\\" + objinfo["key"] + "\\", "", 0);
			if(strfile == "")
			{
				intreturn = 2;
			}
		}
		catch
		{
			intreturn = 1;
		}
		
		return intreturn;
	}
	
	string upload_save(string partype, string parpath, string parname, int parposition)
	{
		if(Request.Files.Count == 0)
		{
			return "";
		}
		HttpPostedFile objfile = Request.Files[parposition];
		if(objfile.ContentLength == 0)
		{
			return "";
		}
		
		try
		{
			string strname = objfile.FileName;
			strname = strname.Substring(strname.LastIndexOf("\\") + 1);
			string strextendname = strname.Substring(strname.Length - 4);
			strextendname = strextendname.ToLower();
			if(strextendname.Substring(1) == ".js")
			{
				strextendname = ".js";
			}
			if(parname != "")
			{
				strname = parname + strextendname;
			}
			
			if(partype == "picture")
			{
				if(strextendname != ".jpg" && strextendname != ".gif")
				{
					return "";
				}
			}
			else if(partype == "flash")
			{
				if(strextendname != ".swf")
				{
					return "";
				}
			}
			else if(partype == "file")
			{
				if(strextendname != ".jpg" && strextendname != ".gif" && strextendname != ".swf" && strextendname != ".rar" && strextendname != ".zip"
					&& strextendname != ".doc" && strextendname != ".xls" && strextendname != ".pdf")
				{
					return "";
				}
			}
			else if(partype == "js")
			{
				if(strextendname != ".js")
				{
					return "";
				}
			}
			else
			{
				return "";
			}
	
			objfile.SaveAs(parpath + strname);
			return strname;
		}
		catch
		{
			return "";
		}
	}
}