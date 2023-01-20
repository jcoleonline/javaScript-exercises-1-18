// let friends = ["ramon", "destiny", "kevin"];

// for (let i=0; i < friends.length; i++) {
//     console.log(friends[i]);
// }


// function math(x, y){
//     if(x+y>50 && x+y<=80) {
//         console.log(65)
//     }
//     else {
//         console.log(80)
//     }
// }

// math(40, 45)

// function isVowel(letter) {

//     if(letter == "a" || "e" || "i" || "o" || "u"){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// isVowel("o")

class BankAccount {
constructor(balance, accountType) {
    this.balance = balance;
    this.accountType = accountType;
}

printIntro() {
    const message = `You have ${this.balance} in your ${this.accountType}.`;
    console.log(message);
  }

deposit(amount){
    let deposit = (this.balance + amount)
    console.log(deposit)
  }


  withdraw(amount){
    let withdraw = (this.balance - amount)
    console.log(withdraw)
  }
}

const ramonBank = new BankAccount(100, 'Checking');

ramonBank.printIntro();

ramonBank.deposit(100);
ramonBank.withdraw(12);

