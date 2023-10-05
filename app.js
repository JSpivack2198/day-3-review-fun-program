//Sort Method
function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  })
    // Only change code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  // sorted array with no mutate
  const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

nonMutatingSort(globalArray);

//splitting a string into an array
function splitify(str) {
    // Only change code below this line
  return str.split(/\W/);
  
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");

  //Combine using join method
  function sentensify(str) {
    // Only change code below this line
  return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");

  //URL Slug
  // Only change code below this line
function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
    }
    // Only change code above this line
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

    //Every method
    function checkPositive(arr) {
        // Only change code below this line
      return arr.every(function(value) {
        return value > 0;
      })
      
        // Only change code above this line
      }
      
      checkPositive([1, 2, 3, -4, 5]);

      //Some Method
      function checkPositive(arr) {
        // Only change code below this line
      return arr.some(elem => elem > 0);
      
        // Only change code above this line
      }
      
      checkPositive([1, 2, 3, -4, 5]);

      //Curry
      function add(x) {
        // Only change code below this line
      return function(y) {
          return function(z) {
            return x + y + z;
          };
        };
      
        // Only change code above this line
      }
      
      add(10)(20)(30);