//Immediately Invoke Function 

(function chai(){
    console.log("DB Connected");
})()

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('Vivek')