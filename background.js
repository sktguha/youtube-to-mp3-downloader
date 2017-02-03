chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	   var url = "http://www.onlinevideoconverter.com/mp3-converter?url=" + tabs[0].url;
       
	   chrome.tabs.create({ url: url }, function(tab){
		    chrome.tabs.update(tabs[0].id, {selected: true});
			chrome.tabs.executeScript(
				tab.id,
				{code: sc }
			);
			/*setTimeout(function(){
				chrome.tabs.remove(tab.id, function() { });
			},12000);*/
	   });
	});
});
var sc = "setTimeout(function(){ document.getElementsByClassName('start-button')[0].click() } , 1500);";