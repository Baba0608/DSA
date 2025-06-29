// 1. Sort Employees by Weighted Performance (with tie-breaker on number of projects)
let employees = [
  {
    name: "Alice",
    projects: [
      { score: 80, weight: 0.6 },
      { score: 90, weight: 0.4 },
    ],
    joinedAt: "2020-01-01",
  },
  {
    name: "Bob",
    projects: [
      { score: 85, weight: 0.5 },
      { score: 85, weight: 0.5 },
    ],
    joinedAt: "2019-01-01",
  },
  {
    name: "Charlie",
    projects: [{ score: 90, weight: 1.0 }],
    joinedAt: "2021-01-01",
  },
];

// Sort by weighted average, then fewer projects, then joined earlier
// weighted average = (80 * 0.6 + 90 * 0.4) / 0.6 + 0.4
// = (48 + 36) / 1
// = 84

function weightedAvg(projects) {
  let totalWeight = 0,
    totalScore = 0;
  for (const p of projects) {
    totalScore += p.score * p.weight;
    totalWeight += p.weight;
  }
  return totalWeight === 0 ? 0 : totalScore / totalWeight;
}

employees.sort((a, b) => {
  // sort by weightedAvg desc
  let weightedAvgA = weightedAvg(a.projects);
  let weightedAvgB = weightedAvg(b.projects);

  if (weightedAvgA != weightedAvgB) {
    return weightedAvgB - weightedAvgA;
  }

  // sort by projects asc
  let projectsCountA = a.projects.length;
  let projectsCountB = b.projects.length;

  if (projectsCountA != projectsCountB) {
    return projectsCountA - projectsCountB;
  }

  // joining date asc

  let joinedAtA = new Date(a.joinedAt);
  let joinedAtB = new Date(b.joinedAt);

  return joinedAtA - joinedAtB;
});

console.log(employees);
