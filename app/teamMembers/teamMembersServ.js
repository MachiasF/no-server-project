var app = angular.module('dotaApp');

app.service('teamMemberServ', function($http){

	this.playersInfo = [
		{
			playerId: 152271131,
			details: false,
			playerIcon: 'app/images/nokly.jpg',
			teamId: '50g',
			playerName: 'Nokly',
			playerRole: 'Offlane',
			totalWins: 815,
			totalLosses: 690,
			winRate: 53.13 + '%',
			mostPlayedHero1: 
			{
				heroName: 'Vengeful Spirit',
				heroRole: 'Support',
				heroType: 'Agility',
				heroImage: 'app/images/heroes/vengefulspirit_full.png',
				bestKDA: 24,
				heroIntro: 'app/sound/Vng_spawn_01.mp3'
			},
			mostPlayedHero2:
			{
				heroName: 'Crystal Maiden',
				heroRole: 'Support',
				heroType: 'Intellect',
				heroImage: 'app/images/heroes/crystal_maiden_full.png',
				bestKDA: 21,
				heroIntro: 'app/sound/Cm_spawn_01.mp3'
			},
			mostPlayedHero3:
			{
				heroName: 'Sprectre',
				heroRole: 'Carry',
				heroType: 'Agility',
				heroImage: 'app/images/heroes/spectre_full.png',
				bestKDA: 36,
				heroIntro: 'app/sound/Spec_spawn_01.mp3'
			}	
		},
		{
			playerId: 86479497,
			details: false,
			playerIcon: 'app/images/hideNSeek.jpg',
			teamId: '50g',
			playerName: 'Hide\'N\'Seek',
			playerRole: 'Midlane',
			totalWins: 415,
			totalLosses: 335,
			winRate: 54.89 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Lifestealer',
					heroRole: 'Carry',
					heroType: 'Strength',
					heroImage: 'app/images/heroes/life_stealer_full.png',
					bestKDA: 36,
					heroIntro: 'app/sound/Lifest_spawn_01.mp3'
				},
			mostPlayedHero2: 
				{	heroName: 'Disruptor',
					heroRole: 'Support',
					heroType: 'Intellect',
					heroImage: 'app/images/heroes/disruptor_full.png',
					bestKDA: 34,
					heroIntro: 'app/sound/Dis_spawn_01.mp3' 
				},
			mostPlayedHero3: 
				{
					heroName: 'Legion Commander',
					heroRole: 'Carry',
					heroType: 'Strength',
					heroImage: 'app/images/heroes/legion_commander_full.png',
					bestKDA: 21,
					heroIntro: 'app/sound/Legcom_spawn_01.mp3'
				}
		},
		{
			playerId: 86480099,
			details: false,
			playerIcon: 'app/images/tyrone.jpg',
			teamId: '50g',
			playerName: 'TyroneJamaal',
			playerRole: 'Jungler/Support',
			totalWins: 309,
			totalLosses: 282,
			winRate: 52.02 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Mirana',
					heroRole: 'Carry',
					heroType: 'Agility',
					heroImage: 'app/images/heroes/mirana_full.png',
					bestKDA: 17,
					heroIntro: 'app/sound/Mir_spawn_01.mp3'
				},
			mostPlayedHero2: 
				{
					heroName: 'Storm Spirit',
					heroRole: 'Carry',
					heroType: 'Intellect',
					heroImage: 'app/images/heroes/storm_spirit_full.png',
					bestKDA: 11.33,
					heroIntro: 'app/sound/Ss_spawn_01.mp3'
				},
			mostPlayedHero3: 
				{
					heroName: 'Ogre Magi',
					heroRole: 'Support',
					heroType: 'Intellect',
					heroImage: 'app/images/heroes/ogre_magi_full.png',
					bestKDA: 35,
					heroIntro: 'app/sound/Ogmag_spawn_01.mp3'
				}
		},
		{
			playerId: 173282682,
			details: false,
			playerIcon: 'app/images/shadow.jpg',
			teamId: '50g',
			playerName: 'Shadower101',
			playerRole: 'Safelane Carry',
			totalWins: 105,
			totalLosses: 94,
			winRate: 51.47 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Necrophos',
					heroRole: 'Carry',
					heroType: 'Intellect',
					heroImage: 'app/images/heroes/necrolyte_full.png',
					bestKDA: 21,
					heroIntro: 'app/sound/Necr_spawn_01.mp3'
				},
			mostPlayedHero2: 
				{
					heroName: 'Bristleback',
					heroRole: 'Carry',
					heroType: 'Strength',
					heroImage: 'app/images/heroes/bristleback_full.png',
					bestKDA: 36,
					heroIntro: 'app/sound/Bristle_spawn_01.mp3'
				},
			mostPlayedHero3: 
				{
					heroName: 'Weaver',
					heroRole: 'Carry',
					heroType: 'Agility',
					heroImage: 'app/images/heroes/weaver_full.png',
					bestKDA: 36,
					heroIntro: 'app/sound/Weav_spawn_01.mp3'
				}
		},
		{
			playerId: 82553055,
			details: false,
			playerIcon: 'app/images/mooch.jpg',
			teamId: '50g',
			playerName: 'PhantomDust',
			playerRole: 'Safelane Support',
			totalWins: 149,
			totalLosses: 106,
			winRate: 57.53 + '%',
			mostPlayedHero1: 
				{
					heroName: 'Earthshaker',
					heroRole: 'Support',
					heroType: 'Strength',
					heroImage: 'app/images/heroes/earthshaker_full.png',
					bestKDA: 25,
					heroIntro: 'app/sound/Erth_spawn_01.mp3'
				},
			mostPlayedHero2: 
				{
					heroName: 'Wraith King',
					heroRole: 'Carry',
					heroType: 'Strength',
					heroImage: 'app/images/heroes/wraith_king_full.png',
					bestKDA: 29,
					heroIntro: 'app/sound/Wraith_spawn_01.mp3'
				},
			mostPlayedHero3: 
				{
					heroName: 'Shadow Shaman',
					heroRole: 'Support',
					heroType: 'Intellect',
					heroImage: 'app/images/heroes/shadow_shaman_full.png',
					bestKDA: 7,
					heroIntro: 'app/sound/Shad_spawn_01.mp3'
				}
		}
	];
	var playerArray = this.playersInfo;
	this.routePlayer = function (user) {
		for (var i = 0; i < playerArray.length; i++){
			for (var playerName in playerArray[i]){
				if(playerArray[i].playerName === user){
					console.log(playerArray[i]);
					return playerArray[i];
				}
			}
		}
	};


});



