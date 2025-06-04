<script setup>

    import HeroContainer from '@/components/homepage/HeroContainer.vue';
    import WeeklyDeals from '@/components/homepage/WeeklyDeals.vue';
    import WhoWeAre from '@/components/homepage/WhoWeAre.vue';
    import ListContainer from '@/components/homepage/ListContainer.vue';
    import Footer from '@/components/reusable/Footer.vue';

    let WeeklyDeals1 = [
        {   
            id: 1,
            title: 'Quisque lorem tortor',
            price: '£28.00 - £30.00',
            image: 'src/images/clothing2-products-pic8-300x300.jpg',
            premium: true
        },
        {   
            id: 2,
            title: 'Quisque lorem tortor',
            price: '£11.20',
            image: 'src/images/clothing2-products-pic7-300x300.jpg',
            premium: true,
            discount: '£12.50'

        },
        {   
            id: 3,
            title: 'Etiam ullamcorper',
            price: '£12.00',
            image: 'src/images/clothing2-products-pic6-300x300.jpg',
            premium: false
        },
        {   
            id: 4,
            title: 'Nulla imperdiet sit amet',
            price: '£25.00',
            image: 'src/images/clothing2-products-pic5-300x300.jpg',
            premium: false
        }
    ];

    let WeeklyDeals2 = [
        {   
            id: 1,
            title: 'Aliquam erat ac ipsum',
            price: '£24.00',
            image: 'src/images/clothing2-products-pic2-300x300.jpg',
            premium: false
        },
        {   
            id: 2,
            title: 'Aliquam sem',
            price: '£16.00',
            image: 'src/images/clothing2-products-pic11-300x300.jpg',
            premium: false

        },
        {   
            id: 3,
            title: 'Curabitur et ligula',
            price: '£11.20',
            image: 'src/images/clothing2-products-pic7-300x300.jpg',
            premium: true,
            discount: '£12.50'
        },
        {   
            id: 4,
            title: 'Etiam ullamcorper',
            price: '£12.00',
            image: 'src/images/clothing2-products-pic6-300x300.jpg',
            premium: false
        }
    ];

</script>

<template>

    <HeroContainer />

    <WeeklyDeals class="content" :deal="WeeklyDeals1" />

    <WeeklyDeals class="content" style="background-color: white;" :deal="WeeklyDeals2" />

    <WhoWeAre />

    <ListContainer />




</template>