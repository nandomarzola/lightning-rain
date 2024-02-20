const numRaindrops = 100;
const rainContainer = document.querySelector('.rain-container');

for (let i = 0; i < numRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.setProperty('--random-x', Math.random());
    raindrop.style.setProperty('--random-delay', `${Math.random() * 2}s`);
    rainContainer.appendChild(raindrop);
}