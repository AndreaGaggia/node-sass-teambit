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
    },
    methods: {},
});
