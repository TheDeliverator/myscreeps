module.exports = function (creep) {

	var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
	if(target != null) {
	    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
		    creep.moveTo(target);		
        }
	}
    else {
        if( creep.memory.task == '1' ) {
            creep.moveTo(Game.flags.patPt1);
	    }
	    if( creep.memory.task == '2' ) {
	        creep.moveTo(Game.flags.patPt2);
	    }
    }
}