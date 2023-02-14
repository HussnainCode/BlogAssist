import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Reformulation de texte",
	desc: "Reformulez un texte",
	category: "Syntaxe",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-400",
	toColor: "green-600",

	to: "/ai/syntax/reformulation",
	api: "/ai/syntax/reformulation",

	output: {
		title: "Texte reformulé",
		desc: "Votre texte reformulé",
		Icon: false,
		color: "green",
	},

	prompts: [{
		title:"Texte à reformuler",
		desc: "Une phrase ou un paragraphe que vous souhaitez reformuler",
		// n: 1,
		prompts: [{ 
				title: "Texte", 
				attr: "content",  
				value: "", 
				placeholder: "Texte...", 
				label: "",
				type: "textarea",
				maxLength: 1000,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "La pleine lune est la phase lunaire durant laquelle la face visible de la Lune, vue depuis la Terre, apparaît entièrement illuminée par le Soleil. La pleine lune est le contraire de la nouvelle lune, phase durant laquelle la Lune n'est pas visible depuis la Terre.",
			},
		],
		example: {
			// output: "",
			outputs: [
				"Lorsque la face visible de la Lune, vue depuis la Terre, est entièrement éclairée par le Soleil, on parle de pleine lune. Cette phase lunaire est l'opposé de la nouvelle lune, période durant laquelle la Lune est invisible.",
			],
			// Icon: RefreshIcon,
			color: "green",
		}
	}]
		
}

export default obj

