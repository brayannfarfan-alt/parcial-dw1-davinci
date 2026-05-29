document.addEventListener("DOMContentLoaded", () => {
    
    lucide.createIcons();

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
});