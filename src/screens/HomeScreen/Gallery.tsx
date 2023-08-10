import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import SectionHeader from "../../components/SectionHeader";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery() {
  return (
    <>
      <SectionHeader title="Gallery" />

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex w-full md:w-1/2  flex-wrap justify-between h-460 w-435">
          {images.map((image) => (
            <div key={image} className="w-1/2 h-1/2 md:w-1/3 md:h-1/3 p-2">
              <img
                src={image}
                alt={image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <img src={img3} alt={img3} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
