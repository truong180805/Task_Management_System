"use client"; // Lệnh này báo cho Next.js biết đây là Client Component (cần thiết khi dùng sự kiện onClick, onChange, useState)

import { useState } from "react";

export default function LoginPage() {
  // Khai báo các biến trạng thái để lưu dữ liệu form và thông báo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Hàm thực thi khi người dùng bấm nút Đăng nhập
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn trình duyệt tự động tải lại trang khi submit form
    setError(""); // Xóa lỗi cũ trước khi thử đăng nhập lại
    setSuccessMsg("");

    try {
      // Gọi API đến Backend Express đang chạy ở cổng 5000
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      // Lấy dữ liệu phản hồi từ Backend
      const data = await response.json();

      if (!response.ok) {
        // response.ok = false nghĩa là mã lỗi 400 hoặc 500
        setError(data.error || "Đăng nhập thất bại. Vui lòng thử lại.");
        return;
      }

      // Đăng nhập thành công, lưu Token vào localStorage
      localStorage.setItem("token", data.token);
      setSuccessMsg("Đăng nhập thành công! Hệ thống đã ghi nhận Token.");
      
      // Ghi chú: Sau này chúng ta sẽ viết thêm code chuyển hướng người dùng vào trang Dashboard ở đây

    } catch (err) {
      console.error(err);
      setError("Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại Backend.");
    }
  };

  return (
    // Sử dụng Tailwind CSS để căn giữa màn hình và đổ nền xám nhạt
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin} 
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Đăng Nhập OmniDash
        </h2>

        {/* Khu vực hiển thị thông báo Lỗi hoặc Thành công */}
        {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}
        {successMsg && <p className="mb-4 text-sm text-center text-green-500">{successMsg}</p>}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Cập nhật biến 'email' khi người dùng gõ
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Ví dụ: truong@gmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Cập nhật biến 'password' khi người dùng gõ
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}