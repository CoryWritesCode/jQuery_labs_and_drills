$(document).ready(function () {

    $('<button class="alertBtn">Alert!</button>').appendTo('body');

    $('.alertBtn').click(function (e) { 

        alert('(1.) Hello again, my friend');
        e.preventDefault();
        
    });

    $('#submitBtn').click(function (e) { 

        let alertTxt = $('#inputForm').val();
        alert(`(2.) ${alertTxt}`);
        e.preventDefault();
        
    });

    $('<div>(3.)</div>').appendTo('body');
    $('div').css({
        'height': '100px',
        'width': '100px',
        'text-align': 'center',
        'color': 'white'
    });

    $('div').hover(
        function () {
            $(this).css({
                'background-color': 'coral',
            });
        }, function () {
            $(this).css({
                'background-color': '',
            });
        }
    );

    $('<p>(4.) Here is some text for you!</p>').appendTo('body');
    
    let randomColors = [

        'blue',
        'cyan',
        'coral',
        'magenta',
        'green',
        'orange',
        'navy'

    ];

    $('p').click(function (e) { 

        $(this).css('color', `${randomColors[Math.floor(Math.random() * randomColors.length)]}`);

        e.preventDefault();
        
    });

    $('<button class="nameBtn">Fill this Div!</button>').appendTo('body');
    $('<div class="myName"></div>').appendTo('body');

    $('.nameBtn').click(function (e) { 

        $('<span>(5.) Cory Cunningham</span>').appendTo('.myName');

        e.preventDefault();
        
    });

    let i = 0
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

    $('#makeFriends').click(function (e) { 

        if (i < listOfFriends.length) {
            $(`<li>${listOfFriends[i]}</li>`).appendTo('ul');
            i++
        }

        e.preventDefault();
        
    });


});