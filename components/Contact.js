import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, you can console log the form data
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log('Form Data:', formDataObject);
    // You can add further logic to handle form submission (e.g., send data to server)
  };

  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.contactCard}>
        <h2 className={styles.subheading}>Rostane Fourar</h2>
        <p className={styles.text}>Email: rostane@email.com</p>
        <p className={styles.text}>Phone: +1234567890</p>
        <p className={styles.text}>Address: 123 Example Street, City, Country</p>

        <h2 className={styles.subheading}>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Your Name:</label>
            <input className={styles.input} type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Your Email:</label>
            <input className={styles.input} type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea className={styles.textarea} id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
