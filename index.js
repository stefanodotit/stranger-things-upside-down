import './style.css';

export default function () {
    const classP = 'snowflakes'
    const classC = 'snowflake'
    const body = document.getElementsByTagName('body')[0]
    const wrapper = document.createElement('div')
    wrapper.classList = classP
    wrapper['aria-hidden'] = true
    for(let i =0; i<10; i++){
        let snow = document.createElement('div')
        snow.classList = classC
        wrapper.appendChild(snow)
    }
    body.appendChild(wrapper)
    body.classList.toggle('upsideDown')
}