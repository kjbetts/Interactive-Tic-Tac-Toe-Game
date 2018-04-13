var selectOne = document.getElementById("selectOne");
var SelectTwo = document.getElementById("selectTwo");
var selectThree = document.getElementById("selectThree");
var selectFour = document.getElementById("selectFour");
var selectFive = document.getElementById("selectFive");
var selectSix = document.getElementById("selectSix");
var selectSeven = document.getElementById("selectSeven");
var selectEight = document.getElementById("selectEight");
var selectNine = document.getElementById("selectNine");


selectOne.onchange = detectWin;
selectTwo.onchange = detectWin;
selectThree.onchange = detectWin;
selectFour.onchange = detectWin;
selectFive.onchange = detectWin;
selectSix.onchange = detectWin;
selectSeven.onchange = detectWin;
selectEight.onchange = detectWin;
selectNine.onchange = detectWin;

function detectWin() {
    if (selectOne.options[selectOne.selectedIndex].value == "X" && selectTwo.options[selectTwo.selectedIndex].value == "X" && selectThree.options[selectThree.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectFour.options[selectFour.selectedIndex].value == "X" && selectFive.options[selectFive.selectedIndex].value == "X" && selectSix.options[selectSix.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectSeven.options[selectSeven.selectedIndex].value == "X" && selectEight.options[selectEight.selectedIndex].value == "X" && selectNine.options[selectNine.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "X" && selectFour.options[selectFour.selectedIndex].value == "X" && selectSeven.options[selectSeven.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectThree.options[selectThree.selectedIndex].value == "X" && selectSix.options[selectSix.selectedIndex].value == "X" && selectNine.options[selectNine.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "X" && selectFive.options[selectFive.selectedIndex].value == "X" && selectNine.options[selectNine.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectTwo.options[selectTwo.selectedIndex].value == "X" && selectFive.options[selectFive.selectedIndex].value == "X" && selectEight.options[selectEight.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "O" && selectTwo.options[selectTwo.selectedIndex].value == "O" && selectThree.options[selectThree.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectFour.options[selectFour.selectedIndex].value == "O" && selectFive.options[selectFive.selectedIndex].value == "O" && selectSix.options[selectSix.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectSeven.options[selectSeven.selectedIndex].value == "O" && selectEight.options[selectEight.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "O" && selectFour.options[selectFour.selectedIndex].value == "O" && selectSeven.options[selectSeven.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectThree.options[selectThree.selectedIndex].value == "O" && selectSix.options[selectSix.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "O" && selectFive.options[selectFive.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectTwo.options[selectTwo.selectedIndex].value == "O" && selectFive.options[selectFive.selectedIndex].value == "O" && selectEight.options[selectEight.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "O" && selectTwo.options[selectTwo.selectedIndex].value == "O" && selectThree.options[selectThree.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectFour.options[selectFour.selectedIndex].value == "O" && selectFive.options[selectFive.selectedIndex].value == "O" && selectSix.options[selectSix.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectSeven.options[selectSeven.selectedIndex].value == "O" && selectEight.options[selectEight.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "O" && selectFour.options[selectFour.selectedIndex].value == "O" && selectSeven.options[selectSeven.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectThree.options[selectThree.selectedIndex].value == "O" && selectSix.options[selectSix.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectOne.options[selectOne.selectedIndex].value == "X" && selectFive.options[selectFive.selectedIndex].value == "O" && selectNine.options[selectNine.selectedIndex].value == "O")   {
        alert("Player X is winner!")
    }
    if (selectThree.options[selectThree.selectedIndex].value == "O" && selectFive.options[selectFive.selectedIndex].value == "O" && selectSeven.options[selectSeven.selectedIndex].value == "O")   {
        alert("Player O is winner!")
    }
    if (selectThree.options[selectThree.selectedIndex].value == "X" && selectFive.options[selectFive.selectedIndex].value == "X" && selectSeven.options[selectSeven.selectedIndex].value == "X")   {
        alert("Player X is winner!")
    }
}
