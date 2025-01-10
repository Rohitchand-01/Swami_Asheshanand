import React, { useRef } from 'react';

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Section 1 */}
      <section
        ref={section1Ref}
        className="relative flex justify-center items-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?meditation)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 font-extrabold text-5xl sm:text-6xl leading-tight">Awaken Your Soul</h1>
          <p className="mb-6 text-lg sm:text-xl">Begin your spiritual journey today.</p>
          <button
            onClick={() => scrollToSection(section2Ref)}
            className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300"
          >
            Next Section
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="relative flex justify-center items-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?nature)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h2 className="mb-4 font-bold text-4xl">The Power of Meditation</h2>
          <p className="mb-6 text-lg sm:text-xl">Find inner peace through meditation and mindfulness.</p>
          <button
            onClick={() => scrollToSection(section3Ref)}
            className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300"
          >
            Next Section
          </button>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={section3Ref}
        className="relative flex justify-center items-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?yoga)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h2 className="mb-4 font-bold text-4xl">Yoga for the Soul</h2>
          <p className="mb-6 text-lg sm:text-xl">Yoga is a path to physical and spiritual wellness.</p>
          <button
            onClick={() => scrollToSection(section4Ref)}
            className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300"
          >
            Next Section
          </button>
        </div>
      </section>

      {/* Section 4 */}
      <section
        ref={section4Ref}
        className="relative flex justify-center items-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?spirituality)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h2 className="mb-4 font-bold text-4xl">Connect with the Divine</h2>
          <p className="mb-6 text-lg sm:text-xl">Feel the presence of the divine in every moment.</p>
          <button
            onClick={() => scrollToSection(section5Ref)}
            className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300"
          >
            Next Section
          </button>
        </div>
      </section>

      {/* Section 5 */}
      <section
        ref={section5Ref}
        className="relative flex justify-center items-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?spiritual)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h2 className="mb-4 font-bold text-4xl">Join the Community</h2>
          <p className="mb-6 text-lg sm:text-xl">Join a community of like-minded individuals.</p>
          <button
            onClick={() => scrollToSection(section1Ref)}
            className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300"
          >
            Back to Start
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
