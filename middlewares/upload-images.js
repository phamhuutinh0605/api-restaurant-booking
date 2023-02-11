// thư viện multer upload file img
const mkdirp = require("mkdirp");
const multer = require("multer");

const uploadImages = (type) => {
  mkdirp.sync(`./public/images/${type}`);
  const storage = multer.diskStorage({
    //destination: khai báo đg dẫn thư mục chứa img.
    destination: (req, file, cb) => {
      cb(null, `./public/images/${type}`); // /images/avatar : phải tạo tay thư mục này, vì mặc định chỉ dẫn ảnh đến thư mục public.
    },
    // filenam: định nghĩa tên file khi lưu
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
      // để tránh bị file ghi đè khi đã tồn tại file đó r, Date.now(): để thêm ngày tránh bị đè ảnh
    },
  });
  const uploads = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImgList = [".jpg", ".png"];
      const extension = file.originalname.slice(-4); // slice(-4): lấy 4 kí tự cuối cùng.
      const check = extensionImgList.includes(extension); // includes: kiểm tra trong extensionImgList có tồn tại extension ko. TRUE/ FALSE.
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Loại file không hợp lệ !"));
      }
    },
  });
  return uploads.single(type);
};
module.exports = {
  uploadImages,
};