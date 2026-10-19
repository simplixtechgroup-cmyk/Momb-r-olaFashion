# Mombèrèola Fashion — Pack médias pour site web

## Contenu
- `images/` : 19 photos au format WebP (max 1200 px, ≈ 50-100 Ko chacune) + `og-image-...jpg` (partage réseaux sociaux 1200x630)
- `images/miniatures/` : versions 480 px de large pour les galeries
- `videos/` : 5 vidéos MP4 compressées (sans son, optimisées web) + image d'aperçu (poster) pour chacune
- `logo/` : logo détouré (fond transparent) en PNG/WebP + favicons
- `alt-textes-et-usages.csv` : texte alternatif SEO + page conseillée pour chaque média

## À mettre dans le <head> de chaque page
```html
<link rel="icon" href="/logo/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/logo/favicon-192.png">
<link rel="apple-touch-icon" href="/logo/apple-touch-icon.png">
<meta property="og:image" content="https://VOTRE-DOMAINE.com/images/og-image-mombereola-fashion.jpg">
<meta property="og:title" content="Mombèrèola Fashion – Salon de beauté : maquillage, manucure, tresses, soins du visage">
<meta name="description" content="Salon de beauté Mombèrèola Fashion : maquillage, manucure, pédicure, tresses, soins du visage et formations.">
```

## Image (chargement rapide)
```html
<img src="/images/maquillage-mariee-voile-robe-de-mariage-mombereola-fashion.webp"
     alt="Maquillage de mariée avec voile et robe de mariage"
     width="607" height="1080" loading="lazy">
```
(le haut de page / bannière principale : retirer `loading="lazy"`)

## Vidéo
```html
<video src="/videos/video-soin-du-visage-esthetique-mombereola-fashion.mp4"
       poster="/videos/video-soin-du-visage-esthetique-mombereola-fashion-poster.webp"
       muted loop playsinline controls preload="none"></video>
```

## Autres choses utiles à prévoir
1. Hébergement + nom de domaine, certificat HTTPS
2. Fiche Google Business Profile (adresse, horaires, photos) : indispensable pour être trouvé localement
3. Bouton WhatsApp « Prendre rendez-vous » (+229 01 96 14 90 51, numéro vu sur l'affiche)
4. Photos de manucure, pédicure et de l'intérieur du salon : absentes du pack
5. Mentions légales et page Contact avec carte Google Maps
6. Photos haute définition : celles reçues sont des captures WhatsApp (≈ 600 px de large)
