// Insert Student
db.users.insertMany([
  {
    name: "Harry",
    email: "harry@mail.com",
    mentor: "dumbledore",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Hermione",
    email: "hermione@mail.com",
    mentor: "dumbledore",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Ron",
    email: "ron@mail.com",
    mentor: "dumbledore",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Neville",
    email: "neville@mail.com",
    mentor: "McGonagall",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Luna",
    email: "luna@mail.com",
    mentor: "McGonagall",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "George",
    email: "george@mail.com",
    mentor: "McGonagall",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Fred",
    email: "fred@mail.com",
    mentor: "McGonagall",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
  {
    name: "Dean",
    email: "dean@mail.com",
    mentor: "McGonagall",
    tasks: [
      { taskid: 1, submitiondate: "2020-10-12" },
      { taskid: 2, submitiondate: "2020-10-12" },
      { taskid: 3, submitiondate: "2020-10-13" },
      { taskid: 4, submitiondate: "2020-10-13" },
      { taskid: 5, submitiondate: "2020-10-15" },
    ],
  },
]);

// Insert Company Drive data
db.companydrives.insertMany([
  { date: "2020-10-12", company: "Google" },
  { date: "2020-10-15", company: "Amazon" },
  { date: "2020-10-18", company: "Infosys" },
  { date: "2020-10-21", company: "Cognizant" },
  { date: "2020-10-25", company: "TCS" },
  { date: "2020-10-15", company: "TechM" },
]);

// Insert Topic data
db.topic.insertMany([
  { topicid: 1, topic: "HTML/CSS", topicdte: "2020-09-12" },
  { topicid: 2, topic: "Javascript", topicdte: "2020-10-12" },
  { topicid: 3, topic: "ReactJS", topicdte: "2020-10-15" },
  { topicid: 4, topic: "NodeJS", topicdte: "2020-10-20" },
  { topicid: 5, topic: "Python", topicdte: "2020-11-12" },
  { topicid: 6, topic: "Python", topicdte: "2020-12-12" },
]);

// Find all the topics and tasks which are thought in the month of October
db.users.aggregate([
  {
    $match: {
      topicdte: {
        $exists: true,
      },
    },
  },
  {
    $project: {
      topic: 1,
      date: {
        $dateFromString: {
          dateString: "$topicdte",
          format: "%Y-%m-%d",
        },
      },
    },
  },
  {
    $project: {
      topic: 1,
      month: {
        $month: "$date",
      },
    },
  },
  {
    $match: {
      month: 10,
    },
  },
]);

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({
  date: { $gt: "2020-10-15", $lt: "2020-10-31" },
});

// Find all the company drives and students who are appeared for the placement.

// Find the number of problems solved by the user in codekata
db.users.aggregate([
  {
    $project: {
      name: 1,
      noOfTasks: { $size: "$tasks" },
    },
  },
]);

// Find all the mentors with who has the mentee's count more than 15
db.users.aggregate([
  { $group: { _id: "$mentor", count: { $sum: 1 } } },
  { $match: { count: { $gt: 15 } } },
]);

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
