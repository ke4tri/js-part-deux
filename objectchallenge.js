let elizabethSanger = {
    congressionalDistrict: 5,
    statments: [
        {statement: "We will have gooder jobes in the United States in my term.", category: "Jobs"},
        {statement: "Taxes will go down where they need to go down.", category: "Taxes"},
        {statement: "Roads will tumble in the wake of the new roads we will create", category: "Infrastructure"}
    ], 
    donationFormUrl: 'www.okyou .com' ,
    events: [
        {date: '08/27/2018', title:"March on Virginia", description:"Show them what a Republican is!"},
        {date: '08/09/2018', title:"Make the Moment", description:"Take the hill!"},
    ],
    volunteers: [
        {
            name: "John Doe",
            Address: '1 main street',
            email: 'kbgood@gmail.com',
            phone: '449-876-6676',
            availablity: 'Monday-Friday',
            activities: 'Fishing',
        },
        {
            name: "Jane Doe",
            Address: '6 main street',
            email: 'sdfood@gmail.com',
            phone: 783-222-8374,
            availablity: 'Monday-Friday',
            activities: 'Hockey',

        }
        
    ],
    biography: "This is who I am. I am from the great state of Texas and I want to call TN my home. I know this may never happent but this is just something we are going to do and we are going to take it to the hill. I love cats and the way the sun sets every evnening for some reason. ",
    images: [
        {
            imageUrl: "https://placeimg.com/640/480/people",
            description: "My early days",
            type: "political"
        },
        {
            imageUrl: "https://placeimg.com/640/480/people",
            description: "The day i won Texas",
            type: "political"
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

