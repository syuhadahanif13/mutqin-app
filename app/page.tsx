"use client";

import React from 'react';

export default function MutqinHome() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2937]">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 sticky top-0 z-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Assalamualaikum,</p>
            <h1 className="text-2xl font-semibold">Ahmad Fauzan</h1>
          </div>
          <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
            👤
          </div>
        </div>

        {/* Balance / Poin Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm">Mutqin Poin</p>
              <p className="text-4xl font-semibold tracking-tight mt-1">12.480</p>
            </div>
            <div className="text-right">
              <div className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                Level 7
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs text-emerald-100">
            +340 poin minggu ini
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 pb-24">
        {/* Quick Access - 4 Fitur Utama */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-semibold text-lg">Fitur Utama</h2>
            <button className="text-emerald-600 text-sm font-medium">Lihat Semua</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Job Street */}
            <div className="bg-white rounded-3xl p-5 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-3xl">💼</div>
              <h3 className="font-semibold text-lg">Job Street</h3>
              <p className="text-sm text-gray-500 mt-1">128 lowongan baru</p>
            </div>

            {/* Kursus Online */}
            <div className="bg-white rounded-3xl p-5 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4 text-3xl">🎓</div>
              <h3 className="font-semibold text-lg">Kursus Online</h3>
              <p className="text-sm text-gray-500 mt-1">42 kursus tersedia</p>
            </div>

            {/* Listing Pesantren */}
            <div className="bg-white rounded-3xl p-5 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-4 text-3xl">🕌</div>
              <h3 className="font-semibold text-lg">Listing Pesantren</h3>
              <p className="text-sm text-gray-500 mt-1">1.284 pesantren</p>
            </div>

            {/* Ta'aruf Online */}
            <div className="bg-white rounded-3xl p-5 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center mb-4 text-3xl">❤️</div>
              <h3 className="font-semibold text-lg">Ta'aruf Online</h3>
              <p className="text-sm text-gray-500 mt-1">234 aktif</p>
            </div>
          </div>
        </div>

        {/* Fitur Harian */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-semibold text-lg">Ibadah Hari Ini</h2>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl flex-shrink-0">📖</div>
              <div className="flex-1">
                <h4 className="font-semibold">Baca Qur'an</h4>
                <p className="text-sm text-gray-500">Terakhir baca: Surah Al-Kahfi</p>
              </div>
              <div className="text-emerald-600 text-sm font-medium">Lanjutkan →</div>
            </div>

            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl flex-shrink-0">📿</div>
              <div className="flex-1">
                <h4 className="font-semibold">Dzikir Harian</h4>
                <p className="text-sm text-gray-500">Sudah 18x hari ini</p>
              </div>
              <div className="text-emerald-600 text-sm font-medium">Buka →</div>
            </div>

            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm active:scale-[0.985] transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl flex-shrink-0">🧭</div>
              <div className="flex-1">
                <h4 className="font-semibold">Qiblat Finder</h4>
                <p className="text-sm text-gray-500">Arah: 292°</p>
              </div>
              <div className="text-emerald-600 text-sm font-medium">Buka →</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-semibold text-lg">Highlights</h2>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-500">Prestasi Minggu Ini</p>
                <p className="font-semibold mt-1">Khatam 1 Juz</p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 text-xs">
        <div className="flex flex-col items-center text-emerald-600">
          <span className="text-xl mb-0.5">🏠</span>
          <span>Beranda</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl mb-0.5">🔍</span>
          <span>Jelajah</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl mb-0.5">💬</span>
          <span>Komunitas</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl mb-0.5">👤</span>
          <span>Profil</span>
        </div>
      </div>
    </div>
  );
}
