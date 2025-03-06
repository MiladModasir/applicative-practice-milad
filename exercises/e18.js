/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let yearTally = data.asteroids.reduce(function(acc, val) {
    let year = val.discoveryYear;
    if (acc[year]) {
      acc[year]++;
    } else {
      acc[year] = 1;
    }
    return acc;
  }, {});
  let greatestYear = Object.keys(yearTally).reduce(function(maxYear, year) {
    return yearTally[year] > yearTally[maxYear] ? year : maxYear;
  });
  return Number(greatestYear);
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
