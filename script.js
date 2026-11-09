const courseChoices = document.querySelectorAll('input[name="course"]');
const courseSections = document.querySelectorAll("[data-course-content]");

function showSelectedCourse() {
  const selectedCourse = document.querySelector('input[name="course"]:checked')?.value;

  courseSections.forEach((section) => {
    section.hidden = section.dataset.courseContent !== selectedCourse;
  });
}

courseChoices.forEach((choice) => {
  choice.addEventListener("change", showSelectedCourse);
});

showSelectedCourse();