let elizabethSanger = {
    congressionalDistrict: 5,
    statments: [
        {statement: "pie good", category: "Jobs"},
        {statement: "Taxes good", category: "Taxes"},
        {statement: "Roads good", category: "Infrastructure"}
    ], 
    donationFormUrl: 'www.okyou .com' ,
    events: [
        {date: '08/27/2018', title:"Waynes bday", description:"eat it all"},
        {date: '08/09/2018', title:"Job day", description:"Party Really"},
    ],
    volunteers: [
        {
            name: "Cow boy",
            Address: '1 main street',
            email: 'kbgood@gmail.com',
            phone: '1234211111',
            availablity: 'all the time',
            activities: 'soccer',
        },
        {
            name: "Johnny Time",
            Address: '6 main street',
            email: 'sdfood@gmail.com',
            phone: '12342345111',
            availablity: 'never',
            activities: 'j-Twon',

        }
        
    ],
    biography: "This is just going to be some text I am goin to write",
    images: [
        {
            imageUrl: "www.jpg",
            description: "best constitutne",
            type: "constitution"
        },
        {
            imageUrl: "time_time.jpg",
            description: "When its time to leave",
            type: "kat kat"
        },
      
    ],
    missionStatement: "Do good",
    voterRegistrationUrl: 'www.blah.com'
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const printToDom2 = (stringToPrint, divClass) => {
    const selectedDiv = document.getElementsByClassName(divClass);
    selectedDiv.innerHTML += stringToPrint;
}
