// import styles from "@/app/contact/contact.module.css";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css";
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110603.16119458876!2d76.79949932159589!3d29.969404725405955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46cf85c85d3d%3A0x7f06e815caca33f4!2sKurukshetra%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703089342849!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default page;
