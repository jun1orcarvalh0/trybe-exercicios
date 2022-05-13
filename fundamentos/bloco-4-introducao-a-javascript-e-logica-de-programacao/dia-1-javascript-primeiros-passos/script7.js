let programaDeNotas = 65
if (programaDeNotas < 0 || programaDeNotas > 100) {
    console.log("mensagem de erro")
}
else if (programaDeNotas >= 90) {
    console.log("A")
}
else if (programaDeNotas >= 80) {
    console.log("B")
}
else if (programaDeNotas >= 70) {
    console.log("C")
}
else if (programaDeNotas >= 60) {
    console.log("D")
}
else if (programaDeNotas >= 50) {
    console.log("E")
}
else if (programaDeNotas < 50) {
    console.log("F")
}