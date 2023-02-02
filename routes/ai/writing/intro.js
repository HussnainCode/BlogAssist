
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

// Personal Tools
app.post('/writing/intro', async (req, res, next) => {
	try {
		let { title, audience, desc, keywords } = req.body

		if(desc){
			if (desc.length > 600) {
				desc = desc.substring(desc.length - 600)
			}
		}

		// let prompt = `Génère une introduction sur un ton humoristique à partir des informations de Titre, audience, description et mots-clés données:\n"""\n` +

		// // Example 1
		// `Titre: SEO on-page : l'essentiel pour optimiser votre site web\n` + 
		// `${audience ? `Audience: Marketing, créateurs de site web\n` : ``}` + 
		// `${desc ? `Description: Un article sur l'utilité du SEO pour le référencement de son site web et une croissance organique.\n` : ``}` + 
		// `${keywords ? `Mots-clés: Référencement, trafic, SEO\n` : ``}` + 
		// `Introduction: La visibilité de votre site internet est l'un des facteurs clés de la réussite de votre entreprise. Si vous ne devez avoir qu'un seul objectif en termes de référencement, ce doit être de vous positionner dans les premiers résultats des moteurs de recherche. En effet, 75 % des clics des internautes proviennent de la première page de la SERP (Search Engine Result Page).\n` + 
		// `"""\n` +

		// // Example 2
		// `Titre: Comment faire le marketing de soi\n` + 
		// `${audience ? `Audience: Marketing\n` : ``}` + 
		// `${desc ? `Description: Un article sur les différentes manières de maîtriser son image en ligne en passant par un diagnostic et des solutions.\n` : ``}` + 
		// `${keywords ? `Mots-clés: branding, marketing, image\n` : ``}` + 
		// `Introduction: Se vendre ? Presque un gros mot en français. Pourtant, il faut savoir se marketer pour décrocher le job de ses rêves, valoriser son travail en interne, gravir les échelons ou provoquer la bonne rencontre au bon moment. Réseaux sociaux, entretien d’embauche, évaluation annuelle, meetups, recherche de prospects… les occasions de parler de soi sont nombreuses.\n` + 
		// `"""\n` +

		// // Example 3
		// `Titre: L'importance de l'intelligence artificielle dans le monde de demain\n` + 
		// `${audience ? `Audience: Gens intéressés par les nouvelles technologies\n` : ``}` + 
		// `${desc ? `Description: Un article sur le rôle de l'intelligence artificielle dans le monde de demain, de sa future utilisation, de son impact sur la société et de ses intérêts.\n` : ``}` + 
		// `${keywords ? `Mots-clés: Intelligence artificielle, technologie, monde\n` : ``}` + 
		// `Introduction: Avec une croissance annoncée de 21% pour le marché mondial en 2022, l’intelligence artificielle est un secteur qui semble avoir de belles années devant soi. Les récentes innovations dans le domaine ont effectivement montré que le développement de l’intelligence artificielle n’est pas près de s’arrêter. Comment l’intelligence artificielle va-t-elle révolutionner les méthodes de travail dans les années à venir ? Et comment préparer une future carrière dans ce domaine si passionnant ?\n` + 
		// `"""\n`

		let prompt = ` Ecris une introduction d'article de blog ayant avec les informations de Titre, Audience, description et mots clés donnés. Adopte un ton naturel qui donne envie de lire la suite de l'article. Fais apparaître les mots clés donnés dans l'introduction.
		Titre : SEO on-page : l'essentiel pour optimiser votre site web
		Audience : Marketing, créateurs de site web
		Description : Un article sur l'utilité du SEO pour le référencement de son site web et une croissance organique du trafic vers sont site
		Mots-clés : SEO, trafic
		Introduction : Si l’on insiste tant sur le SEO et si l’on en parle tellement, c’est parce que c’est en grande partie grâce à lui que l’on peut espérer avoir du trafic totalement gratuit en provenance des moteurs de recherche et plus précisément de Google de loin le plus utilisé. Il s’agit en fait d’un ensemble de techniques grâce auxquelles les sites Internet se positionnent sur les pages de résultats de Google et peuvent augmenter leur trafic.
		En SEO on distingue la partie On-Site de la partie Off-Site car elles se travaillent de manière totalement différente. En effet, comme son nom l’indique la partie On-Site consiste à optimiser tous les éléments internes au site alors que la partie Off-Site consiste à améliorer la popularité du site via l’acquisition de liens externes (aussi appelé backlinks).
		Si vous êtes blogueuse, entrepreneu.r.e sur le web ou encore e-commerçant.e et que vous souhaitez avoir une certaine visibilité sur les pages de résultats de recherche de Google, lisez la suite, car je vais vous dévoiler les 6 points essentiels de l’optimisation du SEO On Page.

		Titre : Coliving : vivre et travailler au même endroit font bon ménage
		Audience : freelance, digital nomades, indépendants
		Description : Un article sur la définition du coliving, ses origines et son application en pratique dans la vie des digital nomades.
		Mots-clés : coliving, indépendants, partager
		Introduction : Travailler, manger, dormir, vivre ensemble : certains freelances et indépendants ont décidé de vivre en communauté. Entre la colocation et le coworking, le coliving est un nouveau concept s’adressant essentiellement aux jeunes actifs et offrant un compromis entre le confort d’un chez soi et l’énergie créatrice que peut proposer un espace de co-working. Sujet émergent en France il y a quelques années, on en entend beaucoup parler du phénomène aujourd’hui. En quoi consiste le coliving au juste ? Focus sur le coliving.
		
		Titre : Se lancer en freelance en tant que développeur
		Audience : développeurs, ingénieurs logiciel
		Description: Un article sur comment se lancer en tant que freelance lorsque l'on est ingénieur ou développeur logiciel et sur les différentes astuces et conseils à connaître avant de se lancer
		Mots-clés : freelance, développement, conseils
		Introduction: Avez-vous déjà pensé à devenir freelance en tant que développeur ou ingénieur logiciel ? Vous n'êtes pas seul. De plus en plus de développeurs et d'ingénieurs optent pour le freelance et le nombre de freelances dans ces domaines augmente considérablement. Cependant, il n'est pas toujours facile de savoir comment se lancer. Dans cet article, je vais vous expliquer comment vous lancer en tant que freelance, vous donner des conseils pratiques et des informations cruciales avant de prendre votre décision. Nous aborderons également les craintes que vous pourriez avoir et comment les surmonter pour réussir votre projet de freelancing. Alors, prêt à vous lancer ?\n` +
		`"""\n`

		let inputRaw = `Titre: ${title}\n` + 
		`${audience ? `Audience: ${audience}\n` : ``}` + 
		`${desc ? `Description: ${desc}\n` : ``}` + 
		`${keywords ? `Mots-clés: ${keywords}\n` : ``}` + 
		`Introduction:` 


		prompt += inputRaw


		const gptResponse = await openai.complete({
			engine: 'text-davinci-003',
			prompt,
			maxTokens: 250,
			temperature: 0.7,
			frequencyPenalty: 0.2,
			presencePenalty: 0,
			bestOf: 1,
			topP: 1,
			n: 1,
			user: req.user._id,
			stream: false,
			stop: [`"""`, "Titre:","Audience:", "Introduction:" ],
		});

		let output = `${gptResponse.data.choices[0].text}`

		// remove the first character from output
		output = output.substring(1, output.length)

		// If the output string ends with one or more hashtags, remove all of them
		if (output.endsWith('"')) {
			output = output.substring(0, output.length - 1)
		}

		// If the output string ends with one or more hashtags, remove all of them
		if (output.endsWith('"')) {
			output = output.substring(0, output.length - 1)
		}

		// remove a single new line at the end of output if there is one
		if (output.endsWith('\n')) {
			output = output.substring(0, output.length - 1)
		}
	
		req.locals.input = prompt
		req.locals.inputRaw = inputRaw
		req.locals.output = output

		next()

	} catch (err) {
		console.log(err)
	}
  })

  module.exports = app