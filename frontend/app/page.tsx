// src/app/page.tsx
import Link from "next/link"; // Nhập công cụ điều hướng của Next.js

export default function HomePage() {
  return (
    // Sử dụng Tailwind CSS để dàn trang, căn giữa mọi thứ và đổ nền màu xám nhạt
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      {/* Khu vực tiêu đề và giới thiệu */}
      <h1 className="mb-4 text-5xl font-extrabold text-blue-600">
        OmniDash
      </h1>
      <p className="max-w-lg mb-8 text-lg text-center text-gray-600">
        Hệ thống quản lý công việc và tối ưu năng suất cá nhân đa ngữ cảnh. 
        Sắp xếp không gian làm việc của bạn một cách thông minh và hiệu quả.
      </p>

      {/* Khu vực chứa các nút điều hướng */}
      <div className="flex space-x-4">
        {/* Nút chuyển đến trang Đăng nhập đã có */}
        <Link
          href="/login"
          className="px-8 py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Đăng Nhập
        </Link>
        
        {/* Nút chuyển đến trang Đăng ký (trang này chúng ta sẽ tạo sau) */}
        <Link
          href="/register"
          className="px-8 py-3 text-blue-600 transition duration-300 bg-white border border-blue-600 rounded-lg shadow hover:bg-blue-50"
        >
          Đăng Ký
        </Link>
      </div>

    </div>
  );
}