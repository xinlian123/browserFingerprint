;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) { module.exports = definition(); }
  else if (typeof define === 'function' && define.amd) { define(definition); }
  else { context[name] = definition(); }
})('Fingerprint', this, function () {
  'use strict';

  var Fingerprint = function () {
  };

  Fingerprint.prototype = {
    get: function(){
		
	  var pluginInfo =  JSON.stringify(this.collectBrowserPluginsInfo());
	  var res = "{\"screen\":{\"screenWidth\":"+ screen.width +",\"screenHeight\":"+screen.height+",\"screenColourDepth\":"+screen.colorDepth+"},\"timezone\":{\"timezone\":"+new Date().getTimezoneOffset()+"},\"plugins\":{\"installedPlugins\":\""+pluginInfo+"\"},\"userAgent\":\""+ navigator.userAgent +"\",\"appCodeName\":\""+navigator.appCodeName+"\",\"appVersion\":\""+navigator.appVersion+"\",\"platform\":\""+navigator.platform+"\",\"product\":\""+navigator.product+"\",\"productSub\":\""+navigator.productSub+"\",\"vendor\":\""+navigator.vendor+"\",\"language\":\""+navigator.language+"\"}";

	  res =res.replace(/"/g, "\\\"");
	  console.log(res);

      return res;
      
    },
	
    collectBrowserPluginsInfo: function () {

        if (navigator && navigator.plugins) {
            var pluginsInfo = {}, i, plugins = navigator.plugins;
            pluginsInfo.installedPlugins = "";

            for (i = 0; i < plugins.length; i++) {
                pluginsInfo.installedPlugins = pluginsInfo.installedPlugins + plugins[i].filename + ";";
            }

            return pluginsInfo;
        } else {
            console.warn("Cannot collect browser plugin information. navigator.plugins is not defined.");
            return {};
        }

    }
  };
 
  return Fingerprint;

});