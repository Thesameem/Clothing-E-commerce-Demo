<template>
    <nav class="wrapper">
        <div class="nav-bar">
            <img src="./../../images/main-logo.png" alt="logo" width="140px" onclick="" id="logo">
            <div class="nav-links">
                <RouterLink to="/index.html">Home</RouterLink>
                <RouterLink to="/about-us">About us</RouterLink>
                <RouterLink to="/shop">Shop</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </div>
            <button>Buy Now</button>
            <!-- hamburger menu image -->
            <div class="nav-menubar">
                <img src="./../../images/menubar.svg" alt="menu" id="menu">
            </div>
        </div>
        <!-- my account part -->
        <div class="nav-acc">
            <div class="ikon">
                <img src="./../../images/lock.svg" alt=""><sup><img src="./../../images/number.png" alt=""></sup>
                <img src="./../../images/search.svg" alt="">
            </div>
            <span>
                <p>My account</p>
                <img src="./../../images/rightb.svg" alt="">
        </span>
        </div> 
        <!-- hamburger menu bar -->
        <div class="menuBar hide animate__animated animate__slideInDown" id="menuBar">
            <RouterLink to="/index.html">Home</RouterLink>
            <RouterLink to="/about-us.html">About us</RouterLink>
            <RouterLink to="/shop.html">Shop</RouterLink>
            <RouterLink to="/contact.html">Contact</RouterLink>
            <RouterLink to="/shop.html">Buy Now</RouterLink>
        </div>
    </nav>
</template>