// Find all the topics and tasks which are thought in the month of October
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({
  date: { $gt: "2020-10-15", $lt: "2020-10-31" },
});

// Find all the company drives and students who are appeared for the placement.
// db.companydrives.aggregate([
//   { $group: { _id: "$mentor", count: { $sum: 1 } } },
//   { $match: { count: { $gt: 15 } } },
// ]);

// Find the number of problems solved by the user in codekata
// Find all the mentors with who has the mentee's count more than 15
db.users.aggregate([
  { $group: { _id: "$mentor", count: { $sum: 1 } } },
  { $match: { count: { $gt: 15 } } },
]);

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
