import { caesarEncrypt, caesarDecrypt } from "./diycrypto.js"

console.log(caesarEncrypt("HELLO", 1))
console.log(caesarDecrypt("IFMMP", 1))


// const secretMessage = "RETREATTOMMORROW"
// const encryptedMessage = caesarEncrypt(secretMessage, 5)
// const decryptedMessage = caesarDecrypt(encryptedMessage, 5)

// console.log(secretMessage, encryptedMessage, decryptedMessage)