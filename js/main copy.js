let cantidadDeUsuarios = 0;
fetch('https://reqres.in/api/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.data.length; i++) {
            mostrarUsuario(data.data[i]);
        }

    })
    .catch(function(error) {
        console.log(error);
    });

function mostrarUsuario(usuario) {
    let body = document.getElementById('data').innerHTML;

    //log(usuarios[i].email);

    body += `<div class="user-data"><img src="${usuario.avatar}" alt="hombre" srcset=""><h3>${usuario.first_name} ${usuario.last_name}</h3></div>`;
    cantidadDeUsuarios += 1;
    document.getElementById('data').innerHTML = body;
};

function doFunction() {
    fetch(`https://reqres.in/api/users/${cantidadDeUsuarios+1}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.data);
            mostrarUsuario(
                data.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};