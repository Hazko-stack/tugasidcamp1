// Zoom Effect on Sidebar Image
document.querySelectorAll('aside img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Show Real-Time Time in Footer
const footer = document.querySelector('footer');
const originalFooterContent = footer.innerHTML;  // Keep the original content
setInterval(() => {
    const now = new Date();
    footer.innerHTML = `${originalFooterContent} | ${now.toLocaleTimeString('id-ID')}`;  // Append time to original content
}, 1000);

// Header Animation on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0056b3';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#007bff';
        header.style.boxShadow = 'none';
    }
});

// Hover Effect on Main Articles
document.querySelectorAll('#content article').forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.backgroundColor = '#f0f8ff';
        article.style.transition = 'background-color 0.3s ease';
    });

    article.addEventListener('mouseleave', () => {
        article.style.backgroundColor = '#fff';
    });
});
