import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id:1,
                firstname:"ronald",
                lastname:"Mich",
                email:"ronaldmich@gmail.com",
                phone:"0768258902",
                location:"Nairobi",
                address:"123,Main Street"
            },
            1:{
                id:2,
                firstname:"jacob",
                lastname:"Doe",
                email:"jacobdoe@gmail.com",
                phone:"0768258902",
                location:"Busia",
                address:"156,Main Street"
            },
            2:{
                id:3,
                firstname:"jack",
                lastname:"Mich",
                email:"jackdmich@gmail.com",
                phone:"07682567802",
                location:"Narok",
                address:"145,Main Street"
            },
            3:{
                id:4,
                firstname:"Brenda",
                lastname:"Harvey",
                email:"breandahurvey@gmail.com",
                phone:"0768789902",
                location:"Kakamega",
                address:"189,East Street"
            },
            4:{
                id:5,
                firstname:"evans",
                lastname:"Mich",
                email:"evansmich@gmail.com",
                phone:"07683478902",
                location:"Mombasa",
                address:"153,Main Street"
            },
            5:{
                id:6,
                firstname:"malon",
                lastname:"Mich",
                email:"malconmich@gmail.com",
                phone:"07435258902",
                location:"kericho",
                address:"293,Main Street"
            },
            6:{
                id:7,
                firstname:"joseph",
                lastname:"Mich",
                email:"josephmich@gmail.com",
                phone:"0768256702",
                location:"Kajiado",
                address:"133,West Street"
            }
        }

        return{
            users
        }
   },
   actions:{
      
   },
   persist: true,
})