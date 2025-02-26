import { countWords, reverseString, countCharacters, reverseSentence } from "./stringUtils";
import fs from "fs";
import path, { dirname } from "path";

const sentence: string = "It's important to learn Node.js because it's cool to run JavaScript code outside of a browser"

fs.writeFileSync("reversed.txt", reverseSentence(sentence));

const filepath: string = path.join(__dirname, "reversed.txt");

console.log (filepath);