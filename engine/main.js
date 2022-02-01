const btn = document.getElementById("btn");
btn.addEventListener("click", wypisz);
const wav = new Audio("./el/wav/done.wav");


function wypisz(){
    let val = document.getElementById("pole").value;
    let main = document.getElementById("main");

    let div = document.createElement("div");
    div.classList.add("divMain");
    main.appendChild(div);

    let divLeft = document.createElement("div");
    let divRight = document.createElement("div");
        div.appendChild(divLeft);
        div.appendChild(divRight);
            divLeft.classList.add("divLeft");
            divRight.classList.add("divRight");

            div.addEventListener("dblclick", ()=>{
                div.remove();
                wav.pause();
                wav.currentTime=0;
                wav.play();

                const divy = document.getElementsByClassName("divLeft");
                console.log(divy);
                // HTMLCollection(3) [div.divLeft, div.divLeft, div.divLeft]
                //     0: div.divLeft
                //     1: div.divLeft
                //     2: div.divLeft
                //     length: 3
                for (let i=0; i<=divy.length-1; i++){
                    divy[i].innerText = i + 1;
                }
            })
            divRight.addEventListener("click", ()=>{
                const isLine = divRight.style.textDecoration;
                    if (isLine == "line-through"){
                        divRight.style.textDecoration = "none"
                    }else{
                        divRight.style.textDecoration = "line-through"
                    }
            })

    let ilosc = document.getElementsByClassName("divMain");
    console.log(ilosc);

    divLeft.innerText = ilosc.length;
    divRight.innerText = val;

    document.getElementById("pole").value = "";

    
}







