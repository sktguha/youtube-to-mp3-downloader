chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	   var url = "http://en.savefrom.net/#url=" + tabs[0].url;
       
	   chrome.tabs.create({ url: url }, function(tab){
		    //chrome.tabs.update(tabs[0].id, {selected: true});
			chrome.tabs.executeScript(
				tab.id,
				{code: sc }
			);
			setTimeout(function(){
				chrome.tabs.remove(tab.id, function() { });
			},7000);
	   });
	});
});
var sc = "var id = setInterval(function(){ var el = document.querySelectorAll('[data-type=\"Audio MP4\"]')[0]; if(el){ el.click(); clearInterval(id); }}, 200); chr";