const courseChoices = document.querySelectorAll('input[name="course"]');
const courseSections = document.querySelectorAll("[data-course-content]");
const welcomeView = document.querySelector("#welcome-view");
const courseMenu = document.querySelector(".course-menu");
const courseSwitcher = document.querySelector("#course-switcher");

function showCourse(course) {
  welcomeView.hidden = Boolean(course);
  courseMenu.hidden = !course;
  courseSwitcher.value = course || "healthcare";
  courseSections.forEach((section) => {
    section.hidden = section.dataset.courseContent !== course;
  });
  courseChoices.forEach((choice) => {
    choice.checked = choice.value === course;
  });
}

courseChoices.forEach((choice) => {
  choice.addEventListener("change", () => showCourse(choice.value));
});

courseSwitcher.addEventListener("change", () => showCourse(courseSwitcher.value));