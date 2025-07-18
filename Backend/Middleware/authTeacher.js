import jwt from "jsonwebtoken";
import teacherModel from "../Models/teacherModel.js";

//teacher authentication middleware
const authTeacher = async (req, res, next) => {
   try {
      const { itoken } = req.headers;

      if (!itoken) {
         return res.json({ success: false, message: "Not Authorized Login Again" });
      }

      const token_decode = jwt.verify(itoken, "homelander");
      const teacher = await teacherModel.findById(token_decode.id);

      // Safely initialize req.body and req.body.details
      if (!req.body) req.body = {};
      if (!req.body.details) req.body.details = {};

      req.body.details.teacherId = token_decode.id;
      req.body.details.teacherName = teacher.name;

      next();
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
   }
};

export default authTeacher;
