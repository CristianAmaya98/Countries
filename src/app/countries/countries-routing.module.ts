import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DetalleCountryComponent } from "./pages/detalle-country/detalle-country.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routesChildred: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'detalle/:id',
                component: DetalleCountryComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]



@NgModule({
    imports: [
        RouterModule.forChild(routesChildred)
    ],
    exports: [
        RouterModule
    ]
})

export class CountriesRoutingModule { }