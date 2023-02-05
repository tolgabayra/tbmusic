import fs from "fs";
import { appendFileSync } from "fs";
import path from "path";
import { parse } from 'csv-parse';


const csvFilePath = path.resolve(__dirname, '../../../music.csv');
const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'})
const headers = ['title', 'artist', 'top genre', 'year', 'bpm']

 
parse(fileContent, {
    delimiter: ',',
},(error, result) => {
    if (error) {
      console.error(error);
    }
    console.log("Result", result);
  });