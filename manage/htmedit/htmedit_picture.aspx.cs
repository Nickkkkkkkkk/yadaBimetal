using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;

public class cnfly_htmedit_picture : System.Web.UI.Page
{
	protected Dictionary<string, string> objinfo = new Dictionary<string, string>();
	protected string[] arrname;
	protected string[] arrtype;
	protected string[] arrlength;
	protected string[] arrdatetime;
	
	protected void page_do()
	{
		string strkey = Request.QueryString["key"];
		strkey = cnfly_api.value_sign_string(strkey, "");
		
		objinfo.Add("key", strkey);
		if(objinfo["key"] == "")
		{
			objinfo["key"] = ".";
		}
		
		try
		{
			DirectoryInfo objdirinfo = new DirectoryInfo(Server.MapPath("/") + "picture\\" + objinfo["key"] + "\\");
			FileInfo[] arrfileinfo = objdirinfo.GetFiles();
			Array.Sort(arrfileinfo, new cnfly_htmedit_picture_datetime());
			
			arrname = new string[arrfileinfo.Length];
			arrtype = new string[arrfileinfo.Length];
			arrlength = new string[arrfileinfo.Length];
			arrdatetime = new string[arrfileinfo.Length];
			
			long lngvalue = 0;
			for(int i = 0; i < arrfileinfo.Length; i = i + 1)
			{
				arrname[i] = arrfileinfo[i].Name;
				arrtype[i] = arrname[i].Substring(arrname[i].Length - 4).ToLower();
				
				if(arrfileinfo[i].Length > 1024 * 1024)
				{
					lngvalue = arrfileinfo[i].Length / (1024 * 1024);
					arrlength[i] = lngvalue.ToString() + "M";
				}
				else if(arrfileinfo[i].Length > 1024)
				{
					lngvalue = arrfileinfo[i].Length / 1024;
					arrlength[i] = lngvalue.ToString() + "K";
				}
				else
				{
					lngvalue = arrfileinfo[i].Length;
					arrlength[i] = lngvalue.ToString() + "B";
				}
				
				arrdatetime[i] = arrfileinfo[i].LastWriteTime.ToString();
			}
		}
		catch
		{
		}
	}
}

class cnfly_htmedit_picture_datetime : IComparer
{
	public int Compare(object obj1, object obj2)
	{
		FileInfo file1 = (FileInfo)obj1;
		FileInfo file2 = (FileInfo)obj2;
		int intreturn = DateTime.Compare(file1.LastWriteTime, file2.LastWriteTime);
		intreturn = -1 * intreturn;
		return intreturn;
	}
}