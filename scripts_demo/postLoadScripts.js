var e3ds_session_token =
"170034345123277516995602857754108416/U2FsdGVkX19Q2IOljHMksrwCmSYUdoUsu+bh/1cGzCB79eVFvDTfEDHd/HpbrdbBanWRjsIAArz4/vt0oo+SHKpZiWPk0vTPR3Gx+eROnUB2bKtWY8CeU9OgDAI/zYZOmdXbKM6+kNH2U7WKzv6WoBEHiva3MSaPq3f5Y3mupn85l+U/XjpSUhm2y4y+1BO8FlFYwUbxClgSDaCevl/fpF2SQYv2rbbp9KIRqxs4F8CGKv2YOoc/LX9n/Les4FQCqpdh30o+krHS7pz1jxULnG2KgOpwkknNPpMBXuDH4kOk09BHYVcs2uKSVnxh4Z+Ag83oNBbkpUo/InrFWVLSVtLFQyaUxWBos1RxPma9Y5uYv9dTN5FhjOBFe6D2cSGsri9vUIfivBCF2ze4jGCeMS53cC8DobRNvBAdkKjT1xraEZSIQmemXI4GY6ISKtdlHGAXP0FIFJ4zXuBdfJ2e6zadf2mK6WiIy9tmiwF5y/w="

var clientUserName ="demo"



window.onload = function onloadOfHtml() 
				{
					
					e3ds_controller.main(e3ds_session_token,clientUserName)
					
				}



e3ds_controller.callbacks.onDataChannelOpen=function ()
{
    console.log("ob-onDataChannelOpen");
     
} 
e3ds_controller.callbacks.onDataChannelClose=function ()
{
    console.log("ob-onDataChannelClose");
     
} 

e3ds_controller.callbacks.onConfigAcquire=function ()
{
    console.log("ob-onConfigAcquire");
     
} 
e3ds_controller.callbacks.onSessionExpired=function ()
{
   self.location = "assets/pages/session-expired.htm";
     
} 

e3ds_controller.callbacks.onResponseFromUnreal=function (descriptor)
{
    console.log("ob-onResponseFromUnreal");
    console.log("UnrealResponse: "+descriptor);
	
	document.getElementById('LatencyStats').innerHTML=descriptor;
  
}


e3ds_controller.callbacks.onReceivingAppAcquiringProgress=function (percent)
{
    
    console.log("onReceivingAppAcquiringProgress: "+percent);
	
	
  
}


e3ds_controller.callbacks.onReceivingAppPreparationProgress=function (percent)
{
    
    console.log("onReceivingAppPreparationProgress: "+percent);
	
	
  
}

e3ds_controller.callbacks.onReceivingAppStartingProgress=function (percent)
{
    
    console.log("onReceivingAppStartingProgress: "+percent);
	
	
  
}

e3ds_controller.callbacks.onHtmlBind=function ()
{
    console.log("ob-onHtmlBind");
   

}




