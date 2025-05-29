const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(gifters, occassion) {
  const birthday = [];

    for(let i = 0; i < gifters.length; i++) {
        birthday.push(`Thank you, ${gifters[i]}, for the wonderful ${occassion} gift!`);
        debugger;
    }
    return birthday;
}
// writeCards(["Charlie", "Samip", "Ali"], "birthday");
// console.log(birthday);

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}