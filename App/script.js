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

    // Função para mapear os tipos para classes CSS correspondentes
    function mapTypeToCssClass(type) {
        switch (type) {
            case "fire":
                return "fire-type";
            case "grass":
                return "grass-type";
            case "poison":
                return "poison-type";
            case "flying":
                return "flying-type";
            case "bug":
                return "bug-type";
            case "water":
                return "water-type";
            case "normal":
                return "normal-type";
            case "electric":
                return "electric-type";
            case "ground":
                return "ground-type"
            case "fairy":
                return "fairy-type"
            case "ice":
                return "ice-type"
            case "psychic":
                return "psychic-type"
            case "fighting":
                return "fighting-type"
            case "steel":
                return "steel-type"
            case "ghost":
                return "ghost-type";
            case "rock":
                return "rock-type"
            case "dragon":
                return "dragon-type"
            default:
                return "";
        }
    }

    // Função para buscar dados da API e criar os cards
    function fetchAndDisplayPokemon() {
        // Atualizar a URL da API para buscar apenas os 151 primeiros Pokémon
        const apiUrl151 = `${apiUrl}?limit=151`;
    
        $.get(apiUrl151, function (data) {
            const pokemonList = data.results;
    
            // Limpar o conteúdo existente na div de cards
            $("#pokemon-cards").empty();
    
            // Ordenar a lista de Pokémon por ID
            pokemonList.sort(function (a, b) {
                const idA = a.url.split("/").slice(-2, -1)[0];
                const idB = b.url.split("/").slice(-2, -1)[0];
                return idA - idB;
            });
    
            // Iterar sobre a lista de Pokémon e criar os cards
            $.each(pokemonList, function (index, pokemon) {
                const pokemonUrl = pokemon.url;
    
                // Buscar dados detalhados do Pokémon
                $.get(pokemonUrl, function (pokemonData) {
                    const name = pokemonData.name;
                    const imageUrl = pokemonData.sprites.front_default;
                    const types = pokemonData.types.map(function (typeData) {
                        return typeData.type.name;
                    });
                    console.log(pokemonData.id);
    
                    // Criar o card do Pokémon com classes CSS baseadas nos tipos
                    const cardTypes = types.map(function (type) {
                        const cssClass = mapTypeToCssClass(type);
                        return `<p class="card-type ${cssClass}">${type}</p>`;
                    }).join("");
    
                    const card = `
                        <div class="card" style="width: 13rem;">
                            <div class="card-type-container" style="width: 60px;">
                                ${cardTypes}
                            </div>
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
