$(document).ready(function () {
    
    let submitButton = $('#btnSubmit');
    let inputZone = $('form input:text');
    let p = 0

    $(submitButton).attr('disabled', true);


    $(inputZone).keyup(function () {
        if ($(this).val().length != 0)
            $(submitButton).attr('disabled', false);
        else
            $(submitButton).attr('disabled', true);
    });

    $('form').after('<div></div>');
    $('form').after('<ul>What is this?</ul>');

    $(submitButton).click(function () { 
        // alert('You clicked me!'); <-- No longer used by the end.
        // $('<h2>Now look what you did.</h2>').appendTo('div'); <-- Same
        $('ul').append(`<li class="list${p++}" >This is a list item thing.</li>`);
        
        event.preventDefault();

        $('li').each(function ( p ) {
            $(`.list${p}`).click(function () { 
                let randomR = Math.floor((Math.random() * 255) + 0);
                let randomG = Math.floor((Math.random() * 255) + 0);
                let randomB = Math.floor((Math.random() * 255) + 0);

                $(`.list${p}`).css('background-color', `rgb(${randomR}, ${randomG}, ${randomB})`);
                event.preventDefault();

            });

            $(`.list${p}`).dblclick(function () { 
                $(this).remove();

                event.preventDefault();
                
            });

            console.log(`${p}`);

        }); 

        // Made for h2 element when hovering over.
        // $('h2').hover(
        //     function () {
        //         $(this).css({
        //             'background-color': 'coral',
        //             'border': '2px',
        //             'border-radius': '5%'
        //         });
        //     }, function () {
        //         $(this).removeAttr('style');
        //     }
        // );

    });

});