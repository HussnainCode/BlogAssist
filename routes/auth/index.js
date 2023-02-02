const db = require("../models");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const stripe = require("../middlewares/stripe")
const express = require('express');

// Prepare Core Router
let app = express.Router()


const checkDuplicateUsernameOrEmail = async (req, res, next) => {
	// Username
  
	// Check if req.body.email is a valid email address
	if (!req.body.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req.body.email)) {
	  return res.status(400).json({
		message: "Veuillez entrer un e-mail valide"
	  });
	}
  
	// check if req.body.lname is a valid last name
	if (!req.body.lname || !/^[a-zA-Z]+$/.test(req.body.lname)) {
	  return res.status(400).json({
		message: "Veuillez entrer un nom de famille valide"
	  });
	}
  
  
	// check if req.body.fname is a valid first name
	if (!req.body.fname || !/^[A-Za-z]+$/.test(req.body.fname)) {
	  return res.status(400).json({
		message: "Veuillez entrer un prénom valide"
	  });
	}
  
	// Check if req.body.password is at least 6 characters long
	if (!req.body.password || req.body.password.length < 6) {
		return res.status(400).json({
		  message: "Le mot de passe doit avoir au moins 6 caractères"
	  });
	}
  
	User.findOne({
	  email: req.body.email
	}).exec((err, user) => {
	  if (err) {
		res.status(500).json({
		   message: err 
		});
		return;
	  }
  
	  if (user) {
		res.status(400).json({ 
		  message: "Erreur! Cet e-mail est déjà utilisé."
		});
		return;
	  }
  
	  next();
  
	});
  };

const signup = async (req, res) => {

	// const customer = await stripe.customers.create({
	// 	email: `${req.body.email}`,
	// 	name: `${req.body.fname} ${req.body.lname}`
	// });

	let referrerObj = {}
	console.log(`req.body.referral`,req.body.referral)
	if(req.body.referral){
		let referrer = await User.findOne({
			referralId: `${req.body.referral}`
		});
		console.log(`referrer._id`,referrer)
		if(referrer){
			referrerObj = {
				referrer: referrer._id
			}
		}
	}

	console.log(`referrerObj`,referrerObj)
  
	const user = new User({
	  email: req.body.email,
	  fname: req.body.fname,
	  lname: req.body.lname,
	//   customerId: customer.id,
	  password: bcrypt.hashSync(req.body.password, 8),
	  ...referrerObj
	});
  
	user.save((err, user) => {
	  if (err) {
		res.status(500).json({ message: err });
		return;
	  }
	  signin(req, res);
	});
};
  
const signin = (req, res) => {
  
	// Check if req.body.email is a valid email address
	if (!req.body.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req.body.email)) {
	  return res.status(400).json({
		message: "Veuillez entrer un e-mail valide"
	  });
	}
  
	  // Check if req.body.password is at least 6 characters long
	  if (!req.body.password || req.body.password.length < 6) {
		return res.status(400).json({
		  message: "Le mot de passe doit avoir au moins 6 caractères"
	  });
	}
  
	User.findOne({
	  email: req.body.email
	})
	  .populate("roles", "-__v")
	  .exec((err, user) => {
		if (err) {
		  res.status(500).json({ message: err });
		  return;
		}
  
		if (!user) {
		  return res.status(404).json({ message: "Utilisateur non trouvé." });
		}
  
		var passwordIsValid = bcrypt.compareSync(
		  req.body.password,
		  user.password
		);
  
		if (!passwordIsValid) {
		  return res.status(401).send({
			token: null,
			message: "Mot de passe incorrect."
		  });
		}
  
		const userToken = {
		  _id: user._id,
		  email: user.email,
		  customerId: user.customerId,
		  accountType: user.accountType
		}
  
		var token = jwt.sign(userToken, "ebeb1a5ada5cf38bfc2b49ed5b3100e0", {
		  expiresIn: 86400 // 24 hours
		});
  
		let profile = {
			...user.toObject()
		}
		delete profile.password
	
  
		res.status(200).json({
		  token,
		  profile
		});
	  });
};

app.post("/signup", checkDuplicateUsernameOrEmail, signup)
app.post("/signin", signin);



module.exports = app