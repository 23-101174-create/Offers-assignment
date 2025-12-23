
        document.getElementById('logo').textContent = 'BEAUTY';
        document.getElementById('nav-products').textContent = 'Products';
        document.getElementById('nav-offers').textContent = 'Offers';
        document.getElementById('nav-coupons').textContent = 'Coupons';
        
        document.getElementById('hero-title').innerHTML = 'Glow like<br>never before!';
        document.getElementById('hero-btn').textContent = 'Shop Now';
        
        document.getElementById('featured-title').textContent = 'Featured Product';
        
        document.getElementById('product1-name').textContent = 'Brings Mi Serum';
        document.getElementById('product1-price').textContent = '700 EGP';
        
        document.getElementById('product2-name').textContent = 'Shower Gel';
        document.getElementById('product2-price').textContent = '550 EGP';
        
        document.getElementById('product3-name').textContent = 'Hand Cream';
        document.getElementById('product3-price').textContent = '400 EGP';
        
        document.getElementById('product4-name').textContent = 'Hand Soap';
        document.getElementById('product4-price').textContent = '200 EGP';
        
        document.getElementById('sale-title').textContent = 'Winter Beauty Sale';
        document.getElementById('sale-subtitle').textContent = 'Up to 40% Off';
        document.getElementById('sale-btn').textContent = 'Shop Now';
        
        document.getElementById('coupons-title').textContent = 'Beauty Coupons & Exclusive Offers';
        document.getElementById('coupons-subtitle').textContent = 'Save more on your favorite cosmetics and skincare products!';
        
        document.getElementById('coupon1-badge').textContent = '20% OFF';
        document.getElementById('coupon1-title').textContent = 'Skin Care Essentials';
        document.getElementById('coupon1-code').textContent = 'Use code: GLOW20';
        document.getElementById('coupon1-btn').textContent = 'Copy Code';
        
        document.getElementById('coupon2-badge').textContent = 'Buy 1 Get 1';
        document.getElementById('coupon2-title').textContent = 'Perfume Collection';
        document.getElementById('coupon2-code').textContent = 'Use code: SCENT';
        document.getElementById('coupon2-btn').textContent = 'Copy Code';
        
        document.getElementById('coupon3-badge').textContent = '50% OFF';
        document.getElementById('coupon3-title').textContent = 'Conditioner';
        document.getElementById('coupon3-code').textContent = 'Use code: Cond01';
        document.getElementById('coupon3-btn').textContent = 'Copy Code';
        
        document.getElementById('footer-brand').textContent = 'BEAUTY';
        document.getElementById('footer-description').textContent = 'Discover the beauty within you with our premium skincare and cosmetic products.';
        
        document.getElementById('footer-links-title').textContent = 'Quick Links';
        document.getElementById('footer-link1').textContent = 'Products';
        document.getElementById('footer-link2').textContent = 'Offers';
        document.getElementById('footer-link3').textContent = 'Coupons';
        document.getElementById('footer-link4').textContent = 'New Arrivals';
        document.getElementById('footer-link5').textContent = 'Best Sellers';
        
        document.getElementById('footer-care-title').textContent = 'Customer Care';
        document.getElementById('footer-care1').textContent = 'Contact Us';
        document.getElementById('footer-care2').textContent = 'Shipping Info';
        document.getElementById('footer-care3').textContent = 'Returns & Exchanges';
        document.getElementById('footer-care4').textContent = 'FAQ';
        document.getElementById('footer-care5').textContent = 'Track Order';
        
        document.getElementById('footer-newsletter-title').textContent = 'Newsletter';
        document.getElementById('footer-newsletter-text').textContent = 'Subscribe for exclusive offers and beauty tips!';
        document.getElementById('footer-subscribe-btn').textContent = 'Subscribe';
        
        document.getElementById('footer-copyright').textContent = '© 2025 Beauty. All rights reserved.';
        document.getElementById('payment-text').textContent = 'We Accept:';

        // Theme Toggle Function
        function toggleTheme() {
            const html = document.documentElement;
            const themeIcon = document.getElementById('theme-icon');
            const currentTheme = html.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                html.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Check for saved theme preference on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-icon').textContent = '☀️';
        }