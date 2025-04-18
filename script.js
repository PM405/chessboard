let selectedSquare = null;

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        if (selectedSquare === null && square.innerHTML !== "") {
            // Select a piece
            selectedSquare = square;
            square.style.border = "2px solid red";
        } else if (selectedSquare && square !== selectedSquare) {
            // Move piece
            square.innerHTML = selectedSquare.innerHTML;
            selectedSquare.innerHTML = "";
            selectedSquare.style.border = "";
            selectedSquare = null;
        } else if (square === selectedSquare) {
            // Deselect
            square.style.border = "";
            selectedSquare = null;
        }
    });
});
