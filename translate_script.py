import sys

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'High-quality carbon steel ideal for riveting, bolting, and welding in bridge and building construction.': 'Baja karbon berkualitas tinggi yang ideal untuk memukau, lari, dan pengelasan di konstruksi jembatan dan bangunan.',
    'Heavy-duty structural steel optimized for demanding bridge fabrication and high-load structures.': 'Baja struktural tugas berat yang dioptimalkan untuk fabrikasi jembatan dan struktur beban tinggi.',
    'Low alloy structural steel plate offering high yield strength, specifically formulated for bridges.': 'Pelat baja struktural paduan rendah yang menawarkan kekuatan luluh tinggi, dirumuskan secara khusus untuk jembatan.',
    'Premium alloy offering a superior strength-to-weight ratio for specialized industrial needs.': 'Paduan premium yang menawarkan rasio kekuatan-ke-berat yang unggul untuk kebutuhan industri khusus.',
    'Corrosion-resistant weathering steel designed for harsh outdoor and marine environments.': 'Baja pelapukan tahan korosi yang dirancang untuk lingkungan luar ruangan dan laut yang keras.',
    'Add to Cart': 'Tambah ke Keranjang',
    '> Buy Now': '> Beli Sekarang',
    'Your cart is empty.': 'Keranjang Anda kosong.',
    'Remove': 'Hapus',
    'No products found in this category.': 'Tidak ada produk yang ditemukan dalam kategori ini.',
    '"Finding the right structural iron with clear product specs used to be a headache. Iron Mart streamlined our entire supply chain. Highly recommended."': '"Menemukan besi struktural yang tepat dengan spesifikasi produk yang jelas dulunya memusingkan. Iron Mart merampingkan seluruh rantai pasokan kami. Sangat dianjurkan."',
    '"The quality of the materials is unmatched, and the website\'s ease of navigation makes placing large bulk orders simple. A fantastic resource for interior designers."': '"Kualitas bahannya tak tertandingi, dan navigasi situs web yang mudah membuat pemesanan pesanan massal menjadi sederhana. Sumber daya yang fantastis untuk desainer interior."',
    '"As a contractor, timing and spec accuracy are everything. Iron Mart delivers exactly what is detailed on their site. Their customer service is incredibly professional."': '"Sebagai kontraktor, ketepatan waktu dan spesifikasi adalah segalanya. Iron Mart memberikan persis seperti yang dirinci di situs mereka. Layanan pelanggan mereka sangat profesional."',
    '"The steel plates we received for our bridge project exceeded our expectations. The durability and strength were exactly as specified."': '"Pelat baja yang kami terima untuk proyek jembatan kami melebihi harapan kami. Ketahanan dan kekuatannya persis seperti yang ditentukan."',
    '"Incredible selection of specialty alloys. Being able to find exactly what we needed so quickly saved us weeks on our timeline."': '"Pilihan paduan khusus yang luar biasa. Mampu menemukan apa yang kami butuhkan dengan sangat cepat menghemat waktu berminggu-minggu pada jadwal kami."',
    '"Iron Mart has become our go-to supplier for all major projects. Their consistent quality and reliable delivery times are unbeatable."': '"Iron Mart telah menjadi pemasok andalan kami untuk semua proyek besar. Kualitas konsisten dan waktu pengiriman yang andal tak terkalahkan."',
    'Lead Architect': 'Arsitek Utama',
    'Interior Designer': 'Desainer Interior',
    'Independent Contractor': 'Kontraktor Independen',
    'Civil Engineer': 'Insinyur Sipil',
    'Procurement Manager': 'Manajer Pengadaan',
    'Project Manager': 'Manajer Proyek'
}

for k, v in replacements.items():
    content = content.replace(k, v)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Translation applied to script.js successfully!')
