#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 10000;
// console.log(myBalance);
let myPinCode: number = 67483;

const myAccount = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your Pin code ",
  },
]);

if (myAccount.pin === myPinCode) {
  console.log(`You entered correct Pin code `);

  let accountChecking = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select one Option ",
      type: "list",
      choices: ["Check Account Balance", "Withdraw"],
    },
  ]);

  if (accountChecking.operation === "Check Account Balance") {
    console.log(`Your Balance is ${myBalance}`);
  } else if (accountChecking.operation === "Withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "Amount",
        type: "list",
        message: "withdraw Amount ",
        choices:["Select Amount","Type Amount"]
      },
    ]);

    if(amount.Amount === "Select Amount"){
      let selectAmount = await inquirer.prompt([{
        name:"select",
        type:"list",
        message:"Select Amount for withdraw ",
        choices:[500,1000,2000,5000]

      }])

      if(selectAmount.select === 500){
        console.log(` your remaining balance is ${myBalance-500}`);
        
      }
      else if(selectAmount.select===1000){
        console.log(console.log(` your remaining balance is ${myBalance-1000}`))
        
      }
      else if( selectAmount.select === 2000){
        console.log(console.log(` your remaining balance is ${myBalance-2000}`));
        
      }
      else {
        console.log(console.log(` your remaining balance is ${myBalance-5000}`));
        
      }
    }

    else if( amount.Amount === "Type Amount" ){
      let typeAmount = await inquirer.prompt([{
        name:"type",
        type:"number",
        message:"Enter your Amount "
      }])


      
          if(typeAmount.type <= 10000){
      
              console.log(` Your remaining Amount is ${myBalance - typeAmount.type}  `);
          }
          else{
              console.log("your entered amount is not in your account balance");
              
          }
    }

  }
} else {
  console.log("you enter the wrong pin code!Please enter the valid pin code ");
}
