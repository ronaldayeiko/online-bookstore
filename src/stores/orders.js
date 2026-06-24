import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id:1,
                customer_id:2,
                book_id:4,
                quantity:1,
                total_paid:1800,
                satus:"processing"
            },
              1:{
                id:2,
                customer_id:5,
                book_id:4,
                quantity:1,
                total_paid:2000,
                satus:"processing"
            },
              2:{
                id:3,
                customer_id:4,
                book_id:4,
                quantity:2,
                total_paid:3000,
                satus:"fulfiled"
            },
              3:{
                id:4,
                customer_id:3,
                book_id:4,
                quantity:2,
                total_paid:4000,
                satus:"processing"
            },
              4:{
                id:5,
                customer_id:2,
                book_id:4,
                quantity:1,
                total_paid:1800,
                satus:"fulfiled"
            },
              5:{
                id:6,
                customer_id:4,
                book_id:4,
                quantity:1,
                total_paid:1800,
                satus:"processing"
            },
              6:{
                id:7,
                customer_id:5,
                book_id:4,
                quantity:1,
                total_paid:1800,
                satus:"fulfiled"
            },
        }

        return{
            orders
        }
   },
   actions:{
       
   },
   persist: true,
})