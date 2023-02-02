const db = require("../../models");
const User = db.user;

const creditCheck = async (req, res, next) => {

	let user = await User.findOne({ _id: req.user._id })

	if(user.credits > 0){
		next()
	} else {
		// res.statusMessage = 'No Credit Remaining';
		// res.sendStatus(401)
		res.json({
			success: false,
			credits: 0,
			error: "No Credits",
			message: "Vous n'avez plus de crédits, veuillez changer de plan depuis votre espace."
		})
		return
	}
}


module.exports = creditCheck