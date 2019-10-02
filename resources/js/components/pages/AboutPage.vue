<template>
    <div id="about-page">

        <section id="intro text-center">
            <div class="container">
                <h2 class="max-w-3xl">We work towards building your global success stories.</h2>
                <div class="line"></div>
                <div class="max-w-4xl">
                    <p class="alt-body">Bamboo Factory is a cross-cultural consultancy that helps you understand the do’s and don’ts of your target market, does the ground work to get your business running - from registration to validating your business model in the new geography.</p>
                    <div class="mb-4"></div>
                    <p class="max-w-3xl">We are here to serve you towards achieving your expansion goals faster, with less money spent. We time your efforts, assist you to acquire your initial customers and make new strategic international partnerships.</p>
                </div>


                <div class="mb-4"></div>
                <p class="alt-body"></p>
                <div class="buttons-container mt-8">
                    <div class="std-btn mr-2">Our Services</div>
                    <div class="std-btn">Schedule Assessment</div>
                </div>
            </div>
        </section>

        <section id="founder">
            <div class="container">
                <p class="alt-body highlight">About the Founder</p>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-5/12">
                        <div class="content">

                            <h2 class="mb-8">Juliane Frommter</h2>
                            <!--<div class="links">-->
                                <!--<a href="#" class="txt-btn">Download CV</a>-->
                            <!--</div>-->
                            <div class="juliane-img h-64 w-64 bg-gray-300"></div>
                        </div>
                    </div>
                    <div class="w-full lg:w-7/12">
                        <div class="content">
                            <div class="mb-24"></div>
                            <h3 class="mb-6">Though naturally strong in Germany and India through her time spent working within these ecosystems, Juliane has created a strong network from the US & Canada to the UK, France, Finland or Israel all the way to Japan, China, Singapore & Australia. </h3>

                            <router-link to="/profile" class="txt-btn md">
                                Read Full Profile
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <div class="container">
                <div class="testimonial">
                    <h2 class="max-w-5xl mx-auto text-center">
                        <span class="font-bold highlight">"</span>
                        We have truly been able make the right connections with the right people at the right time to be able to establish the type of partnerships that we want to. Juliane helped us we utilize our efforts and time in the right direction.
                        <span class="font-bold highlight">"</span>
                        <div class="testimonial-profile text-center mt-12">
                            <h3 class="highlight">Katarina Ilic</h3>
                            <p class="font-bold mb-0">Co-Founder</p>
                            <p class="font-bold">Voltera</p>
                        </div>
                    </h2>
                    <div class="max-w-4xl">
                        <div class="flex flex-wrap">
                            <div class="w-1/2">
                                <div class="content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="network-cta" class="mb-0">
            <NetworkCTAPartial></NetworkCTAPartial>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>