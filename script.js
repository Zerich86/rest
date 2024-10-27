// Membuat bintang-bintang
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'stars';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 60 + '%';
    star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite alternate`;
    document.querySelector('.scene').appendChild(star);
}
