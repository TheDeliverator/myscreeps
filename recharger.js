module.exports = function (creep) {

	if(creep.carry.energy == 0) {
	    var roomSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {ignoreCreeps: true});
	    if(roomSpawn.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
			creep.moveTo(roomSpawn);				
	    }
	}
	else {
        var target = creep.room.find(FIND_MY_STRUCTURES, {
	        filter: function(object) {
                return object.energy < object.energyCapacity && object.structureType == STRUCTURE_EXTENSION ;
        }});
        if(target[0] == null) {
            var target = creep.room.find(FIND_MY_STRUCTURES, {
	            filter: function(object) {
                    return object.energy < object.energyCapacity && object.structureType == STRUCTURE_TOWER ;    
        }});
        }
	    if(target[0] != null) {
	        //console.log(creep + ' has targeted ' + target[0].structureType + ' at ' + target[0].pos + '.');
	    	if(creep.transfer(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)   {
		        creep.moveTo(target[0]);
	    	}
	    }
	    else {
	        creep.moveTo(Game.flags.rchgPark, {ignoreCreeps: true});
	    }
    }
}