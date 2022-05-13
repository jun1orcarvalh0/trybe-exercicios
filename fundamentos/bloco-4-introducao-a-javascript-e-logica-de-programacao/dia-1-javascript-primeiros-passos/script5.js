const a = 30
const b = 60
const c = 90

if (a < 0 || b < 0 || c < 0) {
    console.log("mensagem de erro")
}

else if (a + b + c === 180) {
    console.log(true)
}

else if (a + b + c !== 180) {
    console.log(false)
}