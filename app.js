const app=Vue.createApp({
    //set up data, functions, or template
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            showBooks: true,
            title:'The Final Emipre',
            author: 'Brandon Sanderson',
            age:45,
            x:0,
            y:0,
            books:[
                {title:'The Final Emipre', author: 'Brandon Sanderson'},
                {title:'the way of kings', author: 'brandon snadereson'},
                {title: 'name of wind', author:'some guy '}
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks=!this.showBooks;
        },
        handleEvent(e, data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        }
        // changeTitle(title){
        //     //this.title = "words of radiance" //which adjusts the this value of title to given string
        //     //console.log('you clicked me') //keeps a backend tally of the nubmer of clicks to the string
        //     this.title = title
        // }
    }
})

app.mount('#app')

