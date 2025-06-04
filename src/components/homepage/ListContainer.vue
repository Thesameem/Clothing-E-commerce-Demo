<script setup>

    let ListData = [
        {
            id: 1,
            image: '',
            title: '',
            description: ''
        }
    ];

</script>

<template>
    <div class="list-container">
        <ul class="wrapper">
            <li>
                <img src="./../../images/clothing2-home-icon1.png" alt="">
                <span>Always free shipping</span>
                <p>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </li>
            <li>
                <img src="./../../images/clothing2-home-icon2.png" alt="">
                <span>14 day return policy</span>
                <p>Nulla imperdiet sit amet magna vestibulum dapibus</p>
            </li>
            <li>
                <img src="./../../images/clothing2-home-icon3.png" alt="">
                <span>Quick delivery in 48h</span>
                <p>Nullam wisi ultricies gravida vitaen dapibus risus</p>
            </li>
            <li>
                <img src="./../../images/clothing2-home-icon4.png" alt="">
                <span>Online payment</span>
                <p>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </li>
        </ul>
    </div>
</template>