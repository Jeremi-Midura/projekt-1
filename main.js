
const sections = Array.from(document.querySelectorAll('main section[tabindex]'));

sections.forEach((section) => {
    section.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        section.focus();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.focus();
        }
    });
});

sections.forEach((section, idx) => {
    section.addEventListener('keydown', (e) => {
        // Przejście do następnej sekcji
        if (
            (e.key === 'ArrowDown') ||
            (e.key === 'Tab' && !e.shiftKey && !e.ctrlKey)
        ) {
            e.preventDefault();
            const next = sections[(idx + 1) % sections.length];
            next.focus();
            next.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        // Przejście do poprzedniej sekcji
        else if (
            (e.key === 'ArrowUp') ||
            (e.key === 'Tab' && e.shiftKey && !e.ctrlKey)
        ) {
            e.preventDefault();
            const prev = sections[(idx - 1 + sections.length) % sections.length];
            prev.focus();
            prev.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    if (sections.length) sections[0].focus();
});

// Accordion dla sekcji komend
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.focus(); // wymuś focus na klikniętym przycisku
        const content = btn.nextElementSibling;
        if (content) {
            content.hidden = !content.hidden;
        }
    });
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});