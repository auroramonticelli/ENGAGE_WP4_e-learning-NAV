const courseChoices = document.querySelectorAll('input[name="course"]');
const courseSections = document.querySelectorAll("[data-course-content]");
const welcomeView = document.querySelector("#welcome-view");
const courseMenu = document.querySelector(".course-menu");
const courseSwitcher = document.querySelector("#course-switcher");
const courseTabs = document.querySelectorAll(".course-tab");
const courseTabPanels = document.querySelectorAll(".course-tab-panel");

function showCourse(course) {
  document.body.classList.toggle("social-work-active", course === "social-work");
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

function selectCourseTab(tab) {
  courseTabs.forEach((courseTab) => {
    const isSelected = courseTab === tab;
    courseTab.setAttribute("aria-selected", String(isSelected));
    courseTab.tabIndex = isSelected ? 0 : -1;
  });

  courseTabPanels.forEach((panel) => {
    panel.hidden = panel.id !== tab.getAttribute("aria-controls");
  });
}

courseTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectCourseTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % courseTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + courseTabs.length) % courseTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = courseTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    courseTabs[nextIndex].focus();
    selectCourseTab(courseTabs[nextIndex]);
  });
});