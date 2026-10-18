// 1. Nhập thư viện 'http' cốt lõi có sẵn trong Node.js để xây dựng máy chủ web
const http = require("http");

// 2. Thiết lập cổng (Port) hoạt động cho ứng dụng
// Lấy cổng từ biến môi trường của hệ thống (nếu có), ngược lại mặc định dùng cổng 3000
const port = process.env.PORT || 3000;

// 3. Khởi tạo một HTTP Server (Máy chủ web)
const server = http.createServer((req, res) => {
  // Trả về mã trạng thái HTTP 200 (Nghĩa là yêu cầu thành công, không lỗi)
  res.statusCode = 200;

  // Thiết lập định dạng trả về là văn bản thuần túy hỗ trợ tiếng Việt (UTF-8)
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // Gửi nội dung phản hồi về cho trình duyệt/người dùng và đóng kết nối
  res.end("Xin chào! Hệ thống CI/CD mã nguồn mở đã chạy thành công!\n");
});

// 4. Lệnh kích hoạt server lắng nghe các yêu cầu kết nối đến tại cổng 3000
server.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
