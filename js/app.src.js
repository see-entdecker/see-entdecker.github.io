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