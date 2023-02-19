Vue.createApp({
    data() {
        return {
            myName: 'Sara',
            myAge: 22,
            myAgePlusFive: 27,
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/440px-Sunflower_sky_backdrop.jpg'
        };
    },
    methods: {
        randomNum() {
            return Math.random();
        }
    }


}).mount('#assignment');