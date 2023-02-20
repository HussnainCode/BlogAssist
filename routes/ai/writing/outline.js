
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

// Personal Tools
app.post('/writing/outline', async (req, res, next) => {
	try {
		let { title, audience, desc } = req.body

		if(desc){
			if (desc.length > 600) {
				desc = desc.substring(desc.length - 600)
			}
		}

		let prompt = `Tu es un expert de rédaction web SEO. Génère un plan d'article en listant les points à aborder par ordre logique:\n"""\n` +

		// Example 1
		`Titre: SEO on-page : l'essentiel pour optimiser votre site web\n` + 
		`${audience ? `Audience: Marketing, créateurs de site web\n` : ``}` + 
		`${desc ? `Description: Un article sur l'utilité du SEO pour le référencement de son site web et une croissance organique.\n` : ``}` + 
		`Plan: 
		- Quels sont les idées reçues sur le SEO ?
		- Faire un audit SEO.
		- Utiliser les balises Title.
		- Employer les balises Hn.
		- Optimiser les images pour le SEO.
		- Optimiser l'UX de la page web.
		- Travailler le maillage interne.
		- Choisir la bonne URL.\n` + 
		`"""\n` +

		// Example 2
		`Titre: Comment faire le marketing de soi\n` + 
		`${audience ? `Audience: Marketing\n` : ``}` + 
		`${desc ? `Description: Un article sur les différentes manières de maîtriser son image en ligne en passant par un diagnostic et des solutions.\n` : ``}` + 
		`Plan: 
		- Qu'est ce que le marketing de soi ?
		- Le marketing de soi à l'ère des réseaux sociaux.
		- L'importance du marketing de soi.
		- Poser un auto diagnostic.
		- Etablir une stratégie marketing.
		- La personnalité avant les diplômes.
		- Savoir, savoir-faire et savoir-être.
		- Être authentique
		- Conclusion.\n` + 
		`"""\n` +

		// Example 3
		`Titre: L'importance de l'intelligence artificielle dans le monde de demain\n` + 
		`${audience ? `Audience: Gens intéressés par les nouvelles technologies\n` : ``}` + 
		`${desc ? `Description: Un article sur le rôle de l'intelligence artificielle dans le monde de demain, de sa future utilisation, de son impact sur la société et de ses intérêts.\n` : ``}` + 
		`Plan: 
		- Qu'est-ce que l'intelligence artificielle et à quoi sert-elle ?
		- Comment l'IA peut-elle révolutionner le monde de demain ?
		- Quels sont les avantages et inconvénients de l'IA ?
		- Comment l'IA peut-elle aider à résoudre des problèmes sociaux ?
		- Quels sont les défis et les risques liés à l'IA ?
		- Quelles sont les politiques et les réglementations en cours pour encadrer l'IA ?
		- Conclusion : comment devons-nous nous préparer pour le monde de demain avec l'IA ?\n` + 
		`"""\n`

		

		let inputRaw = `Titre: ${title}\n` + 
		`${audience ? `Audience: ${audience}\n` : ``}` + 
		`${desc ? `Description: ${desc}\n` : ``}` + 
		`Plan:
		- ` 


		prompt += inputRaw


		const gptResponse = await openai.complete({
			engine: 'text-davinci-003',
			prompt,
			maxTokens: 300,
			temperature: 0.8,
			frequencyPenalty: 0.2,
			presencePenalty: 0,
			bestOf: 1,
			topP: 1,
			n: 1,
			user: req.user._id,
			stream: false,
			stop: [`"""`, "Titre:","Audience:", "Plan:" ],
		});

		// let output = `${gptResponse.data.choices[0].text}`

		// // remove the first character from output
		// output = output.substring(1, output.length)

		// // If the output string ends with one or more hashtags, remove all of them
		// if (output.endsWith('"')) {
		// 	output = output.substring(0, output.length - 1)
		// }

		// // If the output string ends with one or more hashtags, remove all of them
		// if (output.endsWith('"')) {
		// 	output = output.substring(0, output.length - 1)
		// }

		// // remove a single new line at the end of output if there is one
		// if (output.endsWith('\n')) {
		// 	output = output.substring(0, output.length - 1)
		// }
	
		// req.locals.input = prompt
		// req.locals.inputRaw = inputRaw
		// req.locals.output = output

		let outputs = []

		if(gptResponse.data.choices[0].text){
			// Split break lines
			outputs = `1.${gptResponse.data.choices[0].text}`.split('\n')

			// remove entries with spaces or empty
			outputs = outputs.filter(function(output) {
				return (!(output === "" || output === " " || output === "\n"))
			})

			// remove numbers and spaces
			for (let i = 0; i < outputs.length; i++) {
				outputs[i] = outputs[i].substring(3)
				outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
			}
			// remove duplicates
			outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)
		}

		req.locals.input = prompt
		req.locals.inputRaw = inputRaw
		req.locals.outputs = outputs

		next()

	} catch (err) {
		console.log(err)
	}
  })

  module.exports = app