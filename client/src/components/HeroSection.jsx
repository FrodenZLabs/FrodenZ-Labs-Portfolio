import backgroundImage from '../assets/backgroundImage.jpeg';
import shapeImage from '../assets/shapeImage.svg';

export const HeroSection = () => {
  return (
    <section
      className="relative h-[94vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute hidden sm:block inset-0 bg-no-repeat mt-[10vh]"
        style={{ backgroundImage: `url(${shapeImage})` }}
      ></div>
      <div className="absolute z-10 flex flex-col gap-y-6 items-center text-center justify-center text-white">
        <h1 className="font-bold text-6xl sm:text-4xl">
          The Future of Software Development
        </h1>
        <p className="text-3xl sm:text-xl mb-8 px-4 sm:px-0">
          Discover how innovations are shaping the way we build software.
        </p>

        <button
          type="button"
          className="text-gray-900 bg-white focus:outline-none hover:bg-secondary/90 focus:ring-4 focus:ring-secondary/90 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2"
        >
          Learn more
        </button>
      </div>
    </section>
  );
};
