import React from "react";

const sectionHeader = "bg-gray-200 mb-10 py-2 px-8 rounded text-sm md:text-lg";

interface propsTypes {
    title: string;
}

function SectionHeader({ title }: propsTypes) {
  return (
    <div id={title} className=" my-10">
      <h3 className={sectionHeader}>{title}</h3>
    </div>
  );
}

export default SectionHeader;
