
    window.onscroll = function() {myFunction()};
    
    function myFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop >400) {
            document.getElementById("scroller").style.background='rgba(0, 0, 0,0.7)'; 
            
          } else {
            
            document.getElementById("scroller").style.background='#ffffff11';
          }
    }

 