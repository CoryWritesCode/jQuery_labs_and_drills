document.addEventListener('DOMContentLoaded', function() {

    let button = document.createElement('button');
    let buttonTxt = document.createTextNode('Click Here.');
    button.appendChild(buttonTxt);
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert(`(1.) Well hello there!`);

    });

    let submitButton = document.getElementById('submitBtn');

    submitButton.addEventListener('click', function() {
        let inputTxt = document.getElementById('inputForm').value;

        alert(`(2.) ${inputTxt}`);
        console.log(inputTxt);

    });

    let colorDiv = document.createElement('div');
    colorDiv.style.height = '100px';
    colorDiv.style.width = '100px';
    document.body.appendChild(colorDiv);

    colorDiv.addEventListener('mouseenter', function() {

        colorDiv.style.backgroundColor = 'blue';
        colorDiv.innerHTML = '(3.)';
        colorDiv.style.textAlign = 'center';
        colorDiv.style.color = 'white';

    });

    colorDiv.addEventListener('mouseleave', function() {

        colorDiv.style.backgroundColor = '';
        colorDiv.innerHTML = '';

    });

    let paraGraph = document.createElement('p');
    let paraText = '(4.) Here is some text to fill in the paragraph. Look at meeee!'
    paraGraph.innerHTML = paraText;
    document.body.appendChild(paraGraph);

    let randomColors = [

        'blue',
        'cyan',
        'coral',
        'magenta',
        'green',
        'orange',
        'navy'

    ];

    paraGraph.addEventListener('click', function() {

        paraGraph.style.color = randomColors[Math.floor(Math.random() * randomColors.length)];

    });

    let spanBtn = document.createElement('button');
    let btnText = document.createTextNode("What's my name?");
    let spanDiv = document.createElement('div');
    spanBtn.appendChild(btnText);
    document.body.appendChild(spanBtn);
    document.body.appendChild(spanDiv);

    let myName = document.createTextNode('(5.) Cory Cunningham');

    spanBtn.addEventListener('click', function() {

        spanDiv.appendChild(myName);

    });

    let friendsLister = document.getElementsByTagName('ul')[0];
    let friendBtn = document.getElementById('makeFriends');
    let listOfFriends = [

        'Bri',
        'Ray',
        'Ramsey',
        'Will',
        'Sam',
        'Mark',
        'Nathan',
        'Nathanial',
        'Brett',
        'Jason'

    ];

    let i = 0;

    friendBtn.addEventListener('click', function () {

        if (i < listOfFriends.length) {
            let friends = document.createElement('li');
            let list = document.createTextNode(listOfFriends[i])
            friends.appendChild(list);
            friendsLister.appendChild(friends);
            i++;
        };

    });

});