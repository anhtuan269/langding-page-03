export default {
    props: {
        head: {
            type:Object,
            require:true,
            default () {
                return {
                    big: true,
                    normal:false,
                    title:false,
                    custom:false,
                    small:false,
                    technology:false,
                    big_title:"Tez və şəffaf reklam xidməti",
                    normal_title:"Reklam imkanları",
                    logo:'/image/sign.png',
                    small_title:'',
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
                    small_title:'Standart banner',
                    technology_title:'İnternet'
                }
            }
        }
    }

}
