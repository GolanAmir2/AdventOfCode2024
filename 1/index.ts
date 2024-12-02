import * as fs from "fs";

function partOne() {
  function parseAndCalculate(filePath: string): number {
    // Read the file
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Split the file content into lines and process
    const lines = fileContent.trim().split("\n");
    const array1: number[] = [];
    const array2: number[] = [];

    lines.forEach((line) => {
      const [num1, num2] = line.trim().split(/\s+/).map(Number);
      array1.push(num1);
      array2.push(num2);
    });

    // Sort both arrays
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    // Calculate the sum of absolute differences
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
      sum += Math.abs(array1[i] - array2[i]);
    }

    return sum;
  }

  // Provide the path to your input.txt file
  const filePath = "./input.txt";
  const result = parseAndCalculate(filePath);

  console.log("Sum of absolute differences:", result);
}

function partTwo() {
  // Read the file
  const fileContent = fs.readFileSync("./input.txt", "utf8");

  // Split the file content into lines and process
  const lines = fileContent.trim().split("\n");
  const array1: number[] = [];
  const array2: number[] = [];

  lines.forEach((line) => {
    const [num1, num2] = line.trim().split(/\s+/).map(Number);
    array1.push(num1);
    array2.push(num2);
  });

  const occurrencesInArray1: Record<number, number> = {};
  const occurrencesInArray2: Record<number, number> = {};

  // Count occurrences in array1
  array1.forEach((num) => {
    occurrencesInArray1[num] = (occurrencesInArray1[num] || 0) + 1;
  });

  // Count occurrences in array2
  array2.forEach((num) => {
    occurrencesInArray2[num] = (occurrencesInArray2[num] || 0) + 1;
  });

  let sum = 0;

  // Process array1 numbers and multiply as per instructions
  const result: number[] = array1.map((num) => {
    const countInArray2 = occurrencesInArray2[num] || 0;
    sum += num * countInArray2 * occurrencesInArray1[num];
    return 0;
  });

  console.log(sum);
}

partTwo();
