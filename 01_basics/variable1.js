const accountId = 144553
 let accountEmail = "vivekbabaji2003@gmail.com"
 var accountPassword = "12345"
 accountCity ="Indore"
 let accountState;

 // accountId = 2  //Not allowed

 console.log(accountId);

 /* 
    Prefer note to use var 
    because of issue in scope and functional scope 
 */

 accountEmail = "vivek21@gmail.com"
 accountPassword = "53421"
 accountCity = "Bengaluru"

 console.log(accountId);
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])