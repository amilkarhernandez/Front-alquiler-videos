import { ItemAlquiler } from './ItemAlquiler';
import { Clientes } from './Clientes';

export class Alquiler{
    id: number;
    items: Array<ItemAlquiler> = [];
    cliente: Clientes;
    total: number;
    fecha: String;
    fecha_entrega: String;

    calcularGranTotal(): number {
        this.total = 0;
        this.items.forEach((item: ItemAlquiler) => {
          this.total += item.calcularImporte();
        });
        return this.total;
      }
}