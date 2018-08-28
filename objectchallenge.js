let elizabethSanger = {
    district: 5,
    statements: [
        {statement: "We will have better jobs in the United States in my term. ", category: "Jobs: "},
        {statement: "Taxes will go down where they need to go down.", category: "Taxes: "},
        {statement: "Roads will tumble in the wake of the new roads we will create. ", category: "Infrastructure:"}
    ], 
    donationFormUrl: 'www.donate.com' ,
    events: [
        {date: '08/27/2018', title:" March on Virginia ", description:" Show them what a Republican is! "},
        {date: '08/09/2018', title:" Make the Moment ", description:" Take the hill! "},
    ],
    volunteers: [
        {
            name: "John Doe ",
            Address: '1 main street ',
            email: 'kbgood@gmail.com ',
            phone: '449-876-6676 ',
            availablity: 'Monday-Friday ',
            activities: 'Fishing ',
        },
        {
            name: "Jane Doe ",
            Address: '6 main street ',
            email: 'sdfood@gmail.com ',
            phone: '783-222-8374',
            availablity: 'Monday-Friday ',
            activities: 'Hockey ',

        }
        
    ],
    biography: "This is who I am. I am from the great state of Texas and I want to call TN my home. I know this may never happent but this is just something we are going to do and we are going to take it to the hill. I love cats and the way the sun sets every evnening for some reason. ",
    images: [
        {
            imageUrl: "https://placeimg.com/640/480/people ",
            description: "My early days ",
            type: "political "
        },
        {
            imageUrl: "https://placeimg.com/640/480/people ",
            description: "The day i won Texas ",
            type: "political "
        },
      
    ],
    missionStatement: "Do good and love the snow when it comes",
    voterRegistrationUrl: 'https://vote.gov/'
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const printToDom2 = (stringToPrint, divClass) => {
    const selectedDiv = document.getElementsByClassName(divClass);
    selectedDiv.innerHTML += stringToPrint;
}

//turn into arrow functions

let district_func =()  => {
    dis = elizabethSanger.district;
    dis2 = 'Congressional District : ';
    printToDom(dis2 + dis,'district');
    
}

let statements_func = () => {
    let eliz_stat = elizabethSanger.statements.length ;
    for (i=0;i<eliz_stat;i++) {
        printToDom(elizabethSanger.statements[i].category, 'statement');
        printToDom(elizabethSanger.statements[i].statement, 'statement');
    }
}
let donationForm_func = () => {
    dis = elizabethSanger.donationFormUrl;
    dis2 = 'Donation Form : ';
    printToDom(dis2 + dis,'donationForm');
    
}
let calendarEvents_func = () => {
    let eliz_stat = elizabethSanger.events.length ;
    for (i=0;i<eliz_stat;i++) {
        printToDom(elizabethSanger["events"][i].date, 'calEvents');
        printToDom(elizabethSanger["events"][i].title, 'calEvents')
        printToDom(elizabethSanger["events"][i].description, 'calEvents');
}
}
let volunteer_func = () => {
    let eliz_stat = elizabethSanger.volunteers.length ;
    for (i=0;i<eliz_stat;i++) {
        printToDom(elizabethSanger.volunteers[i].name, 'volunteer');
        printToDom(elizabethSanger.volunteers[i].Address, 'volunteer');
        printToDom(elizabethSanger.volunteers[i].email, 'volunteer');
        printToDom(elizabethSanger.volunteers[i].phone, 'volunteer');
        printToDom(elizabethSanger.volunteers[i].availablity, 'volunteer');
        printToDom(elizabethSanger.volunteers[i].activities, 'volunteer');
    }
}
let biography_func = () => {
    dis = elizabethSanger.biography;
    dis2 = 'Biography : ';
    printToDom(dis2 + dis,'bio');
}
let image_func = () => {
    let eliz_stat = elizabethSanger.images.length ;
    for (i=0;i<eliz_stat;i++) {
        printToDom(elizabethSanger.images[i].imageUrl, 'image');
        printToDom(elizabethSanger.images[i].description, 'image');
        printToDom(elizabethSanger.images[i].type, 'image');
    }
}
let missionStatment_func = () => {
    dis = elizabethSanger.missionStatement;
    dis2 = 'Mission Statement : ';
    printToDom(dis2 + dis,'missionStat');
}
let registerVote_Url = () => {
    dis = elizabethSanger.voterRegistrationUrl;
    dis2 = 'Voter Registration : ';
    printToDom(dis2 + dis,'registerVote');
}

district_func();
statements_func();
donationForm_func();
calendarEvents_func();
volunteer_func();
biography_func();
image_func();
missionStatment_func();
registerVote_Url();


// how to select array elements inside the object elizabethSanger.volunteers[0].name 

//  this will pring the objects to dom
// printToDom(elizabethSanger.statements[1].statement, 'statement');
// this will print the next catigory in the parent
// printToDom(elizabethSanger.statements[2].category, 'statement');



/*this one works for the most part, just missing the cat
let statements_func = () => {
    let eliz_stat = elizabethSanger.statements.length ;
    for (i=0;i<eliz_stat;i++) {
        printToDom(elizabethSanger.statements[i].statement, 'statement');
    }
}*/

