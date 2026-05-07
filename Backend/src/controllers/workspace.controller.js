// src/controllers/workspace.controller.js
const prisma = require('../config/prisma');

// Hàm 1: Tạo Workspace mới
const createWorkspace = async (req, res) => {
  try {
    // Nhận dữ liệu do Frontend gửi lên
    const { userId, name, icon, description, modeType } = req.body;

    // Dùng Prisma lưu vào bảng 'workspaces'
    const newWorkspace = await prisma.workspace.create({
      data: {
        userId: userId, 
        name: name,
        icon: icon,
        description: description,
        modeType: modeType || 'work', // Mặc định là 'work' nếu không truyền
      },
    });

    res.status(201).json(newWorkspace);
  } catch (error) {
    console.error("Lỗi khi tạo Workspace:", error);
    res.status(500).json({ error: "Lỗi hệ thống khi tạo Không gian làm việc." });
  }
};

// Hàm 2: Lấy danh sách Workspace của một người dùng
const getWorkspacesByUser = async (req, res) => {
  try {
    // Lấy ID người dùng từ đường dẫn URL (ví dụ: /api/workspaces/123)
    const { userId } = req.params;

    // Tìm tất cả Workspace có userId khớp với ID được truyền vào
    const workspaces = await prisma.workspace.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc', // Sắp xếp cái mới tạo lên đầu tiên
      }
    });

    res.status(200).json(workspaces);
  } catch (error) {
    console.error("Lỗi khi lấy Workspace:", error);
    res.status(500).json({ error: "Lỗi hệ thống khi tải dữ liệu." });
  }
};

module.exports = {
  createWorkspace,
  getWorkspacesByUser
};