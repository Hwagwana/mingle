const myData = {
    name:"김멋사",
    img:"Me.png"
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

const catList = ["hobby","celebrity","animal","region","party","country","food","religion","travel","exercise","default"];

const myPost = {
    index:0,
    img:``,
    uploaderImg:myData.img,
    uploaderName:myData.name,
    content:``,
    board:"free",
    category:[false,false,false,false,false,false,false,false,false,false,true]
}

const postList = [
    {
        index:10,
        img:`postex10.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`anonymous`,
        content:`My cat is so cute LOL`,
        board:"free",
        category:[false,false,true,false,false,false,false,false,false,false,true]
    },
    {
        index:9,
        img:`postex9.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`anonymous`,
        content:`Is this true? I can't believe it.`,
        board:"information",
        category:[false,false,false,false,false,false,true,false,false,false,true]
    },
    {
        index:8,
        img:`postex8.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`anonymous`,
        content:`Go eat the pizza place near the main gate.<br>
        It's so good.`,
        board:"free",
        category:[false,false,false,false,false,false,true,false,false,false,true]
    },
    {
        index:7,
        img:`postex7.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`anonymous`,
        content:`If you want to participate, please contact the administration office.`,
        board:"information",
        category:[false,false,false,false,false,false,false,false,false,false,true]
    },
    {
        index:6,
        img:`postex6.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Zoe`,
        content:`Hi! Is there anyone who lives near Hyehwa?<br>
        Let's be friends in the neighborhood!<br>
        I usually ride my bike on the Han River on holiday evenings. <br>
        Let's ride a bike together when we have time.<br>
        When it's not a holiday, I usually read books or do assignments at the Central <br>
        Academic Information Library. You can contact me if you need a friend to study with.`,
        board:"friend",
        category:[true,false,false,true,false,false,false,false,false,true,true]
    },
    {
        index:5,
        img:`eventex1.png`,
        uploaderImg: `Mike.png`,
        uploaderName:`Mike`,
        content:`Hello all the exchange students from all over the world :)<br>
        Me n my Korean friends are throwing a party for exchange students 🔥<br>
        Ofc internationals & Korean students can come too!!<br>
        <br>
        Venue: 마님은 왜 돌쇠에게 술을 주시나<br>
        (they have amazing 안주)<br>
        📍56, Sungkyunkwan-ro, Jongno-gu, Seoul<br>
        <br>
        The party starts at 9, but you can join late.<br>
        PM me if interested xx`,
        board:"recruit",
        category:[false,false,false,false,true,false,false,false,false,false,true]
    },
    {
        index:4,
        img:`eventex2.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Emma`,
        content:`Hi :)<br>
        I'm looking for people to go hiking with me on August 7!<br>
        We are currently four and going to climb Inwangsan Mountain in Seoul at 10am<br>
        Pls message me if you wanna join 👀`,
        board:"recruit",
        category:[true,false,false,false,false,false,false,false,false,true,true]
    },
    {
        index:3,
        img:`eventex2.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Emma`,
        content:`Hi :)<br>
        I'm looking for people to go hiking with me on June 7!<br>
        We are currently four and going to climb Inwangsan Mountain in Seoul at 10am<br>
        Pls message me if you wanna join 👀`,
        board:"recruit",
        category:[true,false,false,false,false,false,false,false,false,true,true]
    },
    {
        index:2,
        img:`postex2.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Elliot`,
        content:`I bought it, but I didn't wear it because there were no clothes that fit it.<br> 
        I'll give you a discount if you make a cool deal.`,
        board:"market",
        category:[false,false,false,false,false,false,false,false,false,false,true]
    },
    {
        index:1,
        img:`postex1.png`,
        uploaderImg:`anonymous.png`,
        uploaderName:`Grace`,
        content:`Almost all of them are clothes that I wore two or three times.<br>
        Please contact us by message for the price!`,
        board:"market",
        category:[false,false,false,false,false,false,false,false,false,false,true]
    }
    
]