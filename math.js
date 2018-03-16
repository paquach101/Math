var button = document.getElementById("solve")
button.addEventListener('click', () => {
    document.getElementById('solutions').textContent = coefficients()
});

function coefficients() {
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value,
        radical = (Math.sqrt((b * b) - (4 * a * c))),
        bottom = (2 * a),
        B = (-1 * b),
        quadratic1 = ((B - radical) / bottom),
        quadratic2 = ((B + radical) / bottom);
    if (isNaN(a) || isNaN(b) || isNaN(c) == true) {
        return "You entered an incorrect value for either A, B, or C. Please try again."
        changeElementClass("invalid")
    } else if ((radical) < 0) {
        return "There are no real solutions."
    } else {
        return "The answer is " + quadratic1 + " and " + quadratic2;
    }
}
