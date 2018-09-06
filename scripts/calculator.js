"use strict";

const etce = {

	input: {

		/**
		 * Set a value to an input.
		 * @param {string} name ID of the input.
		 * @param {number} value Value to set in the input.
		 * @returns {number} The new value.
		 */
		set: function(name, value) {
			return document.getElementById(name).getElementsByTagName("input")[0].value = value;
		},

		/**
		 * Get the value of an input
		 * @param {string} name ID of the input
		 * @returns {number} Value inside the input
		 */
		get: function(name) {
			return document.getElementById(name).getElementsByTagName("input")[0].value;
		},

		reset: function() {

			// Maanas
			etce.input.set("maana-input", 0);
			etce.input.set("m5-input", 0);
			etce.input.set("p5-input", 0);

			// Currencies
			etce.input.set("cad-input", 0);
			etce.input.set("eur-input", 0);

			// Gold
			etce.input.set("gold-input", 0);
		}
	},

	calculator: {

		/**
		 * -5%
		 */
		m5: function(maana) {
			return maana * 100 / 105;
		},

		/**
		 * +5%
		 */
		p5: function(maana) {
			return maana * 105 / 100;
		},

		/**
		 * Maanas to €
		 */
		mtoe: function(maana) {
			return maana * 5 / 750;
		},

		/**
		 * Maanas to $
		 */
		mtoc: function(maana) {
			return maana * 5 / 500;
		},

		etom: function(eur) {
			return eur * 750 / 5;
		},

		etog: function(eur) {
			return eur * 250 / 5;
		},

		ctom: function(cad) {
			return cad * 500 / 5;
		},

		ctog: function(cad) {
			return cad * 165 / 5;
		},

		gtoe: function(gold) {
			return gold * 5 / 250;
		},

		gtoc: function(gold) {
			return gold * 5 / 165;
		},

		d4m5: function(maana) {
			return maana * 100 / (105 * 4)
		}
	},

	callbacks: {
		onMaana: function() {
			const maanas = etce.input.get("maana-input");

			// Maanas
			etce.input.set("m5-input", Math.round(etce.calculator.m5(maanas)));
			etce.input.set("p5-input", Math.round(etce.calculator.p5(maanas)));

			// Currencies
			etce.input.set("cad-input", Math.round(etce.calculator.mtoc(maanas)));
			etce.input.set("eur-input", Math.round(etce.calculator.mtoe(maanas)));

			// Gold
			etce.input.set("gold-input", Math.round(etce.calculator.etog(etce.calculator.mtoe(maanas))));
		},

		onM5: function() {
			const maanas = etce.calculator.p5(etce.input.get("m5-input"));

			// Maanas
			etce.input.set("maana-input", Math.round(maanas));
			etce.input.set("p5-input", Math.round(etce.calculator.p5(maanas)));

			// Currencies
			etce.input.set("cad-input", Math.round(etce.calculator.mtoc(maanas)));
			etce.input.set("eur-input", Math.round(etce.calculator.mtoe(maanas)));

			// Gold
			etce.input.set("gold-input", Math.round(etce.calculator.etog(etce.calculator.mtoe(maanas))));
		},

		onP5: function() {
			const maanas = etce.calculator.m5(etce.input.get("p5-input"));

			// Maanas
			etce.input.set("maana-input", Math.round(maanas));
			etce.input.set("m5-input", Math.round(etce.calculator.m5(maanas)));

			// Currencies
			etce.input.set("cad-input", Math.round(etce.calculator.mtoc(maanas)));
			etce.input.set("eur-input", Math.round(etce.calculator.mtoe(maanas)));

			// Gold
			etce.input.set("gold-input", Math.round(etce.calculator.etog(etce.calculator.mtoe(maanas))));
		},

		onEUR: function() {
			const eur = etce.input.get("eur-input");
			const maanas = etce.calculator.etom(eur);

			// Maanas
			etce.input.set("maana-input", Math.round(maanas));
			etce.input.set("m5-input", Math.round(etce.calculator.m5(maanas)));
			etce.input.set("p5-input", Math.round(etce.calculator.p5(maanas)));

			// Currencies
			etce.input.set("cad-input", Math.round(etce.calculator.gtoc(etce.calculator.etog(eur))));

			// Gold
			etce.input.set("gold-input", Math.round(etce.calculator.etog(eur)));
		},

		onCAD: function() {
			const cad = etce.input.get("cad-input");
			const maanas = etce.calculator.ctom(cad);

			// Maanas
			etce.input.set("maana-input", Math.round(maanas));
			etce.input.set("m5-input", Math.round(etce.calculator.m5(maanas)));
			etce.input.set("p5-input", Math.round(etce.calculator.p5(maanas)));

			// Currencies
			etce.input.set("eur-input", Math.round(etce.calculator.gtoe(etce.calculator.ctog(cad))));

			// Gold
			etce.input.set("gold-input", Math.round(etce.calculator.ctog(cad)));
		},

		onGold: function() {
			const gold = etce.input.get("gold-input");
			const eur = etce.calculator.gtoe(gold);
			const maanas = etce.calculator.etom(eur);

			// Maanas
			etce.input.set("maana-input", Math.round(maanas));
			etce.input.set("m5-input", Math.round(etce.calculator.m5(maanas)));
			etce.input.set("p5-input", Math.round(etce.calculator.p5(maanas)));

			// Currencies
			etce.input.set("eur-input", Math.round(eur));
			etce.input.set("cad-input", Math.round(etce.calculator.gtoc(gold)));
		},
	},
};