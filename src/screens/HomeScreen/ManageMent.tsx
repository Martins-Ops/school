import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import abell from "../../../src/assets/images/abell.png";
import daniel from "../../../src/assets/images/daniel.png";
import principal from "../../../src/assets/images/principal.jpeg";
import chaplain from "../../../src/assets/images/chaplain.jpeg";

import vp from "../../../src/assets/images/vp.jpeg";

const imgStyle = "h-[30rem] md:h-[40rem] w-full";

function ManageMent() {
  return (
    <>
      <SectionHeader title="Management" />
      <div className="md:flex md:gap-10 justify-center items-center">
        <div className=" md:w-1/3  justify-center">
          <LazyLoadImage src={chaplain} className={imgStyle} alt="" />
          <p className="text-center font-bold text-2xl my-8">The Chaplain</p>
        </div>

        <div className="w-full md:w-1/3 justify-center">
          <LazyLoadImage src={principal} className={imgStyle} alt="" />
          <div className="w-full h-full"></div>
          <p className="text-center font-bold text-2xl my-8">The Principal</p>
        </div>

        <div className=" md:w-1/3 justify-center">
          <LazyLoadImage src={vp} className={imgStyle} alt="" />
          <p className="text-center font-bold text-2xl my-8">
            The Vice principal
          </p>
        </div>
      </div>
    </>
  );
}

export default ManageMent;
