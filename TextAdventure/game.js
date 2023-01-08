const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-button");

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerHTML = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        } 
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

const textNodes = [
    {
        id: 1,
        text: 'you wake in the morning',
        options: [
            {
                text:  'step outside',
                setState: { earlyRiser: true },
                nextText: 2
            },
            {
                text:  'stay in bed',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'you take a deep breath',
        options: [
            {
                text:  'get real high',
                requiredState: (currentState) => currentState.earlyRiser,
                setState: { earlyRiser: true, high: true },
                nextText: 3
            },
            {
                text:  'Scream at the top of your lungs',
                setState: { panic: true },
                nextText: 3
            },
            {
                text: 'keep statying',
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: "What's going on??",
        options: [
            {
                text:  'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: "The bed in comfy",options: [
            {
                text:  'Restart',
                nextText: -1
            }
        ]
    }
]

startGame();