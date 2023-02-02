const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1MVFqwKlK5hiJW7iQcDvyJ9r",
		entry: "price_1MUE0LKlK5hiJW7iKmhVs0bT",
		plus: "price_1MUE2QKlK5hiJW7i5ewPBUu2",
		pro: "price_1MT4s2KlK5hiJW7iNSWcFwMQ"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://app.blogassist.fr",
	stripe: {
		free: "price_1MVFqwKlK5hiJW7iQcDvyJ9r",
		entry: "price_1MUE0LKlK5hiJW7iKmhVs0bT",
		plus: "price_1MUE2QKlK5hiJW7i5ewPBUu2",
		pro: "price_1MKISQKDl4BWQxUPCjluSykk"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;