<template>
    <div id="home-page">
        <section id="hero">
            <div class="container">
                <div class="flex">
                    <div class="w-full lg:w-7/12">
                        <div class="content">
                            <div class="mb-20"></div>
                            <div class="">
                                <h2>Taking startups <span class="highlight">global</span>.</h2>
                                <div class="mb-4"></div>
                                <p class="max-w-xl alt-body">Bamboo Factory is a cross-cultural consultancy which supports Startups, Scaleups and Technology SME’s with international expansion, scaling, market access. We help startups grow fast, with flexible services and strong networks.</p>

                                <div class="button-container mt-8">
                                    <a class="std-btn">Get in touch</a>
                                    <a href="" class="std-btn no-border">Learn More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-full lg:w-5/12">
                        <img class="mx-auto" :src="'/static/images/hero.png'" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section id="bamboo-what">
            <div class="container">
                <h1>Bamboo <span class="font-normal">what?</span></h1>
                <div class="mb-2"></div>
                <div class="max-w-6xl mb-12">
                    <h3 class="font-normal">Companies with a high Bamboo Factor are Strong, Fast growing and Sustainable, have a high degree of internationalization and possibilities for quick results, just like the natural growth of the versatile Bamboo plant.
                    </h3>
                </div>

                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <div class="content">
                            <div class="">
                                <div class="heading mb-4">
                                    <p class="alt-body">the</p>
                                    <h2 class="highlight">Problem</h2>
                                </div>
                                <p class="pr-20">Setting the business up in new markets, though essential for scaling up, becomes a complex and arduous process. Often times, it takes too long to prepare or understand what exactly one may need.</p>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="heading mb-4">
                            <p class="alt-body">the</p>
                            <h2 class="highlight">Solution</h2>
                        </div>
                        <p class="pr-20">We connect you to ecosystems, opportunities, talent and offer strong partnerships across globe with our trusted networks, making the process easier and your efforts efficient.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="bamboo-factor">
            <div class="container">
                <div class="flex">
                    <div class="w-8/12">
                        <div class="content">
                            <div class="max-w-2xl">
                                <div class="quality mb-8">
                                    <h3>Strong</h3>
                                    <p>The bamboo plant is <span class="font-bold">strong</span>. Similarly, business is strong and resilient to changing environments. It is not just about opening opportunistic revenue opportunities but building durable internationally scaling ventures.</p>
                                </div>
                                <div class="quality">
                                    <h3>Fast Growing</h3>
                                    <p>Bamboo is the fastest growing plant on this planet growing at an amazing 47.6 inches in a 24 hour period. Similarly, to internationalize, businesses need to be set on process allowing faster growth. </p>
                                </div>
                                <div class="quality">
                                    <h3>Sustainable</h3>
                                    <p>It’s just like the story of the grasshopper and the octopus. All year long, the
                                        grasshopper kept burying acorns for winter, while the octopus mooched off his
                                        girlfriend and watched TV. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-4/12">
                        <div class="content pt-16">
                            <div class="heading mb-8 ">
                                <h3 class="leading-tight">the</h3>
                                <h2 class="leading-tight">Bamboo</h2>
                                <h2 class="leading-tight">Factor</h2>
                            </div>

                            <p class="font-bold">Bamboo Factor is a combination of these features of a business which offers us your ‘degree of internationalization’, to help up assess status and focus our efforts towards achieving the right results for your specific needs.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="network-cta">
            <NetworkCTAPartial></NetworkCTAPartial>
        </section>


        <section id="juliane-quote">
            <div class="container">
                <div class="mb-6">
                    <div class="max-w-6xl ">
                        <h2>You lived before you met me?! Good man. Nixon's pro-war and pro-family. I love you, buddy! Oh dear!
                            She's stuck in an infinite loop! Well, that's love for you. What kind of a father
                            would I be if I said no?”</h2>
                    </div>
                </div>


                <h2 class="highlight">Juliane Frommter</h2>
                <p class="alt-body">Founder</p>
                <div class="mb-2"></div>
                <div class="flex">
                    <div class="w-8/12">
                        <div class="content">
                            <div class="max-w-3xl mb-6">
                                <p>Juliane Frömmter has 10+ years of Sales and Business Development Experience in the Tech Industry, a couple of those years in Tech Startups for T-Hub Foundation in Hyderabad, India’s most ambitious Incubation and Acceleration Initiative, she has built bridges for Startups, Ecosystem Enablers and Governments to support the internationalization of both Indian and International Startups and is more closely knit ecosystems across the globe.</p>
                            </div>

                            <div class="txt-btn md"><a href="">Read full profile</a></div>
                        </div>
                    </div>
                    <div class="w-4/12">
                        <div class="content">
                            <router-link to="/profile"></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="video-block">
            <div class="video-frame"></div>
        </div>


        <section id="services">
            <div class="container">
                <h2 class="highlight mb-4">Services</h2>
                <h3 class="max-w-5xl">We provide global growth opportunities by helping players within the startup ecosystem to establish sustainable strategic partnerships
                    across the globe, involving all the key stakeholders in the ecosystem.</h3>

                <div class="mb-12"></div>

                <div class="flex flex-wrap">
                    <div class="w-1/2">
                        <div class="content">
                            <div class="general-service">
                                <p class="alt-body">We act as a trust factor to bring the right people together and glue to make them stick together. </p>
                                <p>We help all important ecosystem players with setting the right goals, building the required bridges/networks and establish trust and deal-flow between various stakeholders.</p>
                            </div>
                            <div class="general-service">
                                <p class="alt-body">Acquiring local talent, soft-landing, initial clients acquisition and other localized efforts
                                </p>
                                <p>We help you put together a customized strategy for your specific geographic needs and business goals. </p>
                            </div>
                            <div class="general-service">
                                <p class="alt-body">Our network, partners = Your network, partners</p>
                                <p>All year long, the grasshopper kept burying acorns for winter, while the octopus
                                    mooched off his girlfriend and watched TV. Well, that’s love for you. What kind of a
                                    father would I be if I said no?”</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2">
                        <div class="content text-right client-list">
                            <div class="mb-24"></div>
                            <h1 class="highlight mb-6">We help</h1>
                            <h2 class="client-name">Startups</h2>
                            <h2 class="client-name">Ecosystem Enablers</h2>
                            <h2 class="client-name">Governments</h2>
                            <h2 class="client-name">Corporate</h2>
                            <h2 class="client-name">Investors</h2>
                        </div>
                    </div>

                    <div class="text-right">
                        <h1 class="highlight mb-8">synergize towards  rapid internationalization.</h1>
                        <div class="buttons-container">
                            <div class="std-btn mr-2">Our Services</div>
                            <div class="std-btn">Schedule Assessment</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>