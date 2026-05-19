/* 
  Global Script for ElectroCompare
*/

// Global State Management
window.electroCart = JSON.parse(localStorage.getItem('electro_cart')) || [];
window.electroWishlist = JSON.parse(localStorage.getItem('electro_wishlist')) || [];
window.electroCompare = JSON.parse(localStorage.getItem('electro_compare')) || [];

window.updateCartBadge = function() {
    const badges = document.querySelectorAll('.cart-count');
    // Ensure we filter out any bad items or parse properly to prevent NaN
    const validItems = window.electroCart.filter(item => item && item.id);
    const totalItems = validItems.reduce((sum, item) => sum + (parseInt(item.qty) || 1), 0);
    badges.forEach(badge => {
        badge.textContent = totalItems;
    });
};

window.globalAddToCart = function(productId, btnElement) {
    if(typeof event !== 'undefined' && event) event.stopPropagation();
    
    // Check for corrupt data and fix it if needed
    window.electroCart = window.electroCart.filter(item => item && item.id);
    
    const existing = window.electroCart.find(i => i.id === productId);
    if (existing) {
        existing.qty = (parseInt(existing.qty) || 1) + 1;
    } else {
        window.electroCart.push({ id: productId, qty: 1 });
    }
    localStorage.setItem('electro_cart', JSON.stringify(window.electroCart));
    window.updateCartBadge();
    
    if (btnElement) {
        const originalText = btnElement.innerHTML;
        btnElement.innerHTML = 'Added!';
        btnElement.style.backgroundColor = '#10B981';
        btnElement.style.color = 'white';
        setTimeout(() => {
            btnElement.innerHTML = originalText;
            btnElement.style.backgroundColor = '';
            btnElement.style.color = '';
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
    }
    
    if (typeof showToast === 'function') {
        showToast('Added to cart!', 'success');
    }
};

window.globalAddToWishlist = function(productId, btnElement) {
    if(typeof event !== 'undefined' && event) event.stopPropagation();
    const index = window.electroWishlist.indexOf(productId);
    
    if (index === -1) {
        window.electroWishlist.push(productId);
        localStorage.setItem('electro_wishlist', JSON.stringify(window.electroWishlist));
        
        if (btnElement) {
            const icon = btnElement.querySelector('svg') || btnElement.querySelector('i');
            if (icon) {
                icon.setAttribute('fill', '#EF4444');
                icon.setAttribute('color', '#EF4444');
                icon.style.fill = '#EF4444';
                icon.style.color = '#EF4444';
            }
        }
        if (typeof showToast === 'function') {
            showToast('Added to wishlist!', 'success');
        }
    } else {
        window.electroWishlist.splice(index, 1);
        localStorage.setItem('electro_wishlist', JSON.stringify(window.electroWishlist));
        
        if (btnElement) {
            const icon = btnElement.querySelector('svg') || btnElement.querySelector('i');
            if (icon) {
                icon.setAttribute('fill', 'none');
                icon.setAttribute('color', 'currentColor');
                icon.style.fill = 'none';
                icon.style.color = 'currentColor';
            }
        }
        if (typeof showToast === 'function') {
            showToast('Removed from wishlist.', 'success');
        }
    }
};

window.globalToggleCompare = function(productId, btnElement) {
    if(typeof event !== 'undefined' && event) event.stopPropagation();
    const index = window.electroCompare.indexOf(productId);
    
    if (index === -1) {
        if (window.electroCompare.length >= 4) {
            if (typeof showToast === 'function') showToast('You can compare up to 4 items max.', 'error');
            return;
        }
        window.electroCompare.push(productId);
        localStorage.setItem('electro_compare', JSON.stringify(window.electroCompare));
        
        if (btnElement) {
            btnElement.classList.add('active');
            btnElement.style.backgroundColor = 'var(--sky-blue)';
            btnElement.style.color = 'white';
            const icon = btnElement.querySelector('svg') || btnElement.querySelector('i');
            if(icon) {
                icon.style.color = 'white';
            }
        }
        if (typeof showToast === 'function') showToast('Added to comparison!', 'success');
    } else {
        window.electroCompare.splice(index, 1);
        localStorage.setItem('electro_compare', JSON.stringify(window.electroCompare));
        
        if (btnElement) {
            btnElement.classList.remove('active');
            btnElement.style.backgroundColor = '';
            btnElement.style.color = '';
            const icon = btnElement.querySelector('svg') || btnElement.querySelector('i');
            if(icon) {
                icon.style.color = 'currentColor';
            }
        }
        if (typeof showToast === 'function') showToast('Removed from comparison.', 'success');
    }
};

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

    window.updateCartBadge();

    // The compare logic is now handled by globalToggleCompare. We can remove the old logic.
    // document.querySelectorAll('.btn-compare').forEach(...)

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

    // Global Auth State UI Update
    const userStr = localStorage.getItem('electroUser');
    if (userStr) {
        const navActions = document.querySelector('.nav-actions');
        // Don't modify if we're on login or register page
        const isAuthPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html');
        
        if (navActions && !window.location.pathname.includes('profile.html') && !isAuthPage) {
            // Find login and register buttons (could be btn-primary or nav-item depending on page)
            const loginBtn = navActions.querySelector('a[href="login.html"]');
            const registerBtn = navActions.querySelector('a[href="register.html"]');
            
            if (loginBtn) loginBtn.remove();
            if (registerBtn) registerBtn.remove();

            // Add Profile and Logout buttons
            if (!navActions.querySelector('a[href="profile.html"]')) {
                const profileLink = document.createElement('a');
                profileLink.href = 'profile.html';
                profileLink.className = 'nav-item';
                profileLink.style.cssText = 'color: var(--sky-blue); font-weight: 600;';
                profileLink.innerHTML = '<i data-lucide="user"></i> My Profile';
                
                const logoutBtn = document.createElement('a');
                logoutBtn.href = '#';
                logoutBtn.className = 'btn btn-outline';
                logoutBtn.style.padding = '0.5rem 1rem';
                logoutBtn.textContent = 'Logout';
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('electroUser');
                    window.location.reload();
                });

                navActions.appendChild(profileLink);
                navActions.appendChild(logoutBtn);
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        }
    }
});
