 //boat reservation submit
 document
  .getElementById("booking-form1")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const form = this;      // ← save a reference to the form

    emailjs
      .sendForm("service_l1v9cqh", "template_i8wc4y4", form)
      .then(
        function (response) {
          alert("Reservation sent successfully!");
          form.reset();    // ← clear all inputs & textareas
        },
        function (error) {
          alert("FAILED to send reservation: " + error.text);
        }
      );
});
  
//parking reservation submit
document
  .getElementById("booking-form2")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const form = this;      // ← save a reference to the form

    emailjs
      .sendForm("service_l1v9cqh", "template_fkpsaql", form)
      .then(
        function (response) {
          alert("Reservation sent successfully!");
          form.reset();    // ← clear all inputs & textareas
        },
        function (error) {
          alert("FAILED to send reservation: " + error.text);
        }
      );
  });



const waBtn = document.querySelector('.whatsapp-button');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      waBtn.style.opacity = '1';
    } else {
      waBtn.style.opacity = '0';
    }
  });


