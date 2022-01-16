const ques = document.querySelectorAll(".question-block");
// console.log("ques", ques);

ques.forEach((element) => {
  element.onclick = () => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      ques.forEach((key) => {
        key.classList.remove("active");
      });
      element.classList.add("active");
    }
  };
});

// ques.forEach((element) => {
//   element.onclick = () => {
//     element.classList.toggle("active");
//   };
// });
