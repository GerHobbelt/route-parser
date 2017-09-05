#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var jison = require('jison-gho');
var Lexer = require('@gerhobbelt/jison-lex');
var grammar = require('../lib/route/grammar.js');
var parser = new jison.Parser(grammar);

// eslint-disable-next-line no-underscore-dangle
parser.lexer = new Lexer(grammar.lex, null, grammar.terminals_);

var compiledGrammar = parser.generate({ moduleType: 'commonjs' });

fs.writeFileSync(
  path.join(__dirname, '/../lib/route/compiled-grammar.js'),
  compiledGrammar
);
