# 1. Sử dụng Docker Image gốc là Node.js phiên bản 18, chạy trên nền tảng Linux Alpine (siêu nhỏ gọn)
FROM node:18-alpine

# 2. Thiết lập thư mục làm việc chính bên trong môi trường ảo Container là /app
WORKDIR /app

# 3. Sao chép các file quản lý thư viện (package.json và package-lock.json) từ máy thật vào thư mục /app của container
COPY package*.json ./

# 4. Chạy lệnh cài đặt các gói thư viện phụ thuộc bên trong container
RUN npm install

# 5. Sao chép toàn bộ mã nguồn còn lại của dự án từ máy thật vào bên trong container
COPY . .

# 6. Mở cổng mạng số 3000 của container để các dịch vụ bên ngoài có thể giao tiếp được
EXPOSE 3000

# 7. Lệnh mặc định sẽ tự động thực thi khi container khởi động lên để chạy ứng dụng web
CMD ["npm", "start"]