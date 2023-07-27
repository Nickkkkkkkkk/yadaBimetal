using System;
using System.Collections.Generic;

public class cnfly_htmedit_link_picture : System.Web.UI.Page
{
	protected Dictionary<string, string> objinfo = new Dictionary<string, string>();
	
	protected void page_do()
	{
		string strkey = Request.QueryString["key"];
		string strpicture = Request.QueryString["picture"];
		
		strkey = cnfly_api.value_sign_string(strkey, "");
		strpicture = cnfly_api.value_filename_string(strpicture, "");
		
		objinfo.Add("key", strkey);
		if(objinfo["key"] == "")
		{
			objinfo["key"] = ".";
		}
		objinfo.Add("picture", strpicture);
		if(objinfo["picture"] == "")
		{
			objinfo["picture"] = "http://";
		}
		else
		{
			objinfo["picture"] = "/picture/" + objinfo["key"] + "/" + objinfo["picture"];
		}
	}
}