import logo from "../../../src/assets/images/logo.png";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img5 from "../../../src/assets/images/img9.jpg";
import SectionHeader from "../../components/SectionHeader";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 08073738551

  return (
    <div className="mx-4 md:mx-20">
      <div id="into and logo" className="pt-36 mx-6 md:mx-10 md:flex md:gap-10">
        <div className="shadow-lg bg-gray-700 md:w-1/2 py-4 px-6">
          <LazyLoadImage src={logo} className="" alt="logo" />
        </div>
        <div className="md:w-1/2 md:mt-32 mt-20 shadow-lg bg-gray-300 py-8 px-4 md:px-8 h-1/2 ">
          <h2 className="text-xl my-4 text-indigo-900">
            About St Paul college
          </h2>
          <p className="text-blue-900">
            St Paul college Sagamu is owned and managed by the Institute of the
            Sisters of St. Louis, a religious group of women. The Institute was
            founded in 1842 in France by Abbe Eugene Marie Louis Bautain with a
            vision of ‘a world healed, unified and transformed by the saving
            wisdom of Christianity’ and a mission to particularly instruct the
            young, care for the sick and work for the salvation of souls.
            Presently, the central house (headquarters) is in Dublin, Ireland.
            In Nigeria, the provincial house where the leader and proprietress
            of the school, Sr. Isabel Mann with her team reside is in Ibadan,
            the Oyo state capital.
          </p>
        </div>
      </div>

      <>
        <SectionHeader title={"About us"} />
        <p className="text-blue-900">
          St Paul college Sagamu is owned and managed by the Institute of the
          Sisters of St. Louis, a religious group of women. The Institute was
          founded in 1842 in France by Abbe Eugene Marie Louis Bautain with a
          vision of ‘a world healed, unified and transformed by the saving
          wisdom of Christianity’ and a mission to particularly instruct the
          young, care for the sick and work for the salvation of souls.
          Presently, the central house (headquarters) is in Dublin, Ireland. In
          Nigeria, the provincial house where the leader and proprietress of the
          school, Sr. Isabel Mann with her team reside is in Ibadan, the Oyo
          state capital.
        </p>
      </>

      <>
        <SectionHeader title="Vision" />
        <p className="text-blue-900">
          A distinguished college that provides solid foundation for christian
          values and moral probity, and serves as transformational agens in the
          society
        </p>
      </>

      <>
        <SectionHeader title="Mission" />
        <p className="text-blue-900">
          With the help of God and the collaboration of all stakeholders,
          Louisville Girls High School, a Catholic educational institution in
          Ijebu-Itele, offers wholesome education to her students by promoting:
        </p>
      </>

      <div id="location" className="my-10 mx-8 md:mx-20 md:flex md:gap-20">
        <div>
          <h2 className="capitalize text-3xl md:text-5xl text-gray-500">
            The Location
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-16 mb-20 md:mb-0 ">
            The Sisters of St. Louis are in nine countries of the world: France,
            Ireland, Brazil, Nigeria, Ghana, Benin Republic, Ethiopia, USA, and
            the United Kingdom, but with a very active mission in Africa. The
            St. Louis Sisters arrived in Nigeria (Kano State) in 1948. There are
            presently about 140 sisters of St. Louis working in Nigeria.
            Louisville Girls High School was established on 11th January 1998,
            in a quiet rural community, Ijebu Itele, devoid of all forms of
            distraction. It is an environment that is highly conducive to
            learning. There are presently sixty-five teachers, twenty-eight
            clerical and forty-five utility staff, and five hundred and eighteen
            (518) students for the 2016/2017 academic session.
          </p>
        </div>

        <div>
          <LazyLoadImage src={img5} alt="big image" />
        </div>
      </div>

      <div
        id="Quality"
        className="mx-8 md:mx-20 md:flex md:flex md:flex-row-reverse mt-20 md:mt-32 md:gap-20"
      >
        <div>
          <h2 className="capitalize text-3xl md:text-5xl text-gray-500">
            The Quality
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-16 mb-20 md:mb-0 ">
            The Sisters of St. Louis are in nine countries of the world: France,
            Ireland, Brazil, Nigeria, Ghana, Benin Republic, Ethiopia, USA, and
            the United Kingdom, but with a very active mission in Africa. The
            St. Louis Sisters arrived in Nigeria (Kano State) in 1948. There are
            presently about 140 sisters of St. Louis working in Nigeria.
            Louisville Girls High School was established on 11th January 1998,
            in a quiet rural community, Ijebu Itele, devoid of all forms of
            distraction. It is an environment that is highly conducive to
            learning. There are presently sixty-five teachers, twenty-eight
            clerical and forty-five utility staff, and five hundred and eighteen
            (518) students for the 2016/2017 academic session.
          </p>
        </div>

        <div>
          <img src={img5} alt="big image" />
        </div>
      </div>

      <div id="focal points" className="text-center my-20 bg-gray-300 py-4">
        <h2 className="text-3xl my-10">Our Five Focal Points</h2>
        <p className="text-xl">
          Saint Paul Sagamu have four focal points geared towards helping them
          realize their expected goals. These are:
        </p>
        <div className="md:flex md:gap-10 my-8">
          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Faith</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">02.</p>
            <p className="text-4xl">Love</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Charity</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Morals</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Charity</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
