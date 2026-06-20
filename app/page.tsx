"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function MutqinSuperApp() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white overflow-hidden">
      {/* Vibrant Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a3a2e_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/60 via-[#0a0f1a] to-teal-950/40" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <span className="font-bold text-xl text-[#0a0f1a]">M</span>
            </div>
            <div className="font-semibold text-2xl tracking-tight">Mutqin</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 text-sm hover:bg-white/5 rounded-full transition-colors">
              Masuk
            </button>
            <button className="px-6 py-2.5 bg-white text-[#0a0f1a] rounded-full text-sm font-semibold hover:bg-white/90 active:scale-[0.985] transition-all">
              Daftar Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - More Dynamic */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 text-sm"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Platform Digital untuk Generasi Santri
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.8px] leading-[1.05] mb-6">
            Mutqin Super App<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              untuk Umat
            </span>
          </h1>

          <p className="max-w-lg mx-auto text-xl text-white/70 mb-10">
            Satu aplikasi modern untuk mendukung kehidupan santri di era digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('fitur-utama')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-2xl font-semibold text-lg active:scale-[0.985] transition-all"
            >
              Jelajahi Fitur
            </button>
            <button className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl font-medium text-lg transition-all active:scale-[0.985]">
              Tonton Video
            </button>
          </div>
        </div>
      </section>

      {/* Fitur Harian - More Colorful */}
      <section id="fitur-harian" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <div className="text-emerald-400 tracking-[3px] text-xs font-semibold mb-3">IBADAH SEHARI-HARI</div>
          <h2 className="text-5xl font-semibold tracking-tight">Ibadah dalam Genggaman</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📖", title: "Baca Qur'an", desc: "Mushaf digital dengan terjemahan & tafsir yang nyaman dibaca." },
            { icon: "📿", title: "Dzikir Harian", desc: "Dzikir pagi, petang, dan setelah shalat dengan hitungan otomatis." },
            { icon: "🧭", title: "Qiblat Finder", desc: "Temukan arah kiblat secara akurat menggunakan sensor ponsel." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-3xl font-semibold tracking-tight mb-4">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 Fitur Utama - More Dynamic & Colorful */}
      <section id="fitur-utama" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <div className="text-emerald-400 tracking-[3px] text-xs font-semibold mb-3">4 FITUR UTAMA</div>
          <h2 className="text-5xl font-semibold tracking-[-2px]">Semua yang Dibutuhkan Santri</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[ 
            { 
              icon: "💼", 
              title: "Job Street", 
              category: "KARIR", 
              desc: "Lowongan kerja khusus santri & alumni pesantren dari berbagai bidang.",
              color: "from-emerald-500/20 to-teal-500/10"
            },
            { 
              icon: "🎓", 
              title: "Kursus Online", 
              category: "PENDIDIKAN", 
              desc: "Kursus berkualitas dari ustadz dan pesantren ternama dengan sertifikat resmi.",
              color: "from-blue-500/20 to-cyan-500/10"
            },
            { 
              icon: "🕌", 
              title: "Listing Pesantren", 
              category: "PESANTREN", 
              desc: "Database lengkap pesantren di seluruh Indonesia dengan filter lengkap.",
              color: "from-amber-500/20 to-yellow-500/10"
            },
            { 
              icon: "❤️", 
              title: "Ta'aruf Online", 
              category: "PERNIKAHAN", 
              desc: "Platform ta'aruf yang aman, terverifikasi, dan sesuai syariat Islam.",
              color: "from-rose-500/20 to-pink-500/10"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -6 }}
              className={`p-9 rounded-3xl border border-white/10 bg-gradient-to-br ${feature.color} backdrop-blur-xl group cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xs tracking-widest text-white/60 font-semibold mb-2">{feature.category}</div>
                  <h3 className="text-4xl font-semibold tracking-tight group-hover:text-white transition-colors">{feature.title}</h3>
                </div>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform">{feature.icon}</div>
              </div>
              <p className="text-white/80 text-[15px] leading-relaxed mb-8">{feature.desc}</p>
              <button className="px-7 py-3 rounded-2xl bg-white/90 text-[#0a0f1a] font-semibold text-sm active:scale-[0.985] transition-all">
                Buka Fitur
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-3xl p-14 md:p-16 text-center bg-gradient-to-br from-emerald-600/30 to-teal-600/20 border border-white/10">
          <h2 className="text-5xl font-semibold tracking-[-2px] mb-5">Siap Menjadi Santri Modern?</h2>
          <p className="text-white/70 max-w-md mx-auto mb-9 text-lg">
            Bergabung dengan ribuan santri yang sudah menggunakan Mutqin Super App.
          </p>
          <button className="px-12 py-4 bg-white text-[#0a0f1a] rounded-2xl font-semibold text-lg active:scale-[0.985] transition-all">
            Daftar Sekarang — Gratis
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Mutqin Super App — Untuk Santri, Oleh Santri
      </footer>
    </div>
  );
}
