const sushiArea = document.createElement('div')
sushiArea.id = 'sushiArea'
sushiArea.style.position = 'fixed'
sushiArea.style.top = '0'
sushiArea.style.left = '0'
sushiArea.style.width = '100vw'
sushiArea.style.height = '100vh'
sushiArea.style.opacity = '1'
sushiArea.style.overflow = 'hidden'
sushiArea.style.pointerEvents = 'none'; // これが重要
document.body.appendChild(sushiArea)

const styleElement = document.createElement('style')
styleElement.textContent = `
@keyframes moveDiagonally {
to {
        transform: translate(calc(100vw - -50px), calc(100vh - 50px)) rotate(300deg);
    }
}`;
document.head.appendChild(styleElement)

const addSushi = () => {
    const sushiArea = document.getElementById('sushiArea')
    const randomLeft = Math.random() * (window.innerWidth - 50); // 50はボックスの幅
    const sushiElement = document.createElement('div');
    sushiElement.onanimationend = () => {
        sushiElement.remove()
    }
    sushiElement.className = 'sushi'
    sushiElement.textContent = '🍣'
    sushiElement.style.position = 'absolute'
    sushiElement.style.top = '0'
    sushiElement.style.zIndex = '1'
    sushiElement.style.fontSize = '50px'
    sushiElement.style.left = `${randomLeft}px`
    sushiElement.style.animation = `moveDiagonally ${Math.random() * 10}s forwards`
    sushiArea.appendChild(sushiElement)
}
intervalId = setInterval(addSushi, 800)
setInterval([...document.querySelectorAll('.sushi')].forEach(e => e.remove()), 750)
