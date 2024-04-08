

Vue.createApp({
    data(){
        return{
            emails: [],
            numEamil : 10,
            counteinerEmail: []
        }
    },
    methods: {
        getMails : function(){
            this.counteinerEmail =[]; 
            this.emails =[];   
            for(let i=0;i<(this.numEamil);i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((ris)=>{
                        this.emails.push(ris.data.response);               
                        if(this.emails.length == this.numEamil){
                            this.counteinerEmail =this.emails;
                        }
                    })
                }
                
        }     
    },
    computed:{

    },
    mounted(){
        this.getMails();
    }
}).mount('#app')