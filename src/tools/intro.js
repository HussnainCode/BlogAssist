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
				example: "L'intelligence artificielle dans le monde de demain.",
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
				example: "Etudiants, universitaires",
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
				example: "Un article sur les avancées technologiques de l'intelligence artificielle et de son futur rôle dans la société.",
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
				example: "Intelligence artificielle, technologie.",
			},
		],
		example: {
			output: "L’intelligence artificielle est l’une des technologies les plus prometteuses de notre ère et elle jouera un rôle important dans le monde de demain. De plus en plus d’entreprises et de gouvernements s’intéressent à l’IA et à ses possibilités infinies. Dans cet article, nous allons examiner l’intelligence artificielle et son rôle dans le monde de demain. Nous verrons comment l’IA peut nous aider à atteindre des objectifs plus ambitieux et à créer un monde plus sûr et plus prospère.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

