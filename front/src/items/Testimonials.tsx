import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';
import testimonialsData from './Testimonials.json';

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials-wrapper">
        <div className="testimonials-header" data-aos="fade-up">
          <h1>Testimonials</h1>
          <p>See what our physicians are saying about us.</p>
        </div>
        <div className="testimonials-content">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="testimonial"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <blockquote>{testimonial.quote}</blockquote>
              <div></div>
              <p>
                <b style={{ fontWeight: 600 }}>{testimonial.name}</b> <br /> {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
