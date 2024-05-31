
/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("No argument passed")
    }
    const arr = JSON.parse(input[0])
    handle(arr)
}


/*
 * Use this method to write your solution. 
 * arr - Is an array of Integers
 */
function handle(arr) {
    console.log(arr)
    //TODO: implement the logic to handle each input
}

main()