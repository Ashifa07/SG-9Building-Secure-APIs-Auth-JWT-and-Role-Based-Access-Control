# 🛠️ Prisma ORM Cheat Sheet
Gunakan panduan ini untuk mengelola database menggunakan Prisma.

### 1. Inisialisasi & Setup
```npx prisma init``` : Melakukan inisialisasi Prisma pada proyek.

```npx prisma format``` : Merapikan penulisan kode di dalam file schema.prisma.

```npx prisma generate``` : Menghasilkan (generate) Prisma Client agar bisa digunakan di kode program.

### 2. Sinkronisasi Database
```npx prisma migrate dev --name <nama_migrasi>``` : Membuat file migrasi baru dan memperbarui skema database (Contoh: npx prisma migrate dev --name add-loan-table).

```npx prisma db push``` : Memperbarui database secara langsung tanpa membuat file migrasi (cocok untuk fase prototyping).

```npx prisma db seed``` : Mengisi database dengan data awal (seed data) yang telah didefinisikan.

### 3. Tooling & GUI
```npx prisma studio``` : Membuka antarmuka grafis (GUI) di browser untuk melihat dan mengedit isi database secara lokal.

### 🔄 Reset / Reinstall Prisma
Jika terjadi kendala pada library atau client, gunakan urutan perintah berikut:

Hapus file instalasi lama:

```bash
rm -rf node_modules
rm package-lock.json
```

Install ulang dependencies:

```bash
npm install
```

Generate ulang client:

```bash
npx prisma generate
```