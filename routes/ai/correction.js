
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/syntax/correction', async (req, res, next) => {
	try {
		let { content } = req.body
  
	let prompt = `Corrige le paragraphe suivant de toute faute orthographique/syntaxique en reformulant les mauvaises formulation si nécessaire:
	La pleine lune es la phase lunaire durant laquelle la face visible de la Lune, depui la Terre, apparaître entièrement illuminé par le Soleil. La pleine lune es le contraire de la nouvelle lune, fase durant laquelle la Lune n'est pas visible depui la Terre.
	La pleine lune est la phase lunaire durant laquelle la face visible de la Lune, vue depuis la Terre, apparaît entièrement illuminée par le Soleil. La pleine lune est le contraire de la nouvelle lune, phase durant laquelle la Lune n'est pas visible depuis la Terre.` 

	let inputRaw = `Texte: ${content}\nTexte corrigé:`
	prompt += inputRaw

	const gptResponse = await openai.complete({
		engine: 'text-davinci-003',
		prompt,
		maxTokens: 700,
		temperature: 0,
		topP: 1,
		frequencyPenalty: 1,
		presencePenalty: 0,
		bestOf: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	// let outputs = []

	// if(gptResponse.data.choices[0].text){
	// 	// Split break lines
	// 	outputs = `1.${gptResponse.data.choices[0].text}`.split('\n')

	// 	// remove entries with spaces or empty
	// 	outputs = outputs.filter(function(output) {
	// 		return (!(output === "" || output === " " || output === "\n"))
	// 	})

	// 	// remove numbers and spaces
	// 	for (let i = 0; i < outputs.length; i++) {
	// 		outputs[i] = outputs[i].substring(3)
	// 		outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
	// 	}
	// 	// remove duplicates
	// 	outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)
	// }

	// req.locals.input = prompt
	// req.locals.inputRaw = inputRaw
	// req.locals.outputs = outputs

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

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app