import * as fs from "fs";

function partOne() {
  function isArrayAscending(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function isArrayDescending(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function adjacentDiffer(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);
      if (diff < 1 || diff > 3) {
        return false;
      }
    }
    return true;
  }

  // Provide the path to your input.txt file
  const filePath = "./input.txt";
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.trim().split("\n");
  let result: number = 0;

  lines.forEach((line) => {
    const lineAsArray = line.trim().split(/\s+/).map(Number);
    if (
      (isArrayAscending(lineAsArray) || isArrayDescending(lineAsArray)) &&
      adjacentDiffer(lineAsArray)
    ) {
      result += 1;
    }
  });

  console.log("nubmer of safe reports:", result);
}

function partTwo() {
  function adjacentDiffer(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);
      if (diff < 1 || diff > 3) {
        return false;
      }
    }
    return true;
  }
  function isArrayAscending(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function isArrayDescending(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // Provide the path to your input.txt file
  const filePath = "./input.txt";
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.trim().split("\n");
  let result: number = 0;

  function isSafe(arr: number[]) {
    return (
      (isArrayAscending(arr) || isArrayDescending(arr)) && adjacentDiffer(arr)
    );
  }

  for (const line in lines) {
    const lineAsArray = lines[line].split(" ").map(Number);

    if (isSafe(lineAsArray)) {
      result += 1;
    } else {
      for (let i = 0; i < lineAsArray.length; i++) {
        const newArray = [
          ...lineAsArray.slice(0, i),
          ...lineAsArray.slice(i + 1),
        ];
        const asc = isSafe(newArray);
        const desc = isSafe(newArray);
        if (asc || desc) {
          result += 1;
          break;
        }
      }
    }
  }

  console.log("nubmer of safe reports:", result);
}

partTwo();
