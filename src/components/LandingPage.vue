<script setup>

</script>

 <template>
    <v-container max-width="100%">
        <v-row>
           <v-col>
            <v-carousel height="490" cycle>
                <v-carousel-item src="/carosel-1.jpg" cover></v-carousel-item>
                <v-carousel-item src="/carosel-2.jpg" cover></v-carousel-item>
                <v-carousel-item src="/carosel-3.jpg" cover></v-carousel-item>
                <v-carousel-item src="/carosel-4.jpg" cover></v-carousel-item>
            </v-carousel>
           </v-col>
        </v-row>
    </v-container>
 <!-- About us  -->
  <v-container class="bg-secondary" max-width="100%">
    <v-row>
        <v-col class="text-center">
            <div class="text-display-medium mb-12">welcome to Genetic</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">An online bookstore transforms the traditional reading experience by bringing a massive literary world directly to your screen. With just a few clicks, you can browse through millions of titles spanning fiction, academic textbooks, and niche genres that physical shops rarely have room to stock. These digital platforms eliminate geographical barriers, allowing you to discover new authors, read community reviews, and purchase hardcovers, e-books, or audiobooks from the comfort of your home</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Beyond sheer variety, modern online bookstores leverage smart technology to personalize your reading journey. Advanced search filters and recommendation algorithms suggest your next favorite read based on past purchases and browsing history. Combined with seamless secure checkout options and convenient doorstep delivery, online bookselling makes building your personal library effortless, efficient, and accessible to readers anywhere in the world.</div>
        </v-col>
    </v-row>
</v-container>
<!-- our best sellers -->
 <v-container max-width="100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="/book1.jpg" cover></v-img>
                <v-card-title>The two towers</v-card-title>
                <v-card-subtitle>ksh 666</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/book2.jpg" cover></v-img>
                <v-card-title>Matt Rideny </v-card-title>
                <v-card-subtitle>ksh 1400</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to cart</v-btn>
            </v-card>
        </v-col>
                <v-col md="3">
            <v-card>
                <v-img src="/book3.jpg" cover></v-img>
                <v-card-title>company of one</v-card-title>
                <v-card-subtitle> Ksh 1900</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to cart</v-btn>
            </v-card>
        </v-col>
                <v-col md="3">
            <v-card>
                <v-img src="/book4.jpg" cover></v-img>
                <v-card-title>psychology of money</v-card-title>
                <v-card-subtitle>Ksh 400</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to cart</v-btn>
            </v-card>
        </v-col>
    </v-row>
 </v-container>
<!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Elite Readers Online Book Store &cop 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@GeneticReadersonline.com</p>
                <p>Phone: 254768258902</p>
            </div>
        </v-col>
    </v-row>
  </v-container>

</template>
    