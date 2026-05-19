/* 
  Global Script for ElectroCompare
*/

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade-in Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after showing to prevent repeat animations
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Horizontal Scroll with Mouse Wheel for News Slider
    const newsSlider = document.querySelector('.news-slider');
    if (newsSlider) {
        newsSlider.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                newsSlider.scrollLeft += e.deltaY;
            }
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i data-lucide="arrow-up"></i>';
    scrollTopBtn.className = 'btn btn-primary scroll-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 0;
    `;
    document.body.appendChild(scrollTopBtn);
    lucide.createIcons();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll Progress Bar
    const progressLine = document.getElementById('scrollProgress');
    if (progressLine) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressLine.style.width = scrolled + "%";
        });
    }

    // Cart Count Simulation (Real persistence would involve LocalStorage or Database)
    let cart = JSON.parse(localStorage.getItem('electro_cart')) || [];
    updateCartBadge();

    function updateCartBadge() {
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(badge => {
            badge.textContent = cart.length;
        });
    }

    // Add to Cart Buttons
    document.querySelectorAll('.btn-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const name = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            
            cart.push({ name, price });
            localStorage.setItem('electro_cart', JSON.stringify(cart));
            updateCartBadge();
            
            // Minimal animation feedback
            btn.textContent = 'Added!';
            btn.style.backgroundColor = '#10B981'; // Green
            setTimeout(() => {
                btn.textContent = 'Add to Cart';
                btn.style.backgroundColor = '';
            }, 2000);
        });
    });

    // Compare functionality preview
    document.querySelectorAll('.btn-compare').forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                btn.style.backgroundColor = 'var(--sky-blue)';
                btn.style.color = 'white';
            } else {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }
        });
    });

    // Product Filtering Logic
    const productContainer = document.getElementById('productContainer');
    if (productContainer) {
        const categoryFilters = document.querySelectorAll('.category-filter');
        const brandFilters = document.querySelectorAll('.brand-filter');
        const ratingFilters = document.querySelectorAll('.rating-filter');
        const priceRange = document.getElementById('priceRange');
        const productCards = document.querySelectorAll('.product-card');

        const filterProducts = () => {
            const selectedCategories = Array.from(categoryFilters)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            const selectedBrands = Array.from(brandFilters)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            const selectedRatings = Array.from(ratingFilters)
                .filter(cb => cb.checked)
                .map(cb => parseFloat(cb.value));

            const maxPrice = parseInt(priceRange.value);

            productCards.forEach(card => {
                const category = card.dataset.category;
                const brand = card.dataset.brand;
                const price = parseInt(card.dataset.price);
                const rating = parseFloat(card.dataset.rating);

                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
                const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand);
                const priceMatch = price <= maxPrice;
                const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(r => rating >= r);

                if (categoryMatch && brandMatch && priceMatch && ratingMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Update result count
            const visibleCount = Array.from(productCards).filter(c => c.style.display !== 'none').length;
            const countHeader = document.querySelector('.content-header h3');
            if (countHeader) countHeader.textContent = `Showing ${visibleCount} Products`;
        };

        // Event Listeners for Filters
        categoryFilters.forEach(cb => cb.addEventListener('change', filterProducts));
        brandFilters.forEach(cb => cb.addEventListener('change', filterProducts));
        ratingFilters.forEach(cb => cb.addEventListener('change', filterProducts));
        priceRange.addEventListener('input', filterProducts);

        // Initial trigger
        filterProducts();
    }
});
