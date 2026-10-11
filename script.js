document.addEventListener('DOMContentLoaded', () => {

    // --- Premium Mobile Drawer Activation ---
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle-burger');
        
        // Quick subtle animation conversion for Burger lines
        const lines = burger.children;
        if(burger.classList.contains('toggle-burger')) {
            lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });

    // Close menu when clicking items on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // reset burger layout
            const lines = burger.children;
            burger.classList.remove('toggle-burger');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        });
    });

    // --- Dynamic Filtering Menu Grid ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Adjust active state tracking classes
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const selectedCategory = e.target.getAttribute('data-category');

            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Pure animated grid tracking visibility shifts
                if(selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // --- Interactive Form Alert Event ---
    const bookingForm = document.getElementById('bookingForm');
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Stunning choice, ${name}! Your modern table reservation request has been successfully logged. See you at Bites.`);
            bookingForm.reset();
        });
    }
});