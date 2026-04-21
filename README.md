# 🚀 OmniDash - Personal Productivity & Lifestyle OS

OmniDash là một nền tảng quản lý năng suất cá nhân đa ngữ cảnh (Work - Life - Chill), giúp người dùng tổ chức công việc, ghi chú và quản lý môi trường làm việc số một cách thông minh, tập trung và hiệu quả.

---

## 📌 Mục tiêu dự án

- Tạo một **Digital Hub** thống nhất cho mọi hoạt động số
- Giảm phân tán giữa các công cụ (tabs, tasks, notes)
- Tăng năng suất cá nhân bằng AI & automation
- Cung cấp trải nghiệm **context-based workflow**

---

## ✨ Tính năng chính

### 🧠 1. Workspace Combos
- Gom nhóm nhiều URL thành một workspace
- Mở toàn bộ tabs chỉ với 1 click (qua Extension)
- Phù hợp cho học tập, làm việc, giải trí

### 📋 2. Task Management
- CRUD tasks
- Hỗ trợ:
  - Kanban
  - List
  - Calendar
- Hỗ trợ task cha - con (hierarchy)

### 🔄 3. Context Switching
- Chuyển đổi nhanh giữa:
  - Work 💼
  - Personal 🏠
  - Chill 🎮
- Dashboard thay đổi theo context

### 🤖 4. AI Assistant
- Tự động phân rã task lớn thành subtask
- Semantic search trong notes
- Hỗ trợ tối ưu workflow

### 📝 5. Knowledge Hub
- Ghi chú bằng Markdown
- Tagging system
- Quản lý tri thức cá nhân

---

## 🏗️ Kiến trúc hệ thống

### 🔹 Modular Layered Architecture

---

## 🛠️ Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- Zustand (State Management)

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

### AI Integration
- Gemini API

### Extension
- Chrome Extension (Manifest V3)

---

## 📊 Database Design (Overview)

### 👤 Users & Preferences
- `users`
- `user_preferences`

### 📂 Workspace
- `workspaces`
- `workspace_resources`
- `notes`

### ⚡ Productivity
- `tasks`
- `ai_usage_logs`
- `productivity_metrics`

---

## 📈 Non-Functional Requirements

- ⚡ Performance: load < 1.5s
- 🔒 Security: AES-256 + HTTPS
- 🟢 Uptime: ≥ 99.5%
- 🎯 UX: Minimalist + context switching < 500ms

---

## 🔌 Tích hợp hệ thống

- Web App ↔ Browser Extension
- AI Service (Gemini API)
- RESTful API

---

## 👥 Actors

- **User**: quản lý công việc & workspace
- **Admin**: quản lý hệ thống & AI config
- **AI Service**: xử lý thông minh
- **Browser Extension**: mở tabs & workspace

---

## 🧪 Scaling Targets

| Entity               | Target       |
|---------------------|-------------|
| Users               | 1,000+      |
| Tasks               | 50,000+     |
| Workspace Resources | 15,000+     |
| AI Logs             | 20,000+     |

---

## 🚧 Roadmap (Gợi ý phát triển)

- [ ] Authentication (JWT / OAuth)
- [ ] Real-time sync (WebSocket)
- [ ] AI nâng cao (goal planning)
- [ ] Mobile app (Flutter)
- [ ] Analytics Dashboard
- [ ] Plugin system (Widget mở rộng)

---

## 📷 Demo (Optional)

> Thêm ảnh hoặc GIF demo tại đây

---

## ⚙️ Cài đặt & chạy dự án

```bash
# Clone repo
git clone https://github.com/your-username/omnidash.git

# Cài dependencies
npm install

# Chạy backend
npm run server

# Chạy frontend
npm run dev