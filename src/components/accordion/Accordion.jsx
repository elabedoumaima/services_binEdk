import React, { useState } from 'react';
import './accordion.css'
function Accordion() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };
    const data = [
        {
            question: "Pourquoi passer par Bin_Edk ?",
            answer: "Vous bénéficiez d'un interlocuteur unique, d'artisans sourcés et formés par nos partenaires, et une transparence des prix tant que la main d'œuvre que la fourniture. En passant par Saweblia, vous n’avez pas de mauvaises surprises et si vous n'êtes pas satisfait, nous serons à vos côtés pour trouver une solution jusqu'à l’exécution finale des travaux."
        },
        {
            question: "Comment fonctionne votre service ?",
            answer: "Vous pouvez nous contacter par téléphone ou par WhatsApp sur le +212 677 330 404.Lorsque nous recevons votre demande, un chargé de relation client prend en charge votre demande et vous aide à définir votre besoin.Nous pouvons être amenés à organiser une visite avec l’un de nos coordinateurs de travaux pour les demandes complexes. Lorsque le besoin est clair, nous vous envoyons un devis dans un délai allant de 20 minutes à 48 heures (dépendamment de la nature des travaux à réaliser). Dès que vous confirmez le devis, nous programmons une intervention selon vos disponibilités."
        },
        {
            question: "Est-ce que vous avez une application ?",
            answer: "Pour l'instant, nous recevons vos demandes via le site Internet, WhatsApp, nos réseaux sociaux ou par téléphone.Nous travaillons sur une nouvelle application qui sera bientôt disponible !"
        },
        {
            question: "Comment et à quel moment dois-je payer ma prestation?",
            answer: "Vous pouvez payer en ligne par carte bancaire sur le site Internet, par chèque, virement bancaire ou en espèces.Si le montant de votre commande dépasse 1000 Dhs, un acompte vous sera demandé pour préparer l'intervention. "
        },
        {
            question: "Comment sélectionnez-vous vos artisans ?",
            answer: "Tous nos artisans ont un statut légal et leur identité ainsi que leur casier judiciaire sont vérifiés par nos équipes.Nos artisans suivent un processus en plusieurs étapes pour nous assurer de leur expertise métier et leur savoir-être. Ils passent plusieurs niveaux de validation avant d'arriver chez vous :)Lorsqu’ils sont validés, nous les formons à notre charte qualité interne et faisons un suivi permanent pour nous assurer d’une qualité de service continue.Enfin, nous accompagnons nos artisans avec des incentives sociales (CIMR, assurance maladie,…), des formations métiers avec nos partenaires (Lydec, Weber, Hilti…) et un accès au financement avec notre partenaire CIH."
        },
        {
            question: "Vos fournitures et matériaux sont-ils de bonne qualité ?",
            answer: "Tous nos produits sont garantis par nos fournisseurs que nous sélectionnons sur plusieurs niveaux.Si le moindre problème apparaît pendant la durée de garantie, nous nous engageons à remplacer ou à réparer le matériel selon les conditions de garantie du constructeur. "
        }
    ];

    return (
        <div className="wrapper" id='accordion'>
            <div className="accordion">
            <h1 className='h1Title'>Foire aux questions</h1>
                {data.map((item, i) => (
                    <div className="item" key={i}>
                        <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.question}</h3>
                            <span style={{fontSize:'25px'}}>{selected === i ? "-" : "+"}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Accordion;
