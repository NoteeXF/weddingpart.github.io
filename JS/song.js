
            var isYT = false;
			jQuery( "#wdp-button-wrapper" ).on( "click", "button", function() {
				if(document.body.contains(document.getElementById("song"))) {
					document.getElementById("song").play();
					isYT = false;
				} else {
					isYT = true;
					player.playVideo();
				}
                
            });
        