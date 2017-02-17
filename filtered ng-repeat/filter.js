var numberArray=[1,2,3,4,5,6,7,8,9,10];
console.log("Number array: ",numberArray);
function above5filter(value){
  return value>5;
}
var filterNumberedArray=numberArray.filter(above5filter);

console.log("Filtered Numbered Array: ",filterNumberedArray);

var shoppingList=
["Milk","Donuts","Cookies","Chocolate",
"Peanut Butter","Pepto Bismol","Pepto Bismol(Chocolate Flavour)",
"Pepto Bismol (Cookie Flavor)"];
 console.log("Shopping List: ",shoppingList);

var searchValue="Bismol";
function searchFilter(value){
  return value.indexOf(searchValue)!=-1;
}

var searchedShoppingList=shoppingList.filter(searchFilter);
console.log("Searched Shopping List: ",searchedShoppingList);
