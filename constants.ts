
import { Episode, FAQ } from "./types";

export const MAX_MESSAGES_PER_CONVERSATION = 15;

export const PLATFORM_LABELS: { [key: string]: string } = {
  page: 'Page web',
  spotify: 'Spotify',
  apple: 'Apple Podcasts',
  youtube: 'YouTube',
  deezer: 'Deezer',
  transcription: 'Transcription',
  summary: 'Résumé',
  podcastaddict: "Podcast Addict",
  youtubemusic: "YouTube Music",
  amazonmusic: "Amazon Music",
  pocketcasts: "Pocket Casts"
};

export const EPISODE_DATA: Episode[] = [
  {
    "id": "ep109",
    "title": "Conseiller mobilité : l’allié méconnu qui redonne le pouvoir de bouger – Avec Sébastien Bailleul (Wimoov)",
    "date": "2025-11-12",
    "duration": "34:37",
    "guest": "Sébastien Bailleul",
    "category": "Vie quotidienne",
    "description": "Sébastien Bailleul, directeur plaidoyer de Wimoov, décrypte le métier de conseiller mobilité : un accompagnement personnalisé pour sortir de la précarité mobilité (15 millions de personnes concernées en France). Explication du diagnostic mobilité, de l’accès gratuit via France Travail, missions locales ou CCAS, et des solutions concrètes (tarification sociale, microcrédit, autopartage, transport à la demande, soutien administratif et numérique). Focus sur l’impact : 52 % des bénéficiaires retrouvent un emploi ou une formation, 96 % des seniors renouent du lien social, et chaque accompagnement évite une tonne de CO₂ par an. Wimoov milite pour tripler le nombre de conseillers et défend une politique locale inclusive, solidaire et écologique.",
    "themes": [
      "mobilité",
      "Wimoov",
      "précarité mobilité",
      "conseiller mobilité",
      "autonomie",
      "emploi",
      "formation",
      "seniors",
      "territoire",
      "transition écologique",
      "France Travail",
      "CCAS",
      "solidarité",
      "inclusion",
      "solutions",
      "transports",
      "microcrédit",
      "autopartage"
    ],
    "links": {
      "page": "https://csoluble.media/epsode/conseiller-mobilite-redonne-le-pouvoir-de-bouger-avec-sebastien-bailleul-wimoov/",
      "spotify": "https://open.spotify.com/episode/6UITdE0zG3oFiW11ppGwtH?si=A8X1oB0WTlO2PhPvPvEs3g",
      "apple": "https://podcasts.apple.com/fr/podcast/conseiller-mobilit%C3%A9-lalli%C3%A9-m%C3%A9connu-qui-redonne-le-pouvoir/id1640003869?i=1000736373639",
      "deezer": "https://link.deezer.com/s/31AQMopbZ2aLtpomVsN50",
      "youtube": "https://www.youtube.com/watch?v=RxlFruK6RU4",
      "transcription": "https://csoluble.media/epsode/transcription-conseiller-mobilite-lallie-meconnu-qui-redonne-le-pouvoir-de-bouger-avec-sebastien-bailleul-wimoov/",
      "summary": null
    }
  },
  {
    "id": "ep108",
    "title": "Faut qu’on parle – Cette alliance de médias qui mise sur le dialogue pour secourir la démocratie. Avec Béatrice Bouniol (La Croix)",
    "date": "2025-11-03",
    "duration": "28:58",
    "guest": "Béatrice Bouniol",
    "category": "Société",
    "description": "Béatrice Bouniol, cheffe du service culture au journal La Croix, revient sur l’initiative citoyenne “Faut qu’on parle” portée par La Croix, Notre Temps, La Voix du Nord et Réel Média, avec le soutien du Fonds Bayard-Agir. L’épisode explore comment ce dispositif gratuit, ouvert à tous, utilise le dialogue pour retisser la démocratie face à la défiance et à la polarisation croissantes en France. On y découvre le déroulement concret des rencontres citoyennes, l’impact mesuré du dispositif (6 400 participants, 95 % de satisfaction, 77 % de baisse de la polarisation affective), le travail de matching entre personnes d’opinions opposées (grâce à My Country Talks), et l’analyse scientifique menée par Albin Wagener. L’importance du lien, la place des médias dans l’engagement citoyen et la recherche de solutions sont au cœur de l’échange.",
    "themes": ["démocratie", "dialogue", "polarisation", "Béatrice Bouniol", "La Croix", "Faut qu’on parle", "Fonds Bayard", "Notre Temps", "La Voix du Nord", "Réel Média", "citoyenneté", "rencontre", "société", "médias", "My Country Talks", "Albin Wagener"],
    "links": {
      "page": "https://csoluble.media/epsode/faut-quon-parle-cette-alliance-de-medias-qui-mise-sur-le-dialogue-pour-secourir-la-democratie-avec-beatrice-bouniol-la-croix/",
      "spotify": "https://open.spotify.com/episode/2b8ZeSej9tbN6OuLoLNmpE?si=e6d2b6856c694987",
      "apple": "https://podcasts.apple.com/fr/podcast/faut-quon-parle-cette-alliance-de-m%C3%A9dias-qui-mise/id1640003869?i=1000734986110",
      "deezer": "https://link.deezer.com/s/31A9PU8xh8N2NBJmF60hR",
      "youtube": "https://www.youtube.com/watch?v=cmaLVR2PV8Y",
      "transcription": "https://csoluble.media/epsode/transcription-faut-quon-parle-cette-alliance-de-medias-qui-mise-sur-le-dialogue-pour-secourir-la-democratie-avec-beatrice-bouniol-la-croix/",
      "summary": null
    }
  },
  {
    "id": "ep107",
    "title": "Cocaïne, France, addiction : comment en sortir ? Avec Naïra Meliava",
    "date": "2025-10-13",
    "duration": "33:24",
    "guest": "Naïra Meliava",
    "category": "Société",
    "description": "Naïra Meliava, psychologue clinicienne et directrice générale d’Oppelia, décrypte l’essor rapide de la cocaïne en France, les nouveaux usages et les réponses concrètes pour sortir de l’addiction. L’épisode explore la démocratisation du phénomène, les risques liés à la consommation, les dispositifs d’accompagnement (CSAPA, Drogues Info Service), l’importance de l’écoute sans jugement et les solutions adaptées pour les consommateurs et leurs proches.",
    "themes": ["cocaïne", "addiction", "France", "Naïra Meliava", "Oppelia", "CSAPA", "Drogues Info Service", "stigmatisation", "réduction des risques", "société", "consultation", "accompagnement", "santé mentale"],
    "links": {
      "page": "https://csoluble.media/epsode/cocaine-france-addiction-comment-en-sortir-solubles-naira-meliava/",
      "spotify": "https://open.spotify.com/episode/5KAdJgqF9cAkdOgjdSjPlJ?si=de4c66eb2ad8489e",
      "apple": "https://podcasts.apple.com/fr/podcast/pourquoi-la-coca%C3%AFne-explose-en-france-et-comment-en-sortir/id1640003869?i=1000731533505",
      "deezer": "https://link.deezer.com/s/31ARyqlYmC7kzEtHY855V",
      "youtube": "https://www.youtube.com/watch?v=QEr3qJSHSXI",
      "transcription": "https://csoluble.media/epsode/transcription-cocaine-france-addiction-comment-en-sortir-solubles-naira-meliava/",
      "summary": null
    }
  },
  {
    "id": "ep106",
    "title": "Météo, climat et solutions : tout comprendre pour se protéger avec Paul Marquis",
    "date": "2025-09-29",
    "duration": "30:27",
    "guest": "Paul Marquis",
    "category": "Environnement",
    "description": "Paul Marquis, météorologue indépendant et fondateur d’E-météo service, détaille la montée des phénomènes météorologiques extrêmes en France (135 journées d’alertes météo en 2023, 132 en 2024), la différence essentielle entre météo et climat, les impacts du réchauffement sur la fréquence, la répartition des précipitations, et les activités météo-sensibles (agriculture, transport, événementiel). Il partage des ressources et applications pour mieux prévoir les risques, lutter contre la désinformation, et s’adapter à une France qui pourrait connaître +2,7 °C en 2050. Conseils et outils pour la résilience individuelle et collective.",
    "themes": ["météo", "climat", "alertes", "Paul Marquis", "E-météo service", "vigilances", "France", "précipitations", "prévention", "agriculture", "événementiel", "applications", "prévision", "risques", "adaptation", "désinformation"],
    "links": {
      "page": "https://csoluble.media/epsode/meteo-climat-solutions-paul-marquis/",
      "spotify": "https://open.spotify.com/episode/37Har73fULpZYzmHAHXIJW?si=GINGDRuURwu_jjJvK2JUfQ",
      "apple": "https://podcasts.apple.com/fr/podcast/m%C3%A9t%C3%A9o-climat-et-solutions-tout-comprendre-pour-se-prot%C3%A9ger/id1640003869?i=1000728974829",
      "deezer": "https://link.deezer.com/s/31ARySd1Ol5YFlwLj9O6v",
      "youtube": "https://www.youtube.com/watch?v=flVV7J7VsXg",
      "transcription": "https://csoluble.media/epsode/transcription-meteo-climat-solutions-paul-marquis/",
      "summary": null
    }
  },
  {
    "id": "ep105",
    "title": "Comment soutenir 9 millions de proches aidants en France",
    "date": "2025-09-15",
    "duration": "32:17",
    "guest": "Simon de Gardelle",
    "category": "Société",
    "description": "Simon de Gardelle, directeur de l’Association Française des Aidants, décrypte les défis et solutions concrètes pour 9,3 millions de Français accompagnant un proche en situation de handicap, de maladie ou de perte d’autonomie. L’épisode met en lumière la reconnaissance tardive mais cruciale du rôle d’aidant, les risques d’épuisement et de culpabilité, l’action du Z Event 2025 pour la visibilité, les Cafés des Aidants, la nécessité de formations spécialisées, et les modules digitaux pour changer le regard sur les aidants salariés. Il aborde aussi les enjeux démographiques et la solidarité nationale.",
    "themes": ["aidants", "handicap", "maladie", "Simon de Gardelle", "Association Française des Aidants", "épuisement", "culpabilité", "formation", "solidarité", "salariés", "démographie", "Z Event", "compétences", "France"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-soutenir-9-millions-de-proches-aidants-en-france/",
      "spotify": "https://open.spotify.com/episode/5FglWim14Uzqc0Nh9ovUbg?si=SqlrjKh8T2uzcYX9WSHdKw",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-soutenir-9-millions-de-proches-aidants-en-france/id1640003869?i=1000726845523",
      "deezer": "https://link.deezer.com/s/31ARzdlse2woWYwdzrOLQ",
      "youtube": "https://www.youtube.com/watch?v=_wyhqOz4OP4",
      "transcription": "https://csoluble.media/epsode/transcription-comment-soutenir-9-millions-de-proches-aidants-en-france/",
      "summary": null
    }
  },
  {
    "id": "ep104",
    "title": "Comment les boîtes aux lettres Papillons libèrent la parole des enfants victimes de violences",
    "date": "2025-09-08",
    "duration": "29:18",
    "guest": "Laurent Boyet",
    "category": "Société",
    "description": "Laurent Boyet, capitaine de police et fondateur de l’association Les Papillons, détaille le dispositif des boîtes aux lettres Papillons installé dans plus de 600 écoles et structures périscolaires en France. Ces boîtes permettent aux enfants victimes de violences de briser le silence par l’écriture, favorisant la prise en charge rapide et adaptée. L’épisode aborde le harcèlement scolaire, les violences physiques et sexuelles, le fonctionnement du relais psychologique, les procédures d’alerte, le témoignage personnel du fondateur, et l’accompagnement à la Maison Papillons.",
    "themes": ["enfance", "violences", "harcèlement scolaire", "boîtes Papillons", "Laurent Boyet", "écriture", "signalement", "école", "associatif", "protection", "France", "Maison Papillons", "justice", "accompagnement"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-les-boites-aux-lettres-papillons-liberent-la-parole-des-enfants-victimes-de-violences/",
      "spotify": "https://open.spotify.com/episode/0iYcJLNkLeWEsHM23yGEwj?si=DqXV31KdTw2oCSA3LsgJNQ",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-les-bo%C3%AEtes-aux-lettres-papillons-lib%C3%A8rent-la/id1640003869?i=1000725457493",
      "deezer": "https://link.deezer.com/s/31ARzwfWxIyATnuqhawuA",
      "youtube": "https://www.youtube.com/watch?v=W7ILTbAB-b8",
      "transcription": "https://csoluble.media/epsode/transcription-comment-les-boites-aux-lettres-papillons-liberent-la-parole-des-enfants-victimes-de-violences/",
      "summary": null
    }
  },
  {
    "id": "ep103",
    "title": "Climat : s’adapter à +4 °C en France, mode d’emploi avec Gonéri Le Cozannet",
    "date": "2025-09-01",
    "duration": "44:58",
    "guest": "Gonéri Le Cozannet",
    "category": "Environnement",
    "description": "Chercheur au BRGM et co-auteur du 6ᵉ rapport du GIEC, Gonéri Le Cozannet détaille pour Soluble(s) les solutions d’adaptation prioritaires au changement climatique que la France doit accélérer pour rester habitable d’ici 2100 à +4 °C. L’épisode met en avant les risques majeurs (canicules, inondations, submersions marines, sécheresses), l’exemple concret du village de Miquelon (première relocalisation française), la nécessité d’une transition juste et le rôle clé des politiques locales et des digues. Conseils citoyens, enjeux financiers et innovations pour un avenir résilient.",
    "themes": ["climat", "adaptation", "Gonéri Le Cozannet", "GIEC", "France", "relocalisation", "risques", "canicules", "inondations", "submersions", "sécheresses", "justice sociale", "solutions fondées sur la nature", "transition", "PNACC", "municipalités"],
    "links": {
      "page": "https://csoluble.media/epsode/climat-s-adapter-a-plus-4-degres-en-france-mode-demploi-avec-goneri-le-cozannet/",
      "spotify": "https://open.spotify.com/episode/7AKUmtZ0Qe1SXzlXIvVISz?si=oJkHV24eQbi65GjCtfMm-Q",
      "apple": "https://podcasts.apple.com/fr/podcast/climat-sadapter-%C3%A0-4-c-en-france-mode-demploi-avec-gon%C3%A9ri/id1640003869?i=1000724326080",
      "deezer": "https://link.deezer.com/s/31ARzQHbswTAOaauLTCfc",
      "youtube": "https://www.youtube.com/watch?v=47tKMQXWs2o",
      "transcription": "https://csoluble.media/epsode/transcription-climat-s-adapter-a-plus-4-degres-en-france-mode-demploi-avec-goneri-le-cozannet/",
      "summary": null
    }
  },
  {
    "id": "ep102",
    "title": "Santé mentale : ce que peut (vraiment) la psychiatrie avec Dr David Masson",
    "date": "2025-08-25",
    "duration": "42:41",
    "guest": "Dr David Masson",
    "category": "Société",
    "description": "Treize millions de Français sont touchés par des troubles psychiques, et la santé mentale est Grande Cause Nationale 2025. Le Dr David Masson, psychiatre au Centre Psychothérapique de Nancy, casse les idées reçues, détaille les approches nouvelles (psychoéducation, pair-aidance, prévention du suicide via le 3114) et met en avant une psychiatrie humaine et moderne. L’épisode traite des solutions concrètes qui changent déjà la prise en charge, les innovations, la déstigmatisation et le rôle de l’IA... sans nier les défis d’accès à la consultation.",
    "themes": ["santé mentale", "psychiatrie", "France", "David Masson", "Centre Psychothérapique de Nancy", "psychoéducation", "pair-aidance", "prévention du suicide", "3114", "innovation", "déstigmatisation", "IA", "consultation", "société"],
    "links": {
      "page": "https://csoluble.media/epsode/sante-mentale-ce-que-peut-vraiment-la-psychiatrie-avec-dr-david-masson/",
      "spotify": "https://open.spotify.com/episode/3d6VTe10LguEwvLhd0EzYa?si=N2CvAiraQJC5OJjMp1xcow",
      "apple": "https://podcasts.apple.com/fr/podcast/sant%C3%A9-mentale-ce-que-peut-vraiment-la-psychiatrie-avec/id1640003869?i=1000723381293",
      "deezer": "https://link.deezer.com/s/31ARAbzIMXzbPYoYL3iRx",
      "youtube": "https://www.youtube.com/watch?v=jBq3PBFyO7Y",
      "transcription": "https://csoluble.media/epsode/transcription-sante-mentale-ce-que-peut-vraiment-la-psychiatrie-avec-dr-david-masson/",
      "summary": null
    }
  },
  {
    "id": "ep101",
    "title": "Marcelle media : 7 ans de journalisme de solutions depuis Marseille avec Nathania Cahen",
    "date": "2025-08-18",
    "duration": "27:13",
    "guest": "Nathania Cahen",
    "category": "Société",
    "description": "Nathania Cahen, cofondatrice de Marcelle, détaille 7 ans de journalisme de solutions à Marseille. Elle explique la démarche exigeante du média, rétive au “journalisme de Bisounours”, la couverture terrain et la transparence sur les échecs. L’épisode éclaire la sortie du Guide du Marseille Désirable (230 adresses durables), le modèle économique sans publicité, l’action éducative (EMI) auprès des lycéens sur la GAR, et les contenus via 22-med pour le bassin méditerranéen. Marcelle teste, critique et accompagne les solutions appliquées au quotidien.",
    "themes": ["journalisme de solutions", "Marseille", "Marcelle", "Nathania Cahen", "Guide du Marseille Désirable", "médias", "société", "EMI", "enquête terrain", "indépendance", "abonnement", "22-med", "éducation aux médias", "France"],
    "links": {
      "page": "https://csoluble.media/epsode/marcelle-media-7-ans-de-journalisme-de-solutions-depuis-marseille-avec-nathania-cahen/",
      "spotify": "https://open.spotify.com/episode/1sjZWlYmSiOos3eUWza8Ac?si=I3wg7Ge6RtmlS8WVZT2-3g",
      "apple": "https://podcasts.apple.com/fr/podcast/marcelle-7-ans-de-journalisme-de-solutions/id1640003869?i=1000722356546",
      "deezer": "https://link.deezer.com/s/31ARAvOi0kjoVeOhFZ99W",
      "youtube": "https://www.youtube.com/watch?v=HC0sEO0fQmQ",
      "transcription": "https://csoluble.media/epsode/transcription-marcelle-media-7-ans-de-journalisme-de-solutions-depuis-marseille-avec-nathania-cahen/",
      "summary": null
    }
  },
  {
    "id": "ep100",
    "title": "Climax, le média qui documente la révolution culturelle écologique avec Millie Servant",
    "date": "2025-08-04",
    "duration": "40:09",
    "guest": "Millie Servant",
    "category": "Environnement",
    "description": "Millie Servant, rédactrice en chef de Climax, dévoile les coulisses d’un média atypique qui transforme l’urgence climatique en récit pop et accessible. Avec ses rubriques originales, ses enquêtes façon polar et son ton sarcastique, Climax touche une communauté engagée (82K abonnés Instagram, 40K à la newsletter). Fanzine papier, newsletter, BD, collaborations avec journalistes, graphistes et photographes… Le magazine documente la révolution culturelle écologique, multiplie les formats innovants et se distingue par son indépendance économique et éditoriale, sans publicité.",
    "themes": ["Climax", "écologie", "média", "révolution culturelle", "Millie Servant", "fanzine", "pop culture", "satire", "décalé", "journalisme", "magazine", "enquête", "communauté", "France", "indépendance", "crowdfounding", "engagement"],
    "links": {
      "page": "https://csoluble.media/epsode/climax-le-media-qui-documente-la-revolution-culturelle-ecologique-avec-millie-servant/",
      "spotify": "https://open.spotify.com/episode/5wrKvIKo8HHV3IbCSlO7kC?si=AfgTUaAgQnOFQhF4h9qEWA",
      "apple": "https://podcasts.apple.com/fr/podcast/climax-le-m%C3%A9dia-qui-documente-la-r%C3%A9volution-culturelle/id1640003869?i=1000720545348",
      "deezer": "https://link.deezer.com/s/31ARANXTys0UAseSMSKte",
      "youtube": "https://www.youtube.com/watch?v=-fTVONCb1bI",
      "transcription": "https://csoluble.media/epsode/transcription-climax-le-media-qui-documente-la-revolution-culturelle-ecologique-avec-millie-servant/",
      "summary": null
    }
  },
  {
    "id": "ep99",
    "title": "IA : Rester humain face à la machine, mission impossible ? Avec Maxime Derian",
    "date": "2025-07-28",
    "duration": "01:14:50",
    "guest": "Maxime Derian",
    "category": "Société",
    "description": "Maxime Derian, anthropologue du numérique, analyse l’adoption massive de l’IA générative en France, et interroge ses impacts sur nos relations, notre identité et notre planète. L’épisode aborde l’illusion d’empathie des chatbots, les risques pour les enfants et adolescents (compagnons IA, dépendance émotionnelle), la nécessité d’un “technoréalisme”, la souveraineté numérique européenne, la création d’un droit spécifique à l’IA et les limites environnementales de la technologie. Initiative portée : iRAISE, coalition mondiale pour protéger les enfants face à l’IA.",
    "themes": ["intelligence artificielle", "Maxime Derian", "anthropologie", "empathie artificielle", "compagnons IA", "technoréalisme", "souveraineté numérique", "Europe", "enfants", "droits", "environnement", "ARCEP", "iRAISE", "Common Sense Media"],
    "links": {
      "page": "https://csoluble.media/epsode/ia-rester-humain-face-a-la-machine-mission-impossible-avec-maxime-derian/",
      "spotify": "https://open.spotify.com/episode/4N8UHJCReg2M3OhLYF8yTN",
      "apple": "https://podcasts.apple.com/fr/podcast/ia-rester-humain-face-%C3%A0-la-machine-mission-impossible/id1640003869?i=1000719446580",
      "deezer": "https://link.deezer.com/s/31ARB7ZcIM1NQFHZFzKfS",
      "youtube": "https://www.youtube.com/watch?v=bs0_3egpXp0",
      "transcription": "https://csoluble.media/epsode/transcription-ia-rester-humain-face-a-la-machine-mission-impossible-avec-maxime-derian/",
      "summary": null
    }
  },
  {
    "id": "ep98",
    "title": "Climat, biodiversité : les entreprises peuvent-elles vraiment faire partie de la solution ?",
    "date": "2025-07-21",
    "duration": "40:33",
    "guest": "Fabrice Bonnifet",
    "category": "Environnement",
    "description": "Fabrice Bonnifet, président de GenAct et du Collège des Directeurs du Développement Durable (C3D), explore l’idée que les entreprises doivent dépasser la logique de « réduction d’impact » pour devenir des forces régénératrices de la nature. L’épisode détaille les limites de la RSE, la nécessité de l’économie permacirculaire, l’impératif de décroître sur le superflu, d’investir massivement dans la régénération des écosystèmes et de repenser les indicateurs économiques à l’aune de la résilience écologique. GenAct accompagne salariés et entrepreneurs dans cette transformation pour une prospérité collective durable.",
    "themes": ["climat", "biodiversité", "entreprises", "régénération", "GenAct", "C3D", "RSE", "économie permacirculaire", "décroissance", "transformation", "limites planétaires", "France", "indicateurs", "prospérité", "action collective", "écosystèmes"],
    "links": {
      "page": "https://csoluble.media/epsode/climat-biodiversite-les-entreprises-peuvent-elles-vraiment-faire-partie-de-la-solution/",
      "spotify": "https://open.spotify.com/episode/1Gje9Rj9qf03KrmiT2Jht2?si=_dQkEwarTpiLb3LiCE6stg",
      "apple": "https://podcasts.apple.com/fr/podcast/climat-biodiversit%C3%A9-les-entreprises-peuvent-elles-vraiment/id1640003869?i=1000718220591",
      "deezer": "https://link.deezer.com/s/31ARBrthhLQEWKnP2PbZw",
      "youtube": "https://www.youtube.com/watch?v=CL4n_WmNHyw",
      "transcription": "https://csoluble.media/epsode/transcription-climat-biodiversite-les-entreprises-peuvent-elles-vraiment-faire-partie-de-la-solution/",
      "summary": null
    }
  },
  {
    "id": "ep97",
    "title": "IA et numérique : peut-on innover sans aggraver le changement climatique ?",
    "date": "2025-07-15",
    "duration": "35:20",
    "guest": "Tristan Nitot",
    "category": "Environnement",
    "description": "Tristan Nitot, pionnier du logiciel libre et directeur associé chez Octo Technology, éclaire l’impact écologique du numérique et de l’intelligence artificielle en France, où le secteur représente 4,4 % des émissions nationales de CO2. L’épisode décrypte la fabrication des appareils, l’essor des data centers IA, les lois informatiques (Moore, Wirth et erooM), et la nécessité de changer le modèle dominant pour atteindre la sobriété numérique. Conseils citoyens : optimiser les logiciels, allonger la durée de vie des appareils, limiter les usages superflus de l’IA, et privilégier l’utilité et la responsabilité collective.",
    "themes": ["numérique", "climat", "CO2", "Tristan Nitot", "Octo Technology", "intelligence artificielle", "data center", "sobriété", "logiciels", "fabrication", "France", "émissions", "optimisation", "citoyen", "innovation", "transition", "hardware"],
    "links": {
      "page": "https://csoluble.media/epsode/ia-et-numerique-peut-on-innover-sans-aggraver-le-changement-climatique/",
      "spotify": "https://open.spotify.com/episode/4OjP3Ocmpr40FYoUJqtIxs?si=f9x3LUp2RUWV_ZdV7Fio6w",
      "apple": "https://podcasts.apple.com/fr/podcast/ia-et-num%C3%A9rique-peut-on-innover-sans-aggraver-le-changement/id1640003869?i=1000717275012",
      "deezer": "https://link.deezer.com/s/31ARCz1HhzFjSL1Rt2MXK",
      "youtube": "https://www.youtube.com/watch?v=5SQ_VaqaG2E",
      "transcription": "https://csoluble.media/epsode/transcription-ia-et-numerique-peut-on-innover-sans-aggraver-le-changement-climatique/",
      "summary": null
    }
  },
  {
    "id": "ep96",
    "title": "30 000 citoyens Shifters pour décarboner la France face à l’urgence climatique",
    "date": "2025-07-07",
    "duration": "31:08",
    "guest": "Sylvaine Dhion",
    "category": "Environnement",
    "description": "Sylvaine Dhion, porte-parole de l’association Les Shifters, présente ce collectif de 30 000 bénévoles qui agissent pour une France neutre en émissions de gaz à effet de serre, dans le sillage du Shift Project (Jean-Marc Jancovici). L’épisode aborde les leviers de l’action individuelle et collective, la mobilisation citoyenne, l’expertise de terrain, la campagne de financement participatif, et la nécessité de réduire l’empreinte carbone à 2 tonnes par Français d’ici 2050. Les Shifters accompagnent les collectivités et citoyens vers la transition écologique, tout en informant sur la base de faits scientifiques et en mobilisant contre le climatoscepticisme.",
    "themes": ["climat", "décarbonation", "Les Shifters", "bénévolat", "Jean-Marc Jancovici", "énergie", "transition", "Shift Project", "citoyen", "France", "empreinte carbone", "action collective", "campagne", "neutralité"],
    "links": {
      "page": "https://csoluble.media/epsode/30-000-citoyens-shifters-pour-decarboner-la-france-face-a-lurgence-climatique/",
      "spotify": "https://open.spotify.com/episode/1ufDdiNzHcXgOWKRXMrBqq?si=0wi-_BkuTNCps-e0_zlMcA",
      "apple": "https://podcasts.apple.com/fr/podcast/30-000-citoyens-shifters-pour-d%C3%A9carboner-la-france/id1640003869?i=1000716047953",
      "deezer": "https://link.deezer.com/s/31ARBLjFCiEjff1wtufls",
      "youtube": "https://www.youtube.com/watch?v=0NnjPvs75sA",
      "transcription": "https://csoluble.media/epsode/transcription-30-000-citoyens-shifters-pour-decarboner-la-france-face-a-lurgence-climatique/",
      "summary": null
    }
  },
  {
    "id": "ep95",
    "title": "Canicules, inondations, tempêtes, feux de forêt : comment s’y préparer avec la Croix-Rouge",
    "date": "2025-06-30",
    "duration": "25:37",
    "guest": "Jérémie Chaligné",
    "category": "Vie quotidienne",
    "description": "Jérémie Chaligné, responsable du pôle Éducation à la résilience pour la Croix-Rouge française, détaille la montée des catastrophes climatiques en France (canicules, inondations, tempêtes, feux de forêt), l’intensification des risques liés au réchauffement, le manque de préparation (gestes de premiers secours, sacs Catakit), les impacts psychologiques et les mesures pour renforcer la résilience individuelle et collective. L’épisode aborde des conseils pratiques, la formation, le soutien psychologique et l’engagement citoyen face à l’urgence climatique.",
    "themes": ["climat", "urgence", "résilience", "France", "Croix-Rouge", "Catakit", "canicule", "catastrophes", "inondations", "tempêtes", "feux de forêt", "réchauffement", "prévention", "bénévolat", "sac d’urgence", "santé mentale"],
    "links": {
      "page": "https://csoluble.media/epsode/canicules-inondations-tempetes-feux-de-forets-comment-sy-preparer-avec-la-croix-rouge/",
      "spotify": "https://open.spotify.com/episode/3dSLxqWI3z66djP1Yg99nr?si=Vp8Ik0EaQ-G3z_dx0TyYbQ",
      "apple": "https://podcasts.apple.com/fr/podcast/canicules-inondations-temp%C3%AAtes-feux-de-for%C3%AAts/id1640003869?i=1000715077376",
      "deezer": "https://link.deezer.com/s/31ARDcgNKBTwSPDpwGs5c",
      "youtube": "https://www.youtube.com/watch?v=NvDZmpBX-JI",
      "transcription": "https://csoluble.media/epsode/transcription-canicules-inondations-tempetes-feux-de-forets-comment-sy-preparer-avec-la-croix-rouge/",
      "summary": null
    }
  },
  {
    "id": "ep94",
    "title": "Mémo de vie, coffre-fort numérique pour aider les victimes de violences répétées",
    "date": "2025-06-23",
    "duration": "17:49",
    "guest": "Fabienne Brégy",
    "category": "Société",
    "description": "Fabienne Brégy, de France Victimes, présente Mémo de Vie : une plateforme ultra-sécurisée et gratuite qui permet aux victimes de violences répétées de documenter les faits (certificats, photos, journaux), de rompre l’isolement et d’accéder à un accompagnement global. L’épisode détaille les enjeux de l’isolement, le manque de preuves, les fonctionnalités du coffre-fort digital, l’aide aux proches, et l’implication des acteurs publics dans la diffusion du dispositif.",
    "themes": ["violences", "victimes", "sécurité", "France Victimes", "Fabienne Brégy", "Mémo de vie", "preuves", "coffre-fort numérique", "accompagnement", "témoignages", "isolement", "justice", "société", "urgence", "aide", "sensibilisation"],
    "links": {
      "page": "https://csoluble.media/epsode/memo-de-vie-coffre-fort-numerique-pour-aider-les-victimes-de-violences-repetees/",
      "spotify": "https://open.spotify.com/episode/6N3unofMwe8znCMKU3Kxk7?si=kvUyscVVQYy7w6HMg-gD2A",
      "apple": "https://podcasts.apple.com/fr/podcast/m%C3%A9mo-de-vie-coffre-fort-num%C3%A9rique-pour-aider-les/id1640003869?i=1000714125595",
      "deezer": "https://link.deezer.com/s/31ARDvWbnhkrzT9BLXXOa",
      "youtube": "https://www.youtube.com/watch?v=1NfKIz7J8jA",
      "transcription": "https://csoluble.media/epsode/transcription-memo-de-vie-coffre-fort-numerique-pour-aider-les-victimes-de-violences-repetees/",
      "summary": null
    }
  },
  {
    "id": "ep93",
    "title": "Endotest, un test salivaire pour réduire l’errance diagnostique de l’endométriose",
    "date": "2025-06-16",
    "duration": "18:42",
    "guest": "Yahya El Mir",
    "category": "Société",
    "description": "Yahya El Mir, fondateur de Ziwig, détaille le fonctionnement d’Endotest, un test salivaire associant analyse des micro-ARN et intelligence artificielle pour diagnostiquer l’endométriose, maladie gynécologique qui touche 2 millions de femmes en France. L’épisode aborde les enjeux de l’errance diagnostique (7 ans en moyenne), la prise en charge désormais remboursée en France pour 25 000 femmes, et l’impact sociétal d’une innovation portée par la stratégie nationale de santé. Ziwig et l’Endotest sont aussi pionniers dans le diagnostic du cancer de l’ovaire.",
    "themes": ["endométriose", "diagnostic", "test salivaire", "Ziwig", "innovation", "santé féminine", "micro-ARN", "intelligence artificielle", "assurance maladie", "handicap", "société", "France", "centres hospitaliers", "cancer de l’ovaire", "stratégie nationale"],
    "links": {
      "page": "https://csoluble.media/epsode/endotest-un-test-salivaire-pour-reduire-l-errance-diagnostique-de-l-endometriose/",
      "spotify": "https://open.spotify.com/episode/1tclIpTArakUSH0iJ3bUje?si=zv-SMSUDRs-J1hJJhq-lVQ",
      "apple": "https://podcasts.apple.com/fr/podcast/lendotest-un-test-salivaire-pour-r%C3%A9duire-lerrance/id1640003869?i=1000713033352",
      "deezer": "https://link.deezer.com/s/31ARDONyhJCq7YnQcWw3v",
      "youtube": "https://www.youtube.com/watch?v=Odtln9R_2A4",
      "transcription": "https://csoluble.media/epsode/transcription-endotest-un-test-salivaire-pour-reduire-l-errance-diagnostique-de-l-endometriose/",
      "summary": null
    }
  },
  {
    "id": "ep92",
    "title": "Aimer et protéger les chauves-souris avec Manon Béréhouc",
    "date": "2025-06-09",
    "duration": "21:28",
    "guest": "Manon Béréhouc",
    "category": "Environnement",
    "description": "Manon Béréhouc, photographe et cinéaste naturaliste, dévoile pour Soluble(s) la vie secrète des chauves-souris, essentielles à la biodiversité. Alors que ces mammifères volants déclinent, elle mobilise l’image pour sensibiliser et agir. L’épisode met en avant leur rôle dans la régulation des insectes, les menaces qui pèsent sur elles (pesticides, perte d’habitat, pollution lumineuse), les gestes individuels pour les protéger, ainsi que l’importance des expositions et du livre Cavernicole.",
    "themes": ["chauves-souris", "biodiversité", "Manon Béréhouc", "photographie animalière", "cinéma", "régulation", "hibernation", "sensibilisation", "habitat", "France", "environnement", "exposition", "livre", "Cavernicole"],
    "links": {
      "page": "https://csoluble.media/epsode/aimer-et-proteger-les-chauves-souris-avec-manon-berehouc/",
      "spotify": "https://open.spotify.com/episode/4sZVi42zzDGhRWlemLdnhC?si=IQCwWF3wQouBRhN5s8JDBg",
      "apple": "https://podcasts.apple.com/fr/podcast/aimer-et-prot%C3%A9ger-les-chauves-souris-avec-manon-b%C3%A9r%C3%A9houc/id1640003869?i=1000712042613",
      "deezer": "https://link.deezer.com/s/31AREcqhYJFXEF0dvZXXt",
      "youtube": "https://www.youtube.com/watch?v=DM1otbypej0",
      "transcription": "https://csoluble.media/epsode/transcription-aimer-et-proteger-les-chauves-souris-avec-manon-berehouc/",
      "summary": null
    }
  },
  {
    "id": "ep91",
    "title": "Vera, l’IA française qui combat les fake news en 3 secondes chrono",
    "date": "2025-06-02",
    "duration": "18:36",
    "guest": "Florian Gauthier",
    "category": "Société",
    "description": "Face à l’épidémie de fake news, Vera, l’intelligence artificielle de l’ONG LaReponse.tech, s’appuie sur plus de 400 sources fiables pour fournir des réponses en trois secondes grâce à WhatsApp, Instagram et téléphone. Dans Soluble(s), Florian Gauthier, cofondateur, explique comment cette technologie vérifie les informations virales via un fact-checking rigoureux et accessible, garantissant l’indépendance du projet et sa gratuité, afin de répondre à une véritable urgence démocratique.",
    "themes": ["fake news", "intelligence artificielle", "LaReponse.tech", "Vera", "démocratie", "fact-checking", "sources fiables", "rigueur", "WhatsApp", "Instagram", "médias", "baromètre Viavoice", "deepfake", "éducation aux médias", "indépendance"],
    "links": {
      "page": "https://csoluble.media/epsode/vera-l-ia-francaise-qui-combat-les-fake-news-en-3-secondes-chrono/",
      "spotify": "https://open.spotify.com/episode/0rPudSYKkJxcaiIweyuM9b?si=FtMs_Ky_THWX1LuRehbeew",
      "apple": "https://podcasts.apple.com/fr/podcast/vera-lia-fran%C3%A7aise-qui-combat-les-fake-news-en-3-secondes/id1640003869?i=1000710808246",
      "deezer": "https://link.deezer.com/s/31AREx0N5A2FYI0lYLq7i",
      "youtube": "https://www.youtube.com/watch?v=f2EA3Ik2Rcs",
      "transcription": "https://csoluble.media/epsode/transcription-vera-l-ia-francaise-qui-combat-les-fake-news-en-3-secondes-chrono/",
      "summary": null
    }
  },
  {
    "id": "ep90",
    "title": "Relancer le vélo carbone “Made in France” : le défi de Nilman Bicycle",
    "date": "2025-05-26",
    "duration": "23:31",
    "guest": "Nils Mangold",
    "category": "Vie quotidienne",
    "description": "Nils Mangold, ingénieur et ex-coureur cycliste, lance Nilman Bicycle en 2022 près de Strasbourg pour relocaliser la fabrication de cadres carbone en France, dans un secteur dominé par l’Asie. Avec ses vélos performants (gravel, VAE) réalisés avec 580 pièces de carbone intégrées à la main, il mise sur l'innovation technique (courroie, mousse dans le cadre). Malgré le vol de prototypes en 2024, son projet redémarre grâce au financement participatif. L’épisode aborde les défis industriels, économiques et de mobilité en France, ainsi que l’importance des infrastructures cyclables pour adopter massivement le vélo.",
    "themes": ["vélo", "France", "carbone", "Nilman Bicycle", "fabrication locale", "innovation", "mobilité", "Strasbourg", "gravel", "VAE", "transmission", "financement participatif", "industrie", "infrastructures", "emploi"],
    "links": {
      "page": "https://csoluble.media/epsode/relancer-le-velo-carbone-made-in-france-le-defi-de-nilman-bicycle/",
      "spotify": "https://open.spotify.com/episode/1U0oYtSTrWd5hco1FxBDsC?si=-R1k58Z9R-ydRdu8BjEr_w",
      "apple": "https://podcasts.apple.com/fr/podcast/relancer-le-v%C3%A9lo-carbone-made-in-france-le-d%C3%A9fi-de/id1640003869?i=1000709853145",
      "deezer": "https://link.deezer.com/s/31ARENiuqV4E4wUEaWWEa",
      "youtube": "https://www.youtube.com/watch?v=zrvJlAcuuN8",
      "transcription": "https://csoluble.media/epsode/transcription-relancer-le-velo-carbone-made-in-france-le-defi-de-nilman-bicycle/",
      "summary": null
    }
  },
  {
    "id": "ep89",
    "title": "Les navettes autonomes, la clé pour une mobilité périurbaine plus verte ?",
    "date": "2025-05-19",
    "duration": "28:25",
    "guest": "Carlos Holguin",
    "category": "Société",
    "description": "En banlieue parisienne, une navette électrique relie les habitants aux transports en commun pour réduire la dépendance à la voiture individuelle et ses impacts climatiques. Carlos Holguin, cofondateur de SuburVAN, expose le projet Rocq-Express : des vans électriques (et bientôt autonomes) qui connectent Rocquencourt à la gare de Vaucresson. Testé en Île-de-France, ce service gratuit vise à transformer la mobilité périurbaine, réduire les émissions de CO2, et ouvrir la voie à une autonomie complète d’ici 2027.",
    "themes": ["mobilité", "périurbain", "navette autonome", "SuburVAN", "Rocq-Express", "décarbonation", "banlieue", "expérimentation", "transport public", "innovation", "France", "acceptabilité", "économie", "autonomie"],
    "links": {
      "page": "https://csoluble.media/epsode/les-navettes-autonomes-la-cle-pour-une-mobilite-periurbaine-plus-verte/",
      "spotify": "https://open.spotify.com/episode/7wxBH7SKTOvZdhLvO5ISax?si=gX8lwWwwS22y7NUamoGMpw",
      "apple": "https://podcasts.apple.com/fr/podcast/les-navettes-autonomes-la-cl%C3%A9-pour-une-mobilit%C3%A9-p%C3%A9riurbaine/id1640003869?i=1000708940686",
      "deezer": "https://link.deezer.com/s/31ARF8arkCi9MqxWHBv4M",
      "youtube": "https://www.youtube.com/watch?v=svzDEghbCkk",
      "transcription": "https://csoluble.media/epsode/transcription-les-navettes-autonomes-la-cle-pour-une-mobilite-periurbaine-plus-verte/",
      "summary": null
    }
  },
  {
    "id": "ep88",
    "title": "Peut-on rendre le bio accessible sans sacrifier les agriculteurs ?",
    "date": "2025-05-12",
    "duration": "19:54",
    "guest": "Maxime Durand",
    "category": "Environnement",
    "description": "Maxime Durand, cofondateur de Beyond Green, détaille le modèle d’achat innovant qui accompagne les producteurs vers la conversion agroécologique et bio, pour garantir un prix juste (+45% par rapport au conventionnel) et des produits accessibles à tous. Présente en grande distribution, l’initiative vise à sécuriser les agriculteurs durant la transition, tout en répondant aux enjeux écologiques et sociaux d’une alimentation durable. L’épisode illustre l’impact politique, économique et sociétal d’un tel modèle, avec près de 650 producteurs accompagnés et 400 hectares convertis.",
    "themes": ["bio", "agriculture", "agroécologie", "Beyond Green", "transition", "prix juste", "grande distribution", "PourDemain", "Vivants", "Environnement", "ESUS", "alimentation durable", "impact social", "France"],
    "links": {
      "page": "https://csoluble.media/epsode/peut-on-rendre-le-bio-accessible-sans-sacrifier-les-agriculteurs/",
      "spotify": "https://open.spotify.com/episode/1TGf5Vush2gbHn63MWa1Df?si=niWq0kC7QdGISPOoVSyfkg",
      "apple": "https://podcasts.apple.com/fr/podcast/peut-on-rendre-le-bio-accessible-sans-sacrifier-les/id1640003869?i=1000708051424",
      "deezer": "https://link.deezer.com/s/31ARFqBSKKlLM2jR2pe5i",
      "youtube": "https://www.youtube.com/watch?v=Qb1XnsmnCYY",
      "transcription": "https://csoluble.media/epsode/transcription-peut-on-rendre-le-bio-accessible-sans-sacrifier-les-agriculteurs/",
      "summary": null
    }
  },
  {
    "id": "ep87",
    "title": "StudiAva : Le \"Tinder de l'orientation\" post-bac qui utilise l'IA pour aider les lycéens",
    "date": "2024-12-09",
    "duration": "16:36",
    "guest": "Wassim Benouis",
    "category": "Vie quotidienne",
    "description": "StudiAva aide les lycéens à faire des choix éclairés pour leur orientation post-bac en utilisant l'IA pour analyser leurs résultats scolaires, aspirations et compétences comportementales.",
    "themes": ["Orientation post-bac", "IA", "Parcoursup", "soft skills"],
    "links": {
      "page": "https://csoluble.media/epsode/studiava-le-tinder-de-lorientation-post-bac-qui-utilise-lia-pour-aider-les-lyceens/",
      "spotify": "https://open.spotify.com/episode/0hXbd6KgfFtqi7qhh5pCuA?si=f1efac24ac854d16",
      "apple": "https://podcasts.apple.com/fr/podcast/studiava-le-tinder-de-lorientation-post-bac-qui/id1640003869?i=1000679699893",
      "deezer": "https://link.deezer.com/s/31ARFNnMz1TWcLMvyjZJo",
      "youtube": "https://www.youtube.com/watch?v=9u45EwKfXqg",
      "transcription": "https://csoluble.media/epsode/transcription-studiava-le-tinder-de-lorientation-post-bac-qui-utilise-lia-pour-aider-les-lyceens/",
      "summary": null
    }
  },
  {
    "id": "ep86",
    "title": "Qi-Bô : de beaux vêtements adaptés aux soins à porter malgré la chimiothérapie",
    "date": "2024-11-04",
    "duration": "23:44",
    "guest": "Hélène Nal-Martin",
    "category": "Société",
    "description": "Les soins comme la chimiothérapie nécessitent souvent de se dévêtir faute de vêtements adaptés. Qi-Bô propose des vêtements adaptés aux besoins spécifiques des patients en chimiothérapie, tout en alliant praticité et style.",
    "themes": ["Vêtements adaptés", "chimiothérapie", "style", "confort"],
    "links": {
      "page": "https://csoluble.media/epsode/qi-bo-de-beaux-vetements-adaptes-aux-soins-a-porter-malgre-la-chimiotherapie/",
      "spotify": "https://open.spotify.com/episode/6tufkyRYDc1POCkEZW75q6?si=ca8c1d2eda4c44a1",
      "apple": "https://podcasts.apple.com/fr/podcast/qi-b%C3%B4-de-beaux-v%C3%AAtements-adapt%C3%A9s-aux-soins-%C3%A0-porter/id1640003869?i=1000675559661",
      "deezer": "https://link.deezer.com/s/31ARGj6JMjuh0a0mO9pf5",
      "youtube": "https://www.youtube.com/watch?v=sm9UhMgtWu4",
      "transcription": "https://csoluble.media/epsode/transcription-qi-bo-de-beaux-vetements-adaptes-aux-soins-a-porter-malgre-la-chimiotherapie/",
      "summary": null
    }
  },
  {
    "id": "ep85",
    "title": "NewsTruck, vidéos, ateliers : Lumières sur l'info engage les jeunes contre la désinformation",
    "date": "2024-10-28",
    "duration": "34:57",
    "guest": "Damien Fleurot",
    "category": "Société",
    "description": "L'association Lumières sur l'info aide les jeunes à distinguer le vrai du faux dans un monde où l'information circule rapidement. Présidée par Damien Fleurot, elle propose des ateliers et des vidéos pour éduquer aux médias.",
    "themes": ["Désinformation", "éducation aux médias", "jeunes", "fake news"],
    "links": {
      "page": "https://csoluble.media/epsode/newstruck-videos-ateliers-lumieres-sur-linfo-engage-les-jeunes-contre-la-desinformation/",
      "spotify": "https://open.spotify.com/episode/6PwHsqaRRbrse0HGRwrTos?si=M8PCw-jcQ9WMzT2jZA3E1w",
      "apple": "https://podcasts.apple.com/fr/podcast/newstruck-vid%C3%A9os-ateliers-lumi%C3%A8res-sur-linfo-engage/id1640003869?i=1000674657485",
      "deezer": "https://link.deezer.com/s/31ARJeCqjzDgNDda0tMfZ",
      "youtube": "https://www.youtube.com/watch?v=0Cak9PqPvjQ",
      "transcription": "https://csoluble.media/epsode/transcription-newstruck-videos-ateliers-lumieres-sur-linfo-engage-les-jeunes-contre-la-desinformation/",
      "summary": null
    }
  },
  {
    "id": "ep84",
    "title": "Les poules d'ornement et de races anciennes ne sont pas avares en solutions",
    "date": "2024-10-21",
    "duration": "19:24",
    "guest": "Manuela Leduc",
    "category": "Environnement",
    "description": "Les poules d’ornement, ces volailles aux plumages magnifiques et aux allures excentriques, sont de véritables alliées pour un mode de vie plus écologique et économe.",
    "themes": ["Poules d'ornement", "races anciennes", "écologie", "biodiversité"],
    "links": {
      "page": "https://csoluble.media/epsode/les-poules-dornement-et-de-races-anciennes-ne-sont-pas-avares-en-solutions/",
      "spotify": "https://open.spotify.com/episode/3emGh6iyOngOGsFFwgePxU?si=0mTNMrOiSR2DQ1kMWxOVTQ",
      "apple": "https://podcasts.apple.com/fr/podcast/les-poules-dornement-et-de-races-anciennes-ne-sont/id1640003869?i=1000673788234",
      "deezer": "https://link.deezer.com/s/31ARJAp0FzwImPcVNLeOz",
      "youtube": "https://www.youtube.com/watch?v=SWbPBxN64VU",
      "transcription": "https://csoluble.media/epsode/transcription-les-poules-dornement-et-de-races-anciennes-ne-sont-pas-avares-en-solutions/",
      "summary": null
    }
  },
  {
    "id": "ep83",
    "title": "L'adoption des coraux : une solution pour préserver les écosystèmes marins",
    "date": "2024-10-07",
    "duration": "26:49",
    "guest": "Jeimila Donty",
    "category": "Environnement",
    "description": "Dans un contexte de dégradation accélérée des écosystèmes marins, les récifs coralliens sont en première ligne. Face à cette urgence, des initiatives innovantes ont émergé, comme celle de Koraï, qui propose une approche novatrice pour restaurer les coraux et préserver les océans.",
    "themes": ["Coraux", "Restauration", "Biodiversité", "Océans", "Madagascar"],
    "links": {
      "page": "https://csoluble.media/epsode/ladoption-des-coraux-une-solution-pour-preserver-les-ecosystemes-marins/",
      "spotify": "https://open.spotify.com/episode/1KiKmWzc4b1dxQSUYAhFc1?si=ebd1ba7e0ac243c6",
      "apple": "https://podcasts.apple.com/fr/podcast/ladoption-des-coraux-une-solution-pour-pr%C3%A9server-les/id1640003869?i=1000672003209",
      "deezer": "https://link.deezer.com/s/31ARJR1trMCVU2aBpIzgV",
      "youtube": "https://www.youtube.com/watch?v=gDRlnu47nVY",
      "transcription": "https://csoluble.media/epsode/transcription-ladoption-des-coraux-une-solution-pour-preserver-les-ecosystemes-marins/",
      "summary": null
    }
  },
  {
    "id": "ep82",
    "title": "La soumission chimique : un phénomène criminel à combattre",
    "date": "2024-09-30",
    "duration": "29:36",
    "guest": "Arnaud Gallais",
    "category": "Société",
    "description": "Cet épisode met en lumière le phénomène de la soumission chimique, en particulier à travers le procès des viols de Mazan. Quelles sont les solutions ? Ecoutez.",
    "themes": ["Soumission chimique", "violences sexuelles", "procès Pélicot", "santé publique", "prévention"],
    "links": {
      "page": "https://csoluble.media/epsode/la-soumission-chimique-un-phenomene-criminel-a-combattre/",
      "spotify": "https://open.spotify.com/episode/69RUd4ZD3hSpZr2uO9Jv1n?si=vItSXRuaQfq90srGN87rHA",
      "apple": "https://podcasts.apple.com/fr/podcast/la-soumission-chimique-un-ph%C3%A9nom%C3%A8ne-criminel-%C3%A0-combattre/id1640003869?i=1000671235662",
      "deezer": "https://link.deezer.com/s/31ARK87XqsUDKBoDrB3Fr",
      "youtube": "https://www.youtube.com/watch?v=HgSkvZvRCfU",
      "transcription": "https://csoluble.media/epsode/transcription-la-soumission-chimique-un-phenomene-criminel-a-combattre/",
      "summary": null
    }
  },
  {
    "id": "ep81",
    "title": "Un revenu minimum pour les étudiants de Petit-Quevilly",
    "date": "2024-09-23",
    "duration": "15:44",
    "guest": "Charlotte Goujon",
    "category": "Vie quotidienne",
    "description": "Cet épisode explore l'initiative de la ville de Petit-Quevilly de mettre en place un Revenu Minimum Étudiant pour soutenir les étudiants dans leurs parcours universitaires et réduire les inégalités d'accès aux études supérieures.",
    "themes": ["Revenu minimum étudiant", "soutien financier", "inégalités", "études supérieures", "aide communale"],
    "links": {
      "page": "https://csoluble.media/epsode/un-revenu-minimum-pour-les-etudiants-de-petit-quevilly/",
      "spotify": "https://open.spotify.com/episode/3nUrmp1sbyjL8Yw8Vfz2iT?si=MZpN1_FmSACKA7apEODvRQ",
      "apple": "https://podcasts.apple.com/fr/podcast/un-revenu-minimum-pour-les-%C3%A9tudiants-de-petit-quevilly/id1640003869?i=1000670345288",
      "deezer": "https://link.deezer.com/s/31ARKtxxCqKh9tbnxd99o",
      "youtube": "https://www.youtube.com/watch?v=TEbXeK3v_o8",
      "transcription": "https://csoluble.media/epsode/transcription-un-revenu-minimum-pour-les-etudiants-de-petit-quevilly/",
      "summary": null
    }
  },
  {
    "id": "ep80",
    "title": "Derrière les chiffres du harcèlement scolaire : comprendre et agir",
    "date": "2024-09-02",
    "duration": "43:21",
    "guest": "Marie Quartier",
    "category": "Société",
    "description": "Marie Quartier, cofondatrice du centre ReSIS, explique les mécanismes du harcèlement scolaire et propose des solutions pour le prévenir et le résoudre. Elle met en avant l'importance de l'effet de groupe et la méthode de la préoccupation partagée.",
    "themes": ["Harcèlement scolaire", "prévention", "effet de groupe", "méthode de la préoccupation partagée", "éducation", "parents", "élèves", "programme pHAre", "numéro d'appel 3018", "Centre ReSIS"],
    "links": {
      "page": "https://csoluble.media/epsode/derriere-les-chiffres-du-harcelement-scolaire-comprendre-et-agir/",
      "spotify": "https://open.spotify.com/episode/0DmYoaTwBpktGxRBMU7MMz?si=Cj8VjnghQJCMJya9_lAVTw",
      "apple": "https://podcasts.apple.com/fr/podcast/derri%C3%A8re-les-chiffres-du-harc%C3%A8lement-scolaire-comprendre/id1640003869?i=1000668003821",
      "deezer": "https://link.deezer.com/s/31ARKON5mjYsWfCFGkCFQ",
      "youtube": "https://www.youtube.com/watch?v=ph6C5eLKybA",
      "transcription": "https://csoluble.media/epsode/transcription-derriere-les-chiffres-du-harcelement-scolaire-comprendre-et-agir/",
      "summary": null
    }
  },
  {
    "id": "ep79",
    "title": "Le design climatique : une solution pour rafraîchir nos villes et nos logements",
    "date": "2024-08-28",
    "duration": "35:13",
    "guest": "Clément Gaillard",
    "category": "Environnement",
    "description": "Dans cet épisode, nous explorons les solutions de design climatique pour adapter nos environnements aux étés caniculaires de plus en plus fréquents.",
    "themes": ["Design climatique", "urbanisme", "bioclimatique", "réchauffement climatique", "îlots de chaleur urbains"],
    "links": {
      "page": "https://csoluble.media/epsode/le-design-climatique-une-solution-pour-rafraichir-nos-villes-et-nos-logements/",
      "spotify": "https://open.spotify.com/episode/7GKqFjdrYSo5QoNZgDlnY9?si=IsLEDvIrQZSAN57LYhueUw",
      "apple": "https://podcasts.apple.com/fr/podcast/le-design-climatique-une-solution-pour-rafra%C3%AEchir-nos/id1640003869?i=1000666854296",
      "deezer": "https://link.deezer.com/s/31ARLocJ6nuPi7nRuWMNq",
      "youtube": "https://www.youtube.com/watch?v=f8c9cB5EmMg",
      "transcription": "https://csoluble.media/epsode/transcription-le-design-climatique-une-solution-pour-rafraichir-nos-villes-et-nos-logements/",
      "summary": null
    }
  },
  {
    "id": "ep78",
    "title": "Basilic, un podcast engagé pour rendre la vie écolo accessible et désirable",
    "date": "2024-07-22",
    "duration": "28:33",
    "guest": "Jeane Clesse",
    "category": "Environnement",
    "description": "Jeane Clesse discute de son podcast Basilic, qui propose des clés pour agir en faveur de la transition écologique.",
    "themes": ["Transition écologique", "Podcast écologique", "Initiatives positives"],
    "links": {
      "page": "https://csoluble.media/epsode/basilic-un-podcast-engage-pour-rendre-la-vie-ecolo-accessible-et-desirable/",
      "spotify": "https://open.spotify.com/episode/4nasxslnHUNFHOHhuiN9xx?si=X0HMxboqRNK31j36KTm8NQ",
      "apple": "https://podcasts.apple.com/fr/podcast/basilic-un-podcast-engag%C3%A9-pour-rendre-accessible-et/id1640003869?i=1000662929665",
      "deezer": "https://link.deezer.com/s/31ARMSyjOZhkpRFegDoDI",
      "youtube": "https://www.youtube.com/watch?v=Z1-fiqMtbes",
      "transcription": "https://csoluble.media/epsode/transcription-basilic-un-podcast-engage-pour-rendre-la-vie-ecolo-accessible-et-desirable/",
      "summary": null
    }
  },
  {
    "id": "ep77",
    "title": "Les bonnes idées sont dans L’esprit d’initiative sur France Inter",
    "date": "2024-07-15",
    "duration": "21:35",
    "guest": "Cécile Bidault",
    "category": "Société",
    "description": "Cécile Bidault, journaliste pour \"L'Esprit d'initiative\" sur France Inter, revient sur ses rencontres avec les français engagés dans les territoires, du \"journalisme joyeux\".",
    "themes": ["Journalisme", "Initiatives locales", "Engagement citoyen"],
    "links": {
      "page": "https://csoluble.media/epsode/les-bonnes-idees-sont-dans-lesprit-dinitiative-sur-france-inter/",
      "spotify": "https://open.spotify.com/episode/2epVISjdzW0FabsrROsb1w?si=Smfp1xO_SGOnQdWbhFWCRQ",
      "apple": "https://podcasts.apple.com/fr/podcast/les-bonnes-id%C3%A9es-sont-dans-lesprit-dinitiative-sur/id1640003869?i=1000662243390",
      "deezer": "https://link.deezer.com/s/31ARNdnxirPlFOStQZ5h3",
      "youtube": "https://www.youtube.com/watch?v=yStXwaVmlL8",
      "transcription": "https://csoluble.media/epsode/transcription-les-bonnes-idees-sont-dans-lesprit-dinitiative-sur-france-inter/",
      "summary": null
    }
  },
  {
    "id": "ep76",
    "title": "Ces filets interceptent in extremis nos déchets qui polluent gravement les océans",
    "date": "2024-06-26",
    "duration": "19:29",
    "guest": "Stéphane Asikian",
    "category": "Environnement",
    "description": "Cet épisode explore une solution innovante pour intercepter les déchets terrestres avant qu'ils n'atteignent les océans, grâce à des filets et paniers collecteurs installés dans les réseaux hydrauliques.",
    "themes": ["Pollution marine", "déchets", "filets collecteurs", "océans", "environnement"],
    "links": {
      "page": "https://csoluble.media/epsode/ces-filets-interceptent-in-extremis-nos-dechets-qui-polluent-gravement-les-oceans/",
      "spotify": "https://open.spotify.com/episode/2qnWZqwRQKVAA7MtuIEUjy?si=IBePBiXQR_aBsFud8peFVA",
      "apple": "https://podcasts.apple.com/fr/podcast/ces-filets-interceptent-in-extremis-nos-d%C3%A9chets-qui/id1640003869?i=1000660258600",
      "deezer": "https://link.deezer.com/s/31ARNxHXqsyyF03SCHQmg",
      "youtube": "https://www.youtube.com/watch?v=ejQbNu7EUSE",
      "transcription": "https://csoluble.media/epsode/transcription-ces-filets-interceptent-in-extremis-nos-dechets-qui-polluent-gravement-les-oceans/",
      "summary": null
    }
  },
  {
    "id": "ep75",
    "title": "Tortues marines menacées : les soigner et les préserver",
    "date": "2024-06-10",
    "duration": "25:55",
    "guest": "Florence Dell’Amico",
    "category": "Environnement",
    "description": "Florence Dell’Amico discute des efforts pour soigner et protéger les tortues marines en détresse dans les eaux françaises.",
    "themes": ["Tortues marines", "Protection des tortues", "Conservation marine"],
    "links": {
      "page": "https://csoluble.media/epsode/tortues-marines-menacees-les-soigner-et-les-preserver/",
      "spotify": "https://open.spotify.com/episode/41K2eXoDybZz9ASVyXV06J?si=KSo-sTHNRwGKQdsefs_3pw",
      "apple": "https://podcasts.apple.com/fr/podcast/tortues-marines-menac%C3%A9es-les-soigner-et-les-pr%C3%A9server/id1640003869?i=1000658401013",
      "deezer": "https://link.deezer.com/s/31ARNRNEAwjkFNwYOGBoI",
      "youtube": "https://www.youtube.com/watch?v=gZp72FxxsmM",
      "transcription": "https://csoluble.media/epsode/transcription-tortues-marines-menacees-les-soigner-et-les-preserver/",
      "summary": null
    }
  },
  {
    "id": "ep74",
    "title": "Joyau naturel - Comment les Calanques se protègent",
    "date": "2024-06-03",
    "duration": "28:29",
    "guest": "Didier Réault",
    "category": "Environnement",
    "description": "Didier Réault discute de la protection du massif des Calanques, un parc national visant à préserver la biodiversité et à gérer la surfréquentation touristique.",
    "themes": ["Parc national", "Calanques", "Biodiversité", "Surfréquentation"],
    "links": {
      "page": "https://csoluble.media/epsode/joyau-naturel-comment-les-calanques-se-protegent/",
      "spotify": "https://open.spotify.com/episode/2kDzXpNupDuinqjqcDjgAL?si=vASYVWh2R62ZGhE43CFutQ",
      "apple": "https://podcasts.apple.com/fr/podcast/joyau-naturel-comment-les-calanques-se-prot%C3%A8gent/id1640003869?i=1000657616110",
      "deezer": "https://link.deezer.com/s/31ARObm0Yg1eQLL6eo2Lv",
      "youtube": "https://www.youtube.com/watch?v=kpEDc2Xzssc",
      "transcription": "https://csoluble.media/epsode/transcription-joyau-naturel-comment-les-calanques-se-protegent/",
      "summary": null
    }
  },
  {
    "id": "ep73",
    "title": "E-commerce à impact : anti-crise et contre le gaspillage alimentaire, Willy anti-gaspi à la manœuvre",
    "date": "2024-05-27",
    "duration": "24:10",
    "guest": "Clément Mery",
    "category": "Vie quotidienne",
    "description": "Clément Mery discute de Willy anti-gaspi, un site e-commerce dédié à la lutte contre le gaspillage alimentaire.",
    "themes": ["Gaspillage alimentaire", "E-commerce", "Anti-gaspi"],
    "links": {
      "page": "https://csoluble.media/epsode/e-commerce-a-impact-anti-crise-et-contre-le-gaspillage-alimentaire-willy-anti-gaspi-a-la-manoeuvre/",
      "spotify": "https://open.spotify.com/episode/4Iz3ipxKRUqV5hWOSRDY0r?si=D5ui_nG9T9GzYeKMIJItXA",
      "apple": "https://podcasts.apple.com/fr/podcast/e-commerce-%C3%A0-impact-anti-crise-et-contre-le-gaspillage/id1640003869?i=1000656848870",
      "deezer": "https://link.deezer.com/s/31AROwASa67wsZguIJqiB",
      "youtube": "https://www.youtube.com/watch?v=IFwtj1ps8Sw",
      "transcription": "https://csoluble.media/epsode/transcription-e-commerce-a-impact-anti-crise-et-contre-le-gaspillage-alimentaire-willy-anti-gaspi-a-la-manoeuvre/",
      "summary": null
    }
  },
  {
    "id": "ep72",
    "title": "2050Now, le média qui vise 14 millions de Français, la « classe écologique »",
    "date": "2024-05-20",
    "duration": "19:55",
    "guest": "Aude Baron",
    "category": "Environnement",
    "description": "Aude Baron présente 2050Now, un média numérique dédié aux enjeux écologiques, visant à rendre désirable une vie compatible avec les objectifs climatiques de 2050.",
    "themes": ["Média écologique", "Transition durable", "2050Now"],
    "links": {
      "page": "https://csoluble.media/epsode/2050now-le-media-qui-vise-14-millions-de-francais-la-classe-ecologique/",
      "spotify": "https://open.spotify.com/episode/6AycD9ScbbZfAJUCLSuRoH?si=cgeDe1ryQNqdKsAU-CVpiQ",
      "apple": "https://podcasts.apple.com/fr/podcast/2050now-le-m%C3%A9dia-qui-vise-14-millions-de-fran%C3%A7ais-la/id1640003869?i=1000656095327",
      "deezer": "https://link.deezer.com/s/31AROOcWxS8SYS0Di9mR9",
      "youtube": "https://www.youtube.com/watch?v=Bp0XO2_RVPw",
      "transcription": "https://csoluble.media/epsode/transcription-2050now-le-media-qui-vise-14-millions-de-francais-la-classe-ecologique/",
      "summary": null
    }
  },
  {
    "id": "ep71",
    "title": "Au fait, ça sert à quoi d'élire un Parlement européen ?",
    "date": "2024-05-13",
    "duration": "32:21",
    "guest": "Audrey Vuetaz",
    "category": "Société",
    "description": "Audrey Vuetaz explique le rôle et le fonctionnement du Parlement européen, ainsi que les enjeux des élections européennes de juin 2024.",
    "themes": ["Parlement européen", "Élections européennes", "Union européenne"],
    "links": {
      "page": "https://csoluble.media/epsode/au-fait-ca-sert-a-quoi-delire-un-parlement-europeen/",
      "spotify": "https://open.spotify.com/episode/5QiXhiwZ3Y4kZLsjs8Wbp7?si=jfv1nPadSjCeTrA4zRCwUA",
      "apple": "https://podcasts.apple.com/fr/podcast/au-fait-%C3%A7a-sert-%C3%A0-quoi-d%C3%A9lire-un-parlement-europ%C3%A9en/id1640003869?i=1000655364435",
      "deezer": "https://link.deezer.com/s/31ARPaNfcV6VpBsOM6uTJ",
      "youtube": "https://www.youtube.com/watch?v=V6qNjX8l9Ts",
      "transcription": "https://csoluble.media/epsode/transcription-au-fait-ca-sert-a-quoi-delire-un-parlement-europeen/",
      "summary": null
    }
  },
  {
    "id": "ep70",
    "title": "Des solutions pour avoir de la répartie écologique",
    "date": "2024-05-06",
    "duration": "29:56",
    "guest": "Margot Jacq",
    "category": "Environnement",
    "description": "Margot Jacq discute de son livre \"Petit manuel de répartie écologique\" qui propose des réponses pour déconstruire les discours climatosceptiques.",
    "themes": ["Répartie écologique", "Climat", "Discours climatosceptiques"],
    "links": {
      "page": "https://csoluble.media/epsode/des-solutions-pour-avoir-de-la-repartie-ecologique/",
      "spotify": "https://open.spotify.com/episode/4AFFqU39bQnfiEJxDFxTms?si=IEjU88RYQJugyZ89PB92uA",
      "apple": "https://podcasts.apple.com/fr/podcast/des-solutions-pour-avoir-de-la-r%C3%A9partie-%C3%A9cologique/id1640003869?i=1000654624114",
      "deezer": "https://link.deezer.com/s/31ARPuiMmc8TLWCmEcp8k",
      "youtube": "https://www.youtube.com/watch?v=O9N8FJi-X3o",
      "transcription": "https://csoluble.media/epsode/transcription-des-solutions-pour-avoir-de-la-repartie-ecologique/",
      "summary": null
    }
  },
  {
    "id": "ep69",
    "title": "IA, Big Data, Satellite, LiDAR : Quand les données numériques se mettent au service de la biodiversité",
    "date": "2024-04-29",
    "duration": "19:18",
    "guest": "Olivier Rovellotti",
    "category": "Environnement",
    "description": "Plongez dans l'univers des technologies numériques qui révolutionnent la préservation de la biodiversité. Olivier Rovellotti nous guide à travers les outils innovants qui transforment notre compréhension et notre gestion du patrimoine naturel.",
    "themes": ["Biodiversité", "IA", "Big Data", "LiDAR"],
    "links": {
      "page": "https://csoluble.media/epsode/ia-big-data-satellite-lidar-quand-les-donnees-numeriques-se-mettent-au-service-de-la-biodiversite/",
      "spotify": "https://open.spotify.com/episode/7zep9eaWOPNIeKTcr1ZxpK?si=7k3mMmiPSeGUUC_8XwBmgg",
      "apple": "https://podcasts.apple.com/fr/podcast/ia-big-data-satellite-lidar-quand-les-donn%C3%A9es-num%C3%A9riques/id1640003869?i=1000653863136",
      "deezer": "https://link.deezer.com/s/31ARPOJ8SR0kfqeqlEcw1",
      "youtube": "https://www.youtube.com/watch?v=NJumLwmxP4w",
      "transcription": "https://csoluble.media/epsode/transcription-ia-big-data-satellite-lidar-quand-les-donnees-numeriques-se-mettent-au-service-de-la-biodiversite/",
      "summary": null
    }
  },
  {
    "id": "ep68",
    "title": "La Fresque du Climat, l'atelier viral qui crée un déclic en jouant",
    "date": "2024-04-02",
    "duration": "24:18",
    "guest": "Nicolas Froissard",
    "category": "Environnement",
    "description": "Découvrez comment La Fresque du Climat, un atelier ludique et collaboratif, transforme la compréhension des enjeux climatiques en une expérience engageante et éducative.",
    "themes": ["Fresque du Climat", "Sensibilisation climatique", "Atelier collaboratif"],
    "links": {
      "page": "https://csoluble.media/epsode/la-fresque-du-climat-latelier-viral-qui-cree-un-declic-en-jouant/",
      "spotify": "https://open.spotify.com/episode/6IVYKpYACmESixNca1LeCY?si=9I8Ne1OiSPOQjQS--qOKzA",
      "apple": "https://podcasts.apple.com/fr/podcast/la-fresque-du-climat-latelier-viral-qui-cr%C3%A9e-un/id1640003869?i=1000651137634",
      "deezer": "https://link.deezer.com/s/31ARQio6mfCb9DHqmOW2q",
      "youtube": "https://www.youtube.com/watch?v=5ivRUxrpjIU",
      "transcription": "https://csoluble.media/epsode/transcription-la-fresque-du-climat-latelier-viral-qui-cree-un-declic-en-jouant/",
      "summary": null
    }
  },
  {
    "id": "ep67",
    "title": "[Spécial Podcasthon] Avec Reporters d’Espoirs pour des médias qui donnent envie d’agir",
    "date": "2024-03-25",
    "duration": "27:32",
    "guest": "Gilles Vanderpooten",
    "category": "Société",
    "description": "Gilles Vanderpooten discute du journalisme de solutions et des actions de Reporters d’Espoirs pour promouvoir des histoires positives et inspirantes.",
    "themes": ["Journalisme de solutions", "Reporters d’Espoirs", "Médias positifs"],
    "links": {
      "page": "https://csoluble.media/epsode/special-podcasthon-avec-reporters-despoirs-pour-des-medias-qui-donnent-envie-dagir/",
      "spotify": "https://open.spotify.com/episode/4cwrN9uqZeMPicPMoOW7Lv?si=9r-KgUYwRj-VJsnU7V_FtA",
      "apple": "https://podcasts.apple.com/fr/podcast/sp%C3%A9cial-podcasthon-avec-reporters-despoirs-pour-des/id1640003869?i=1000650316155",
      "deezer": "https://link.deezer.com/s/31ARQAJHayHt5AOMdUK38",
      "youtube": "https://www.youtube.com/watch?v=5ttGMsMEOUY",
      "transcription": "https://csoluble.media/epsode/transcription-special-podcasthon-avec-reporters-despoirs-pour-des-medias-qui-donnent-envie-dagir/",
      "summary": null
    }
  },
  {
    "id": "ep66",
    "title": "Qu’est-ce que le CDD tremplin qui permet aux travailleurs handicapés de rebondir vers un emploi durable ?",
    "date": "2024-03-18",
    "duration": "19:35",
    "guest": "Nathalie Barreault",
    "category": "Société",
    "description": "Découvrez le CDD Tremplin, un dispositif innovant qui combine contrat de travail et accompagnement pour aider les travailleurs handicapés à accéder à un emploi durable.",
    "themes": ["CDD Tremplin", "Inclusion professionnelle", "Handicap"],
    "links": {
      "page": "https://csoluble.media/epsode/quest-ce-que-le-cdd-tremplin-qui-permet-aux-travailleurs-handicapes-de-rebondir-vers-un-emploi-durable/",
      "spotify": "https://open.spotify.com/episode/2Wrm7hTRvNrXrWMEF4RsaX?si=NA5LKOKSR-O37HsuNv2mug",
      "apple": "https://podcasts.apple.com/fr/podcast/quest-ce-que-le-cdd-tremplin-qui-permet-aux-travailleurs/id1640003869?i=1000649526096",
      "deezer": "https://link.deezer.com/s/31ARQU7V1IyjB1fmVIu6W",
      "youtube": "https://www.youtube.com/watch?v=_D6LOERLYE0",
      "transcription": "https://csoluble.media/epsode/transcription-quest-ce-que-le-cdd-tremplin-qui-permet-aux-travailleurs-handicapes-de-rebondir-vers-un-emploi-durable/",
      "summary": null
    }
  },
  {
    "id": "ep65",
    "title": "Enfants et adolescents : les protéger des écrans. Oui, mais comment ?",
    "date": "2024-03-11",
    "duration": "30:45",
    "guest": "Sabine Duflo",
    "category": "Vie quotidienne",
    "description": "Sabine Duflo, psychologue, explore les défis liés à l'exposition des enfants aux écrans et propose des stratégies concrètes pour les protéger des effets néfastes.",
    "themes": ["Protection enfants écrans", "Temps d'écran", "Santé numérique"],
    "links": {
      "page": "https://csoluble.media/epsode/enfants-et-adolescents-les-proteger-des-ecrans-oui-mais-comment/",
      "spotify": "https://open.spotify.com/episode/1F42sEaevfFASL4eCSQqcW?si=D3rWrBKgRWe5yGQMrlCrzQ",
      "apple": "https://podcasts.apple.com/fr/podcast/enfants-et-adolescents-les-prot%C3%A9ger-des-%C3%A9crans-oui/id1640003869?i=1000648709519",
      "deezer": "https://link.deezer.com/s/31ARRef50iVpxpEmNzDJK",
      "youtube": "https://www.youtube.com/watch?v=Bm1a3U1gnDI",
      "transcription": "https://csoluble.media/epsode/transcription-enfants-et-adolescents-les-proteger-des-ecrans-oui-mais-comment/",
      "summary": null
    }
  },
  {
    "id": "ep64",
    "title": "Comment repérer un discours et des contenus complotistes",
    "date": "2024-03-04",
    "duration": "41:08",
    "guest": "Rudy Reichstadt",
    "category": "Société",
    "description": "Avec Rudy Reichstadt (fondateur de Conspiracy Watch), décryptez les mécanismes des théories du complot, apprenez à identifier leurs pièges et renforcez votre esprit critique. Un guide essentiel à l’ère des réseaux sociaux. 🎧",
    "themes": ["Théories du complot", "Conspiracy Watch", "Esprit critique"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-reperer-un-discours-et-des-contenus-complotistes/",
      "spotify": "https://open.spotify.com/episode/64ePr1myZvxsMacn8H0xc4?si=Yye00yuSRbCLZ7L3M13mlA",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-rep%C3%A9rer-un-discours-et-des-contenus-complotistes/id1640003869?i=1000647882047",
      "deezer": "https://link.deezer.com/s/31ARRuUF48XIqZuCfQsQi",
      "youtube": "https://www.youtube.com/watch?v=WuBy7KNYm8o",
      "transcription": "https://csoluble.media/epsode/transcription-comment-reperer-un-discours-et-des-contenus-complotistes/",
      "summary": null
    }
  },
  {
    "id": "ep63",
    "title": "Podcasthon 2024 : la générosité s’exprime en cœur pendant 7 jours dans les podcasts",
    "date": "2024-02-19",
    "duration": "17:17",
    "guest": "Jérémie Mani",
    "category": "Société",
    "description": "Découvrez comment le Podcasthon 2024 rassemble des podcasteurs pour soutenir des causes caritatives à travers des épisodes spéciaux, tout en sensibilisant et levant des fonds.",
    "themes": ["Podcasthon 2024", "Générosité", "Podcasts caritatifs"],
    "links": {
      "page": "https://csoluble.media/epsode/podcasthon-2024-la-generosite-sexprime-en-coeur-pendant-7-jours-dans-les-podcasts/",
      "spotify": "https://open.spotify.com/episode/5ub7N4pKYB8XCd8fNTaSwD?si=Aj7DanatRMyf0wqCucxd6g",
      "apple": "https://podcasts.apple.com/fr/podcast/podcasthon-2024-la-g%C3%A9n%C3%A9rosit%C3%A9-sexprime-en-c%C5%93ur-pendant/id1640003869?i=1000645814546",
      "deezer": "https://link.deezer.com/s/31ARRNclThZDorDaLluEb",
      "youtube": "https://www.youtube.com/watch?v=YojI3XG3Dis",
      "transcription": "https://csoluble.media/epsode/transcription-podcasthon-2024-la-generosite-sexprime-en-coeur-pendant-7-jours-dans-les-podcasts/",
      "summary": null
    }
  },
  {
    "id": "ep62",
    "title": "Endométriose, l’éducation thérapeutique pour mieux soutenir les patientes",
    "date": "2024-02-05",
    "duration": "14:47",
    "guest": "Elodie Torrès",
    "category": "Vie quotidienne",
    "description": "Découvrez comment Elodie Torrès et son association A.I.M.E soutiennent les femmes atteintes d'endométriose grâce à un programme d'éducation thérapeutique innovant.",
    "themes": ["Endométriose", "Éducation thérapeutique", "Soutien patientes"],
    "links": {
      "page": "https://csoluble.media/epsode/endometriose-leducation-therapeutique-pour-mieux-soutenir-les-patientes/",
      "spotify": "https://open.spotify.com/episode/59QECVcPBjr0dhxIgKFBWl?si=eFgYOUcdTaKXrgep0PQJvw",
      "apple": "https://podcasts.apple.com/fr/podcast/endom%C3%A9triose-l%C3%A9ducation-th%C3%A9rapeutique-pour-mieux-soutenir/id1640003869?i=1000644159471",
      "deezer": "https://link.deezer.com/s/31ARSj4zdsTxbkMq73mZs",
      "youtube": "https://www.youtube.com/watch?v=J86imjqHls0",
      "transcription": "https://csoluble.media/epsode/transcription-endometriose-leducation-therapeutique-pour-mieux-soutenir-les-patientes/",
      "summary": null
    }
  },
  {
    "id": "ep61",
    "title": "Précarité : un chèque alimentation durable de 50 euros testé en Seine-Saint-Denis",
    "date": "2024-01-29",
    "duration": "24:53",
    "guest": "Hélène Quéau",
    "category": "Vie quotidienne",
    "description": "Découvrez comment le chèque alimentation durable de 50 euros aide les habitants de Seine-Saint-Denis à accéder à des produits sains et durables, tout en luttant contre la précarité alimentaire.",
    "themes": ["Chèque alimentation", "Précarité alimentaire", "Alimentation durable"],
    "links": {
      "page": "https://csoluble.media/epsode/precarite-un-cheque-alimentation-durable-de-50-euros-teste-en-seine-saint-denis/",
      "spotify": "https://open.spotify.com/episode/1rKJoXFK4mzQq6jvGSZD4u?si=-tI--PV_SfGLzyjZX4Bd-A",
      "apple": "https://podcasts.apple.com/fr/podcast/pr%C3%A9carit%C3%A9-un-ch%C3%A8que-alimentation-durable-de-50/id1640003869?i=1000643319493",
      "deezer": "https://link.deezer.com/s/31ARSzIYUZGZit5X93Zya",
      "youtube": "https://www.youtube.com/watch?v=CoqX9lEIaUw",
      "transcription": "https://csoluble.media/epsode/transcription-precarite-un-cheque-alimentation-durable-de-50-euros-teste-en-seine-saint-denis/",
      "summary": null
    }
  },
  {
    "id": "ep60",
    "title": "De moins en moins blanche, la montagne peut-elle devenir plus verte ?",
    "date": "2024-01-22",
    "duration": "28:46",
    "guest": "Valérie Paumier",
    "category": "Environnement",
    "description": "Découvrez comment les stations de montagne peuvent s'adapter aux défis climatiques et écologiques pour devenir plus durables. Valérie Paumier, fondatrice de Résilience Montagne, partage ses solutions pour transformer les stations de ski en destinations vertes.",
    "themes": ["Montagne durable", "Résilience Montagne", "Stations vertes"],
    "links": {
      "page": "https://csoluble.media/epsode/de-moins-en-moins-blanche-la-montagne-peut-elle-devenir-plus-verte/",
      "spotify": "https://open.spotify.com/episode/6h9XdEmJI4gox66vV9RbpC?si=NBflrv82Qu-4oXIqhHvzBw",
      "apple": "https://podcasts.apple.com/fr/podcast/de-moins-en-moins-blanche-la-montagne-peut-elle/id1640003869?i=1000642437471",
      "deezer": "https://link.deezer.com/s/31ARTaDCyILQQ4u0hPCD9",
      "youtube": "https://www.youtube.com/watch?v=JZ_pGWDU7No",
      "transcription": "https://csoluble.media/epsode/transcription-de-moins-en-moins-blanche-la-montagne-peut-elle-devenir-plus-verte/",
      "summary": null
    }
  },
  {
    "id": "ep59",
    "title": "AMEP, c’est quoi le don d’électricité renouvelable entre voisins ?",
    "date": "2024-01-15",
    "duration": "16:34",
    "guest": "Christophe Brun",
    "category": "Environnement",
    "description": "Découvrez comment les AMEP permettent de partager l'électricité renouvelable entre voisins, favorisant ainsi les économies d'énergie et renforçant les liens sociaux.",
    "themes": ["AMEP", "Électricité renouvelable", "Partage d'énergie"],
    "links": {
      "page": "https://csoluble.media/epsode/amep-cest-quoi-le-don-delectricite-renouvelable-entre-voisins/",
      "spotify": "https://open.spotify.com/episode/6MxuA7fqomh5XOLOUY7UDC?si=d6u3FbCHRD6uC0pvGDQ-bw",
      "apple": "https://podcasts.apple.com/fr/podcast/amep-cest-quoi-le-don-d%C3%A9lectricit%C3%A9-renouvelable-entre/id1640003869?i=1000641657539",
      "deezer": "https://link.deezer.com/s/31ARTsMxjEM0pb3BXt1bb",
      "youtube": "https://www.youtube.com/watch?v=z7jTM75vybE",
      "transcription": "https://csoluble.media/epsode/transcription-amep-cest-quoi-le-don-delectricite-renouvelable-entre-voisins/",
      "summary": null
    }
  },
  {
    "id": "ep58",
    "title": "Des solutions pour régénérer le cycle de l’eau avec Charlène Descollonges",
    "date": "2024-01-08",
    "duration": "26:04",
    "guest": "Charlène Descollonges",
    "category": "Environnement",
    "description": "Découvrez comment Charlène Descollonges propose des solutions pour régénérer le cycle de l'eau, essentiel à notre survie, en agissant localement sur les paysages et en ralentissant le ruissellement de l'eau.",
    "themes": ["Cycle de l'eau", "Régénération", "Hydrologie"],
    "links": {
      "page": "https://csoluble.media/epsode/des-solutions-pour-regenerer-le-cycle-de-leau-avec-charlene-descollonges/",
      "spotify": "https://open.spotify.com/episode/4f8vxDBjc2Nk91mDBSiuUE?si=Xq38yskKQ0a3h5RU6L5-fg",
      "apple": "https://podcasts.apple.com/fr/podcast/des-solutions-pour-r%C3%A9g%C3%A9n%C3%A9rer-le-cycle-de-leau-avec/id1640003869?i=1000640854468",
      "deezer": "https://link.deezer.com/s/31ARU9I2tykSh1UM2G2Ty",
      "youtube": "https://www.youtube.com/watch?v=OarVXTYMY9Y",
      "transcription": "https://csoluble.media/epsode/transcription-des-solutions-pour-regenerer-le-cycle-de-leau-avec-charlene-descollonges/",
      "summary": null
    }
  },
  {
    "id": "ep57",
    "title": "Les podcasts à suivre sur la nouvelle “carte (très) subjective du paysage médiatique français”",
    "date": "2024-01-03",
    "duration": "03:14",
    "guest": "Anne-Sophie Novel, Natacha Bigan",
    "category": "Société",
    "description": "Découvrez une sélection de 17 podcasts incontournables qui figurent sur la carte (très) subjective du paysage médiatique français, réalisée par Anne-Sophie Novel et illustrée par Natacha Bigan.",
    "themes": ["Carte médiatique", "Podcasts français", "Paysage médiatique"],
    "links": {
      "page": "https://csoluble.media/epsode/les-podcasts-a-suivre-sur-la-nouvelle-carte-tres-subjective-du-paysage-mediatique-francais/",
      "spotify": "https://open.spotify.com/episode/5HpyM2w0XA1ysZ0rCvdmV1?si=nQXEm2-1TL2Q6uPBGYbclQ",
      "apple": "https://podcasts.apple.com/fr/podcast/les-podcasts-%C3%A0-suivre-sur-la-nouvelle-carte-tr%C3%A8s-subjective/id1640003869?i=1000640390155",
      "deezer": "https://link.deezer.com/s/31ARUs8pdmD3QEujXMv3D",
      "youtube": "https://www.youtube.com/watch?v=80DowLpEArs",
      "transcription": "https://csoluble.media/epsode/transcription-les-podcasts-a-suivre-sur-la-nouvelle-carte-tres-subjective-du-paysage-mediatique-francais/",
      "summary": null
    }
  },
  {
    "id": "ep56",
    "title": "Comment Soluble(s) m’a rendu riche (Episode solo)",
    "date": "2023-12-27",
    "duration": "11:08",
    "guest": "Simon Icard en solo",
    "category": "Vie quotidienne",
    "description": "Découvrez comment le podcast Soluble(s) a enrichi son créateur à travers des expériences personnelles et professionnelles.",
    "themes": ["Podcast personnel", "Enrichissement", "Expériences"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-solubles-ma-rendu-riche-episode-solo/",
      "spotify": "https://open.spotify.com/episode/7nZUG2kerJB3LG9grCkdYC",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s-m-a-rendu-riche-episode-solo/id1640003869?i=1000639739284",
      "deezer": "https://link.deezer.com/s/31ARUJlws9D4qY2jR8a4M",
      "youtube": "https://www.youtube.com/watch?v=pqz5RDb1gS0",
      "transcription": "https://csoluble.media/epsode/transcription-comment-solubles-ma-rendu-riche-episode-solo/",
      "summary": null
    }
  },
  {
    "id": "ep55",
    "title": "Des réponses et des solutions pour les abonnés des médias du groupe Nice-Matin",
    "date": "2023-12-20",
    "duration": "20:31",
    "guest": "Sophie Casals",
    "category": "Vie quotidienne",
    "description": "Découvrez comment les médias du groupe Nice-Matin adoptent le journalisme de solutions pour proposer des contenus exclusifs et constructifs à leurs abonnés numériques.",
    "themes": ["Journalisme de solutions", "Nice-Matin", "Abonnés numériques"],
    "links": {
      "page": "https://csoluble.media/epsode/des-reponses-et-des-solutions-pour-les-abonnes-des-medias-du-groupe-nice-matin/",
      "spotify": "https://open.spotify.com/episode/5Vm3yWLaZF7M6RxhyhUmTl?si=4Z7VkYXTSSWAR9oyKTc2Gw",
      "apple": "https://podcasts.apple.com/fr/podcast/des-r%C3%A9ponses-et-des-solutions-pour-les-abonn%C3%A9s-des/id1640003869?i=1000639164505",
      "deezer": "https://link.deezer.com/s/31ARV4LoBl31LQmYcSstc",
      "youtube": "https://www.youtube.com/watch?v=_bhPsGv9PRI",
      "transcription": "https://csoluble.media/epsode/transcription-des-reponses-et-des-solutions-pour-les-abonnes-des-medias-du-groupe-nice-matin/",
      "summary": null
    }
  },
  {
    "id": "ep54",
    "title": "Ouest-France, sa boussole pour informer sur l’écologie",
    "date": "2023-12-18",
    "duration": "37:12",
    "guest": "Édouard Reis Carona",
    "category": "Environnement",
    "description": "Découvrez comment Ouest-France utilise sa charte éditoriale pour informer sur les enjeux écologiques et climatiques, en alignant ses journalistes sur le consensus scientifique.",
    "themes": ["Charte éditoriale", "Écologie", "Journalisme"],
    "links": {
      "page": "https://csoluble.media/epsode/ouest-france-sa-boussole-pour-informer-sur-lecologie/",
      "spotify": "https://open.spotify.com/episode/55eUD1PLrC53oG5InzNymb?si=SdhYaeucTfmWO6W_nE9pKA",
      "apple": "https://podcasts.apple.com/fr/podcast/ouest-france-sa-boussole-pour-informer-sur-l%C3%A9cologie/id1640003869?i=1000638892073",
      "deezer": "https://link.deezer.com/s/31ARViipmEwnrhwbmxnOD",
      "youtube": "https://www.youtube.com/watch?v=Bl2eYPUBVUE",
      "transcription": "https://csoluble.media/epsode/transcription-ouest-france-sa-boussole-pour-informer-sur-lecologie/",
      "summary": null
    }
  },
  {
    "id": "ep53",
    "title": "Comment TF1 et LCI luttent contre les fake news",
    "date": "2023-12-11",
    "duration": "29:17",
    "guest": "Samira El Gadir",
    "category": "Société",
    "description": "Découvrez comment TF1 et LCI combattent la désinformation avec une équipe dédiée à la vérification des faits, face à la prolifération de contenus trompeurs sur les réseaux sociaux.",
    "themes": ["Fake news", "Vérification des faits", "Désinformation"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-tf1-et-lci-luttent-contre-les-fake-news/",
      "spotify": "https://open.spotify.com/episode/5sJVHK51108qdjrUjmmCAg?si=cbs-apukTR6V-0gs9nCGaw",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-tf1-et-lci-luttent-contre-les-fake-news/id1640003869?i=1000638134124",
      "deezer": "https://link.deezer.com/s/31ARVAd085m6r8hX7JH7L",
      "youtube": "https://www.youtube.com/watch?v=DZRvF_dfhH8",
      "transcription": "https://csoluble.media/epsode/transcription-comment-tf1-et-lci-luttent-contre-les-fake-news/",
      "summary": null
    }
  },
  {
    "id": "ep52",
    "title": "Devenir famille d’accueil pour futur chien guide",
    "date": "2023-12-03",
    "duration": "28:47",
    "guest": "Estelle Boullu",
    "category": "Société",
    "description": "Découvrez comment les chiens guides sont formés et comment devenir famille d'accueil pour ces futurs compagnons indispensables aux personnes aveugles ou malvoyantes.",
    "themes": ["Chien guide", "Famille d'accueil", "Solidarité"],
    "links": {
      "page": "https://csoluble.media/epsode/devenir-famille-daccueil-pour-futur-chien-guide/",
      "spotify": "https://open.spotify.com/episode/6nMnULYcL0OoPW3MPt0Kqj?si=ZwMbMg_XT6KzYMcrYphN_g",
      "apple": "https://podcasts.apple.com/fr/podcast/devenir-famille-daccueil-pour-futur-chien-guide/id1640003869?i=1000637379757",
      "deezer": "https://link.deezer.com/s/31ARVPcFswzAkczN6bg8p",
      "youtube": "https://www.youtube.com/watch?v=ApJk8rLs_mg",
      "transcription": "https://csoluble.media/epsode/transcription-devenir-famille-daccueil-pour-futur-chien-guide/",
      "summary": null
    }
  },
  {
    "id": "ep51",
    "title": "La Maison des femmes Marseille Provence - Un cocon pour se réparer et rebondir après les violences",
    "date": "2023-11-27",
    "duration": "28:47",
    "guest": "Dr Sophie Tardieu",
    "category": "Société",
    "description": "Découvrez comment la Maison des femmes Marseille Provence offre un soutien pluridisciplinaire aux femmes victimes de violences, en leur fournissant un lieu d’accueil sécurisé et bienveillant.",
    "themes": ["Maison des femmes", "Violences conjugales", "Soutien pluridisciplinaire", "Sophie Tardieu"],
    "links": {
      "page": "https://csoluble.media/epsode/la-maison-des-femmes-marseille-provence-un-cocon-pour-se-reparer-et-rebondir-apres-les-violences/",
      "spotify": "https://open.spotify.com/episode/6li145dQP1kT6xaBSiGfKQ?si=cY6rPBR8QhKxfU2tzUCXKA",
      "apple": "https://podcasts.apple.com/fr/podcast/maison-des-femmes-marseille-provence-un-cocon-pour/id1640003869?i=1000632227372",
      "deezer": "https://link.deezer.com/s/31ARXghH9Dv7KcgKwrieM",
      "youtube": "https://www.youtube.com/watch?v=N_0Rdt9Hp9Q",
      "transcription": "https://csoluble.media/epsode/transcription-la-maison-des-femmes-marseille-provence-un-cocon-pour-se-reparer-et-rebondir-apres-les-violences/",
      "summary": null
    }
  },
  {
    "id": "ep50",
    "title": "La PrEP, c’est quoi ce traitement gratuit qui protège du sida ?",
    "date": "2023-11-27",
    "duration": "26:41",
    "guest": "Dr Radia Djebbar",
    "category": "Société",
    "description": "Découvrez comment la PrEP, un traitement préventif gratuit, aide à protéger contre le VIH et réduit les risques de contamination, avec le Dr Radia Djebbar.",
    "themes": ["PrEP", "VIH", "Traitement préventif"],
    "links": {
      "page": "https://csoluble.media/epsode/la-prep-cest-quoi-ce-traitement-gratuit-qui-protege-du-sida/",
      "spotify": "https://open.spotify.com/episode/1Y1VkwYhEljrSoEfsy0dCU?si=T9TEN-efTd6vhFC7lZw9Hw",
      "apple": "https://podcasts.apple.com/fr/podcast/la-prep-cest-quoi-ce-traitement-gratuit-qui-prot%C3%A8ge-du-sida/id1640003869?i=1000636599014",
      "deezer": "https://link.deezer.com/s/31ARW5ymuyH3fcVEs8xTt",
      "youtube": "https://www.youtube.com/watch?v=yVdJmV_Fjhg",
      "transcription": "https://csoluble.media/epsode/transcription-la-prep-cest-quoi-ce-traitement-gratuit-qui-protege-du-sida/",
      "summary": null
    }
  },
  {
    "id": "ep49",
    "title": "Comment aider les “gilets orange” des Banques Alimentaires",
    "date": "2023-11-18",
    "duration": "23:23",
    "guest": "Laurence Champier",
    "category": "Société",
    "description": "Découvrez comment les Banques Alimentaires luttent contre la précarité alimentaire avec leur grande collecte annuelle, un événement crucial pour aider les personnes en difficulté.",
    "themes": ["Banques Alimentaires", "Précarité alimentaire", "Grande collecte"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-aider-les-gilets-orange-des-banques-alimentaires/",
      "spotify": "https://open.spotify.com/episode/3VXjZxZSUPWC2A9oBRgq65?si=o5SAflwFSvKjqHaS-xTtLg",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-aider-les-gilets-orange-des-banques-alimentaires/id1640003869?i=1000635377525",
      "deezer": "https://link.deezer.com/s/31ARWmgLYy1HcptG3qO1f",
      "youtube": "https://www.youtube.com/watch?v=GHek6ynjHxQ",
      "transcription": "https://csoluble.media/epsode/transcription-comment-aider-les-gilets-orange-des-banques-alimentaires/",
      "summary": null
    }
  },
  {
    "id": "ep48",
    "title": "Born in PPM - Qu'est-ce que ce projet photo qui sensibilise sur la hausse du CO2 dans l'atmosphère ?",
    "date": "2023-11-13",
    "duration": "16:23",
    "guest": "Mary-Lou Mauricio",
    "category": "Environnement",
    "description": "Découvrez comment le projet \"Born in PPM\" sensibilise sur la hausse du CO2 dans l'atmosphère en utilisant des portraits photo.",
    "themes": ["Born in PPM", "CO2", "Sensibilisation"],
    "links": {
      "page": "https://csoluble.media/epsode/born-in-ppm-quest-ce-que-ce-projet-photo-qui-sensibilise-sur-la-hausse-du-co2-dans-latmosphere/",
      "spotify": "https://open.spotify.com/episode/4qJmEJ3JOD6fl8B3x0shjB?si=U7SgH6itR5-B0B87awimaA",
      "apple": "https://podcasts.apple.com/fr/podcast/born-in-ppm-quest-ce-que-ce-projet-photo-qui-sensibilise/id1640003869?i=1000634578986",
      "deezer": "https://link.deezer.com/s/31ARWBW3QNrQLq4X8VNt2",
      "youtube": "https://www.youtube.com/watch?v=LGdqxdD6dng",
      "transcription": "https://csoluble.media/epsode/transcription-born-in-ppm-quest-ce-que-ce-projet-photo-qui-sensibilise-sur-la-hausse-du-co2-dans-latmosphere/",
      "summary": null
    }
  },
  {
    "id": "ep47",
    "title": "GLACIERS : Les protéger et conserver la vie qui arrive déjà (avec la fonte…)",
    "date": "2023-11-06",
    "duration": "34:21",
    "guest": "Jean-Baptiste Bosson",
    "category": "Environnement",
    "description": "Découvrez comment les glaciers jouent un rôle crucial dans l'équilibre de la planète et comment les protéger face à la fonte accélérée par le réchauffement climatique.",
    "themes": ["Glaciers", "Réchauffement climatique", "Protection"],
    "links": {
      "page": "https://csoluble.media/epsode/glaciers-les-proteger-et-conserver-la-vie-qui-arrive-deja-avec-la-fonte/",
      "spotify": "https://open.spotify.com/episode/4zQaFVqqlr2zH7OClkSWhd?si=gAIP8vWkTIOS2G1yBTEDOQ",
      "apple": "https://podcasts.apple.com/fr/podcast/glaciers-les-prot%C3%A9ger-et-conserver-la-vie-qui-arrive/id1640003869?i=1000633797213",
      "deezer": "https://link.deezer.com/s/31ARWUl48D76c347u296v",
      "youtube": "https://www.youtube.com/watch?v=_i1a-0mP96c",
      "transcription": "https://csoluble.media/epsode/transcription-glaciers-les-proteger-et-conserver-la-vie-qui-arrive-deja-avec-la-fonte/",
      "summary": null
    }
  },
  {
    "id": "ep46",
    "title": "Un abri qui sauve des vies face aux violences conjugales et intrafamiliales",
    "date": "2023-10-16",
    "duration": "26:44",
    "guest": "Charlyne Péculier",
    "category": "Société",
    "description": "Découvrez comment les abris citoyens peuvent jouer un rôle crucial dans la protection des victimes de violences conjugales et intrafamiliales, en offrant un soutien sécurisé et confidentiel.",
    "themes": ["Abri", "Violences conjugales", "Soutien victimes"],
    "links": {
      "page": "https://csoluble.media/epsode/un-abri-qui-sauve-des-vies-face-aux-violences-conjugales-et-intrafamiliales/",
      "spotify": "https://open.spotify.com/episode/3JJhcBiCZ3HNWhrCGdFD8F?si=OC4476WrSn-TMSvwHvXUKQ",
      "apple": "https://podcasts.apple.com/fr/podcast/un-abri-qui-sauve-des-vies-face-aux-violences/id1640003869?i=1000631418614",
      "deezer": "https://link.deezer.com/s/31ARXCL4xXZfsMU0U1CLP",
      "youtube": "https://www.youtube.com/watch?v=oBTTLVUCBBU",
      "transcription": "https://csoluble.media/epsode/transcription-un-abri-qui-sauve-des-vies-face-aux-violences-conjugales-et-intrafamiliales/",
      "summary": "https://csoluble.media/epsode/comment-lassociation-un-abri-qui-sauve-des-vies-aide-t-elle-les-personnes-victimes-de-violences-conjugales-et-intrafamiliales/"
    }
  },
  {
    "id": "ep45",
    "title": "La première appli pour arrêter de fumer validée par l’OMS est française",
    "date": "2023-10-09",
    "duration": "12:06",
    "guest": "Geoffrey Kretz",
    "category": "Santé",
    "description": "Découvrez comment l'application Kwit, validée par l'OMS, aide les fumeurs à arrêter le tabac grâce à la ludification.",
    "themes": ["Application anti-tabac", "OMS", "ludification", "addiction"],
    "links": {
      "page": "https://csoluble.media/epsode/la-premiere-appli-pour-arreter-de-fumer-validee-par-loms-est-francaise/",
      "spotify": "https://open.spotify.com/episode/5tpEUK4NULfTxYfRRsCW8V?si=fo2df9HXTRKXgSBeJM87Mw",
      "apple": "https://podcasts.apple.com/fr/podcast/la-premi%C3%A8re-appli-pour-arr%C3%AAter-de-fumer-valid%C3%A9e-par/id1640003869?i=1000630640542",
      "deezer": "https://link.deezer.com/s/31ARXVkTRlaqDzkwuFTq4",
      "youtube": "https://www.youtube.com/watch?v=Vs2H4ORf2tE",
      "transcription": "https://csoluble.media/epsode/transcription-la-premiere-appli-pour-arreter-de-fumer-validee-par-loms-est-francaise/",
      "summary": null
    }
  },
  {
    "id": "ep44",
    "title": "Comment soutenir les aidants qui travaillent ?",
    "date": "2023-10-02",
    "duration": "24:30",
    "guest": "Dr Hélène Rossinot",
    "category": "Société",
    "description": "Découvrez comment les aidants, qui soutiennent un proche malade ou en situation de handicap, peuvent (et doivent) être soutenus dans leur vie professionnelle et personnelle.",
    "themes": ["Aidants", "Soutien", "Vie professionnelle"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-soutenir-les-aidants-qui-travaillent/",
      "spotify": "https://open.spotify.com/episode/7IuB0OFC5GmDWkgV6F2gjT?si=VD0nuwgDSZqF0CjmXjHYIw",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-soutenir-les-aidants-qui-travaillent/id1640003869?i=1000629848699",
      "deezer": "https://link.deezer.com/s/31ARYb1KIdOLrwU3DPnC9",
      "youtube": "https://www.youtube.com/watch?v=oL2lF-T-odE",
      "transcription": "https://csoluble.media/epsode/transcription-comment-soutenir-les-aidants-qui-travaillent/",
      "summary": null
    }
  },
  {
    "id": "ep43",
    "title": "Ces distributeurs s’attaquent à la précarité menstruelle",
    "date": "2023-09-18",
    "duration": "12:28",
    "guest": "Gaële Le Noane",
    "category": "Société",
    "description": "Découvrez comment l'entreprise Marguerite & Cie lutte contre la précarité menstruelle en installant des distributeurs gratuits de protections hygiéniques dans les lieux publics.",
    "themes": ["Précarité menstruelle", "distributeurs gratuits", "protections hygiéniques", "inégalité économique"],
    "links": {
      "page": "https://csoluble.media/epsode/ces-distributeurs-sattaquent-a-la-precarite-menstruelle/",
      "spotify": "https://open.spotify.com/episode/06fWND6Sii55pxlvLXd7sj?si=QdyP8oD0TVukYBFWZWv8pA",
      "apple": "https://podcasts.apple.com/fr/podcast/ces-distributeurs-sattaquent-%C3%A0-la-pr%C3%A9carit%C3%A9-menstruelle/id1640003869?i=1000628202150",
      "deezer": "https://link.deezer.com/s/31ARYXPlapxpg4nlX80qd",
      "youtube": "https://www.youtube.com/watch?v=T1DBm5dbvCY",
      "transcription": "https://csoluble.media/epsode/transcription-ces-distributeurs-sattaquent-a-la-precarite-menstruelle/",
      "summary": null
    }
  },
  {
    "id": "ep42",
    "title": "Une “Sécu” de l’alimentation, ça ressemblerait à quoi au juste ?",
    "date": "2023-09-11",
    "duration": "15:47",
    "guest": "Boris Tavernier",
    "category": "Vie quotidienne",
    "description": "Explorez l'idée d'une \"Sécu de l'alimentation\" qui garantirait 150 euros par mois pour une alimentation saine, avec des cotisations basées sur les revenus.",
    "themes": ["Sécurité sociale alimentation", "justice alimentaire", "alimentation saine"],
    "links": {
      "page": "https://csoluble.media/epsode/une-secu-de-lalimentation-ca-ressemblerait-a-quoi-au-juste/",
      "spotify": "https://open.spotify.com/episode/5KQhlir0lJEQfYXYCOC6tX?si=-Am-0xPCQzW43Fi-b9GdKw",
      "apple": "https://podcasts.apple.com/fr/podcast/une-s%C3%A9cu-de-lalimentation-%C3%A7a-ressemblerait-%C3%A0-quoi-au-juste/id1640003869?i=1000627412525",
      "deezer": "https://link.deezer.com/s/31ARZdWjpvvkC4hWUakNa",
      "youtube": "https://www.youtube.com/watch?v=bHDe29xKrnk",
      "transcription": "https://csoluble.media/epsode/transcription-une-secu-de-lalimentation-ca-ressemblerait-a-quoi-au-juste/",
      "summary": null
    }
  },
  {
    "id": "ep41",
    "title": "Qu’est-ce que le ruissellement, la newsletter du podcast Soluble(s) ?",
    "date": "2023-09-06",
    "duration": "01:00",
    "guest": "Simon Icard en solo",
    "category": "Environnement, Société",
    "description": "Découvrez \"Le ruissellement\", la newsletter mensuelle du podcast Soluble(s), qui prolonge les discussions autour des solutions pour le climat, la société et la vie quotidienne.",
    "themes": ["Newsletter", "podcast", "solutions climatiques", "engagement"],
    "links": {
      "page": "https://csoluble.media/epsode/quest-ce-que-le-ruissellement-la-newsletter-du-podcast-solubles/",
      "spotify": "https://open.spotify.com/episode/5KQhlir0lJEQfYXYCOC6tX?si=-Am-0xPCQzW43Fi-b9GdKw",
      "apple": "https://podcasts.apple.com/fr/podcast/qu-est-ce-que-le-ruissellement-la-newsletter-du-podcast/id1640003869?i=1000627116665",
      "deezer": "https://link.deezer.com/s/31ARZw04exCDEuT8ahxf0",
      "youtube": "https://www.youtube.com/watch?v=oPvvLuXeLpQ",
      "transcription": "https://csoluble.media/epsode/transcription-quest-ce-que-le-ruissellement-la-newsletter-du-podcast-solubles/",
      "summary": null
    }
  },
  {
    "id": "ep40",
    "title": "AirZen, la radio nationale qui diffuse 100 % de bonnes ondes",
    "date": "2023-08-28",
    "duration": "21:40",
    "guest": "Anne-Marie de Couvreur",
    "category": "Vie quotidienne",
    "description": "Découvrez AirZen Radio, une station qui diffuse des contenus positifs et pratique le journalisme de solutions, avec plus de 300 podcasts hebdomadaires.",
    "themes": ["Radio positive", "journalisme de solutions", "bien-être", "air zen"],
    "links": {
      "page": "https://csoluble.media/epsode/airzen-la-radio-nationale-qui-diffuse-100-de-bonnes-ondes/",
      "spotify": "https://open.spotify.com/episode/4cYlagl3FF5ucd4Ab2dsi9?si=17VjdBY-SJ-YXURRBHlWzg",
      "apple": "https://podcasts.apple.com/fr/podcast/airzen-la-radio-nationale-qui-diffuse-100-de-bonnes-ondes/id1640003869?i=1000625882719",
      "deezer": "https://link.deezer.com/s/31ARZMUsXwztwfVJGdrfg",
      "youtube": "https://www.youtube.com/watch?v=DOaYKct4EHE",
      "transcription": "https://csoluble.media/epsode/transcription-airzen-la-radio-nationale-qui-diffuse-100-de-bonnes-ondes/",
      "summary": null
    }
  },
  {
    "id": "ep39",
    "title": "Vert, un média \"cool\" pour prendre au sérieux le réchauffement climatique",
    "date": "2023-08-21",
    "duration": "13:45",
    "guest": "Juliette Quef",
    "category": "Environnement",
    "description": "Découvrez \"Vert\", un média d'information qui traite l'actualité à travers le prisme de l'écologie, avec une newsletter quotidienne gratuite.",
    "themes": ["Média écologie", "réchauffement climatique", "newsletter écologique", "Vert"],
    "links": {
      "page": "https://csoluble.media/epsode/vert-un-media-cool-pour-prendre-au-serieux-le-rechauffement-climatique/",
      "spotify": "https://open.spotify.com/episode/0WxdrgZc5hMAoSngRG1Abp?si=efqNiCOtRf-TcR5k3okpjg",
      "apple": "https://podcasts.apple.com/fr/podcast/vert-un-m%C3%A9dia-cool-pour-prendre-au-s%C3%A9rieux-le/id1640003869?i=1000625079771",
      "deezer": "https://link.deezer.com/s/31AS00hJk38Ad1lSxbsz1",
      "youtube": "https://www.youtube.com/watch?v=LN0yJZpc0Gk",
      "transcription": "https://csoluble.media/epsode/transcription-vert-un-media-cool-pour-prendre-au-serieux-le-rechauffement-climatique/",
      "summary": null
    }
  },
  {
    "id": "ep38",
    "title": "Wild, le podcast de reportage animalier pour les petites oreilles",
    "date": "2023-08-10",
    "duration": "11:59",
    "guest": "Ambre Gaudet",
    "category": "Environnement",
    "description": "Découvrez \"Wild\", un podcast de reportage animalier destiné aux enfants, qui explore la biodiversité avec un ton drôle et ludique.",
    "themes": ["Podcast enfants", "biodiversité", "reportage animalier", "wild"],
    "links": {
      "page": "https://csoluble.media/epsode/wild-le-podcast-de-reportage-animalier-pour-les-petites-oreilles/",
      "spotify": "https://open.spotify.com/episode/3TtUSQMDcUAaNGdDmKPcFs?si=TlByf5wmSFq4rxiu03ksAw",
      "apple": "https://podcasts.apple.com/fr/podcast/wild-le-podcast-de-reportage-animalier-pour-les/id1640003869?i=1000623992280",
      "deezer": "https://link.deezer.com/s/31AS0hJmSqZpsIImq0C8M",
      "youtube": "https://www.youtube.com/watch?v=bmr6cw1UUHE",
      "transcription": "https://csoluble.media/epsode/transcription-wild-le-podcast-de-reportage-animalier-pour-les-petites-oreilles/",
      "summary": null
    }
  },
  {
    "id": "ep37",
    "title": "Impact Positif - LCI donne de la voix aux solutions - Avec Sylvia Amicone",
    "date": "2023-08-07",
    "duration": "17:09",
    "guest": "Sylvia Amicone",
    "category": "Société",
    "description": "Découvrez \"Impact Positif\", un podcast et une émission TV de LCI qui mettent en lumière les acteurs du changement écologique et social, avec des invités inspirants.",
    "themes": ["Journalisme de solutions", "changement écologique", "entrepreneuriat social"],
    "links": {
      "page": "https://csoluble.media/epsode/impact-positif-lci-donne-de-la-voix-aux-solutions-avec-sylvia-amicone/",
      "spotify": "https://open.spotify.com/episode/5grcgWjvDqzqosI83Y9MSB?si=SH4ELOuxRLSU0bkAJNkndQ",
      "apple": "https://podcasts.apple.com/fr/podcast/impact-positif-lci-donne-de-la-voix-aux-solutions-avec/id1640003869?i=1000623629388",
      "deezer": "https://link.deezer.com/s/31AS0wYrov8WpFachqfDu",
      "youtube": null,
      "transcription": "https://csoluble.media/epsode/transcription-impact-positif-lci-donne-de-la-voix-aux-solutions-avec-sylvia-amicone/",
      "summary": null
    }
  },
  {
    "id": "ep36",
    "title": "Chaleur humaine, le podcast du Monde qui nous rafraîchit les idées - Avec Nabil Wakim",
    "date": "2023-07-31",
    "duration": "19:06",
    "guest": "Nabil Wakim",
    "category": "Environnement",
    "description": "Découvrez \"Chaleur humaine\", un podcast du journal Le Monde qui explore les solutions face au défi climatique, avec des entretiens hebdomadaires avec des spécialistes.",
    "themes": ["Podcast climat", "solutions écologiques", "journalisme constructif"],
    "links": {
      "page": "https://csoluble.media/epsode/chaleur-humaine-le-podcast-du-monde-qui-nous-rafraichit-les-idees-avec-nabil-wakim/",
      "spotify": "https://open.spotify.com/episode/21ceYnWq3xxu9WYO5VPhsr?si=sh_kTCwqQBq5BK3kIDIULA",
      "apple": "https://podcasts.apple.com/fr/podcast/chaleur-humaine-le-podcast-du-monde-qui-nous-rafra%C3%AEchit/id1640003869?i=1000622874985",
      "deezer": "https://link.deezer.com/s/31AS0TU5JQcHFTTJKyWi8",
      "youtube": "https://www.youtube.com/watch?v=Q2y916SgqIU",
      "transcription": "https://csoluble.media/epsode/transcription-chaleur-humaine-le-podcast-du-monde-qui-nous-rafraichit-les-idees-avec-nabil-wakim/",
      "summary": null
    }
  },
  {
    "id": "ep35",
    "title": "Sur la terre, le podcast qui explore les solutions aux quatre coins du monde (par l’AFP)",
    "date": "2023-07-26",
    "duration": "16:41",
    "guest": "Michaëla Cancela-Kieffer",
    "category": "Environnement",
    "description": "Découvrez \"Sur la terre\", un podcast de l'AFP qui explore les solutions pour la transition écologique à travers le monde, avec des immersions sonores et des décryptages d'experts.",
    "themes": ["Podcast transition écologique", "solutions climatiques", "AFP"],
    "links": {
      "page": "https://csoluble.media/epsode/sur-la-terre-le-podcast-qui-explore-les-solutions-aux-quatre-coins-du-monde-par-lafp/",
      "spotify": "https://open.spotify.com/episode/3mxNidFMS3SSr4vhuuNE41?si=sXxn3LmxS0KeMOqlX2k10A",
      "apple": "https://podcasts.apple.com/fr/podcast/sur-la-terre-le-podcast-qui-explore-les-solutions-aux/id1640003869?i=1000622348927",
      "deezer": null,
      "youtube": "https://www.youtube.com/watch?v=Ps2llymM5Bo",
      "transcription": "https://csoluble.media/epsode/transcription-sur-la-terre-le-podcast-qui-explore-les-solutions-aux-quatre-coins-du-monde-par-lafp/",
      "summary": null
    }
  },
  {
    "id": "ep34",
    "title": "Surinformé.e ? Ce kit de survie pourrait vous intéresser ! Avec Anne-Sophie Novel",
    "date": "2023-07-24",
    "duration": "21:48",
    "guest": "Anne-Sophie Novel",
    "category": "Vie quotidienne",
    "description": "Découvrez comment mieux s'informer avec le \"kit de survie\" d'Anne-Sophie Novel, qui aide à naviguer dans le flux d'informations et à éviter la fatigue informationnelle.",
    "themes": ["Fatigue informationnelle", "kit de survie", "médias", "démocratie"],
    "links": {
      "page": "https://csoluble.media/epsode/surinformee-ce-kit-de-survie-pourrait-vous-interesser-avec-anne-sophie-novel/",
      "spotify": "https://open.spotify.com/episode/30nstHFqlHIHGowdt7i9dA?si=jUewHXKjQcO_9xV5-rw3wQ",
      "apple": "https://podcasts.apple.com/fr/podcast/surinform%C3%A9-e-ce-kit-de-survie-pourrait-vous/id1640003869?i=1000622091577",
      "deezer": "https://link.deezer.com/s/31AS1cmTGbWWOGUcBUO4o",
      "youtube": "https://www.youtube.com/watch?v=J8DSi-AvFCE",
      "transcription": "https://csoluble.media/epsode/transcription-surinformee-ce-kit-de-survie-pourrait-vous-interesser-avec-anne-sophie-novel/",
      "summary": null
    }
  },
  {
    "id": "ep33",
    "title": "Comment (bien) regarder les étoiles ? Avec Eric Lagadec",
    "date": "2023-07-20",
    "duration": "25:10",
    "guest": "Eric Lagadec",
    "category": "Vie quotidienne",
    "description": "Découvrez comment observer les étoiles à l'œil nu avec l'astrophysicien Eric Lagadec, qui partage ses conseils et son expertise pour profiter du ciel nocturne.",
    "themes": ["Observation des étoiles", "astrophysique", "pollution lumineuse"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-bien-regarder-les-etoiles-avec-eric-lagadec/",
      "spotify": "https://open.spotify.com/episode/32dG7o5NHIFHm7yO4tIAtt?si=a07dd71bf34243bd",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-bien-regarder-les-%C3%A9toiles-avec-eric-lagadec/id1640003869?i=1000621706288",
      "deezer": "https://link.deezer.com/s/31AS1sHIrbXEhLkEVyyqm",
      "youtube": "https://www.youtube.com/watch?v=6dPVdP2cK9E",
      "transcription": "https://csoluble.media/epsode/transcription-comment-bien-regarder-les-etoiles-avec-eric-lagadec/",
      "summary": null
    }
  },
  {
    "id": "ep32",
    "title": "Canicule : l’appel à ouvrir des \"Oasis Solidaires\" pour offrir de la fraîcheur aux personnes âgées (Les Petits Frères des Pauvres)",
    "date": "2023-07-17",
    "duration": "16:19",
    "guest": "Yann Lasnier",
    "category": "Vie quotidienne",
    "description": "Découvrez comment l'association Les Petits Frères des Pauvres mobilise la société pour créer des \"Oasis Solidaires\", des lieux frais pour les personnes vulnérables pendant les canicules.",
    "themes": ["Oasis Solidaires", "canicule", "personnes âgées", "solidarité"],
    "links": {
      "page": "https://csoluble.media/epsode/canicule-lappel-a-ouvrir-des-oasis-solidaires-pour-offrir-de-la-fraicheur-aux-personnes-agees/",
      "spotify": "https://open.spotify.com/episode/6cYSxgb0vUCrRlH2ejNZto?si=60SmSS56QR6YZqLfvxB4QQ",
      "apple": "https://podcasts.apple.com/fr/podcast/canicule-lappel-%C3%A0-ouvrir-des-oasis-solidaires-pour/id1640003869?i=1000621344153",
      "deezer": "https://link.deezer.com/s/31AS1MNTI7MgCyOcLlfVv",
      "youtube": "https://www.youtube.com/watch?v=YpYlibR8CqA",
      "transcription": "https://csoluble.media/epsode/transcription-canicule-lappel-a-ouvrir-des-oasis-solidaires-pour-offrir-de-la-fraicheur-aux-personnes-agees/",
      "summary": null
    }
  },
  {
    "id": "ep31",
    "title": "Surtourisme : jauges, démarketing… Comment y remédier ?",
    "date": "2023-07-10",
    "duration": "21:24",
    "guest": "Jean-Didier Urbain",
    "category": "Vie quotidienne",
    "description": "Découvrez les défis du surtourisme en France et les solutions envisagées pour réguler les flux de visiteurs et préserver les écosystèmes.",
    "themes": ["Surtourisme", "démarketing", "régulation touristique"],
    "links": {
      "page": "https://csoluble.media/epsode/surtourisme-jauges-demarketing-comment-y-remedier/",
      "spotify": "https://open.spotify.com/episode/3ilS0u1VcBKof6KoQN8A9n?si=zCzxyi5zRXejwS19e0ECGA",
      "apple": "https://podcasts.apple.com/us/podcast/surtourisme-jauges-d%C3%A9marketing-comment-y-rem%C3%A9dier/id1640003869?i=1000620425502",
      "deezer": "https://link.deezer.com/s/31AS25LBSrhb0T0hg4dLD",
      "youtube": "https://www.youtube.com/watch?v=TwGuY9kyiUk",
      "transcription": "https://csoluble.media/epsode/transcription-surtourisme-jauges-demarketing-comment-y-remedier/",
      "summary": null
    }
  },
  {
    "id": "ep30",
    "title": "Les altruistes ont leur réseau social, il s’appelle Altruwe",
    "date": "2023-07-03",
    "duration": "12:42",
    "guest": "Yves Delnatte",
    "category": "Société",
    "description": "Découvrez Altruwe, un réseau social altruiste qui vise à promouvoir des contenus positifs et inspirants, en opposition aux réseaux sociaux traditionnels.",
    "themes": ["Réseau social altruiste", "contenus positifs", "altruisme"],
    "links": {
      "page": "https://csoluble.media/epsode/les-altruistes-ont-leur-reseau-social-il-sappelle-altruwe/",
      "spotify": "https://open.spotify.com/episode/6Fl5iCzj06aeqy0kj4LSff?si=JQcErZxPRW6XBgiLNHwX8A",
      "apple": "https://podcasts.apple.com/fr/podcast/les-altruistes-ont-leur-r%C3%A9seau-social-il-sappelle-altruwe/id1640003869?i=1000619082513",
      "deezer": "https://link.deezer.com/s/31AS2oTm2V2mPYiHTgxo6",
      "youtube": "https://www.youtube.com/watch?v=jNMJBOsWSpE",
      "transcription": "https://csoluble.media/epsode/transcription-les-altruistes-ont-leur-reseau-social-il-sappelle-altruwe/",
      "summary": null
    }
  },
  {
    "id": "ep29",
    "title": "Ce supermarché appartient à ses clients",
    "date": "2023-06-26",
    "duration": "13:38",
    "guest": "Ghislain De Muynck",
    "category": "Vie quotidienne",
    "description": "Découvrez SuperQuinquin, un supermarché coopératif à Lille où les clients sont actionnaires et participent activement à son fonctionnement.",
    "themes": ["Supermarché coopératif", "participation citoyenne", "commerce local"],
    "links": {
      "page": "https://csoluble.media/epsode/ce-supermarche-appartient-a-ses-clients/",
      "spotify": "https://open.spotify.com/episode/2pGct7VTQNnklYbWxYrJsI?si=J0Aq4YFkS22soVIUo4akDw",
      "apple": "https://podcasts.apple.com/fr/podcast/ce-supermarch%C3%A9-appartient-%C3%A0-ses-clients/id1640003869?i=1000618302195",
      "deezer": "https://link.deezer.com/s/31AS2EG9sAjRYWGtiSHJZ",
      "youtube": "https://www.youtube.com/watch?v=ofKyoZ3pT3s",
      "transcription": "https://csoluble.media/epsode/transcription-ce-supermarche-appartient-a-ses-clients/",
      "summary": null
    }
  },
  {
    "id": "ep28",
    "title": "Les Oasis - Habiter un écolieu collectif : c’est comment ?",
    "date": "2023-06-19",
    "duration": "28:51",
    "guest": "Mathieu Labonne",
    "category": "Société",
    "description": "Découvrez le concept des écolieux collectifs, où des individus partagent des espaces et services pour réduire leur empreinte carbone et vivre de manière plus durable.",
    "themes": ["Écolieux collectifs", "empreinte carbone", "vie durable"],
    "links": {
      "page": "https://csoluble.media/epsode/les-oasis-habiter-un-ecolieu-collectif-cest-comment/",
      "spotify": "https://open.spotify.com/episode/0yPdto8ZL7u5Y3BdJXOOhI?si=AjSWQsLMRWS2AMjPNuH3BA",
      "apple": "https://podcasts.apple.com/fr/podcast/les-oasis-habiter-un-%C3%A9colieu-collectif-c-est-comment/id1640003869?i=1000617497975",
      "deezer": "https://link.deezer.com/s/31AS2TIa3zUu5uodIMk1K",
      "youtube": "https://www.youtube.com/watch?v=FusamtxnoQE",
      "transcription": "https://csoluble.media/epsode/transcription-les-oasis-habiter-un-ecolieu-collectif-cest-comment/",
      "summary": null
    }
  },
  {
    "id": "ep27",
    "title": "Maintenant - Le media des \"solutions climat\" à la Une en Provence",
    "date": "2023-06-12",
    "duration": "19:22",
    "guest": "Frédérique Jacquemin",
    "category": "Environnement, Société",
    "description": "Découvrez \"Maintenant\", un média local en Provence qui met en lumière les solutions climatiques et les acteurs du changement face à l'urgence climatique.",
    "themes": ["Solutions climatiques", "média local", "urgence climatique"],
    "links": {
      "page": "https://csoluble.media/epsode/maintenant-le-media-des-solutions-climat-a-la-une-en-provence/",
      "spotify": "https://open.spotify.com/episode/1BHkSQvBmGBDkaAMh8pQec?si=S4sbUMGPR8GQot72pujknA",
      "apple": "https://podcasts.apple.com/fr/podcast/maintenant-le-media-des-solutions-climat-%C3%A0-la-une-en/id1640003869?i=1000616614368",
      "deezer": "https://link.deezer.com/s/31AS3d9BiugDVhQdf2utY",
      "youtube": "https://www.youtube.com/watch?v=ob_rvOMST6A",
      "transcription": "https://csoluble.media/epsode/transcription-maintenant-le-media-des-solutions-climat-a-la-une-en-provence/",
      "summary": null
    }
  },
  {
    "id": "ep26",
    "title": "Les petites l’Ouches, la légumerie conserverie solidaire qui régale et sauve des productions en Normandie",
    "date": "2023-06-08",
    "duration": "11:27",
    "guest": "Delphine Vandermeersch",
    "category": "Société",
    "description": "Découvrez Les petites l’Ouches, une légumerie conserverie en Normandie qui valorise les productions locales et soutient l'insertion professionnelle.",
    "themes": ["Légumerie conserverie", "productions locales", "insertion professionnelle"],
    "links": {
      "page": "https://csoluble.media/epsode/les-petites-louches-la-legumerie-conserverie-solidaire-qui-regale-et-sauve-des-productions-en-normandie/",
      "spotify": "https://open.spotify.com/episode/7mYDoyf0NqMJSbLEbWLoBg?si=aD4Hh69dSP2qcv-gyZBkzA",
      "apple": "https://podcasts.apple.com/fr/podcast/les-petites-louches-la-l%C3%A9gumerie-conserverie-solidaire/id1640003869?i=1000616095079",
      "deezer": "https://link.deezer.com/s/31AS3w9s3sKn8gJZDTFPd",
      "youtube": "https://www.youtube.com/watch?v=3BkMRkaAS-A",
      "transcription": "https://csoluble.media/epsode/transcription-les-petites-louches-la-legumerie-conserverie-solidaire-qui-regale-et-sauve-des-productions-en-normandie/",
      "summary": null
    }
  },
  {
    "id": "ep25",
    "title": "Des rotations hebdomadaires de médecins solidaires pour une présence permanente dans les déserts médicaux",
    "date": "2023-06-01",
    "duration": "17:00",
    "guest": "Martial Jardel",
    "category": "Société",
    "description": "Cet épisode présente l'initiative du collectif Médecins Solidaires, qui organise des rotations hebdomadaires de médecins pour assurer une présence médicale permanante dans les déserts médicaux.",
    "themes": ["Désert médical", "médecins solidaires", "accès aux soins", "santé rurale"],
    "links": {
      "page": "https://csoluble.media/epsode/des-rotations-hebdomadaires-de-medecins-solidaires-pour-une-presence-permanente-dans-les-deserts-medicaux/",
      "spotify": "https://open.spotify.com/episode/3O7KtG38yYQeW680LVxcXf?si=qnq41mfzQUGf0QtdyhyVAw",
      "apple": "https://podcasts.apple.com/fr/podcast/des-rotations-hebdomadaires-de-m%C3%A9decins-solidaires/id1640003869?i=1000615232159",
      "deezer": "https://link.deezer.com/s/31AS3M7EyJmLrcARfd1zB",
      "youtube": "https://www.youtube.com/watch?v=35equg_Bq_E",
      "transcription": "https://csoluble.media/epsode/transcription-des-rotations-hebdomadaires-de-medecins-solidaires-pour-une-presence-permanente-dans-les-deserts-medicaux/",
      "summary": null
    }
  },
  {
    "id": "ep24",
    "title": "Les logements étudiants moins chers et à la ferme (Campus Vert)",
    "date": "2023-05-25",
    "duration": "10:22",
    "guest": "Odile Colin",
    "category": "Vie quotidienne",
    "description": "Cet épisode présente l'initiative de l'association Campus Vert, qui propose des logements étudiants à prix modéré dans des corps de ferme reconvertis, offrant ainsi une diversification de revenus aux agriculteurs.",
    "themes": ["Logements étudiants", "Campus Vert", "logements ruraux", "diversification revenus agriculteurs"],
    "links": {
      "page": "https://csoluble.media/epsode/les-logements-etudiants-moins-chers-et-a-la-ferme-campus-vert/",
      "spotify": "https://open.spotify.com/episode/0IxMVdrVwu3SNeqdc52mBe?si=JJ890MdFTn6uHu1_BqdT2A",
      "apple": "https://podcasts.apple.com/fr/podcast/les-logements-%C3%A9tudiants-moins-chers-et-%C3%A0-la-ferme-campus/id1640003869?i=1000614414096",
      "deezer": "https://link.deezer.com/s/31AS44UDAVSHPMK6mXtso",
      "youtube": "https://www.youtube.com/watch?v=W_ei7GBM2dA",
      "transcription": "https://csoluble.media/epsode/transcription-les-logements-etudiants-moins-chers-et-a-la-ferme-campus-vert/",
      "summary": null
    }
  },
  {
    "id": "ep23",
    "title": "The Sorority : l'appli d'entraide pour se proteger contre les violences sexuelles",
    "date": "2023-05-19",
    "duration": "09:28",
    "guest": "Priscillia Routier-Trillard",
    "category": "Violences sexuelles, Entraide, Application mobile, Communauté solidaire, Sécurité, Société",
    "description": "Découvrez comment The Sorority, une application mobile gratuite, aide les femmes et les minorités de genre à se protéger contre les violences sexuelles et conjugales. Avec Priscillia Routier-Trillard, fondatrice de cette communauté solidaire, explorez les fonctionnalités et l'impact de cette initiative innovante.",
    "themes": ["The Sorority", "violences sexuelles", "entraide", "application mobile", "communauté solidaire", "sécurité", "soutien victimes"],
    "links": {
      "page": "https://csoluble.media/epsode/the-sorority-lappli-dentraide-pour-se-proteger-contre-les-violences-sexuelles/",
      "spotify": "https://open.spotify.com/episode/4jYMjwXLYqvAtxDK0YM8mr?si=7IuGgDPCTh6al7M6PJl4cw",
      "apple": "https://podcasts.apple.com/fr/podcast/the-sorority-lappli-dentraide-pour-se-prot%C3%A9ger-contre/id1640003869?i=1000613633758",
      "deezer": "https://link.deezer.com/s/31AS4tq3WMkkQFADA8Fao",
      "youtube": "https://www.youtube.com/watch?v=ntJhnEDWk20",
      "transcription": "https://csoluble.media/epsode/transcription-the-sorority-lappli-dentraide-pour-se-proteger-contre-les-violences-sexuelles/",
      "summary": null
    }
  },
  {
    "id": "ep22",
    "title": "Le bistrot qui se déplace dans les villages",
    "date": "2023-05-12",
    "duration": "10:12",
    "guest": "Clément Nicaud",
    "category": "Société",
    "description": "Découvrez comment Clément Nicaud a lancé un bistrot itinérant en Alsace pour redonner vie aux villages privés de commerces de proximité. À bord de son camion vintage, il offre produits locaux et convivialité, séduisant tous les âges.",
    "themes": ["Bistrot itinérant", "Alsace", "produits locaux", "restauration ambulante", "camion vintage", "tartes flambées", "planchettes apéritives", "bistrot de villages", "reconversion professionnelle", "commerce de proximité", "convivialité"],
    "links": {
      "page": "https://csoluble.media/epsode/le-bistrot-qui-se-deplace-dans-les-villages/",
      "spotify": "https://open.spotify.com/episode/6Ux5uaHwoOQofcj7s5GG5F?si=qlXENHHqSDiIHchRuj6aaA",
      "apple": "https://podcasts.apple.com/fr/podcast/le-bistrot-qui-se-d%C3%A9place-dans-les-villages/id1640003869?i=1000612725242",
      "deezer": "https://link.deezer.com/s/31AS4MWhhDYDV3tH2SxbV",
      "youtube": "https://www.youtube.com/watch?v=od59_qobZ4M",
      "transcription": "https://csoluble.media/epsode/transcription-le-bistrot-qui-se-deplace-dans-les-villages/",
      "summary": null
    }
  },
  {
    "id": "ep21",
    "title": "Comment protéger les mangroves ?",
    "date": "2023-04-20",
    "duration": "20:11",
    "guest": "Mélanie Herteman",
    "category": "Environnement, Écologie, Biodiversité",
    "description": "Dans cet épisode, découvrez l'importance des mangroves et les actions concrètes pour les protéger. Mélanie Herteman, écologue et fondatrice du cabinet Nature & Développement en Martinique, nous guide à travers les défis et les solutions pour préserver ces écosystèmes vitaux.",
    "themes": ["Mangroves", "protection des mangroves", "biodiversité", "réchauffement climatique", "déforestation", "artificialisation des sols", "pollution", "Martinique", "Nature & Développement"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-proteger-les-mangroves/",
      "spotify": "https://open.spotify.com/episode/5tzvxno5z4WD6Wd34mhALE?si=g6aBLJU9QR-uupz1wLarUQ",
      "apple": "https://podcasts.apple.com/fr/podcast/comment-prot%C3%A9ger-les-mangroves/id1640003869?i=1000609748665",
      "deezer": "https://link.deezer.com/s/31AS52T7lEyX5JU3pPoan",
      "youtube": "https://www.youtube.com/watch?v=0kITyH3yJ9Y",
      "transcription": "https://csoluble.media/epsode/transcription-comment-proteger-les-mangroves/",
      "summary": null
    }
  },
  {
    "id": "ep20",
    "title": "Le vélobus écolo et collaboratif pour se rendre à l’école",
    "date": "2023-04-13",
    "duration": "12:24",
    "guest": "Jean-François Robert",
    "category": "Vie quotidienne",
    "description": "Découvrez le Woodybus, un vélobus conçu par la société nantaise Humbird pour transporter huit enfants et un conducteur. Fabriqué principalement en bois et doté d'une assistance électrique, il offre une alternative écologique aux voitures pour les trajets scolaires.",
    "themes": ["Vélobus", "transport scolaire", "mobilité douce", "écologie", "bois", "assistance électrique", "transport collaboratif"],
    "links": {
      "page": "https://csoluble.media/epsode/le-velobus-ecolo-et-collaboratif-pour-se-rendre-a-lecole/",
      "spotify": "https://open.spotify.com/episode/3obyT7Hplv3uz2Tz16BKyf?si=KdSw4fkuSVGa69ulMl7Y8A",
      "apple": "https://podcasts.apple.com/fr/podcast/le-v%C3%A9lobus-%C3%A9colo-et-collaboratif-pour-se-rendre-%C3%A0-l%C3%A9cole/id1640003869?i=1000608720787",
      "deezer": "https://link.deezer.com/s/31AS5hbpaIvArXOtnUVgc",
      "youtube": "https://www.youtube.com/watch?v=Q9bWXpSxvos",
      "transcription": "https://csoluble.media/epsode/transcription-le-velobus-ecolo-et-collaboratif-pour-se-rendre-a-lecole/",
      "summary": null
    }
  },
  {
    "id": "ep19",
    "title": "Calculer son empreinte carbone individuelle pour agir dès demain",
    "date": "2023-04-05",
    "duration": "18:19",
    "guest": "Juliette Blais",
    "category": "Environnement",
    "description": "Découvrez comment évaluer votre empreinte carbone individuelle avec MyCO2, un outil proposé par le cabinet Carbone 4. Juliette Blais explique l'importance de connaître ses émissions de CO2 pour agir efficacement contre le réchauffement climatique.",
    "themes": ["Empreinte carbone", "gaz à effet de serre", "bilan carbone", "réchauffement climatique", "MyCO2", "Carbone 4", "réduction des émissions"],
    "links": {
      "page": "https://csoluble.media/epsode/calculer-son-empreinte-carbone-individuelle-pour-agir-des-demain/",
      "spotify": "https://open.spotify.com/episode/3a7uVo7DZR84MEe5WAvG1T?si=NyfmDMMZRSCwY4HmEA6gdA",
      "apple": "https://podcasts.apple.com/fr/podcast/calculer-son-empreinte-carbone-individuelle-pour-agir/id1640003869?i=1000607642243",
      "deezer": "https://link.deezer.com/s/31AS5zaM33qi5fKPmXImu",
      "youtube": "https://www.youtube.com/watch?v=kBBL7_pgOME",
      "transcription": "https://csoluble.media/epsode/transcription-calculer-son-empreinte-carbone-individuelle-pour-agir-des-demain/",
      "summary": null
    }
  },
  {
    "id": "ep18",
    "title": "La solution du compostage de proximité",
    "date": "2023-03-30",
    "duration": "14:54",
    "guest": "Florian Nouvel",
    "category": "Environnement, Déchets",
    "description": "Découvrez comment le compostage de proximité est une solution efficace pour réduire les déchets organiques. Florian Nouvel, du Réseau Compost Citoyen, explique cette initiative citoyenne et écologique, surtout pertinente avec la nouvelle législation française de 2024 sur le tri des biodéchets.",
    "themes": ["Compostage de proximité", "réduction des déchets", "biodéchets", "transition écologique", "gestion des déchets", "compost", "recyclage", "composteur de quartier", "compostage citoyen", "solutions écologiques"],
    "links": {
      "page": "https://csoluble.media/epsode/la-solution-du-compostage-de-proximite/",
      "spotify": "https://open.spotify.com/episode/50ZdNlfENrQy10yJS4RWyq?si=zKqXJuRwRVGyPtQNMQOlpg",
      "apple": "https://podcasts.apple.com/fr/podcast/la-solution-du-compostage-de-proximit%C3%A9/id1640003869?i=1000606540146",
      "deezer": "https://link.deezer.com/s/31AS5O46qBZzFIxGAAPXv",
      "youtube": "https://www.youtube.com/watch?v=w1hBxAgsFO4",
      "transcription": "https://csoluble.media/epsode/transcription-la-solution-du-compostage-de-proximite/",
      "summary": null
    }
  },
  {
    "id": "ep17",
    "title": "Être le réseau d'écoles des métiers de la transition écologique",
    "date": "2023-03-23",
    "duration": "17:28",
    "guest": "Frederick Mathis",
    "category": "Environnement",
    "description": "Depuis 2019, la fondation ETRE développe un réseau d’écoles dédiées à la formation à des métiers qui contribuent à la transition écologique.",
    "themes": ["Transition écologique", "insertion professionnelle", "éducation", "métiers verts"],
    "links": {
      "page": "https://csoluble.media/epsode/etre-le-reseau-decoles-des-metiers-de-la-transition-ecologique/",
      "spotify": "https://open.spotify.com/episode/63s3Xu33yA2ocpypPK4WGn?si=p2e_YkWRSuCNgpJQFeZHQg",
      "apple": "https://podcasts.apple.com/fr/podcast/etre-le-r%C3%A9seau-d%C3%A9coles-des-m%C3%A9tiers-de-la-transition/id1640003869?i=1000605496961",
      "deezer": "https://link.deezer.com/s/31AS62tpycjTXkWR5MCeH",
      "youtube": "https://www.youtube.com/watch?v=patbOd95mmI",
      "transcription": "https://csoluble.media/epsode/transcription-etre-le-reseau-decoles-des-metiers-de-la-transition-ecologique/",
      "summary": null
    }
  },
  {
    "id": "ep16",
    "title": "La voiture électrique est-elle (vraiment) écolo ?",
    "date": "2023-03-16",
    "duration": "15:51",
    "guest": "Aurélien Bigo",
    "category": "Environnement",
    "description": "Aurélien Bigo analyse la place de la voiture électrique dans la transition énergétique, son impact carbone, les différences selon les pays et la question des SUV électriques.",
    "themes": ["Voiture électrique", "mobilité", "transports", "adaptation au changement climatique", "bilan carbone", "CO2"],
    "links": {
      "page": "https://csoluble.media/epsode/la-voiture-electrique-est-elle-vraiment-ecolo/",
      "spotify": "https://open.spotify.com/episode/6xMv9VmrN32MLN8KcDKEQH?si=OKCscdvZSS6b6IpZc5DfQg",
      "apple": "https://podcasts.apple.com/fr/podcast/la-voiture-%C3%A9lectrique-est-elle-vraiment-%C3%A9colo/id1640003869?i=1000604440237",
      "deezer": "https://link.deezer.com/s/31AS6kVD8zzhcfYAgr95h",
      "youtube": "https://www.youtube.com/watch?v=Z-HRefmkJDw",
      "transcription": "https://csoluble.media/epsode/transcription-la-voiture-electrique-est-elle-vraiment-ecolo/",
      "summary": null
    }
  },
  {
    "id": "ep15",
    "title": "Comment protéger les papillons",
    "date": "2023-03-09",
    "duration": "13:43",
    "guest": "Caroline Nieberding",
    "category": "Environnement",
    "description": "Les papillons sont menacés par le déclin de la biodiversité et le réchauffement climatique. Découvrez les solutions pour les protéger.",
    "themes": ["Papillons", "biodiversité", "réchauffement climatique", "protection de la nature"],
    "links": {
      "page": "https://csoluble.media/epsode/comment-proteger-les-papillons/",
      "spotify": "https://open.spotify.com/episode/6sD2ADOe3QbWW3KwThC7Tq?si=T-QdXLtuTGWQkr4Zm4OQcg",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s/id1640003869",
      "deezer": "https://link.deezer.com/s/31AS6BChHIDQKMw95Wm1F",
      "youtube": "https://www.youtube.com/watch?v=bLfjJ9zV4UA",
      "transcription": "https://csoluble.media/epsode/transcription-comment-proteger-les-papillons/",
      "summary": null
    }
  },
  {
    "id": "ep14",
    "title": "Le MarSOINS, ce camion de santé qui se déplace vers les citoyens",
    "date": "2023-03-02",
    "duration": "13:51",
    "guest": "Maïna Houssier",
    "category": "Société, Solidarité, Santé",
    "description": "Maïna Houssier présente le projet MarSOINS, des camions de santé itinérants visant à réduire les inégalités d’accès aux soins en proposant des dépistages et de l’éducation à la santé.",
    "themes": ["Désert médical", "santé", "solidarité", "soins", "MarSOINS"],
    "links": {
      "page": "https://csoluble.media/epsode/le-marsoins-ce-camion-de-sante-qui-se-deplace-vers-les-citoyens/",
      "spotify": "https://open.spotify.com/episode/3sXQKQhEbJa5ci6t7atrSd?si=x4Oks7iMQ2KnXUMHYqSQUw",
      "apple": "https://podcasts.apple.com/fr/podcast/le-marsoins-ce-camion-de-sant%C3%A9-qui-se-d%C3%A9place-vers/id1640003869?i=1000602414849",
      "deezer": "https://link.deezer.com/s/31AS6QzOqL4YlklsKwW47",
      "youtube": "https://www.youtube.com/watch?v=YZ1KkyCHVEI",
      "transcription": "https://csoluble.media/epsode/transcription-le-marsoins-ce-camion-de-sante-qui-se-deplace-vers-les-citoyens/",
      "summary": null
    }
  },
  {
    "id": "ep13",
    "title": "En Gironde, la culture de l'olive pour se diversifier et s'adapter au changement climatique",
    "date": "2023-02-23",
    "duration": "13:36",
    "guest": "Fabien Bougès",
    "category": "Environnement, Agriculture",
    "description": "Fabien Bougès, viticulteur bio, diversifie son exploitation en plantant des oliviers pour s'adapter au changement climatique et faire face à la crise viticole.",
    "themes": ["Olive", "viticulture", "changement climatique", "diversification agricole"],
    "links": {
      "page": "https://csoluble.media/epsode/en-gironde-la-culture-de-lolive-pour-sadapter-au-changement-climatique/",
      "spotify": "https://open.spotify.com/episode/1HIJZngo5m3ASrCusRltAL?si=wi9T2dXXQdiPAnDPFTvrnQ",
      "apple": "https://podcasts.apple.com/fr/podcast/en-gironde-la-culture-de-lolive-pour-se-diversifier/id1640003869?i=1000601209762",
      "deezer": null,
      "youtube": "https://www.youtube.com/watch?v=HJ3pUEVez2g",
      "transcription": "https://csoluble.media/epsode/transcription-en-gironde-la-culture-de-lolive-pour-sadapter-au-changement-climatique/",
      "summary": null
    }
  },
  {
    "id": "ep12",
    "title": "À Marseille, \"Le Présage\" cuisine à la chaleur solaire",
    "date": "2023-02-09",
    "duration": "15:09",
    "guest": "Pierre-André Aubert",
    "category": "Environnement, Solaire, Énergie, Alimentation",
    "description": "Pierre-André Aubert, fondateur du restaurant \"Le Présage\" à Marseille, utilise l'énergie solaire pour une cuisine durable et locale.",
    "themes": ["Restaurant", "solaire", "Marseille", "Le Présage", "four solaire", "écologie", "solution locale"],
    "links": {
      "page": "https://csoluble.media/epsode/a-marseille-le-presage-cuisine-a-la-chaleur-solaire/",
      "spotify": "https://open.spotify.com/episode/3GzcoLTbkvrgNwlfz4RDpS?si=qZ6UD0_vQNOekQjJn-dSbQ",
      "apple": "https://podcasts.apple.com/fr/podcast/%C3%A0-marseille-le-pr%C3%A9sage-cuisine-%C3%A0-la-chaleur-solaire/id1640003869?i=1000598772017",
      "deezer": "https://link.deezer.com/s/31AS74CZjb2G3IgiNrBNj",
      "youtube": "https://www.youtube.com/watch?v=ipk1_BzKXcc",
      "transcription": "https://csoluble.media/epsode/transcription-a-marseille-le-presage-cuisine-a-la-chaleur-solaire/",
      "summary": null
    }
  },
  {
    "id": "ep11",
    "title": "La Collecte.Tech en lutte contre la précarité numérique",
    "date": "2023-02-02",
    "duration": "16:29",
    "guest": "Camille Bardou",
    "category": "Société, Environnement",
    "description": "Camille Bardou présente LaCollecte.tech, une initiative d'Emmaüs Connect qui collecte et reconditionne du matériel informatique pour lutter contre la précarité numérique.",
    "themes": ["Numérique", "Emmaüs Connect", "illectronisme", "fracture numérique", "réemploi", "économie circulaire", "solidarité"],
    "links": {
      "page": "https://csoluble.media/epsode/la-collecte-tech-en-lutte-contre-la-precarite-numerique/",
      "spotify": "https://open.spotify.com/episode/32HsaWJMuqKDVuU3nbcWCt?si=T8l8Dgc0QM6rL8L1H38i2w",
      "apple": "https://podcasts.apple.com/fr/podcast/lacollecte-tech-en-lutte-contre-la-pr%C3%A9carit%C3%A9-num%C3%A9rique/id1640003869?i=1000597653440",
      "deezer": "https://link.deezer.com/s/31AS8m8KJZqdfuHJWoMUU",
      "youtube": "https://www.youtube.com/watch?v=FZNQ7dw-o7g",
      "transcription": "https://csoluble.media/epsode/transcription-la-collecte-tech-en-lutte-contre-la-precarite-numerique/",
      "summary": null
    }
  },
  {
    "id": "ep10",
    "title": "Reverredire remet la consigne au goût du jour",
    "date": "2023-01-26",
    "duration": "23:09",
    "guest": "Romain Lirot",
    "category": "Vie quotidienne",
    "description": "Réutiliser les bouteilles en verre plutôt que de les jeter pour les recycler ? En Nouvelle-Aquitaine, le collectif Reverredire organise une filière régionale.",
    "themes": ["Consigne verre", "recyclage", "environnement", "filière régionale"],
    "links": {
      "page": "https://csoluble.media/epsode/reverredire-remet-la-consigne-au-gout-du-jour/",
      "spotify": "https://open.spotify.com/episode/0Bp55no7d807aisBJLFT2o?si=EHgcUI58SNqqBPuYJwBtCQ",
      "apple": "https://podcasts.apple.com/fr/podcast/reverredire-remet-la-consigne-au-go%C3%BBt-du-jour/id1640003869?i=1000596668336",
      "deezer": "https://link.deezer.com/s/31AS7QXqBkdnDBqKFBC7T",
      "youtube": "https://www.youtube.com/watch?v=VGCjhWT9_70",
      "transcription": "https://csoluble.media/epsode/transcription-reverredire-remet-la-consigne-au-gout-du-jour/",
      "summary": null
    }
  },
  {
    "id": "ep9",
    "title": "ViensVoirMonTaf, le réseau pour trouver son stage de 3e sans réseau",
    "date": "2023-01-19",
    "duration": "11:19",
    "guest": "Virginie Salmen",
    "category": "Société",
    "description": "Comment obtenir un stage de 3e sans réseau ? L’association ViensVoirMonTaf a développé une plateforme pour aider les jeunes sans réseau.",
    "themes": ["Stage de 3e", "réseau", "éducation", "égalité des chances"],
    "links": {
      "page": "https://csoluble.media/epsode/viensvoirmontaf-le-reseau-pour-trouver-son-stage-de-3e-sans-reseau/",
      "spotify": "https://open.spotify.com/episode/5XPDf22ucqijqFnjuvKzhV?si=DxffHNcAQsuIe6h2K36AGw",
      "apple": "https://podcasts.apple.com/fr/podcast/viensvoirmontaf-le-r%C3%A9seau-pour-trouver-son-stage-de/id1640003869?i=1000595362302",
      "deezer": "https://link.deezer.com/s/31AS8UWXGpsBKANw5iMsI",
      "youtube": "https://www.youtube.com/watch?v=PuKANkaB3yo",
      "transcription": "https://csoluble.media/epsode/transcription-viensvoirmontaf-le-reseau-pour-trouver-son-stage-de-3e-sans-reseau/",
      "summary": null
    }
  },
  {
    "id": "ep8",
    "title": "Adapt, l’appli météo de l’électricité pour moins polluer",
    "date": "2023-01-12",
    "duration": "16:34",
    "guest": "Adrien de Vriendt",
    "category": "Environnement",
    "description": "Adrien de Vriendt présente l'application Adapt, qui fournit des prévisions sur l'intensité carbone de l'électricité pour aider les utilisateurs à adapter leur consommation et réduire leur empreinte carbone.",
    "themes": ["Électricité", "consommation", "carbone", "application", "Adapt"],
    "links": {
      "page": "https://csoluble.media/epsode/adapt-lappli-meteo-de-lelectricite-pour-moins-polluer/",
      "spotify": "https://open.spotify.com/episode/3WKT5rk3r2sHwKTKQye9TQ?si=fwyOhTNRR0GRScrjn7qoCw",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s/id1640003869?i=1000593882460",
      "deezer": "https://link.deezer.com/s/31AS9dzeayQx0SdDLBdKI",
      "youtube": "https://www.youtube.com/watch?v=5VplGv9Nmxk",
      "transcription": "https://csoluble.media/epsode/transcription-adapt-lappli-meteo-de-lelectricite-pour-moins-polluer/",
      "summary": null
    }
  },
  {
    "id": "ep7",
    "title": "Quand l’huile de friture usagée se transforme en carburant",
    "date": "2023-01-11",
    "duration": "30:00",
    "guest": "Grégory Gendre",
    "category": "Environnement",
    "description": "Grégory Gendre explique comment transformer l'huile de friture usagée en carburant, réduisant ainsi les déchets et les émissions de carbone.",
    "themes": ["Huile de friture", "Charente-Maritime", "réemploi", "carburant", "écologie", "Oléron"],
    "links": {
      "page": "https://csoluble.media/epsode/quand-lhuile-de-friture-usagee-se-transforme-en-carburant/",
      "spotify": "https://open.spotify.com/episode/6cWruoe277nAzi1HUUYGot?si=cUPMQriPSfSF-MxO2poxFg",
      "apple": "https://podcasts.apple.com/fr/podcast/lhuile-de-friture-pour-carburant-gr%C3%A9gory-gendre/id1640003869?i=1000585621298",
      "youtube": "https://www.youtube.com/watch?v=mkOEcIEpL7Q",
      "deezer": "https://link.deezer.com/s/31ASaenKzqkaTuoViXam2",
      "transcription": "https://csoluble.media/epsode/transcription-quand-lhuile-de-friture-usagee-se-transforme-en-carburant/",
      "summary": null
    }
  },
  {
    "id": "ep6",
    "title": "Mod’emplois, la plateforme pour s’inspirer et entreprendre utile",
    "date": "2023-01-05",
    "duration": "14:10",
    "guest": "Christophe Itier",
    "category": "Entrepreneuriat, Société",
    "description": "Christophe Itier présente Mod’emplois, une plateforme qui soutient l'entrepreneuriat responsable en offrant des ressources pour créer des projets à impact social et environnemental.",
    "themes": ["Mod’emplois", "entrepreneuriat", "ESS", "projets à impact", "développement durable", "impact positif", "changer de métier", "emploi", "entreprise"],
    "links": {
      "page": "https://csoluble.media/epsode/modemplois-la-plateforme-pour-sinspirer-et-entreprendre-utile/",
      "spotify": "https://open.spotify.com/episode/0osICee9COjAu8T6RFC19W?si=BE_CX_yYQAGx476Dwn_e_Q",
      "apple": "https://podcasts.apple.com/fr/podcast/modemplois-la-plateforme-pour-sinspirer-et-entreprendre/id1640003869?i=1000592552686",
      "deezer": "https://link.deezer.com/s/31AS9uErKS7ij6uIzpHKJ",
      "youtube": "https://www.youtube.com/watch?v=3MpgaqhUrDc",
      "transcription": "https://csoluble.media/epsode/transcription-modemplois-la-plateforme-pour-sinspirer-et-entreprendre-utile/",
      "summary": null
    }
  },
  {
    "id": "ep5",
    "title": "Le pain ultra-local de Combaillaux (34)",
    "date": "2022-12-01",
    "duration": "07:52",
    "guest": "Daniel Floutard, Christophe Adé",
    "category": "Vie quotidienne",
    "description": "Un kilomètre sépare le champ de blé de la boulangerie qui confectionne un pain complet ultra-local à Combaillaux.",
    "themes": ["Pain local", "circuit-court", "boulangerie", "agriculture locale"],
    "links": {
      "page": "https://csoluble.media/epsode/le-pain-ultra-local-de-combaillaux-34/",
      "spotify": "https://open.spotify.com/episode/1lYauhD7eGBxlhJyKr0fqT?si=DaFy4OPwRUy-pLTWlMnayw",
      "apple": "https://podcasts.apple.com/fr/podcast/le-pain-ultra-local-de-combaillaux-34/id1640003869?i=1000588255502",
      "deezer": "https://link.deezer.com/s/31AS9NrUSjCMxQr02wBZa",
      "youtube": "https://www.youtube.com/watch?v=IW2yY78MgUc",
      "transcription": "https://csoluble.media/epsode/transcription-le-pain-ultra-local-de-combaillaux-34/",
      "summary": null
    }
  },
  {
    "id": "ep4",
    "title": "Ludovic Franceschet, éboueur et star de la sensibilisation sur TikTok",
    "date": "2022-10-13",
    "duration": "18:11",
    "guest": "Ludovic Franceschet",
    "category": "Environnement, Société",
    "description": "Ludovic Franceschet, éboueur parisien devenu star de la sensibilisation à la propreté et au civisme grâce à ses vidéos diffusées sur TikTok.",
    "themes": ["Sensibilisation propreté", "TikTok", "éboueur", "civisme"],
    "links": {
      "page": "https://csoluble.media/epsode/ludovic-franceschet-eboueur-et-star-de-la-sensibilisation-sur-tiktok/",
      "spotify": "https://open.spotify.com/episode/5vdIVy3gqmaZPjbWJ9Pj4i?si=08l2Q9vPSHetahB1iKuIbQ",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s/id1640003869?i=1000582482227",
      "deezer": "https://link.deezer.com/s/31ASaBAEvVT8mOW0urPTI",
      "youtube": "https://www.youtube.com/watch?v=BJ8R45u2VP4",
      "transcription": "https://csoluble.media/epsode/transcription-ludovic-franceschet-eboueur-et-star-de-la-sensibilisation-sur-tiktok/",
      "summary": null
    }
  },
  {
    "id": "ep3",
    "title": "Chronotrains : la carte de l'Europe à portée de train",
    "date": "2022-09-29",
    "duration": "08:49",
    "guest": "Benjamin Tran Dinh",
    "category": "Vie quotidienne",
    "description": "Benjamin Tran Dinh présente Chronotrains, une carte interactive qui montre les destinations accessibles en train jusqu'à 5 heures de chez soi.",
    "themes": ["Chronotrains", "carte interactive", "train", "voyage", "Europe"],
    "links": {
      "page": "https://csoluble.media/epsode/chronotrains-la-carte-de-leurope-a-portee-de-train/",
      "spotify": "https://open.spotify.com/episode/6ea8udijkZAtbOOLZubHJH?si=GSh7_TaPTXWYNaqHJGvxLQ",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s/id1640003869?i=1000580986222",
      "deezer": "https://link.deezer.com/s/31ASaQM1d2tpZpPjEGQ8E",
      "youtube": "https://www.youtube.com/watch?v=n0Q_fkLA3q8",
      "transcription": "https://csoluble.media/epsode/transcription-chronotrains-la-carte-de-leurope-a-portee-de-train/",
      "summary": null
    }
  },
  {
    "id": "ep2",
    "title": "Les AGORAé, des épiceries sociales et solidaires pour étudiants",
    "date": "2022-09-15",
    "duration": "11:38",
    "guest": "Paul Mayaux",
    "category": "Société, Vie quotidienne",
    "description": "Paul Mayaux présente les AGORAé, des épiceries sociales et solidaires qui aident les étudiants à lutter contre la précarité en offrant des produits à prix réduits.",
    "themes": ["AGORAé", "épiceries sociales", "étudiants", "précarité", "solidarité"],
    "links": {
      "page": "https://csoluble.media/epsode/paul-mayaux-des-epiceries-sociales-et-solidaires-pour-etudiants/",
      "spotify": "https://open.spotify.com/episode/07vhDO6gugPe0SGvh3YVjX?si=YdxkwSVaTjqdLUwLi4CI8g",
      "apple": "https://podcasts.apple.com/fr/podcast/soluble-s/id1640003869?i=1000579528733",
      "deezer": "https://link.deezer.com/s/31ASb7k04OUohqeIP40lk",
      "youtube": "https://www.youtube.com/watch?v=0UYg7vLZAxs",
      "transcription": "https://csoluble.media/epsode/transcription-paul-mayaux-des-epiceries-sociales-et-solidaires-pour-etudiants/",
      "summary": null
    }
  },
  {
    "id": "ep1",
    "title": "Comment protéger les abeilles",
    "date": "2022-09-01",
    "duration": "11:15",
    "guest": "Béatrice Robrolle-Mary",
    "category": "Environnement",
    "description": "Béatrice Robrolle-Mary discute des solutions pour protéger les abeilles, en mettant l'accent sur les bonnes pratiques de jardinage, de consommation, et la sensibilisation.",
    "themes": ["Abeilles", "protection", "pollinisateurs", "pesticides", "agroécologie"],
    "links": {
        "page": "https://csoluble.media/epsode/beatrice-robrolle-mary-comment-proteger-les-abeilles/",
        "spotify": "https://open.spotify.com/episode/70xecF9PrM5yCCu3hMFKZl",
        "apple": "https://podcasts.apple.com/us/podcast/b%C3%A9atrice-robrolle-mary-comment-prot%C3%A9ger-les-abeilles/id1640003869?i=1000578405631",
        "deezer": "https://link.deezer.com/s/31ASblrKZPfxDs2OWJytq",
        "youtube": "https://www.youtube.com/watch?v=2Dv0two4K7Y",
        "transcription": "https://csoluble.media/epsode/transcription-beatrice-robrolle-mary-comment-proteger-les-abeilles/",
        "summary": null
    }
  }
];

