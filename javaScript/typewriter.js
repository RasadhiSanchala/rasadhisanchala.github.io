// Typewriter cycling animation for hero section
const roles = [
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer"
];

const typedEl = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 300;

function type() {
    if (!typedEl) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typedEl.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, PAUSE_AFTER);
            return;
        }

        setTimeout(type, TYPING_SPEED);
    } else {
        typedEl.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, PAUSE_BEFORE);
            return;
        }

        setTimeout(type, DELETING_SPEED);
    }
}

setTimeout(type, 1200);