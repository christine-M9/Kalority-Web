import React, { useRef, useState, useEffect } from "react";
import "../App.css";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const cardWidth = 300;
  const scrollDelay = 1000; // Scroll delay in milliseconds

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);

        // Based on current scroll position
        setActiveDot(currentIndex % 5);

        // If we reach the end of the original testimonials, jump back to the start
        if (scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = scrollLeft % (scrollRef.current.scrollWidth / 2);
        }
      }
    };

    const currentRef = scrollRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && isInViewport(scrollRef.current)) {
        scrollRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const offset = index * cardWidth;
      scrollRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
    setActiveDot(index);
  };

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <section className="testimonials" id="testimonials">
      {/* Headings and Labels */}
      <div className="testimonials-header">
        <div className="header-content">
          <div>
            <h1>TESTIMONIALS</h1>
            <h2>Clients Say</h2>
            <h3>About Kalority</h3>
          </div>
          <p className="testimonials-description">
            Redfin perch tripod fish zebra lionfish, nase slickhead! Jewelfish
            angler Devario gray reef shark forehead brooder.
          </p>
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="testimonials-grid" ref={scrollRef}>
        {["A", "B", "C", "D", "E"].map((client, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={`https://via.placeholder.com/80?text=Client+${client}`}
              alt={`Client ${client}`}
              className="testimonial-image"
            />
            <div className="testimonial-name">{`Client ${client}`}</div>
            <div className="testimonial-message">
              {`"Testimonial message for Client ${client}."`}
            </div>
          </div>
        ))}
        {["A", "B", "C", "D", "E"].map((client, index) => (
          <div key={index + 5} className="testimonial-card">
            <img
              src={`https://via.placeholder.com/80?text=Client+${client}`}
              alt={`Client ${client}`}
              className="testimonial-image"
            />
            <div className="testimonial-name">{`Client ${client}`}</div>
            <div className="testimonial-message">
              {`"Testimonial message for Client ${client}."`}
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-dots">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`scroll-dot ${activeDot === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
