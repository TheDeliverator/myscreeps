module.exports = function (creep) {

	var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
	if(target != null) {
	    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
		    creep.moveTo(target);		
        }
	}
    else {
        var target = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
    	if(target != null) {
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
		        creep.moveTo(target);		
            }
	    }
	    else {
            var target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
        	if(target != null) {
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
    		        creep.moveTo(target);		
                }
    	    }
	    }
    }
    if(target == null) {
        if( creep.memory.task == '1' ) {
            creep.moveTo(Game.flags.atkPt1);
	    }
	    if( creep.memory.task == '2' ) {
	        creep.moveTo(Game.flags.atkPt2);
	    }
    }
}