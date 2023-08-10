import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import abell from "../../../src/assets/images/abell.png";
import daniel from "../../../src/assets/images/daniel.png";
import principal from "../../../src/assets/images/principal.png";
import vp from "../../../src/assets/images/vp.png";

function ManageMent() {
  return (
    <>
      <SectionHeader title="Management" />
      <div className="md:flex md:gap-10 justify-center items-center">
        <div className=" md:w-1/4 justify-center">
          <LazyLoadImage src={principal} className="" alt="" />
          <p className="text-center font-bold text-2xl my-8">The Principal</p>
        </div>

        <div className="w-full md:w-1/4 justify-center">
          <LazyLoadImage src={vp} className="" alt="" />
          <p className="text-center font-bold text-2xl my-8">
            The Vice Principal
          </p>
        </div>

        <div className=" md:w-1/4 justify-center">
          <LazyLoadImage src={abell} className="" alt="" />
          <p className="text-center font-bold text-2xl my-8">The Accountant</p>
        </div>

        <div className=" md:w-1/4 justify-center">
          <LazyLoadImage src={daniel} className="" alt="" />
          <p className="text-center font-bold text-2xl my-8">The Manager</p>
        </div>
      </div>
    </>
  );
}

export default ManageMent;
