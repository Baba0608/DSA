// ------------  array of numbers  ------------------

let arr = [30, 10, 50, 20, 70, 80, 40, 60];
// let sortedArr = arr.sort(); // here sortedArr and arr are pointing to same object
// console.log(arr);
// console.log(sortedArr);

reverseSortedArr = arr.sort((a, b) => b - a);
// console.log(arr);
// console.log(reverseSortedArr);

// ----------------------------------------- array of strings ----------------------------------------

let strings = ["hello", "JS", "world", "PYTHON", "python", "app"];
strings.sort();
// console.log(strings); // => [ 'JS', 'PYTHON', 'app', 'hello', 'python', 'world' ]

strings.sort((a, b) => a.localeCompare(b));
// console.log(strings); // =>  [ 'app', 'hello', 'JS', 'python', 'PYTHON', 'world' ]

strings.sort((a, b) => a.length - b.length);
// console.log(strings);

function countVowels(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

strings.sort((a, b) => countVowels(a) - countVowels(b));
console.log(strings);

// ----------------------------------------- array of objects ----------------------------------------
// sort array of objects
let members = [
  { name: "ABC", age: 23 },
  { name: "XYZ", age: 21 },
  { name: "PQR", age: 27 },
  { name: "KLM", age: 24 },
  { name: "MNO", age: 27 },
];

// sort by age asc
members.sort((a, b) => a.age - b.age);
// console.log(members);

// sort by age desc
members.sort((a, b) => b.age - a.age);
// console.log(members);

// sort by age, if age is same sort by name
members.sort((a, b) => {
  // if age is same
  if (a.age === b.age) return a.name.localeCompare(b.name);

  return a.age - b.age;
});
// console.log(members);

// -------------

let students = [
  {
    name: "Alice",
    scores: [85, 90, 92],
    lastSubmittedAt: "2024-11-10T14:23:00Z",
  },
  {
    name: "Bob",
    scores: [85, 90, 92],
    lastSubmittedAt: "2024-11-11T09:15:00Z",
  },
  {
    name: "Charlie",
    scores: [90, 85, 90],
    lastSubmittedAt: "2024-11-11T09:15:00Z",
  },
  {
    name: "David",
    scores: [90, 85, 90],
    lastSubmittedAt: "2024-11-11T09:15:00Z",
  },
  {
    name: "Eve",
    scores: [90, 85, 90],
    lastSubmittedAt: "2024-11-12T18:30:00Z",
  },
];

// Sort students by average score in descending order.
// If average scores are equal, sort by most recent lastSubmittedAt.
// If both are equal, sort alphabetically by name.

function average(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

let studentsCopy = students.map((student) => {
  return { ...student, avg: average(student.scores) };
});

studentsCopy.sort((a, b) => {
  // sort based on average of scores desc

  if (a.avg !== b.avg) return b.avg - a.avg;

  // sort based on time desc
  let submittedA = new Date(a.lastSubmittedAt);
  let submittedB = new Date(b.lastSubmittedAt);

  if (submittedA !== submittedB) return submittedB - submittedA;

  // sort by name asc
  return a.name.localeCompare(b.name);
});

console.log(studentsCopy);
