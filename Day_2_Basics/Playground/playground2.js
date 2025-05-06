// requirement:- get square of each number and collects all of them in a new array

function function1(){
    // array of numbers
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    // creates an empty array
    const squares = []

    // loop over the array and get square of each number
    for(const number of numbers)
    {
        squares.push(number **2)
    }

    console.log(`numbers: ${numbers}`)
    console.log(`squares: ${squares}`)

}

//function1()

function function2()
{
    //array of numbers

    const numbers = [1,2,3,4,5,6,7,8,9,10]
    // const squares = numbers.map((number)=>{
    //     return number **2
    // })

    const squares = numbers.map((number)=> number **2)
    const cubes = numbers.map((number)=> number **3)

    console.log(`numbers: ${numbers}`)
    console.log(`squares: ${squares}`)
    console.log(`cubes: ${cubes}`)

}

//function2()


function function3(){
    //array of objects

    const persons = [
        {name:'Saurabh',age:24,address:'pune'},
        {name:'Sanjeevani',age:22,address:'pune'},
        {name:'Rutuja',age:20,address:'pune'},
        {name:'Aditya',age:20,address:'pune'},

    ]


    const addresses = persons.map((person)=> person['address'])
    console.log(`addreses`,addresses)
}

function3()