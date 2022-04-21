import wordBank from './wordle-bank.txt';
export const BoardDefault = [
    ["T", "", "", "", "", ""],
    ["", "E", "", "", "", ""],
    ["", "", "S", "", "", ""],
    ["", "", "", "T", "", ""],
    ["", "", "", "", "!", ""],
    ["", "", "", "", "", "!"],
]

const generateWordSet = async () =>{
     let wordSet;
     await fetch(wordBank)
     .then((response) => response.text())
     .then((result) => {
         console.log(result);
     }) 
}