# Ce que j'ai fait :
 
1. J'ai lancé le projet.
2. J'ai analysé les différentes données qui sont stockées via l'application.
3. J'ai généré un bandeau de cookies avec cookie-consent.
4. J'ai modifié les différentes catégories et pris le temps d'écrire les données stockées dans la base de données et leur utilité au sein de l'application.
5. Lorsque j'ai été satisfaite de mon bandeau RGPD je me suis penchée sur la question de l'écoconception et j'ai ajouté des attributs HTMX dans le formulaire de login
   
Pour ça j'ai créé une nouvelle page logged qui renvoie juste une balise H1 qui est appelée en tant que successURL dans la config spring security.

6. Puis j'ai voulu utiliser les fragments thymeleaf pour avoir une seule structure HTML et venir l'hydrater en fonction de mes retours en appels via HTMX 

Malheureusement je n'ai pas réussi à bien comprendre comment ça fonctionne et je n'ai pas eu le temps de demander des explications plus précises pour le moment, je demanderai à mes camarades plus tard. 

J'ai modifié des choses du coup je ne suis même plus certaine que la page logged que j'avais de base s'affiche toujours après le login...