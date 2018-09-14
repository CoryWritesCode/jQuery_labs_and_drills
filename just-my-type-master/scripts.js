$(document).ready(function () {
  
  $('#keyboard-upper-container').hide();

  $(document).keydown(function (e) { 
    
  if (e.keyCode === 16) {

      $('#keyboard-upper-container').show();
      $('#keyboard-lower-container').hide();

    };
    
  });

  $(document).keyup(function (e) { 

    if (e.keyCode === 16) {

      $('#keyboard-upper-container').hide();
      $('#keyboard-lower-container').show();

    };

  });

  $(document).on('keypress', function () {

    let keyClicked = event.which;
    $(`#${event.which}`).css('background', 'yellow');

    $(document).on('keyup', function () {

      $(`#${keyClicked}`).css('background', '');

    });

  });

  let sentences = [

    'ten ate neite ate nee enet ite ate inet ent eate', 
    'Too ato too nOt enot one totA not anot tOO aNot', 
    'oat itain oat tain nate eate tea anne inant nean', 
    'itant eate anot eat nato inate eat anot tain eat', 
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
  
  ];

  let i = 0;
  let l = 0;

  let moveBlock = 10;

  $('#sentence').text(sentences[i]);
  $('#target-letter').text(`${sentences[i][l]}`);
  console.log(sentences[i].length);


  $(document).on('keypress', function () {

    if (event.which === sentences[i][l].charCodeAt()) {

       $('#yellow-block').css('margin-left', `${moveBlock}px`);
       moveBlock += 17;
       l++;
       console.log(l);
       
      if (l === (sentences[i].length - 1)) {

        moveBlock = 0;

        };

      if (l === sentences[i].length) {

        i++
        $('#sentence').text(sentences[i]);
        l = 0

      };

      if (sentences[i][l].charCodeAt() === 32) {

        $('#target-letter').text('[space]');

      } else {

        $('#target-letter').text(`${sentences[i][l]}`);

      };

    };
    
  });

});