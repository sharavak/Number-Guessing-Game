const input = document.querySelector('input')
const main = document.querySelector('main')
const button=document.querySelector('button')
let h2 = document.querySelector('h2')
const uls = document.querySelector('ul')
const p = document.querySelector('p')
const div = document.querySelector('div')
const inp = document.createElement('input')
inp.style.display='block'
const label = document.createElement('label')
const h41=document.createElement('h4')

inp.setAttribute('type','text')
inp.setAttribute('placeholder', 'Type y or n')
let n= 0
let final = ''
let delay = 1000
let arrays = ['Think of a number between 1 and 100','Multiply the Number by 2', 'Now add the previous result with 2','Now multiply the previous result by 5','Then add the previous result with 5','Type your answer below in the result box']

function game() {
    for (let i of arrays) {
        setTimeout(() => {
            const li = document.createElement('li')
            li.style.textAlign='center'
            li.style.marginTop = '10px';
            li.append(i)
            uls.appendChild(li)
            h2.style.animationName = 'hid';
            h2.style.animationDuration = '2s';
            h2.style.animationTimingFunction = 'ease-in-out';
            h2.style.animationFillMode = 'forwards'
            h41.style.animationIterationCount = 'infinite';
            h2.innerText = i
            console.log(delay)
        }, delay)
        delay += 2000
    }   
}
game()
userInput()


function userInput() {
    input.addEventListener('keydown', function (e) {
        console.log(e)
        switch (e.key) {
            case 'Enter':
                    let userValue = parseInt(input.value)
                    if (isNaN(userValue) === true || userValue === undefined) {
                        alert('Hey! Only Numbers allowed')
                        break;
                    }
                    else {
                        n = res(userValue)
                        h41.textContent = ''
                        inp.value = ''
                        p.innerText = `The Computer guessed the number and the number is ${n}`
                        div.append(label, inp, h41)
                        label.innerText = 'Is this Correct Answer?'
                        inp.addEventListener('input', function () {    
                            if (inp.value === 'y' || inp.value === 'Y' || inp.value === 'n' || inp.value === 'N') {
                                h41.style.textAlign = 'center'
                                h41.style.animationName = 'hids';
                                h41.style.animationDuration = '3s';
                                h41.style.animationTimingFunction = 'ease-in-out';
                                h41.style.animationIterationCount = 'infinite'
                                if (inp.value === 'Y' || inp.value === 'y') {
                                    h41.textContent = 'Awesome!'
                                }
                                else {
                                    h41.textContent = 'Try Again!'
                                }
                            }
                            else {
                                inp.value = ''
                            }
                        })
                        break;  
                    }       
            case ' ':
                alert('Hey! Only Numbers')
                break;
        }
    })
}

function res(userValue) {
        let numbers = '' + userValue
        if (numbers.length === 2) {
            final = '' + numbers
            n = parseInt(final[0]) - 1
            return n
        }
        else if (numbers.length === 3) {
            final = '' + numbers
            n = parseInt(final.slice(0, 2)) - 1
            return n
        }      
}

button.addEventListener('click', function () {
    h2.innerText = ''
    uls.innerText=''
    p.innerText = ''
    h41.textContent = ''
    delay = 1000;
    final = ''
    input.value = ''
    label.innerText = ''
    inp.value=''
    inp.remove()
    game()
    userInput()
})
