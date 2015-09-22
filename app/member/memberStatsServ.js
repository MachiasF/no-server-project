var app = angular.module('dotaApp');

app.service('memberStats', function($http, $q){

	this.playersInfo = [
		{
			playerName: 'Nokly',
			totalWins: 815,
			totalLosses: 690,
			winRate: 53.13 + '%',
			mostPlayedHero1: 
			{
				heroName: 'Vengeful Spirit',
				heroRole: 'Support',
				heroType: 'Agility',
				hero1Image: 'app/images/vs',
				bestKDA: 24
			},
			mostPlayedHero2:
			{
				heroName: 'Crystal Maiden',
				heroRole: 'Support',
				heroType: 'Intellect',
				hero1Image: 'app/images/cm',
				bestKDA: 21
			},
			mostPlayedHero3:
			{
				heroName: 'Sprectre',
				heroRole: 'Carry',
				heroType: 'Agility',
				hero1Image: 'app/images/spr',
				bestKDA: 36
			}	
		},
		{
			playerName: 'HideNSeek',
			totalWins: 415,
			totalLosses: 335,
			winRate: 54.89 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Lifestealer',
					heroRole: 'Carry',
					heroType: 'Strength',
					hero1Image: 'app/images/ls',
					bestKDA: 36
				},
			mostPlayedHero2: 
				{	heroName: 'Disruptor',
					heroRole: 'Support',
					heroType: 'Intellect',
					hero1Image: 'app/images/dis',
					bestKDA: 34 
				},
			mostPlayedHero3: 
				{
					heroName: 'Legion Commander',
					heroRole: 'Carry',
					heroType: 'Strength',
					hero1Image: 'app/images/lc',
					bestKDA: 21
				}
		},
		{
			playerName: 'TyroneJamaal',
			totalWins: 309,
			totalLosses: 282,
			winRate: 52.02 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Mirana',
					heroRole: 'Carry',
					heroType: 'Agility',
					hero1Image: 'app/images/mir',
					bestKDA: 17
				},
			mostPlayedHero2: 
				{
					heroName: 'Storm Spirit',
					heroRole: 'Carry',
					heroType: 'Intellect',
					hero1Image: 'app/images/ss',
					bestKDA: 11.33
				},
			mostPlayedHero3: 
				{
					heroName: 'Ogre Magi',
					heroRole: 'Support',
					heroType: 'Intellect',
					hero1Image: 'app/images/om',
					bestKDA: 35
				}
		},
		{
			playerName: 'Shadower101',
			totalWins: 105,
			totalLosses: 94,
			winRate: 51.47 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Necrophos',
					heroRole: 'Carry',
					heroType: 'Intellect',
					hero1Image: 'app/images/nec',
					bestKDA: 21
				},
			mostPlayedHero2: 
				{
					heroName: 'Bristleback',
					heroRole: 'Carry',
					heroType: 'Strength',
					hero1Image: 'app/images/bri',
					bestKDA: 36
				},
			mostPlayedHero3: 
				{
					heroName: 'Weaver',
					heroRole: 'Carry',
					heroType: 'Agility',
					hero1Image: 'app/images/wea',
					bestKDA: 36
				}
		},
		{
			playerName: 'PhantomDust',
			totalWins: 149,
			totalLosses: 106,
			winRate: 57.53 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Earthshaker',
					heroRole: 'Support',
					heroType: 'Strength',
					hero1Image: 'app/images/es',
					bestKDA: 25
				},
			mostPlayedHero2: 
				{
					heroName: 'Wraith King',
					heroRole: 'Carry',
					heroType: 'Strength',
					hero1Image: 'app/images/wk',
					bestKDA: 29
				},
			mostPlayedHero3: 
				{
					heroName: 'Shadow Shaman',
					heroRole: 'Support',
					heroType: 'Intellect',
					hero1Image: 'app/images/shsh',
					bestKDA: 7
				}
		}
	];
		
})