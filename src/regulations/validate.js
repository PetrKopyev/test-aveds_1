let validateEmail = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Пожалуйста введите email адрес'));
    } else {
        callback();
    }
};
let validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Пожалуйста, введите пароль'));
    } else if (value.length < 8) {
        callback(new Error('Пароль должен содержать не менее 8 символов'));
    } else {
        callback();
    }
};

export {validateEmail, validatePass}
