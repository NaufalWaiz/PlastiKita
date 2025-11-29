"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Question = {
  id: number;
  question: string;
  context?: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Prinsip mana yang paling berdampak untuk menekan plastik sekali pakai?",
    context: "Ingat urutan reduce, reuse, recycle.",
    options: [
      "Reduce: menolak dan mengurangi sebelum membeli",
      "Reuse: hanya memakai ulang plastik sekali pakai",
      "Recycle: mencampur semua sampah lalu diserahkan",
      "Replace: mengganti plastik dengan styrofoam",
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "Kebiasaan harian yang paling sederhana untuk menekan konsumsi botol plastik adalah?",
    options: [
      "Menggunakan air galon isi ulang dengan tumbler pribadi",
      "Merebus botol PET sekali pakai agar bisa dipakai kembali",
      "Menyimpan stok botol plastik baru di kantor",
      "Membeli air mineral ukuran kecil supaya cepat habis",
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    question: "Bagaimana perlakuan terbaik untuk plastik bernomor 1 (PET)?",
    options: [
      "Dipakai ulang berulang kali untuk air panas",
      "Langsung dibakar agar cepat habis",
      "Dikumpulkan bersih kering lalu disetor ke drop box daur ulang",
      "Dicampur dengan sampah organik supaya cepat terurai",
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "Mengapa membawa tas belanja kain (BYOB) penting dalam kampanye ini?",
    options: [
      "Tas kain membuat belanja lebih mahal",
      "Mengurangi permintaan kresek sekali pakai di kasir",
      "Tas kain hanya tren media sosial",
      "Karena kresek sulit dibawa",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Catatan apa yang sebaiknya ditulis saat pesan makan daring untuk menghindari plastik?",
    options: [
      "Tambah sendok dan garpu plastik",
      "Tanpa sambal dan tanpa minuman",
      "Tanpa sendok/garpu, tanpa sedotan, dan kurangi plastik pembungkus",
      "Minta kantong plastik terpisah",
    ],
    correctIndex: 2,
  },
  {
    id: 6,
    question: "Apa dampak mikroplastik bagi lingkungan dan manusia?",
    options: [
      "Tidak berdampak karena ukurannya sangat kecil",
      "Dapat masuk rantai makanan dan mengganggu kesehatan ekosistem serta manusia",
      "Mempercepat pertumbuhan plankton di laut",
      "Menyuburkan tanah di area pertanian",
    ],
    correctIndex: 1,
  },
  {
    id: 7,
    question: "Jika komunitas ingin membuat tantangan 30 hari minim plastik, langkah awal yang realistis adalah?",
    options: [
      "Langsung melarang semua kemasan plastik dalam semalam",
      "Mencatat penggunaan plastik harian lalu mengganti satu item sekali pakai setiap minggu",
      "Menyimpan semua plastik dan tidak dipilah",
      "Membeli stok plastik untuk cadangan",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "Apa manfaat memilah organik dan anorganik untuk program daur ulang?",
    options: [
      "Mengurangi kontaminasi sehingga plastik tetap bernilai daur ulang",
      "Membuat tempat sampah lebih cepat penuh",
      "Tidak berpengaruh pada daur ulang plastik",
      "Hanya menambah pekerjaan rumah tangga",
    ],
    correctIndex: 0,
  },
  {
    id: 9,
    question: "Bagaimana cara terbaik mendukung bank sampah atau drop point terdekat?",
    options: [
      "Mengirim sampah campur lalu meminta dipilah di lokasi",
      "Mengirimkan plastik dalam keadaan bersih, kering, dan dipadatkan",
      "Mengirimkan sampah organik untuk ditukar poin",
      "Melempar sampah dari jauh agar lebih cepat",
    ],
    correctIndex: 1,
  },
  {
    id: 10,
    question: "Produk mana yang paling sejalan dengan konsep isi ulang (refill) untuk mengurangi plastik?",
    options: [
      "Membeli air dalam botol sekali pakai",
      "Menggunakan sabun isi ulang di gerai bulk store",
      "Membungkus ulang produk dengan plastik baru",
      "Mengganti isi ulang dengan sachet kecil",
    ],
    correctIndex: 1,
  },
];

const passThreshold = 5;

export default function QuizPage() {
  const [answers, setAnswers] = useState<number[]>(() => Array(questions.length).fill(-1));
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer !== -1).length,
    [answers],
  );

  const score = useMemo(
    () =>
      answers.reduce((total, answer, index) => {
        return answer === questions[index].correctIndex ? total + 1 : total;
      }, 0),
    [answers],
  );

  const passed = finished && score > passThreshold;
  const currentQuestion = questions[currentIndex];

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  };

  const handleStart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setStarted(true);
    setFinished(false);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const handleFinish = () => {
    if (answeredCount !== questions.length) {
      const firstUnanswered = answers.findIndex((answer) => answer === -1);
      setCurrentIndex(firstUnanswered === -1 ? currentIndex : firstUnanswered);
      return;
    }
    setFinished(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(-1));
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ec] via-white to-[#f1f5e8] text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-24 sm:px-10 sm:pt-28">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#88a825]">
              Quiz Interaktif
            </p>
            <h1 className="font-sora text-3xl font-semibold sm:text-4xl">
              Uji Komitmen Kurangi Limbah Plastik
            </h1>
            <p className="text-base text-slate-700 sm:text-lg">
              Sepuluh soal pilihan ganda bertema hidup minim plastik. Jawab satu per satu, lalu lihat ringkasan skor akhir.
            </p>
          </div>
          <Link
            href="/"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-[#dbe9b0] bg-gradient-to-r from-white via-[#f7fde8] to-white px-5 py-3 text-sm font-semibold text-[#2f3f0f] shadow-[0_12px_28px_rgba(63,79,19,0.12)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(63,79,19,0.16)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#cfe6a5] focus:ring-offset-2 focus:ring-offset-white"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,#e8f5c8,transparent_35%),radial-gradient(circle_at_80%_0%,#fdf7dc,transparent_25%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#f0f7df] text-base text-[#3f4f13] shadow-inner transition-transform duration-200 group-hover:-translate-x-[2px]">
              {"<"}
            </span>
            <span className="relative leading-tight transition-colors duration-200 group-hover:text-[#1f2d0a]">
              Kembali
            </span>
          </Link>
        </header>

        {!started ? (
          <section className="grid gap-5 sm:grid-cols-[1.1fr,0.9fr] sm:items-center">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_48px_rgba(63,79,19,0.08)] backdrop-blur">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f0f7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#4a5f18]">
                  Mulai dari sini
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Siap bergabung dalam tantangan minim plastik?
                </h2>
                <p className="text-sm text-slate-700 sm:text-base">
                  Kamu akan menjawab 10 soal. Setelah pertanyaan terakhir, hasil benar-salah dan status lulus akan ditampilkan.
                </p>
                <div className="grid gap-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2 rounded-xl bg-[#f5f9ec] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#f9a826]" />
                    Jawaban benar lebih dari {passThreshold} = Berhasil.
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f5f9ec] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#88a825]" />
                    Soal muncul satu per satu, kamu bisa mundur untuk koreksi.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleStart}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f9a826] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_36px_rgba(249,168,38,0.35)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(249,168,38,0.4)]"
                  >
                    Mulai quiz sekarang
                  </button>
                  <span className="flex items-center text-sm text-slate-600">
                    Total soal: {questions.length}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_48px_rgba(63,79,19,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#88a825]">Tips cepat</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>- Prioritaskan reduce dan reuse sebelum recycle.</li>
                <li>- Pastikan plastik bersih, kering, dan dipadatkan sebelum disetor.</li>
                <li>- Catat kebiasaan plastik harian untuk melihat kemajuan.</li>
                <li>- Ajak teman kantor atau kampus ikut tantangan minim plastik.</li>
              </ul>
            </div>
          </section>
        ) : null}

        {started && !finished ? (
          <section className="grid gap-5 sm:grid-cols-[1.1fr,0.9fr] sm:items-start">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_48px_rgba(63,79,19,0.08)] backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f0f7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a5f18]">
                    Soal {currentIndex + 1} / {questions.length}
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{currentQuestion.question}</p>
                  {currentQuestion.context ? (
                    <p className="text-sm text-slate-600">{currentQuestion.context}</p>
                  ) : null}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:mt-0">
                  <span className="h-2 w-2 rounded-full bg-[#f9a826]" />
                  Pilih satu jawaban
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isSelected = answers[currentIndex] === optionIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(currentIndex, optionIndex)}
                      className={[
                        "flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition",
                        "hover:border-[#88a825]/70 hover:shadow-sm",
                        isSelected ? "border-[#88a825] bg-[#f5f9ec]" : "border-slate-200 bg-white",
                      ].join(" ")}
                      aria-pressed={isSelected}
                    >
                      <span
                        className={[
                          "mt-1 grid h-6 w-6 place-items-center rounded-full border text-xs font-bold",
                          isSelected ? "border-[#88a825] bg-[#f5f9ec] text-[#3f4f13]" : "border-slate-300 bg-white text-slate-600",
                        ].join(" ")}
                      >
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span className="text-sm text-slate-800">{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={[
                    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition",
                    currentIndex === 0
                      ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                      : "border-slate-200 bg-white text-slate-800 hover:-translate-y-[1px] hover:border-[#88a825] hover:text-[#3f4f13]",
                  ].join(" ")}
                >
                  Sebelumnya
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={answers[currentIndex] === -1}
                    className={[
                      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                      answers[currentIndex] !== -1
                        ? "bg-[#f9a826] text-slate-900 shadow-[0_12px_30px_rgba(249,168,38,0.35)] hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(249,168,38,0.4)]"
                        : "cursor-not-allowed bg-slate-200 text-slate-500",
                    ].join(" ")}
                  >
                    Lanjut soal berikutnya
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinish}
                    disabled={answers[currentIndex] === -1 || answeredCount !== questions.length}
                    className={[
                      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                      answers[currentIndex] !== -1 && answeredCount === questions.length
                        ? "bg-[#f9a826] text-slate-900 shadow-[0_12px_30px_rgba(249,168,38,0.35)] hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(249,168,38,0.4)]"
                        : "cursor-not-allowed bg-slate-200 text-slate-500",
                    ].join(" ")}
                  >
                    Selesai dan lihat hasil
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:border-[#88a825] hover:text-[#3f4f13]"
                >
                  Mulai ulang
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_48px_rgba(63,79,19,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#88a825]">Progres</p>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-700">
                <span>Soal terjawab</span>
                <span className="font-semibold">{answeredCount} / {questions.length}</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#88a825] transition-all"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
              <div className="mt-4 rounded-xl bg-[#f5f9ec] px-4 py-3 text-sm text-slate-700">
                Jawab semua soal untuk membuka ringkasan nilai.
              </div>
            </div>
          </section>
        ) : null}

        {started && finished ? (
          <section className="grid gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_48px_rgba(63,79,19,0.08)] backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#88a825]">
                    Ringkasan nilai
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900">Hasil Quiz</h2>
                  <p className="text-sm text-slate-600">
                    {passed
                      ? "Selamat! Jawaban benar kamu menunjukkan komitmen yang kuat."
                      : "Belum lulus. Coba cek kunci jawaban dan ulangi lagi."}
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Target kelulusan: lebih dari {passThreshold} jawaban benar.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#f0f7df] px-4 py-3 text-left">
                  <div className="text-4xl font-bold text-[#3f4f13]">{score}<span className="text-2xl text-slate-500">/10</span></div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#4a5f18]">
                    {passed ? "Berhasil" : "Gagal"}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleStart}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f9a826] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(249,168,38,0.35)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(249,168,38,0.4)]"
                >
                  Kerjakan lagi
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:border-[#88a825] hover:text-[#3f4f13]"
                >
                  Kembali ke layar awal
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {questions.map((item, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === item.correctIndex;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(63,79,19,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Soal {index + 1}
                      </div>
                      <span
                        className={[
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
                        ].join(" ")}
                      >
                        {isCorrect ? "Benar" : "Salah"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{item.question}</p>
                    <p className="mt-2 text-xs text-slate-600">
                      Jawaban kamu: {userAnswer !== -1 ? item.options[userAnswer] : "Belum diisi"}
                    </p>
                    <p className="text-xs text-slate-600">
                      Kunci jawaban: {item.options[item.correctIndex]}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
