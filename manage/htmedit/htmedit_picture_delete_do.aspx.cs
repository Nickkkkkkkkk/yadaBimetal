using System;
using System.IO;
using System.Collections.Generic;

public class cnfly_htmedit_picture_delete_do : System.Web.UI.Page
{
	protected Dictionary<string, string> objinfo = new Dictionary<string, string>();
	
	protected int page_do()
	{
		string strkey = Request.QueryString["key"];
		string strname = Request.QueryString["name"];
		
		strkey = cnfly_api.value_sign_string(strkey, "");
		strname = cnfly_api.value_filename_string(strname, "");
		
		objinfo.Add("key", strkey);
		if(objinfo["key"] == "")
		{
			objinfo["key"] = ".";
		}
		objinfo.Add("name", strname);
		
		int intreturn = 0;
		try
		{
			File.Delete(Server.MapPath("/") + "picture\\" + strkey + "\\" + strname);
		}
		catch
		{
			intreturn = 1;
		}
		
		return intreturn;
	}
}