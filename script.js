// Initialize Lucide Icons
lucide.createIcons();

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ==========================================
// Product Data
// ==========================================
const products = [
    { id: 1, name: "Atap UPVC Alderon", category: "ordinary", image: "https://www.alderon.co.id/wp-content/uploads/alderon-lite-atap-upvc-alderon-inovasi-terbaru.png", description: "Semua atap uPVC Alderon diproduksi menggunakan bahan dengan formula spesial.", price: 120 },
    { id: 2, name: "alderon lite", category: "ordinary", image: "https://jayasteel.co.id/wp-content/uploads/Alderon-Twinwall-Corrugated-2.jpg.", description: "Semua atap uPVC Alderon diproduksi menggunakan bahan dengan formula spesial.", price: 135 },
    { id: 3, name: "alderon twinwall", category: "ordinary", image: "https://www.alderon.co.id/wp-content/uploads/alderon-twinwall-ID-830-asa-protection-garansi-20-tahun.webp", description: "High-quality carbon steel ideal for riveting, bolting, and welding in bridge and building construction.", price: 150 },
    { id: 4, name: "Alderon coating series", category: "bridge", image: "https://www.alderon.co.id/wp-content/uploads/alderon-coating-series-rs.webp", description: "Heavy-duty structural steel optimized for demanding bridge fabrication and high-load structures.", price: 210 },
    { id: 5, name: "Alderon eco", category: "bridge", image: "https://www.alderon.co.id/wp-content/uploads/Alderon-Eco-2-1.png", description: "Low alloy structural steel plate offering high yield strength, specifically formulated for bridges.", price: 195 },
    { id: 6, name: "High Strength Alloy Plate", category: "alloy", image: "https://images.unsplash.com/photo-1501166222995-1db6cc8a149c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Premium alloy offering a superior strength-to-weight ratio for specialized industrial needs.", price: 320 },
    { id: 7, name: "Weather Resistant Alloy", category: "alloy", image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Corrosion-resistant weathering steel designed for harsh outdoor and marine environments.", price: 290 }
];

// ==========================================
// Cart State & DOM References
// ==========================================
let cart = [];

const productGrid = document.getElementById('product-grid');
const tabBtns = document.querySelectorAll('.tab-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');

// ==========================================
// Cart Toggle Logic
// ==========================================
function toggleCart() {
    cartSidebar.classList.toggle('translate-x-full');
    cartOverlay.classList.toggle('hidden');
}

document.getElementById('cart-btn-desktop')?.addEventListener('click', toggleCart);
document.getElementById('cart-btn-mobile')?.addEventListener('click', toggleCart);
document.getElementById('close-cart-btn')?.addEventListener('click', toggleCart);
cartOverlay?.addEventListener('click', toggleCart);

// ==========================================
// Toast Notification
// ==========================================
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'bg-secondary text-primary px-6 py-3 rounded shadow-lg transform transition-all duration-300 translate-x-full opacity-0 flex items-center gap-2';
    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> ${message}`;
    container.appendChild(toast);
    lucide.createIcons();

    // Trigger animation
    setTimeout(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
    }, 10);

    // Remove after 3s
    setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// Add to Cart
// ==========================================
function addToCart(productId, openCart = true) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();

    if (openCart) {
        // Auto open cart when adding
        if (cartSidebar.classList.contains('translate-x-full')) {
            toggleCart();
        }
    } else {
        showToast("Added to cart");
    }
}

// ==========================================
// Remove from Cart
// ==========================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// ==========================================
// Update Quantity
// ==========================================
function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// ==========================================
// Update Cart UI
// ==========================================
function updateCartUI() {
    // Update badges
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badgeDesktop = document.getElementById('cart-count-desktop');
    const badgeMobile = document.getElementById('cart-count-mobile');

    if (badgeDesktop) {
        badgeDesktop.textContent = totalItems;
        badgeDesktop.classList.toggle('hidden', totalItems === 0);
    }
    if (badgeMobile) {
        badgeMobile.textContent = totalItems;
        badgeMobile.classList.toggle('hidden', totalItems === 0);
    }

    // Render Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-textcol opacity-60">
                <i data-lucide="shopping-cart" class="w-12 h-12 mb-4 opacity-50"></i>
                <p>Your cart is empty.</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex gap-4 items-center bg-primary p-3 border border-gray-100 rounded shadow-sm">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded bg-gray-100">
                <div class="flex-grow">
                    <h4 class="text-sm font-bold text-secondary">${item.name}</h4>
                    <div class="flex items-center gap-2 mt-2">
                        <div class="flex items-center border border-gray-200 rounded">
                            <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center text-textcol hover:bg-gray-100 transition-colors">-</button>
                            <span class="w-8 text-center text-sm font-medium text-secondary border-x border-gray-200">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center text-textcol hover:bg-gray-100 transition-colors">+</button>
                        </div>
                        <span class="text-xs text-textcol opacity-70">x $${item.price.toFixed(2)}/ton</span>
                    </div>
                </div>
                <div class="text-right flex flex-col justify-between items-end gap-2">
                    <div class="font-bold text-secondary">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-xs text-red-500 hover:text-red-700 flex items-center gap-1">
                        <i data-lucide="trash-2" class="w-3 h-3"></i> Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal > 0 ? subtotal * 0.1 : 0; // 10% discount logic
    const total = subtotal - discount;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;

    lucide.createIcons();
}

// ==========================================
// Render Product Cards
// ==========================================
function renderProducts(category) {
    productGrid.innerHTML = '';
    const filteredProducts = products.filter(p => p.category === category);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="text-center col-span-full text-textcol opacity-70">No products found in this category.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'group flex flex-col bg-primary border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300';
        card.innerHTML = `
            <div class="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative cursor-pointer">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-secondary mb-2">${product.name}</h3>
                <p class="text-sm text-textcol opacity-80 mb-6 flex-grow">${product.description}</p>
                <div class="flex flex-col gap-3 mt-auto">
                    <span class="text-xl font-bold text-secondary">$${product.price}/ton</span>
                    <div class="flex gap-2">
                        <button class="flex-1 px-4 py-2.5 bg-primary border border-secondary text-secondary text-sm font-medium rounded hover:bg-gray-50 transition-colors flex justify-center items-center gap-2" onclick="addToCart(${product.id}, false)">
                            <i data-lucide="plus" class="w-4 h-4"></i> Add to Cart
                        </button>
                        <button class="flex-1 px-4 py-2.5 bg-secondary text-primary text-sm font-medium rounded hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2" onclick="addToCart(${product.id}, true)">
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

        productGrid.appendChild(card);
    });
    // Re-initialize icons inside new cards
    lucide.createIcons();
}

