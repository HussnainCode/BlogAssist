
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

// Personal Tools
app.post('/writing/paragraph', async (req, res, next) => {
	try {
		let { title, audience, desc } = req.body

		if(desc){
			if (desc.length > 600) {
				desc = desc.substring(desc.length - 600)
			}
		}

		let prompt = `Ecris un paragraphe d'article à partir des informations de titre, description et audience du paragraphe. Adopte un ton naturel qui donne envie de lire l'article. Définis les termes techniques que tu utilises et donne des exemples pour illustrer tes propos. Le résultat doit être SEO-friendly pour optimiser le référencement de l'article par les moteurs de recherche.
		:\n"""\n` +

		// Example 1
		`Titre: Avantages et problématiques de la mise en oeuvre de l'Intelligence artificielle\n` + 
		`${audience ? `Audience: Entreprises\n` : ``}` + 
		`${desc ? `Description: Un paragraphe sur les avantages et problématiques d'une mise en oeuvre de l'IA en terme de limitations techniques, économiques et sociétales.\n` : ``}` + 
		`Paragraphe: La technologie de l'Intelligence Artificielle (IA) offre aux entreprises de nombreux avantages, mais elle peut aussi présenter des problèmes. Les petites et grandes entreprises doivent être conscientes des avantages et des problèmes liés à l'utilisation de l'IA avant de se lancer dans une mise en oeuvre.
		Les avantages liés à l'utilisation de l'IA sont variés. Par exemple, l'IA peut aider les entreprises à accélérer leurs processus et à améliorer leur efficacité en automatisant certaines tâches. Elle peut également aider les entreprises à prendre des décisions plus éclairées en se basant sur des données. Par exemple, une entreprise peut utiliser l'IA pour analyser ses données marketing et obtenir des informations qui lui permettront de prendre des décisions plus efficaces.
		Cependant, il existe également des problèmes liés à l'utilisation de l'IA. Les entreprises doivent être conscientes des risques liés à l'utilisation de l'IA, tels que les risques de sécurité et de préservation de la confidentialité des données et des informations. Il est également difficile de prévoir les conséquences à long terme de l'utilisation de l'IA, ce qui peut être une préoccupation pour les entreprises.\n` + 
		`"""\n` +

		// Example 2
		`Titre: Comment faire le marketing de soi\n` + 
		`${audience ? `Audience: Créateurs de contenu, influenceurs\n` : ``}` + 
		`${desc ? `Description: Un paragraphe qui explique ce qu'est le marketing de soi et les meilleures manières de faire le marketing de soi sur les réseaux sociaux.\n` : ``}` + 
		`Paragraphe: Le marketing de soi est un moyen de promouvoir votre travail et votre image dans les médias, en particulier sur les réseaux sociaux. Que vous soyez créateur de contenu ou influenceur, c'est l'une des clés pour vous faire remarquer et pour réussir. Mais comment faire le marketing de soi ? Il s'agit de créer une présence en ligne qui reflète votre marque ou votre image, en partageant des informations sur vous-même et votre travail, en interagissant avec les autres et en trouvant des moyens d'attirer l'attention de votre public cible. Par exemple, publier du contenu de qualité sur vos réseaux sociaux, rejoindre des communautés en ligne qui correspondent à votre travail et à votre public et interagir avec les autres sur les réseaux sociaux sont autant de méthodes qui peuvent être utilisées pour le marketing de soi. En appliquant ces techniques, vous pourrez vous faire remarquer et réussir dans votre domaine.\n` + 
		`"""\n` 
		

		let inputRaw = `Titre: ${title}\n` + 
		`${audience ? `Audience: ${audience}\n` : ``}` + 
		`${desc ? `Description: ${desc}\n` : ``}` + 
		`Paragraphe:` 


		prompt += inputRaw


		const gptResponse = await openai.complete({
			engine: 'text-davinci-003',
			prompt,
			maxTokens: 550,
			temperature: 0.8,
			frequencyPenalty: 0.2,
			presencePenalty: 0,
			bestOf: 1,
			topP: 1,
			n: 1,
			user: req.user._id,
			stream: false,
			stop: [`"""`, "Titre:","Audience:", "Paragraphe:" ],
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