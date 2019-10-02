<header>
    <nav>
        <div class="flex">
            <div class="brand">
                <router-link to="/">
                    <img class="w-full" :src="'/static/logos/wordmark.svg'" alt="">
                </router-link>
            </div>

            <div class="links flex">
                <router-link to="/" class="nav-link"><span class="text">Home</span></router-link>
                <router-link to="/about" class="nav-link"><span class="text">About</span></router-link>
                <router-link to="/profile" class="nav-link"><span class="text">Profile</span></router-link>
                <router-link to="/services" class="nav-link"><span class="text">Services</span></router-link>
            </div>

            <div class="cta self-center">
                <router-link to="/contact" class="nav-link">
                    <span class="text">
                        Contact
                    </span>
                </router-link>
            </div>
        </div>
    </nav>

</header>