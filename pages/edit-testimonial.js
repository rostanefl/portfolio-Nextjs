import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateTestimonial } from '../redux/reducers/testimonialsSlice';

function EditTestimonial({ id }) {
  const testimonial = useSelector(state =>
    state.testimonials.list.find(t => t.id === id)
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({ defaultValues: testimonial });

  const onSubmit = data => {
    dispatch(updateTestimonial(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="message">Message:</label>
      <textarea id="message" {...register('message')} />

      <button type="submit">Update Testimonial</button>
    </form>
  );
}

export default EditTestimonial;
