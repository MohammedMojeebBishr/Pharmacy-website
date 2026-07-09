document.addEventListener('DOMContentLoaded', () => {
    // Embedded Data to avoid CORS issues when opening locally
    const products = [
        {
            "id": 1,
            "name": "بانادول إكسترا",
            "category": "مسكنات",
            "price": 18.00,
            "rating": 4.8,
            "image": "images/product1.jpg",
            "description": "مسكن قوي للآلام يحتوي على الباراسيتامول والكافيين.",
            "usage": "قرص واحد عند الحاجة، بحد أقصى 8 أقراص يومياً."
        },
        {
            "id": 2,
            "name": "فيتامين د3 5000 وحدة",
            "category": "فيتامينات",
            "price": 55.00,
            "rating": 4.9,
            "image": "images/product2.webp",
            "description": "مكمل غذائي لدعم صحة العظام والمناعة.",
            "usage": "كبسولة واحدة أسبوعياً أو حسب إرشادات الطبيب."
        },
        {
            "id": 3,
            "name": "مضاد حيوي واسع المدى",
            "category": "مسكنات",
            "price": 42.50,
            "rating": 4.7,
            "image": "images/product3.jpg",
            "description": "علاج فعال للالتهابات البكتيرية المختلفة.",
            "usage": "يؤخذ حسب وصفة طبية دقيقة."
        },
        {
            "id": 4,
            "name": "فيتامينات متعددة للنساء",
            "category": "فيتامينات",
            "price": 85.00,
            "rating": 4.8,
            "image": "images/product4.jpg",
            "description": "تركيبة متكاملة من الفيتامينات والمعادن المخصصة للمرأة.",
            "usage": "قرص واحد يومياً بعد الوجبة الرئيسية."
        },
        {
            "id": 5,
            "name": "مكمل غذائي بروتين",
            "category": "فيتامينات",
            "price": 150.00,
            "rating": 4.6,
            "image": "images/product5.jpg",
            "description": "يساعد في بناء العضلات وتعويض النقص الغذائي.",
            "usage": "ملعقة واحدة تذاب في الماء أو الحليب يومياً."
        },
        {
            "id": 6,
            "name": "كبسولات زيت كبد الحوت",
            "category": "فيتامينات",
            "price": 65.00,
            "rating": 4.9,
            "image": "images/product6.jpg",
            "description": "غني بأوميجا 3 وفيتامين أ ود.",
            "usage": "كبسولة واحدة يومياً."
        },
        {
            "id": 7,
            "name": "كريم مرطب لليدين",
            "category": "العناية الشخصية",
            "price": 25.00,
            "rating": 4.7,
            "image": "images/product7.jpg",
            "description": "يرطب البشرة الجافة ويحميها من التشققات.",
            "usage": "يدهن على اليدين عند الحاجة."
        },
        {
            "id": 8,
            "name": "مرهم لعلاج الحروق",
            "category": "العناية الشخصية",
            "price": 30.00,
            "rating": 4.8,
            "image": "images/product8.jpg",
            "description": "يساعد في التئام الجروح والحروق البسيطة.",
            "usage": "توضع طبقة رقيقة على المنطقة المصابة مرتين يومياً."
        },
        {
            "id": 9,
            "name": "فيتامين سي فوار",
            "category": "فيتامينات",
            "price": 20.00,
            "rating": 4.9,
            "image": "images/product9.jpg",
            "description": "يعزز المناعة ويحمي من نزلات البرد.",
            "usage": "قرص واحد يذاب في نصف كوب ماء يومياً."
        },
        {
            "id": 10,
            "name": "مكمل غذائي للمفاصل",
            "category": "فيتامينات",
            "price": 110.00,
            "rating": 4.7,
            "image": "images/product10.jpg",
            "description": "يحتوي على الجلوكوزامين لدعم صحة الغضاريف.",
            "usage": "قرصين يومياً مع الوجبات."
        },
        {
            "id": 11,
            "name": "شراب للسعال",
            "category": "مسكنات",
            "price": 15.00,
            "rating": 4.5,
            "image": "images/product11.jpg",
            "description": "مهدئ للسعال وطارد للبلغم.",
            "usage": "10 مل ثلاث مرات يومياً."
        },
        {
            "id": 12,
            "name": "معجون أسنان طبي",
            "category": "العناية الشخصية",
            "price": 35.00,
            "rating": 4.8,
            "image": "images/product12.jpg",
            "description": "لحماية اللثة والأسنان الحساسة.",
            "usage": "يستخدم مرتين يومياً."
        },
        {
            "id": 13,
            "name": "شامبو ضد القشرة",
            "category": "العناية الشخصية",
            "price": 45.00,
            "rating": 4.6,
            "image": "images/product13.jpg",
            "description": "ينظف فروة الرأس ويزيل القشرة بفعالية.",
            "usage": "يستخدم ثلاث مرات أسبوعياً."
        },
        {
            "id": 14,
            "name": "مطهر للجروح",
            "category": "العناية الشخصية",
            "price": 12.00,
            "rating": 4.7,
            "image": "images/product14.jpg",
            "description": "يقتل الجراثيم ويمنع تلوث الجروح.",
            "usage": "يستخدم لتنظيف الجرح قبل وضع الضمادة."
        },
        {
            "id": 15,
            "name": "بخاخ للأنف",
            "category": "مسكنات",
            "price": 28.00,
            "rating": 4.5,
            "image": "images/product15.jpg",
            "description": "يخفف من احتقان الأنف والحساسية.",
            "usage": "بخة واحدة في كل فتحة أنف عند الحاجة."
        }
    ];

    // State Management
    let cart = JSON.parse(localStorage.getItem('pharmacy_cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('pharmacy_favs')) || [];
    let currentCategory = 'all';

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const favCount = document.getElementById('fav-count');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const backToTop = document.getElementById('back-to-top');
    const catTabs = document.querySelectorAll('.cat-tab');
    const productModal = document.getElementById('product-modal');
    const closeModal = document.getElementById('close-modal');
    const modalBody = document.getElementById('modal-body');
    const toastContainer = document.getElementById('toast-container');

    // Initialize
    init();

    function init() {
        // No need for fetch, data is local
        renderProducts(products);
        updateCartUI();
        updateFavUI();
    }

    // Render Products
    function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        if (productsToRender.length === 0) {
            productsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 50px;">لا توجد منتجات تطابق بحثك.</p>';
            return;
        }
        
        productsToRender.forEach(product => {
            const isFav = favorites.includes(product.id);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=صورة+غير+متوفرة'">
                <div class="product-info">
                    <div class="product-cat">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price-row">
                        <span class="price">${product.price.toFixed(2)} ر.س</span>
                        <span class="rating"><i class="fas fa-star"></i> ${product.rating}</span>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">إضافة للسلة</button>
                        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    openProductModal(product);
                }
            });

            productsGrid.appendChild(card);
        });

        // Re-bind events
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                addToCart(parseInt(btn.dataset.id));
            };
        });

        document.querySelectorAll('.fav-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(parseInt(btn.dataset.id), btn);
            };
        });
    }

    // Cart Functions
    function addToCart(id) {
        const product = products.find(p => p.id === id);
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        saveCart();
        updateCartUI();
        showToast(`تم إضافة ${product.name} إلى السلة`);
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateCartUI();
    }

    function updateQuantity(id, delta) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    }

    function saveCart() {
        localStorage.setItem('pharmacy_cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70x70?text=صورة'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toFixed(2)} ر.س</p>
                    <div class="cart-item-qty">
                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotal.textContent = total.toFixed(2);

        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.onclick = () => updateQuantity(parseInt(btn.dataset.id), 1);
        });
        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.onclick = () => updateQuantity(parseInt(btn.dataset.id), -1);
        });
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.onclick = () => removeFromCart(parseInt(btn.dataset.id));
        });
    }

    // Favorites Functions
    function toggleFavorite(id, btn) {
        const index = favorites.indexOf(id);
        if (index === -1) {
            favorites.push(id);
            btn.classList.add('active');
            showToast('تمت الإضافة للمفضلة');
        } else {
            favorites.splice(index, 1);
            btn.classList.remove('active');
        }
        localStorage.setItem('pharmacy_favs', JSON.stringify(favorites));
        updateFavUI();
    }

    function updateFavUI() {
        favCount.textContent = favorites.length;
    }

    // Search & Filter
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)) &&
            (currentCategory === 'all' || p.category === currentCategory)
        );
        renderProducts(filtered);
    });

    catTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            catTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            
            const filtered = products.filter(p => 
                currentCategory === 'all' || p.category === currentCategory
            );
            renderProducts(filtered);
        });
    });

    // Modal Functions
    function openProductModal(product) {
        modalBody.innerHTML = `
            <div class="modal-img">
                <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:15px;" onerror="this.src='https://via.placeholder.com/400x300?text=صورة+غير+متوفرة'">
            </div>
            <div class="modal-info">
                <h2>${product.name}</h2>
                <p class="product-cat">${product.category}</p>
                <div class="modal-price" style="font-size:1.5rem; color:var(--secondary-color); font-weight:800; margin:15px 0;">
                    ${product.price.toFixed(2)} ر.س
                </div>
                <div class="modal-desc" style="margin-bottom:20px;">
                    <strong>الوصف:</strong>
                    <p>${product.description}</p>
                </div>
                <div class="modal-usage" style="margin-bottom:20px;">
                    <strong>طريقة الاستخدام:</strong>
                    <p>${product.usage}</p>
                </div>
                <button class="btn btn-primary btn-block add-to-cart-modal" data-id="${product.id}">إضافة للسلة</button>
            </div>
        `;
        productModal.style.display = 'flex';
        
        modalBody.querySelector('.add-to-cart-modal').onclick = () => addToCart(product.id);
    }

    closeModal.onclick = () => productModal.style.display = 'none';
    window.onclick = (e) => { if (e.target === productModal) productModal.style.display = 'none'; };

    // UI Interactions
    cartBtn.onclick = () => cartSidebar.classList.add('open');
    closeCart.onclick = () => cartSidebar.classList.remove('open');

    themeToggle.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };

    window.onscroll = () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            backToTop.classList.add('show');
        } else {
            nav.classList.remove('scrolled');
            backToTop.classList.remove('show');
        }
    };

    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
});
