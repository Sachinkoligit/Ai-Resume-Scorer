import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("File name:", file.originalname);
  console.log("MIME type:", file.mimetype);
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/octet-stream"
  )
    cb(null, true);
  else cb(new Error("Only PDF allowed"), false);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
