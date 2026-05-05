// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardPage() {
  const router = useRouter();
  // Lấy token và hàm đăng xuất từ Zustand
  const { token, logout } = useAuthStore();

  // Kiểm tra quyền truy cập: Nếu không có token, đẩy về trang đăng nhập
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  // Nếu đang kiểm tra token, không hiển thị gì cả để tránh chớp màn hình
  if (!token) return null;

  // Xử lý sự kiện bấm nút Đăng xuất
  const handleLogout = () => {
    logout(); // Xóa token
    router.push("/login"); // Về trang đăng nhập
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Cột Menu bên trái (Sidebar) */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">OmniDash</h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block px-4 py-2 text-blue-700 bg-blue-50 rounded-lg">
            🏠 Tổng quan
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            🗂️ Workspaces
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            ✅ Tác vụ (Tasks)
          </a>
        </nav>
      </aside>

      {/* Khu vực nội dung chính bên phải */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between pb-6 border-b">
          <h1 className="text-3xl font-semibold text-gray-800">Tổng quan công việc</h1>
          
          <button 
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-bold text-white transition bg-red-500 rounded shadow hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </header>

        <div className="mt-8">
          <div className="p-6 bg-white border rounded-lg shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-gray-800">Chào mừng bạn trở lại!</h3>
            <p className="text-gray-600">
              Hãy bắt đầu bằng cách chọn hoặc tạo một Không gian làm việc (Workspace) để tối ưu năng suất hôm nay.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}