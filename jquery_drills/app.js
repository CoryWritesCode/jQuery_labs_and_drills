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

    $(submitButton).on('click', function () { 
        // alert('You clicked me!'); <-- No longer used by the end.
        // $('<h2>Now look what you did.</h2>').appendTo('div'); <-- Same
        $('ul').append(`<li>This is a list item thing.</li>`);

        $(`ul li`).on('click', function () {
            let randomR = Math.floor((Math.random() * 255) + 0);
            let randomG = Math.floor((Math.random() * 255) + 0);
            let randomB = Math.floor((Math.random() * 255) + 0);

            $(this).css('background-color', `rgb(${randomR}, ${randomG}, ${randomB})`);

        });

        $(`ul li`).on('dblclick', function () {
            this.remove();
        });

        console.log(`${p}`);
        event.preventDefault();


        // $(`.list${p}`).each(function (p) {
        //     $(`.list${p}`).click(function () { 
        //         let randomR = Math.floor((Math.random() * 255) + 0);
        //         let randomG = Math.floor((Math.random() * 255) + 0);
        //         let randomB = Math.floor((Math.random() * 255) + 0);

        //         $(`.list${p}`).css('background-color', `rgb(${randomR}, ${randomG}, ${randomB})`);
        //     });

        //     $(`.list${p}`).dblclick(function () { 
        //         $(this).remove();

        //     });

        //     console.log(`${p}`);

        // }); 

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