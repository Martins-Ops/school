import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import task1 from "../../../src/assets/images/task1.png";
import task2 from "../../../src/assets/images/task2.png";
import task3 from "../../../src/assets/images/task3.jpg";
import task4 from "../../../src/assets/images/task4.jpg";
import SectionHeader from "../../components/SectionHeader";

function Events() {
  const events = [
    {
      img: task1,
      day: 10,
      month: "MAR 2023",
      title: "Mid term break",
      anime: "fade-right",
      time: "100",
    },
    {
      img: task2,
      day: 1,
      month: "APR 2023",
      title: "Workshop Session",
      anime: "fade-down",
      time: "200",
    },
    {
      img: task3,
      day: 15,
      month: "APR 2023",
      title: "Exam Starts",
      anime: "fade-up",
      time: "300",
    },
    {
      img: task4,
      day: 12,
      month: "JUN 2023",
      title: "Vacation Starts",
      anime: "fade-left",
      time: "400",
    },
  ];
  return (
    <>
      <SectionHeader title="Upcoming Events" />
      <div className="flex justify-center flex-wrap">
        {events.map((each) => {
          return (
            <div
              // data-aos-delay={each.time}
              // data-aos={each.anime}
              key={each.title}
              className="brightness-50 relative my-6 md:my-0 w-full md:w-1/4"
            >
              <LazyLoadImage
                src={each.img}
                className="object-cover  h-64"
                alt={each.title}
                style={{ width: "97%" }}
              />
              <div className="absolute bg-gray-500 bg-opacity-75 bottom-9 left-0 p-2">
                <p className="text-white font-bold text-lg">{each.day}</p>
                <p className="text-white text-sm">{each.month}</p>
              </div>
              <p className="mt-3 text-center">{each.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Events;
