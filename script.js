

function debounce(func, wait = 30, immediate = true) {

    var timeout;
    
    return function(){
        let context=this,arg=arguments;
        clearTimeout(timeout);
        timeout=setTimeout(func.apply(context,arg),wait);
    }

  };

  let images=document.querySelectorAll(".slide-in");
   

   slideIn=()=>{
    //    console.log(images);
    //    console.count(event);
       images.forEach(image=>{
        //calculate right height when image should slide in
       const slideInHeight=window.scrollY + window.innerHeight - image.height/2;

       //calculate image bottom,so that it can be sent out
       const imgBottom=image.offsetTop+image.height;
       const isHalfShown=slideInHeight>image.offsetTop;
       const isVisible=window.scrollY < imgBottom;
       if(isHalfShown && isVisible){
           image.classList.add('active');
       }
       else{
           image.classList.remove("active");
       }




       })
     }
   document.addEventListener('scroll',debounce(slideIn));
