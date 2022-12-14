function getValue(id){
    return document.getElementById(id).value.trim();
}

function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}
function validate()
{
    var flag = true;
    // 1 username
    var username = getValue('username');
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = false;
        showError('username', 'Vui lòng kiểm tra lại Username');
        flag = true;
    }
    // 2 Email
    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
        showError('email', 'Vui lòng kiểm tra lại Email');
        
    }
    // 3 password
    var password = getValue('password');
    var repassword = getValue('repassword');
    if (password == '' || password.length < 8 ){
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại Password');
        showError('repassword', 'Vui lòng kiểm tra lại Password');
    }
    return flag;
};
btnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    let json = JSON.stringify(user);
    if (!username.value || !email.value || !password.value) {
      alert("vui long nhap day du thong tin");
    } else {
      localStorage.setItem(username.value, json);
      alert("dang ky thanh cong");
    }
})

