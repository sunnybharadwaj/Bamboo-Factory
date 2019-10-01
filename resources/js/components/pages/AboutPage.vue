<template>
    <div id="about-page">

        <section id="intro text-center">
            <div class="container max-w-3xl text-center">
                <h2>All year long, the grasshopper kept burying acorns for winter.</h2>
                <div class="line mx-auto"></div>
                <p class="alt-body">Hello, little man. I will destroy you! Michelle, I don't regret this, but I both rue and lament it.
                    But I've never been to the moon! Oh, how awful. Did he at least die painlessly? …To shreds, you say.
                    Well, how is his wife holding up? …To shreds, you say.</p>
                <div class="mb-4"></div>
                <p class="alt-body">I will destroy you! Michelle, I don’t regret this, but I both rue and lament it. But I’ve never been
                    to the moon! Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his
                    wife holding up?</p>
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
                            <h3 class="mb-6">It’s just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. </h3>

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
                        You lived before you met me?! Good man. Nixon's pro-war and pro-family. I love you, buddy! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. What kind of a father would I be if I said no?
                        <span class="font-bold highlight">"</span>
                        <div class="testimonial-profile text-center mt-12">
                            <h3>Mark Furhman</h3>
                            <p class="font-bold">Senior Detective</p>
                            <p class="font-bold">Department of Police, LA</p>
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

        <section id="network-cta">
            <NetworkCTAPartial></NetworkCTAPartial>
        </section>

        <ul>
            <li>Testimonials</li>
            <li>Join Bamboo Network</li>
            <li>CTA</li>
        </ul>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>