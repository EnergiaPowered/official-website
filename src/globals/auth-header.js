export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user) {
        return { 'x-auth-token': user };
    } else {
        return {};
    }
}