// app.service('teamMemberStats', function($http, $q){
	
// 	var teamIdNum = '2274307'; // <---get id from team input.

// 	var teamUrlPrefix = 'https://api.steampowered.com/IDOTA2Match_570/GetTeamInfoByTeamID/v001/?key=A4BD264B738ED011EC85405CB5CCE91A&start_at_team_id=';
// 	var teamUrlsuffix = '&teams_requested=1&callback=JSON_CALLBACK';
	
// 	this.getTeamInfo = function() {
		

// 		return $http ({
// 			method: 'JSONP',
// 			url: teamUrlPrefix + teamIdNum + teamUrlsuffix
			
// 			}).then(function(data){
// 			var results = data;
// 			console.log(results);
// 		})
// 	}();
// });

		
// })
// app.service('rawTeamMemberStats', function($http, $q){
// 	var results = {
// 		result: {
// 			status: 1,
// 			teams: {
// 				team_id: 2274307,
// 				name: "Iron Branch Slap",
// 				tag: "50G",
// 				time_created: 1428087366,
// 				rating: "inactive",
// 				logo: 719789022271556367,
// 				logo_sponsor: 0,
// 				country_code: "",
// 				url: "",
// 				games_played_with_current_roster: 0,
// 				player_0_account_id: 82553055, mooch
// 				player_1_account_id: 86479497,	taylor
// 				player_2_account_id: 86480099,  jordan
// 				player_3_account_id: 152271131,	kalan
// 				player_4_account_id: 173282682, charlie
// 				admin_account_id: 152271131
// 			}
// 		}
// 	};

// 	var player1IdNum = results.result.teams.player_0_account_id;
// 	var player2IdNum = results.result.teams.player_1_account_id;
// 	var player3IdNum = results.result.teams.player_2_account_id;
// 	var player4IdNum = results.result.teams.player_3_account_id;
// 	var player5IdNum = results.result.teams.player_4_account_id;

// });