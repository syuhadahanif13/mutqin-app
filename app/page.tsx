"use client";

import React from 'react';

export default function MutqinSuperApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950 text-white overflow-hidden">
      {/* Subtle Islamic Pattern */}
      <div className="fixed inset-0 islamic-pattern pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center">
              <span className="font-bold text-2xl tracking-tighter">M</span>
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight">Mutqin</div>
              <div className="text-[10px] text-emerald-400 -mt-1.5 tracking-[2px]">SUPER APP</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm hover:bg-white/5 rounded-full transition-colors">
              Masuk
            </button>
            <button className="px-6 py-2.5 bg-white text-emerald-950 rounded-full text-sm font-semibold hover:bg-white/90 active:scale-[0.985] transition-all">
              Daftar Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8 text-sm border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Platform Digital untuk Santri & Pesantren
          </div>
          
          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.5px] leading-[1.05] mb-6">
            Mutqin Super App<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">untuk Umat</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-2xl text-white/70 mb-10 tracking-tight">
            Satu aplikasi untuk mendukung kehidupan santri modern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('fitur-utama')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-2xl text-lg font-semibold transition-all active:scale-[0.985]"
            >
              Jelajahi Fitur
            </button>
            <button 
              onClick={() => document.getElementById('fitur-harian')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 glass rounded-2xl text-lg font-medium border border-white/20 hover:bg-white/5 transition-all"
            >
              Fitur Harian
            </button>
          </div>
        </div>
      </section>

      {/* Fitur Harian */}
      <section id="fitur-harian" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[4px] text-emerald-400 text-xs font-semibold mb-3">IBADAH SEHARI-HARI</div>
          <h2 className="text-5xl font-semibold tracking-[-2px]">Ibadah dalam Genggaman</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Baca Qur'an */}
          <div className="glass rounded-3xl p-9 border border-white/10 hover:border-emerald-400/40 transition-all group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-7 text-4xl group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-3xl font-semibold tracking-tight mb-4">Baca Qur'an</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Mushaf digital lengkap dengan terjemahan, tafsir, dan mode baca yang nyaman.
            </p>
            <div className="inline-flex items-center text-emerald-400 font-medium">
              Buka Mushaf <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Dzikir Harian */}
          <div className="glass rounded-3xl p-9 border border-white/10 hover:border-emerald-400/40 transition-all group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-7 text-4xl group-hover:scale-110 transition-transform">📿</div>
            <h3 className="text-3xl font-semibold tracking-tight mb-4">Dzikir Harian</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Dzikir pagi, petang, dan setelah shalat dengan hitungan otomatis.
            </p>
            <div className="inline-flex items-center text-emerald-400 font-medium">
              Mulai Dzikir <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Qiblat Finder */}
          <div className="glass rounded-3xl p-9 border border-white/10 hover:border-emerald-400/40 transition-all group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-7 text-4xl group-hover:scale-110 transition-transform">🧭</div>
            <h3 className="text-3xl font-semibold tracking-tight mb-4">Qiblat Finder</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              Temukan arah kiblat secara akurat menggunakan GPS & sensor ponsel.
            </p>
            <div className="inline-flex items-center text-emerald-400 font-medium">
              Buka Qiblat <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Fitur Utama */}
      <section id="fitur-utama" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[4px] text-emerald-400 text-xs font-semibold mb-3">FITUR UTAMA</div>
          <h2 className="text-5xl font-semibold tracking-[-2.5px]">Semua yang Dibutuhkan Santri</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Job Street */}
          <div className="glass rounded-3xl p-10 border border-white/10 feature-card">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs tracking-widest text-emerald-400 font-semibold mb-2">KARIR & LOWONGAN</div>
                <h3 className="text-4xl font-semibold tracking-tight">Job Street</h3>
              </div>
              <div className="text-7xl opacity-75">💼</div>
            </div>
            <p className="text-[15px] text-white/75 leading-relaxed mb-9">
              Lowongan kerja khusus santri dan alumni pesantren. Dari guru ngaji, admin pesantren, hingga posisi profesional.
            </p>
            <button className="px-8 py-3.5 bg-white text-emerald-950 rounded-2xl font-semibold active:scale-[0.985] transition-all">
              Lihat Lowongan Kerja
            </button>
          </div>

          {/* Kursus Online */}
          <div className="glass rounded-3xl p-10 border border-white/10 feature-card">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs tracking-widest text-emerald-400 font-semibold mb-2">PENDIDIKAN</div>
                <h3 className="text-4xl font-semibold tracking-tight">Kursus Online</h3>
              </div>
              <div className="text-7xl opacity-75">🎓</div>
            </div>
            <p className="text-[15px] text-white/75 leading-relaxed mb-9">
              Kursus berkualitas dari ustadz dan pesantren ternama. Dapatkan sertifikat resmi.
            </p>
            <button className="px-8 py-3.5 bg-white text-emerald-950 rounded-2xl font-semibold active:scale-[0.985] transition-all">
              Jelajahi Kursus
            </button>
          </div>

          {/* Listing Pesantren */}
          <div className="glass rounded-3xl p-10 border border-white/10 feature-card">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs tracking-widest text-emerald-400 font-semibold mb-2">DATABASE PESANTREN</div>
                <h3 className="text-4xl font-semibold tracking-tight">Listing Pesantren</h3>
              </div>
              <div className="text-7xl opacity-75">🕌</div>
            </div>
            <p className="text-[15px] text-white/75 leading-relaxed mb-9">
              Temukan pesantren terbaik di seluruh Indonesia. Filter berdasarkan lokasi, jenjang, dan program.
            </p>
            <button className="px-8 py-3.5 bg-white text-emerald-950 rounded-2xl font-semibold active:scale-[0.985] transition-all">
              Cari Pesantren
            </button>
          </div>

          {/* Ta'aruf Online */}
          <div className="glass rounded-3xl p-10 border border-white/10 feature-card">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs tracking-widest text-emerald-400 font-semibold mb-2">PERNIKAHAN</div>
                <h3 className="text-4xl font-semibold tracking-tight">Ta'aruf Online</h3>
              </div>
              <div className="text-7xl opacity-75">❤️</div>
            </div>
            <p className="text-[15px] text-white/75 leading-relaxed mb-9">
              Platform ta'aruf yang aman, terverifikasi, dan sesuai syariat Islam.
            </p>
            <button className="px-8 py-3.5 bg-white text-emerald-950 rounded-2xl font-semibold active:scale-[0.985] transition-all">
              Mulai Ta'aruf
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="glass rounded-3xl p-14 md:p-16 text-center border border-white/10">
          <h2 className="text-5xl font-semibold tracking-[-2px] mb-5">Siap Menjadi Santri Modern?</h2>
          <p className="text-white/70 max-w-md mx-auto mb-9 text-lg">
            Bergabung dengan ribuan santri yang sudah menggunakan Mutqin Super App.
          </p>
          <button className="px-12 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-2xl text-lg font-semibold transition-all active:scale-[0.985]">
            Daftar Sekarang — 100% Gratis
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Mutqin Super App — Dibuat untuk Santri, Oleh Santri
      </footer>
    </div>
  );
}
