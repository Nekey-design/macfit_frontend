<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-carousel>
            <v-carousel-item src="/c1.jpg" cover></v-carousel-item>
            <v-carousel-item src="/c2.jpg" cover></v-carousel-item>
            <v-carousel-item src="/c3.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>

   <!-- About Us -->
     <v-container style="background-color:#CFD0D6" max-width="100%">
        <v-row >
            <v-col md="8" class="text-center">
                <div class="text-display-medium mb-12">Welcome to MacFit Gym. </div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our Gym Management System is designed to simplify how fitness centers handle their daily operations. From managing memberships to tracking attendance and payments, our platform brings everything together in one easy-to-use system.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">We built the app to support gyms of all sizes, helping owners and staff save time and stay organized. With tools for member management, class scheduling, and automated billing, running a gym becomes more efficient and stress-free.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our goal is to help gyms focus on what matters most—supporting members and building a strong fitness community. By combining smart features with a user-friendly design, our system makes gym management simpler and more effective. 💪</div>
                <v-btn color="#A6AD1E">LEARN MORE</v-btn>
            </v-col>
            <v-col md="4" >
                <v-container class="d-flex align-center justify-center fill-height">
                <v-img src="/aboutus.jpg" cover></v-img>
                </v-container>
            </v-col>
        </v-row>
     </v-container>

     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="/lt1.jpg" cover></v-img>
                    <v-card-title>Pumping muscles time.</v-card-title>
                    <v-card-text>Dont waste time. Get to pumping muscles ASAP. Make sure to be as fit as possible.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="/water.jpg" cover></v-img>
                    <v-card-title>Have you taken water today?</v-card-title>
                    <v-card-text>Drinking water is essential after a workout. Take at least five glasses of water everyday.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="/lt2.jpg" cover></v-img>
                    <v-card-title>Looking for good equipments?</v-card-title>
                    <v-card-text>Make sure you get gyms with the best equipments for your training.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- reviews -->
     <v-container>
        <v-row>
            <v-col md="3">
                <v-card color="#CFD0D6">
                    <v-card-text>MacFit gym is an awesome gym cause it's affordable and also has a good management system.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card color="#CFD0D6">
                    <v-card-text>The coolest gym ever.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="4" active-color="primary"></v-rating>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card color="#CFD0D6">
                    <v-card-text>I am so happy to find a gym closer to me cause it was really hard findig one.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="2" active-color="primary"></v-rating>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card color="#CFD0D6">
                    <v-card-text>This gym is top tier.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="0" active-color="primary"></v-rating>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- contact us -->

     <v-container style="background-color:#CFD0D6" max-width="100%">
        <v-row class="text-center">
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Contact us on:</div>
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">0729901215|macFit@gmail.com</div>
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Opening hours</div>
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Mon-Fri: 8:00am-8.00pm|Sat: 10.00am-6.00pm|Sun: 10.00am-3.00pm</div>
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">MacFit gym</div>
             <div class="text-title-large font-weight-light text-medium-emphasis mb-8">&copy; 2026 MacFit gym. Designed by Mary Nekesa.</div>
        </v-row>
     </v-container>
</template>