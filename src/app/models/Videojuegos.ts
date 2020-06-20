import { Tecnologias } from './Tecnologia';

export class Videojuegos{
    id: number;
    titulo: string;
    nombre: string;
    ano: number;
    protagonistas: string;
    director: string;
    productor: string;
    tecnologia: Tecnologias;
    valorUnitario: number;
    stock: number;
}