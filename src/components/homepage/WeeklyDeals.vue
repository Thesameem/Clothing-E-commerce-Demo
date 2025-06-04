<script setup>

   let props = defineProps({
        deal: {
            type: Array,
            default: []
        }
   });


</script>

<template>
    <div>
        <!-- featured weakly deals section -->
        <div class="content-row-1 wrapper">
            <div class="topic">
                <div class="feature-part">
                    <span>featured</span>
                    <h4>weekly deals</h4>
                </div>
                <div class="line"></div>
            </div>
            <ul>
                <li v-for="product in deal" :key="product.id">
                    <div v-if="product.premium" class="box"></div>
                    <img v-if="product.premium" src="../../images/white-star.svg" id="img">  
                    <img :src="product.image" :alt="product.title">
                    <div class="detail">
                        <p>{{ product.title }}</p>
                        <span><strong>{{ product.discount }}</strong> {{ product.price }}</span>
                    </div>
                </li>
                
            </ul>
            <div class="button">
                <a href="shop.html">See all products </a>
                <img src="../../images/right.svg" alt="">
            </div>
        </div>
    </div>
</template>