// Write a function bmi that calculates body mass index (bmi = weight / height2).

  // if bmi <= 18.5 return "Underweight"
  
  // if bmi <= 25.0 return "Normal"
  
  // if bmi <= 30.0 return "Overweight"
  
  // if bmi > 30 return "Obese"

  function bmi(weight, height) {
    let sum = weight /(height * height)
    if (sum <= 18.5){
      return "Underweight"
    }
    else if (sum <= 25.0){
      return "Normal"
    }
    else if (sum <=30.0){
      return "Overweight"
    }
    else{
    return "Obese"
    }
  }