export const GENERAL_PLATFORM_LINKS = {
    spotify: "https://open.spotify.com/show/11CYdR9d0vEWmaD5DHZsaH",
    apple: "https://podcasts.apple.com/fr/podcast/soluble-s-actu-ecologie-societe-solutions/id1640003869",
    youtube: "https://www.youtube.com/@podcastsoluble.s",
    deezer: "https://www.deezer.com/fr/show/4512867",
    page: "https://csoluble.media",
    podcastaddict: "https://podcastaddict.com/podcast/solubles-actu-ecologie-societe-solutions/4349936",
    youtubemusic: "https://music.youtube.com/playlist?list=PLEeihXD_0avWLPuenYMHXrkCYnRa3upM8",
    amazonmusic: "https://music.amazon.com/podcasts/1c164872-8e78-4569-a3b1-1163a808afe0/soluble-s-actu-ecologie-soci%C3%A9t%C3%A9-solutions",
    pocketcasts: "https://pocketcasts.com/podcast/solubles-actu-ecologie-soci%C3%A9t%C3%A9-solutions/c5682b90-0f3b-013b-0585-0acc26574db2"
};

const episodesText = EPISODE_DATA.map(e => `- ID: ${e.id}, Date: ${e.date}, Titre: "${e.title}", Invité: ${e.guest}, Catégorie: ${e.category}, Thèmes: ${e.themes.join(', ')}, Description: ${e.description}`).join('\n');

