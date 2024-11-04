
  

//    displayNumber();	
   
   //  NEED TO REPAIR
   var i = 0, j = 0, k = 0;
   
   function counter() {
      if (i <= 200) {
         document.getElementById("projects").innerHTML = i;
         i++; 
      }
      
      if (j <= 150) {
         document.getElementById("customers").innerHTML = j;
         j++;
      }
      
        if (k <= 7) {
           document.getElementById("countries").innerHTML = k;
           k++;
         }
         clearInterval();
         
      }
      
      
      window.addEventListener("scroll",function(){
         const happyClient=this.document.getElementById("happy-client");
         const rect=happyClient.getBoundingClientRect()
         if (rect.top>= 0 && rect.bottom<=this.window.innerHeight) {
            this.setInterval(counter, 10);
            this.window.removeEventListener("scroll",arguments.callee);
            
         }
      })
      
      
      
      
      const web_app = document.getElementById("sample_webApp");
      const mob_app = document.getElementById("sample_mobApp");
      
      function webtogle()
      {

         web_app.style.display="flex"
         mob_app.style.display = "none";
      }
      
webtogle();

function mobtogle()
{
   web_app.style.display = "none";
   mob_app.style.display = "flex";
   
}




