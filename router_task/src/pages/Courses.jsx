import { courses } from "../data/Courses";
import { useNavigate } from "react-router-dom";

function Courses() {

  const navigate = useNavigate();
  const handleCourseClick = (course) => {
    navigate(`/course/${course.id}`)
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Available Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg hover:bg-blue-50 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-2 text-sm">{course.description}</p>
              <div className="text-sm text-gray-600 mb-1"><strong>Category:</strong> {course.category}</div>
              <div className="text-sm text-gray-600 mb-1"><strong>Level:</strong> {course.level}</div>
              <div className="text-xs text-gray-500 mt-2">Course ID: #{course.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
