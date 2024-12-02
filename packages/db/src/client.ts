import dotenv from "dotenv"; // Untuk mengonfigurasi dotenv
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg"; // Menggunakan Pool dari pg untuk koneksi PostgreSQL

import * as schema from "./schema"; // Mengimpor schema yang telah dibuat

// Pastikan file .env dimuat
dotenv.config();

// Cek apakah environment variable POSTGRES_URL ada
if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

// Membuat koneksi ke PostgreSQL menggunakan Pool dari 'pg'
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Menggunakan URL dari .env
});

// Membuat koneksi Drizzle ORM
export const db = drizzle(pool, {
  schema, // Schema yang sudah didefinisikan
  casing: "snake_case", // Menentukan casing untuk kolom (snake_case)
});
