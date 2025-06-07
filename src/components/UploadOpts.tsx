import { useState } from "react";

const UploadOpts = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = ['B.Tech', 'M.Tech', 'MCA'];

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {courses.map((course) => ( //dynamically add button for each course using map
          <button
            key={course}
            onClick={() => setSelectedCourse(course)}
            className={`border rounded-2xl px-5 py-1 cursor-pointer transition ${
              selectedCourse === course ? 'bg-blue-200 border-blue-400' : ''
            }`}
          >
            {course}
          </button>
        ))}
      </div>
      <button className="bg-blue-400 px-10 py-3 text-white rounded-2xl font-semibold shadow-md hover:bg-blue-500 transition cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default UploadOpts;
