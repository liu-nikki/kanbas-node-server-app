import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  // app.get("/api/enrollments/", (req, res) => {
  //   res.json(dao.setEnrollments());
  // });

  const createEnrollment = async (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollments = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollments);
  };

  const deleteEnrollment = async (req, res) => {
    const { courseId, userId } = req.params;
    const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  app.post("/api/enrollments/:courseId/:userId", createEnrollment);
  app.delete("/api/enrollments/:courseId/:userId", deleteEnrollment);
}