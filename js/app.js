document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();
    const openNewsletterButtons = document.querySelectorAll(".open-newsletter")
    const closeNewsletter = document.getElementById("closeNewsletter")
    const newsletterModal = document.getElementById("newsletterModal")
    const newsletteroOverlay = document.querySelector(".newsletter-overlay")
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.getAttribute('href') !== '#') {
                return; 
            }

            e.preventDefault();

            if(item.classList.contains('active')) return;

            navItems.forEach(i => i.classList.remove('active'));

            item.classList.add('active');
            
            const targetSection = item.getAttribute('data-target');
            console.log(`Cambiando visualmente a sección: ${targetSection}`);
        });
    });

    openNewsletterButtons.forEach(button => {
        button.addEventListener('click', () => {
            newsletterModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeNewsletter.addEventListener('click', () => {
        newsletterModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    newsletteroOverlay.addEventListener('click', () => {
        newsletterModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == "Escape"){
            newsletterModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

});
