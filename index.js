const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
//destructively add Ralph
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

//destructively prepend Bob

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

//destructively remove last cat

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

//destructively remove first cat

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

//nondestructively append cat 

function appendCat(name) {
   let appendCat = [...cats, "Broom"];
   return appendCat
}

//nondestructively prepend cat 

function prependCat(name) {
    let prependCat = ["Arnold", ...cats];
    return prependCat
 }

 //nondestructively remove last cat

 function removeLastCat(name) {
    let removeLastCat = cats.slice(0, cats.length - 1)
    return removeLastCat
 }

 //nondestructively remove first cat

 function removeFirstCat(name) {
    let removeFirstCat = cats.slice(1)
    return removeFirstCat
 }