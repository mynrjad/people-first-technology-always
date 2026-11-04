```javascript
Reveal.initialize({
    hash: true,
    controls: true,
    progress: false,
    center: true,
    transition: 'fade',
    transitionSpeed: 'slow',
    backgroundTransition: 'fade',
    keyboard: true,
    touch: true,
    width: 1440,
    height: 810,
    margin: 0.08
});

// Progress indicator
function updateProgress() {
    const current = Reveal.getSlidePastCount();
    const total = Reveal.getTotalSlides();

    const percentage = total > 1
        ? ((current + 1) / total) * 100
        : 100;

    document.getElementById('progress').style.width =
        percentage + '%';
}

Reveal.on('ready', updateProgress);
Reveal.on('slidechanged', updateProgress);

// Interactive challenge
const revealButton = document.getElementById('revealPrompt');

revealButton.addEventListener('click', () => {
    const challenge = document.getElementById('challenge');

    challenge.classList.toggle('hidden');

    revealButton.textContent =
        challenge.classList.contains('hidden')
            ? 'REVEAL THE CHALLENGE'
            : 'HIDE THE CHALLENGE';
});
```
