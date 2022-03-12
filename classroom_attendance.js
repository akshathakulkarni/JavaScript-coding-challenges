function getStudents(classroom) {
  const {hasTeachingAssistant, classList} = classroom;
  let teacher, assistant, students;
  if (hasTeachingAssistant === true) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

classroom = {
  hasTeachingAssistant : false,
  classList : ["Teacher", "TeachingAssistant", "Student1", "Student2"]
}

console.log(getStudents(classroom));