<script setup>

    import Navigation from '../reusable/Navigation.vue';

</script>

<template>
    <div class="hero-container navigation-part">
        <Navigation />

        <!-- spring colllection section -->
        <div class="hero-section">
            <div class="row-1">
                <span>2020</span>
                <div class="line"></div>
            </div>
            <h2>Spring <br> Collection</h2>
            <p>spring rate | up to 50% off</p>
            <div class="btn">
                <a href="shop.html">Our collection</a>
            </div>
        </div>

        <!-- left right arrow -->
        <div class="arrow">
            <img src="./../../images/left.svg" alt="">
            <img src="./../../images/right-arr.svg" alt="">
        </div>
        <!-- women men image section -->

        <div class="image">
            <img src="./../../images/clothing2-slider-pic4.png" alt="">
            <img src="./../../images/clothing2-slider-pic2.jpg" alt="">
            <img src="./../../images/clothing2-slider-pic3.jpg" alt="">
        </div>
        <div class="text-1">
            <p>Woman</p>
            <div class="line"></div>
        </div>
        <div class="text-2">
            <p>Men</p>
            <div class="line"></div>
        </div>
    </div>
</template>