const control = document.querySelectorAll("[data-control]")
const statistic = document.querySelectorAll("[data-statistic]")
const pieces = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "shield": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }

}

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        dataManipulate(event.target.dataset.control, event.target.parentNode)
        statisticsUpdate(event.target.dataset.piece)
    })
})


function dataManipulate(operation, control) {
    const piece = control.querySelector("[data-counter]")

    if(operation === "-") {
        piece.value = parseInt(piece.value) - 1
    } else {
        piece.value = parseInt(piece.value) + 1
    }
}


function statisticsUpdate(piece) {
    statistic.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pieces[piece][element.dataset.statistic]
    })
}

const buttonsColor = document.querySelectorAll('.btn-color');
const robot = document.querySelector('.robot');

buttonsColor.forEach((button) => {
    button.addEventListener("click", () => {
        console.log('applying the color ' + button.dataset.color + ' on Robotron 2000!');
        robot.src = `img/robotron-${button.dataset.color}.png`;
        button.classList.add('btn-active');


        buttonsColor.forEach((btn) => {
            if(btn.dataset.color != button.dataset.color)
            btn.classList.remove('btn-active');
        });

    });


});