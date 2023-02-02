import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Plan",
	desc: "Créez un plan pour votre article",
	category: "Rédaction",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "blue-600",

	to: "/ai/writing/outline",
	api: "/ai/writing/outline",

	output: {
		title: "Plan",
		desc: "Votre plan généré",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Définir un plan",
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
				example: "L'intelligence artificielle dans le monde de demain.",
			},
			{ 
				title: "Audience", 
				attr: "audience",  
				value: "", 
				placeholder: "Freelance, créateurs de contenu, etc", 
				label: "A qui s'adresse votre article",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Etudiants, universitaires",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "Description du sujet...", 
				label: "Une description du sujet de votre article",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "Un article sur les avancées technologiques de l'intelligence artificielle et de son futur rôle dans la société.",
			},
		],
		example: {
			outputs: [
				"Qu'est-ce que l'intelligence artificielle et à quoi sert-elle ?",
				"Comment l'IA peut-elle révolutionner le monde de demain ?",
				"Quels sont les avantages et inconvénients de l'IA ?",
				"Comment l'IA peut-elle aider à résoudre des problèmes sociaux ?",
				"Quels sont les défis et les risques liés à l'IA ?",
				"Conclusion : comment devons-nous nous préparer pour le monde de demain avec l'IA ?",
			],
			// outputs: [],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

