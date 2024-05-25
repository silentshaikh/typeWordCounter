#! /usr/bin/env node
import inquirer from 'inquirer';
let countAns = await inquirer.prompt([
    { name: "word", type: "input", message: "Enter your Words" },
]);
//for input is only fill on spaces
let regEx = /^\s*$/;
if (countAns.word === "" || regEx.test(countAns.word)) {
    console.log('Please Enter your Word');
}
else {
    // console.log(countAns)
    let wordConvrt = countAns.word.trim().split(/\s+/);
    console.log(`The Total Words is ${wordConvrt.length}`);
}
