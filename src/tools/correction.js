import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Correction de texte",
	desc: "Corrigez votre texte de toute erreur syntaxique.",
	category: "Syntaxe",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-400",
	toColor: "green-600",

	to: "/ai/syntax/correction",
	api: "/ai/syntax/correction",

	output: {
		title: "Texte corrigé",
		desc: "Votre texte corrigé",
		Icon: false,
		color: "green",
	},

	prompts: [{
		title:"Texte que vous souhaitez corriger",
		desc: "Une phrase ou un paragraphe dont vous souhaitez corriger/vérifier la syntaxe",
		// n: 1,
		prompts: [{ 
				title: "Texte", 
				attr: "content",  
				value: "", 
				placeholder: "Texte...", 
				label: "",
				type: "textarea",
				maxLength: 700,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "La pleine lune es la phase lunaire durant laquelle la face visible de la Lune, depui la Terre, apparaître entièrement illuminé par le Soleil. La pleine lune es le contraire de la nouvelle lune, fase durant laquelle la Lune n'est pas visible depui la Terre.",
			},
		],
		example: {
			// output: "",
			outputs: [
				"La pleine lune est la phase lunaire durant laquelle la face visible de la Lune, vue depuis la Terre, apparaît entièrement illuminée par le Soleil. La pleine lune est le contraire de la nouvelle lune, phase durant laquelle la Lune n'est pas visible depuis la Terre.",
			],
			// Icon: RefreshIcon,
			color: "green",
		}
	}]
		
}

export default obj

