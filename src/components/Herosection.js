
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.08),transparent_40%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,215,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400 backdrop-blur">
              ✨ PREMIUM DIGITAL EXPERIENCE
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              กาก
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                หมูระดับพรีเมียม
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              แต่!!! ไม่ใช่ร้านขายกาก หมูนะ เป็นร้านขาย อุปกรณ์อิเล็กทรอนิกส์
              จุ้บๆๆๆ
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">

              <Link
                href="/about"
                className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(255,215,0,0.35)] transition-all duration-300 hover:scale-105"
              >
                เรียนรู้เพิ่มเติม
              </Link>

              <Link
                href="/contract"
                className="rounded-2xl border border-yellow-500/40 bg-white/5 px-8 py-4 font-semibold text-yellow-400 backdrop-blur transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10"
              >
                ติดต่อเรา
              </Link>

            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="group relative">

              {/* Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-yellow-500/30 to-amber-500/30 blur-3xl transition-all duration-500 group-hover:blur-[80px]" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-zinc-900/50 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                  alt="Technology"
                  className="h-full w-full max-w-xl object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl">
                  <p className="text-sm text-gray-400">
                    Digital Innovation
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-yellow-400">
                    Next Generation
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

