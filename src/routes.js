import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/layouts/LoginComponent";

export const routes = [
    { path: '/home', name: 'home', component: HomeComponent, title: 'Home', icon: 'mdi-home', menu: true},
    { path: '/login', name: 'login', component: LoginComponent, menu: false},
    { path: '*', name: '404', component: HomeComponent, menu: false }
]