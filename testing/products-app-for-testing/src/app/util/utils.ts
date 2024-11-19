import { Product } from "../models/product";

export const filtrarProductos = (productos: Product[], texto: string) => {
    if (productos && texto) return productos.filter(aP => aP.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));
    else return productos;
}