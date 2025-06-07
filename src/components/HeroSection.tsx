import Upload from "./Upload"
import UploadOpts from "./UploadOpts"

const HeroSection = () => {
  return (
    <section id='home'className="flex flex-col md:flex-row justify-between items-center gap-40  md:px-20 py-50 bg-gray-50">
      <div className="w-4/5 md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-normal text-gray-800 font-mono">
          KTU Result Analyser
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed font-mono">
          Lets you analyze KTU results with detailed insights, effective credit tracking, and interactive graphs - all through a simple web interface.
        </p>
      </div>
      <div className="w-4/5 md:w-1/3 flex flex-col px-6 md:px-10 py-10 gap-10 bg-gray-50 border-2 border-gray-950 border-solid rounded-2xl">
        <Upload/>
        <UploadOpts/>
      </div>
    </section>
  )
}

export default HeroSection