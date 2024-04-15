$(document).ready(function () {
    $(".button-log a").click(function () {
        $(".overlay-login").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
        
    $('.overlay-close1').on('click', function () {
        $(".overlay-login").fadeToggle(200);
        $(".button-log a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
      });
   
    $('.search-form').on('submit', function(event) {
          event.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire
      
          var keyword = $(this).find('input[name="search"]').val(); // Récupère la valeur du champ de recherche
      
          $.ajax({
            url: '/recherche', // Votre route de recherche
            method: 'GET',
            data: { keyword: keyword }, // Paramètre de recherche
            success: function(response) {
              // Manipulez les résultats de recherche ici, par exemple, affichez-les dans une liste ou une autre zone de votre page
              console.log(response);
            },
            error: function(error) {
              console.error(error);
            }
        });
    });
});




















