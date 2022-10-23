import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {



    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000,
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }];

    nuevo: Personaje = {
        nombre: 'Maruko',
        poder: 20000
    };

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(personaje:Personaje) {
        
        this._personajes.push(personaje);
    }

}