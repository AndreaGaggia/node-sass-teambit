const app = new Vue({
    el: "#app",
    data: {
        problemCards: [
            {
                img: "dist/img/hardcore.png",
                caption: "They are hardcore, formal and disconnected",
            },
            {
                img: "dist/img/nofeedback.png",
                caption: "They don't encourage regular feedback",
            },
            {
                img: "dist/img/notsafe.png",
                caption: "They don't make it safe to speak up",
            },
        ],
        solutionCards: [
            {
                img: "dist/img/lightweight.png",
                caption: "It's lightweight fun and interconnected",
            },
            {
                img: "dist/img/feedbacksuggestions.png",
                caption:
                    "It encourages regular feedback with contextual requests",
            },
            {
                img: "dist/img/safe.png",
                caption: "It creates a safe environment for dialog",
            },
        ],
        footerLists: [
            {
                title: "Product",
                links: [
                    "Feedback",
                    "Surveys",
                    "Reviews",
                    "Praise",
                    "Slack",
                    "Integration",
                    "Shedule a demo",
                    "Pricing",
                ],
            },
            {
                title: "About",
                links: ["Feedback", "Surveys", "Reviews", "Praise"],
            },
            {
                title: "Connect",
                links: ["Feedback", "Surveys", "Reviews", "Praise"],
            },
            {
                title: "Lobs",
                links: ["Feedback", "Surveys", "Reviews", "Praise"],
            },
            {
                title: "From the blog",
                links: [
                    "How to change your company culture: a four-step framework",
                    "How teams can be more productive by killing 8-hour workday",
                    "How to build high performing teams inspired by nature",
                    "View all",
                ],
            },
        ],
    },
    methods: {
        navAppear() {
            const nav = this.$refs.nav;
            const main = this.$refs.main;
            // console.log(main.getBoundingClientRect().y);
            let mainTop = Math.floor(main.getBoundingClientRect().y);
            // console.log(mainTop);
            if (mainTop <= 0) {
                nav.style =
                    "position: fixed; background-color: white; width: 100%; z-index: 2";
            } else nav.style = "";
        },
    },
    created() {
        window.addEventListener("scroll", this.navAppear);
    },
    destroyed() {
        window.addEventListener("scroll", this.navAppear);
    },
});
