import React from 'react';
import image1 from './feu_TourneDroite.jpg'
import image2 from './Reaction.jpg'
import image3 from './corrosif.jpg'
import image4 from './Derapage.jpg'
import image5 from './passe1.jpg'
import image6 from "./ceder.jpg"
import image7 from "./Stop.jpg"
import image8 from "./cedezlepassage.jpg"
import image9 from "./doubleSens.jpg"
import image10 from "./drivingCity.jpg"
import image11 from './finPriorite.JPG'
import image12 from './assistance.jpg'
import image13 from './cassis.JPG'
import image14 from './alcool.jpg'
import image15 from './pluie.jpg'
import image16 from './ligneContinue.jpg'
import image17 from './passageP.jpg'
import image18 from './stationnement.jpg'
import image19 from './profondeur.jpg'
import image20 from './ceinture.jpg'
import image21 from './toit.jpg'
import image22 from './Virage.JPG'
import image23 from './filtre.jpg'
import image24 from './autoroute.jpg'
import image25 from './accident.jpg'
import image26 from './interdiction.png'
import image27 from './stationInterdit.jpg'
import image28 from './isItOk.jpg'
import image29 from './90.jpg'
import image30 from './distance.jpg'

const Questions = [
  {
    image: image1,
    question: 'Le feu de circulation de droite clignote. Il est en panne. Pour tourner à droite : ',
    option1: "Je m'arrête",
    option2: 'Je passe avec prudence',
    reponse: 'Je passe avec prudence'
  },
  {
    image: image2,
    question: 'Le temps de réaction chez une personne en bonne santé est en moyenne : ',
    option1: "1 seconde",
    option2: '5 seconde',
    option3: '3secandes',
    reponse: "1 seconde",
  },
  {
    image: image3,
    question: 'Cette étiquette en noir et blanc indique que ce camion transposte une matière : ',
    option1: "Toxique",
    option2: 'Infectueuse',
    option3: 'Corrosive',
    reponse: 'Corrosive',
  },
  {
    image: image4,
    question: 'Je dois tenir compte de ce panneau uniquement : ',
    option1: "Lorque la chaussée est mouillé",
    option2: 'Lorsque la chaussée est sèche',
    option3: 'Dans les deux cas',
    reponse: 'Dans les deux cas'
  },
  {
    image: image5,
    question: "Quel est l'ordre de passage de ses voitures : ",
    option1: "jaune, rouge, bleue",
    option2: 'jaune, bleue, rouge',
    option3: 'rouge, jaune, bleue',
    reponse: 'jaune, bleue, rouge',
  },
  {
    image: image6,
    question: 'Dans cette situation, la voiture bleue : ',
    option1: "passe avec prudence",
    option2: "cède le passage à droite et passe",
    option3: "s'arrête et cède le passage à droite et à gauche",
    reponse: "s'arrête et cède le passage à droite et à gauche"
  },
  {
    image: image6,
    question: "La voiture jaune tourne à sa gauche, quel est l'ordre du passage des voitures : ",
    option1: "Jaune, rouge, bleue",
    option2: 'Rouge, jaune, bleue',
    option3: 'Bleue, rouge, jaune',
    reponse: 'Rouge, jaune, bleue'
  },
  {
    image: image7,
    question: "Au STOP, je m'arrête : ",
    option1: "à la hauteur du panneau",
    option2: 'à la limite de la chaussée abordée',
    reponse: 'à la limite de la chaussée abordée'
  },
  {
    image: image8,
    question: 'Le cédez le passage : ',
    option1: 'On doit céder le passage à droite et à gauche',
    option2: "On s'arrête même si la route est libre",
    option3: 'On doit cédez le passage à droite et passer',
    reponse: 'On doit céder le passage à droite et à gauche'
  },
  {
    image: image9,
    question: 'Ce panneau indique que la circulation est à double sens : ',
    option1: "à 50m du panneau",
    option2: 'à partir du panneau',
    option3: 'à 150m du panneau',
    reponse: 'à partir du panneau'
  },
  {
    image: image10,
    question: "Ma vitesse est 90 km/h, la distance d'arrêt est : ",
    option1: "81 m",
    option2: '27 m',
    option3: '120 m',
    reponse: "81 m"
  },
  {
    image: image11,
    question: 'Ce panneau indique : ',
    option1: "Interdiction de stationnement",
    option2: 'Fin de route à caratère prioritaire',
    option3: 'Route prioritaire',
    reponse: 'Fin de route à caratère prioritaire'
  },
  {
    image: image12,
    question: "Ce véhicule est prioritaire lorsqu'il utilise ses avertisseurs lumineux : ",
    option1: "Oui",
    option2: 'Non',
    reponse: 'Non'
  },
  {
    image: image13,
    question: 'Ce panneau indique : ',
    option1: "Un cassis ou un dos d'âne",
    option2: 'Un ralentisseur',
    option3: 'Un virage',
    reponse: "Un cassis ou un dos d'âne"
  },
  {
    image: image14,
    question: "Le refus de se soumettre à la procédure relative à la preuve de l'état alcoolique entraîne : ",
    option1: "La mise du véhicule en fourrière",
    option2: 'Le retrait de 3 points',
    option3: 'Le retrait immédiat du permis de conduite',
    reponse: 'Le retrait immédiat du permis de conduite'
  },
  {
    image: image15,
    question: "Par ce temps, l'adhérence du véhicule : ",
    option1: "Ne change pas",
    option2: 'Diminue',
    option3: 'Augmente',
    reponse: 'Diminue'
  },
  {
    image: image16,
    question: "Franchir la ligne continue pour dépasser cette voiture entraîne l'emprisonnement du conducteur pour une durée de : ",
    option1: "1 mois au plus",
    option2: '3 mois au plus',
    option3: '6 mois au plus',
    reponse: "1 mois au plus"
  },
  {
    image: image17,
    question: 'Sur le passage piéton : ',
    option1: "Je peut m'arrête",
    option2: 'Je peux stationner',
    option3: "Je peux ni m'arrêter ni stationner",
    reponse: "Je peux ni m'arrêter ni stationner"
  },
  {
    image: image18,
    question: 'Un stationnement abusif, si on laisse un véhicule stationné pendant plus de : ',
    option1: "5 jours",
    option2: '7 jours',
    option3: '10 jours',
    reponse: '7 jours'
  },
  {
    image: image19,
    question: 'La hauteur de gomme minimum légale est de : ',
    option1: "1 mm",
    option2: '2.2 mm',
    option3: '1.6',
    reponse: '1.6'
  },
  {
    image: image20,
    question: 'Ne pas porter sa ceiture de sécurité à l’intérieur et à l’extérieur des agglomérations et sur les autoroutes, entaîne : ',
    option1: "Une amende de 40DT",
    option2: 'Le retrait du permis de conduite',
    option3: 'La perte de 3 points sur le permis',
    reponse: "Une amende de 40DT"

  },
  {
    image: image21,
    question: "Une voiture à toit chargé augmente sa consommation en carburant",
    option1: "Oui",
    option2: 'Non',
    reponse: "Oui"
  },
  {
    image: image22,
    question: "Ce panneau signifie : ",
    option1: "Un virage",
    option2: 'Une succession de virage dont le premier est à droite',
    option3: 'Une succession de virage dont le premier est à gauche dans 800m',
    reponse: 'Une succession de virage dont le premier est à droite'
  },
  {
    image: image23,
    question: "Le filtre à air sert à : ", 
    option1: "Refroidir le moteur de la véhicule",
    option2: 'éliminer les imputés pour ne pas passer au moteur',
    option3: "nettoyer le carburant avant de l'envoyer au moteur",
    reponse: 'éliminer les imputés pour ne pas passer au moteur'
  },
  {
    image: image24,
    question: 'Conduire à 110km/h dans un autoroute, je dois : ',
    option1: "rester sur la voie droite",
    option2: 'rester sur la voie gauche',
    option3: 'conduire sur la voie au milieu',
    reponse: 'conduire sur la voie au milieu'
  },
  {
    image: image25,
    question: "En cas d'accident de voiture, il est possible de donner à boire aux blessés : ",
    option1: "Oui",
    option2: 'Non',
    reponse: 'Non'
  },
  {
    image: image26,
    question: 'Ce panneau signifie : ',
    option1: "Accès interdit aux véhicules transportant des marchandises dangereuses",
    option2: 'Attention aux passages des véhicules transportant des marchandises polluant les eaux',
    option3: 'Accès interdit aux véhicules transportant des marchandises polluant les eaux',
    reponse: 'Accès interdit aux véhicules transportant des marchandises polluant les eaux'
  },
  {
    image: image27,
    question: 'Ce panneau indique : ',
    option1: "Arrêt et stationnement interdits ",
    option2: 'Arrêt interdit à gauche et à droite du panneau',
    option3: 'Stationnement interdit à gauche et à droite du panneau',
    reponse: 'Stationnement interdit à gauche et à droite du panneau'
  },
  {
    image: image28,
    question: 'Le stationnement de la véhicule est il dangeureux : ',
    option1: "Oui ",
    option2: 'Non',
    reponse: "Oui "
  },
  {
    image: image29,
    question: 'La voiture devant moi roule à 90km/h, est ce possible de la dépasser : ',
    option1: "Oui",
    option2: 'Non',
    reponse: "Non"
  },
  {
    image: image30,
    question: 'La distance entre un véhicule et piéton ou un vélo : ',
    option1: "1.5 m ",
    option2: '0.5 m',
    option3: '1 m',
    reponse: "1.5 m "
  },
]

export default Questions