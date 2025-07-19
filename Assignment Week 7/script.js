// 1. Join Array to String
const myColor = ["Red", "Green", "White", "Black"];
document.getElementById("joinOutput").textContent =
  myColor.join(",") + "\n" + myColor.toString() + "\n" + myColor.join("+");

// 2. Most Frequent Element
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequent(arr) {
  const freq = {};
  let maxFreq = 0;
  let maxElem = null;

  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
    if (freq[el] > maxFreq) {
      maxFreq = freq[el];
      maxElem = el;
    }
  }
  return `${maxElem} ( ${maxFreq} times )`;
}
document.getElementById("freqOutput").textContent = mostFrequent(arr1);

// 3. Truncate String
function truncateString(str, num) {
  return str.slice(0, num);
}
document.getElementById("truncateOutput").textContent = truncateString("Robin Singh", 4);

// 4. Capitalize Words
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
document.getElementById("capitalizeOutput").textContent = capitalizeWords("js string exercises");

// 5. arrBetween
function arrBetween(a, b, arr) {
  return arr.filter(x => x > a && x < b);
}
const testBetween = arrBetween(3, 8, [1, 5, 95, 0, 4, 7]);
document.getElementById("betweenOutput").textContent = JSON.stringify(testBetween);

// 6. findIndex
function findIndex(arr, val) {
  return arr.indexOf(val);
}
const testIndex = findIndex(["Red", "blue", "Blue", "Green"], "blue");
document.getElementById("indexOutput").textContent = testIndex;
