// Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


function litres(time) {
    if (time !==0){
      let total = time*.5
      return Math.floor(total)
    }
    else{
      return 0;
    }
   }
   
   // 
   function litres(time) {
       return Math.floor(time * 0.5);
     }
   
   
   // 
   const litres = time => Math.floor(time * 0.5);