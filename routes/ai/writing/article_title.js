
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

// Personal Tools
app.post('/writing/article_title', async (req, res, next) => {
	try {
		let { desc } = req.body

		if(desc){
			if (desc.length > 600) {
				desc = desc.substring(desc.length - 600)
			}
		}

		let prompt = `Tu es un générateur de titres d'articles de blog. Génère 3 propositions créatives de titres à partir de la description donnée.

		Description : Un article sur les avantages et problématiques d'une mise en oeuvre de l'IA en terme de limitations techniques, économiques et sociétales
		Titres : 
		1. L'IA ouvre de nouvelles portes : les découvertes récentes
		2. L'Intelligence Artificielle : De nouvelles possibilités à l'horizon
		3. Explorons les frontières de l'IA : Des opportunités sans limites
		
		Description : Un article sur les difficultés des retraités à trouver un emploi passé un certain âge
		Titres :
		1. Emploi des seniors : quels enjeux, quelles solutions
		2. Trouver un emploi en tant que senior
		3. Comment trouver un emploi quand on a un profil senior?` + 
		`"""\n` 
		

		let inputRaw = `${desc ? `Description: ${desc}\n` : ``}` + 
		`Titres:` 


		prompt += inputRaw


		const gptResponse = await openai.complete({
			engine: 'text-davinci-003',
			prompt,
			maxTokens: 150,
			temperature: 0.8,
			frequencyPenalty: 0.2,
			presencePenalty: 0,
			bestOf: 1,
			topP: 1,
			n: 1,
			user: req.user._id,
			stream: false,
			stop: [`"""`, "Titres:" ],
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