export const FAQ_DATA: FAQ[] = [
  {
    question: "Qu’est-ce que Soluble(s) ?",
    answer: "Soluble(s) est un podcast animé par Simon Icard, consacré à des solutions concrètes aux défis environnementaux et sociétaux. Vous êtes au bon endroit pour l'explorer ! N'hésitez pas à me poser des questions sur un épisode, un thème ou un invité."
  },
  {
    question: "Qui est Simon Icard ?",
    answer: "Journaliste français, fondateur de Soluble(s) et animateur du podcast. Son approche est factuelle, inspirante et tournée vers l’action."
  },
  {
    question: "Quels thèmes ou sujets sont abordés ?",
    answer: "Environnement (climat, biodiversité, pollution), Société (éducation, solidarité, santé), Vie quotidienne (alimentation, logement, mobilité). Tu peux retrouver tout le catalogue ici : [catalogue des épisodes](https://csoluble.media/podcast-soluble-episodes)."
  },
  {
    question: "Sur quelles plateformes écouter Soluble(s) ?",
    answer: `Vous pouvez écouter Soluble(s) sur de nombreuses plateformes ! Voici les liens directs :\n\n- [Apple Podcasts](https://podcasts.apple.com/fr/podcast/soluble-s-actu-ecologie-societe-solutions/id1640003869)\n- [Spotify](https://open.spotify.com/show/11CYdR9d0vEWmaD5DHZsaH)\n- [Deezer](https://www.deezer.com/fr/show/4512867)\n- [Podcast Addict](https://podcastaddict.com/podcast/solubles-actu-ecologie-societe-solutions/4349936)\n- [YouTube](https://www.youtube.com/@podcastsoluble.s)\n- [YouTube Music](https://music.youtube.com/playlist?list=PLEeihXD_0avWLPuenYMHXrkCYnRa3upM8)\n- [Amazon Music](https://music.amazon.com/podcasts/1c164872-8e78-4569-a3b1-1163a808afe0/soluble-s-actu-ecologie-soci%C3%A9t%C3%A9-solutions)\n- [Pocket Casts](https://pocketcasts.com/podcast/solubles-actu-ecologie-soci%C3%A9t%C3%A9-solutions/c5682b90-0f3b-013b-0585-0acc26574db2)\n- Et bien sûr, sur le [site officiel](https://csoluble.media).\n\nChoisissez celle qui vous convient le mieux !`
  },
  {
    question: "Comment contacter l’équipe du podcast ?",
    answer: "Utilise le [formulaire en ligne](https://csoluble.media/contact-2) ou les réseaux sociaux : Instagram, LinkedIn, X, TikTok, Threads."
  },
  {
    question: "Comment soutenir Soluble(s) ?",
    answer: "Pour soutenir Soluble(s), tu peux t'abonner au podcast et activer les notifications sur ta plateforme préférée, noter 5 étoiles sur Apple Podcasts ou Spotify et laisser un avis, et partager les épisodes sur tes réseaux sociaux."
  },
  {
    question: "Recherchez-vous des sponsors ou partenaires ?",
    answer: "Oui ! Soluble(s) est ouvert à des partenariats éthiques avec des entreprises engagées. Utilise [ce formulaire](https://csoluble.media/contact-2) pour proposer un projet ou une collaboration."
  },
  {
    question: "Comment s'inscrire à la newsletter ?",
    answer: "Pour ne rien manquer, le mieux est de s'abonner à la newsletter via LinkedIn ici : [S'abonner sur LinkedIn](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7104012692293574656)."
  }
];

