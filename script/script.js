$( document ).ready(function() {
   
  $('#rainboww').click( 
    function(
    ){
      //code goes here
      console.log("position: ", $('#dogeMemePic').position() );
    }
  ); 
  
 
  $( "#rainboww" ).draggable({
      stop: function() {
        if(  $('#rainboww').position().left > 500){
        //  alert("you haswss wowzazzz ");
          
           $('#rainboww').attr('src','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff8%2Fde%2Fef%2Ff8deef878867dee11b7a15a0a55765b4.jpg&f=1&nofb=1&ipt=c9afc6feaa1e6f9483bb092ecc82257bd99612f623e1b1ef355cb04a4b31fd50&ipo=images');
    }
     
        else if( $('#rainboww').position().left > 300 && $('#rainboww').position().left < 500){
          alert("keep going  ");
        }    
        else {
          alert("get going baby ");
        }
    }
    
    
  
    
    
  });
  
  
  
  
  
});