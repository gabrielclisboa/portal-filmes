const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function onLoad() {
    const value = decodeURI(window.location.href.split('?q=')[1]);
    $.ajax({
        url: TMDB_ENDPOINT_BASE + '/search/movie?language=pt-BR',
        data: {
            api_key: '92ff8833eefb5dc7c57585e5053c5715',
            query: value,
        },
    }).done(function (data) {
        let texto = '';
        for (i = 0; i < data.results.length; i++) {
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            titulo = data.results[i].original_title;
            descricao = data.results[i].overview;
            date = data.results[i].release_date;
            aval = data.results[i].vote_average;
            const value = data.results[i].id;
            const valueEncode = encodeURI(value);
            const link = '../pages/pesquisa-retorno.html?q=' + valueEncode;
            texto += `<div class="mb-2 col-3"><div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top" alt="${titulo}">
            <div class="bg-secondary card-body">
                <h5 class="card-title"><b>${titulo}</b></h5>
                <p class="card-text">${descricao}</p>
                    <p class="card-data"><b>Avaliação:</b> ${aval}</p>
                    <p class="card-data"><b>Lançamento:</b> ${date}</p>
                <a href="${link}" class="btn btn-warning">Detalhes</a>
            </div>
        </div></div>`;
        }
        $('#pesquisa_filmes').html(texto);
    });
}

function botaoPesquisa() {
    const value = document.getElementById('campo_pesquisa').value;
    $.ajax({
        url: TMDB_ENDPOINT_BASE + '/search/movie?language=pt-BR',
        data: {
            api_key: '92ff8833eefb5dc7c57585e5053c5715',
            query: value,
        }
    }).done(function (data) {
        let texto = '';

        for (i = 0; i < 8; i++) {
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            titulo = data.results[i].original_title;
            descricao = data.results[i].overview;
            date = data.results[i].release_date;
            aval = data.results[i].vote_average;
            link = 'https://www.themoviedb.org/movie/' + data.results[i].id;
            texto += `<div class="col-3"><div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top" alt="${titulo}">
            <div class="bg-secondary card-body">
                <h5 class="card-title"><b>${titulo}</b></h5>
                <p class="card-text">${descricao}</p>
                    <p class="card-data"><b>Avaliação:</b> ${aval}</p>
                    <p class="card-data"><b>Lançamento:</b> ${date}</p>
                <a href="${link}" class="btn btn-primary">Detalhes</a>
            </div>
        </div></div>`;
        }
        $('#pesquisa_filmes').html(texto);
    });
}

window.onload = function () {
    onLoad();
    $('#bt_pesquisa').click(botaoPesquisa);
    
}