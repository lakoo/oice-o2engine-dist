"use strict";Tag.actions.ns_checklogin=new TagAction({rules:{storage:{type:"STRING"},target:{type:"STRING"}},action:function(e){var t=this;return setTimeout(function(){Renderer.askForLogin().fail(function(){if(e.storage||e.target){var t=new Tag("jump",{storage:e.storage,target:e.target});currentConductor.queue.push(t)}}).always(function(){t.done()})}),1}}),function(){function e(){$(conductor).on("ran",function(e,n){0!=n&&(Date.now()-o>a?(t(),o=Date.now()):r||(r=setTimeout(function(){t(),r=null,o=Date.now()},o+a-Date.now())))})}function t(){i||$.post(o2.serverStat.saveServer+"/api/1.2/skey/check.php",{uid:o2.serverStat.uid,novel:config.gameID,key:o2.serverStat.skey},function(e){if("string"==typeof e&&(e=JSON.parse(e)),"ok"!=e.result){i=!0,$("body").append($("<div />").addClass("black-overlay").css({position:"absolute",width:"100%",height:"100%",cursor:"pointer",background:"rgba(0,0,0,0.7)"}).append($("<div />").html("別の場所でこのゲームを起動したためゲームを終了しました。<BR>クリックすると再読み込みします。").css({width:"300px",margin:"0 auto",background:"rgba(0,0,0,0.7)",color:"white",borderRadius:"5px",padding:"10px",fontSize:"18px",fontFamily:"'Myriad Pro', Arial, sans-serif"})).click(function(){location.reload()}));var t=new Tag("s");currentConductor.queue.push(t)}})}if(o2.serverStat.mode==o2.SERVER_MODE_O2SERVER){window.ns_assist_init||(window.ns_assist_init=function(e,t){var n=$("meta[name=o2engine_gameID]").attr("content"),o=$("meta[name=o2engine_userServer]").attr("content")||"http://novelsphere.jp";n&&(config.gameID=n),o&&(o2.serverStat.userServer=o),config.gameID?e.src=o2.serverStat.userServer+"/js?id="+config.gameID:e.src=o2.serverStat.userServer+"/js",t()});var n=document.createElement("script");n.onload=function(){o2.serverStat.skey?(e(),$(o2).trigger("systeminit.loggedin")):$(o2).on("loggedin",function(){e()})},window.ns_assist_init(n,function(){document.getElementsByTagName("head").item(0).appendChild(n)});var o=0,r=null,a=1e4,i=!1}}();