import emailjs from "emailjs-com";

export function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("service_z5r2796", "service_z5r2796", e.target, "user_MozzGvDaK4nAKJ4OafobB").then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}
