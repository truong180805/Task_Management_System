// src/config/prisma.js
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const dotenv = require('dotenv');

// 1. Tải biến môi trường để lấy DATABASE_URL
dotenv.config();

// 2. Tạo một Pool kết nối trực tiếp đến PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// 3. Bọc Pool kết nối đó vào Adapter của Prisma
const adapter = new PrismaPg(pool);

// 4. Khởi tạo PrismaClient và truyền adapter vào (Bắt buộc ở Prisma v7)
const prisma = new PrismaClient({ adapter });

module.exports = prisma;