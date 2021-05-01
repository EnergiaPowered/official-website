export default function authHeader() {
    const user = localStorage.getItem('user');
    if (user && user) {
        return { 'x-auth-token': user };
    } else {
        return {};
    }
}