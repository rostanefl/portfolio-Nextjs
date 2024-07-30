import React from 'react';
import styles from '../styles/TestimonialCard.module.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{testimonial.name}</h2>
      <h3 className={styles.position}>{testimonial.position}</h3>
      <p className={styles.content}>&ldquo;{testimonial.testimonial}&rdquo;</p>
    </div>
  );
}

export default TestimonialCard;
