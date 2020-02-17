(function() {
	function findData(uid) {
		for (var n = 0; n < window.see.SD.length; n++) {
			if (window.see.SD[n].uid === uid) {
				return window.see.SD[n];
			}
		}
		return null;
	}

	function addDefaultMap(uid) {
		var map = L.map('map').setView([49, 9], 7);

		//L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>'
				//,id: 'examples.map-i875mjb7'
		}).addTo(map);

		if (uid !== null) {
			var sd = findData(uid);
			if (sd !== null) {
				var ll = L.latLng(sd.coords[0], sd.coords[1]);
				L.marker(ll, {icon: L.AwesomeMarkers.icon({markerColor: sd.color, icon: 'heart', iconColor: 'white'})}).
					addTo(map).
					bindPopup('<a href="see_'+uid+'.html"><b>'+sd.name+'</b></a>');
				map.setView(ll, 14, {animate: true});
			}
		}
		return map;
	}

	function isMobileBrowser() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent);
	}

	function addFavFunctionality(uid) {
		if (typeof(Storage) !== 'undefined') {
			function defaultValues(bool) {
				if (bool) {
					return {
						'clazz': 'glyphicon glyphicon-heart',
						'color': '#dd6913'
					};
				} else {
					return {
						'clazz': 'glyphicon glyphicon-heart-empty',
						'color': 'black'
					};
				}
			}

			var isFav = false;
			if (localStorage.favs) {
				var favs = JSON.parse(localStorage.favs);
				if (favs.indexOf(uid) > -1) {
					isFav = true;
				}
			} else {
				localStorage.favs = JSON.stringify([]);
			}
			var initialValues = defaultValues(isFav),
				el = $("<span style='cursor:pointer;font-size:24px;color:"+
						initialValues.color+";' class='"+initialValues.clazz+"' aria-hidden='true'>&nbsp;</span>");
			el.click(function() {
				var favs = JSON.parse(localStorage.favs),
					favIdx = favs.indexOf(uid),
					vals;

				if (favIdx > -1) {
					favs.splice(favIdx, 1);
					vals = defaultValues(false);
				} else {
					favs.push(uid);
					vals = defaultValues(true);
				}
				localStorage.favs = JSON.stringify(favs);
				$(this).css('color', vals.color);
				$(this).removeClass();
				$(this).addClass(vals.clazz);
			});
			return el;
		}
		return null;
	}

	window.see = {
		SD: [{'uid': 'fbe28ee8101', 'name': 'Aalkistensee', 'color': 'green', 'coords': [48.9938974, 8.7615269],'infos': []},
{'uid': 'cf570eeb607', 'name': 'Aichstrutersee', 'color': 'green', 'coords': [48.90211, 9.63858],'infos': ['angeln', 'grillen', 'kiosk', 'spielplatz', 'wc']},
{'uid': 'e4532463a4b', 'name': 'Aileswasensee', 'color': 'green', 'coords': [48.60302, 9.26304],'infos': ['dusche', 'kiosk', 'wc']},
{'uid': '77f4c27c38b', 'name': 'Alatsee', 'color': 'green', 'coords': [47.5607312, 10.6373838],'infos': ['angeln', 'kiosk']},
{'uid': '4943f9cecb1', 'name': 'Alpsee', 'color': 'green', 'coords': [47.5493443,10.7184165],'infos': ['dusche', 'kiosk', 'spielplatz', 'wc']},
{'uid': 'dbfac41098c', 'name': 'Altshauser Weiher', 'color': 'green', 'coords': [47.9359256, 9.530586],'infos': ['dusche', 'eintritt', 'grillen', 'kiosk', 'opnv', 'spielplatz', 'surfen', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': '797575e3207', 'name': 'Althäuser See', 'color': 'green', 'coords': [49.2066635, 8.63194942],'infos': ['angeln', 'dusche', 'kiosk', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': 'ff0523d306a', 'name': 'Altmühlsee', 'color': 'green', 'coords': [49.1339312, 10.7204926],'infos': ['angeln', 'dusche', 'grillen', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'tischtennis', 'volleyball', 'wc']},
{'uid': '29ce156238c', 'name': 'Annasee', 'color': 'green', 'coords': [49.0627488, 9.3341778],'infos': ['grillen']},
{'uid': '33182121982', 'name': 'Argensee', 'color': 'green', 'coords': [47.77513, 9.92760],'infos': ['angeln', 'wc']},
{'uid': '8bbcac2b383', 'name': 'Arlesheimer See', 'color': 'green', 'coords': [47.9854843, 7.7455821],'infos': []},
{'uid': '1744bdc9645', 'name': 'Badesee Laibach', 'color': 'green', 'coords': [49.40642, 9.69586],'infos': []},
{'uid': '620c69d05c5', 'name': 'Badesee Schutterwald', 'color': 'green', 'coords': [48.46281, 7.89119],'infos': ['angeln', 'eintritt', 'fussball', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'c2a78fe2f9f', 'name': 'Badesee Unterer Railhof', 'color': 'red', 'coords': [49.31513, 9.76524],'infos': ['angeln']},
{'uid': 'fa85f57a77c', 'name': 'Badesee', 'color': 'green', 'coords': [49.31228, 8.64125],'infos': ['dusche', 'grillen', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': '698babafa52', 'name': 'Badesee Weldingsfelden', 'color': 'red', 'coords': [49.32932, 9.75167],'infos': ['angeln', 'grillen']},
{'uid': '872a18bff58', 'name': 'Baggersee Burkheim', 'color': 'green', 'coords': [48.095026, 7.580910],'infos': ['grillen']},
{'uid': '47cef2f9363', 'name': 'Baggersee Burkwang', 'color': 'green', 'coords': [47.6923, 10.07613],'infos': ['angeln', 'grillen']},
{'uid': 'd0e38486b05', 'name': 'Baggersee Hochstetten', 'color': 'orange', 'coords': [49.15077, 8.38843],'infos': ['angeln', 'tauchen', 'wc']},
{'uid': '5e66e5ac1c1', 'name': 'Baggersee Jockgrim', 'color': 'green', 'coords': [49.09112442, 8.29283237],'infos': ['kiosk', 'spielplatz', 'surfen', 'tauchen']},
{'uid': '8ea194a54b3', 'name': 'Baggersee Pfullendorf', 'color': 'green', 'coords': [47.9288666, 9.23500657],'infos': ['angeln', 'dusche', 'eintritt', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'volleyball', 'wc']},
{'uid': 'c90384d7c56', 'name': 'Baggersee Schuttern', 'color': 'green', 'coords': [48.40206698, 7.861272],'infos': ['angeln', 'fussball', 'grillen', 'kiosk', 'restaurant', 'spielplatz', 'tauchen', 'tischtennis', 'volleyball', 'wc']},
{'uid': '7b5bd260bfd', 'name': 'Bannwaldsee', 'color': 'green', 'coords': [47.603022, 10.777768],'infos': ['kiosk', 'opnv', 'spielplatz', 'surfen', 'tischtennis', 'volleyball', 'wc']},
{'uid': '5e4d7fb9a01', 'name': 'Bergsee', 'color': 'green', 'coords': [47.57131078, 7.9350943],'infos': ['angeln', 'restaurant', 'wc']},
{'uid': '8497b6adb07', 'name': 'Beutwangsee', 'color': 'green', 'coords': [48.6128672, 9.3007291],'infos': ['angeln', 'dusche', 'grillen', 'kiosk', 'spielplatz', 'wc']},
{'uid': '7995c759264', 'name': 'Biesenweiher', 'color': 'green', 'coords': [47.67654223, 10.04513025],'infos': ['angeln', 'spielplatz']},
{'uid': '25f63d11a80', 'name': 'Blausee', 'color': 'green', 'coords': [49.29010, 8.50266],'infos': ['angeln', 'grillen', 'kiosk', 'volleyball', 'wc']},
{'uid': '7dfd8c17c89', 'name': 'Blautopf', 'color': 'green', 'coords': [48.41603552, 9.78394056],'infos': ['kiosk', 'restaurant', 'wc']},
{'uid': '6ac21db007f', 'name': 'Brechtsee', 'color': 'orange', 'coords': [49.21726555, 8.4088682],'infos': ['tauchen']},
{'uid': 'cfb278822c5', 'name': 'Breitenauer See', 'color': 'green', 'coords': [49.1221099, 9.3854587],'infos': ['angeln', 'dusche', 'eintritt', 'fussball', 'grillen', 'kiosk', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'd3e273e4ff6', 'name': 'Buchhorner See', 'color': 'green', 'coords': [49.15397, 9.50153],'infos': ['angeln', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'wc']},
{'uid': 'efe0673f025', 'name': 'Buchtzigsee', 'color': 'orange', 'coords': [48.91787, 8.36917],'infos': ['dusche', 'grillen', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'bafa6082d52', 'name': 'Buhlbachsee', 'color': 'green', 'coords': [48.5012261, 8.2448209],'infos': []},
{'uid': '67999ab34ea', 'name': 'Bömbachsee', 'color': 'orange', 'coords': [48.55362, 8.59205],'infos': ['grillen']},
{'uid': 'ab907144396', 'name': 'Degenbachstausee', 'color': 'green', 'coords': [49.09124, 10.09117],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': 'ebed62754a9', 'name': 'Deglersee', 'color': 'orange', 'coords': [48.87176, 8.14543],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': '23a63bfd46b', 'name': 'Diebachsee', 'color': 'orange', 'coords': [48.9864386, 9.7147922],'infos': ['fussball', 'grillen', 'volleyball']},
{'uid': '827b70c7e28', 'name': 'Ebnisee', 'color': 'green', 'coords': [48.92389, 9.60859],'infos': ['angeln', 'grillen', 'kiosk', 'restaurant', 'spielplatz', 'wc']},
{'uid': '3f755da9a2b', 'name': 'Egelsee', 'color': 'green', 'coords': [47.86438, 9.68552],'infos': []},
{'uid': 'dd344031e85', 'name': 'Ehmetsklinge', 'color': 'green', 'coords': [49.05639, 8.91289],'infos': ['angeln', 'kiosk', 'spielplatz', 'wc']},
{'uid': '0ee4acf4112', 'name': 'Eisenbachsee', 'color': 'green', 'coords': [48.85247, 9.67443],'infos': ['angeln', 'grillen', 'kiosk', 'opnv', 'wc']},
{'uid': '0424fbb26b2', 'name': 'Ellbachsee', 'color': 'green', 'coords': [48.4839794, 8.30514242],'infos': []},
{'uid': 'ac706b4a062', 'name': 'Elsenzsee', 'color': 'green', 'coords': [49.17505, 8.83088],'infos': ['kiosk', 'tischtennis', 'volleyball', 'wc']},
{'uid': '3ea3778f28a', 'name': 'Ensinger See', 'color': 'red', 'coords': [48.9629763, 8.96458626],'infos': ['angeln', 'grillen', 'spielplatz']},
{'uid': '25a527fc909', 'name': 'Epplesee', 'color': 'green', 'coords': [48.96570, 8.32841],'infos': ['angeln', 'dusche', 'kiosk', 'opnv', 'surfen', 'volleyball', 'wc']},
{'uid': '5951b4acd90', 'name': 'Erlachsee', 'color': 'green', 'coords': [48.68877899, 9.2982316],'infos': []},
{'uid': '93782d2f0fd', 'name': 'Erleweiher', 'color': 'green', 'coords': [48.1338565, 7.7009632],'infos': ['dusche', 'kiosk', 'opnv', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': '2772a585816', 'name': 'Erlichsee', 'color': 'green', 'coords': [49.26515, 8.49449],'infos': ['angeln', 'grillen', 'kiosk', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'volleyball', 'wc']},
{'uid': '16057468b8d', 'name': 'Eschacher Weiher', 'color': 'green', 'coords': [47.6957108, 10.19126232],'infos': ['wc']},
{'uid': '8d6d32b5f17', 'name': 'Espelsee', 'color': 'green', 'coords': [47.82581, 8.65461],'infos': ['dusche', 'kiosk', 'spielplatz', 'tauchen', 'wc']},
{'uid': '14903276a68', 'name': 'Ettwieser Weiher', 'color': 'green', 'coords': [47.75052014, 10.61148405],'infos': ['dusche', 'grillen', 'kiosk', 'spielplatz', 'wc']},
{'uid': '166f8cef886', 'name': 'Federsee', 'color': 'green', 'coords': [48.0836327, 9.6294503],'infos': ['kiosk', 'opnv', 'wc']},
{'uid': 'c4e05dcd67d', 'name': 'Feldsee', 'color': 'green', 'coords': [47.8707835, 8.0331298],'infos': ['restaurant']},
{'uid': '87c7855b5c1', 'name': 'Finsterroter See', 'color': 'green', 'coords': [49.09079, 9.49811],'infos': ['angeln', 'dusche', 'grillen', 'kiosk', 'spielplatz', 'wc']},
{'uid': '1386bd5d51e', 'name': 'Flückigersee', 'color': 'red', 'coords': [48.01006, 7.82090],'infos': ['angeln', 'fussball', 'kiosk', 'spielplatz', 'tischtennis', 'wc']},
{'uid': '4750e712673', 'name': 'Forggensee', 'color': 'green', 'coords': [47.6116175, 10.7372011],'infos': ['angeln', 'grillen', 'kiosk', 'opnv', 'tischtennis', 'wc']},
{'uid': '16c0fbad664', 'name': 'Freyersee', 'color': 'green', 'coords': [49.24215, 8.46077],'infos': ['angeln', 'kiosk', 'tauchen', 'wc']},
{'uid': '288be961124', 'name': 'Garnberg See Ziegelei', 'color': 'red', 'coords': [49.28648, 9.71060],'infos': []},
{'uid': 'f5e8a8558d2', 'name': 'Glaswaldsee', 'color': 'green', 'coords': [48.426077, 8.2614424],'infos': []},
{'uid': '86e8bc49323', 'name': 'Goldkanal', 'color': 'green', 'coords': [48.92317603, 8.1788063],'infos': ['angeln', 'fussball', 'kiosk', 'restaurant', 'surfen']},
{'uid': '43ac07ad64c', 'name': 'Grüntensee', 'color': 'green', 'coords': [47.61766163, 10.44852285],'infos': ['angeln', 'fussball', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'uebernachten']},
{'uid': 'e13b7ae4b27', 'name': 'Götzenbachsee', 'color': 'green', 'coords': [48.8630121, 9.8682788],'infos': ['grillen', 'wc']},
{'uid': '3bb95ebae34', 'name': 'Hagerwaldsee', 'color': 'green', 'coords': [48.8934934, 9.695452],'infos': ['grillen', 'opnv', 'restaurant']},
{'uid': 'ecd766fa820', 'name': 'Badsee Beuren', 'color': 'green', 'coords': [47.75195, 10.00561],'infos': ['angeln', 'dusche', 'kiosk', 'spielplatz', 'surfen', 'wc']},
{'uid': '3dbfb4127e8', 'name': 'Hardtsee-Bruhrain', 'color': 'orange', 'coords': [49.19090, 8.46736],'infos': ['dusche', 'kiosk', 'opnv', 'spielplatz', 'surfen', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'ad260767869', 'name': 'Heddesheimer Badesee', 'color': 'green', 'coords': [49.51536, 8.61470],'infos': ['angeln', 'dusche', 'fussball', 'kiosk', 'opnv', 'tischtennis', 'volleyball', 'wc']},
{'uid': '99d831d8c75', 'name': 'Hengelesweiher', 'color': 'green', 'coords': [47.67509744, 10.07570744],'infos': []},
{'uid': 'a531bd5c6d6', 'name': 'Herbisweiher', 'color': 'green', 'coords': [47.72543948, 10.0364399],'infos': []},
{'uid': '62e581655f3', 'name': 'Badesee Hermuthausen', 'color': 'red', 'coords': [49.31183, 9.74201],'infos': ['angeln', 'grillen', 'volleyball']},
{'uid': 'b7ce4b2f35b', 'name': 'Hirschfeldseen', 'color': 'green', 'coords': [49.23962339, 9.23142003],'infos': ['angeln', 'dusche', 'fussball', 'kiosk', 'volleyball', 'wc']},
{'uid': '02b406eedc1', 'name': 'Hollenbacher Badesee', 'color': 'green', 'coords': [49.38199, 9.82524],'infos': ['angeln', 'grillen', 'kiosk']},
{'uid': '255c6060a04', 'name': 'Holzmühleweiher', 'color': 'green', 'coords': [47.83642, 9.86132],'infos': ['angeln']},
{'uid': '322be6e5198', 'name': 'Hopfensee', 'color': 'red', 'coords': [47.6003264, 10.6722611],'infos': ['angeln', 'dusche', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'wc']},
{'uid': '8285f956c35', 'name': 'Huzenbacher See', 'color': 'green', 'coords': [48.5745726, 8.3481878],'infos': []},
{'uid': 'c024700d03f', 'name': 'Hüttenbühlsee', 'color': 'green', 'coords': [48.89530052, 9.70457034],'infos': ['grillen']},
{'uid': '6cb1da69fbe', 'name': 'Illmensee', 'color': 'green', 'coords': [47.85976, 9.38113],'infos': ['angeln', 'dusche', 'kiosk', 'opnv', 'spielplatz', 'volleyball', 'wc']},
{'uid': '4a7c29409d6', 'name': 'Kaltenbachsee', 'color': 'green', 'coords': [48.8791877, 8.2901571],'infos': ['dusche', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'd43ef49c762', 'name': 'Katzenbachsee Stuttgart', 'color': 'green', 'coords': [49.051482, 8.938812],'infos': ['grillen', 'kiosk', 'spielplatz', 'wc']},
{'uid': 'c1b6153efa6', 'name': 'Klosterweiher, Friedenweiler', 'color': 'green', 'coords': [47.91950, 8.25775],'infos': ['angeln', 'fussball', 'kiosk', 'tischtennis', 'volleyball', 'wc']},
{'uid': '60562e5e7c1', 'name': 'Kocherbadebucht Künzelsau', 'color': 'red', 'coords': [49.27889, 9.69629],'infos': ['kiosk', 'spielplatz', 'volleyball', 'wc']},
{'uid': '4ccd3fe8538', 'name': 'Krauchenwieser Seenplatte', 'color': 'green', 'coords': [48.03608, 9.25135],'infos': ['angeln', 'grillen', 'kiosk', 'restaurant', 'spielplatz', 'surfen', 'volleyball', 'wc']},
{'uid': '21cf79985cc', 'name': 'Leinecksee', 'color': 'green', 'coords': [48.84568318, 9.69110012],'infos': ['restaurant', 'spielplatz']},
{'uid': 'd6b6721a531', 'name': 'Max-Eyth-See', 'color': 'green', 'coords': [48.8351017, 9.216869],'infos': ['kiosk', 'restaurant', 'spielplatz']},
{'uid': '596cd3a4e98', 'name': 'Moorbad Buchenberg', 'color': 'green', 'coords': [47.6979762, 10.22883368],'infos': ['dusche', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'd63d4616ff3', 'name': 'Mummelsee', 'color': 'green', 'coords': [48.59779429, 8.20113603],'infos': ['spielplatz', 'wc']},
{'uid': 'dd64e210b5a', 'name': 'Mühlbachsee', 'color': 'green', 'coords': [49.09481, 8.90146],'infos': ['kiosk', 'wc']},
{'uid': 'd4376ffd412', 'name': 'Münstersee', 'color': 'green', 'coords': [49.4296185, 10.0484991],'infos': ['dusche', 'eintritt', 'grillen', 'spielplatz', 'wc']},
{'uid': '922c2861dc8', 'name': 'Naturbadesee Gschwend', 'color': 'green', 'coords': [48.93772, 9.75010],'infos': ['angeln', 'dusche', 'kiosk', 'tischtennis', 'volleyball', 'wc']},
{'uid': '6c0aafeef39', 'name': 'Naturfreibad Ellmannsweiler', 'color': 'green', 'coords': [48.11256397, 9.86060838],'infos': ['dusche', 'kiosk', 'opnv', 'spielplatz', 'volleyball', 'wc']},
{'uid': '5d17c54f5fe', 'name': 'Naturfreibad Schonach', 'color': 'green', 'coords': [48.14371, 8.18460],'infos': ['dusche', 'kiosk', 'tischtennis', 'volleyball', 'wc']},
{'uid': '7afcfd5f2bb', 'name': '﻿Neumühlsee Waldenburg', 'color': 'green', 'coords': [49.16348, 9.64267],'infos': ['angeln', 'grillen', 'kiosk', 'restaurant', 'wc']},
{'uid': '84222a6ffdc', 'name': 'Nonnenmattweiher', 'color': 'green', 'coords': [47.79496, 7.79902],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': '88349479ec3', 'name': 'Unterer Seewaldsee', 'color': 'green', 'coords': [48.99078, 8.96818],'infos': ['grillen']},
{'uid': '6579578538f', 'name': 'Badesee Oberginsbach', 'color': 'green', 'coords': [49.35765, 9.68607],'infos': ['angeln', 'grillen', 'wc']},
{'uid': 'b623d1e37c1', 'name': 'Freibad Obersee', 'color': 'green', 'coords': [47.79692, 9.87778],'infos': ['angeln', 'dusche', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'bd266561426', 'name': 'Baggersee Allmendsee', 'color': 'green', 'coords': [48.27348, 7.71982],'infos': ['angeln', 'grillen', 'volleyball']},
{'uid': '4642dcd39bf', 'name': 'Sankenbachsee', 'color': 'green', 'coords': [48.4839799, 8.3386676],'infos': []},
{'uid': '59410f37b07', 'name': 'Schleinsee', 'color': 'green', 'coords': [47.612446, 9.633778],'infos': ['angeln', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'tischtennis']},
{'uid': 'dafb7176ce6', 'name': 'Schluchsee', 'color': 'green', 'coords': [47.81708008, 8.15545372],'infos': ['angeln', 'dusche', 'fussball', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'c31c6485a7a', 'name': 'Schlichemtalsperre', 'color': 'green', 'coords': [48.21, 8.768056],'infos': ['angeln', 'dusche', 'fussball', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'wc']},
{'uid': '44d044d6687', 'name': 'Schlüchtsee', 'color': 'green', 'coords': [47.78747, 8.25832],'infos': ['angeln', 'dusche', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'wc']},
{'uid': '1e10f91ecfd', 'name': 'Schurm See', 'color': 'green', 'coords': [48.6132676, 8.3187567],'infos': []},
{'uid': 'a57cdc99865', 'name': 'Schwansee', 'color': 'green', 'coords': [47.558016, 10.7192011],'infos': ['spielplatz']},
{'uid': '7beb725bd93', 'name': 'Starkholzbacher See', 'color': 'green', 'coords': [49.08183, 9.66426],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'f67e872c888', 'name': 'Stausee Mulfingen', 'color': 'red', 'coords': [49.34111, 9.81646],'infos': ['angeln', 'grillen', 'spielplatz']},
{'uid': '4dd607159b3', 'name': 'Tiefer See', 'color': 'orange', 'coords': [49.00326, 8.81574],'infos': ['dusche', 'kiosk', 'wc']},
{'uid': 'a71c1009942', 'name': 'Tiroler See', 'color': 'green', 'coords': [49.31759, 9.55865],'infos': ['angeln', 'dusche', 'fussball', 'grillen', 'kiosk', 'spielplatz', 'volleyball']},
{'uid': 'f3699053655', 'name': 'Ummendorfer Baggersee', 'color': 'green', 'coords': [48.06616415, 9.81546879],'infos': ['angeln', 'dusche', 'eintritt', 'fussball', 'kiosk', 'opnv', 'spielplatz', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': '66967c15761', 'name': 'Oberer Seewaldsee', 'color': 'green', 'coords': [48.99276, 8.96908],'infos': ['grillen']},
{'uid': 'cd0c7dd01f6', 'name': 'Badesee Unterginsbach', 'color': 'green', 'coords': [49.36408, 9.65899],'infos': ['angeln', 'grillen']},
{'uid': '9cd682a01df', 'name': 'Ursee', 'color': 'green', 'coords': [47.7518501, 10.0248477],'infos': []},
{'uid': '58b910295a7', 'name': 'Waldsee Fornsbach', 'color': 'green', 'coords': [48.97614, 9.66343],'infos': ['angeln', 'grillen', 'kiosk', 'restaurant', 'tischtennis', 'volleyball', 'wc']},
{'uid': 'eb5cacee7bb', 'name': 'Weißensee', 'color': 'green', 'coords': [47.57115613, 10.63752335],'infos': ['angeln', 'dusche', 'spielplatz', 'tischtennis', 'wc']},
{'uid': '1f67e1ede26', 'name': 'Baggersee Weingarten', 'color': 'orange', 'coords': [49.07139, 8.52540],'infos': ['angeln', 'grillen', 'kiosk', 'spielplatz', 'tauchen', 'volleyball', 'wc']},
{'uid': '5550780761a', 'name': 'Wildsee, Baiersbronn', 'color': 'green', 'coords': [48.56965023, 8.2394886],'infos': []},
{'uid': '68ea61b58a9', 'name': 'Windgfällweiher', 'color': 'green', 'coords': [47.8518211, 8.1256044],'infos': ['dusche', 'eintritt', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'tischtennis', 'wc']},
{'uid': 'f6a02bd44cd', 'name': 'Zellersee', 'color': 'green', 'coords': [47.78555221, 9.87719178],'infos': ['angeln', 'restaurant']},
{'uid': '5ada42b96c3', 'name': 'Ziegeleisee Schorndorf', 'color': 'green', 'coords': [48.7962748, 9.5163885],'infos': ['dusche', 'eintritt', 'fussball', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': '462f9367f8b', 'name': 'Ziegelweiher', 'color': 'green', 'coords': [48.05667, 9.95365],'infos': ['dusche', 'kiosk', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': '68f6c9c2eb7', 'name': 'Ablacher Seen', 'color': 'red', 'coords': [48.02099, 9.23584],'infos': ['wc']},
{'uid': '7f49026c9bd', 'name': 'Achernsee', 'color': 'red', 'coords': [48.64347, 8.03549],'infos': ['angeln', 'kiosk']},
{'uid': '30c2345d33d', 'name': '﻿Äußerer Weiher', 'color': 'red', 'coords': [48.13880, 9.61769],'infos': ['kiosk', 'spielplatz', 'volleyball', 'wc']},
{'uid': '47887c3b6a3', 'name': 'Andelshofer Weiher', 'color': 'red', 'coords': [47.78634517, 9.17802572],'infos': []},
{'uid': 'd9ac8a4604c', 'name': 'Anglersee in Ketsch', 'color': 'red', 'coords': [49.36145795, 8.52257751],'infos': []},
{'uid': '4e3920de4bd', 'name': 'Apostelsee', 'color': 'red', 'coords': [48.26006997, 7.7886951],'infos': []},
{'uid': '158c1dd8715', 'name': 'Appenweiler Weiher', 'color': 'red', 'coords': [47.723528, 9.529472],'infos': []},
{'uid': '09b1a30f88d', 'name': 'Aschbachsee', 'color': 'red', 'coords': [49.41686, 9.86844],'infos': ['grillen', 'wc']},
{'uid': 'b26003985c0', 'name': 'Bachtelweiher', 'color': 'red', 'coords': [47.7207705, 10.3480074],'infos': []},
{'uid': '4a1682d66cd', 'name': 'Badesee Kehl', 'color': 'red', 'coords': [48.50992, 7.81814],'infos': []},
{'uid': '02154f1363c', 'name': 'Badesee Reinstetten', 'color': 'red', 'coords': [48.11056, 9.93456],'infos': ['wc']},
{'uid': '054952c4ecf', 'name': 'Badesee am Rhein', 'color': 'red', 'coords': [48.21689, 7.66439],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'a55f43be627', 'name': 'Badesee Baindt', 'color': 'red', 'coords': [47.84519, 9.67578],'infos': []},
{'uid': '25e78a9f88d', 'name': 'Badesee Dietenheim', 'color': 'red', 'coords': [48.21991, 10.07548],'infos': ['kiosk', 'wc']},
{'uid': 'e11833c8758', 'name': 'Badesee Freistett', 'color': 'red', 'coords': [48.68350, 7.92299],'infos': ['angeln', 'wc']},
{'uid': 'd792f27a21b', 'name': 'Badesee Freudenberg', 'color': 'red', 'coords': [49.76083, 9.31604],'infos': ['kiosk', 'wc']},
{'uid': '2d368323e50', 'name': 'Badesee Heiligau', 'color': 'red', 'coords': [48.26325, 10.05102],'infos': []},
{'uid': '09c257212e2', 'name': '﻿Badesee Leopoldsinsel', 'color': 'red', 'coords': [48.14062, 7.60723],'infos': ['wc']},
{'uid': '0275ccaabee', 'name': 'Badesee Mondfeld', 'color': 'red', 'coords': [49.78724, 9.42977],'infos': ['angeln']},
{'uid': '5ce34decb97', 'name': 'Plüderhausener See', 'color': 'red', 'coords': [48.78275, 9.60832],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '05d4ee2838a', 'name': 'Badesee Rheinau', 'color': 'red', 'coords': [48.65069, 7.86885],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': '4fb159587f6', 'name': 'Badesee Schnürpflingen', 'color': 'red', 'coords': [48.26385, 9.99094],'infos': ['grillen']},
{'uid': '0f1b21d25f2', 'name': 'Badesee Schwarzenbronn', 'color': 'red', 'coords': [49.39628, 10.11708],'infos': ['grillen']},
{'uid': '094e8094492', 'name': 'Baggersee "Schweizer Uhl"', 'color': 'red', 'coords': [48.15633, 7.63468],'infos': ['angeln']},
{'uid': '507d77ed44b', 'name': 'Badesee Unterbalzheim', 'color': 'red', 'coords': [48.18196, 10.08767],'infos': []},
{'uid': 'fb4ed680bb9', 'name': 'Waldhäuser Baggersee', 'color': 'red', 'coords': [48.78458, 9.63445],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'a40b555ce49', 'name': 'Baggersee Fohlengarten', 'color': 'red', 'coords': [48.47758, 7.77616],'infos': []},
{'uid': 'e6982fe2745', 'name': 'Baggersee Alberweiler', 'color': 'red', 'coords': [48.16500, 9.76754],'infos': []},
{'uid': '27973a7aae2', 'name': 'Baggersee Au am Rhein', 'color': 'red', 'coords': [48.95068, 8.20103],'infos': ['angeln', 'wc']},
{'uid': '9faac853f16', 'name': 'Baggersee Blankenloch', 'color': 'red', 'coords': [48.92934092, 8.28709616],'infos': []},
{'uid': '3d780f540cb', 'name': 'Baggersee Donaurieden', 'color': 'red', 'coords': [48.30549181, 9.86119509],'infos': []},
{'uid': '9e4fae67144', 'name': 'Baggersee Eggenstein', 'color': 'red', 'coords': [49.08670, 8.37127],'infos': ['tauchen', 'volleyball']},
{'uid': 'd12f06637a6', 'name': 'Baggersee Giesen', 'color': 'red', 'coords': [49.16009852, 8.38655949],'infos': ['angeln', 'kiosk', 'tauchen', 'wc']},
{'uid': 'a6b4695beec', 'name': 'Baggersee Grafenhausen', 'color': 'red', 'coords': [48.26380237, 7.76626434],'infos': []},
{'uid': 'b7b834f1309', 'name': 'Baggersee Grenis', 'color': 'red', 'coords': [47.74719, 9.76265],'infos': []},
{'uid': 'ede98c7385e', 'name': 'Baggersee', 'color': 'red', 'coords': [47.95269, 7.61776],'infos': ['grillen']},
{'uid': 'ba57a51fe77', 'name': 'Baggersee-III', 'color': 'red', 'coords': [48.73207, 7.97384],'infos': ['kiosk', 'wc']},
{'uid': '9c1d0f2d067', 'name': 'Baggersee im Pfeifersgrund', 'color': 'red', 'coords': [49.065490, 8.346780],'infos': []},
{'uid': '1a47e697358', 'name': 'Baggersee Kieswerk Vogel, Kehl-Odelshofen', 'color': 'red', 'coords': [48.55826, 7.86711],'infos': ['angeln']},
{'uid': '71432046cc5', 'name': '﻿Baggersee Kieswerk Vogel, Willstätt', 'color': 'red', 'coords': [48.56886, 7.89710],'infos': ['angeln', 'wc']},
{'uid': '6d55b569626', 'name': 'Baggersee Möllenbronn', 'color': 'red', 'coords': [47.87896, 9.52813],'infos': ['angeln']},
{'uid': '2fe6e171e69', 'name': 'Baggersee Müller', 'color': 'red', 'coords': [47.97453, 9.36462],'infos': ['angeln', 'wc']},
{'uid': '39402a2e545', 'name': 'Baggersee Hirschau', 'color': 'red', 'coords': [48.49475188, 9.00250425],'infos': []},
{'uid': 'c3b28527899', 'name': 'Badesee Niederschopfheim', 'color': 'red', 'coords': [48.41586, 7.86232],'infos': ['angeln', 'wc']},
{'uid': 'f108336a835', 'name': 'Baggersee Ochsenmoos', 'color': 'red', 'coords': [47.99666, 7.74229],'infos': ['angeln', 'grillen']},
{'uid': '6cab98198f9', 'name': 'Baggersee Pfander', 'color': 'red', 'coords': [49.18612, 8.45659],'infos': ['angeln']},
{'uid': '1b5987a96fe', 'name': 'Baggersee', 'color': 'red', 'coords': [48.86378, 8.16232],'infos': []},
{'uid': 'd30935cbbe0', 'name': 'Baggersee Anglerheim Schwanau', 'color': 'red', 'coords': [48.34392, 7.75315],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '8da9c176b5d', 'name': 'Baggersee Steidle', 'color': 'red', 'coords': [48.06520, 9.18426],'infos': []},
{'uid': 'c90384d7c56', 'name': 'Baggersee Schuttern', 'color': 'red', 'coords': [48.40206698, 7.861272],'infos': ['angeln', 'dusche', 'eintritt', 'fussball', 'grillen', 'kiosk', 'opnv', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': '6d9284ff090', 'name': 'Baggersee Streitköpfle', 'color': 'red', 'coords': [49.11910757, 8.38084102],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '4b5aac342d4', 'name': 'Baggersee Untergrombach', 'color': 'red', 'coords': [49.09719, 8.55270],'infos': ['angeln']},
{'uid': 'ee41aad1bdb', 'name': 'Baggersee Wacholderrain', 'color': 'red', 'coords': [48.48122, 7.79157],'infos': ['angeln']},
{'uid': 'be148ca4823', 'name': '﻿Baggersee Meißenheim', 'color': 'red', 'coords': [48.42839, 7.76549],'infos': ['angeln', 'grillen']},
{'uid': '3193ec226ea', 'name': 'Baggersee Stutensee', 'color': 'red', 'coords': [49.12791, 8.50810],'infos': []},
{'uid': '2b7792d9605', 'name': 'Baggersee Stutensee II', 'color': 'red', 'coords': [49.08433, 8.50234],'infos': []},
{'uid': '6299d4d8ba9', 'name': 'Baggersee Stutensee III', 'color': 'red', 'coords': [49.07938, 8.46494],'infos': ['opnv']},
{'uid': '01f3189ff5c', 'name': 'Bibersee', 'color': 'red', 'coords': [47.86492, 9.55785],'infos': []},
{'uid': 'c8655bb0d2b', 'name': 'Bibrisee', 'color': 'red', 'coords': [48.23922324, 9.8628366],'infos': []},
{'uid': 'c85c786d703', 'name': 'Bifangweiher', 'color': 'red', 'coords': [47.75649604, 9.28101742],'infos': []},
{'uid': 'e241d83a12a', 'name': 'Binninger See', 'color': 'red', 'coords': [47.8088889, 8.73290885],'infos': []},
{'uid': '0dcb4e812d8', 'name': 'Birkenwald See', 'color': 'red', 'coords': [48.21313, 7.73420],'infos': ['angeln', 'grillen']},
{'uid': '5db2eb379ff', 'name': 'Bissinger See', 'color': 'red', 'coords': [48.59581, 9.49264],'infos': ['wc']},
{'uid': '3e417260f35', 'name': 'Blauensee Lauten', 'color': 'red', 'coords': [47.75380945, 9.73287284],'infos': []},
{'uid': 'e00c991f075', 'name': 'Blauer See', 'color': 'red', 'coords': [47.6555334, 9.7629273],'infos': ['angeln', 'grillen']},
{'uid': '1cb8ae6150d', 'name': 'Bleicher Weiher', 'color': 'red', 'coords': [47.68111135, 10.04283705],'infos': []},
{'uid': '1a42485db2b', 'name': 'Bodenloser See', 'color': 'red', 'coords': [48.41099264, 8.7066599],'infos': []},
{'uid': 'c19de9cd4e0', 'name': 'Bodensee, Strandbad Langenargen', 'color': 'red', 'coords': [47.60514, 9.52856],'infos': ['kiosk', 'wc']},
{'uid': 'ff9bd4ebda7', 'name': 'Bodensee, Badestelle Hemmenhofen', 'color': 'red', 'coords': [47.67106, 8.96001],'infos': ['wc']},
{'uid': 'e8f68053879', 'name': '﻿Bodensee, Badeplatz Campingplätze Luft und Nelly, Überlingen', 'color': 'red', 'coords': [47.75529, 9.18573],'infos': []},
{'uid': '5aaf84526c1', 'name': '﻿Bodensee, Badeplatz Seehotel Höri', 'color': 'red', 'coords': [47.67109, 8.96591],'infos': []},
{'uid': '2078e5c0dc3', 'name': '﻿Bodensee, Badestrand Süssenmühle, Sipplingen', 'color': 'red', 'coords': [47.78412, 9.11895],'infos': []},
{'uid': '77fa34159a6', 'name': 'Bodensee, Badestelle Gundholzen', 'color': 'red', 'coords': [47.70659, 8.99350],'infos': ['kiosk', 'wc']},
{'uid': '5c0de06572e', 'name': 'Bodensee, Badestelle Gaienhofen', 'color': 'red', 'coords': [47.68195, 8.98867],'infos': ['wc']},
{'uid': 'a5ceb023e2e', 'name': 'Bodensee, Bodensee-Therme, Konstanz', 'color': 'red', 'coords': [47.66428, 9.21041],'infos': ['kiosk', 'wc']},
{'uid': 'be14ffac104', 'name': 'Bodensee, Camping Willam, Allensbach', 'color': 'red', 'coords': [47.72821, 9.02574],'infos': ['kiosk']},
{'uid': '3a105614d7c', 'name': 'Bodensee, Camping-u.Badeplatz Naturfreundehaus, Radolfzell', 'color': 'red', 'coords': [47.73251, 9.01358],'infos': ['kiosk', 'wc']},
{'uid': '3912b53fb3f', 'name': 'Bodensee, Camping DGB, Seeufer Allensbach', 'color': 'red', 'coords': [47.72716, 9.03059],'infos': ['wc']},
{'uid': 'ea6ce5d4523', 'name': 'Bodensee, Campingpark Ueberlingen-West', 'color': 'red', 'coords': [47.77212, 9.13578],'infos': []},
{'uid': '437c3c6c273', 'name': '﻿Bodensee, Campingplatz Brändle-Köhne, Überlingen', 'color': 'red', 'coords': [47.74693, 9.21084],'infos': []},
{'uid': '9280e8c5b37', 'name': '﻿Bodensee Campingplatz Seeperle, Mühlhofen', 'color': 'red', 'coords': [47.73399, 9.22589],'infos': []},
{'uid': '64c37995147', 'name': 'Bodensee, Campingplatz Fischbach, Friedrichshafen', 'color': 'red', 'coords': [47.66778, 9.39571],'infos': []},
{'uid': '2dc896b75f8', 'name': 'Bodensee, Campingplatz Gohren, Kressbronn', 'color': 'red', 'coords': [47.58494, 9.56268],'infos': []},
{'uid': '6b22c098090', 'name': 'Bodensee, Campingplatz Helmsdorf, Immenstaad', 'color': 'red', 'coords': [47.66514, 9.37558],'infos': []},
{'uid': '3feb7e78053', 'name': 'Bodensee, Campingplatz Iriswiese, Kressbronn', 'color': 'red', 'coords': [47.58586, 9.57702],'infos': []},
{'uid': '9ff98dbf490', 'name': 'Bodensee, Campingplatz Schachenhorn, Bodman-Ludwigshafen', 'color': 'red', 'coords': [47.81696, 9.04144],'infos': ['kiosk', 'wc']},
{'uid': '1f9ef9061fd', 'name': 'Bodensee, Camping- und Badeplatz Allensbach', 'color': 'red', 'coords': [47.70959, 9.07895],'infos': ['kiosk', 'wc']},
{'uid': '005b86a2c0f', 'name': 'Bodensee, Camping- und Badeplatz Fliesshorn, Konstanz', 'color': 'red', 'coords': [47.73349, 9.17402],'infos': ['kiosk', 'wc']},
{'uid': '5f06327034c', 'name': 'Bodensee, Camping- und Badeplatz Hegne, Allensbach', 'color': 'red', 'coords': [47.70349, 9.09649],'infos': ['kiosk', 'wc']},
{'uid': '9e04a15f444', 'name': 'Bodensee, Camping-und Badeplatz Litzelstetten, Konstanz', 'color': 'red', 'coords': [47.71139, 9.18090],'infos': ['kiosk', 'wc']},
{'uid': '00a224e1e6c', 'name': 'Bodensee, Camping-u.Badeplatz Markelfingen, Radolfzell', 'color': 'red', 'coords': [47.73879, 9.00093],'infos': ['kiosk']},
{'uid': '1d0708db0bb', 'name': 'Bodensee, Camping- und Badeplatz Wangen', 'color': 'red', 'coords': [47.65984, 8.93726],'infos': ['kiosk', 'wc']},
{'uid': 'bbbd42d4199', 'name': 'Bodensee, Camping Lindau am See', 'color': 'red', 'coords': [47.536630, 9.728221],'infos': []},
{'uid': 'aecf4f189ba', 'name': 'Bodensee, Camping- u. Badeplatz Sandseele, Reichenau', 'color': 'red', 'coords': [47.69895, 9.04326],'infos': ['kiosk', 'wc']},
{'uid': '3b27d10847e', 'name': 'Bodensee, Frei- und Seebad Fischbach, Friedrichshafen', 'color': 'red', 'coords': [47.66310, 9.42459],'infos': ['kiosk', 'wc']},
{'uid': '34a9c7addbc', 'name': '﻿Bodensee, Freizeitgelände Manzell, Friedrichshafen', 'color': 'red', 'coords': [47.66525, 9.42193],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': 'b126a5f799f', 'name': 'Bodensee, Badestelle Malerecke, Langenargen', 'color': 'red', 'coords': [47.59097, 9.54683],'infos': ['grillen', 'wc']},
{'uid': '938f3a4037f', 'name': '﻿Bodensee, Campingplatz Birnau-Maurach, Uhldingen-Mühlhofen', 'color': 'red', 'coords': [47.74069, 9.22490],'infos': []},
{'uid': '9280e8c5b37', 'name': '﻿Bodensee, Camping Mühlhofen', 'color': 'red', 'coords': [47.73399, 9.22589],'infos': []},
{'uid': '2a51ed21dbe', 'name': 'Bodensee, Naturstrand Unteruhldingen', 'color': 'red', 'coords': [47.72101, 9.22857],'infos': ['kiosk', 'wc']},
{'uid': '2fdf4e7788b', 'name': 'Bodensee, Rheinstrandbad, Konstanz', 'color': 'red', 'coords': [47.66775, 9.17570],'infos': ['kiosk', 'wc']},
{'uid': '4c37120969d', 'name': 'Bodensee, Schloss Gaienhofen', 'color': 'red', 'coords': [47.67864, 8.97862],'infos': []},
{'uid': '6318c3ff3a4', 'name': 'Bodensee, Seebad Radolfzell', 'color': 'red', 'coords': [47.73404, 8.97851],'infos': ['kiosk', 'wc']},
{'uid': '09fa3b0b4e9', 'name': 'Bodensee, Strandbad Bora Sauna Oase, Radolfzell', 'color': 'red', 'coords': [47.73616, 8.95418],'infos': ['wc']},
{'uid': 'b3f15ba74ab', 'name': 'Bodensee, Strandbad Nonnenhorn', 'color': 'red', 'coords': [47.5764, 9.6086],'infos': ['wc']},
{'uid': '0d986534dfa', 'name': 'Bodensee, Strandbad Baurenhorn', 'color': 'red', 'coords': [47.70310, 9.05644],'infos': ['kiosk', 'wc']},
{'uid': '58635dd5518', 'name': 'Bodensee, Strandbad Bodman', 'color': 'red', 'coords': [47.80554, 9.03077],'infos': ['kiosk', 'wc']},
{'uid': 'aa59a9443de', 'name': 'Strandbad Horn', 'color': 'red', 'coords': [47.68682, 8.99783],'infos': ['kiosk', 'wc']},
{'uid': '7c77dbb9d38', 'name': 'Bodensee, Strandbad Iznang', 'color': 'red', 'coords': [47.71559, 8.96550],'infos': ['kiosk', 'wc']},
{'uid': '6a04e72d16f', 'name': 'Bodensee, Strandbad Klausenhorn, Konstanz', 'color': 'red', 'coords': [47.74906, 9.14857],'infos': ['kiosk', 'wc']},
{'uid': '6df3895c97f', 'name': 'Bodensee, Strandbad Ludwigshafen', 'color': 'red', 'coords': [47.81457, 9.06240],'infos': ['kiosk', 'wc']},
{'uid': 'e2799b1fc4d', 'name': 'Bodensee, Strandbad Mettnau', 'color': 'red', 'coords': [47.72869, 8.99197],'infos': ['wc']},
{'uid': '9948ab3dc40', 'name': 'Bodensee, Strandbad Moos', 'color': 'red', 'coords': [47.72306, 8.94460],'infos': ['kiosk', 'wc']},
{'uid': '5a49275ae0c', 'name': 'Bodensee, Strandbad Nussdorf', 'color': 'red', 'coords': [47.75021, 9.19792],'infos': ['kiosk', 'wc']},
{'uid': 'a0ed51b3392', 'name': 'Bodensee, Strandbad Öhningen', 'color': 'red', 'coords': [47.65474, 8.89027],'infos': ['kiosk']},
{'uid': '41dc5de58ab', 'name': '﻿Bodensee, Strandbad Ost, Überlingen', 'color': 'red', 'coords': [47.76054, 9.17223],'infos': ['kiosk', 'wc']},
{'uid': 'bb42f551b99', 'name': 'Bodensee, Strandbad Wallhausen, Konstanz', 'color': 'red', 'coords': [47.74768, 9.13963],'infos': ['kiosk', 'wc']},
{'uid': 'be87a5b1d0c', 'name': '﻿Bodensee, Strandbad West, Überlingen', 'color': 'red', 'coords': [47.76803, 9.14896],'infos': ['kiosk', 'wc']},
{'uid': '9fcb900e9ff', 'name': 'Bodensee, Strandbad Aquamarin, Wasserburg', 'color': 'red', 'coords': [47.565762, 9.640534],'infos': []},
{'uid': '80d509d5352', 'name': 'Bodensee, Strandbad Eichwald', 'color': 'red', 'coords': [47.548044, 9.715984],'infos': []},
{'uid': '74feb8bb472', 'name': 'Bodensee, Strandbad Eriskirch', 'color': 'red', 'coords': [47.62110, 9.51779],'infos': ['kiosk', 'wc']},
{'uid': '4505459122a', 'name': 'Bodensee, Strandbad Friedrichshafen', 'color': 'red', 'coords': [47.58795, 9.59568],'infos': ['kiosk', 'wc']},
{'uid': '94be1daeb16', 'name': 'Bodensee, Strandbad Friedrichshafen', 'color': 'red', 'coords': [47.65136, 9.45564],'infos': ['kiosk', 'wc']},
{'uid': '386da95f075', 'name': '﻿Bodensee, Strandbad Horn, Hörnle, Konstanz', 'color': 'red', 'coords': [47.66651, 9.21792],'infos': ['kiosk', 'wc']},
{'uid': 'c4d8bfb3ed4', 'name': 'Bodensee, Strandbad Immenstaad', 'color': 'red', 'coords': [47.66067, 9.35710],'infos': ['kiosk', 'wc']},
{'uid': 'eb40d7485d7', 'name': 'Bodensee, Strandbad Meersburg', 'color': 'red', 'coords': [47.68994, 9.27785],'infos': ['kiosk', 'wc']},
{'uid': 'e5f286be923', 'name': 'Bodensee, Strandbad Sipplingen', 'color': 'red', 'coords': [47.79979, 9.08499],'infos': ['wc']},
{'uid': '255e516e30e', 'name': 'Bodensee, Badestelle Hemmenhofen', 'color': 'red', 'coords': [47.5575, 9.6597],'infos': ['wc']},
{'uid': '7086a8219c8', 'name': 'Bodensee, Strand- und Campingplatz Hagnau', 'color': 'red', 'coords': [47.67122, 9.32751],'infos': ['kiosk', 'wc']},
{'uid': '2937bcfc8c7', 'name': '﻿Bodensee, Wassersportgelände Egg, Uni Konstanz', 'color': 'red', 'coords': [47.69465, 9.19506],'infos': ['wc']},
{'uid': '351ca1b85ed', 'name': 'Bodensee, Zeltlager Seemoos, Radolfzell', 'color': 'red', 'coords': [47.65483, 9.43978],'infos': []},
{'uid': 'aad9f88a15d', 'name': '﻿Böhringer See', 'color': 'red', 'coords': [47.76146, 8.93580],'infos': ['kiosk', 'wc']},
{'uid': '6ac21db007f', 'name': 'Brechtsee', 'color': 'orange', 'coords': [49.21726555, 8.4088682],'infos': ['tauchen']},
{'uid': 'dcc3f47f157', 'name': 'Silbersee', 'color': 'red', 'coords': [48.06190, 7.81892],'infos': ['angeln', 'wc']},
{'uid': '40fcdd32310', 'name': 'Brunner Weiher', 'color': 'red', 'coords': [47.83139426, 9.84561682],'infos': []},
{'uid': '6fa1c46ec47', 'name': 'Buchensee', 'color': 'red', 'coords': [47.77050, 8.98047],'infos': ['kiosk', 'wc']},
{'uid': '677a84e68eb', 'name': 'Bucher Stausee', 'color': 'red', 'coords': [48.90981, 10.15239],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': '92a5d931a3c', 'name': 'Buchsee', 'color': 'red', 'coords': [47.8782315, 9.5726218],'infos': []},
{'uid': '1664abef218', 'name': 'Buchweiher', 'color': 'red', 'coords': [47.71741343, 9.94603872],'infos': []},
{'uid': '6016da6628b', 'name': 'Burgerwaldsee', 'color': 'red', 'coords': [48.45983, 7.90978],'infos': ['angeln', 'grillen']},
{'uid': '0299687e369', 'name': 'Büsingen, Strandbad', 'color': 'red', 'coords': [47.69439, 8.69650],'infos': ['kiosk', 'wc']},
{'uid': '250a2ba8526', 'name': 'Bürgersee/Untersee', 'color': 'red', 'coords': [48.63023, 9.41853],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': '9a33cb944bd', 'name': 'Degersee', 'color': 'red', 'coords': [47.61137, 9.65055],'infos': ['kiosk', 'wc']},
{'uid': '20251bf159a', 'name': 'Deisendorfer Weiher', 'color': 'red', 'coords': [47.77659882, 9.21844933],'infos': []},
{'uid': '46e9cc28b9e', 'name': 'Dennenloher See', 'color': 'red', 'coords': [49.1047696, 10.6151803],'infos': []},
{'uid': 'b9c909f2e5d', 'name': 'Der Epplesee', 'color': 'red', 'coords': [48.9655289, 8.3235399],'infos': []},
{'uid': '2e2ce82ccfe', 'name': 'Der Niklassee', 'color': 'red', 'coords': [48.0108234, 9.6952825],'infos': []},
{'uid': 'd023a2a57f9', 'name': 'Dietenbachsee', 'color': 'red', 'coords': [48.00189, 7.80207],'infos': []},
{'uid': 'c85ef5c68aa', 'name': 'Dorfteich', 'color': 'red', 'coords': [48.00238, 9.41552],'infos': ['wc']},
{'uid': '9d99d7b6a4f', 'name': 'Ebenweiler See', 'color': 'red', 'coords': [47.90111496, 9.50429469],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'b1d1c706d98', 'name': 'Eglensee', 'color': 'red', 'coords': [48.6134887, 10.022125],'infos': []},
{'uid': 'b0f3864571c', 'name': 'Eisweiher', 'color': 'red', 'coords': [47.93440174, 9.4249177],'infos': []},
{'uid': 'a6b71a302e5', 'name': 'Elfenweiher', 'color': 'red', 'coords': [47.8429114, 9.7686793],'infos': []},
{'uid': '4d957c32153', 'name': 'Elitzer See', 'color': 'red', 'coords': [47.66456365, 9.81605887],'infos': []},
{'uid': 'a025254c0a3', 'name': 'Ellerazhofer Weiher', 'color': 'red', 'coords': [47.81626, 9.95066],'infos': []},
{'uid': '8db7af04003', 'name': 'Badesee Erbach', 'color': 'red', 'coords': [48.31987, 9.89303],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': '338d51333e2', 'name': 'Erlachsee', 'color': 'red', 'coords': [48.9844699, 8.42935681],'infos': []},
{'uid': '77380a2d75d', 'name': 'Erländersee', 'color': 'red', 'coords': [48.80056, 8.09054],'infos': ['kiosk', 'wc']},
{'uid': '5c87607c24e', 'name': 'Federbachsee', 'color': 'red', 'coords': [48.8535683, 9.9114398],'infos': []},
{'uid': 'acc3ce4fad1', 'name': 'Waldbad Isny', 'color': 'red', 'coords': [47.67824, 10.03176],'infos': ['kiosk', 'wc']},
{'uid': 'd7d7fb9f960', 'name': 'Felder See', 'color': 'red', 'coords': [47.74688433, 9.75146055],'infos': []},
{'uid': 'a6ed9f7dbd9', 'name': 'Ferma See', 'color': 'red', 'coords': [48.97787, 8.27491],'infos': ['angeln', 'wc']},
{'uid': '0dd13822031', 'name': 'Feuerlöschteich', 'color': 'red', 'coords': [47.98256, 9.45958],'infos': []},
{'uid': 'b4a197e2b29', 'name': 'Feuersee', 'color': 'red', 'coords': [48.77283566, 9.16501794],'infos': []},
{'uid': 'f0a369593ce', 'name': 'Fischbachsee', 'color': 'red', 'coords': [49.00669, 10.12140],'infos': []},
{'uid': '3a8e3238d71', 'name': 'FKK-See MIRAMAR', 'color': 'red', 'coords': [49.53254, 8.63953],'infos': ['kiosk', 'wc']},
{'uid': '45b319450ba', 'name': 'Flappachweiher', 'color': 'red', 'coords': [47.74959, 9.63014],'infos': ['kiosk', 'wc']},
{'uid': '97c36ea2244', 'name': 'Freibad Baggersee, Schwendi', 'color': 'red', 'coords': [48.15628, 9.94115],'infos': ['kiosk', 'wc']},
{'uid': 'f20e44a44b2', 'name': 'Freibad Zuben', 'color': 'red', 'coords': [47.98937, 9.79047],'infos': ['wc']},
{'uid': '43e7dacc1e9', 'name': 'Freibergsee', 'color': 'red', 'coords': [47.3802548, 10.2683316],'infos': []},
{'uid': '896772288ae', 'name': 'Freizeitcenter, Inselsee', 'color': 'red', 'coords': [48.77178, 8.03549],'infos': ['kiosk', 'wc']},
{'uid': '218ae83f899', 'name': 'DEBW_PR_0182', 'color': 'red', 'coords': [48.77376, 8.03608],'infos': ['kiosk', 'wc']},
{'uid': 'd1583bf4c1f', 'name': 'Freizeitsee Westere', 'color': 'red', 'coords': [48.95009, 10.34927],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'fd46bc381a1', 'name': 'Fuchsweiher', 'color': 'red', 'coords': [48.0020409, 10.021217],'infos': []},
{'uid': '93421aeaf3d', 'name': 'Gifizsee', 'color': 'red', 'coords': [48.45703, 7.93629],'infos': ['kiosk', 'wc']},
{'uid': 'fa71d1aa8ee', 'name': 'Girasweiher', 'color': 'red', 'coords': [47.84127504, 9.76712465],'infos': []},
{'uid': 'b42a02da75d', 'name': 'Greutweiher', 'color': 'red', 'coords': [48.0584317, 9.9128483],'infos': []},
{'uid': '0e6967ef8b2', 'name': 'Griesweiher', 'color': 'red', 'coords': [48.9430828, 10.0710887],'infos': []},
{'uid': '0642c0efaaf', 'name': 'Großer Alpsee', 'color': 'red', 'coords': [47.57287777, 10.17638683],'infos': ['angeln', 'dusche', 'eintritt', 'grillen', 'kiosk', 'opnv', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': 'b9dd4b36208', 'name': '﻿Großer Badesee Riegel, Freizeitanlage', 'color': 'red', 'coords': [48.16662, 7.73989],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '242d0b0d646', 'name': 'Großer Brombachsee', 'color': 'red', 'coords': [49.1298033, 10.9263289],'infos': []},
{'uid': 'a03981c981e', 'name': 'Grosser Ersinger Badesee', 'color': 'red', 'coords': [48.29523, 9.86430],'infos': []},
{'uid': 'd7a93c06e3c', 'name': 'Großer "Niederwaldsee"', 'color': 'red', 'coords': [48.13839, 7.77991],'infos': ['angeln', 'grillen']},
{'uid': '1caf3c1019e', 'name': 'Grossweiher-Röhrenmoos', 'color': 'red', 'coords': [47.72010, 9.82725],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'bc83b5ef8a0', 'name': 'Grundweiher', 'color': 'red', 'coords': [47.71516129, 9.82574701],'infos': []},
{'uid': 'c6b8c08fda7', 'name': 'Hahnenkammsee', 'color': 'red', 'coords': [48.9622294, 10.7206133],'infos': []},
{'uid': '16ac946e783', 'name': 'Hammerweiher', 'color': 'red', 'coords': [47.70054892, 9.83960867],'infos': []},
{'uid': 'b36e0a6d28a', 'name': 'Hanfsee', 'color': 'red', 'coords': [48.78417, 8.04897],'infos': ['kiosk', 'wc']},
{'uid': 'cf06f8b5964', 'name': 'Hardtsee-Bruhrain', 'color': 'red', 'coords': [49.18658687, 8.47227629],'infos': ['dusche', 'surfen', 'tauchen', 'wc']},
{'uid': '7dae05f0ede', 'name': 'Haselbachsee', 'color': 'red', 'coords': [48.98543, 10.21483],'infos': []},
{'uid': 'e9e85d151bb', 'name': 'Hasenweiher', 'color': 'red', 'coords': [47.84363694, 9.84596014],'infos': []},
{'uid': '9ae00b66f8d', 'name': 'Haundorfer Weiher', 'color': 'red', 'coords': [49.1666148, 10.7605979],'infos': []},
{'uid': 'e189c6b9327', 'name': 'Heidesee', 'color': 'red', 'coords': [49.16427, 8.59187],'infos': ['dusche', 'kiosk', 'spielplatz', 'volleyball', 'wc']},
{'uid': '11719e6193e', 'name': 'Heinz-Sielmann-Weiher', 'color': 'red', 'coords': [47.8363299, 9.1279772],'infos': []},
{'uid': '2b87e204312', 'name': 'Badesee Heppenäcker', 'color': 'red', 'coords': [48.22495, 9.70634],'infos': ['kiosk', 'wc']},
{'uid': '62e581655f3', 'name': 'Badesee Hermuthausen', 'color': 'red', 'coords': [49.31183, 9.74201],'infos': ['angeln', 'grillen']},
{'uid': '6913f475d44', 'name': 'Herrenbach Stausee', 'color': 'red', 'coords': [48.7582262, 9.5860325],'infos': []},
{'uid': '32e19eeafdf', 'name': 'Herrenwieser See', 'color': 'red', 'coords': [47.7156572, 10.2531717],'infos': []},
{'uid': '30989910188', 'name': 'Herrenwieser See', 'color': 'red', 'coords': [48.66868865, 8.29532146],'infos': []},
{'uid': 'b684436b142', 'name': 'Herzogenweiher', 'color': 'red', 'coords': [47.69517654, 9.721162325],'infos': []},
{'uid': '9b547ef5be6', 'name': 'Moorbad Herlazhofen', 'color': 'red', 'coords': [47.78202, 10.00590],'infos': ['kiosk', 'wc']},
{'uid': '61de0883481', 'name': 'Hochwasserrückhaltebecken Lehnenbach', 'color': 'red', 'coords': [48.790278, 9.478889],'infos': []},
{'uid': '3adee79bb65', 'name': 'Hohwiesensee', 'color': 'red', 'coords': [49.35859, 8.51651],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'f9f10abcf5e', 'name': 'Holzmühleweiher', 'color': 'red', 'coords': [47.75738, 9.75896],'infos': ['wc']},
{'uid': '680832b6c09', 'name': 'Holzweiher', 'color': 'red', 'coords': [47.6664478, 9.6950821],'infos': []},
{'uid': '2e169fc98bf', 'name': 'Hornsee', 'color': 'red', 'coords': [48.71976303, 8.45962286],'infos': []},
{'uid': '434e981ceb8', 'name': 'Häcklerweiher', 'color': 'red', 'coords': [47.87783, 9.57728],'infos': ['grillen']},
{'uid': '7e42c43520e', 'name': 'Häslesee', 'color': 'red', 'coords': [48.98433, 10.22483],'infos': ['angeln', 'kiosk']},
{'uid': '77acfc71150', 'name': 'Hölzersee', 'color': 'red', 'coords': [48.7479986, 9.0199914],'infos': []},
{'uid': '6949a19fd23', 'name': 'Hütten-See', 'color': 'red', 'coords': [47.6495166, 9.7116179],'infos': []},
{'uid': 'cd3d9281079', 'name': 'Igelsbachsee', 'color': 'red', 'coords': [49.1483787, 10.8992105],'infos': []},
{'uid': '1ea4d28b729', 'name': 'Innerer Weiher', 'color': 'red', 'coords': [48.14630283, 9.61597681],'infos': []},
{'uid': '67782db157f', 'name': 'Jägerweiher', 'color': 'red', 'coords': [47.67688898, 9.68675494],'infos': []},
{'uid': '0c4722a4555', 'name': 'Badesee "Kaibenlache"', 'color': 'red', 'coords': [48.11214, 7.78355],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '49c3060299c', 'name': 'Karoth-See', 'color': 'red', 'coords': [49.42246, 10.09187],'infos': ['grillen']},
{'uid': '18e573687fc', 'name': 'Karsee Wangen', 'color': 'red', 'coords': [47.74831, 9.80610],'infos': ['grillen']},
{'uid': '642d617e48e', 'name': 'Killenweiher', 'color': 'red', 'coords': [47.7456816, 9.2784143],'infos': []},
{'uid': '065145e2285', 'name': 'Baggersee Kirchentellinsfurt', 'color': 'red', 'coords': [48.54355, 9.15335],'infos': ['angeln', 'wc']},
{'uid': '0942f57cb3f', 'name': 'Kirnbergsee', 'color': 'red', 'coords': [47.92706, 8.36805],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '0f7554045c4', 'name': 'Kleiner Alpsee', 'color': 'red', 'coords': [47.56584974, 10.20032207],'infos': ['angeln', 'dusche', 'eintritt', 'fussball', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'tischtennis', 'uebernachten', 'volleyball', 'wc']},
{'uid': 'e2c33841a75', 'name': 'Kleiner Badesee "Freizeitanlage"', 'color': 'red', 'coords': [48.16429, 7.74289],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '8a955fc205b', 'name': 'Kleiner Bodensee', 'color': 'red', 'coords': [49.06765249, 8.35203409],'infos': []},
{'uid': '2b2f239d51f', 'name': 'Kleiner Brombachsee', 'color': 'red', 'coords': [49.1333419, 10.8757751],'infos': []},
{'uid': '6f5b884093c', 'name': 'Kleiner Ersinger Badesee', 'color': 'red', 'coords': [48.29336, 9.86362],'infos': ['kiosk']},
{'uid': '251cc6162e4', 'name': 'Kleiner "Niederwaldsee"', 'color': 'red', 'coords': [48.13756, 7.78265],'infos': ['angeln']},
{'uid': 'b7b2ee57be0', 'name': '﻿Klosterweiher, St. Märgen', 'color': 'red', 'coords': [48.01162, 8.10077],'infos': ['wc']},
{'uid': 'd8edd53e942', 'name': 'Klosterweiher, Sankt Georgen', 'color': 'red', 'coords': [48.12133, 8.32947],'infos': ['kiosk', 'wc']},
{'uid': '1e3c2ae4625', 'name': 'Knielinger See', 'color': 'red', 'coords': [49.02683836,  8.31096411],'infos': []},
{'uid': '67e638d5537', 'name': 'Kohlplattenschlag', 'color': 'red', 'coords': [49.13859654, 8.5035038],'infos': []},
{'uid': '5f0a98761b4', 'name': 'Kollerinsel (Baggersee)', 'color': 'red', 'coords': [49.37809, 8.47793],'infos': []},
{'uid': '53d1468d1d3', 'name': 'Badesee EM-Kollmarsreute', 'color': 'red', 'coords': [48.09554, 7.87320],'infos': ['angeln']},
{'uid': '894967410a5', 'name': 'Korksee', 'color': 'red', 'coords': [48.55650049, 7.86794901],'infos': []},
{'uid': '4ccd3fe8538', 'name': 'Krauchenwieser Badesee', 'color': 'red', 'coords': [48.03608, 9.25135],'infos': ['kiosk', 'wc']},
{'uid': '1fbaaf46746', 'name': 'Kressbachsee', 'color': 'red', 'coords': [48.98068, 10.13692],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '4489285dbdb', 'name': 'Kreuzweiher', 'color': 'red', 'coords': [47.6510861, 9.676303],'infos': []},
{'uid': '7cade07737e', 'name': 'Lusshardtsee', 'color': 'red', 'coords': [49.23745, 8.61474],'infos': ['kiosk', 'wc']},
{'uid': '62f0c1648af', 'name': 'Königseggsee, Hosskircher Strand', 'color': 'red', 'coords': [47.93244, 9.44814],'infos': ['kiosk', 'wc']},
{'uid': 'a8829e6670e', 'name': 'Königswaldsee', 'color': 'red', 'coords': [48.44582, 7.91710],'infos': ['angeln']},
{'uid': 'e916f8f8acf', 'name': 'Kühlsee', 'color': 'red', 'coords': [48.82045, 8.17515],'infos': ['kiosk', 'wc']},
{'uid': 'c536e4d1230', 'name': 'Langensee', 'color': 'red', 'coords': [47.6447044, 9.702516],'infos': []},
{'uid': 'd779dfcfab0', 'name': 'Langweiher Baierz', 'color': 'red', 'coords': [47.91537, 9.96133],'infos': ['angeln']},
{'uid': '705f0d86fcf', 'name': 'Langwuhrweiher', 'color': 'red', 'coords': [47.84202395, 9.85222578],'infos': []},
{'uid': 'd9617652cbd', 'name': 'Lanzenreuter Weiher', 'color': 'red', 'coords': [47.7843984, 9.6494752],'infos': []},
{'uid': '83f3efbe9e4', 'name': 'Lauchert', 'color': 'red', 'coords': [48.31557, 9.19595],'infos': []},
{'uid': '607aa32359f', 'name': 'Lausheimer Weiher', 'color': 'red', 'coords': [47.9696478, 9.31176535],'infos': []},
{'uid': '09894c8f48d', 'name': 'Lautersee', 'color': 'red', 'coords': [47.77328141, 9.86694574],'infos': []},
{'uid': 'd90664e3681', 'name': 'Lengenweiler See', 'color': 'red', 'coords': [47.87012, 9.43342],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'aedab285884', 'name': 'Baggersee Leopoldshafen', 'color': 'red', 'coords': [49.10730, 8.38710],'infos': ['kiosk', 'wc']},
{'uid': '2819dc30fe8', 'name': 'Lindenweiher', 'color': 'red', 'coords': [48.01807846, 9.75884412],'infos': []},
{'uid': '03f8d32282a', 'name': 'Lorcher Baggerseen', 'color': 'red', 'coords': [48.79606544, 9.66610193],'infos': []},
{'uid': '276aab8ce6e', 'name': 'Badesee "Löhlinsee"', 'color': 'red', 'coords': [48.12433, 7.75496],'infos': ['angeln']},
{'uid': 'a1197c8ba14', 'name': 'Mahlweiher', 'color': 'red', 'coords': [47.68558576, 9.71429586],'infos': []},
{'uid': 'd486f163f9f', 'name': 'Mahlweiher', 'color': 'red', 'coords': [47.9516825, 9.6246054],'infos': []},
{'uid': 'dcff1b97ac1', 'name': 'Mahlweiher', 'color': 'red', 'coords': [47.8381929, 9.76931334],'infos': []},
{'uid': 'c75eccdff67', 'name': 'Badesee "Unterwald"', 'color': 'red', 'coords': [48.15643, 7.77006],'infos': ['angeln']},
{'uid': '7e0fd46641e', 'name': 'Markgräfinweiher', 'color': 'red', 'coords': [47.76307036, 9.26098108],'infos': []},
{'uid': '5fc2a5520b8', 'name': 'Martinsweiher', 'color': 'red', 'coords': [47.76217608, 9.26896334],'infos': []},
{'uid': '978fb085c3c', 'name': 'Matschelsee', 'color': 'red', 'coords': [48.40593, 7.816193],'infos': []},
{'uid': '7baae4d9013', 'name': 'Max-Jordan-See', 'color': 'red', 'coords': [48.57884927, 7.98009976],'infos': []},
{'uid': '2842b96bff1', 'name': 'Metelisweiher', 'color': 'red', 'coords': [47.72953864, 9.615376],'infos': []},
{'uid': '4016a21ef3f', 'name': 'Metzisweilerweiher', 'color': 'red', 'coords': [47.83753, 9.82696],'infos': ['angeln', 'wc']},
{'uid': '368e63a5f89', 'name': 'Mindelsee', 'color': 'red', 'coords': [47.75890, 9.01234],'infos': []},
{'uid': '49027ab6316', 'name': 'Mittelsee', 'color': 'red', 'coords': [47.66340755, 9.77043986],'infos': []},
{'uid': 'b65089a03de', 'name': 'Moorbad Burg', 'color': 'red', 'coords': [47.66964, 9.94927],'infos': ['kiosk', 'wc']},
{'uid': 'f99ef43c38c', 'name': 'Moosweiher', 'color': 'red', 'coords': [48.03051, 7.80430],'infos': ['angeln']},
{'uid': 'cdb64508b6a', 'name': 'Mönchsee', 'color': 'red', 'coords': [48.08862934, 8.43840122],'infos': []},
{'uid': 'c17034a5df5', 'name': 'Badesee "Nachtallmendsee"', 'color': 'red', 'coords': [48.20802, 7.75770],'infos': ['angeln', 'wc']},
{'uid': '550222d0ed9', 'name': 'Stausee Erzgrube, Nagoldtalsperre', 'color': 'red', 'coords': [48.55118, 8.48007],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'e7c2282cce2', 'name': 'Naturbad Winterlingen', 'color': 'red', 'coords': [48.17270, 9.11568],'infos': ['kiosk', 'wc']},
{'uid': 'bdd1e4a7542', 'name': 'Naturena Badesee', 'color': 'red', 'coords': [47.74636491, 8.3013913],'infos': ['angeln', 'dusche', 'eintritt', 'fussball', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'tauchen', 'uebernachten', 'volleyball', 'wc']},
{'uid': '364f4aaf958', 'name': 'Naturschwimmbad Sulzburg', 'color': 'red', 'coords': [47.835197, 7.72570074],'infos': ['eintritt', 'grillen', 'kiosk', 'restaurant', 'uebernachten', 'wc']},
{'uid': 'bca2079c307', 'name': 'Natursee Oberbruch', 'color': 'red', 'coords': [48.72830, 8.08311],'infos': ['kiosk', 'wc']},
{'uid': '0f50b0419be', 'name': 'Sauweide (Natursee)', 'color': 'red', 'coords': [48.84214, 8.12776],'infos': ['kiosk', 'wc']},
{'uid': 'c3b790edbfc', 'name': 'Neuravensburger Weiher', 'color': 'red', 'coords': [47.63092, 9.75807],'infos': ['angeln']},
{'uid': '61143b5656b', 'name': 'Neuweiher', 'color': 'red', 'coords': [47.71709582, 9.93329287],'infos': []},
{'uid': 'c2d94917aa3', 'name': 'Neuweiher, Ochsenhausen', 'color': 'red', 'coords': [48.066324, 9.9066579],'infos': []},
{'uid': 'be144cbc1cb', 'name': 'Niedersonthofener See', 'color': 'red', 'coords': [47.6341928, 10.2636003],'infos': []},
{'uid': '155e8624987', 'name': 'Notzenweiher', 'color': 'red', 'coords': [47.7401407, 10.4562963],'infos': []},
{'uid': '1498086a1d0', 'name': 'Oberer Schloßweiher', 'color': 'red', 'coords': [47.70987705, 9.90226507],'infos': []},
{'uid': '0f926e810f4', 'name': 'Obersee', 'color': 'red', 'coords': [47.80006867, 9.88043189],'infos': ['dusche', 'eintritt', 'fussball', 'grillen', 'kiosk', 'opnv', 'spielplatz', 'tischtennis', 'volleyball', 'wc']},
{'uid': '61b6a34fe5e', 'name': 'Oberer Weiher', 'color': 'red', 'coords': [47.85129794, 9.85600233],'infos': []},
{'uid': '5d9da037515', 'name': 'Obermühleweiher', 'color': 'red', 'coords': [47.6699926, 9.5948047],'infos': []},
{'uid': '84f44a38a24', 'name': 'Oberwaldsee', 'color': 'red', 'coords': [48.9884631, 8.43017548],'infos': []},
{'uid': '5a295d6f52e', 'name': 'Olsenweiher', 'color': 'red', 'coords': [47.74699976, 9.26836252],'infos': []},
{'uid': 'c1ca0e3f24a', 'name': 'Olzreuther Badesee', 'color': 'red', 'coords': [48.00991, 9.67983],'infos': ['kiosk', 'wc']},
{'uid': '31f66e89c0c', 'name': 'Opfinger See', 'color': 'red', 'coords': [48.0062008, 7.7569751],'infos': []},
{'uid': '1bdc473f3df', 'name': 'Orrotsee', 'color': 'red', 'coords': [49.00583, 10.08717],'infos': ['angeln']},
{'uid': 'd868c251b95', 'name': 'Ossola See', 'color': 'red', 'coords': [48.64595339, 7.98766136],'infos': []},
{'uid': '43597043b73', 'name': 'Parkbad', 'color': 'red', 'coords': [48.22400, 9.88308],'infos': ['kiosk', 'wc']},
{'uid': 'ae0b7aec094', 'name': 'Poppelsee', 'color': 'red', 'coords': [48.6216692, 8.4443184],'infos': []},
{'uid': '75f39dc3b9d', 'name': 'Premer Weiher', 'color': 'red', 'coords': [47.791476, 9.816348],'infos': []},
{'uid': '99f31309b67', 'name': 'Raderacher Weiher', 'color': 'red', 'coords': [47.70155979, 9.43240643],'infos': []},
{'uid': '09bee64271c', 'name': 'Regattasee', 'color': 'red', 'coords': [48.00229, 7.75440],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'a59f4bd06f1', 'name': 'Reichenbachsee', 'color': 'red', 'coords': [48.87340916, 9.75195934],'infos': []},
{'uid': '109aa100f26', 'name': 'Reiglersbachstausee', 'color': 'red', 'coords': [49.08172, 10.13609],'infos': ['kiosk', 'wc']},
{'uid': '7543a172c17', 'name': 'Repsweiher', 'color': 'red', 'coords': [47.83251783, 10.02938032],'infos': []},
{'uid': '9732235bdbd', 'name': 'Reutalsee', 'color': 'red', 'coords': [49.38279186, 9.97998476],'infos': []},
{'uid': 'cd68e2c9c1f', 'name': 'Reutemattensee', 'color': 'red', 'coords': [47.98180749, 7.72948885],'infos': []},
{'uid': 'c3e8d118acf', 'name': 'Reuteweiher', 'color': 'red', 'coords': [47.71143639, 9.93029952],'infos': []},
{'uid': '145a2957488', 'name': 'Rheinauer See', 'color': 'red', 'coords': [49.41516, 8.53579],'infos': ['wc']},
{'uid': '0b3c910be31', 'name': 'Badestelle Rheinuferpark, Gailingen', 'color': 'red', 'coords': [47.68966, 8.75919],'infos': ['kiosk', 'wc']},
{'uid': '29f16801cd1', 'name': 'Riedsee (Campingplatz)', 'color': 'red', 'coords': [47.93650, 8.53042],'infos': ['kiosk', 'wc']},
{'uid': '65970cf025e', 'name': 'Rimsinger Baggersee', 'color': 'red', 'coords': [47.99658464, 7.65385509],'infos': []},
{'uid': '135a0f39363', 'name': 'Badesee Rinderfeld', 'color': 'red', 'coords': [49.41610, 9.98814],'infos': ['grillen', 'kiosk', 'wc']},
{'uid': '83e83b04f4e', 'name': 'Rohrsee', 'color': 'red', 'coords': [47.8741466, 9.8368309],'infos': []},
{'uid': 'b5750e22f5d', 'name': 'Roterweiher', 'color': 'red', 'coords': [47.78510526, 9.92182374],'infos': []},
{'uid': '40c76205326', 'name': 'Roter Weiher', 'color': 'red', 'coords': [48.0414277, 10.0001164],'infos': []},
{'uid': 'ea0b9f28065', 'name': 'Rothsee', 'color': 'red', 'coords': [49.221195, 11.1861486],'infos': []},
{'uid': '733afb6cc47', 'name': 'Rottachsee', 'color': 'red', 'coords': [47.64293338, 10.38138275],'infos': []},
{'uid': 'cad55c55e60', 'name': 'Ruschweiler See', 'color': 'red', 'coords': [47.86998, 9.37016],'infos': ['angeln']},
{'uid': 'f051272e5c2', 'name': 'Rösslerweiher', 'color': 'red', 'coords': [47.79838, 9.68143],'infos': []},
{'uid': '15f19dd1857', 'name': 'Rückhaltebecken bei Mühlberg', 'color': 'red', 'coords': [47.98618788, 9.9910046],'infos': []},
{'uid': '38c2f504965', 'name': 'Stausee', 'color': 'red', 'coords': [49.19677, 10.06977],'infos': ['grillen', 'wc']},
{'uid': 'f14a2379445', 'name': 'Sauldorfer Baggerseen', 'color': 'red', 'coords': [47.936246, 9.079957],'infos': []},
{'uid': 'ec8a0238ca9', 'name': 'Scherzachstausee', 'color': 'red', 'coords': [47.74435536, 9.65265746],'infos': []},
{'uid': '343fe5576d5', 'name': 'Schiefersee', 'color': 'red', 'coords': [48.24726, 8.85651],'infos': ['wc']},
{'uid': '1f00a38ae41', 'name': 'Schießstattweiher', 'color': 'red', 'coords': [47.69087246, 9.83606815],'infos': []},
{'uid': '6e59573f433', 'name': 'Schießtalsee', 'color': 'red', 'coords': [48.80957673, 9.81799006],'infos': []},
{'uid': '893e36145cd', 'name': 'Öschlesee', 'color': 'red', 'coords': [47.67903313, 10.33731906],'infos': []},
{'uid': '4157ffab55d', 'name': 'Schlingsee', 'color': 'red', 'coords': [47.77945157, 9.87266129],'infos': []},
{'uid': 'a264eb88827', 'name': 'Schloßsee', 'color': 'red', 'coords': [47.92215174, 9.74773765],'infos': []},
{'uid': 'ba8caffb9bf', 'name': 'Schloss-See', 'color': 'red', 'coords': [47.76913, 9.29016],'infos': ['wc']},
{'uid': 'e56c8b0b083', 'name': 'Schmugglermeer', 'color': 'red', 'coords': [49.09500254, 8.36458683],'infos': []},
{'uid': '642e5c69ea7', 'name': 'Schreckensee', 'color': 'red', 'coords': [47.89024787, 9.56516504],'infos': []},
{'uid': '7313dbbfa71', 'name': 'Schwackenreuter Baggersee 6', 'color': 'red', 'coords': [47.92149, 9.06504],'infos': []},
{'uid': '9c11ac5a52c', 'name': 'Schwaigfurter Weiher', 'color': 'red', 'coords': [47.98101721, 9.66457844],'infos': []},
{'uid': '2edd12fd908', 'name': 'Schwaltenweiher', 'color': 'red', 'coords': [47.6472457, 10.5759276],'infos': []},
{'uid': '91be6047277', 'name': 'Schwarzachtaler See', 'color': 'red', 'coords': [48.08061, 9.45695],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': '78a5f83f894', 'name': 'Schwarzenbachtalperre', 'color': 'red', 'coords': [48.65845622, 8.32300186],'infos': []},
{'uid': 'e77352f4c50', 'name': 'Schwarzensee', 'color': 'red', 'coords': [47.66700583, 9.8303926],'infos': []},
{'uid': '66eeac03a1d', 'name': 'Sieben-Erlen-See', 'color': 'red', 'coords': [49.14404, 8.51334],'infos': ['angeln']},
{'uid': '7b4e0c9dff9', 'name': 'Siechenweiher', 'color': 'red', 'coords': [47.6961115, 9.2825995],'infos': []},
{'uid': '55a403068b4', 'name': 'Singenberger Weiher', 'color': 'red', 'coords': [47.70329, 9.75271],'infos': ['wc']},
{'uid': '5c66b3aa039', 'name': 'Sinninger Badesee', 'color': 'red', 'coords': [48.14470, 10.10303],'infos': ['kiosk', 'wc']},
{'uid': '160d3a5ae76', 'name': 'Sonnenbachsee', 'color': 'red', 'coords': [48.97254, 10.25131],'infos': ['kiosk']},
{'uid': '2692c848c32', 'name': 'Sonntagssee', 'color': 'red', 'coords': [48.23959, 9.71684],'infos': []},
{'uid': '3e568392096', 'name': 'Spitalweiher', 'color': 'red', 'coords': [47.7863104, 9.2162475],'infos': []},
{'uid': 'be781cb583c', 'name': 'Stadtsee', 'color': 'red', 'coords': [47.92187, 9.75940],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '675c4749f4f', 'name': 'Stadtweiher', 'color': 'red', 'coords': [47.82441, 10.04049],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'aae207087f2', 'name': 'Diebachstausee', 'color': 'red', 'coords': [48.99364, 9.70960],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'baa13d2f085', 'name': 'Katzenbachsee Pfaffenhofen', 'color': 'red', 'coords': [49.05121, 8.93939],'infos': ['kiosk', 'wc']},
{'uid': '3b559a034b0', 'name': 'Stausee Kleine Kinzig', 'color': 'red', 'coords': [48.4027428, 8.36716031],'infos': []},
{'uid': 'fadae2c3bb6', 'name': 'Stausee Möhringen', 'color': 'red', 'coords': [47.9672841, 8.77974987],'infos': []},
{'uid': '427a65c4d70', 'name': 'Stausee Oberdigisheim', 'color': 'red', 'coords': [48.16979, 8.88277],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': 'ebc5e120595', 'name': 'Stausee', 'color': 'red', 'coords': [48.37476, 8.88957],'infos': ['angeln', 'grillen', 'wc']},
{'uid': '1b7251c3df9', 'name': 'Steegersee', 'color': 'red', 'coords': [47.95564, 9.65179],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'e133b122650', 'name': 'Strandbad Steisslinger See', 'color': 'red', 'coords': [47.79960, 8.91624],'infos': ['kiosk', 'wc']},
{'uid': '983f70da254', 'name': 'Steinbachsee', 'color': 'red', 'coords': [48.74719092, 9.06374216],'infos': []},
{'uid': 'ac6ba81bdcd', 'name': 'Badesee Sankt Leon', 'color': 'red', 'coords': [49.28426, 8.58749],'infos': ['angeln', 'grillen', 'kiosk', 'wc']},
{'uid': '3211664bbba', 'name': 'Östlicher Badesee', 'color': 'red', 'coords': [48.27789, 9.82841],'infos': []},
{'uid': '6cf22d0933b', 'name': 'Stockweiher', 'color': 'red', 'coords': [47.82218, 9.83301],'infos': ['grillen', 'wc']},
{'uid': 'eda34011060', 'name': 'Stollenwörthweiher 2', 'color': 'red', 'coords': [49.45331, 8.47123],'infos': ['kiosk', 'wc']},
{'uid': '978c7d5edfb', 'name': 'Stollenwörthweiher 1', 'color': 'red', 'coords': [49.45321, 8.47044],'infos': ['kiosk', 'wc']},
{'uid': '250019cfa61', 'name': 'Sunthauser See', 'color': 'red', 'coords': [48.00482, 8.58476],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'a9dd1a49d94', 'name': 'Südsee III', 'color': 'red', 'coords': [48.03213, 9.28346],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '2d669437af4', 'name': 'Surfsee', 'color': 'red', 'coords': [48.21431, 9.84634],'infos': ['kiosk', 'wc']},
{'uid': 'a42cf3880d1', 'name': 'Teninger Rohrlache', 'color': 'red', 'coords': [48.11802, 7.78954],'infos': ['angeln']},
{'uid': '1246e146564', 'name': 'Tiefenlochsee', 'color': 'red', 'coords': [48.61577507, 9.29190159],'infos': []},
{'uid': '97c492d421b', 'name': 'Titisee', 'color': 'red', 'coords': [47.8946026, 8.14496136],'infos': ['angeln', 'dusche', 'eintritt', 'grillen', 'kiosk', 'opnv', 'restaurant', 'spielplatz', 'surfen', 'uebernachten', 'volleyball', 'wc']},
{'uid': 'ddd1c73a2f8', 'name': 'Tunisee', 'color': 'red', 'coords': [48.06696, 7.81368],'infos': ['kiosk', 'wc']},
{'uid': '73913b3d219', 'name': 'Tälesee', 'color': 'red', 'coords': [48.38745549, 8.71330547],'infos': []},
{'uid': '3ffa2fd7c9e', 'name': 'Unterer Schießweiher', 'color': 'red', 'coords': [47.71409294, 9.89690065],'infos': []},
{'uid': '853e960f6ef', 'name': 'Vogelstangsee', 'color': 'red', 'coords': [49.50404, 8.54120],'infos': ['wc']},
{'uid': 'd6ea6ee3a23', 'name': 'Volzersee', 'color': 'red', 'coords': [47.86641503, 9.36028719],'infos': []},
{'uid': 'a7057d9a967', 'name': 'Vorsee', 'color': 'red', 'coords': [47.88823344, 9.58666563],'infos': []},
{'uid': '15cabeef9d8', 'name': 'Wagenhauser Weiher', 'color': 'red', 'coords': [48.00721, 9.46197],'infos': []},
{'uid': '1ac696af325', 'name': 'Waidsee', 'color': 'red', 'coords': [49.53558, 8.64244],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': '016756dd973', 'name': 'Walder Weiher', 'color': 'red', 'coords': [47.72191741, 10.56509256],'infos': []},
{'uid': '742526e8d78', 'name': 'Waldmattensee', 'color': 'red', 'coords': [48.31758, 7.79506],'infos': ['angeln', 'kiosk', 'wc']},
{'uid': 'd40151a17e6', 'name': 'Waldsee', 'color': 'red', 'coords': [47.6029015, 9.8694956],'infos': []},
{'uid': '66f31e88f07', 'name': '﻿Waldsee, Willstätt', 'color': 'red', 'coords': [48.51028, 7.87980],'infos': ['angeln']},
{'uid': '63e1a0c7e70', 'name': 'Waltershofener See', 'color': 'red', 'coords': [48.0121913, 7.76746273],'infos': []},
{'uid': 'a096d785e92', 'name': 'Wehra Stausee', 'color': 'red', 'coords': [47.64672795, 7.91968882],'infos': []},
{'uid': '3854198a3d3', 'name': 'Wielandsee', 'color': 'red', 'coords': [47.61958693, 9.642241],'infos': []},
{'uid': '3ae197ddb85', 'name': 'Wiesensee', 'color': 'red', 'coords': [49.59488, 8.63376],'infos': ['angeln', 'kiosk', 'opnv', 'spielplatz', 'volleyball', 'wc']},
{'uid': 'ad9bd334bce', 'name': 'Wildparkseen', 'color': 'red', 'coords': [48.75733898, 9.09563581],'infos': []},
{'uid': 'd743e6327d5', 'name': 'Wildsee, Kaltenbronn', 'color': 'red', 'coords': [48.7180359, 8.45897913],'infos': []},
{'uid': 'ec675c18615', 'name': 'Wuhrmühleweiher', 'color': 'red', 'coords': [47.76750344, 9.91803508],'infos': []},
{'uid': '4cc85c9fe93', 'name': 'Zeller See, Bad Schussenried', 'color': 'red', 'coords': [48.00180, 9.64573],'infos': ['kiosk', 'wc']},
{'uid': '4756c5c3719', 'name': 'Zellerweiher', 'color': 'red', 'coords': [47.99036274, 9.48019284],'infos': []},
{'uid': '06d61e88b3e', 'name': 'ABTSDORFER SEE', 'color': 'red', 'coords': [47.9181,12.9047],'infos': []},
{'uid': 'a985d0b5667', 'name': 'ALATSEE', 'color': 'red', 'coords': [47.5611,10.6364],'infos': []},
{'uid': 'ef09551305f', 'name': 'ALPSEE', 'color': 'red', 'coords': [47.5467,10.7239],'infos': []},
{'uid': '17c45bbf72f', 'name': 'ALTMAINSEE', 'color': 'red', 'coords': [50.0528,10.9428],'infos': []},
{'uid': 'b71d8472cf5', 'name': 'ALTMUEHLSEE', 'color': 'red', 'coords': [49.1311,10.7364],'infos': []},
{'uid': '6cf7a8db4b0', 'name': 'ALTMUEHLSEE', 'color': 'red', 'coords': [49.1442,10.7278],'infos': []},
{'uid': '77b0e0538fc', 'name': 'ALTMUEHLSEE', 'color': 'red', 'coords': [49.1283,10.7214],'infos': []},
{'uid': 'e1ab2aa99bc', 'name': 'AMMERSEE', 'color': 'red', 'coords': [47.9472,11.1483],'infos': []},
{'uid': '08e4f19a7d0', 'name': 'AMMERSEE', 'color': 'red', 'coords': [47.9619,11.1086],'infos': []},
{'uid': '6b35ff96106', 'name': 'AMMERSEE', 'color': 'red', 'coords': [48.0692,11.1103],'infos': []},
{'uid': '5ef4485eea7', 'name': 'AMMERSEE', 'color': 'red', 'coords': [47.9972,11.1658],'infos': []},
{'uid': '8629ec90d18', 'name': 'AMMERSEE', 'color': 'red', 'coords': [47.9811,11.0986],'infos': []},
{'uid': '3f208645bda', 'name': 'AMMERSEE', 'color': 'red', 'coords': [48.0547,11.1022],'infos': []},
{'uid': '0a468c3483e', 'name': 'AMMERSEE', 'color': 'red', 'coords': [48.0233,11.0975],'infos': []},
{'uid': '83d27a8d169', 'name': 'ANGELBERGER BADEWEIHER', 'color': 'red', 'coords': [48.4481,11.7903],'infos': []},
{'uid': 'd9f60278776', 'name': 'AUENSEE JODITZ', 'color': 'red', 'coords': [50.3783,11.8372],'infos': []},
{'uid': '75908cda260', 'name': 'AUER BADESEE', 'color': 'red', 'coords': [48.2464,10.0858],'infos': []},
{'uid': '666e31c3ce4', 'name': 'AUTOBAHNSEE', 'color': 'red', 'coords': [48.4119,10.9272],'infos': []},
{'uid': '24ed9c1766f', 'name': 'AUWALDSEE', 'color': 'red', 'coords': [48.5653,10.4486],'infos': []},
{'uid': 'f1a59f98919', 'name': 'BADE- UND PADDELTEICH KOTHEN', 'color': 'red', 'coords': [50.3744,9.7717],'infos': []},
{'uid': '4c422d50e5e', 'name': 'BADESEE BURGWALLBACH', 'color': 'red', 'coords': [50.3539,10.1261],'infos': []},
{'uid': '4a27e0cdb6a', 'name': 'BADESEE GOSSMANNSDORF', 'color': 'red', 'coords': [50.1375,10.5767],'infos': []},
{'uid': 'c248f323586', 'name': 'BADESEE GRETLMUEHLE', 'color': 'red', 'coords': [48.5739,12.2208],'infos': []},
{'uid': '4fccac2fb5f', 'name': 'BADESEE HOCHMÜHL', 'color': 'red', 'coords': [48.2797,12.7086],'infos': []},
{'uid': '34d49e91226', 'name': 'BADESEE IRMELSHAUSEN', 'color': 'red', 'coords': [50.3678,10.4781],'infos': []},
{'uid': 'ab2adeac7ac', 'name': 'Badesee Lechfeld', 'color': 'red', 'coords': [48.525,10.8861],'infos': []},
{'uid': '530bc369e85', 'name': 'BADESEE NIEDERFORST', 'color': 'red', 'coords': [48.7058,11.3206],'infos': []},
{'uid': '785c26291cd', 'name': 'BADESEE NIEDERFORST (GROSS)', 'color': 'red', 'coords': [48.7053,11.3336],'infos': []},
{'uid': '55530c1b01e', 'name': 'BADESEE NIEDERNBERG', 'color': 'red', 'coords': [49.9014,9.1356],'infos': []},
{'uid': 'f6ef0e4b466', 'name': 'BADESEE POING', 'color': 'red', 'coords': [48.1775,11.7833],'infos': []},
{'uid': '57afc355698', 'name': 'BADESEE THANSAU', 'color': 'red', 'coords': [47.8264,12.1494],'infos': []},
{'uid': 'de100b66817', 'name': 'BADESEE THANSAU', 'color': 'red', 'coords': [47.8253,12.1497],'infos': []},
{'uid': '9d5ca6957e8', 'name': 'BADESEE TREBGAST', 'color': 'red', 'coords': [50.055,11.5383],'infos': []},
{'uid': '07485ea95c6', 'name': 'BADEWEIHER GEGENBACH', 'color': 'red', 'coords': [48.7081,13.7667],'infos': []},
{'uid': '8460b4528eb', 'name': 'BADEWEIHER MARKT SCHWABEN', 'color': 'red', 'coords': [48.1789,11.8842],'infos': []},
{'uid': '78c422990b8', 'name': 'BADEWEIHER STEINHOERING', 'color': 'red', 'coords': [48.0939,12.0444],'infos': []},
{'uid': 'ef709b0f06e', 'name': 'BAD WIESMUEHLE', 'color': 'red', 'coords': [47.9825,11.8644],'infos': []},
{'uid': 'eb54c700347', 'name': 'BAGGERSEE-WASSERLEITE', 'color': 'red', 'coords': [47.7589,12.1358],'infos': []},
{'uid': '317119c5133', 'name': 'BAGGERSEE BAUNACH', 'color': 'red', 'coords': [49.9758,10.8606],'infos': []},
{'uid': '1cf1c04436e', 'name': 'BAGGERSEE BREITENGUESSBACH', 'color': 'red', 'coords': [49.9853,10.8778],'infos': []},
{'uid': 'd0d076a5852', 'name': 'BAGGERSEE EBING', 'color': 'red', 'coords': [50.0081,10.9119],'infos': []},
{'uid': '50c0e03540c', 'name': 'BAGGERSEE HIRSCHAID', 'color': 'red', 'coords': [49.8122,11.0022],'infos': []},
{'uid': 'b35e97e3c78', 'name': 'BAGGERSEE KLEINSENDELBACH - WESTLICHER SEE', 'color': 'red', 'coords': [49.5933,11.1403],'infos': []},
{'uid': 'ed87f4d1e99', 'name': 'BAGGERSEE RIEDLINGEN', 'color': 'red', 'coords': [48.7033,10.7617],'infos': []},
{'uid': 'f10d2af944d', 'name': 'BAGGERSEE SCHWEINFURTER KREUZ', 'color': 'red', 'coords': [50.0178,10.2317],'infos': []},
{'uid': 'adf9c6a8663', 'name': 'BAGGERSEE WASSERLEITE', 'color': 'red', 'coords': [47.7592,12.1342],'infos': []},
{'uid': '703fc45d565', 'name': 'BAGGERSEE', 'color': 'red', 'coords': [48.7533,11.3978],'infos': []},
{'uid': '86a0d2ada66', 'name': 'BAGGERSEE', 'color': 'red', 'coords': [48.3919,13.3064],'infos': []},
{'uid': 'eb28521d700', 'name': 'BAGGERSEE', 'color': 'red', 'coords': [48.4111,13.3911],'infos': []},
{'uid': '9adf9350567', 'name': 'BAGGERSEE', 'color': 'red', 'coords': [49.5047,11.4642],'infos': []},
{'uid': 'e12ab06fad6', 'name': 'BANNWALDSEE', 'color': 'red', 'coords': [47.5942,10.7753],'infos': []},
{'uid': 'a890947623f', 'name': 'BARMSEE', 'color': 'red', 'coords': [47.5025,11.2444],'infos': []},
{'uid': 'bdffc891329', 'name': 'BAYERSOIENER SEE', 'color': 'red', 'coords': [47.6886,11.0058],'infos': []},
{'uid': 'd2c46698625', 'name': 'BERGHAMER SEE', 'color': 'red', 'coords': [48.2122,12.9506],'infos': []},
{'uid': '058f0fff510', 'name': 'BIBISEE', 'color': 'red', 'coords': [47.8358,11.4706],'infos': []},
{'uid': '7d237f48767', 'name': 'BIRKENSEE', 'color': 'red', 'coords': [49.4569,11.2633],'infos': []},
{'uid': 'bf958a70873', 'name': 'BISMARCKWEIHER', 'color': 'red', 'coords': [47.7106,10.8636],'infos': []},
{'uid': 'd09efbc403b', 'name': 'BODENSEE', 'color': 'red', 'coords': [47.5667,9.6422],'infos': []},
{'uid': '90b408b1dda', 'name': 'BODENSEE', 'color': 'red', 'coords': [47.5369,9.7294],'infos': []},
{'uid': '6b224ee99a2', 'name': 'BODENSEE', 'color': 'red', 'coords': [47.5575,9.6597],'infos': []},
{'uid': '2f79ea6d516', 'name': 'BODENSEE', 'color': 'red', 'coords': [47.5494,9.7169],'infos': []},
{'uid': '15b1de604aa', 'name': 'BODENSEE', 'color': 'red', 'coords': [47.5764,9.6086],'infos': []},
{'uid': '06219e5a015', 'name': 'BURGWOERTHSEE', 'color': 'red', 'coords': [48.6717,10.6981],'infos': []},
{'uid': '73c9ab159bd', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.93,12.4786],'infos': []},
{'uid': '597d89419e5', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8361,12.3746],'infos': []},
{'uid': 'ac6895b36c2', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8822,12.385],'infos': []},
{'uid': '49444c7807c', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8648,12.368],'infos': []},
{'uid': '0e0649367af', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8403,12.3758],'infos': []},
{'uid': '054467c0f12', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8961,12.5272],'infos': []},
{'uid': '415e29b4bee', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8495,12.4745],'infos': []},
{'uid': '6af7cafbf5c', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.9133,12.4381],'infos': []},
{'uid': 'f19f3170dec', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8844,12.4203],'infos': []},
{'uid': '26c61ae357c', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8319,12.3803],'infos': []},
{'uid': '6a9f0670f60', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.9322,12.4872],'infos': []},
{'uid': 'ed81c9413f0', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8561,12.4714],'infos': []},
{'uid': 'e9851f7e85d', 'name': 'CHIEMSEE', 'color': 'red', 'coords': [47.8753,12.3567],'infos': []},
{'uid': '78d054de41e', 'name': 'DECHSENDORFER WEIHER', 'color': 'red', 'coords': [49.6286,10.9542],'infos': []},
{'uid': 'd9d32b2dc9d', 'name': 'DIETLHOFER SEE', 'color': 'red', 'coords': [47.8578,11.1603],'infos': []},
{'uid': '4ab1bbd218f', 'name': 'EBENHAUSENER WEIHER', 'color': 'red', 'coords': [48.6747,11.4736],'infos': []},
{'uid': '2b875593463', 'name': 'EBENREUTH-SEE', 'color': 'red', 'coords': [48.7986,13.2819],'infos': []},
{'uid': '0848cd4bd84', 'name': 'EBENSFELDER SEE', 'color': 'red', 'coords': [50.0781,10.9575],'infos': []},
{'uid': 'e0440340f24', 'name': 'ECHINGER SEE', 'color': 'red', 'coords': [48.2881,11.6333],'infos': []},
{'uid': '3fc7e5c11a0', 'name': 'ECKENBUEHLER WEIHER', 'color': 'red', 'coords': [47.7461,11.2172],'infos': []},
{'uid': '6d79af5f73f', 'name': 'EIBSEE', 'color': 'red', 'coords': [47.4606,10.9861],'infos': []},
{'uid': '2bc4f9fc1cc', 'name': 'EIBSEE', 'color': 'red', 'coords': [47.4531,10.9792],'infos': []},
{'uid': '33c28093f65', 'name': 'EICHSEE', 'color': 'red', 'coords': [47.6797,11.3322],'infos': []},
{'uid': '50c3cea1857', 'name': 'EITZENBERGER WEIHER', 'color': 'red', 'coords': [47.7853,11.3628],'infos': []},
{'uid': 'adbb0a04b9c', 'name': 'ELBSEE', 'color': 'red', 'coords': [47.8011,10.5547],'infos': []},
{'uid': '04fbca59afb', 'name': 'ELLERTSHAEUSER SEE', 'color': 'red', 'coords': [50.1511,10.3797],'infos': []},
{'uid': 'd46c15a0620', 'name': 'ERBENSCHWANGER WEIHER', 'color': 'red', 'coords': [47.8078,10.7947],'infos': []},
{'uid': 'bede6a86515', 'name': 'ERDBEERSEE', 'color': 'red', 'coords': [48.4278,10.3114],'infos': []},
{'uid': '503b206d0cb', 'name': 'ERLENSEE LAIN', 'color': 'red', 'coords': [48.3253,12.2453],'infos': []},
{'uid': '707303092e9', 'name': 'ERLENSEE', 'color': 'red', 'coords': [47.9242,12.1356],'infos': []},
{'uid': '2cfa071be53', 'name': 'ERLENSEE', 'color': 'red', 'coords': [49.2108,10.1794],'infos': []},
{'uid': '63342badfa5', 'name': 'ERLENWEIHER', 'color': 'red', 'coords': [49.8567,12.1042],'infos': []},
{'uid': 'ec6aab184e1', 'name': 'ETTINGER WEIHER', 'color': 'red', 'coords': [47.79,11.1561],'infos': []},
{'uid': '55800f3b33f', 'name': 'ETTWIESER WEIHER', 'color': 'red', 'coords': [47.7517,10.6103],'infos': []},
{'uid': '0c37b491d85', 'name': 'FASANERIESEE', 'color': 'red', 'coords': [48.2078,11.5317],'infos': []},
{'uid': '365532c8815', 'name': 'FAULENSEE', 'color': 'red', 'coords': [47.6233,10.6978],'infos': []},
{'uid': '5993318b6db', 'name': 'FELDMOCHINGER SEE', 'color': 'red', 'coords': [48.2111,11.5131],'infos': []},
{'uid': '57d409fb63c', 'name': 'FERCHENSEE', 'color': 'red', 'coords': [47.4381,11.2153],'infos': []},
{'uid': 'c449e19e85f', 'name': 'FERINGASEE', 'color': 'red', 'coords': [48.1925,11.6717],'infos': []},
{'uid': 'aa28080ba56', 'name': 'FLORIANSEE', 'color': 'red', 'coords': [47.8344,12.1425],'infos': []},
{'uid': '448949217f6', 'name': 'FOHNSEE', 'color': 'red', 'coords': [47.7794,11.3153],'infos': []},
{'uid': '2a24640284e', 'name': 'FORGGENSEE', 'color': 'red', 'coords': [47.6361,10.7386],'infos': []},
{'uid': '718504b57b3', 'name': 'FORGGENSEE', 'color': 'red', 'coords': [47.5983,10.7381],'infos': []},
{'uid': '4a54c720bb2', 'name': 'FORGGENSEE', 'color': 'red', 'coords': [47.6411,10.7347],'infos': []},
{'uid': 'f629bed0508', 'name': 'FREIBAD CLEVERS', 'color': 'red', 'coords': [47.8825,10.2178],'infos': []},
{'uid': 'a300d4a09f6', 'name': 'FREIBERGSEE', 'color': 'red', 'coords': [47.3822,10.27],'infos': []},
{'uid': '9ec7280abe3', 'name': 'FREIZEITZENTRUM HASELFURTH', 'color': 'red', 'coords': [48.4808,12.0136],'infos': []},
{'uid': '1923609302e', 'name': 'FREUDENSEE', 'color': 'red', 'coords': [48.6589,13.6386],'infos': []},
{'uid': 'e0a078a6014', 'name': 'FRIDOLFINGER SEE', 'color': 'red', 'coords': [47.9961,12.8408],'infos': []},
{'uid': 'fe571a2fdcc', 'name': 'FRIEDBERGER BAGGERSEE', 'color': 'red', 'coords': [48.3642,10.9819],'infos': []},
{'uid': 'bfcec8df582', 'name': 'FRIEDELSEE', 'color': 'red', 'coords': [48.0181,12.3047],'infos': []},
{'uid': 'd6599905b0c', 'name': 'FRIEDENHAINSEE', 'color': 'red', 'coords': [48.9308,12.5786],'infos': []},
{'uid': 'b7dc43409d8', 'name': 'FROSCHHAUSER SEE', 'color': 'red', 'coords': [47.6875,11.2267],'infos': []},
{'uid': 'af34ba43403', 'name': 'FÖRMITZSPEICHER', 'color': 'red', 'coords': [50.1956,11.9114],'infos': []},
{'uid': 'bf3ff29b078', 'name': 'GARCHINGER SEE', 'color': 'red', 'coords': [48.2611,11.6417],'infos': []},
{'uid': 'f4f6cc12ad3', 'name': 'GARTNERSEE', 'color': 'red', 'coords': [48.5444,10.3833],'infos': []},
{'uid': 'dfac3b7bbbc', 'name': 'GERMERINGER SEE', 'color': 'red', 'coords': [48.1381,11.3444],'infos': []},
{'uid': 'ed1124d2ddd', 'name': 'GEROLDSEE', 'color': 'red', 'coords': [47.4928,11.2183],'infos': []},
{'uid': '78f0f03970a', 'name': 'GROSSER ALPSEE', 'color': 'red', 'coords': [47.5681,10.1617],'infos': []},
{'uid': '89e719d1b54', 'name': 'GROSSER SEE', 'color': 'red', 'coords': [49.8533,9.8547],'infos': []},
{'uid': '0ff5fee9d91', 'name': 'GROSSER WEIHER', 'color': 'red', 'coords': [49.7819,12.3311],'infos': []},
{'uid': 'c2cf8c35af1', 'name': 'GROßER BROMBACHSEE', 'color': 'red', 'coords': [49.1328,10.9583],'infos': []},
{'uid': '67ef8b9017a', 'name': 'GROßER BROMBACHSEE', 'color': 'red', 'coords': [49.1206,10.9575],'infos': []},
{'uid': '941b26e5a42', 'name': 'GROßER BROMBACHSEE', 'color': 'red', 'coords': [49.1428,10.9161],'infos': []},
{'uid': 'ce729aa9644', 'name': 'GROßER BROMBACHSEE', 'color': 'red', 'coords': [49.1217,10.93],'infos': []},
{'uid': '7a2e66f3144', 'name': 'GRUBSEE', 'color': 'red', 'coords': [47.4936,11.2475],'infos': []},
{'uid': '5c638a0788f', 'name': 'GRUENTENSEE', 'color': 'red', 'coords': [47.364,10.264],'infos': []},
{'uid': 'a51ad8ccd53', 'name': 'GUGGENBERGER SEE', 'color': 'red', 'coords': [48.9814,12.2281],'infos': []},
{'uid': '32439ef33db', 'name': 'HAAGER BADEWEIHER', 'color': 'red', 'coords': [48.465,11.8256],'infos': []},
{'uid': '9de6d09959e', 'name': 'HAARSEE', 'color': 'red', 'coords': [47.8114,11.2228],'infos': []},
{'uid': '12e4b7e2af9', 'name': 'HACKERWEIHER', 'color': 'red', 'coords': [48.8272,12.8889],'infos': []},
{'uid': '05a00a99663', 'name': 'HAHNENKAMMSEE', 'color': 'red', 'coords': [48.9656,10.7214],'infos': []},
{'uid': '53f8d548072', 'name': 'HALFINGER BADESEE', 'color': 'red', 'coords': [47.9433,12.277],'infos': []},
{'uid': '0f62e087bd5', 'name': 'HAMMERSEE', 'color': 'red', 'coords': [49.2754,12.324],'infos': []},
{'uid': 'bef8600b34e', 'name': 'HAMMERSEE', 'color': 'red', 'coords': [49.2755,12.3046],'infos': []},
{'uid': '09fca9543f3', 'name': 'HAPPINGER-AU-SEE', 'color': 'red', 'coords': [47.8308,12.1406],'infos': []},
{'uid': 'aacc32c6665', 'name': 'HAPPINGER SEE', 'color': 'red', 'coords': [47.8197,12.1314],'infos': []},
{'uid': '3c836c74a5a', 'name': 'HAPPINGER SEE', 'color': 'red', 'coords': [47.8144,12.1267],'infos': []},
{'uid': '23303605a5d', 'name': 'HARTSEE', 'color': 'red', 'coords': [47.9294,12.3711],'infos': []},
{'uid': '7686020dc43', 'name': 'HASLACHER SEE', 'color': 'red', 'coords': [47.7497,10.7894],'infos': []},
{'uid': 'c28c8cde2d8', 'name': 'HAWAII-SEE', 'color': 'red', 'coords': [47.7325,12.1294],'infos': []},
{'uid': 'd1e3147b2f2', 'name': 'HEIDEWEIHER', 'color': 'red', 'coords': [48.6658,11.4839],'infos': []},
{'uid': '8a3b914439d', 'name': 'HEILIGMANNSEE', 'color': 'red', 'coords': [48.3713,10.4287],'infos': []},
{'uid': 'e4d07cc30d9', 'name': 'HEIMSTETTENER SEE', 'color': 'red', 'coords': [48.1583,11.7417],'infos': []},
{'uid': 'ada8260accd', 'name': 'HOCHSTRASSER SEE', 'color': 'red', 'coords': [47.8097,12.1372],'infos': []},
{'uid': '4d4efa97760', 'name': 'HOEDENAUER-SEE', 'color': 'red', 'coords': [47.6283,12.1903],'infos': []},
{'uid': '0eaedb5857d', 'name': 'HOEGLWOERTHER SEE', 'color': 'red', 'coords': [47.7658,12.8428],'infos': []},
{'uid': '849acda3154', 'name': 'HOFSTAETTER SEE', 'color': 'red', 'coords': [47.8986,12.1731],'infos': []},
{'uid': 'c877dfdca9c', 'name': 'HOFSTAETTER SEE', 'color': 'red', 'coords': [47.9033,12.1756],'infos': []},
{'uid': 'c0a227ebcdf', 'name': 'HOPFENSEE', 'color': 'red', 'coords': [47.6083,10.6717],'infos': []},
{'uid': '521a1ff494a', 'name': 'HORHAEUSER SEE', 'color': 'red', 'coords': [50.0125,10.4467],'infos': []},
{'uid': '93a20679a71', 'name': 'HUBERWEIHER', 'color': 'red', 'coords': [47.7664,11.3478],'infos': []},
{'uid': 'a8600e12d6a', 'name': 'IGELSBACHSEE', 'color': 'red', 'coords': [49.145,10.9114],'infos': []},
{'uid': '63f3869f33b', 'name': 'ILLASBERGSEE', 'color': 'red', 'coords': [47.6453,10.7636],'infos': []},
{'uid': 'd5e9d9bcb1f', 'name': 'INGOLSTADT', 'color': 'red', 'coords': [48.7517,11.4658],'infos': []},
{'uid': 'e368053a28d', 'name': 'JOSHOFENER WEIHER', 'color': 'red', 'coords': [48.7497,11.2275],'infos': []},
{'uid': '5cc9b93cf61', 'name': 'KALTENBRUNNER SEE', 'color': 'red', 'coords': [47.6608,10.7961],'infos': []},
{'uid': 'a4ebd6989d1', 'name': 'KARLSFELDER SEE', 'color': 'red', 'coords': [48.2386,11.4669],'infos': []},
{'uid': '82e4086638f', 'name': 'KASTENSEEONER SEE', 'color': 'red', 'coords': [47.9886,11.8322],'infos': []},
{'uid': '7a46c0d06e6', 'name': 'KETTENHAMMER WEIHER', 'color': 'red', 'coords': [47.9997,12.1992],'infos': []},
{'uid': 'ea963fb48de', 'name': 'KIEFERER-SEE', 'color': 'red', 'coords': [47.6086,12.2047],'infos': []},
{'uid': '0c7a3389fd0', 'name': 'KIPP-WEIHER', 'color': 'red', 'coords': [49.8928,12.1875],'infos': []},
{'uid': '4de982e724e', 'name': 'KLAUSENSEE', 'color': 'red', 'coords': [49.2931,12.1053],'infos': []},
{'uid': 'd3c31fb7cf9', 'name': 'KLEIDERSEE', 'color': 'red', 'coords': [50.0092,10.5544],'infos': []},
{'uid': 'c5f72b68a78', 'name': 'KLEINER ALPSEE', 'color': 'red', 'coords': [47.5672,10.2147],'infos': []},
{'uid': '77e466489a7', 'name': 'KLEINER BROMBACHSEE', 'color': 'red', 'coords': [49.1378,10.8806],'infos': []},
{'uid': 'efc6dca92a5', 'name': 'KLEINER BROMBACHSEE', 'color': 'red', 'coords': [49.1303,10.8633],'infos': []},
{'uid': 'cd0bfc5c8a1', 'name': 'KLEINER BROMBACHSEE', 'color': 'red', 'coords': [49.1358,10.8939],'infos': []},
{'uid': '27d63504211', 'name': 'KLEINER SEE', 'color': 'red', 'coords': [49.8511,9.8578],'infos': []},
{'uid': 'b0d47e2ad1d', 'name': 'KLOSTERSEE', 'color': 'red', 'coords': [48.085,11.9678],'infos': []},
{'uid': 'e084f439b23', 'name': 'KLOSTERSEE', 'color': 'red', 'coords': [49.8025,9.6175],'infos': []},
{'uid': 'cc850e16129', 'name': 'KOEHLER BAD', 'color': 'red', 'coords': [47.9858,12.2422],'infos': []},
{'uid': '69efcba2e36', 'name': 'KOESSEINEBAD', 'color': 'red', 'coords': [49.9792,12.0475],'infos': []},
{'uid': '6d841114bd6', 'name': 'KOPPENBERGWEIHER', 'color': 'red', 'coords': [47.7353,11.2819],'infos': []},
{'uid': '1403e2debde', 'name': 'KRATZMUEHLSEE', 'color': 'red', 'coords': [49.0047,11.4461],'infos': []},
{'uid': '2f04b8437ed', 'name': 'KREBSSEE', 'color': 'red', 'coords': [49.9806,10.4956],'infos': []},
{'uid': '09ad04018bd', 'name': 'KREISWEIHER', 'color': 'red', 'coords': [48.7042,11.5556],'infos': []},
{'uid': 'b8cb8c3481e', 'name': 'KREUTHER SEE', 'color': 'red', 'coords': [47.6272,12.1861],'infos': []},
{'uid': 'ec6c7671427', 'name': 'KRUMMWEIHER', 'color': 'red', 'coords': [49.1375,10.5408],'infos': []},
{'uid': '779f42dc4c3', 'name': 'KUHSEE', 'color': 'red', 'coords': [48.3414,10.9411],'infos': []},
{'uid': 'e4884beda74', 'name': 'LANGBUERGNER SEE', 'color': 'red', 'coords': [47.9047,12.3453],'infos': []},
{'uid': '524187dbd45', 'name': 'LANGBUERGNER SEE', 'color': 'red', 'coords': [47.9033,12.36],'infos': []},
{'uid': 'fdd50d11ea7', 'name': 'LANGENPREISINGER WEIHER', 'color': 'red', 'coords': [48.4219,11.9644],'infos': []},
{'uid': '8b4a9c0ab42', 'name': 'LANGWIEDER SEE', 'color': 'red', 'coords': [48.1983,11.4172],'infos': []},
{'uid': '3cc45d69589', 'name': 'LAUTERSEE', 'color': 'red', 'coords': [47.4403,11.2375],'infos': []},
{'uid': '4239c645f94', 'name': 'LECHBAD', 'color': 'red', 'coords': [47.7986,10.8944],'infos': []},
{'uid': '05e68574a36', 'name': 'LECHSTAUSTUFE 23 (MANDICHOSEE)', 'color': 'red', 'coords': [48.2564,10.9361],'infos': []},
{'uid': 'b318da48fca', 'name': 'LERCHENAUER SEE', 'color': 'red', 'coords': [48.1997,11.5383],'infos': []},
{'uid': '9859aab6fc2', 'name': 'LINDENBERG I.ALLGAEU', 'color': 'red', 'coords': [47.6042,9.8708],'infos': []},
{'uid': '2cea380aaa8', 'name': 'LUDWIGSFELDER BADESEE', 'color': 'red', 'coords': [48.3678,10.0269],'infos': []},
{'uid': '0e8d3d6ecdb', 'name': 'LUGENAUER SEE', 'color': 'red', 'coords': [47.7644,10.9944],'infos': []},
{'uid': '425bc667f9f', 'name': 'LUSS-SEE', 'color': 'red', 'coords': [48.1994,11.4197],'infos': []},
{'uid': 'e2ace1e2b5a', 'name': 'LUTZENBERGER SEE', 'color': 'red', 'coords': [48.4777,10.2875],'infos': []},
{'uid': '236210fd794', 'name': 'MAINAUE-OBERAUHOF', 'color': 'red', 'coords': [50.0983,11.4031],'infos': []},
{'uid': '96faf9457e4', 'name': 'MAINPARKSEE', 'color': 'red', 'coords': [49.9897,9.0697],'infos': []},
{'uid': 'c6fe066674b', 'name': 'MAINPARKSEE', 'color': 'red', 'coords': [49.9858,9.0743],'infos': []},
{'uid': 'fedada25083', 'name': 'MANDLACHSEE', 'color': 'red', 'coords': [48.5525,11.0675],'infos': []},
{'uid': '854adc27b6e', 'name': 'MARKTLER BADESEE', 'color': 'red', 'coords': [48.2697,12.8253],'infos': []},
{'uid': '0268458b78d', 'name': 'MAURER SEE', 'color': 'red', 'coords': [48.785,11.7292],'infos': []},
{'uid': '80083f897f5', 'name': 'MEERHOFSEE', 'color': 'red', 'coords': [50.0859,9.0466],'infos': []},
{'uid': 'd3ed59c8ef3', 'name': 'MEERHOFSEE', 'color': 'red', 'coords': [50.0864,9.0494],'infos': []},
{'uid': 'a6f5fc30410', 'name': 'MEERHOFSEE', 'color': 'red', 'coords': [50.0856,9.0489],'infos': []},
{'uid': 'b6f059d5498', 'name': 'MITTERLACHE', 'color': 'red', 'coords': [47.8058,11.2214],'infos': []},
{'uid': '7a181306003', 'name': 'MITTERSEE', 'color': 'red', 'coords': [47.5633,10.6831],'infos': []},
{'uid': '86736cfdea7', 'name': 'MOOSINNINGER WEIHER', 'color': 'red', 'coords': [48.2822,11.82],'infos': []},
{'uid': '41f58d615ca', 'name': 'MOOSWALDSEEN', 'color': 'red', 'coords': [48.4911,10.2494],'infos': []},
{'uid': '922246a57c3', 'name': 'MOSSANDL-WEIHER', 'color': 'red', 'coords': [48.6719,12.5789],'infos': []},
{'uid': '56d9424e65e', 'name': 'MUEHL-SEE', 'color': 'red', 'coords': [48.3331,11.6558],'infos': []},
{'uid': '09709b84e07', 'name': 'MURNER SEE', 'color': 'red', 'coords': [49.3494,12.2039],'infos': []},
{'uid': '5f3e082c424', 'name': 'NAHERHOLUNGSGEBIET ERDING NORD', 'color': 'red', 'coords': [48.3244,11.9106],'infos': []},
{'uid': '0ad28eabb4d', 'name': 'NATURBADESEEANLAGE', 'color': 'red', 'coords': [49.9758,9.9578],'infos': []},
{'uid': '923717cebb8', 'name': 'NATURBADESEE GRAFENRHEINFELD', 'color': 'red', 'coords': [50.0092,10.2081],'infos': []},
{'uid': 'fbce27df1fb', 'name': 'NATURBAD HOELLOHE', 'color': 'red', 'coords': [49.2306,12.0919],'infos': []},
{'uid': '569444f27f5', 'name': 'NATURBAD NEUREICHENAU', 'color': 'red', 'coords': [48.7472,13.7446],'infos': []},
{'uid': 'e4f59ff07f3', 'name': 'NATURBAD RUSSWEIHER', 'color': 'red', 'coords': [49.7564,11.8139],'infos': []},
{'uid': '8f3a13d287a', 'name': 'NATURFREIBAD HAGENMOOS', 'color': 'red', 'coords': [47.8458,10.4033],'infos': []},
{'uid': '320294c0b61', 'name': 'NATURFREIBAD HAUNSTETTEN', 'color': 'red', 'coords': [48.3064,10.8964],'infos': []},
{'uid': '27176601f11', 'name': 'NATURFREIBAD', 'color': 'red', 'coords': [48.6047,13.5542],'infos': []},
{'uid': 'c682156e3cd', 'name': 'NATURFREIBAD', 'color': 'red', 'coords': [49.9919,12.0794],'infos': []},
{'uid': '413d3c0e388', 'name': 'NIEDERAUDORFER BAGGERSEE', 'color': 'red', 'coords': [47.6747,12.1686],'infos': []},
{'uid': '4065fb0fed7', 'name': 'NIEDERSONTHOFENER SEE', 'color': 'red', 'coords': [47.3755,10.1505],'infos': []},
{'uid': '19ee5e3d218', 'name': 'NIEDERSONTHOFENER SEE', 'color': 'red', 'coords': [47.3809,10.1646],'infos': []},
{'uid': 'ec0717659b6', 'name': 'NIEDERSTIMMER WEIHER', 'color': 'red', 'coords': [48.7033,11.4644],'infos': []},
{'uid': '501c891e25b', 'name': 'NOERDLICHER FILZINGER BADESEE', 'color': 'red', 'coords': [48.1364,10.1133],'infos': []},
{'uid': 'f31ad369ae6', 'name': 'OBERHAUSER BADESEE', 'color': 'red', 'coords': [47.7819,11.1278],'infos': []},
{'uid': '1858953e7fd', 'name': 'OBERRIEDER WEIHER', 'color': 'red', 'coords': [48.2297,10.2983],'infos': []},
{'uid': '129eb97ce3b', 'name': 'OBERSEE', 'color': 'red', 'coords': [47.5633,10.6786],'infos': []},
{'uid': '58a02fc3896', 'name': 'OGGENRIEDER WEIHER', 'color': 'red', 'coords': [47.9119,10.5647],'infos': []},
{'uid': '14afe86fff3', 'name': 'OLCHINGER SEE', 'color': 'red', 'coords': [48.2094,11.3581],'infos': []},
{'uid': 'c54b2b6dd08', 'name': 'ORTSWIESENSEE', 'color': 'red', 'coords': [50.1586,11.0861],'infos': []},
{'uid': 'f71601e8ec7', 'name': 'OSTERSEE', 'color': 'red', 'coords': [47.7961,11.3047],'infos': []},
{'uid': 'b388fbc160a', 'name': 'OSTERSEE', 'color': 'red', 'coords': [47.7814,11.3075],'infos': []},
{'uid': 'ac938ee15b2', 'name': 'OSTSEE', 'color': 'red', 'coords': [50.1147,10.9839],'infos': []},
{'uid': '5e19863ab59', 'name': 'PELHAMER SEE', 'color': 'red', 'coords': [47.9333,12.3436],'infos': []},
{'uid': 'ebd52a73e56', 'name': 'PENZINGER SEE', 'color': 'red', 'coords': [48.07,12.2511],'infos': []},
{'uid': 'd204587b270', 'name': 'PERACHER BADESEE', 'color': 'red', 'coords': [48.2558,12.7583],'infos': []},
{'uid': '061e00c119a', 'name': 'PERLSEE', 'color': 'red', 'coords': [49.3917,12.7],'infos': []},
{'uid': '7fed6768022', 'name': 'PFLEGERSEE', 'color': 'red', 'coords': [47.52,11.0814],'infos': []},
{'uid': '607ecd3ba85', 'name': 'PFUHLER BADESEE', 'color': 'red', 'coords': [48.4272,10.0422],'infos': []},
{'uid': '3ca973b61d4', 'name': 'PILSENSEE', 'color': 'red', 'coords': [48.0239,11.1961],'infos': []},
{'uid': '05611d04774', 'name': 'RADERSDORFER BAGGERSEE', 'color': 'red', 'coords': [48.5081,11.1586],'infos': []},
{'uid': 'f5fb716c705', 'name': 'RAISTINGER WEIHER', 'color': 'red', 'coords': [47.9053,11.1192],'infos': []},
{'uid': '2bd382e35ef', 'name': 'RANNASEE', 'color': 'red', 'coords': [48.5661,13.76],'infos': []},
{'uid': '5a05446f053', 'name': 'REGATTASEE', 'color': 'red', 'coords': [48.2444,11.5258],'infos': []},
{'uid': '4bd9e5dc099', 'name': 'REIFINGER SEE', 'color': 'red', 'coords': [47.7744,12.4603],'infos': []},
{'uid': '856692db8cf', 'name': 'REISCHENHARTER SEE', 'color': 'red', 'coords': [47.7667,12.1281],'infos': []},
{'uid': '3d196ccccd0', 'name': 'RIEGSEE', 'color': 'red', 'coords': [47.7067,11.2186],'infos': []},
{'uid': 'af38b5fa2eb', 'name': 'RIEGSEE', 'color': 'red', 'coords': [47.7006,11.2275],'infos': []},
{'uid': '4443d8b6454', 'name': 'RIEMER-SEE', 'color': 'red', 'coords': [48.1257,11.7056],'infos': []},
{'uid': 'c17cab3d6eb', 'name': 'RIESSERSEE', 'color': 'red', 'coords': [47.4783,11.0814],'infos': []},
{'uid': '8d003c64300', 'name': 'RINSSEE', 'color': 'red', 'coords': [47.9144,12.2111],'infos': []},
{'uid': '7009f09846a', 'name': 'ROHRBACHSEE', 'color': 'red', 'coords': [48.7206,13.2728],'infos': []},
{'uid': '65ba217850c', 'name': 'ROITHER SEE', 'color': 'red', 'coords': [48.974,12.2721],'infos': []},
{'uid': 'b87e0832d75', 'name': 'ROTHAUER SEE', 'color': 'red', 'coords': [48.7425,13.3481],'infos': []},
{'uid': '103d0b57e70', 'name': 'ROTHDACHWEIHER', 'color': 'red', 'coords': [48.1378,10.2481],'infos': []},
{'uid': 'c142ebf7a3e', 'name': 'ROTHENBUERGER WEIHER', 'color': 'red', 'coords': [49.8583,12.3061],'infos': []},
{'uid': '58d42eecabe', 'name': 'ROTHSEE (HAUPTSPERRE)', 'color': 'red', 'coords': [49.2114,11.1861],'infos': []},
{'uid': 'fd36a7337a5', 'name': 'ROTHSEE (VORSPERRE)', 'color': 'red', 'coords': [49.2308,11.1967],'infos': []},
{'uid': '4d095f47f77', 'name': 'ROTHSEE (VORSPERRE)', 'color': 'red', 'coords': [49.2294,11.2006],'infos': []},
{'uid': 'f51b4091167', 'name': 'ROTTACHSEE', 'color': 'red', 'coords': [47.384,10.24],'infos': []},
{'uid': 'f834bccb515', 'name': 'ROTTACHSEE', 'color': 'red', 'coords': [47.6372,10.3689],'infos': []},
{'uid': '319f7618513', 'name': 'ROTTACHSEE', 'color': 'red', 'coords': [47.6372,10.3819],'infos': []},
{'uid': '4b34d0dc62c', 'name': 'ROTTER AUSEE', 'color': 'red', 'coords': [47.9608,12.1531],'infos': []},
{'uid': '69adcfd85d4', 'name': 'RUDERREGATTASTRECKE', 'color': 'red', 'coords': [48.2464,11.5244],'infos': []},
{'uid': '86f5a8bf075', 'name': 'RUECKHALTEBECKEN', 'color': 'red', 'coords': [49.4481,10.4558],'infos': []},
{'uid': 'c08694fee7d', 'name': 'SANDER SEE', 'color': 'red', 'coords': [49.9928,10.5819],'infos': []},
{'uid': '85ee222d45d', 'name': 'SATZDORFER SEE', 'color': 'red', 'coords': [49.2181,12.7014],'infos': []},
{'uid': '789ec57eb2a', 'name': 'SCHACHENWEIHER', 'color': 'red', 'coords': [47.9422,10.27],'infos': []},
{'uid': '46e15b76c2e', 'name': 'SCHIEDATEICH', 'color': 'red', 'coords': [50.2047,11.9608],'infos': []},
{'uid': '48b824c4daa', 'name': 'SCHLIERSEE', 'color': 'red', 'coords': [47.7117,11.8658],'infos': []},
{'uid': '5aa4f81cf58', 'name': 'SCHLIERSEE', 'color': 'red', 'coords': [47.7158,11.86],'infos': []},
{'uid': '91fcbbeb88a', 'name': 'SCHLIERSEE', 'color': 'red', 'coords': [47.7247,11.8703],'infos': []},
{'uid': '40165f85c3a', 'name': 'SCHMUTTERWEIHER', 'color': 'red', 'coords': [47.6769,10.7567],'infos': []},
{'uid': '5d759305b8e', 'name': 'SCHORNWEISACH WEIHER', 'color': 'red', 'coords': [49.401,10.375],'infos': []},
{'uid': '02bf322a699', 'name': 'SCHUETZENHEIM-SEE', 'color': 'red', 'coords': [48.4481,10.1311],'infos': []},
{'uid': '91eb9b84e84', 'name': 'SCHWAIGSEE', 'color': 'red', 'coords': [47.725,10.8417],'infos': []},
{'uid': '86f109395b7', 'name': 'SCHWALTENWEIHER', 'color': 'red', 'coords': [47.6508,10.5767],'infos': []},
{'uid': '8b2cef05d33', 'name': 'SCHWANSEE', 'color': 'red', 'coords': [47.56,10.7194],'infos': []},
{'uid': '2d4f47ea1e8', 'name': 'SEE FREIGERICHT OST', 'color': 'red', 'coords': [50.0863,9.0107],'infos': []},
{'uid': '1ab6359bcd1', 'name': 'SEE FREIGERICHT OST', 'color': 'red', 'coords': [50.0851,9.0105],'infos': []},
{'uid': 'ceee5f8c8a4', 'name': 'SEE FREIGERICHT OST', 'color': 'red', 'coords': [50.0833,9.0101],'infos': []},
{'uid': '6e490bdc787', 'name': 'SEE FREIGERICHT OST', 'color': 'red', 'coords': [50.0892,9.0097],'infos': []},
{'uid': '6079e9c89a6', 'name': 'SEEHAMER SEE', 'color': 'red', 'coords': [47.8525,11.8614],'infos': []},
{'uid': '798d83c4f04', 'name': 'SEE RIEDELSBACH', 'color': 'red', 'coords': [48.7486,13.7791],'infos': []},
{'uid': 'f8cae4d8bf1', 'name': 'SENDENER WALDSEE', 'color': 'red', 'coords': [48.3139,10.0258],'infos': []},
{'uid': '4159ccee83d', 'name': 'SENNFELDER SEE', 'color': 'red', 'coords': [50.0411,10.2456],'infos': []},
{'uid': '414cdcf34b2', 'name': 'SILBERSEE', 'color': 'red', 'coords': [48.4572,10.3844],'infos': []},
{'uid': 'a17b988af65', 'name': 'SIMSSEE', 'color': 'red', 'coords': [47.8622,12.2156],'infos': []},
{'uid': '0ade4971f25', 'name': 'SIMSSEE', 'color': 'red', 'coords': [47.8575,12.2261],'infos': []},
{'uid': '46933236df5', 'name': 'SIMSSEE', 'color': 'red', 'coords': [47.8767,12.2336],'infos': []},
{'uid': 'd554f6c5599', 'name': 'SIMSSEE', 'color': 'red', 'coords': [47.8844,12.2669],'infos': []},
{'uid': '798a08c4df6', 'name': 'SIMSSEE', 'color': 'red', 'coords': [47.8644,12.2378],'infos': []},
{'uid': 'c973e338ad0', 'name': 'SINDERSBACHSEE', 'color': 'red', 'coords': [50.0603,9.61],'infos': []},
{'uid': '0144feae78d', 'name': 'SKINAUTIKA FREIZEITANLAGE', 'color': 'red', 'coords': [50.1744,9.9247],'infos': []},
{'uid': 'ec83c2ba428', 'name': 'SONTHOFER SEE', 'color': 'red', 'coords': [47.5181,10.26],'infos': []},
{'uid': '1ed45dc5ad4', 'name': 'SOYENSEE', 'color': 'red', 'coords': [48.1078,12.2067],'infos': []},
{'uid': '19207b266e7', 'name': 'SPORTSEE V', 'color': 'red', 'coords': [48.7194,11.0094],'infos': []},
{'uid': '711188996dc', 'name': 'ST. AGATHA SEE', 'color': 'red', 'coords': [48.9881,11.6886],'infos': []},
{'uid': '3d6c0ecf429', 'name': 'STAFFELSEE', 'color': 'red', 'coords': [47.7089,11.1617],'infos': []},
{'uid': '50097365eaf', 'name': 'STAFFELSEE', 'color': 'red', 'coords': [47.6806,11.1872],'infos': []},
{'uid': 'b3aa1d2021a', 'name': 'STAFFELSEE', 'color': 'red', 'coords': [47.6883,11.1794],'infos': []},
{'uid': '42523c9f067', 'name': 'STAFFELSEE', 'color': 'red', 'coords': [47.7039,11.1597],'infos': []},
{'uid': '97d40e183d9', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8658,11.2992],'infos': []},
{'uid': '35b01978e78', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.9181,11.3308],'infos': []},
{'uid': 'a8f8864e30f', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8261,11.3019],'infos': []},
{'uid': '410c8cf3c10', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8219,11.325],'infos': []},
{'uid': 'c17f223156f', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8794,11.2889],'infos': []},
{'uid': '9b3f6028646', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8208,11.3208],'infos': []},
{'uid': '32b12c15c0e', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8606,11.3011],'infos': []},
{'uid': '0fcb301b0fd', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.995,11.3578],'infos': []},
{'uid': '31a91bbea1e', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.9653,11.3222],'infos': []},
{'uid': 'b8b8c373ac6', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.8361,11.2917],'infos': []},
{'uid': '676ef4bd586', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.9503,11.3089],'infos': []},
{'uid': '022c9f194ba', 'name': 'STARNBERGER SEE', 'color': 'red', 'coords': [47.9025,11.2764],'infos': []},
{'uid': '3e81a4773ad', 'name': 'STAUDHAMER SEE', 'color': 'red', 'coords': [48.0653,12.1836],'infos': []},
{'uid': '05db0e3dfc1', 'name': 'STEINBERGER SEE', 'color': 'red', 'coords': [49.2803,12.1617],'infos': []},
{'uid': '987ddfcd07a', 'name': 'STEINSEE', 'color': 'red', 'coords': [48.0247,11.8603],'infos': []},
{'uid': '12ea3245c3b', 'name': 'STETTNER SEE', 'color': 'red', 'coords': [47.9203,12.3603],'infos': []},
{'uid': 'a484cb45c06', 'name': 'STIEFLER WEIHER', 'color': 'red', 'coords': [47.805,10.9867],'infos': []},
{'uid': '347b2f2c1fe', 'name': 'STOIBER-MUEHLE', 'color': 'red', 'coords': [48.3886,11.7922],'infos': []},
{'uid': '500d789288e', 'name': 'STRANDBAD GROSSWELZHEIM', 'color': 'red', 'coords': [50.0611,9.0181],'infos': []},
{'uid': '6db1a901160', 'name': 'SUEDLICHER FILZINGER BADESEE', 'color': 'red', 'coords': [48.1361,10.115],'infos': []},
{'uid': '3a647b92261', 'name': 'SULZBERGER SEE', 'color': 'red', 'coords': [47.4046,10.2026],'infos': []},
{'uid': '7be63a1e929', 'name': 'SYLVENSTEINSEE', 'color': 'red', 'coords': [47.5692,11.5261],'infos': []},
{'uid': '05ed6d88ccd', 'name': 'TACHINGER SEE', 'color': 'red', 'coords': [47.9614,12.7336],'infos': []},
{'uid': '70b2fdb0054', 'name': 'TEGELGRUBE', 'color': 'red', 'coords': [49.21,12.0986],'infos': []},
{'uid': 'deb50f3eff4', 'name': 'TEGERNSEE', 'color': 'red', 'coords': [47.6969,11.7397],'infos': []},
{'uid': '2e7f7957218', 'name': 'TEGERNSEE', 'color': 'red', 'coords': [47.7436,11.7378],'infos': []},
{'uid': '0212642f9e8', 'name': 'TEGERNSEE', 'color': 'red', 'coords': [47.7225,11.7289],'infos': []},
{'uid': '93742f96e5d', 'name': 'TEGERNSEE', 'color': 'red', 'coords': [47.6958,11.7703],'infos': []},
{'uid': '45954820c41', 'name': 'TEGERNSEE', 'color': 'red', 'coords': [47.7156,11.7542],'infos': []},
{'uid': 'cddc4b87f9c', 'name': 'THENNER WEIHER', 'color': 'red', 'coords': [48.4031,11.9594],'infos': []},
{'uid': '121b2632450', 'name': 'THUMSEE', 'color': 'red', 'coords': [47.7189,12.8242],'infos': []},
{'uid': '193b0950719', 'name': 'TINNINGER SEE', 'color': 'red', 'coords': [47.8247,12.2097],'infos': []},
{'uid': 'b68119c1ab3', 'name': 'UNTERLAUSER SEE', 'color': 'red', 'coords': [47.9394,11.8606],'infos': []},
{'uid': '80e2de99be5', 'name': 'UNTERSCHLEISSHEIMER SEE', 'color': 'red', 'coords': [48.2892,11.5578],'infos': []},
{'uid': '5d81fd1ba20', 'name': 'UNTREUSEE', 'color': 'red', 'coords': [50.2853,11.9089],'infos': []},
{'uid': '91914202499', 'name': 'VIEHAUSER KIESGRUBE', 'color': 'red', 'coords': [48.0511,12.1717],'infos': []},
{'uid': '82f3b1f3b7b', 'name': 'VOEHRINGER BADESEE', 'color': 'red', 'coords': [48.2953,10.0608],'infos': []},
{'uid': '1869c7914c9', 'name': 'WAGINGER SEE', 'color': 'red', 'coords': [47.9468,12.7541],'infos': []},
{'uid': '8590992c130', 'name': 'WAGINGER SEE', 'color': 'red', 'coords': [47.9289,12.8008],'infos': []},
{'uid': '7abfbd3f4e1', 'name': 'WAGINGER SEE', 'color': 'red', 'coords': [47.9531,12.7506],'infos': []},
{'uid': '99e20e5f31d', 'name': 'WAKEBOARD THANNHAUSEN', 'color': 'red', 'coords': [48.2939865,10.4456997],'infos': []},
{'uid': '602af1f6869', 'name': 'WAKELAKE', 'color': 'red', 'coords': [48.6269,12.3567],'infos': []},
{'uid': '7893426b966', 'name': 'WALCHENSEE', 'color': 'red', 'coords': [47.595,11.3194],'infos': []},
{'uid': '766030eba96', 'name': 'WALDBAD LANGER TEICH', 'color': 'red', 'coords': [50.1636,12.1717],'infos': []},
{'uid': '48530bc3d87', 'name': 'WALDSEE', 'color': 'red', 'coords': [48.2458,13.0022],'infos': []},
{'uid': '05f632cf13e', 'name': 'WALDSEEBAD', 'color': 'red', 'coords': [50.0769,9.0006],'infos': []},
{'uid': '8b204ae87f3', 'name': 'WALDSEE WEMDING', 'color': 'red', 'coords': [48.8844,10.7389],'infos': []},
{'uid': '3c63a5b2f7a', 'name': 'WALDSEE', 'color': 'red', 'coords': [47.9453,12.1528],'infos': []},
{'uid': 'c5c5e75483c', 'name': 'WEIHER IN SATTLING', 'color': 'red', 'coords': [48.6994,13.1097],'infos': []},
{'uid': '9bc57b0a66e', 'name': 'WEILBERGWEIHER', 'color': 'red', 'coords': [47.7225,11.3242],'infos': []},
{'uid': '6423dd7e8d8', 'name': 'WEINZIERL-WEIHER', 'color': 'red', 'coords': [48.7594,11.5464],'infos': []},
{'uid': 'c9919a39531', 'name': 'WEISSENSEE', 'color': 'red', 'coords': [47.5772,10.6267],'infos': []},
{'uid': '50f3b14af02', 'name': 'WEISSENSTAEDTER SEE', 'color': 'red', 'coords': [50.1061,11.8811],'infos': []},
{'uid': '624590fc802', 'name': 'WEITMANNSEE', 'color': 'red', 'coords': [48.2922,10.9486],'infos': []},
{'uid': 'e256396346b', 'name': 'WESSLINGER SEE', 'color': 'red', 'coords': [48.0736,11.2533],'infos': []},
{'uid': '6c5ebda005c', 'name': 'WOEHRSEE', 'color': 'red', 'coords': [48.1581,12.8275],'infos': []},
{'uid': '148fe5c8c69', 'name': 'WOERTHER WEIHER', 'color': 'red', 'coords': [48.2381,11.8925],'infos': []},
{'uid': '85573c39990', 'name': 'WOERTHSEE', 'color': 'red', 'coords': [48.0522,11.1614],'infos': []},
{'uid': '42b1054ea05', 'name': 'WOLF-WEIHER NR. 11', 'color': 'red', 'coords': [48.9339,12.5675],'infos': []},
{'uid': '318059196bd', 'name': 'WOLF-WEIHER NR. 14', 'color': 'red', 'coords': [48.9336,12.5747],'infos': []},
{'uid': 'f35ccc6fb01', 'name': 'WUENSCHSEEN', 'color': 'red', 'coords': [48.5217,10.3639],'infos': []},
],

		init_form: function(uid, formVals) {
			var formKeys = ['altname', 'angeln', 'anfahrt', 'ausflug', 'baden', 'dlrg', 'dusche', 'eintritt', 'email', 'fkk', 'freierzugang', 'freizeit', 'fussball', 'grillen', 'groesse', 'hoehe', 'hunde', 'idylle', 'kiosk', 'kurzbeschreibung', 'name', 'naturerlebnis', 'opnv', 'ort', 'kostenloserparkplatz', 'parkplatz', 'parkgebuehr', 'restaurant', 'sandstrand', 'surfen', 'tauchen', 'tiefe', 'tischtennis', 'volleyball', 'wandern', 'wc', 'wiese', 'www', 'zeiten', 'strandbad', 'spielplatz', 'coords', 'wwwcamping', 'anfrage', 'antwort', 'geraeusche', 'einstieg', 'kostenangeln', 'wwwangeln', 'uebernachten', 'wwwboot', 'wwwtourismus', 'fotograf', 'etc', 'bilder', '00-OK'];
			function formIterator(handler) {
				var res = [];
				for (var i = 0; i < formKeys.length; i++) {
					var key = formKeys[i],
						val = formVals[key],
						$el = $('#'+key),
						r = handler(key, val, $el);
					if (r)
						res.push(r);
				}
				return res;
			}
			
			function fillForm() {
				formIterator(function(k, v, e) {
					if (v) {
						if (e.is(':checkbox')) {
							e.prop('checked', true);
						} else {
							e.val(typeof v === 'boolean' ? '' : v);
						}
					}
				});
			}
			
			function checkForm() {
				var r = formIterator(function(k, v, e) {
					if (e.length) {
						if (e.is(':checkbox')) {
							var c = e.is(':checked');
							if (v && !c) {
								return k + ' ist NICHT vorhanden';
							} else if (!v && c) {
								return k + ' IST vorhanden'
							}
						} else if (e.val() !== v && e.val() !== '') {
							return k + ": '"+e.val()+"'";
						}
					}
				});
				
				var msg = "Name: '"+formVals['name']+"' ("+uid+")\n"
				for (var i = 0; i < r.length; i++) {
					msg += r[i] + "\n";
				}
				
				var ko = $('#kommentar').val();
				if (ko !== '') {
					msg += "Kommentar: '" + ko + "'";
				}

				$('#output_container').fadeIn();
				$('#output').val(msg);
			}
			
			addDefaultMap(uid);
			fillForm();
			$('#gen_mail_button').click(function() {
				checkForm();
			});
		},

		init_see: function(seeuid, sliderMarkup) {
			addDefaultMap(seeuid);
			var favEl = addFavFunctionality(seeuid);
			if (favEl) {
				$('h3.panel-title').append(favEl);
			}
		
			if (sliderMarkup.length === 0) {
				$('#imgslider_container').hide();
			}

			if (!$('.pictos').find('li').length) {
				$('#pictos_container').hide();
			}

			$.each($('#more_details dd'), function(i) {
				if ($(this).text().length === 0) {
					$(this).prev().remove();
					$(this).remove();
				}
			}).promise().done(function() {
				if (!$('#more_details dd').length) {
					$('#more_details_container').remove();
				}
			}); 

			if (!isMobileBrowser()) {
				var glink = $('#geo_link'),
					t = glink.attr('href').split(":")[1].split(",");
				glink.attr('href', 'http://maps.google.com/maps?z=15&mrt=loc&t=k&q='+t[0]+'+'+t[1]);
				glink.attr('target', '_new');
			}

			$('#showImagesLink').click(function() {
				showImages();
			});
		
			var imgShown = false;
			function showImages() {
				$('#image_container').fadeToggle();
				if (!imgShown) {
					$('#image_container').append($(sliderMarkup));
					imgShown = true;
				}
				window.setTimeout(function() {
					$('#imgslider').bxSlider({mode: 'fade', captions: true, adaptiveHeight: true});
				}, 0);            
			}
		},

		init_index: function() {
			function fitElements() {
				if (window.matchMedia('(max-width: 767px)').matches) {
					$('#imgRow').prepend($('#imgEl'));
				} else {
					$('#imgRow').append($('#imgEl'));
				}
			}

			fitElements();
			$(window).resize(function() {
				fitElements();
			});
		},

	  	init_search: function() {
			var sees = new Bloodhound({
						datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
						queryTokenizer: Bloodhound.tokenizers.whitespace,
						local: window.see.SD
			  		}),
				$box = $('#seeSearch')
		  	sees.initialize();
		  	$box.typeahead({hint:true, highlight:true, minLength:1}, {
				name: 'sees',
				displayKey: 'name',
				source: sees.ttAdapter()
		  	});
		  	$box.bind('typeahead:selected', function(obj, datum, name) {
				document.location.href='see_'+datum.uid+'.html';
		  	});
	  	},

	  	init_map: function() {				
			function hideOverlay() {
				$('#overlay_marker').removeClass('glyphicon-chevron-up');
				$('#overlay_marker').addClass('glyphicon-chevron-down');
				$('#options_container').hide();
				$('.overlay').animate({width: '120px', height: '34px'}, 100, function() {
					overlayVisible = false;
				});
			}

			function updateSelectionFn(selectionMode, fn) {
				map.closePopup();
				//var markers = $('.leaflet-marker-pane').find('div.awesome-marker'),
				//	shadows = $('.leaflet-shadow-pane').find('div.awesome-marker');
				if (selectionMode && (selectedInfos.length === 0 || selectedInfos === Object.keys(infoSelection).length)) {
					//markers.show();
					//shadows.show();
					for (var n = 0; n < markers.length; n++) {
						if (!markers[n].visible) {
							markerCluster.addLayer(markers[n].marker);
							markers[n].visible = true;
						}
					}
				} else {
					for (var n = 0; n < window.see.SD.length; n++) {
						var show = fn(window.see.SD[n]);
						if (show) {
							if (!markers[n].visible) {
								markerCluster.addLayer(markers[n].marker);
								markers[n].visible = true;
							}
							//$(markers[n]).show();
							//$(shadows[n]).show();
						} else {
							if (markers[n].visible) {
								markerCluster.removeLayer(markers[n].marker);
								markers[n].visible = false;
							}
							//$(markers[n]).hide();
							//$(shadows[n]).hide();
						}
					}
				}
				if (hasLocalstorage) {
					localStorage.selection = JSON.stringify(selectedInfos);		
				}
			}

			function showAll() {
				$.each($('#options_list .optionsbox'), function(e) {
					$(this).prop('checked', false);
				});
				selectedInfos = [];
				updateSelection();
			}

			function showFavs() {
				var favs = JSON.parse(localStorage.favs);
				updateSelectionFn(false, function(e) {
					return favs.indexOf(e.uid) !== -1;
				});
			}
		
			function updateSelection() {
				updateSelectionFn(true, function(e) {
					var infos = e.infos;
					if (infos.length === 0)
						return false;

					for (var k = 0; k < selectedInfos.length; k++) {
						if (infos.indexOf(selectedInfos[k]) === -1) {
							return false;
						}
					}
					return true;
				});
			}

			var infoSelection = {'angeln': 'Angelmöglichkeit', 'dusche': 'Dusche für Badegäste', 'eintritt': 'Eintritt', 'fussball': 'Fußballfeld', 'grillen': 'Grillen', 'kiosk': 'Kiosk/Bewirtung', 'opnv': 'Mit ÖPNV erreichbar', 'restaurant': 'Restaurants in der Umgebung', 'spielplatz': 'Kinderspielplatz', 'surfen': 'Surfen/Segeln', 'tauchen': 'Tauchen', 'tischtennis': 'Tischtennisplatte', 'uebernachten': 'Übernachtungsmöglichkeiten', 'volleyball': 'Volleyballfeld', 'wc': 'Öffentliches WC'},
				overlayVisible = false,
				hasLocalstorage = false,
				selectedInfos,
				map = addDefaultMap(null);
			map.on('click', function(e) {
			   hideOverlay();
			});
			L.control.locate({
				icon: 'glyphicon glyphicon-map-marker',
				iconLoading: 'glyphicon glyphicon-refresh',
				setView: 'once',
				showPopup: false
			}).addTo(map);

			var markerCluster = L.markerClusterGroup({
				showCoverageOnHover: false
			});
			var markers = [];
			for (var n = 0; n < window.see.SD.length; n++) {
				var s = window.see.SD[n];
				var marker = L.marker(s.coords, {icon: L.AwesomeMarkers.icon({markerColor: s.color, icon: 'heart', iconColor: 'white'})}).
					//addTo(map).
					bindPopup('<a href="see_'+s.uid+'.html" id="popup_'+s.uid+'"><b>'+s.name+'</b></a>');
				markerCluster.addLayer(marker);
				markers.push({marker: marker, visible: true});
			}
			map.addLayer(markerCluster);
/*
			for (var n = 0; n < window.see.SD.length; n++) {
				var s = window.see.SD[n];
				L.marker(s.coords, {icon: L.AwesomeMarkers.icon({markerColor: s.color, icon: 'heart', iconColor: 'white'})}).
					addTo(map).
					bindPopup('<a href="see_'+s.uid+'.html" id="popup_'+s.uid+'"><b>'+s.name+'</b></a>');
			}
*/
			map.on('popupopen', function(e) {
				var eId = e.popup._content.match(/id="popup_([^"]+)/)[1],
					container = $('#popup_'+eId).closest('.leaflet-popup-content'),
					favEl = addFavFunctionality(eId);
				if (favEl) {
					container.append(favEl);
				}
			});

			$('#showAllLink').click(function() {
				showAll();
			});

			var $list = $('#options_list');
			var selItems = Object.keys(infoSelection);
			for (var i = 0; i < selItems.length; i++) {
				var k = selItems[i], v = infoSelection[k];
				$list.append('<li><span class="pictos '+k+'" title="'+v+'"><input type="checkbox" class="optionsbox '+k+'"></li>');
			}

			if (typeof(Storage) !== 'undefined') {
			  	hasLocalstorage = true;
			  	if (localStorage.center && localStorage.zoom) {
					map.setView(JSON.parse(localStorage.center), Number(localStorage.zoom));
			  	}
			  	if (localStorage.selection) {
					selectedInfos = JSON.parse(localStorage.selection);
					for (var k = 0; k < selectedInfos.length; k++) {
						var op = $('input.' + selectedInfos[k]);
						op.prop('checked', true);
					}
			  	} else {
					selectedInfos = [];
			  	}
				  
			  	updateSelection();
			  	map.on('moveend', function(e) {
					localStorage.center = JSON.stringify(map.getCenter());
					localStorage.zoom = map.getZoom();
			  	});

			  	var link = $("<a style='margin-left:24px' class='synLink'>Favoriten anzeigen</a>");
			  	link.click(function() {
					showFavs();
			  	});
			  	$('#options_container').append(link);
			}

			$('#overlay_link').click(function() {
				if (overlayVisible) {
					hideOverlay();
				} else {
					$('#overlay_marker').removeClass('glyphicon-chevron-down');
					$('#overlay_marker').addClass('glyphicon-chevron-up');
					$('#options_container').show();
					$('.overlay').animate({width: '360px', height: '240px'}, 300, function() {
						overlayVisible = true;
					});
				}
			});

			$('#options_list .optionsbox').on('change', function() {
				var e = $(this),
					c = e.is(':checked');
				var selItems = Object.keys(infoSelection);
				for (var n = 0; n < selItems.length; n++) {
					if (e.hasClass(selItems[n])) {
						if (c) {
							selectedInfos.push(selItems[n]);
						} else {
							var i = selectedInfos.indexOf(selItems[n]);
							selectedInfos.splice(i, 1);
						}
						break;
					}
				}
				updateSelection();
			});
	  	}
	};
})();