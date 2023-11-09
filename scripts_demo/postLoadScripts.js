

/* 				{
					"core": 
											  {
												"domainxx": "connector_binary.eaglepixelstreaming.com",
												"domain": "connector_ms6.eagle3dstreaming.com",
												"userName": "demo",
												"appName": "ue52",
												"configurationName1": "E3DS-Iframe-Demo",
												"configurationName": "0"
												
											  },
				  
					"configurationToOverride": 
											  {
												
												"isAdminDebugging": 1
											  }
				} */

// NOTE: Probably this is more suitable for postLoadScript??? really ??? lets talk about it . give me a call
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
    //changeConfigValue("useVOIP",1)
	
	

let webrtcParamsSubmit2 = document.getElementById('webrtc-params-submit');
	if (webrtcParamsSubmit2 !== null) {
		webrtcParamsSubmit2.onclick = function (event) 
		{
			//console.log("=== Registered switchTo action, Value is: ", val);
		let descriptor = document.getElementById('webrtc-max-fps-text').value;
		/*let descriptor = {
			Teleport: val
		};*/
		//emitUIInteraction(descriptor);
		let descriptor2 = 
						{
							Teleport: document.getElementById('webrtc-max-fps-text').value
						};
		
		
		e3ds_controller.sendToUnreal(descriptor2)
		};
	}


}

window.onload = function onloadOfHtml() 
				{
					//main()
					e3ds_controller.main(e3ds_session_token,clientUserName)
					//e3ds_controller.sendToUnreal("dgdgdgd")
				}