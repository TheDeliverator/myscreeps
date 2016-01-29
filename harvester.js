module.exports = function (creep) {

	if(creep.carry.energy < creep.carryCapacity) {
		var sources = creep.room.find(FIND_DROPPED_RESOURCES, {ignoreCreeps: true});
		if(creep.pickup(sources[0]) == ERR_NOT_IN_RANGE) {
		    creep.moveTo(sources[0], {ignoreCreeps: true});
		}			
	}
	else {
		var roomSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS)
	   	if(creep.transfer(roomSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			creep.moveTo(roomSpawn, {ignoreCreeps: true});
		}			
	}
}