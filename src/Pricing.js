import React, { Component } from 'react';

import {
	BanIcon,
	DatabaseIcon,
	PencilIcon,
	MenuAlt1Icon,
	LightBulbIcon,
	UserCircleIcon,
  } from '@heroicons/react/solid'

import config from './config'

import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Pricing extends Component {



	render() {
	
	return (

		<>

{this.props.store.profile.status ? null :<div className="border-b border-gray-300 bg-white shadow-sm ">
                    <div className="container flex mx-auto px-4 md:px-28 flex select-none">
                           
                            <div className="relative text-gray-400 focus-within:text-green-500 flex flex-1 ">
                            </div>
                             <div 
                             onClick={this.props.store.handleLogout}
                             className="cursor-pointer text-lg flex py-3 px-6 xl:py-4 xl:px-8 hover:bg-gray-100 rounded-t-md font-medium transition items-center"><UserCircleIcon className="w-7 h-7 lg:mr-4 transition" />
                              <div className="hidden lg:block"> Déconnexion</div>
                            </div>


                        </div>
                        
                </div>}
			
			<div className="container mx-auto px-8 py-4 lg:px-28 lg:py-12 lg:pb-64 select-none">

		{this.props.store.profile.status ? null : <>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
				<img src="logo_blog.png" alt="logo" style={{borderRadius: "50%", objectFit: "cover", maxWidth: "200px", maxHeight: "80px"}} />
			</div>

			<h2 className="text-xl sm:text-2xl md:text-5xl text-gray-700 text-center">
				Démarrer
			</h2>
			<p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-14 mt-2 text-center">
				Intégrez dès maintenant Blog Assist dans vos outils de travail et économisez des heures de travail !
			</p></>} 

			<Grid>
				{this.props.store.profile.status ? null : 
				<Free  fromColor="gray-400" toColor="gray-500" baseURL={this.props.store.baseURL} api={this.props.store.api}/>} 
				<Entry fromColor="green-400" toColor="green-600" baseURL={this.props.store.baseURL} api={this.props.store.api} />
				<Plus fromColor="blue-400" toColor="blue-600" baseURL={this.props.store.baseURL} api={this.props.store.api} />
				<Premium fromColor="indigo-500" toColor="red-500" baseURL={this.props.store.baseURL} api={this.props.store.api} />
			</Grid>
		
			
</div>
</>)
}
  }

  
const Free = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

<div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
<div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Gratuit</div>
<div className="text-6xl text-black font-bold">0€</div>
<p className="mt-4 text-lg">
	Essayez avant de payer
</p>
<div className="divide-y divide-dashed divide-gray-300 mt-4">
	<div className="py-2 flex  items-center">
		<DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">10</span>{` x `}Credits</div>
	</div>
	<div className="py-2 flex  items-center">
		<MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">1000</span>{` x `}mots</div>
	</div>
	<div className="py-2 flex  items-center">
		<PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">Accès aux outils de rédaction</span></div>
	</div>
	<div className="py-2 flex  items-center">
		<PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">Accès aux outils syntaxiques</span></div>
	</div>
</div>
<div className="py-2 xl:flex hidden  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-white" /> 
	</div>
	
<form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.free} />
		{/* <input type="hidden" name="trial" value="true" /> */}
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Essayer</button>
</form>
</div>
</div>
</div>

const Entry = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Entry</div>
  <div className="text-6xl text-black font-bold">11,90€<span className="text-lg text-gray-400">/mois</span></div>
  <p className="mt-4 text-lg">
	  Besoin d'un petit coup de pouce de temps en temps ? Cette offre est faite pour vous
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
	  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">200</span>{` x `}Crédits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">12,000</span>{` x `}Mots</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils de rédaction</span></div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils syntaxiques</span></div>
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.entry} />
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Sélectionner</button>
</form>
</div>
</div>
</div>

const Plus = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Plus</div>
  <div className="text-6xl text-black font-bold">24,90€<span className="text-lg text-gray-400">/mois</span></div>
  <p className="mt-4 text-lg">
	  Intégrez Blog Assist à vos outils de travail
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
	  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">600</span>{` x `}Credits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">35,000</span>{` x `}Mots</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils de rédaction</span></div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils syntaxiques</span></div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <LightBulbIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils beta en avant première</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.entry} />
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Sélectionner</button>
</form>
</div>
</div>
</div>


const Premium = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"}  shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Pro</div>
  <div className="text-6xl text-black font-bold">89,90€<span className="text-lg text-gray-400">/mois</span></div>
  <p className="mt-4 text-lg">
	  Utilisez Blog Assist sans vous soucier des limites de crédits
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">2,000</span>{` x `}Crédits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">150,000</span>{` x `}Mots</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils de rédaction</span></div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils syntaxiques</span></div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <LightBulbIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Accès aux outils beta en avant première</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.pro} />
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Sélectionner</button>
</form>
</div>
</div>
</div>


const Grid = ({ children }) => <div className="grid grid-cols-1 gap-12 mt-4 xl:grid-cols-3 ">{children}</div>


export default Pricing