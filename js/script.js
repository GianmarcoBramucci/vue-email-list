const { createApp } = Vue
        createApp({
            data(){
                return{
                    emails: [],
                            };
                        },
            methods:{
                genereteMail(){
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response);
                        });
                },
            },
                mounted(){
                    this.genereteMail();
                },
                    }).mount('#app')


