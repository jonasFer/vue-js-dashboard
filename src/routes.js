import HomeComponent from "@/components/HomeComponent";

export const routes = [
    { path: '', component: HomeComponent, title: 'Home', icon: 'mdi-home', menu: true},
    { path: '*', component: HomeComponent, menu: false }
]