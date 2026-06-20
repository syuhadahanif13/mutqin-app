# 🚀 Mutqin App

Modern web application built with **Next.js 15** + **TypeScript** + **Tailwind CSS** + **Supabase**.

## ✨ Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Database + Auth)
- ESLint

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/syuhadahanif13/mutqin-app.git
cd mutqin-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env.local
```

Edit file `.env.local` dan isi dengan credential Supabase kamu.

### 4. Run Development Server

```bash
npm run dev
```

Buka browser: **http://localhost:3000**

## 🔗 Supabase Integration

Project ini sudah disiapkan untuk integrasi dengan Supabase.

### Setup Supabase Client

Buat file `lib/supabase/client.ts` dan `lib/supabase/server.ts` (akan saya bantu buatkan).

### Environment Variables yang Dibutuhkan

```env
NEXT_PUBLIC_SUPABASE_URL=https://zzagomuwcewtrxwuotsf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key   # hanya untuk server-side
```

## 📁 Project Structure

```
mutqin-app/
├── app/
├── components/
├── lib/
├── supabase/
├── public/
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
```

## 🚢 Deployment

Project ini sangat cocok di-deploy ke:
- **Vercel** (recommended)
- Railway
- Render

## 👋 Next Steps

Setelah setup selesai, kita bisa lanjut membuat:
- Authentication (Login/Register)
- Protected routes
- Database queries
- UI components dengan Shadcn

---

Dibuat dengan ❤️ | 2026
