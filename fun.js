function ProfileData() {
    let xhr = new XMLHttpRequest()

    xhr.onload = function () {        

        let data = JSON.parse(this.responseText)

        let perfilData = `
        <div class="col-lg-4">
        <div class="text-center">
          <img class="img-fluid" style="width: 100rem;" src="https://avatars.githubusercontent.com/u/29712083?v=4" alt="">
        </div>
      </div>
        <div class="col-lg-8">
        <h2>Luana Pereira Lins Brasil</h2>
        <p><strong>Descrição</strong> <br>
          24 anos<br>
          Graduanda em Ciência da Computação pela PUC-MG<br>
          Analista de Dados<br>
          <br>
          <a href="https://github.com/luanaplins"><img class="img-fluid" style="width: 3rem;" src="imgs/github.png"></a><br>
          <strong>Profile</strong>: ${data.name}<br>
          <strong>Followers</strong>: ${data.followers}     <strong>Following</strong>: ${data.following}<br>
          <strong>Repositories</strong>: ${data.public_repos}
        </p>
        <p>
          <br>
          <h2 class="text-left mt-4 mb-4">Redes sociais</h2>
          <div class="social">
          <a href="https://www.facebook.com/Luanaplins"><span><i class="fab fa-facebook-square fa-3x"></i></span></a>
          <a href="https://www.instagram.com/luanaplins/"><span><i class="fab fa-instagram icon-lg text-danger fa-3x"></i></span></a>
          <a href="https://www.linkedin.com/in/luana-pereira-lins-brasil-1466bb140/"><span><i class="fab fa-linkedin icon-lg fa-3x"></i></span></a>
            </div>
          </div>`;
        
        document.getElementById('github').innerHTML = perfilData;
    }

    xhr.open('GET', 'https://api.github.com/users/luanaplins');
    xhr.send();
}