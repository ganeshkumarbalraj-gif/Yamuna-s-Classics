export interface OrderDetails {

  id:string;

  customer:{
    name:string;
    phone:string;
    email:string;
    address:string;
  };

  items:{
    name:string;
    quantity:number;
    price:number;
  }[];

  total:number;

  paymentStatus:string;

}


export function saveOrder(
  order:OrderDetails
){

localStorage.setItem(
"latestOrder",
JSON.stringify(order)
);

}