// ==========================================
// Product Tab Switching
// ==========================================
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        tabBtns.forEach(b => {
            b.classList.remove('bg-secondary', 'text-primary');
            b.classList.add('bg-primary', 'border', 'border-secondary', 'text-secondary');
        });
        btn.classList.remove('bg-primary', 'border', 'border-secondary', 'text-secondary');
        btn.classList.add('bg-secondary', 'text-primary');

        // Render products
        renderProducts(btn.dataset.category);
    });
});

// ==========================================
// Testimonials
// ==========================================
const testimonials = [
    {
        text: `"Finding the right structural iron with clear product specs used to be a headache. Iron Mart streamlined our entire supply chain. Highly recommended."`,
        name: "Sarah Jenkins",
        role: "Lead Architect, Skyline Corp",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        text: `"The quality of the materials is unmatched, and the website's ease of navigation makes placing large bulk orders simple. A fantastic resource for interior designers."`,
        name: "David Chen",
        role: "Interior Designer, ModernSpaces",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        text: `"As a contractor, timing and spec accuracy are everything. Iron Mart delivers exactly what is detailed on their site. Their customer service is incredibly professional."`,
        name: "Marcus Ruhl",
        role: "Independent Contractor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        text: `"The steel plates we received for our bridge project exceeded our expectations. The durability and strength were exactly as specified."`,
        name: "Elena Rodriguez",
        role: "Civil Engineer, BuildRight Inc.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        text: `"Incredible selection of specialty alloys. Being able to find exactly what we needed so quickly saved us weeks on our timeline."`,
        name: "James Wilson",
        role: "Procurement Manager, TechStruct",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        text: `"Iron Mart has become our go-to supplier for all major projects. Their consistent quality and reliable delivery times are unbeatable."`,
        name: "Michael Chang",
        role: "Project Manager, Global Builders",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

let currentTPage = 0;

function renderTestimonials() {
    const grid = document.getElementById('testimonial-grid');
    const dotsContainer = document.getElementById('testimonial-dots');

    const itemsPerPage = window.innerWidth >= 768 ? 3 : 1;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    if (currentTPage >= totalPages) currentTPage = Math.max(0, totalPages - 1);

    const startIdx = currentTPage * itemsPerPage;
    const currentTestimonials = testimonials.slice(startIdx, startIdx + itemsPerPage);

    grid.style.opacity = 0;

    setTimeout(() => {
        grid.innerHTML = currentTestimonials.map(t => `
            <div class="flex flex-col h-full min-h-[240px] space-y-6">
                <p class="text-textcol opacity-90 text-sm leading-relaxed">
                    ${t.text}
                </p>
                <div class="flex items-center gap-4">
                    <img src="${t.image}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm border border-gray-100">
                    <div>
                        <h4 class="text-sm font-bold text-secondary">${t.name}</h4>
                        <p class="text-xs text-textcol opacity-70">${t.role}</p>
                    </div>
                </div>
            </div>
        `).join('');

        dotsContainer.innerHTML = Array.from({ length: totalPages }).map((_, idx) => `
            <button onclick="changeTestimonialPage(${idx})" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentTPage ? 'bg-secondary w-6' : 'bg-gray-300 hover:bg-gray-400'}" aria-label="Go to testimonial page ${idx + 1}"></button>
        `).join('');

        grid.style.opacity = 1;
    }, 300);
}

function changeTestimonialPage(pageIdx) {
    currentTPage = pageIdx;
    renderTestimonials();
}

window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(renderTestimonials, 200);
});

// ==========================================
// Initial Render
// ==========================================
renderProducts('ordinary');
renderTestimonials();
