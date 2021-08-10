import image1 from '../Vehicules/images/kiap.jpg'
import image3 from '../Vehicules/images/grand.jpg'
import image2 from '../Vehicules/images/SuzD.png'

const cars = [
    {
        id:1,
        marque:"KIA",
        modele:"PICANTO",
        serie:123575375,
        etat:"5",
        DateAchat:"22/01/2010",
        DateEntretien: "01/01/2022",
        papier:"Vérifiées",
        disponibilite:"Disponible",
        service: "En service",
        image: image1
    },
    {
        id:2,
        marque:"SUZUKI",
        modele:"DZIRE",
        serie:547755375,
        etat:"2",
        DateAchat:"22/01/2012",
        DateEntretien: "01/01/2022",
        papier:"Non vérifiées",
        disponibilite:"Disponible",
        service:"Hors service",
        image: image2
    },
    {
        id:3,
        marque:"HYUNDAI",
        modele:"GRAND I10 SEDAN",
        serie:26592144,
        etat:"3",
        DateAchat:"02/12/2019",
        DateEntretien: "01/02/2022",
        papier:"Vérifiées",
        disponibilite:"Non disponible",
        service:"En service",
        image: image3
    },
]
export default cars