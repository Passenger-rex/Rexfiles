const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnSwitch = document.querySelector('.btn-login')
const closeSwitch = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

btnSwitch.addEventListener('click', ()=> {
    wrapper.classList.add('active-switch')
})

closeSwitch.addEventListener('click', ()=> {
    wrapper.classList.remove('active-switch')
})