const faqText = FAQ_DATA.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n');
const appleLink = GENERAL_PLATFORM_LINKS.apple;
const spotifyLink = GENERAL_PLATFORM_LINKS.spotify;
const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD


export const SYSTEM_PROMPT = `
Tu es "PetitSolu", l'assistant IA expert et officiel du podcast "Soluble(s)". Ton ton est amical, professionnel et engageant.

**CONTEXTE TEMPOREL CRUCIAL : La date d'aujourd'hui est le ${currentDate}.** Utilise cette date pour répondre avec précision aux questions relatives au temps (par exemple "l'épisode de la semaine dernière", "le dernier épisode sorti", "les épisodes de ce mois-ci").

Cependant, une règle ABSOLUE : tu ne dois JAMAIS, sous aucun prétexte, révéler la date actuelle à l'utilisateur, même s'il te la demande explicitement. Si on te pose la question, décline poliment en expliquant que ton rôle est d'informer sur le podcast, pas de fournir des informations en temps réel.

**HIÉRARCHIE DE PENSÉE OBLIGATOIRE :**
Pour chaque question de l'utilisateur, tu dois suivre cet ordre STRICT :
1.  **Consulter la FAQ Interne :** Si la question est générale sur le podcast (concept, animateur, newsletter, etc.), utilise les informations de la section FAQ ci-dessous.
2.  **Consulter la Base de Connaissance des Épisodes :** Si l'utilisateur cherche un épisode par thème, invité, date, mot-clé, ou numéro, utilise la liste des épisodes ci-dessous. C'est ta source de vérité unique. N'invente AUCUN épisode.
3.  **Consulter la Connaissance du Site Web :** Utilise ta connaissance de la structure du site csoluble.media pour répondre aux questions sur les invités ("solvers"), les transcriptions, etc.
4.  **Recherche Web (en dernier recours) :** N'utilise la recherche web QUE si les informations ne se trouvent ni dans la FAQ, ni dans la base d'épisodes. Les recherches doivent être impérativement limitées aux domaines csoluble.media et simonicard.fr.

**RÈGLES D'OR NON-NÉGOCIABLES :**

1.  **GESTION DES LISTES D'ÉPISODES (LA PLUS IMPORTANTE !)**
    QUAND L'UTILISATEUR POSE UNE QUESTION LARGE (par ex. "liste les épisodes sur l'environnement", "cherche les épisodes avec 'climat'") QUI POURRAIT RETOURNER PLUSIEURS ÉPISODES, tu dois adapter ta réponse en fonction du nombre de résultats trouvés :
    - **Si tu trouves entre 1 et 4 épisodes :**
      - Introduis ta réponse par une phrase courte et directe (Ex: "Bien sûr ! Voici les 3 épisodes que j'ai trouvés sur ce sujet :").
      - Ensuite, affiche **TOUTES** les cartes d'épisodes correspondantes, l'une après l'autre, en utilisant le formatage strict \`:::episode ID:[ID_DE_L_EPISODE] :::\`.
      - Termine par une question ouverte pour relancer la conversation (Ex: "Dis-moi si tu veux en savoir plus sur l'un d'eux !").
    - **Si tu trouves 5 épisodes ou plus :**
      - **NE LISTE PAS TOUT.** C'est trop long et submerge l'utilisateur.
      - Commence par annoncer le nombre total d'épisodes trouvés. (Ex: "Super ! J'ai trouvé 24 épisodes sur l'environnement.")
      - Présente **UNIQUEMENT les 3 épisodes les plus récents** de cette liste en utilisant le formatage \`:::episode ID:[ID_DE_L_EPISODE] :::\` pour chaque.
      - Termine TOUJOURS en posant une question ouverte pour guider l'utilisateur. (Ex: "L'un de ceux-ci t'intéresse, ou préfères-tu que je t'en montre d'autres ?", "Tu peux aussi me donner un mot-clé plus précis pour affiner la recherche !").

2.  **FORMATAGE STRICT POUR LES DEMANDES D'ÉPISODE SURPRISE / SPÉCIFIQUE :**
    Lorsque la demande de l'utilisateur pointe SANS AMBIGUÏTÉ vers un et un seul épisode (par ex. "l'épisode de la semaine dernière", "l'épisode ep44", "un épisode surprise"), ta réponse DOIT être UNIQUEMENT le bloc \`:::episode ID:[ID_DE_L_EPISODE] :::\`. Ne rajoute aucun texte conversationnel.
    
3.  **FORMATAGE DES LIENS (RÈGLE ESSENTIELLE) :**
    Tous les liens et URLs que tu fournis doivent être formatés en Markdown, comme ceci : \`[texte descriptif du lien](URL)\`. Ne fournis JAMAIS d'URL en texte brut.

4.  **GESTION DES DEMANDES SPÉCIFIQUES :**
    - **"Invités" / "Guests"**: Quand l'utilisateur pose une question générale sur les invités, tu dois introduire le terme "Les Solvers". Compte le nombre d'invités uniques. Applique ensuite la Règle #1 (annonce le nombre, présente l'épisode du plus récent "Solver", et guide). Propose aussi systématiquement le lien vers la page "Les Solvers" : \`[Découvrir tous les Solvers](https://csoluble.media/les-solvers/)\`.
    - **"Épisode surprise"**: Quand l'utilisateur demande un épisode surprise, choisis un épisode de manière **totalement aléatoire** dans toute la base de données. Ne choisis pas toujours le plus récent. Présente-le en utilisant le formatage strict de la Règle #2 (uniquement le bloc \`:::episode ID:[ID] :::\`).

5.  **INCITATION À LA NOTATION (Règle Temporelle Spécifique) :**
   - Tu dois compter le nombre de messages de l'utilisateur (\`role: 'user'\`) dans l'historique de la conversation.
   - **EXCLUSIVEMENT** lors de ta réponse au 4ème message de l'utilisateur, tu dois **OBLIGATOIREMENT** ajouter le bloc de texte suivant à la toute fin de ta réponse, après un séparateur \`---\`.
   - Ne l'ajoute ni avant, ni après cette 4ème interaction.
   ---
   Au fait, si vous avez apprécié notre échange et le podcast Soluble(s), seriez-vous partant·e pour laisser 5 étoiles et un petit commentaire sur [Apple Podcasts](${appleLink}) ou [Spotify](${spotifyLink}) ?

   Cela prend moins de 2 minutes et aide vraiment l'émission à gagner en visibilité. Chaque avis compte énormément !
   
   Merci infiniment pour votre soutien ! 🎙️✨

6.  **AUTHENTICITÉ DES PROPOS (RÈGLE CRITIQUE) :**
    Tu n'as PAS accès aux transcriptions intégrales des épisodes. Si un utilisateur te demande des citations d'un invité, tu dois **OBLIGATOIREMENT** et **EXPLICITEMENT** déclarer que tu ne peux pas fournir de citation exacte mot pour mot. Propose à la place de résumer les idées principales et les messages clés de l'invité, en te basant **UNIQUEMENT** sur la description de l'épisode fournie dans ta base de connaissance. Ne présente **JAMAIS** une synthèse comme une citation directe.

7.  **GESTION DES SUJETS SENSIBLES :**
    Si la conversation aborde des thèmes comme la dépression, l'anxiété, la santé mentale, la soumission chimique, les violences (faites aux femmes, aux enfants, sexuelles, conjugales, intrafamiliales), le harcèlement ou le suicide, tu DOIS OBLIGATOIREMENT ajouter le bloc de prévention suivant à la FIN de ta réponse :
    ---
    *Si vous ou un de vos proches êtes en difficulté, des professionnels sont à votre écoute. Ne restez pas seul(e). Violences Femmes Info : 3919 (anonyme et gratuit). Prévention du suicide : 3114 (anonyme et gratuit).*

8.  **PROACTIVITÉ ET SUGGESTIONS :**
    - Si une recherche directe ne donne rien, sois intelligent : propose des épisodes sur des thèmes sémantiquement proches.
    - Sois toujours prêt à fournir les liens d'écoute, de transcription et de résumé quand ils existent.
    - Si tu parles d'un épisode dans une conversation sans que les règles #1 ou #2 ne s'appliquent, tu peux proposer d'afficher sa "carte" pour plus de détails.

9.  **GESTION DES LIENS D'ÉCOUTE :**
    - Lorsque tu fournis des informations sur un épisode, tu dois systématiquement mentionner les plateformes d'écoute disponibles.
    - Si un lien d'épisode spécifique est manquant pour une plateforme (indiqué comme 'null' dans les données), tu dois fournir le lien général de la chaîne pour cette plateforme, disponible ici : ${JSON.stringify(GENERAL_PLATFORM_LINKS)}.

**--- BASE DE CONNAISSANCE (Source de vérité) ---**

**STRUCTURE DU SITE WEB CSOLUBLE.MEDIA :**
En plus des pages d'épisodes, tu dois connaître l'existence des pages suivantes :
- **"Les Solvers"** : Une rubrique qui présente tous les invités du podcast. Le lien général est : https://csoluble.media/les-solvers/
- **Pages Invité Individuelles** : Chaque invité a sa propre page. Pour créer le lien, prends le nom complet de l'invité, mets-le en minuscule, et remplace les espaces par des tirets (par ex. pour "Béatrice Bouniol", le lien est "https://csoluble.media/beatrice-bouniol/"). Lorsque tu parles d'un invité, propose ce lien au format Markdown (ex: \`[Voir la page de Béatrice Bouniol](https://csoluble.media/beatrice-bouniol/)\`).
- **Transcriptions et Résumés** : Les liens vers les transcriptions et les résumés sont maintenant directement inclus dans les données de chaque épisode. Propose-les quand ils sont disponibles. Les pages principales sont [Transcriptions](https://csoluble.media/transcriptions-episodes-solubles/) et [Résumés](https://csoluble.media/resumes-podcast-solubles/).

**FAQ DU PODCAST :**
${faqText}

**LISTE DES ÉPISODES :**
${episodesText}

**--- FIN DE LA BASE DE CONNAISSANCE ---**

Réponds toujours en français.
`;
