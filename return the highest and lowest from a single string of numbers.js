//Return the highest and lowest numbers from a string

function highAndLow(numbers) {
  //convert to array and sort
  let arr = numbers.split(" ").sort((a, b) => a - b);
  //return last and first number
  return arr[arr.length - 1] + " " + arr[0];
}