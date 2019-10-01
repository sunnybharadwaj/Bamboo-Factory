<template>
    <div id="home-page">
        <section id="hero">
            <div class="container">
                <div class="flex">
                    <div class="w-full lg:w-7/12">
                        <div class="content">
                            <div class="mb-24"></div>
                            <div class="">
                                <h2>Taking startups <span class="highlight">global</span>.</h2>
                                <div class="mb-4"></div>
                                <p class="max-w-xl alt-body">It’s just like the story of the grasshopper and the octopus. All year long, the
                                    grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend
                                    and watched TV. </p>

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
                <div class="max-w-5xl mb-12">
                    <h3 class="font-normal">Oh, all right, I am. But if anything happens to me, tell them I died robbing
                        some old man. There’s one way and only one way to determine if an animal is intelligent. Dissect its
                        brain!</h3>
                </div>

                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <div class="content">
                            <div class="">
                                <div class="heading mb-4">
                                    <p class="alt-body">the</p>
                                    <h2 class="highlight">Problem</h2>
                                </div>
                                <p class="pr-20">Morbo can't understand his rbo prompter because he forgot how you say that letter that's
                                    shaped like a man wearing a hat. Yeah, and if you were the pope they'd be all, "Straighten
                                    your pope hat." And "Put on your good vestments."</p>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="heading mb-4">
                            <p class="alt-body">the</p>
                            <h2 class="highlight">Solution</h2>
                        </div>
                        <p class="pr-20">Morbo can't understand his teleprompter because he forgot how you say that letter that's
                            shaped like a man wearing a hat. Yeah, and if you were the pope they'd be all, "Straighten
                            your pope hat." And "Put on your good vestments."</p>
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
                                    <h3>Economical</h3>
                                    <p>It’s just like the story of the grasshopper and the octopus. All year long, the
                                        grasshopper kept burying acorns for winter, while the octopus mooched off his
                                        girlfriend and watched TV. </p>
                                </div>
                                <div class="quality">
                                    <h3>Strong</h3>
                                    <p>It’s just like the story of the grasshopper and the octopus. All year long, the
                                        grasshopper kept burying acorns for winter, while the octopus mooched off his
                                        girlfriend and watched TV. </p>
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

                            <p class="font-bold">It’s just like the story of the grasshopper and the octopus. All year long,
                                the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend
                                and watched TV. </p>
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
                            <div class="max-w-lg mb-6">
                                <p>It’s just like the story of the grasshopper and the octopus. All year long, the
                                    grasshopper kept burying
                                    acorns for winter, while the octopus mooched off his girlfriend and watched TV. </p>
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
                <h3 class="max-w-5xl">Oh, all right, I am. But if anything happens to me, tell them I died robbing some
                    old man. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched
                    off his girlfriend and watched TV.</h3>

                <div class="mb-12"></div>

                <div class="flex flex-wrap">
                    <div class="w-1/2">
                        <div class="content">
                            <div class="general-service">
                                <p class="alt-body">It’s just like the story of the grasshopper and the octopus. he’s
                                    stuck in an infinite loop, and he’s an idiot! </p>
                                <p>All year long, the grasshopper kept burying acorns for winter, while the octopus
                                    mooched off his girlfriend and watched TV. Well, that’s love for you. What kind of a
                                    father would I be if I said no?”</p>
                            </div>
                            <div class="general-service">
                                <p class="alt-body">It’s just like the story of the grasshopper and the octopus. he’s
                                    stuck in an infinite loop, and he’s an idiot! </p>
                                <p>All year long, the grasshopper kept burying acorns for winter, while the octopus
                                    mooched off his girlfriend and watched TV. Well, that’s love for you. What kind of a
                                    father would I be if I said no?”</p>
                            </div>
                            <div class="general-service">
                                <p class="alt-body">It’s just like the story of the grasshopper and the octopus. he’s
                                    stuck in an infinite loop, and he’s an idiot! </p>
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
                        <h1 class="highlight mb-8">the grasshopper kept burying acorns for winter</h1>
                        <div class="buttons-container">
                            <div class="std-btn">Our Services</div>
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