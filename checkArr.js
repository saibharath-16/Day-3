let fruits_array = [ 
    "mango", 
    "banana", 
    "apple", 
    "pineapple", 
    "pomegranate", 
    "orange", 
  ]; 
    
  let valueChecker = (value) => { 
    for (let i = 0; i < fruits_array.length; i++) { 
      let current_value = fruits_array[i]; 
      if (value === current_value) { 
        return value + " is present at index: " + i; 
      } 
    } 
    return value + " is not included in this array.."; 
  }; 
    
  console.log(valueChecker("apple")); 
  