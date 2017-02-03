var map = {
	'm4a' : 'Audio MP4',
	'mp4' : 'MP4'
}
chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	   var url = "http://en.savefrom.net/#url=" + tabs[0].url;
       var script = sc.split('####').join(map[command]);
	   chrome.tabs.create({ url: url }, function(tab){
		    //chrome.tabs.update(tabs[0].id, {selected: true});
			chrome.tabs.executeScript(
				tab.id,
				{code: script }
			);
			setTimeout(function(){
				//chrome.tabs.remove(tab.id, function() { });
			},12000);
	   });
	});
});
var sc = "var id = setInterval(function(){ var el = document.querySelectorAll('[data-type=\"####\"]')[0]; if(el){ el.click(); clearInterval(id); }}, 200);";