"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { Product } from "@/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

type CartAction =
  | {
      type: "LOAD";
      payload: CartItem[];
    }
  | {
      type: "ADD";
      payload: Product;
    }
  | {
      type: "REMOVE";
      payload: string;
    }
  | {
      type: "INCREASE";
      payload: string;
    }
  | {
      type: "DECREASE";
      payload: string;
    }
  | {
      type: "CLEAR";
    };


interface CartContextType {

  cart: CartItem[];

  itemCount: number;

  totalPrice: number;


  addToCart(product: Product): void;

  removeFromCart(id:string): void;

  increaseQuantity(id:string): void;

  decreaseQuantity(id:string): void;

  clearCart():void;
}


const CartContext =
createContext<CartContextType | null>(null);



function reducer(
state:CartState,
action:CartAction
):CartState {


switch(action.type){


case "LOAD":

return {
cart:action.payload
};



case "ADD":

const existing =
state.cart.find(
item =>
item.product.id === action.payload.id
);


if(existing){

return {

cart:
state.cart.map(item =>
item.product.id === action.payload.id
?
{
...item,
quantity:item.quantity+1
}
:
item
)

};

}


return {

cart:[
...state.cart,
{
product:action.payload,
quantity:1
}
]

};



case "REMOVE":

return {

cart:
state.cart.filter(
item =>
item.product.id !== action.payload
)

};



case "INCREASE":

return {

cart:
state.cart.map(item =>
item.product.id === action.payload
?
{
...item,
quantity:item.quantity+1
}
:
item
)

};



case "DECREASE":

return {

cart:
state.cart
.map(item =>
item.product.id === action.payload
?
{
...item,
quantity:item.quantity-1
}
:
item
)
.filter(item=>item.quantity>0)

};



case "CLEAR":

return {
cart:[]
};


default:

return state;

}

}



export function CartProvider({
children
}:{
children:ReactNode;
}){


const [state,dispatch]=
useReducer(
reducer,
{
cart:[]
}
);



useEffect(()=>{

const saved =
localStorage.getItem("cart");


if(saved){

dispatch({
type:"LOAD",
payload:JSON.parse(saved)
});

}

},[]);



useEffect(()=>{

localStorage.setItem(
"cart",
JSON.stringify(state.cart)
);

},[state.cart]);




const value =
useMemo(()=>{


const itemCount =
state.cart.reduce(
(sum,item)=>
sum+item.quantity,
0
);


const totalPrice =
state.cart.reduce(
(sum,item)=>
sum+
(item.product.price ?? 0)
*
item.quantity,
0
);



return {

cart:state.cart,

itemCount,

totalPrice,


addToCart(product:Product){

dispatch({
type:"ADD",
payload:product
});

},


removeFromCart(id:string){

dispatch({
type:"REMOVE",
payload:id
});

},


increaseQuantity(id:string){

dispatch({
type:"INCREASE",
payload:id
});

},


decreaseQuantity(id:string){

dispatch({
type:"DECREASE",
payload:id
});

},


clearCart(){

dispatch({
type:"CLEAR"
});

}


};


},[state.cart]);



return (

<CartContext.Provider value={value}>

{children}

</CartContext.Provider>

);

}



export function useCart(){

const context =
useContext(CartContext);


if(!context){

throw new Error(
"useCart must be used inside CartProvider"
);

}


return context;

}