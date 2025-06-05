import jwt from "jsonwebtoken";

const authFeedback = async (req, res, next) => {
  try {
    const { token, itoken } = req.headers;

    if (!token && !itoken) {
      return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }

    if (itoken) {
      const teacherData = jwt.verify(itoken, "homelander");
      req.body.teacherId = teacherData.id;
     
    } else if (token) {
      const studentData = jwt.verify(token, "homelander");
      req.body.studentId = studentData.id;
        
    }

    next();
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ success: false, message: "Authentication failed." });
  }
};

export default authFeedback;
