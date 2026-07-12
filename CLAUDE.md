# CLAUDE.md — Projet Portfolio ACLD

Fichier de contexte pour Claude Code. À lire en début de session.

---

## Ce qu'est ce projet

Site portfolio personnel d'Anne-Cécile Le Dain, hébergé sur GitHub Pages.
Pas une page de vente — un espace sobre pour montrer ses compétences et projets concrets.

**URL en ligne :** https://annece29-netizen.github.io/portfolio-2026-02

---

## État actuel

- En ligne sur GitHub Pages (branche `master`)
- **Refonte du 24/06 en ligne** : section projets avec filtres par catégorie, 5 nouveaux projets ajoutés, témoignage de Mélanie Cornec
- **12/07 : 3 nouveaux projets ajoutés** (Avion Messager, Volubil-IA, Site KléIA Solutions), grille réordonnée par priorité (Site KléIA, E-Koun, Inventaire Vocal, Automatisations n8n, missions clients, puis toutes les applis), tous les emojis des cartes (projets + compétences) remplacés par des icônes SVG cohérentes avec la charte, badges de statut (Réalisé/En cours/Compétences acquises) passés du vert/orange à un style unique blanc/mauve foncé conforme à la charte, position fixée en bas à gauche des cartes. Détail complet : `01_Journal-projets/portfolio-acld/2026-07-12_ajout-projets-icones-badges.md`.
- Le rôle "site formatrice IA" est repris par le **site KléIA séparé** (kleia-solutions.fr, projet `PROJECTS/formatrice-ia/site-kleia-v3/`) — le portfolio reste un portfolio personnel, avec toutefois une page dédiée qui présente ce site comme projet (`projets/site-kleia.html`)
- SEO et GEO à améliorer (pas prioritaire pour l'instant)
- **Idée en réserve :** un blog avec les articles-guides Substack (format "pas à pas" comme Personas., Déléguer., Vidéo.) — bien adaptés au SEO/GEO, ils attirent les prospects qui cherchent des méthodes concrètes
- **Idée en réserve (12/07) :** lien discret vers ce portfolio depuis la page "À propos" du site KléIA, pour renforcer la crédibilité sans percer le tunnel de conversion commercial. Pas encore implémenté, noté dans `PROJECTS/formatrice-ia/CLAUDE.md`.

---

## Stack technique

- HTML, CSS, JavaScript purs (aucun framework)
- Hébergement : GitHub Pages (repo public)
- Repo GitHub : `annece29-netizen/portfolio-2026-02`

---

## Structure des fichiers

```
portfolio-acld/
├── index.html              ← page principale
├── maintenance.html        ← page de maintenance (si site en pause)
├── style.css
├── script.js
├── projets/
│   ├── site-kleia.html
│   ├── livre-intergenerationnel.html
│   ├── inventaire-vocal.html
│   ├── automatisations-n8n.html
│   ├── audit-assistante-gestion.html
│   ├── college-chateauneuf.html
│   ├── babytrack.html
│   ├── lirella.html
│   ├── qr-contact.html
│   ├── avion-messager.html
│   ├── volubil-ia.html
│   └── assistants-communication.html
└── images/
    ├── anne-cecile-hero.jpg
    ├── anne-cecile-action.jpg
    └── projets/            ← captures et visuels des projets
```

---

## Charte graphique

| Élément | Valeur |
|---------|--------|
| Fond principal | `#272030` |
| Rose poudré | `#c79a99` |
| Bleu grisé | `#e3ebf2` |
| Texte | `#d4ccd8` |
| Police | DM Sans (corps) + Caveat (annotations) |

---

## Mettre à jour le site

Après chaque modification, depuis PowerShell dans le dossier du projet :

```
git add .
git commit -m "Description de la modification"
git push origin master
```

Le site se met à jour en 1 à 2 minutes.

---

## Rôle de Claude sur ce projet

- Modifier le contenu HTML (textes, projets, section "En ce moment")
- Améliorer le SEO (balises meta, titres, descriptions) — quand demandé
- Améliorer le GEO (optimisation pour moteurs IA) — quand demandé
- Ajouter un nouveau projet ou une nouvelle section
- Corriger des bugs d'affichage CSS/JS
- Expliquer pas à pas les manipulations Git si besoin

---

## Règles

- Ne jamais modifier les couleurs ou la typographie sans accord explicite
- Toujours tester en local avant de proposer un push
- Expliquer chaque commande Git si Anne-Cécile ne l'a pas demandée elle-même
- Garder le code simple — pas de frameworks, pas de dépendances inutiles
