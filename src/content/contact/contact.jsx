import Socials from "./socials.module";
import ContactForm from "./contactForm.module";

export const contactContent = [
  {
    key: "email",
    title: "Write to me",
    content: <ContactForm />,
  },
  {
    key: "socials",
    title: "Socials",
    content: <Socials />,
  },
];
