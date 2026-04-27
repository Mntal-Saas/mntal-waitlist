# Mntal — Waitlist

Page d'attente (landing page) du lancement de **Mntal**, marketplace qui connecte coachés et coachs vérifiés en sport, bien-être et développement professionnel. Lancement prévu en **mai 2026**.

## Objectif

- Collecter les inscriptions à la liste d'attente avant l'ouverture publique
- Recruter les **30 premiers coachs fondateurs** via un canal WhatsApp dédié (commission réduite 3 mois, profil mis en avant, onboarding 1:1)
- Servir de vitrine de la marque (identité visuelle, ton, propositions de valeur)

## Stack

Site statique sans build step :

- HTML5 sémantique
- CSS vanilla (variables, grid, flex, 3 breakpoints responsive)
- JavaScript vanilla (handler du form + animation du compteur)
- Google Fonts — *Epilogue*
- [Formspree](https://formspree.io/) pour la collecte des emails (endpoint `mrervjbn`)

## Structure

```
mntal-waitlist/
├── mntal-waitlist.html   # Page principale
├── styles.css            # Tous les styles (mobile-first, breakpoints 768/480/360)
├── script.js             # Submit form + counter animé
├── public/               # Logos & favicons (16/32/180/192/512 + .ico)
└── README.md
```
