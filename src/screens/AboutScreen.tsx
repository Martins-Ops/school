import logo from "../../src/assets/images/logo.png";

const About = () => {
  return (
    <div className="my-20">
      <div id="into and logo" className="mx-6 md:mx-10 md:flex md:gap-10">
        <div className="shadow-lg bg-gray-700 md:w-1/2 py-4 px-6">
          <img src={logo} className="" alt="logo" />
        </div>
        <div className="md:w-1/2 md:mt-32 mt-20 shadow-lg bg-gray-300 py-8 px-4 md:px-8 h-1/2 ">
          <h2 className="text-xl my-4 text-indigo-900">
            About St Paul College
          </h2>
          <p className="text-blue-900">
            St Paul College Sagamu is owned and managed by the Institute of the
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

      <div className="relative">
        <div className="my-20 mx-8 md:mx-20 shadow-lg bg-gray-700 rounded-sm text-center py-10 md:py-20 px-4">
          <h2 className="text-4xl text-white">Vision</h2>
          <p className="text-gray-300 my-8 text-xl md:text-2xl">
            A distinguished Colledge that provides solid foundation for
            christian values and moral probity, and serves as transformational
            agens in the society
          </p>
        </div>

        <div className="md:flex mx-12 px-4 md:mx-28 md:gap-10 md:mx-32 bg-white rounded-lg absolute top-60">
          <div className="text-center">
            <h2 className="my-8">Mission</h2>
            <p className="text-gray-500">
              With the help of God and the collaboration of all stakeholders,
              Louisville Girls High School, a Catholic educational institution
              in Ijebu-Itele, offers wholesome education to her students by
              promoting:
            </p>
          </div>

          <div className="text-center">
            <h2 className="my-8">Mission</h2>
            <p className="text-gray-500">
              With the help of God and the collaboration of all stakeholders,
              Louisville Girls High School, a Catholic educational institution
              in Ijebu-Itele, offers wholesome education to her students by
              promoting:
            </p>
          </div>
        </div>
      </div>

      <div id="focal points" className="text-center mt-80 md:mt-40 bg-gray-300 py-4">
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
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Faith</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Faith</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Faith</p>
          </span>

          <span className="w-1/5">
            <p className="text-8xl text-gray-200 mb-8">01.</p>
            <p className="text-4xl">Faith</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
