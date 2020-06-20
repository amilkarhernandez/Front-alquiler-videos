import { Videojuegos } from './Videojuegos';

export class ItemAlquiler{
    
    videojuego: Videojuegos;
    cantidad: number = 1;
    importe: number;
    
    public calcularImporte(): number {
        return this.cantidad*this.videojuego.valorUnitario;
    }
}