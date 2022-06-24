// The While Loop
let i = 1
while (i <= 6){
    // console.log(`While Loop iteration: ${i}`)
    i++
}

// The For Loop
for(let i = 1; i <= 6; i++){
    // console.log(`For Loop iteration: ${i}`)
}

// Coding Exersices ~~ write these twice each, once with a While and the other with a For ~~

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

// While Loop
// document.querySelector('#runBtn').addEventListener('click', carousel)
// function carousel(){
    //     userInput = document.querySelector('#userInput').value
    //     turn = 1
    //     while(turn <= userInput){
        //         console.log(` While Loop Carousel turn number: ${turn}`)
        //         turn++
        //     }
        // }
        
        // For Loop 
//         document.querySelector('#runBtn').addEventListener('click', forCarousel)
//         function forCarousel(){
//             let userInput = document.querySelector('#userInput').value
//             for(turn = 1; turn <= userInput; turn++){
//         console.log(`For Loop Carousel turn number: ${turn}`)
//     }
// }

// Parity
// document.querySelector('#runBtn').addEventListener('click',parity)
// function parity(){
//     let parityInput = document.querySelector('#userInput').value
//     for(i = 1; i <= parityInput; i++){
//         if(i % 2 === 0){
//             console.log(`${i} is even `)
//         }else if(i % 3 === 0){
//             console.log(`${i} is odd`)
//         }else{
//             console.log(i)
//         }
//     }
// }

// While Loop
document.querySelector('#runBtn').addEventListener('click', whileParity)
function whileParity(){
    let userInput = document.querySelector('#userInput').value
    let i = 1
    while(i <= userInput){
        if(i % 2 === 0){
            console.log(`${i} is even`)
        }else if(i % 3 === 0){
            console.log(`${i} is odd`)
        }else{
            console.log(i)
        }
        i++
    }
}

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!

// Input Validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
function moreOrLess(){
    prompt('Give a number above a 100 to continue or below a 100 to stop')
    const userInput = Number(document.querySelector('#userInput').value)
    let i = 1
    while(i < userInput){
        if(userInput < 100){
            alert('your done')
        }else{
            prompt('give another number above 100 to continue or less than 100 to stop')
        }
    }
}
// moreOrLess()

function highAndLow(numbers){
    let nums = numbers.split(' ')
    // let max = Number(Math.max(nums))
    // let min = Math.min(nums)
    return typeof nums
    // let minAndMax = max + min
    // return minAndMax
    // let result = minAndMax.join(' ')
    // return result
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
const randomNum = Math.round(Math.random()*100)

const fizzBuzz = (number) => {
    let i = 1
    while(i <= number){
        if(i % 3 === 0 && i % 5 === 0){
            return 'FizzBuzz'
        }else if(i % 3 === 0){
            return 'Fizz'
        }else if(i % 5 === 0){
            return 'Buzz'
        }else{
            return i
        }
        i++
    }
}
console.log(fizzBuzz(12))