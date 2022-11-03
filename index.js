const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
       let randomNum = Math.floor(Math.random() * characters.length);
       let randomChar = characters[randomNum]
       password += randomChar
    }
    return password
}
function generatePasswordBtn() {
    passBox1El = document.getElementById("pass-box-1")
    passBox1El.textContent = generatePassword()
    
    passBox2El = document.getElementById("pass-box-2")
    passBox2El.textContent = generatePassword()
}



