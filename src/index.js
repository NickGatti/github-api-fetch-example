console.log('Webpack!');

let userAdmins = [];
const userAdmin = function (data) {
    const newArray = data.filter((user) => {
        return user.site_admin === true;
    })
    userAdmins.push(newArray);
    console.log(userAdmins);
}

const clientID = '98954493e02caf7aef3a';
const clientSecret = 'c7ed9926c7dec5458b8c5202c1736ca722f4f612';

let userCount = 0;
function getUsers (id) {
    if (userCount > 150) return;
    fetch(`https://api.github.com/users?client_id=${clientID}&client_secret=${clientSecret}&since=${id}`, {method: 'GET' }).then(function(data) {
        return data.json();
    }).then(function(data){
        userAdmin(data);
        userCount += data.length;
        const lastId = data[data.length - 1];
        getUsers(lastId);
    }).catch((err) => {
        console.log('ERROR: ', err);
    })
}
getUsers(0);