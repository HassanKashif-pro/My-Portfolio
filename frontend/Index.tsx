import React from "react";

// Importing CSS
import "../public/styles.css";
import Header from "./header";

// Example of header component

// Main App Component
const App = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Section 1: Introduction */}
      <section className="hidden">
        <h1>Welcome to My Website</h1>
        <p>
          This is a basic introduction section where you can write about the
          website's purpose.
        </p>
      </section>

      {/* Section 2: About */}
      <section className="hidden">
        <h1>About Us</h1>
        <p>
          We are a team of developers dedicated to building responsive and
          functional web applications.
        </p>
      </section>

      {/* Section 3: Services */}
      <section className="hidden">
        <h1>Our Services</h1>
        <p>
          We provide a variety of services, including web development, app
          development, and UI/UX design.
        </p>
      </section>

      {/* Section 4: Contact */}
      <section className="hidden">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us via email at contact@website.com or call
          us at 123-456-7890.
        </p>
      </section>
    </div>
  );
};

export default App;
