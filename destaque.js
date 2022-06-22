parouEm = 4;

function filmeDestaque(genero='') {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
    data: {
      api_key: '92ff8833eefb5dc7c57585e5053c5715',
    }
  }).done(function (data) {
    let texto = '';

    for (i = 0; i < parouEm; i++) {
      imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path ;
      descricao = data.results[i].overview;
      titulo = data.results[i].original_title;
      aval = data.results[i].vote_average;
      date = data.results[i].release_date;
      const value = data.results[i].id;
      const valueEncode = encodeURI(value);
      const link = '../pages/pesquisa-retorno.html?q=' + valueEncode;
      texto += `<div class="mt-3 col-3"><div class="card card_poster" style="width: 18rem;">
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
    $('#destaque_filmes').html(texto);
    parouEm +=4;
  });

}

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  window.location.href = './pages/pesquisa.html?q=' + valueEncode;
}

$(document).ready(function () {
  filmeDestaque();
  $('#bt_pesquisa').click(pesquisaFilmes);
});
