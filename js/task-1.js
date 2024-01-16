function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} drids worth ${
    quantity * pricePerDroid
} credits!` ;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const age = 18;
// if (age < 18) {
//     console.log("you are young!");
// } else {
//     console.log ("welcome!");
// }

// const c = 19;
// const v = 100;
// const biggerNumber = c > v ? c : v;

// console.log(biggerNumber); 


// const age = '17';

// switch (age) {
//   case '17':
//     console.log('you are young');
//     break;
//   case '18':
//     console.log('welcome to our store');
//     break;
//   case '19':
//     console.log('price for you');
//     break;
//   default:
//     console.log('sorry');
// }



// const day = 1;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }




// let str = "abcde";
// console.log (str[0]);
// console.log(str[1]);
// console.log(str[str.length - 1]);



// let num = 1;
// num += 12;
// console.log(num);
// num -= 14;
// console.log(num);
// num *= 5;
// num /= 7;
// num ++ ;
// num -- ;
// console.log(num);


// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';
// const text = "Hello, my name is " + name + ", I'm " + age + " years old and I like " + hobby;
// console.log(text);
// const text2 = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// console.log(text2);



// const str2 = "string not starting with capital";
// const result = str2[0].toUpperCase();
// console.log(result + str2.slice(1));



// const a = 17;
// console.log( a > 0 && a < 100);



// const isBlocked = true;
// const canChat = !isBlocked; 

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// let count = 0;

// while (count < 5) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }



// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 0);


// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
//   }


// for ( let a = 0; a <= 10; a ++) {
//     console.log (a);
// }


