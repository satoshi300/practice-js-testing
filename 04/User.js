export default class User {
    constructor({ email, password }) {
        this.validateEmail(email);
        this.validatePassword(password);

        this.email = email;
        this.password = password;
    }

    validateEmail(email) {
        if (!email || !email.includes('@')) {
            throw new Error('Invalid email');
        }
    }

    validatePassword(password) {
        if (!password || password.length < 6) {
            throw new Error('Invalid password');
        }
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        return this.email.includes('devmentor.pl');
    }
}