        // Mobile nav toggle
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', isOpen);
        });
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', false);
        }));

        // Decorative QR-like pattern (not a real scannable code)
        (function buildQr() {
            const box = document.getElementById('qrBox');
            const cells = 81;
            const filledSeed = [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1];
            for (let i = 0; i < cells; i++) {
                const d = document.createElement('i');
                d.style.opacity = filledSeed[i] ? '1' : '0';
                box.appendChild(d);
            }
        })();

        // Contact form: build a mailto draft instead of a real submit
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value || 'there';
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const subject = encodeURIComponent('Hello from ' + name);
            const body = encodeURIComponent(message + (email ? ('\n\n— ' + name + ' (' + email + ')') : ('\n\n— ' + name)));
            window.location.href = `mailto:tiemlamgame@gmail.com?subject=${subject}&body=${body}`;
        });
