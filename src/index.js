import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')
const body = document.querySelector('body')

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const colorChanger = {
    isActive: false,
    intervalId: null,
    
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true
        startBtn.classList.add('disabled')

        const lastColor = colors.length - 1
        
        this.intervalId = setInterval(() => {
            body.style.backgroundColor = colors[randomIntegerFromInterval(0, lastColor)]
        }, 1000)
        
    },

    stop() {
        clearInterval(this.intervalId)
        this.isActive = false
        startBtn.classList.remove('disabled')
    }
}


startBtn.addEventListener('click', () => {
    colorChanger.start()
})

stopBtn.addEventListener('click', () => {
    colorChanger.stop()
})




