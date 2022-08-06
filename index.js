function genSquawk() {
    const div = document.getElementById('squawk')
    var num1 = Math.floor(Math.random() * 7);
    var num2 = Math.floor(Math.random() * 7);
    var num3 = Math.floor(Math.random() * 7);
    var num4 = Math.floor(Math.random() * 7);
    div.textContent = `${num1}${num2}${num3}${num4}`;
}
