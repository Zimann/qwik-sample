import { $, component$, Resource, useResource$ } from "@builder.io/qwik";
import { Course } from "~/models/course";

export default component$(() => {

  const resource = useResource$<Course[]>(() => {
    return getCourses();
  });


  return (
    <>
      <Resource
        value={resource}
        onPending={() => (
          <h1>Loading...</h1>
        )}
        onRejected={() => (
          <h1>Request failed.</h1>
        )}
        onResolved={courses => (
          <>
            {courses.map(course => (
              <h3>{course.description}</h3>
            ))}
          </>
        )}
      />
    </>
  );
});

export async function getCourses() {
  const response = await fetch("http://localhost:9000/api/courses");
  return response.json();
}