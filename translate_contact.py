import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'Reach out for custom orders, bulk pricing, or visit our headquarters.': 'Hubungi kami untuk pesanan khusus, harga grosir, atau kunjungi kantor pusat kami.',
    'Send an Inquiry': 'Kirim Pertanyaan',
    'placeholder="Full Name"': 'placeholder="Nama Lengkap"',
    'placeholder="Email Address"': 'placeholder="Alamat Email"',
    'placeholder="Project or Company Name"': 'placeholder="Nama Proyek atau Perusahaan"',
    'By contacting us, you agree to our Syarat Layanan and Kebijakan Privasi.': 'Dengan menghubungi kami, Anda menyetujui Syarat Layanan dan Kebijakan Privasi kami.',
    'Store Location': 'Lokasi Toko',
    '123 Builder\'s Avenue, Industrial District': 'Jalan Pembangun 123, Kawasan Industri',
    'Global Logistics Center, 90210': 'Pusat Logistik Global, 90210',
    'Social Media': 'Media Sosial',
    'Your Cart': 'Keranjang Anda',
    'Your cart is empty.': 'Keranjang Anda kosong.',
    'Cart Subtotal': 'Subtotal Keranjang',
    'Discount': 'Diskon',
    'Total': 'Total',
    'Checkout': 'Pembayaran'
}

for k, v in replacements.items():
    content = content.replace(k, v)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Translated contact and cart sections.')
