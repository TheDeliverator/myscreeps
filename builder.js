module.exports = function (creep) {

    var targetHits = Memory.targetHits;  // target hitpoints for ramparts and walls

	if(creep.carry.energy == 0) {
	    var roomSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {ignoreCreeps: true});
	    if(roomSpawn.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
			creep.moveTo(roomSpawn);				
		}
	}
	else {
		var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		if(targets.length) {
			//console.log(creep + ' has targeted ' + targets[0].structureType + ' at ' + targets[0].pos + '.');
			if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
			    creep.moveTo(targets[0]);					
		    }
		}
		else {
		    var target = creep.room.find(FIND_STRUCTURES, {
    	        filter: function(object) {
                    return object.hits < targetHits && object.structureType == STRUCTURE_RAMPART ;
            }});
            if(target[0] == null || creep.memory.focus == 'Walls') {
                 var target = creep.room.find(FIND_STRUCTURES, {
    	            filter: function(object) {
                        return object.hits < targetHits && object.hitsMax > 1 && object.structureType == STRUCTURE_WALL ;
            }});
            }
            if(target[0] == null || creep.memory.focus == 'Roads') {
                 var target = creep.room.find(FIND_STRUCTURES, {
    	            filter: function(object) {
                        return object.hits < object.hitsMax && object.structureType == STRUCTURE_ROAD ;
            }});
            }
            if(target[0] != null) {
    	        target = _.sortBy(target, function(object) {
    	            return object.hits
    	        });
	            //console.log(creep + ' has targeted ' + target[0].structureType + ' at ' + target[0].pos + '.');
	            if(creep.repair(target[0]) == ERR_NOT_IN_RANGE)   {
			        creep.moveTo(target[0]);
		        }
            }
		}
	}
}