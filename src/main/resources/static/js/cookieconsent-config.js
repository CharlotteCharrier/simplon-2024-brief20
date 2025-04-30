import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {}
    },
    language: {
        default: "fr",
        autoDetect: "browser",
        translations: {
            en: {

                consentModal: {
                    title: "Hello traveler, it's time for GDPR information!",
                    description: "For yaCRM, your experience on our site is a priority. With this in mind, we want to inform you about what we do with the data you provide us. Click on \"Learn more\" if you are interested. Know that if you reject you will not be able to access this website",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Learn more",
                },
                preferencesModal: {
                    title: "What are my data used for?",
                    savePreferencesBtn: "I accept this use of my data",
                    closeIconLabel: "Close the modal",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Use of your data",
                            description: "The data you provide us is stored in our database and is necessary for the proper functioning of our site."
                        },
                        {
                            title: "Look for the bare necessities <span class=\"pm__badge\">Always On</span>",
                            description: "We collect your first name, last name, username, email address, and password in order to identify you and improve your experience on our site by showing you the meetings that concern you.",
                            linkedCategory: "necessary"
                        }
                    ]
                }
            },
            fr: {
                consentModal: {
                    title: "Bonjour voyageur, c'est l'heure des informations RGPD !",
                    description: "Pour yaCRM votre expérience sur notre site est une priorité. Dans cette idée nous tenons à vous informer de ce que nous faisons des données que vous nous transmettez. Cliquez sur \"en savoir plus\" si vous êtes intéressés. Sachez que si vous refusez vous ne pourrez pas accéder à ce site web",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "En savoir plus",
                },
                preferencesModal: {
                    title: "A quoi servent mes données ?",
                    savePreferencesBtn: "J'accepte cette gestion de mes données",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation de vos données",
                            description: "Les données que vous nous transmettez sont stockées dans notre base de données pendant 5 ans après votre dernière connexion et sont nécessaires au bon fonctionnement de notre site."
                        },
                        {
                            title: "Il faut se satisfaire du nécessaire <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Nous collectons votre nom, prénom, nom d'utilisateur, adresse mail et mot de passe dans le but de pouvoir vous identifier et améliorer votre expérience sur notre site en vous montrant les réunions qui vous concernent. Nous stockons également les documents que vous pourrez envoyer au sein de notre application ainsi qu'une trace de vos réunions pour que vous puissez également retrouver toutes ces informations en revenant une prochaine fois.",
                            linkedCategory: "necessary"
                        }
                    ]
                }
            }
        }
    }
});