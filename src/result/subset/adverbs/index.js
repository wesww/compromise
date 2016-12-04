'use strict';
const Text = require('../../index');

class Adverbs extends Text {
  constructor(list) {
    super(list);
    this.list = this.find().list;
    return this;
  }
  find() {
    return this.match('#Adverb+');
  }
  parse() {
    return this.terms().map((t) => {
      return {
        adjectiveForm: t.adverb.adjectiveForm(),
      };
    });
  }
}

module.exports = Adverbs;
