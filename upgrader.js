module.exports = function (creep) {

	if(creep.carry.energy == 0) {
	    var roomSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {ignoreCreeps: true});
	    if(roomSpawn.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
			creep.moveTo(roomSpawn, {ignoreCreeps: true});				
	    }
	}
	else {
	    creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller, {ignoreCreeps: true});
    }
}