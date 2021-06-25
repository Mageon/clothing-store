// importamos los datos de shop.data.js
import SHOP_DATA from "./shop.data"

// inicializamos la var INITIAL_STATE con el objeto collections, que tiene los datos que importamos anteriormente
const INITIAL_STATE = {
  collections: SHOP_DATA
};

// creamos el reducer como shopReducer en el cual recibimos el state e inicializamos (si no se inicializa en la llamada) con los datos ya importados y almacenados en INITIAL_STATE, y obtenemos el action, el cual segun el tipo es la accione que hacemos en el switch, pero como aqui no hay ninguna otra accion pues por eso solo ponemos el default y regresamos el state entero
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;