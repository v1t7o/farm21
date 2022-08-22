export type product = {
  created_at?:Date,
  description:string,
  id:number,
  name:string,
  price:string,
  stock: inStock,
  stock_id: number,
  updated_at?:Date,
  user_id:number
}
export type inStock = {
  id:number,
  name: string /* its better to use enum */
}
