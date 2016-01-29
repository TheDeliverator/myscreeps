module.exports = function (creep) {

    var sources = creep.room.find(FIND_SOURCES, {ignoreCreeps: true});
	var taskIndex = creep.memory.index
	if(creep.harvest(sources[taskIndex]) == ERR_NOT_IN_RANGE) {
		creep.moveTo(sources[taskIndex]);
	}			
    creep.drop(RESOURCE_ENERGY);
}