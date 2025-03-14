import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  let allPlanetsMoonsCount = data.planets
  .reduce(function(acc, val){
    
    return acc + (val.moonsCount || 0);
      
    
  },0);
  return allPlanetsMoonsCount;
  
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
