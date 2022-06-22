const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function filmesLancamentos() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
    data: {
      api_key: '92ff8833eefb5dc7c57585e5053c5715',
    }
  }).done(function (data) {
    let texto = '';

    for (i = 0; i < 3; i++) {
      const value = data.results[i].id;
      const valueEncode = encodeURI(value);
      const link = '../pages/pesquisa-retorno.html?q=' + valueEncode;
      imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
      titulo = data.results[i].original_title;
      overview = data.results[i].overview;
      anoEstreia = data.results[i].release_date;

      if(i == 1){
        texto +=
        `<div class="carousel-item active">
        <div class="container">
            <div id="itemCarrosel" class="row">
                <div class="col-xl-7 col-12">
                  <a href="${link}" class="link_img"><img src="${imagem}" alt="${titulo}" class="imgLançamento"> </a>
                </div>
                <div class="col-xl-5 col-12">
                    <h3>${titulo}</h3>
                    <p><b>Descrição: </b>
                    ${overview}</p>
                    <p><b>Estreia: </b>
                    ${anoEstreia}</p>
                </div>
            </div>
        </div>
    </div>`;

    }else{
      texto +=
      `<div class="carousel-item">
      <div class="container">
        <div id="itemCarrosel" class="row">
              <div class="col-xl-7 col-12">
                <a href="${link}" class="link_img"><img src="${imagem}" alt="${titulo}" class="imgLançamento"> </a>
              </div>
              <div class="col-xl-5 col-12">
                  <h3>${titulo}</h3>
                  <p><b>Descrição: </b>
                  ${overview}</p>
                  <p><b>Estreia: </b>
                  ${anoEstreia}</p>
              </div>
          </div>
      </div>
  </div>`;
    }
  }
    console.log(data);
    $('.carousel-inner').html(texto);
  });

}
 

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  const link = window.location.href = '../pages/pesquisa.html?q=' + valueEncode;
}

function changeNameDropDown(event){
  document.getElementById("textoDropDowm").innerHTML = "Categoria: " + event;
}

$(document).ready(function () {
  filmesLancamentos();
  $('#bt_pesquisa').click(pesquisaFilmes);
});



