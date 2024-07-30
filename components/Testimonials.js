import React, { useState } from 'react';
import styles from '../styles/Testimonials.module.css';
import TestimonialCard from '../components/TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: "Jack Dean",
    position: "CEO of Tech Corp",
    testimonial: "This portfolio website is incredibly professional and has helped me showcase my work effectively. Highly recommended!"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Owner of Gourmet Diner",
    testimonial: "The restaurant website has boosted our online presence and made reservations a breeze for our customers. Fantastic work!"
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Manager at BuildIt Construction",
    testimonial: "Our new website has been a game-changer for our business. The project galleries and client testimonials have really helped attract new clients."
  }
];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [testimonial, setTestimonial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { id: testimonials.length + 1, name, position, testimonial };
    setTestimonials([...testimonials, newTestimonial]);
    setName('');
    setPosition('');
    setTestimonial('');
  };

  return (
    <div className={styles.testimonials}>
      <h1 className={styles.title}>Testimonials</h1>
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add a Testimonial</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="testimonial">Testimonial:</label>
          <textarea
            id="testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default Testimonials;
