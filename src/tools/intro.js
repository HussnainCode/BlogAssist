import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Introduction",
	desc: "Créez une introduction pour votre article",
	category: "Rédaction",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "blue-600",

	to: "/ai/writing/intro",
	api: "/ai/writing/intro",

	output: {
		title: "Introduction",
		desc: "Votre introduction générée",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Écrire une introduction",
		desc: "Décrivez le sujet de votre article.",
		// n: 1,
		prompts: [
			{ 
				title: "Titre", 
				attr: "title",  
				value: "", 
				placeholder: "Titre", 
				label: "Le titre de votre article.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Optimiser le contenu de ses blogs; une stratégie SEO efficace ?",
			},
			{ 
				title: "Audience", 
				attr: "audience",  
				value: "", 
				placeholder: "Audience cible", 
				label: "A qui s'adresse votre article",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Bloggers, rédacteurs d'articles en ligne",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "Description du sujet...", 
				label: "Description du sujet de votre article",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "Un article sur l'importance et l'utilité de l'optimisation du contenu sur son blog afin de toucher une plus large audience et améliorer son référencement SEO.",
			},
			{ 
				title: "Mots-clés", 
				attr: "keywords",  
				value: "", 
				placeholder: "Mots-clés que vous souhaitez voir apparaître", 
				label: "Quelques mots clés que vous souhaitez voir apparaître",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "SEO, référencement, conseils",
			},
		],
		example: {
			output: `Si vous êtes ici, il est probable que vous souhaitiez améliorer votre référencement en ligne et maximiser la visibilité de votre blog. C'est une excellente décision, car dans l'univers numérique d'aujourd'hui, le SEO (Search Engine Optimization) joue un rôle clé pour attirer l'attention des moteurs de recherche. En optimisant le contenu de vos articles pour le SEO, vous pouvez améliorer votre référencement et atteindre une audience plus large, ce qui peut conduire à un engagement accru et une plus grande reconnaissance en ligne. Cependant, il peut être difficile de savoir comment optimiser correctement le contenu de vos articles pour le SEO. C'est pourquoi nous sommes là pour vous aider ! 
			Dans cet article, nous allons explorer les techniques pour optimiser le contenu de vos blogs pour le SEO, en vous fournissant des conseils pratiques pour vous aider à atteindre vos objectifs. Nous aborderons des sujets tels que la recherche de mots-clés pertinents, la structure de votre contenu, la longueur des articles, etc. Alors, si vous êtes prêt à découvrir comment optimiser le contenu de vos blogs pour le SEO, restez avec nous !`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

