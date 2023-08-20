//setting the height of all images to make smaller.
const classes = document.getElementsByClassName("image");
//console.log(classes);
for(const classname of classes ){
    classname.style.height ="70px";
    classname.style.width ="100px";
    classname.style.padding ="10px";
}

//appling styles to the divs
const styleclasses =document.getElementsByClassName("style");
for(const styleclass of styleclasses ){
    styleclass.style.backgroundColor ="red";
    styleclass.style.float ="left";
    
    styleclass.style.width ="150px";
    styleclass.style.margin ="10px";
    styleclass.style.color="white";
    styleclass.style.display ="flex";
    styleclass.style.flexDirection="column";
    styleclass.style.justifyContent="flex-end";
    styleclass.style.alignItem ="flex-end";
    styleclass.style.borderTopLeftRadius="20px";
    styleclass.style.borderTopRightRadius="20px";
}

//making it dynamic..
let total=0;
let count =0;
let max=5;

function handleclicker(u){
    if (count < max) {
        count++;
        const item_container= document.getElementById("sellpart"); //where to add
        const itemname = u.parentNode.childNodes[3].innerText;
        //console.log(itemname);
        const li = document.createElement("li");
        li.innerText=itemname;
        item_container.appendChild(li);
        const container= u.parentNode.childNodes[7].childNodes[1]
        const price = u.parentNode.childNodes[7].childNodes[1].innerText;
        //console.log(price);
        total= parseFloat(price) + total;
        //console.log(total);
         const first_total= document.getElementById("firsttotal");
         const discountfield= document.getElementById("input").value;
         const discountvalue=parseFloat(discountfield);
         if(discountvalue>0){
            const totalvalue=total- ((discountvalue/100)*total);
            // console.log(discountfield);
             first_total.innerText=totalvalue
         }else{
              first_total.innerText=total
         }
            
    }else{
        const alert= document.getElementById("alert");
        const p = document.createElement("p");
        p.innerText="**You have reached the maximum limit!**";
        alert.appendChild(p);
        p.style.color="red";
        p.style.paddingTop="260px";
        
    }
    
}

