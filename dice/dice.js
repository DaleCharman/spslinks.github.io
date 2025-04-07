let dice;
let dot;
function createDiceFace(sideContainer, n) {
    dice = document.createElement('div');
    dice.classList.add('dice');
    sideContainer.appendChild(dice);
    for (let i = 0; i < n; i++) {
        dot = document.createElement('div');
        dot.classList.add('dot');
        dice.appendChild(dot);
    }
}

function createDice(container, scale = 1, faces = [1, 6, 2, 5, 3, 4]) {
    classes = ['front', 'back', 'left', 'right', 'bottom', 'top'];
    cube = document.createElement('div');
    cube.classList.add('cube');
    container.appendChild(cube);

    cube.dataset.scale = scale;

    for (let i = 0; i < 6; i++) {
        side = document.createElement('div');
        side.classList.add('side');
        side.classList.add(classes[i]);
        cube.appendChild(side);
        createDiceFace(side, faces[i]);
    }

    return cube;
}

function getRandomDeg() {
    return Math.floor(Math.random() * 360);
}

function newRotation(cube) {
    let x = getRandomDeg();
    let y = getRandomDeg();
    let z = getRandomDeg();
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function rotateCube(cube, n, w, scale = 1) {
    switch (n) {
        case 1:
            cube.style.transform = `rotateX(-140deg) rotateY(180deg) rotateZ(${w}deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
        case 2:
            cube.style.transform = `rotateX(-50deg) rotateY(${w}deg) rotateZ(90deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
        case 3:
            cube.style.transform = `rotateX(-50deg) rotateY(${w}deg) rotateZ(180deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
        case 4:
            cube.style.transform = `rotateX(-50deg) rotateY(${w}deg) rotateZ(0deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
        case 5:
            cube.style.transform = `rotateX(-50deg) rotateY(${w}deg) rotateZ(-90deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
        case 6:
            cube.style.transform = `rotateX(40deg) rotateY(180deg) rotateZ(${w}deg) scale3d(${scale}, ${scale}, ${scale})`;
            break;
    }
}

function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

let q;
let w;
function switchDiceRandom(cube) {
    q = getRandomNum();
    w = getRandomDeg();
    rotateCube(cube, q, w, (scale = cube.dataset.scale));
    return q;
}
