const ctx = document.querySelector('.chart-1').getContext('2d');
let myChart = new Chart(ctx, {
type: 'doughnut',
data:{
    datasets: [{
        data: [75,25],
        backgroundColor: [
            '#ca3c3c',  'transparent'
        ],
    
        borderWidth: [1],
        cutout:'85%',
        borderRadius:70

    }]
},
options: {
    Plugins:{
        tooltip:{
            enabled:false
        }
    }
   
   
}
});
const ctx2 = document.querySelector('.chart-2').getContext('2d');

let myChart2 = new Chart(ctx2, {
type: 'doughnut',
data: {
    datasets: [{
        data: [25,75],
        backgroundColor: [
            '#ca3c3c','transparent'
        ],
        borderWidth: [1],
        cutout:'85%',
        borderRadius:70
    }]
},
options: {
    Plugins:{
        tooltip:{
            enabled:false
        }
    }  
}
});
const ctx3 = document.querySelector('.chart-3').getContext('2d');

let myChart3 = new Chart(ctx3, {
type: 'doughnut',
data: {
    datasets: [{
        data: [75,25],
        backgroundColor: [
            '#ca3c3c','transparent'
        ],
        borderWidth: [1],
        cutout:'85%',
        borderRadius:70
    }]
},
options: {
    Plugins:{
        tooltip:{
            enabled:false
        }
    }  
}
});
const ctx4 = document.querySelector('.chart-4').getContext('2d');

let myChart4 = new Chart(ctx4, {
type: 'doughnut',
data: {
    datasets: [{
        data: [50,50],
        backgroundColor: [
            '#ca3c3c','transparent'
        ],
        borderWidth: [1],
        cutout:'85%',
        borderRadius:70
    }]
},
options: {
    Plugins:{
        tooltip:{
            enabled:false
        }
    }  
}
});


$(function(){
    let vw=$(window).width();
    let vh=$(window).height();
   
    $(window).scroll(function(){
        let y=$(this).scrollTop();
    if(y<=100){
        $(".wrap-1 ul li a").removeClass("activea");
        $(".home a").addClass("activea");
    }
        $(".container").each(function(){
            containerTop=$(this).offset().top-100;
            if($(document).scrollTop()>containerTop){
               thisOff= $(this).attr("id");
               $(".container").removeClass("activew");
               ActiveID=$(this).addClass("activew").attr("id");
            }
        })
        $(".wrap-1 ul li ").each(function(){
             thisChildren=$(this).children("a");
             thisChildrenHref=$(this).children("a").attr("href");
             if(thisChildrenHref==="#"+ActiveID){
                $(".wrap-1 ul li a").removeClass("activea");
                $(thisChildren).addClass("activea");

             }
        })
        
          { if(y<=vh/2){
            $(".top").hide();
           }
           else{
            $(".top").show();
           }}
          
        })
    
    $(".top, nav ul li:first-child").click(function(){
       $("body,html").animate({
          scrollTop:0
       })
    })
    $(".btn-mob").click(function(){
       $(".collapse").slideToggle();
    })

    $(".wrap-1 ul li a").click(function(e){
        e.preventDefault();
        let v=$(this).attr("href");
        let st=$(v).offset().top-80;
        $("body,html").animate({
            scrollTop:st
        })
        $(".activea").removeClass("activea");
        $(this).addClass("activea");
       
        if(vw<767){
            $(".collapse").slideUp();
        }
    })
        
        $("a, button").click(function(e){
            e.preventDefault()
        })
        $(".wrap-1 .signup").click(function(e){
            e.preventDefault;
        $(".wrap-form").show();
        $(".close").click(function(){
        $(".wrap-form").hide();

        })
       
        })

        $(".accordion a").click(function(e){
                e.preventDefault;
              
              if($(this).next("p").is(":hidden")) {
                $(".accordion p").slideUp(1000);
                $(this).next("p").slideDown(1000);
                $(".accordion li").removeClass("active");
                $(this).parent("li").addClass("active");

              } 
        })
       $("#portfolio .all").click(function(){
            $("#portfolio button").removeClass("active");
            $(this).addClass("active");
            $(".div1, .div2").slideDown();
       })
       $("#portfolio .website").click(function(){
            $("#portfolio button").removeClass("active");
            $(this).addClass("active");
            $(".div1").slideUp("slow");
            $(".div2").slideDown("slow");
            
        })
        $("#portfolio .branding").click(function(){
            $("#portfolio button").removeClass("active");
            $(this).addClass("active");
            $(".div2").slideUp("slow");
            $(".div1").slideDown("slow");
        })
     
       
       $(".slides").slick({

            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '.prev-arrow',
            nextArrow: '.next-arrow',
            autoplay:true,
            autoplaySpeed:3000,
            responsive:[{
                breakpoint:767,
                settings:{
                    arrows:false,
                }
                
            }]
         
            
          });
   

        });

