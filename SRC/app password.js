document
    .getElementById('human')
    .append('i am Sally');

function login() {
    // get username
    let username = document
        .getElementById('usr')
        .value;


    //get password
    let password = document
        .getElementById('pwd')
        .value;

    let validLoginList =[
        {username: 'sally', password: '1234'},
        {username: 'john', password: 'abc'}
    ]

    validLoginList.forEach (function(user) {
        if (usr == user.username && pwd == user.password) {
            alert ('login successful');
        } else {
            alert ('login fail');
        }