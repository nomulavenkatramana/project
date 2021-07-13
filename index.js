let cards=[
    {
        Image:"https://i.pinimg.com/originals/a1/cb/99/a1cb997c51ae1c238ab56486a97dd450.jpg",
        value: 1,
        status:"closed"
    },

    {
        Image:"https://i.pinimg.com/originals/a1/cb/99/a1cb997c51ae1c238ab56486a97dd450.jpg",
        value: 1,
        status:"closed"
    },

    {
        Image:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy",
        value: 2,
        status:"closed"
    },

    {
        Image:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy",
        value: 2,
        status:"closed"
    },

    {
        Image:"https://www.aitrends.com/wp-content/uploads/2019/09/9-13SportsCar-2.jpg",
        value: 3,
        status:"closed"
    },

    {
        Image:"https://www.aitrends.com/wp-content/uploads/2019/09/9-13SportsCar-2.jpg",
        value: 3,
        status:"closed"
    },
    {
        Image:"https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        value: 4,
        status:"closed"
    },

    {
        Image:"https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        value: 4,
        status:"closed"
    },
]
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let cardsCopy=cards;

function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        <div class="overlay${card.status}" onclick="openCard(${index})">
        </div>
        </div>
        `;
    });
    

document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;

            document.getElementById('score').innerText=score;
            // reset after wrong guess
            val1=null;
            val2=null;
            cardCount=1;
        }

        else{
            alert("game over");
            location.reload();
        }
    }
    displayCards(cards);
}
