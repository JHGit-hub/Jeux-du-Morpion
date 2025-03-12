let result = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

let BtnNewGame = document.querySelector("caption");
let Cases = document.querySelectorAll("td");
let NbTour = 1;



// reset New Game

function reset(){
    result = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    NbTour = 1;
    Cases.forEach(function(Case){
        Case.classList.remove("cercle");
        Case.classList.remove("cross");
        Case.classList.add("default");
    });
};

BtnNewGame.addEventListener("click", function(){
    reset();
});



// Déroulement du jeu

Cases.forEach(function(CaseClicker){
    CaseClicker.addEventListener("click", function(){
        if(!CaseClicker.classList.contains("cercle") && !CaseClicker.classList.contains("cross")){
            if( NbTour %2 === 0){
                CaseClicker.classList.add("cercle");
                TableResult(CaseClicker);
                Victory(CaseClicker);
            } else {
                CaseClicker.classList.add("cross");
                TableResult(CaseClicker);
                Victory(CaseClicker);
            }
            NbTour++;
        }
    });
});



// remplir le tableau de resultat

function TableResult(CaseClicker){
    if(CaseClicker.classList.contains("case1") && CaseClicker.classList.contains("cercle")){
        result[0][0] = "O";
    } else if (CaseClicker.classList.contains("case1") && CaseClicker.classList.contains("cross")){
        result[0][0] = "X";
    };

    if(CaseClicker.classList.contains("case2") && CaseClicker.classList.contains("cercle")){
        result[0][1] = "O";
    } else if (CaseClicker.classList.contains("case2") && CaseClicker.classList.contains("cross")){
        result[0][1] = "X";
    };

    if(CaseClicker.classList.contains("case3") && CaseClicker.classList.contains("cercle")){
        result[0][2] = "O";
    } else if (CaseClicker.classList.contains("case3") && CaseClicker.classList.contains("cross")){
        result[0][2] = "X";
    };

    if(CaseClicker.classList.contains("case4") && CaseClicker.classList.contains("cercle")){
        result[1][0] = "O";
    } else if (CaseClicker.classList.contains("case4") && CaseClicker.classList.contains("cross")){
        result[1][0] = "X";
    };

    if(CaseClicker.classList.contains("case5") && CaseClicker.classList.contains("cercle")){
        result[1][1] = "O";
    } else if (CaseClicker.classList.contains("case5") && CaseClicker.classList.contains("cross")){
        result[1][1] = "X";
    };

    if(CaseClicker.classList.contains("case6") && CaseClicker.classList.contains("cercle")){
        result[1][2] = "O";
    } else if (CaseClicker.classList.contains("case6") && CaseClicker.classList.contains("cross")){
        result[1][2] = "X";
    };

    if(CaseClicker.classList.contains("case7") && CaseClicker.classList.contains("cercle")){
        result[2][0] = "O";
    } else if (CaseClicker.classList.contains("case7") && CaseClicker.classList.contains("cross")){
        result[2][0] = "X";
    };

    if(CaseClicker.classList.contains("case8") && CaseClicker.classList.contains("cercle")){
        result[2][1] = "O";
    } else if (CaseClicker.classList.contains("case8") && CaseClicker.classList.contains("cross")){
        result[2][1] = "X";
    };

    if(CaseClicker.classList.contains("case9") && CaseClicker.classList.contains("cercle")){
        result[2][2] = "O";
    } else if (CaseClicker.classList.contains("case9") && CaseClicker.classList.contains("cross")){
        result[2][2] = "X";
    };
    
};


// combinaison gagnante possible

function CheckWin(){
    if((result[0][0] === result[0][1] && result[0][1]=== result[0][2] && result[0][1] !== "") ||
        (result[1][0] === result[1][1] && result[1][1] === result[1][2] && result[1][1] !== "") ||
        (result[2][0] === result[2][1] && result[2][1] === result[2][2] && result[2][1] !== "") ||
        (result[0][0] === result[1][0] && result[1][0] === result[2][0] && result[2][0] !== "") ||
        (result[0][1] === result[1][1] && result[1][1] === result[2][1] && result[2][1] !== "") ||
        (result[0][2] === result[1][2] && result[1][2] === result[2][2] && result[2][2] !== "") ||
        (result[0][0] === result[1][1] && result[1][1] === result[2][2] && result[2][2] !== "") ||
        (result[2][0] === result[1][1] && result[1][1] === result[0][2] && result[0][2] !== "")){
            return true;
    } else {
        return false;
    }
};


 // verifier s'il y a un vainqueur

function Victory(){
    if(CheckWin() === true){
        setTimeout(() => {
            if((NbTour-1) %2 === 0){
                alert("Victoire des Ronds!");
                alert("Faire une nouvelle partie?");
                reset();
            } else {
                alert("Victoire des Croix!");
                alert("Faire une nouvelle partie?");
                reset();
            };
        },100);
    } else if(!CheckWin() && (NbTour === 9) ) {
        setTimeout(() => {
            alert("Match Nul, Faire une nouvelle partie?");
            reset();
        },100);
    };
};