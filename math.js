var button = document.getElementById("solve")
button.addEventListener('click', () => {
    document.getElementById('solutions').textContent = coefficients()
});

function coefficients() {
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value,
        //discriminant
        dis = ((b * b) - (4 * a * c)),
        bottom = (2 * a),
        quadratic1 = (((-b) - Math.sqrt(dis)) / bottom),
        quadratic2 = (((-b) + Math.sqrt(dis)) / bottom);
    // var AC = 4 * a * c,
    ///  BB = b * b,
    //roots = BB - AC;
    if (isNaN(a) || isNaN(b) || isNaN(c) == true) {
        return "You entered an incorrect value for either A, B, or C. Please try again."
    } else if ((dis < 0)) {
        return "There are no real solutions."
    } else {
        return "The answer is " + quadratic1 + " and " + quadratic2;

    }
}
