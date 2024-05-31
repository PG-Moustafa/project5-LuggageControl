
const btn = document.getElementById('btn1');

function generateUniqueID() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterPart = letters.charAt(Math.floor(Math.random() * letters.length)) +
                    letters.charAt(Math.floor(Math.random() * letters.length));
    const digitPart = Math.floor(1000 + Math.random() * 9000);
    return letterPart + digitPart;
}

btn.addEventListener('click', function() {
    event.preventDefault();

    const weightInput = document.getElementById('input1').value;
    const weight = parseInt(weightInput, 10);
    if (isNaN(weight)) {
        alert("Please enter a valid number.");
    } else {
        if (weight < 20) {
            const uniqueID = generateUniqueID();
            document.getElementById('input2').innerHTML = uniqueID;
            document.getElementById('checkIcon').style.display = "block";
        } else {
            alert("Weight must not exceed 20kg.");
        }
    }
});


// Icon Pattern Background
/*
function createIconElement() {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    iconDiv.innerHTML = '<i class="fa-solid fa-plane-departure"></i>';
    return iconDiv;
}

function fillBackgroundWithIcons() {
    const iconBackground = document.getElementById('icon-background');
    const iconSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = 100;
    const cols = Math.ceil(screenWidth / iconSize);
    const rows = Math.ceil(screenHeight / iconSize);

    for (let i = 0; i < rows * cols; i++) {
        iconBackground.appendChild(createIconElement());
    }
}

window.onload = fillBackgroundWithIcons;
window.onresize = fillBackgroundWithIcons;
*/