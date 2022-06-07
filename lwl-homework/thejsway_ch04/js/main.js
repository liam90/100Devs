// The While Loop
let i = 1
while (i <= 6){
    // console.log(`While Loop iteration: ${i}`)
    i++
}

// The FOr Loop
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
// document.querySelector('#runBtn').addEventListener('click', whileParity)
// function whileParity(){
//     let userInput = document.querySelector('#userInput').value
//     let i = 1
//     while(i <= userInput){
//         if(i % 2 === 0){
//             console.log(`${i} is even`)
//         }else if(i % 3 === 0){
//             console.log(`${i} is odd`)
//         }else{
//             console.log(i)
//         }
//         i++
//     }
// }
// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!

// Input Validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
let ask = prompt('give a number above 100 to contiune or give one less to to finish.')
function moreOrLess(){
    const userInput = document.querySelector('#userInput').value
    if(userInput > 100){
        prompt('give another number above 100 to continue or less than 100 to stop')
    }else if(userInput <= 100){
        alert('your done')
    }else{
        prompt('your input has to be a number')
    }
}