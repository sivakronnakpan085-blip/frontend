
import Image from "next/image";

export default function Cardsection() {
  const products = [
    {
      name: "AirPods Pro",
      description: "ระบบตัดเสียงรบกวนอัจฉริยะ พร้อม Spatial Audio",
      price: "฿4,990",
      image: "/airpods-3.jpg",
      category: "Premium Audio",
    },
    {
      name: "Mirrorless Camera",
      description: "กล้องดิจิตอลความละเอียดสูง พร้อมเลนส์คิทคุณภาพ",
      price: "฿25,900",
      image: "/6-1-1024x683.jpg",
      category: "Photography",
    },
    {
      name: "Smart Watch",
      description: "ติดตามสุขภาพ ออกกำลังกาย และกันน้ำได้",
      price: "฿3,200",
      image: "/s11-case-unselect-gallery-1-202509_GEO_TH_LANG_TH_FMT_WHH.jpg",
      category: "Wearable Tech",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.4em] text-gray-500">
            Featured Collection
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            สินค้าแนะนำ
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            คัดสรรสินค้าคุณภาพสูง ดีไซน์ทันสมัย สำหรับผู้ที่ต้องการความโดดเด่น
            และเทคโนโลยีที่ดีที่สุด
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-zinc-600 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  {product.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">ราคาเริ่มต้น</p>
                    <p className="text-3xl font-bold text-white">
                      {product.price}
                    </p>
                  </div>

                  <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                    ซื้อเลย
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

