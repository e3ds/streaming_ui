var e3ds_session_token =
"80071715014876916995841757326274167/U2FsdGVkX19EDar/u35yBouY/5sWnSc6BygS+glQWlU7PM7vVtXLstXBivoY/gmVMDIDy3zUmiAml7CNeV0HnyFd+hO0VLQ/wLAPHpHGkGti3V0JQ0JfzwALpMwIGoSh880Z+rb6LYEdjLLjdZMA1HmRYuXoFXrLLKd/OCYQ38xaWwtlCzcb0z0wMfAwE+Uo+3QHbo0MBNAy5Wf7kR7Xp7ejuuyGsBH4bujxPqF2KFe+dsnYBRTBcO66O6rKxTmlM6zqjO6PpWn2pqmoC/qBZS+vlbs4VhmW+tIIGre/4p8="
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




