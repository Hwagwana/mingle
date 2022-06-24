const myData = {
    name:"김멋사",
    img:"/Me.png"
}

const bannerList = [
    {
        img:`eventex1.png`,
        hostImg:`Mike.png`,
        hostName:`Mike`,
        title:`EXCHANGEE WELCOME PARTY ON 7/21`,
        content:`Hello all the exchange students from all over the world :)<br>
        Me n my Korean friends are throwing a party for exchange students 🔥<br>
        Ofc internationals & Korean students can come too!!<br>
        <br>
        Venue: 마님은 왜 돌쇠에게 술을 주시나<br>
        (they have amazing 안주)<br>
        📍56, Sungkyunkwan-ro, Jongno-gu, Seoul<br>
        <br>
        The party starts at 9, but you can join late.<br>
        PM me if interested xx`
    },
    {
        img:`eventex2.png`,
        hostImg:`anonymous.png`,
        hostName:`Emma`,
        title:`Anyone want to go hiking?`,
        content:`Hi :)<br>
        I'm looking for people to go hiking with me on August 7!<br>
        We are currently four and going to climb Inwangsan Mountain in Seoul at 10am<br>
        Pls message me if you wanna join 👀`
    },
    {
        img:`eventex3.jpg`,
        hostImg:`anonymous.png`,
        hostName:`Scarlet`,
        title:`Superfun Ballon Party`,
        content:`Upcoming Big news!<br>
        I am going to host an ballon part.<br>
        Come anytime this summer.<br>
        Good Luck!`
    }
]

const catList = ["hobby","celebrity","animal","region","party","country","food","religion","travel","exercise"];

const myPost = {
    index:0,
    img:``,
    uploaderImg:myData.img,
    uploaderName:myData.name,
    content:``,
    board:"free",
    category:[false,false,false,false,false,false,false,false,false,false]
}

const postList = [
    {
        index:2,
        img:`postex1.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`James`,
        content:`My cat is so cute LOL`,
        board:"free",
        category:[false,false,true,false,false,false,false,false,false,false]
    },
    {
        index:1,
        img:`postex2.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Peter`,
        content:`Is this true? I can't believe it.`,
        board:"information",
        category:[false,false,false,false,false,false,false,false,false,false]
    }
    
]