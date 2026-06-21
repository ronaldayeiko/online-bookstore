import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
    0:{
        id:1,
        image: "/book1.jpg",
        name: "the two towers",
        price: 1800,
        description: " Read on the dynamics of corporate politics from ancient war's perspective",
        author: " Sun Tzu",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"fiction",
        rating:4,
    },
    1:{
        id:2,
        image: "/book2.jpg",
        name: "Atomic Habits",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },
    2:{
        id:3,
        image: "/book3.jpg",
        name: "Machine Learning",
        price: 1500,
        description: "Discover the world of machine learning as a beginner ",
        author: "Fred Nwaganga",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"fiction",
        rating:3,
    },
    3:{
        id:4,
        image: "/book4.jpg",
        name: "Psychology of Intelligence",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    4:{
        id:5,
        image: "/book-1 (17).jpg",
        name: "Psychology of Intelligence",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    5:{
        id:6,
        image: "/book-1 (1).jpg",
        name: "Psychology of Intelligence",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    6:{
        id:7,
        image: "/book-1 (2).jpg",
        name: "HAPPY",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    7:{
        id:8,
        image: "/book-1 (3).jpg",
        name: "HAPPY",
        price: 1800,
        description: "J Piaget ",
        author: "JACOB",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    8:{
        id:9,
        image: "/book-1 (4).jpg",
        name: "HARRY POTTER",
        price: 1800,
        description: "ramson ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    9:{
        id:10,
        image: "/book-1 (5).jpg",
        name: "ROYAL WEDDING",
        price: 1800,
        description: "drake ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    10:{
        id:11,
        image: "/book-1 (17).jpg",
        name: "THE DEAD ROMANTICS",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    11:{
        id:12,
        image: "/book-1 (10).jpg",
        name: "STEPHEN KING",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    12:{
        id:13,
        image: "/book-1 (11).jpg",
        name: "ZERO TO ONE",
        price: 1800,
        description: "Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy.",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    13:{
        id:14,
        image: "/book-1 (12).jpg",
        name: " THE WAR",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    14:{
        id:15,
        image: "/book-1 (13).jpg",
        name: "My utmost for his highest",
        price: 1800,
        description: "J Piaget ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    15:{
        id:16,
        image: "/book-1 (14).jpg",
        name: "Dublin",
        price: 1800,
        description: "ROBIN ",
        author: "Improve your reasoning",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    16:{
        id:17,
        image: "/book-1 (15).jpg",
        name: "Asadora",
        price: 1800,
        description: "J Piaget ",
        author: "ROIN",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, insgerpiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:4,

    },
    17:{
        id:18,
        image: "/book2.jpg",
        name: "Atomic Habits",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },
    18:{
        id:19,
        image: "/book-2 (3).jpg",
        name: "Library",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },
    19:{
        id:20,
        image: "/book-2 (2).jpg",
        name: "Matt ridley",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },
    20:{
        id:21,
        image: "/book2.jpg",
        name: "Matt Ridey",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },
    21:{
        id:22,
        image: "/book-2.jpg",
        name: "Atomic ",
        price: 2000,
        description: "Small habits to become 1% better",
        author: "James Clear",
        long_description:"Books are timeless portals that transport us to new worlds, offering endless knowledge, inspiration, and escape. By expanding our vocabularies, sharpening our cognitive skills, and fostering empathy, they act as quiet companions that enrich our minds and broaden our perspectives",
        genre:"non fiction",
        rating:2,
    },


     }
      
      
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})