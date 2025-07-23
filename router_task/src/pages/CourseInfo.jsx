import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/Courses";

function CourseInfo() {
  const { id } = useParams();
  const courseId = parseInt(id, 10);

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center mt-10 text-red-600 text-xl">
        Course not found!
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{course.title}</h1>
      <p className="mb-3 text-gray-800">
        <strong>Description:</strong> {course.description}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Category:</strong> {course.category}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Level:</strong> {course.level}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Course ID:</strong> {course.id}
      </p>
    </div>
  );
}

export default CourseInfo;
