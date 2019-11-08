import React, { useState } from "react";

// image preview on click
import Image from "react-image-enlarger";

// to be dynamic
import strucutreImg from "../../../../assests/Structure.png";

export default () => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="dark-bg bg-section about-structure">
      <h2 className="section-title text-center">Our Structure</h2>

      <Image
        zoomed={zoomed}
        src={strucutreImg}
        alt="Our team's structure"
        title="Energia Powered'20 board"
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
      />
    </section>
  );
};
