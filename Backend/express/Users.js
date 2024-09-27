const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    name: "Ravi Sharma",
    age: 28,
    email: "ravi.sharma@example.com",
    address: "Delhi, India",
    phone: "9876543210",
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 25,
    email: "priya.singh@example.com",
    address: "Mumbai, India",
    phone: "9876543221",
    occupation: "Graphic Designer",
  },
  {
    id: 3,
    name: "Amit Patel",
    age: 30,
    email: "amit.patel@example.com",
    address: "Ahmedabad, India",
    phone: "9876543232",
    occupation: "Business Analyst",
  },
  {
    id: 4,
    name: "Sita Iyer",
    age: 24,
    email: "sita.iyer@example.com",
    address: "Chennai, India",
    phone: "9876543243",
    occupation: "Teacher",
  },
  {
    id: 5,
    name: "Rajesh Gupta",
    age: 32,
    email: "rajesh.gupta@example.com",
    address: "Kolkata, India",
    phone: "9876543254",
    occupation: "Marketing Manager",
  },
  {
    id: 6,
    name: "Anjali Desai",
    age: 27,
    email: "anjali.desai@example.com",
    address: "Pune, India",
    phone: "9876543265",
    occupation: "Data Scientist",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    age: 35,
    email: "vikram.joshi@example.com",
    address: "Bangalore, India",
    phone: "9876543276",
    occupation: "Project Manager",
  },
  {
    id: 8,
    name: "Sunita Mehta",
    age: 29,
    email: "sunita.mehta@example.com",
    address: "Jaipur, India",
    phone: "9876543287",
    occupation: "HR Executive",
  },
  {
    id: 9,
    name: "Manish Kumar",
    age: 26,
    email: "manish.kumar@example.com",
    address: "Lucknow, India",
    phone: "9876543298",
    occupation: "Content Writer",
  },
  {
    id: 10,
    name: "Neha Kapoor",
    age: 31,
    email: "neha.kapoor@example.com",
    address: "Delhi, India",
    phone: "9876543309",
    occupation: "Fashion Designer",
  },
  {
    id: 11,
    name: "Rahul Verma",
    age: 34,
    email: "rahul.verma@example.com",
    address: "Hyderabad, India",
    phone: "9876543310",
    occupation: "Architect",
  },
  {
    id: 12,
    name: "Kavita Nair",
    age: 28,
    email: "kavita.nair@example.com",
    address: "Kerala, India",
    phone: "9876543321",
    occupation: "Doctor",
  },
  {
    id: 13,
    name: "Suresh Reddy",
    age: 33,
    email: "suresh.reddy@example.com",
    address: "Hyderabad, India",
    phone: "9876543332",
    occupation: "Civil Engineer",
  },
  {
    id: 14,
    name: "Meera Bhatia",
    age: 22,
    email: "meera.bhatia@example.com",
    address: "Chandigarh, India",
    phone: "9876543343",
    occupation: "Journalist",
  },
  {
    id: 15,
    name: "Akash Soni",
    age: 27,
    email: "akash.soni@example.com",
    address: "Nagpur, India",
    phone: "9876543354",
    occupation: "Chartered Accountant",
  },
  {
    id: 16,
    name: "Pooja Rao",
    age: 24,
    email: "pooja.rao@example.com",
    address: "Mysore, India",
    phone: "9876543365",
    occupation: "Pharmacist",
  },
  {
    id: 17,
    name: "Gaurav Dubey",
    age: 29,
    email: "gaurav.dubey@example.com",
    address: "Bhopal, India",
    phone: "9876543376",
    occupation: "Web Developer",
  },
  {
    id: 18,
    name: "Nikita Jain",
    age: 26,
    email: "nikita.jain@example.com",
    address: "Surat, India",
    phone: "9876543387",
    occupation: "Interior Designer",
  },
  {
    id: 19,
    name: "Rohit Malhotra",
    age: 35,
    email: "rohit.malhotra@example.com",
    address: "Gurgaon, India",
    phone: "9876543398",
    occupation: "Lawyer",
  },
  {
    id: 20,
    name: "Swati Kulkarni",
    age: 32,
    email: "swati.kulkarni@example.com",
    address: "Pune, India",
    phone: "9876543409",
    occupation: "Lecturer",
  },
  {
    id: 21,
    name: "Tanushree",
    age: 24,
    email: "tanu.iyer@example.com",
    address: "Indore, India",
    phone: "15318433243",
    occupation: "Teacher",
  },
];

// getting all users

// app.get("/users", (req, res) => {
//   res.status(200);
//   res.json(users);
// });

// getting single user
app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((user) => user.id === parseInt(userId));
  console.log(user);
  res.send(user);
});

// getting data by age
app.get("/users/:userAge", (req, res) => {
  const { userAge } = req.params;
  const usersByAge = users.filter((user) => user.age === parseInt(userAge));
  res.send({
    totalUsers: usersByAge.length,
    usersByAge,
  });
  //   res.send(usersByAge);
});

// getting data by age and occupation
app.get("/users/:userAge/:userOccupation", (req, res) => {
  const { userAge, userOccupation } = req.params;
  console.log(req.params);
  const usersByAgeAndOccupation = users.filter(
    (user) =>
      user.age === parseInt(userAge) &&
      user.occupation.toLocaleLowerCase() === userOccupation.toLocaleLowerCase()
  );

  res.send({
    totalUsers: usersByAgeAndOccupation.length,
    usersByAgeAndOccupation,
  });
});

app.get("/users", (req, res) => {
  const { name, age, occupation } = req.query;

  let filteredUsers = users;

  // Filter by name if provided
  if (name) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter by age if provided
  if (age) {
    filteredUsers = filteredUsers.filter((user) => user.age === parseInt(age));
  }

  // Filter by occupation if provided
  if (occupation) {
    filteredUsers = filteredUsers.filter((user) =>
      user.occupation.toLowerCase().includes(occupation.toLowerCase())
    );
  }
  // Return filtered users or all users if no filters
  res.send(filteredUsers);
});

// POST Request
app.post('/users',(req,res)=>{
     const newUser = req.body;
     newUser.id = users.length + 1;
     users.push(newUser);
     res.status(201).send(newUser);
})
const PORT = 9500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
