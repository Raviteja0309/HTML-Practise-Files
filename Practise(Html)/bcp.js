const btn = document.getElementById('btn');
const clickCount = document.getElementById('clickCount');
let count = 0;
btn.addEventListener('click', () => {
    count++;
    clickCount.textContent=count;
});