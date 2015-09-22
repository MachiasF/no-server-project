var app = angular.module('dotaApp');

app.service('homeServ', function($http){
	this.homePlayers = [
		{
			playerIcon: 'app/images/nokly.jpg',
			playerName: 'Nokly',
			playerRole: 'Offlane',
			teamId: '50g'
		},
		{
			playerIcon: 'app/images/hideNSeek.jpg',
			playerName: 'Hide\'N\'Seek',
			playerRole: 'Midlane',
			teamId: '50g'
		},
		{
			playerIcon: 'app/images/tyrone.jpg',
			playerName: 'TyroneJamaal',
			playerRole: 'Jungler/Support',
			teamId: '50g'
		},
		{
			playerIcon: 'app/images/shadow.jpg',
			playerName: 'Shadower101',
			playerRole: 'Safelane Carry',
			teamId: '50g'
		},
		{
			playerIcon: 'app/images/mooch.jpg',
			playerName: 'PhantomDust',
			playerRole: 'Safelane Support',
			teamId: '50g'
		}
	];
	this.storeItems = [
		{
			productName: 'Hoodie',
			productCost: '$40.00',
			description: 'Zip up jacket with a hood.',
			productFront: 'app/images/Store/frontHoodie.png',
			productBack: 'app/images/Store/backHoodie.png'
		},
		{
			productName: 'Footie Pajamas',
			productCost: '$70.00',
			description: 'Adult size, full footie pajama.',
			productFront: 'app/images/Store/footie.png'
		},
		{
			productName: 'Coffee Mug',
			productCost: '$20.00',
			description: 'Last coffee mug you will ever need.',
			productFront: 'app/images/Store/mugFront.png',
			productBack: 'app/images/Store/mugBack.png'
		}
	];
});