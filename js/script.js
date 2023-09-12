const { createApp } = Vue
        createApp({
            data(){
                return{
                    emails: [],
                            };
                        },
            methods:{
                genereteMail(){
                    for(let i=0;i<10;i++){
                        axios
                            .get('https://flynn.boolean.careers/exercises/api/random/mail')
                            .then((response) => {
                                this.emails.push(response.data.response);
                                console.log(this.emails[i]);
                            });
                        }
                },
            },
                mounted(){
                    this.genereteMail();
                },
                    }).mount('#app')


