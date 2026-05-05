// src/store/useAuthStore.ts
import { create } from 'zustand';

// Định nghĩa kiểu dữ liệu cho Store
interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

// Khởi tạo Store
export const useAuthStore = create<AuthState>((set) => ({
  // Khởi tạo token từ localStorage (kiểm tra window để tránh lỗi Next.js SSR)
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  
  // Hàm lưu token (gọi khi đăng nhập)
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
    set({ token });
  },
  
  // Hàm xóa token (gọi khi đăng xuất)
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    set({ token: null });
  },
}));