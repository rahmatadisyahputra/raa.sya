'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alex.growth.danuarta@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800">
      {/* TOP STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Left: Brand / Name */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse"></div>
              <a className="flex items-center gap-2 group" href="#">
                <span className="font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                  Rahmat Adi Syahputra
                </span>
                <span className="text-slate-300">/</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200 hidden sm:inline-block">
                  Ex-Growth Intern
                </span>
              </a>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
              <a className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" href="#about">
                Tentang
              </a>
              <a className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" href="#tech-stack">
                Keahlian
              </a>
              <a className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" href="#projects">
                Proyek Nyata
              </a>
              <a className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" href="#methodology">
                Metodologi
              </a>
              <a className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" href="#contact">
                Kontak
              </a>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                href="#resume"
              >
                <span className="text-brand-600">[</span>Unduh CV<span className="text-brand-600">]</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow transition-all"
                href="#contact"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">trending_up</span>
                <span>Diskusi Peluang</span>
              </a>
              {/* Mobile Hamburger Menu Button */}
              <button
                aria-label="Toggle navigation"
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-slate-100" id="mobile-menu">
              <div className="flex flex-col space-y-1">
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tentang &amp; Pengalaman
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href="#tech-stack"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Keahlian &amp; Tooling
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proyek Pertumbuhan (Case Studies)
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href="#methodology"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Growth Framework
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href="#resume"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Laporan Magang &amp; CV
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-semibold text-brand-600 hover:bg-brand-50"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hubungi Langsung
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="w-full bg-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-12 sm:py-16 lg:py-20 border-b border-slate-200/60">
          {/* Subtle Decorative Radial Light Gradients */}
          <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="pointer-events-none absolute top-1/2 -left-20 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            {/* Pre-headline Availability Badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-mono tracking-wide uppercase">
                SELESAI MAGANG 5 BULAN • TERBUKA UNTUK FULL-TIME GROWTH / PRODUCT ANALYST
              </span>
            </div>

            {/* Main Headline & Subheadline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 text-brand-700 font-mono text-xs font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>5-Month Growth Analyst Internship Highlights</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Mendorong Pertumbuhan Produk &amp; Retensi Melalui{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-emerald-600">
                    Analitika Data Eksperimental.
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
                  Portofolio hasil magang 5 bulan sebagai Growth Analyst. Mengoptimalkan conversion funnel, membedah cohort retention, merancang eksperimen A/B test, dan mentranslasikan jutaan log aktivitas pengguna menjadi rekomendasi pertumbuhan bisnis yang terukur.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    className="inline-flex items-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm shadow-sm hover:shadow transition-all"
                    href="#projects"
                  >
                    <span>Lihat Proyek Pertumbuhan</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm border border-slate-300 shadow-xs transition-all"
                    href="#contact"
                  >
                    <span>Diskusi Peluang Karir</span>
                    <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-600 hover:text-brand-700 font-mono text-xs font-semibold transition-colors sm:ml-auto"
                    href="#resume"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Unduh Laporan Magang / CV</span>
                  </a>
                </div>
              </div>

              {/* Terminal Telemetry Card */}
              <div className="lg:col-span-4 w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-medium">growth::telemetry</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 font-mono text-xs space-y-2 text-slate-700 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">&gt; exp.significance</span>
                    <span className="text-brand-700 font-semibold">p-value &lt; 0.01 (99% conf)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">&gt; activation.lift</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                      +18.4% Uplift
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">&gt; cohort.retention</span>
                    <span className="text-teal-700 font-semibold">W4 +8.6% Stabilized</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">&gt; churn.warning</span>
                    <span className="text-indigo-700 font-semibold">-11.2% Drop</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between px-1">
                  <span>Status: Experiment Verified</span>
                  <span className="text-emerald-600 font-medium">● Operational</span>
                </div>
              </div>
            </div>

            {/* Hero Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-brand-700 uppercase tracking-wider">
                    [INTERNSHIP.TENURE]
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">5 Bulan</div>
                  <div className="text-xs text-slate-500 mt-1">Durasi Magang Intensif di Fast-Growing Tech Startup</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    [EXPERIMENTS.RUN]
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">experiment</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">12+ Eksperimen A/B</div>
                  <div className="text-xs text-slate-500 mt-1">Dijalankan di Acquisition &amp; Retention Funnel</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-3 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-teal-700 uppercase tracking-wider">
                    [ACTIVATION.CONV]
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">+18.4%</span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      Net Lift
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Peningkatan Konversi Registrasi ke Transaksi Pertama (Activation)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME & INTERNSHIP OVERVIEW SECTION */}
        <section className="w-full bg-slate-50/60 py-16 sm:py-20 border-b border-slate-200/80" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand-700 tracking-widest uppercase">
                  // 01. KILAS MAGANG &amp; PENDEKATAN ANALITIK
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tentang Pengalaman Magang</h2>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Sinergi Product, Marketing, dan Engineering
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs self-start md:self-auto">
                  growth_method = DataScience ∩ ProductStrategy ∩ Experimentation
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="methodology">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 font-mono font-bold text-sm">
                      01
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Eksplorasi Data &amp; Diagnostik Funnel</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Selama 5 bulan magang, saya memposisikan diri di garda depan analisis kuantitatif: terbiasa menggali SQL query kompleks, merancang taksonomi dan pelacakan event analitik (Mixpanel/GA4/Amplitude), serta membedah drop-off rate pada alur orientasi pengguna (user onboarding) untuk menemukan friksi tak kasat mata.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-mono font-bold text-sm">
                      02
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Eksperimen Berbasis Hipotesis (Growth Sprints)</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Saya secara aktif memfasilitasi ideasi eksperimen bersama Product Manager &amp; tim Marketing, merancang varian pengujian A/B, menghitung statistical power dan significance (p-value), serta memvalidasi dampak bisnis nyata bukan sekadar vanity metrics. Pendekatan ini memastikan setiap keputusan peluncuran fitur didukung oleh data teruji.
                  </p>
                </div>
              </div>

              {/* Growth Framework Visual Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-900 uppercase">GROWTH ENGINE FRAMEWORK</span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-semibold">
                    5-STAGE DISCOVERY LOOP
                  </span>
                </div>

                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                      <span className="text-slate-900 font-semibold">1. Tracking Event Schema</span>
                    </div>
                    <span className="text-slate-500 text-[11px]">Taxonomy • Amplitude</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                      <span className="text-slate-900 font-semibold">2. Funnel &amp; Drop-off Diagnostic</span>
                    </div>
                    <span className="text-slate-500 text-[11px]">BigQuery SQL • Cohort</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                      <span className="text-slate-900 font-semibold">3. Hypothesis &amp; ICE Matrix</span>
                    </div>
                    <span className="text-emerald-700 font-medium text-[11px]">Impact • Conf • Ease</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                      <span className="text-slate-900 font-semibold">4. A/B Testing Execution</span>
                    </div>
                    <span className="text-slate-500 text-[11px]">VWO • SRM Guard</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </div>
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                      <span className="text-emerald-900 font-bold">5. Cohort Impact &amp; Rollout</span>
                    </div>
                    <span className="text-emerald-700 font-semibold text-[11px]">Retention Lift</span>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-[11px] space-y-1 shadow-inner mt-1">
                  <div className="text-slate-400"># verify experiment hypothesis statistical lift</div>
                  <div className="text-slate-200">
                    <span className="text-emerald-400">verify_experiment</span>(<span className="text-sky-300">variant_b</span>, metric=<span className="text-amber-300">&apos;activation_rate&apos;</span>, alpha=0.05)
                  </div>
                  <div className="text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                    &gt; p_val: 0.0034 | SRM Check: PASS | Lift: +22.6% (Significant)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK & CORE COMPETENCIES SECTION */}
        <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/80" id="tech-stack">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span class="font-mono text-xs font-bold text-emerald-700 uppercase tracking-widest">// 02. KEAHLIAN INTI</span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack &amp; Core Competencies</h2>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Tooling &amp; Metodologi Pertumbuhan Produk
                  </p>
                </div>
                <p className="text-sm text-slate-600 max-w-md">
                  Kombinasi analisis produk, manipulasi data masif, uji coba statistik, dan data storytelling untuk eksekutif.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xs hover:shadow-md transition-all hover:border-brand-200">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                      <span className="font-mono text-xs font-bold text-brand-700 uppercase">PRODUCT ANALYTICS &amp; TRACKING</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">BEHAVIOR INSIGHTS</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Product Analytics &amp; Tracking</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Fokus:</span> Funnel analysis, user session replay, event taxonomy design, drop-off mapping, dan behavioral segmentation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">TEKNOLOGI:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Mixpanel', 'Amplitude', 'Google Analytics 4', 'Segment', 'PostHog', 'Hotjar'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xs hover:shadow-md transition-all hover:border-emerald-200">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                      <span className="font-mono text-xs font-bold text-emerald-700 uppercase">DATA WRANGLING &amp; MODELING</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">ADVANCED QUERIES</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Data Wrangling &amp; Modeling</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Fokus:</span> Cohort retention queries, LTV &amp; CAC calculation, window functions, data cleaning, serta automated data transformation pipeline.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">TEKNOLOGI:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['SQL (PostgreSQL)', 'BigQuery', 'Python (Pandas)', 'dbt', 'DuckDB', 'Jupyter'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xs hover:shadow-md transition-all hover:border-indigo-200">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                      <span className="font-mono text-xs font-bold text-indigo-700 uppercase">EXPERIMENTATION &amp; STATISTICS</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">95%-99% POWER</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Experimentation &amp; Statistics</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Fokus:</span> A/B Testing design, minimum detectable effect (MDE) sizing, sample ratio mismatch (SRM) checks, hypothesis testing, dan ROI impact validation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">TEKNOLOGI:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['A/B Testing', 'Hypothesis Testing', 'Statsmodels', 'Optimizely', 'VWO', 'Firebase A/B'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xs hover:shadow-md transition-all hover:border-teal-200">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                      <span className="font-mono text-xs font-bold text-teal-700 uppercase">BI &amp; DATA STORYTELLING</span>
                    </div>
                    <span className="font-mono text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      LIVE REPORTING
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">BI Dashboarding &amp; Data Storytelling</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Fokus:</span> Executive weekly business review dashboards (WBR), cohort retention heatmaps, Pirate Metrics monitoring (AARRR), dan visual storytelling.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">TEKNOLOGI:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Tableau', 'Metabase', 'Power BI', 'Looker Studio', 'Google Sheets', 'Advanced Excel'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION (CASE STUDIES) */}
        <section className="w-full bg-slate-50/70 py-16 sm:py-20 border-b border-slate-200/80" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-brand-700 uppercase tracking-widest">
                // 03. STUDI KASUS HASIL MAGANG
              </span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Growth Projects</h2>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    4 Proyek Nyata &amp; Dampak Terukur Magang 5 Bulan
                  </p>
                </div>
                <p className="text-sm text-slate-600 max-w-md">
                  Eksperimen nyata yang diimplementasikan pada live product dengan validasi statistik dan metriks bisnis riil.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Project 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 font-mono text-xs font-bold border border-brand-200">
                      Product Growth / Acquisition
                    </span>
                    <span className="text-slate-400 font-mono text-xs font-semibold">[EXP-01]</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
                    ACTIVATION FUNNEL // SIGNIFICANT
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Onboarding Funnel Optimization &amp; Activation Leap
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Optimasi end-to-end alur pendaftaran pengguna baru untuk mempercepat time-to-first-value dan meminimalkan friksi registrasi awal.
                      </p>
                      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col gap-2.5 mt-2 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono font-bold text-rose-600">PROBLEM: </span>
                          <span className="text-slate-700">
                            Sebanyak 42% pengguna baru gugur pada langkah verifikasi profil di onboarding flow, menghambat konversi aktivasi pengguna.
                          </span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-emerald-700">SOLUTION: </span>
                          <span className="text-slate-700">
                            Mendiagnosis bottleneck melalui Amplitude &amp; SQL, mengusulkan &apos;progressive profiling&apos; serta merancang dan menguji varian A/B 2-step onboarding.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {['SQL (BigQuery)', 'Amplitude', 'Mixpanel', 'Figma', 'Google Optimize'].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-brand-50/30 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-2xs">
                    <span className="font-mono text-xs font-bold text-brand-800 uppercase tracking-wider">KEY IMPACT / RESULTS</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">+22.6% ↑</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Activation Rate Uplift</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl sm:text-4xl font-extrabold text-brand-700">35% ↓</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Time-to-First-Value Dipangkas</div>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Statistical Significance</span>
                      <span className="text-emerald-700 font-bold">99% Confidence (p &lt; 0.01)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
                      Retention &amp; Engagement
                    </span>
                    <span className="text-slate-400 font-mono text-xs font-semibold">[EXP-02]</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200 self-start sm:self-auto">
                    RETENTION COHORT // ML CLUSTERING
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        User Churn Early Warning &amp; Cohort Retention Revamp
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Investigasi mendalam pada retensi pelanggan segmen UKM dan pembentukan sinyal inaktivitas otomatis sebelum terjadi churn.
                      </p>
                      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col gap-2.5 mt-2 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono font-bold text-rose-600">PROBLEM: </span>
                          <span className="text-slate-700">
                            Terjadi penurunan tajam pada W3 (Week-3) retention rate segmen UKM tanpa pola churn yang terpetakan dengan jelas oleh tim retensi.
                          </span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-emerald-700">SOLUTION: </span>
                          <span className="text-slate-700">
                            Melakukan cohort analysis mendalam dan membangun model clustering RFM berbasis SQL &amp; Python untuk mendeteksi sinyal inaktivitas awal sebelum churn terjadi.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {['Python (Pandas)', 'Scikit-Learn', 'PostgreSQL', 'Metabase', 'dbt'].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-2xs">
                    <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">KEY IMPACT / RESULTS</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">11.2% ↓</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Penurunan Churn Rate Bulanan</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl sm:text-4xl font-extrabold text-brand-700">Rp 140 Jt</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Estimasi ARR Diselamatkan</div>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Actionable Trigger</span>
                      <span className="text-emerald-700 font-bold">Automated Re-engagement Email</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 font-mono text-xs font-bold border border-indigo-200">
                      Revenue Growth / A/B Testing
                    </span>
                    <span className="text-slate-400 font-mono text-xs font-semibold">[EXP-03]</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded self-start sm:self-auto">
                    A/B TEST • PRICING ANCHORING
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Pricing Page Experimentation &amp; Conversion Uplift
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Rancangan eksperimen harga dan perbandingan fitur berlangganan untuk meningkatkan Annual Contract Value (ACV).
                      </p>
                      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col gap-2.5 mt-2 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono font-bold text-rose-600">PROBLEM: </span>
                          <span className="text-slate-700">
                            Bounce rate pada halaman checkout subscription mencapai 58% dengan konversi ke tier tahunan yang sangat rendah (&lt;8%).
                          </span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-emerald-700">SOLUTION: </span>
                          <span className="text-slate-700">
                            Merancang A/B test pricing tier dengan visual anchoring, perbandingan fitur interaktif, dan social proof badge terverifikasi.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {['Google Analytics 4', 'VWO', 'BigQuery', 'Statsmodels (Python)'].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-2xs">
                    <span className="font-mono text-xs font-bold text-indigo-800 uppercase tracking-wider">KEY IMPACT / RESULTS</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-indigo-700">+16.8% ↑</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Konversi Langganan Tahunan</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">99%</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Confidence Level (p &lt; 0.01)</div>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Checkout Bounce Rate</span>
                      <span className="text-indigo-800 font-bold">Turun dari 58% ke 39%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 font-mono text-xs font-bold border border-teal-200">
                      Business Intelligence &amp; Operations
                    </span>
                    <span className="text-slate-400 font-mono text-xs font-semibold">[EXP-04]</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 self-start sm:self-auto">
                    PIRATE METRICS // AIRFLOW LIVE
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Automated Executive Growth Dashboard &amp; KPI Monitor
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Penyusunan dashboard performa terintegrasi untuk menyajikan metrik AARRR (Acquisition, Activation, Retention, Revenue, Referral) secara live.
                      </p>
                      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col gap-2.5 mt-2 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono font-bold text-rose-600">PROBLEM: </span>
                          <span className="text-slate-700">
                            Tim manajemen membutuhkan 3 hari setiap akhir pekan untuk mengompilasi KPI mingguan (CAC, LTV, MoM Active Users) secara manual via Excel.
                          </span>
                        </div>
                        <div>
                          <span className="font-mono font-bold text-emerald-700">SOLUTION: </span>
                          <span className="text-slate-700">
                            Mengembangkan automated dashboard terintegrasi di Metabase &amp; dbt yang menyajikan pipeline metrik Pirate Metrics (AARRR) secara live dengan Slack anomaly alerts.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {['Metabase', 'dbt', 'BigQuery', 'Apache Airflow', 'Slack Webhook Alerts'].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-2xs">
                    <span className="font-mono text-xs font-bold text-teal-800 uppercase tracking-wider">KEY IMPACT / RESULTS</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">15+ Jam</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Hemat Kerja Manual / Minggu</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl sm:text-4xl font-extrabold text-brand-700">Real-time</div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">Dari Latensi 3 Hari Sebelumnya</div>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Executive Adoption</span>
                      <span className="text-teal-800 font-bold">Dipakai Rutin di WBR C-Level</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & COLLABORATION SECTION */}
        <section className="w-full bg-white py-16 sm:py-20" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-brand-700 uppercase tracking-widest">
                // 04. INISIASI KERJASAMA &amp; REKRUTMEN
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Siap Memberikan Dampak Nyata Berbasis Data untuk Tim Anda?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Dengan modal pengalaman magang 5 bulan yang intensif di garis depan eksperimen pertumbuhan produk, saya siap berkontribusi penuh sebagai Growth Analyst / Product Data Analyst full-time. Mari berdiskusi tentang bagaimana saya dapat mengoptimalkan metrik pertumbuhan produk Anda.
                </p>

                <div className="flex flex-col gap-3">
                  {/* Email Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          EMAIL DIRECT
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900" id="email-address">
                          alex.growth.danuarta@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold hover:bg-slate-100 transition-colors"
                        onClick={handleCopyEmail}
                        type="button"
                      >
                        {copiedEmail ? 'Tersalin!' : 'Salin'}
                      </button>
                      <a
                        className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-mono text-xs font-semibold transition-colors"
                        href="mailto:alex.growth.danuarta@gmail.com"
                      >
                        Kirim Email
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Card */}
                  <a
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-2xs hover:bg-slate-100 hover:border-slate-300 transition-all group"
                    href="https://linkedin.com/in/alex-danuarta-growth"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          LINKEDIN PROFILE
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          linkedin.com/in/alex-danuarta-growth
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 transition-colors text-[20px]">
                      open_in_new
                    </span>
                  </a>

                  {/* GitHub Repo Card */}
                  <a
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-2xs hover:bg-slate-100 hover:border-slate-300 transition-all group"
                    href="https://github.com/alex-danuarta-analytics"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 text-brand-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">code</span>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          ANALYTICS &amp; SQL REPO
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          github.com/alex-danuarta-analytics
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 transition-colors text-[20px]">
                      open_in_new
                    </span>
                  </a>

                  {/* CV / Report Download */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-2xs" id="resume">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          DOKUMEN RESUME &amp; LAPORAN MAGANG
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-900">
                          Unduh CV &amp; Case Study PDF (Terbaru)
                        </span>
                      </div>
                    </div>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold flex items-center gap-1 transition-colors"
                      download=""
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-base sm:text-lg font-bold text-slate-900">Hubungi Saya Terkait Peluang Kerja</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-brand-50 border border-brand-200 text-brand-700 font-mono text-[11px] font-bold">
                    HIRING // DIRECT
                  </span>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">NAMA / PERUSAHAAN</label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder:text-slate-400 shadow-2xs"
                      placeholder="cth. Tim Talenta / Tech Startup XYZ"
                      required
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">ALAMAT EMAIL</label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder:text-slate-400 shadow-2xs"
                      placeholder="recruiter@startup.com"
                      required
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">PERAN / KEBUTUHAN POSISI</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors shadow-2xs">
                      <option value="growth-analyst">Full-Time Growth Analyst</option>
                      <option value="product-analyst">Full-Time Product Data Analyst</option>
                      <option value="business-analyst">Data / Business Intelligence Analyst</option>
                      <option value="consulting">Growth Consultation / Funnel Audit</option>
                      <option value="other">Peluang Kolaborasi Lainnya</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">PESAN / DETAIL PELUANG</label>
                    <textarea
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder:text-slate-400 resize-none shadow-2xs"
                      placeholder="Ceritakan tentang tim, misi pertumbuhan, atau jadwal wawancara..."
                      required
                      rows={4}
                    ></textarea>
                  </div>

                  <button
                    className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 mt-1"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Kirim Pesan Peluang</span>
                  </button>

                  {formSubmitted && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs flex items-center gap-2" id="form-feedback">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Terima kasih! Pesan Anda telah terkirim langsung ke inbox Alex Danuarta.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-slate-50 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-slate-900">GROWTH.ALEX</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-semibold">
                AVAILABLE // FULL-TIME
              </span>
            </div>
            <p className="text-xs text-slate-500 text-center md:text-left">
              © 2025 Alex Danuarta. 5-Month Growth Analyst Internship Portfolio. Data-driven experimentation &amp; retention strategy.
            </p>
          </div>

          {/* Skills Tag Pills */}
          <div className="flex items-center flex-wrap justify-center gap-1.5">
            {['Amplitude', 'SQL / BigQuery', 'A/B Testing', 'Metabase', 'Python'].map((s) => (
              <span key={s} className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-600 font-mono text-[11px]">
                {s}
              </span>
            ))}
          </div>

          {/* Footer Quick Socials */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a className="text-slate-600 hover:text-brand-600 transition-colors" href="https://github.com/alex-danuarta-analytics" rel="noreferrer" target="_blank">
              gh/analytics
            </a>
            <a className="text-slate-600 hover:text-brand-600 transition-colors" href="https://linkedin.com/in/alex-danuarta-growth" rel="noreferrer" target="_blank">
              in/alex-growth
            </a>
            <a className="text-slate-600 hover:text-emerald-700 transition-colors" href="#contact">
              growth/mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
