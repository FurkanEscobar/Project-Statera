document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.fade-in');
    paragraphs.forEach((p, index) => {
        p.style.animationDelay = `${(index + 1) * 0.3}s`;
    });
});