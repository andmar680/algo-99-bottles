function bottleSong(amountOfBeers) {
 
  if (amountOfBeers === 1) {
    return `1 bottle of beer on the wall, 1 bottle of beer.
      Take one down and pass it around, no more bottles of beer on the wall.
      No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, 99 bottles of beer on the wall.`
  } else if (amountOfBeers === 2) {
    console.log(`${amountOfBeers} bottles of beer on the wall, ${amountOfBeers} bottles of beer.
      Take one down and pass it around, ${amountOfBeers - 1} more bottle of beer on the wall.`)
      return bottleSong(amountOfBeers - 1)
  }
  
  
  else {
    console.log(`${amountOfBeers} bottles of beer on the wall, ${amountOfBeers} bottles of beer. 
    Take one down and pass it around, ${amountOfBeers - 1} bottles of beer on the wall.`)
    return bottleSong(amountOfBeers - 1)
  }
}

console.log(bottleSong(3));