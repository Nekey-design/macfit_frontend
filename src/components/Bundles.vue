<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

const showBundleDialog = ref(false)
const isLoggedIn = localStorage.getItem("authToken")
const selectedBundle = ref(null)
const selectedPrice = ref(null)

function showBundle(name,price){
    if(isLoggedIn){
        selectedBundle.value = name
        selectedPrice.value = price
        showBundleDialog.value = true
    }else{
        router.push('/login')
    }
}

function subscribe(){
    const userDetails = JSON.parse(localStorage.getItem('user'))
    userDetails.subscription = {
        name: selectedBundle.value,
        price: selectedPrice.value
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    showBundleDialog.value = false
}

</script>

<template>
    <v-container style="background-color:#CFD0D6" class="mt-6 justify-center align-center">
        <v-row class="justify-center">
            <div class="text-display-medium mb-12">Bundles and Pricing</div>
        </v-row>

         <v-row >
            <div class="text-title-medium font-italic">Click on a bundle to subscribe</div>
        </v-row>

        <v-row>
            <v-col md="3">
                <v-card class="text-center" @click="showBundle('Daily Pass',500)">
                    <v-icon color="#A6AD1E" icon="mdi-clock-outline" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-title color="#A6AD1E">Daily Pass</v-card-title>
                    <v-card-text>Ksh.500</v-card-text>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card class="text-center" @click="showBundle('1 month Pass', 10000)">
                    <v-icon color="#A6AD1E" icon="mdi-calendar-blank" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-title color="#A6AD1E">1 month pass</v-card-title>
                    <v-card-text>Ksh.10,000</v-card-text>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card class="text-center" @click="showBundle('3 months Pass',30000)">
                    <v-icon color="#A6AD1E" icon="mdi-calendar-blank-multiple" size="large" class="mb-n2 pa-6" ></v-icon>
                    <v-card-title color="#A6AD1E">3 months Pass</v-card-title>
                    <v-card-text>Ksh.30,000</v-card-text>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card class="text-center" @click="showBundle('6 months Pass',60000)">
                    <v-icon color="#A6AD1E" icon="mdi-calendar-blank-multiple" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-title color="#A6AD1E">6 months Pass</v-card-title>
                    <v-card-text>Ksh.60,000</v-card-text>
                </v-card>
            </v-col>
            
        </v-row>

        <v-row>
            <v-col md="12">
                 <v-card class="text-center" @click="showBundle('1 year Pass',100000)">
                    <v-icon color="#A6AD1E" icon="mdi-timer-sand-full" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-title color="#A6AD1E"> 1 year Pass</v-card-title>
                    <v-card-text>Ksh.100,000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container style="background-color: #CFD0D6" class="justify-center align-center mt-6 mb-6">
        <v-row class="justify-center">
            <div class="text-display-medium mb-6">What your bundles contain?</div>
        </v-row>

        <v-row>
            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-clock-outline" size="large" class="mb-4 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">24/7 Gym access</v-card-text>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-dumbbell" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">Dedicated men's and ladies' zone</v-card-text>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-weight-lifter" size="large" class="mb-4 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">Unlimited group classes</v-card-text>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-food-apple" size="large" class="mb-n2 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">Personalized nutrition Guidance</v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-parking" size="large" class="mb-1 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">Free parking and lockers</v-card-text>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card class="text-center" hover>
                    <v-icon color="#A6AD1E" icon="mdi-shower-head" size="large" class="mb-1 pa-6"></v-icon>
                    <v-card-text class="text-title-medium ">Steam room and showers</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col class="text-center">
             <div class="text-display-medium mb-4">How to join MacFit Gym</div>
            </v-col>
        </v-row>
           
         <v-row>
             <v-col>
                <v-list>
                    <v-list-item>1. Select your preferred bundle plan.</v-list-item>
                    <v-list-item>2. Visit us or fill out the online form for any gym.</v-list-item>
                    <v-list-item>3. Make a secure payment online.A message will be sent to inform you that your payment was successful or not.</v-list-item>
                    <v-list-item>4. Begin your fitness journey immediately!</v-list-item>
                </v-list>
            </v-col>
            <v-btn style="background-color: #A6AD1E" class="d-flex">Join now</v-btn>
        </v-row>
    </v-container>

     <v-dialog v-model="showBundleDialog" max-width="600" >

      <v-card prepend-icon="mdi-account" title="Subscribe to Bundle" >
        <v-card-text>
          You are about to subscribe to {{ selectedBundle }} at {{ selectedPrice }}. Click on the button below to complete payment
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="showBundleDialog = false" ></v-btn>
          <v-btn color="primary" variant="tonal" @click="subscribe()" >Subscribe</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>