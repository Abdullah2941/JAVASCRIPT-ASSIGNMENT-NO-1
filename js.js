// function runAllTasks() {

//     // Task 1: Store product details
//     const details = { itemName: "Laptop", itemPrice: 999.99, isAvailable: true };
//     console.log("Task1:", Object.values(details).join(" | "));

//     // Task 2: Math operations using functions
//     const getRemainder = (a, b) => a % b;
//     const getPower = (n) => n ** 2;
//     let val1 = 8; val1++;
//     let val2 = 15; val2 = val2 - 2;
//     console.log("Task2:", getRemainder(27, 4), getPower(12), val1, val2);

//     // Task 3: Name formatting - different approach
//     const first = "alex", last = "SMITH";
//     const full = `${first} ${last}`.toLowerCase();
//     const properCase = full.replace(full[0], full[0].toUpperCase());
//     console.log("Task3:", properCase, "Size:", `${first} ${last}`.length);

//     // Task 4: Temperature - switch case use karo if-else ki jagah
//     const temp = 25;
//     let weather;
//     switch (true) {
//         case (temp > 30): weather = "Hot Day"; break;
//         case (temp >= 20): weather = "Pleasant Day"; break;
//         default: weather = "Cold Day";
//     }
//     console.log("Task4:", weather);

//     // Task 5: Boolean logic
//     const results = [
//         15 === "15",
//         20 > 15 && 20 < 25,
//         10 != 10 || 5 > 3
//     ];
//     console.log("Task5:", results);

//     // Task 6: Array with different methods
//     const palette = ["red", "green", "blue"];
//     palette[palette.length] = "yellow"; // push ki jagah
//     palette.splice(0, 1); // shift ki jagah
//     palette.splice(1, 0, "purple");
//     console.log("Task6:", palette, palette.length);

//     // Task 7: Fruits array - ek hi splice mein kaam
//     let food = ["apple", "banana", "cherry", "date", "elderberry"];
//     food.splice(2, 2, "dragonfruit"); // cherry aur date dono hata ke dragonfruit
//     const extracted = food.slice(1, 4); // splice ki jagah slice use karo
//     console.log("Task7:", extracted);

//     // Task 8: While loop use karo for ki jagah
//     let sum = 0, i = 1;
//     while (i <= 10) {
//         if (i === 8) break;
//         if (i !== 5) sum += i;
//         i++;
//     }
//     console.log("Task8 Sum:", sum);

//     // Task 9: Pattern with repeat method
//     console.log("Task9:");
//     for (let n = 1; n < 6; n++) {
//         console.log("*".repeat(n));
//     }

//     // Task 10: String methods - different vars
//     const msg = "The quick brown fox jumps over the lazy dog";
//     const foxPos = msg.search("fox");
//     const word = msg.substring(10, 19);
//     console.log("Task10:", foxPos, word, msg.endsWith("dog"), msg[10]);

//     // Task 11: Replace using regex
//     let str = "I love JavaScript and JavaScript is awesome";
//     console.log("Task11:", str.replace("JavaScript", "coding"));
//     console.log("Task11:", str.replace(/JavaScript/g, "JS"));
//     console.log("Task11:", str.replace("awesome", "AWESOME"));

//     // Task 12: Numbers - parseInt for floor
//     const number = 123.456789;
//     console.log("Task12:", number.toFixed(2), Math.round(number), parseInt(number), Math.ceil(number), number.toFixed(4));

//     // Task 13: Random - different formula
//     const r1 = Math.ceil(Math.random() * 100);
//     const r2 = +(Math.random().toFixed(3));
//     const r3 = Math.floor(Math.random() * 26 + 50);
//     console.log("Task13:", r1, r2, r3);

//     // Task 14: Conversions - unary operators
//     const s1 = +"123", s2 = +"45.67", n1 = 789 + "", b1 = !!"true";
//     console.log("Task14:", s1, typeof s1, s2, typeof s2, n1, typeof n1, b1, typeof b1);
// }

// runAllTasks();