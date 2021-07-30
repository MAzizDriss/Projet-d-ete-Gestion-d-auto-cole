const clients = [
    {
        id:1,
        name:"Sami guezguez",
        authority:"candidat",
        sessions:['c13','c17','c19'], // every session can be presented by a particular id and a letter (c : code ; p: conduite)
        insciprtionDate:"22/01/2021",
        finished: true,
        payement: "Oui",
    },
    {
        id:2,
        name:"Barak Obama",
        authority:"candidat",
        sessions:['c50','p52','p57','p59'],
        insciprtionDate:"14/02/2021",
        finished: false,
        payement: "Non",
    },
    {
        id:3,
        name:"Michael Reeves",
        authority:"candidat",
        sessions:['p78','p90','p112'],
        insciprtionDate:"25/02/2021",
        finished: false,
        payement: "Non",
    },
    {
        id:4,
        name:"Lili pichu",
        authority:"candidat",
        sessions:['c157','c178','p190','p120'],
        insciprtionDate:"05/03/2021",
        finished: false,
        payement: "Oui",
    },
    {
        id:5,
        name:"pikachu",
        authority:"candidat",
        sessions:['c200'],
        insciprtionDate:"26/04/2021",
        finished:false,
        payement: "Non",

    },
    {
        id:6,
        name:"kais saied",
        authority:"candidat",
        sessions:['c400','p401'],
        insciprtionDate:"28/07/2021",
        finished:false,
        payement: "Oui",
    }
]
export default clients