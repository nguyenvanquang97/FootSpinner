const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Đảm bảo thư mục tồn tại
const uploadDir = '/Volumes/aQuang97/home_aQuang/work/Temp/thư mục không có tiêu đề/FootSpinner/src/assets/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình lưu trữ cho multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

// API endpoint để tải lên ảnh
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Không có file nào được tải lên' });
  }
  
  // Trả về đường dẫn tương đối để sử dụng trong ứng dụng
  const relativePath = `/assets/images/${req.file.filename}`;
  res.json({ path: relativePath });
});

// API endpoint để xóa ảnh
app.delete('/delete', (req, res) => {
  const { imagePath } = req.body;
  
  if (!imagePath) {
    return res.status(400).json({ error: 'Không có đường dẫn ảnh' });
  }
  
  // Chuyển đổi đường dẫn tương đối thành đường dẫn tuyệt đối
  const fullPath = imagePath.startsWith('/assets/images/') 
    ? `/Volumes/aQuang97/home_aQuang/work/Temp/thư mục không có tiêu đề/FootSpinner/src${imagePath}`
    : imagePath;
  
  // Xóa file
  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error('Lỗi khi xóa file:', err);
      return res.status(500).json({ error: 'Không thể xóa file' });
    }
    
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});