let courses = [];
let gpaArr = [];
function calculationOfGradePoints(marks) {
  if (marks == 50) {
    return 2.0;
  } else if (marks == 51) {
    return 2.05;
  } else if (marks == 52) {
    return 2.1;
  } else if (marks == 53) {
    return 2.15;
  } else if (marks == 54) {
    return 2.2;
  } else if (marks == 55) {
    return 2.25;
  } else if (marks == 56) {
    return 2.3;
  } else if (marks == 57) {
    return 2.35;
  } else if (marks == 58) {
    return 2.4;
  } else if (marks == 59) {
    return 2.45;
  } else if (marks == 60) {
    return 2.5;
  } else if (marks == 61) {
    return 2.55;
  } else if (marks == 62) {
    return 2.6;
  } else if (marks == 63) {
    return 2.65;
  } else if (marks == 64) {
    return 2.7;
  } else if (marks == 65) {
    return 2.75;
  } else if (marks == 66) {
    return 2.8;
  } else if (marks == 67) {
    return 2.85;
  } else if (marks == 68) {
    return 2.9;
  } else if (marks == 69) {
    return 2.95;
  } else if (marks == 70) {
    return 3.0;
  } else if (marks == 71) {
    return 3.05;
  } else if (marks == 72) {
    return 3.1;
  } else if (marks == 73) {
    return 3.15;
  } else if (marks == 74) {
    return 3.2;
  } else if (marks == 75) {
    return 3.25;
  } else if (marks == 76) {
    return 3.3;
  } else if (marks == 77) {
    return 3.35;
  } else if (marks == 78) {
    return 3.4;
  } else if (marks == 79) {
    return 3.45;
  } else if (marks == 80) {
    return 3.5;
  } else if (marks == 81) {
    return 3.55;
  } else if (marks == 82) {
    return 3.6;
  } else if (marks == 83) {
    return 3.65;
  } else if (marks == 84) {
    return 3.7;
  } else if (marks == 85) {
    return 3.75;
  } else if (marks == 86) {
    return 3.8;
  } else if (marks == 87) {
    return 3.85;
  } else if (marks == 88) {
    return 3.9;
  } else if (marks == 89) {
    return 3.95;
  } else {
    return 4.0;
  }
}

function addCourse() {
  var semester = document.getElementById("semester-select").value;
  const courseCode = document.getElementById("course-code").value;
  const creditHours = parseInt(document.getElementById("unit-load").value);
  const marks = parseInt(
    document.getElementById("calculatedGradePoints").value
  );

  if (
    isNaN(creditHours) ||
    isNaN(marks) ||
    creditHours < 1 ||
    creditHours > 15 ||
    marks < 0 ||
    marks > 100
  ) {
    alert("Please enter valid values for Credit Hours and Marks.");
    return;
  }

  const gradePoints = calculationOfGradePoints(marks);
  courses.push({ semester,courseCode, creditHours, gradePoints });
  clearForm();
}

function calculateSemesterGpa() {
  var semester = document.getElementById("semester-select").value;
  var semResult = document.getElementById("semester-results");
  semResult.innerHTML = "";
  let totalCreditHours = 0;
  let totalGradePoints = 0;
  let totalCourses = 0;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].semester === semester) {
      const gradePoints = courses[i].gradePoints;
      const creditHours = courses[i].creditHours;
      const courseCode = courses[i].courseCode;
      totalCreditHours += creditHours;
      totalGradePoints += gradePoints * creditHours;
      totalCourses++;
    }
  }

  if (totalCreditHours === 0) {
    alert(
      "Please add courses for the selected semester before calculating GPA."
    );
    return;
  }

  var semesterGpa = totalGradePoints / totalCreditHours;
  gpaArr.push(semesterGpa.toFixed(2));

  semResult.innerHTML += `
      <p>GPA of Semester ${semester}: <span>${semesterGpa.toFixed(2)}</span></p>
      <p>Total Credit Hours Earned in Semester ${semester}: <span>${totalCreditHours}</span></p>
      <p>Total Courses studied in Semester ${semester}: <span>${totalCourses}</span></p>
    `;
}

function countGpAs() {
  return gpaArr.length;
}

function calculateCGPA() {
  let cumulativeGpa = 0;
  let totalCreditHours = 0;
  let totalCourses = 0;

  for (let i = 0; i < gpaArr.length; i++) {
    cumulativeGpa += parseFloat(gpaArr[i]);
  }

  for (let i = 0; i < courses.length; i++) {
    totalCreditHours += courses[i].creditHours;
    totalCourses++;
  }

  if (gpaArr.length === 0) {
    alert("No semesters added. Please calculate semester GPA first.");
    return;
  }

  let cumResult = cumulativeGpa / gpaArr.length;
  document.getElementById("cumulative-gpa").innerText = cumResult.toFixed(2);
  document.getElementById("total-credit-hours").innerText = totalCreditHours;
  document.getElementById("total-courses").innerText = totalCourses;
}

function clearForm() {
  document.getElementById("course-code").value = "";
  document.getElementById("unit-load").value = "";
  document.getElementById("calculatedGradePoints").value = "";
}
