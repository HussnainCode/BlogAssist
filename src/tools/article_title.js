import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Ecrire un titre",
	desc: "Donnez un titre à votre article",
	category: "Rédaction",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "blue-600",

	to: "/ai/writing/article_title",
	api: "/ai/writing/article_title",

	output: {
		title: "Titre généré",
		desc: "Propositions de titres pour votre article",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Description de votre article",
		desc: "Une description du sujet de votre article.",
		// n: 1,
		prompts: [{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "Description du sujet de votre article", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Un article sur les difficultés des retraités à trouver un emploi passé un certain âge",
			},
		],
		example: {
			// output: "",
			outputs: [
				"Emploi des seniors : quels enjeux, quelles solutions",
				"Trouver un emploi en tant que senior",
				"Comment trouver un emploi quand on a un profil senior?",
			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

