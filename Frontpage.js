var main= function() {

	var j= 0;
	

$('.Home').click(function(){

	$('.Home').toggle(); 

	if (j==1){
			$('.Nav2').toggle(); 
			$('.LinkClick').addClass("About2"); 
			$('.About2').removeClass("LinkClick"); 
			$('.Bio').fadeOut(250); 
			$('.Photo').fadeOut(250);
			
	}

	if (j==2){
			$('.Nav2').toggle(); 
			$('.LinkClick').addClass("Resume2"); 
			$('.Resume2').removeClass("LinkClick"); 
				$('.ResumePDF').fadeOut(); 
				$('.ResumeDownload').fadeOut(); 
	}

	if (j==3){
			$('.LinkClick').addClass("Projects2"); 
			$('.Projects2').removeClass("LinkClick"); 
			$('.Nav2').toggle(); 
			$('.Project1').toggle(); 
			$('.Project2').toggle();	
			}


			$('.NavName').animate({'margin-left': '-2000px'}, 900); 
			$('.Menu').animate({'margin-left': '-10.7em'}, 900); 
			$('.Nav').animate({'margin-left': '-8.9em'}, 900); 

}); 



$('.Resume').click(function(){
	console.log("clicked Resume", $(".Nav2"));
	j=2; 


	$('.NavName').text("Gregory Adler"); 
	$('.NavName').animate({'font-size': '54px'}, 0); 
	$('.NavName').animate({'width': '10em'}, 0); 
	$('.NavName').animate({'margin-top': '.5em'}, 0); 

	$('.Menu').animate({'margin-left': '-2000px'}, 800);  
	$('.Nav').animate({'margin-left': '-2000px'}, 800);

	$('.NavName').animate({'left': '42.5%'}, 0);  
	$('.NavName').animate({'margin-left': '-1.7em'}, 900, function() {
			$('.ResumePDF').fadeIn(); 
			$('.ResumeDownload').fadeIn(); 
			$('.Resume2').addClass("LinkClick"); 
			$('.Home').animate({'margin-top': '0em'}, 0);
			$('.Home').toggle();
			$('.Nav2').toggle(); 
			
			

		}); 
	}); 	


$('.About').click(function(){
	j=1; 

	$('.NavName').text("Gregory Adler"); 
	$('.NavName').animate({'font-size': '54px'}, 0); 
	$('.NavName').animate({'width': '10em'}, 0); 
	$('.NavName').animate({'margin-top': '.5em'}, 0); 

	$('.Menu').animate({'margin-left': '-2000px'}, 800);  
	$('.Nav').animate({'margin-left': '-2000px'}, 800);

	$('.NavName').animate({'left': '42.5%'}, 0);  
	$('.NavName').animate({'margin-left': '-1.7em'}, 900, function() {

				$('.About2').addClass("LinkClick"); 



				
				$('.Nav2').toggle(); 

				$('.Bio').fadeIn(250); 
				$('.Photo').fadeIn(250);
				$('.Home').animate({'margin-top': '0em'}, 0);
				$('.Home').toggle();

		}); 
	}); 	


$('.Projects').click(function(){
	j=3; 


	$('.NavName').text("Gregory Adler"); 
	$('.NavName').animate({'font-size': '54px'}, 0); 
	$('.NavName').animate({'width': '10em'}, 0); 
	$('.NavName').animate({'margin-top': '.5em'}, 0); 

	$('.Menu').animate({'margin-left': '-2000px'}, 800);  
	$('.Nav').animate({'margin-left': '-2000px'}, 800);

	$('.NavName').animate({'left': '42.5%'}, 0);  
	$('.NavName').animate({'margin-left': '-1.7em'}, 900, function() {
		$('.Projects2').addClass("LinkClick"); 
		$('.About2').show(); 
		$('.Resume2').show(); 
		$('.Nav2').toggle(); 
		$('.Home').animate({'margin-top': '0em'}, 0);
		$('.Home').toggle();
		$('.Project1').fadeIn(500); 
		$('.Project2').fadeIn(500);
		});
	}); 	


$('.Resume2').click(function(){

	if (j==1){
			$('.About2').removeClass("LinkClick"); 
			$('.Resume2').addClass("LinkClick"); 
			$('.Bio').fadeOut(500);
			$('.Photo').fadeOut(500);
		$('.NavName').animate({'font-size': '54px'}, 500, function() { 
			$('.ResumePDF').toggle(); 
			$('.ResumeDownload').toggle(); 
			

			});

	}

	else if (j==3){
			$('.Projects2').removeClass("LinkClick"); 
			$('.Resume2').addClass("LinkClick"); 
			$('.Project1').fadeOut(500); 
			$('.Project2').fadeOut(500);
			$('.NavName').animate({'font-size': '54px'}, 500, function() { 
				$('.ResumePDF').toggle(); 
				$('.ResumeDownload').toggle(); 


				});

		}

		j=2; 
		}); 	


$('.Projects2').click(function(){
	
	if (j==1){
		$('.About2').removeClass("LinkClick"); 
		$('.Projects2').addClass("LinkClick"); 
		$('.Bio').fadeOut(500);
		$('.Photo').fadeOut(500);
		$('.NavName').animate({'font-size': '54px'}, 500, function() { 
			$('.Home').animate({'margin-top': '0em'}, 0);
			$('.Project1').fadeIn(500); 
			$('.Project2').fadeIn(500);

			});

	}

	else if (j==2){
		$('.Resume2').removeClass("LinkClick"); 
		$('.Projects2').addClass("LinkClick"); 
		$('.ResumePDF').fadeOut(); 
		$('.ResumeDownload').fadeOut(); 
		$('.NavName').animate({'font-size': '54px'}, 500, function() { 
			$('.Home').animate({'margin-top': '0em'}, 0);
			$('.Project1').fadeIn(500); 
			$('.Project2').fadeIn(500);

		}); 
	}

		j=3; 	
	
	}); 


$('.About2').click(function(){
	

	if (j==2){
		$('.Resume2').removeClass("LinkClick"); 
		$('.About2').addClass("LinkClick"); 
		$('.ResumePDF').fadeOut(); 
		$('.ResumeDownload').fadeOut(); 
		$('.NavName').animate({'font-size': '54px'}, 500, function() { 
			$('.Home').animate({'margin-top': '0em'}, 0);
			$('.Bio').fadeIn(500); 
			$('.Photo').fadeIn(500);
		}); 
	}

	else if (j==3){
			$('.Projects2').removeClass("LinkClick"); 
			$('.About2').addClass("LinkClick"); 
			$('.Project1').fadeOut(500); 
			$('.Project2').fadeOut(500);
			$('.NavName').animate({'font-size': '54px'}, 500, function() { 
				$('.Home').animate({'margin-top': '0em'}, 0);
				$('.Bio').fadeIn(500); 
				$('.Photo').fadeIn(500);
			}); 

	}	

		j=1;  
	}); 

}


$(document).ready(main); 