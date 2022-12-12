let cantidadDeUsuarios = 0;
fetch('https://reqres.in/api/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        mostrarUsuarios(data.data);

    })
    .catch(function(error) {
        console.log(error);
    });

function mostrarUsuarios(usuarios) {
    let body = document.getElementById('data').innerHTML;

    for (let i = 0; i < usuarios.length; i++) {


        body +=
            `<div class="user-data"><img src="${usuarios[i].avatar}" alt="hombre" srcset=""><h3>${usuarios[i].first_name} ${usuarios[i].last_name}</h3></div>`;
        cantidadDeUsuarios += 1;
    }
    document.getElementById('data').innerHTML = body;
};

function doFunction() {
    fetch(`https://reqres.in/api/users/${cantidadDeUsuarios+1}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log([data.data]);
            mostrarUsuarios(
                [data.data]);

        })
        .catch(function(error) {
            console.log(error);
        });
};

// const contenedorUser = document.getElementById("user")

//   
// let userCard = ` <div> <img src= "${data[1].avatar_url}" />
//                         <p> ${data[1].login} </p> </div>`

//   
// contenedorUser.innerHTML = userCard