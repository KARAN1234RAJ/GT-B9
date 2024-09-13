import React from "react";
import { students } from "../data/MOCK_DATA";
const DisplayStudents = () => {
  //   console.log(students);
  const student = students.map((student) => {
    console.log(student);
    return (
      <li  key={student.id}>

        <h2>{student.id}</h2>
        <h2>
          {student.first_name} {student.last_name}
        </h2>
        <p>{student.email}</p>
      </li>
    );
  });
  //   console.log(student);

  return (
    <div>
      <ul>{student}</ul>
    </div>
  );
};

export default DisplayStudents;
