// src/routes/workspace.routes.js
const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace.controller');

// Đường dẫn tạo Workspace (phương thức POST)
router.post('/', workspaceController.createWorkspace);

// Đường dẫn lấy danh sách theo userId (phương thức GET)
router.get('/:userId', workspaceController.getWorkspacesByUser);

module.exports = router;