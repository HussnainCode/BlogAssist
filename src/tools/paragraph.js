import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Paragraphe",
	desc: "Créez un paragraphe de votre article",
	category: "Rédaction",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "blue-600",

	to: "/ai/writing/paragraph",
	api: "/ai/writing/paragraph",

	output: {
		title: "Paragraphe",
		desc: "Votre paragraphe généré",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Rédiger un paragraphe d'article",
		desc: "Décrivez le sujet de votre article.",
		// n: 1,
		prompts: [
			{ 
				title: "Titre", 
				attr: "title",  
				value: "", 
				placeholder: "Titre", 
				label: "Le titre de votre paragraphe.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Comment faire le marketing de soi ",
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
				example: "Créateurs de contenu, influenceurs",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "Description du sujet...", 
				label: "Une description du sujet du paragraphe",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "Un paragraphe qui explique ce qu'est le marketing de soi et les meilleures manières de faire le marketing de soi sur les réseaux sociaux",
			},
		],
		example: {
			output: `Le marketing de soi est un moyen de promouvoir votre travail et votre image dans les médias, en particulier sur les réseaux sociaux. Que vous soyez créateur de contenu ou influenceur, c'est l'une des clés pour vous faire remarquer et pour réussir. Mais comment faire le marketing de soi ? Il s'agit de créer une présence en ligne qui reflète votre marque ou votre image, en partageant des informations sur vous-même et votre travail, en interagissant avec les autres et en trouvant des moyens d'attirer l'attention de votre public cible. Par exemple, publier du contenu de qualité sur vos réseaux sociaux, rejoindre des communautés en ligne qui correspondent à votre travail et à votre public et interagir avec les autres sur les réseaux sociaux sont autant de méthodes qui peuvent être utilisées pour le marketing de soi. En appliquant ces techniques, vous pourrez vous faire remarquer et réussir dans votre domaine.`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

