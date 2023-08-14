 
    var musrik=document.getElementById("song");var player,playing=!1;function onYouTubeIframeAPIReady(){player=new YT.Player('video-yt',{height:'360',width:'640',playerVars:{'autoplay':0,'rel':0,'showinfo':0,'showsearch':0,'controls':1,'loop':1,'enablejsapi':1,'playlist':'QMForPSc-Mc'},videoId:'QMForPSc-Mc',events:{'onStateChange':onPlayerStateChange}})} 
    function onPlayerStateChange(event){if(event.data==YT.PlayerState.PLAYING){musrik.pause();playing=!0}else if(event.data==YT.PlayerState.PAUSED){musrik.play();playing=!1}} 
        