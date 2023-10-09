$(document).ready(function() {
    $("#iconToggle").click(function() {
        var icon = $("#iconToggle a i");
        if (icon.hasClass("fa-sun")) {
            console.log('Tema claro')
            icon.removeClass("fa-sun").addClass("fa-moon");
            $(".navbar").removeClass("navbar-dark").addClass("navbar-light"); // Altera para o tema claro
            $(".navbar").removeClass("bg-light").addClass("bg-dark");
            $(".navbar-brand").css("color", "white")
            $(".tema").css("color", "white !important")
            
        } else {
            console.log('Tema escuro');
            icon.removeClass("fa-moon").addClass("fa-sun");
            $(".navbar").removeClass("navbar-light").addClass("navbar-dark"); // Altera para o tema escuro
            $(".navbar").removeClass("bg-dark").addClass("bg-light");
            $(".navbar-brand").css("color", "black")
            $(".tema").css("color", "black !important")

        }
    });
});

$(document).ready(function () {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    // Função para buscar dados da API e criar os cards
    function fetchAndDisplayPokemon() {
        $.get(apiUrl, function (data) {
            const pokemonList = data.results;

            // Limpar o conteúdo existente na div de cards
            $("#pokemon-cards").empty();

            // Iterar sobre a lista de Pokémon e criar os cards
            $.each(pokemonList, function (index, pokemon) {
                const pokemonUrl = pokemon.url;

                // Buscar dados detalhados do Pokémon
                $.get(pokemonUrl, function (pokemonData) {
                    const name = pokemonData.name;
                    const imageUrl = pokemonData.sprites.front_default;
                    const tipo = pokemonData.types;
                    console.log(pokemonData);
                    console.log(tipo);

                    // Criar o card do Pokémon
                    const card = `
                        <div class="card" style="width: 13rem;">
                            <img src="${imageUrl}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                            </div>
                        </div>
                    `;

                    // Adicionar o card à div de cards
                    $("#pokemon-cards").append(card);
                });
            });
        });
    }

    // Chamar a função para buscar e exibir os cards
    fetchAndDisplayPokemon();
});