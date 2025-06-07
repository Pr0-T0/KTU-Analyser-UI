import Upload from "./Upload";
import UploadOpts from "./UploadOpts";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-14 md:gap-28 px-6 md:px-20 py-20 bg-gray-50"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl text-gray-800 font-extrabold font-mono leading-snug">
          Analyze. <br className="hidden md:block" />
          Track Credits. <br className="hidden md:block" />
          <span className="text-blue-600">Visualize.</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-mono max-w-xl mx-auto md:mx-0">
          Lets you analyze KTU results with detailed insights, effective credit
          tracking, and interactive graphs — all through a simple web interface.
        </p>
      </div>

      {/* Right Upload Section */}
      <div className="md:w-1/3 w-full flex flex-col gap-6 p-6 md:p-10 border-2 border-gray-950 rounded-2xl bg-white shadow-md">
        <Upload />
        <UploadOpts />
      </div>
    </section>
  );
};

export default HeroSection;
