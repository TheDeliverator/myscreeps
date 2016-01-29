var _ = require('lodash');
var harvester = require('harvester');
var builder = require('builder');
var upgrader = require('upgrader');
var miner = require('miner');
var recharger = require('recharger');
var repairer = require('repairer');
var guard = require('guard');
var patrol = require('patrol');
var attacker = require('attacker');

var towers = require('towers');

var respawner = require('respawner');

var dobuild = true;
var doupgrade = true;
var dorepair = true;

module.exports.loop = function () {

    respawner();

    for(var name in Game.creeps) {
		var creep = Game.creeps[name];

		if(creep.memory.role == 'harvester') {
			harvester(creep);
		}

		if(creep.memory.role == 'builder' && dobuild) {
		    builder(creep);
		}
		
		if(creep.memory.role == 'upgrader' && doupgrade) {
		    upgrader(creep);
		}
		
		if(creep.memory.role == 'miner') {
		    miner(creep);
		}
		if(creep.memory.role == 'recharger') {
		    recharger(creep);
		}
		
		if(creep.memory.role =='repairer' && dorepair) {
		    repairer(creep);
		}
		
		if(creep.memory.role == 'guard') {
	        guard(creep);
        }
        
        if(creep.memory.role == 'patrol') {
	        patrol(creep);
        }
        
        if(creep.memory.role == 'attacker') {
            attacker(creep);
        }
	}
	
	for(var name in Game.structures) {
	    var structure = Game.structures[name];
	    
	    if(structure.structureType == STRUCTURE_TOWER) {
	        towers(structure);
	    }
	}
}