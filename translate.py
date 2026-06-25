import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'Quality Iron for Global Construction': 'Besi Berkualitas untuk Konstruksi Global',
    '>About us<': '>Tentang Kami<',
    '>Product Type<': '>Tipe Produk<',
    '>Pricing<': '>Harga<',
    '>Location & Contact<': '>Lokasi & Kontak<',
    '> Product Cart': '> Keranjang Produk',
    'Selling iron for global construction': 'Menjual besi untuk konstruksi global',
    'The easiest way for architects, interior designers, contractors, and construction builders to\n                        find and buy the right metal for any construction project.': 'Cara termudah bagi arsitek, desainer interior, kontraktor, dan pemborong untuk\n                        menemukan dan membeli logam yang tepat untuk proyek konstruksi.',
    '<button\n                            class="px-6 py-3 bg-secondary text-primary rounded font-medium hover:bg-opacity-90 transition-colors">\n                            Explore Products\n                        </button>': '<button onclick="window.location.href=\'#pricing\'"\n                            class="px-6 py-3 bg-secondary text-primary rounded font-medium hover:bg-opacity-90 transition-colors">\n                            Eksplorasi Produk\n                        </button>',
    '<button\n                            class="px-6 py-3 border border-secondary text-secondary rounded font-medium hover:bg-gray-50 transition-colors">\n                            View Specs\n                        </button>': '<button onclick="window.location.href=\'#products\'"\n                            class="px-6 py-3 border border-secondary text-secondary rounded font-medium hover:bg-gray-50 transition-colors">\n                            Lihat Spesifikasi\n                        </button>',
    'The preferred supplier for industry professionals': 'Pemasok pilihan untuk profesional industri',
    'Our purpose is to help people find and buy the correct type of iron. We provide comprehensive\n                        product specs and reliable sourcing for your architectural and building needs.': 'Tujuan kami adalah membantu orang menemukan dan membeli jenis besi yang tepat. Kami menyediakan\n                        spesifikasi produk yang komprehensif dan sumber yang andal untuk kebutuhan arsitektur dan bangunan Anda.',
    'Global Distribution': 'Distribusi Global',
    'Sourcing and delivering high-quality iron materials for large-scale construction\n                                projects worldwide. We ensure you get what you need, wherever you build.': 'Mencari dan mengirimkan bahan besi berkualitas tinggi untuk proyek konstruksi\n                                skala besar di seluruh dunia. Kami memastikan Anda mendapatkan apa yang Anda butuhkan, di mana pun Anda membangun.',
    'Detailed Product Specs': 'Spesifikasi Produk Detail',
    'Access complete technical descriptions and specifications to ensure you are purchasing\n                                the exact structural integrity required for your designs.': 'Akses deskripsi teknis dan spesifikasi lengkap untuk memastikan Anda membeli\n                                integritas struktural persis yang diperlukan untuk desain Anda.',
    'Premium Quality Assurance': 'Jaminan Kualitas Premium',
    'Trusted by top interior designers and contractors. Our inventory undergoes strict\n                                quality checks to meet all structural building standards.': 'Dipercaya oleh desainer interior dan kontraktor top. Inventaris kami menjalani pemeriksaan\n                                kualitas yang ketat untuk memenuhi semua standar bangunan struktural.',
    '>Structural\n                            Materials<': '>Bahan\n                            Struktural<',
    'Primary Construction Iron': 'Besi Konstruksi Utama',
    'High-strength foundational materials designed to support\n                            massive infrastructure projects.': 'Bahan pondasi berkekuatan tinggi yang dirancang untuk mendukung\n                            proyek infrastruktur besar.',
    'Standard structural steel plate,\n                                perfect for general construction framing and welding applications.': 'Pelat baja struktural standar,\n                                sempurna untuk rangka konstruksi umum dan aplikasi pengelasan.',
    '>Read\n                                more<': '>Baca\n                                selengkapnya<',
    '>Read\n                                more</a>': '>Baca\n                                selengkapnya</a>',
    'Reinforcing Bars': 'Besi Beton',
    'Essential rebar for concrete\n                                reinforcement, ensuring structural integrity and tensile strength.': 'Besi tulangan esensial untuk perkuatan\n                                beton, memastikan integritas struktural dan kekuatan tarik.',
    '>Specialty &\n                            Alloys<': '>Khusus &\n                            Paduan<',
    'Advanced Alloy Solutions': 'Solusi Paduan Lanjutan',
    'Engineered metals tailored for specialized applications\n                            requiring unique structural properties.': 'Logam rekayasa yang disesuaikan untuk aplikasi khusus\n                            yang memerlukan sifat struktural unik.',
    'Q420 Bridge Plates': 'Pelat Jembatan Q420',
    'Heavy-duty structural steel\n                                optimized for demanding bridge fabrication and high-load structures.': 'Baja struktural tugas berat yang\n                                dioptimalkan untuk fabrikasi jembatan dan struktur beban tinggi.',
    'Weathering Steel': 'Baja Tahan Cuaca',
    'Corrosion-resistant steel designed\n                                to naturally form a protective rust-like appearance.': 'Baja tahan korosi yang dirancang\n                                untuk secara alami membentuk tampilan seperti karat pelindung.',
    'Simple, Transparent Pricing': 'Harga Sederhana & Transparan',
    'Choose the right iron package for your construction scale.': 'Pilih paket besi yang tepat untuk skala konstruksi Anda.',
    'Basic Structure': 'Struktur Dasar',
    'Standard grade iron for residential and small commercial projects.': 'Besi kelas standar untuk proyek perumahan dan komersial kecil.',
    'Get Started': 'Mulai',
    'Standard Quality': 'Kualitas Standar',
    'Local Delivery': 'Pengiriman Lokal',
    'Basic Support': 'Dukungan Dasar',
    '>Professional<': '>Profesional<',
    'High-grade alloys and structural steel for large developments.': 'Paduan dan baja struktural bermutu tinggi untuk pembangunan besar.',
    'Most Popular': 'Paling Populer',
    'Premium Quality': 'Kualitas Premium',
    'Global Shipping': 'Pengiriman Global',
    'Priority Support': 'Dukungan Prioritas',
    '>Enterprise<': '>Perusahaan<',
    'Custom engineering solutions and bulk materials for mega projects.': 'Solusi rekayasa kustom dan bahan curah untuk proyek mega.',
    'Contact Sales': 'Hubungi Penjualan',
    'Custom Specs': 'Spesifikasi Kustom',
    'Dedicated Account Manager': 'Manajer Akun Khusus',
    '24/7 Support': 'Dukungan 24/7',
    'Get in Touch': 'Hubungi Kami',
    'Have a specific project in mind? Contact our team for custom quotes and logistics support.': 'Punya proyek spesifik? Hubungi tim kami untuk penawaran khusus dan dukungan logistik.',
    '>Name<': '>Nama<',
    '>Email Address<': '>Alamat Email<',
    'Project Details': 'Detail Proyek',
    'Tell us about your structural requirements...': 'Ceritakan tentang kebutuhan struktural Anda...',
    'Send Message': 'Kirim Pesan',
    'Building the future with reliable iron and steel.': 'Membangun masa depan dengan besi dan baja yang andal.',
    '>Products<': '>Produk<',
    '>Company<': '>Perusahaan<',
    '>Legal<': '>Hukum<',
    'Terms of Service': 'Syarat Layanan',
    'Privacy Policy': 'Kebijakan Privasi'
}

for k, v in replacements.items():
    content = content.replace(k, v)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Translation applied successfully!')
