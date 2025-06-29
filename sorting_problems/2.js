// 2. Sort Courses by Rating and Popularity (include tags count)
let courses = [
  {
    title: "React",
    ratings: [4, 5, 5],
    enrolled: 2000,
    tags: ["frontend", "library"],
    createdAt: "2023-01-01",
  },
  {
    title: "Vue",
    ratings: [5, 4, 5],
    enrolled: 2000,
    tags: ["frontend"],
    createdAt: "2023-06-01",
  },
  {
    title: "Angular",
    ratings: [4, 5, 5],
    enrolled: 1500,
    tags: ["frontend", "framework", "typescript"],
    createdAt: "2022-06-01",
  },
];

// Sort by avg rating, then enrolled, then fewer tags, then latest

let average = (arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

courses.sort((a, b) => {
  // sort by avg rating desc
  let averageA = average(a.ratings);
  let averageB = average(b.ratings);

  if (averageA !== averageB) return averageB - averageA;

  // sort by enrolled count asc
  if (a.enrolled !== b.enrolled) return a.enrolled - b.enrolled;

  // sort by fewer tags (asc)
  let tagsA = a.tags.length;
  let tagsB = b.tags.length;

  if (tagsA !== tagsB) return tagsA - tagsB;

  // sort by latest (desc)
  let createdA = new Date(a.createdAt);
  let createdB = new Date(b.createdAt);

  return createdB - createdA;
});
