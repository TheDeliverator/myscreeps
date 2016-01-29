module.exports = function (creep) {

	var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
	
	if( creep.attack(target) == ERR_NOT_IN_RANGE || target == null) {
	    if( creep.memory.task == '1' ) {
            creep.moveTo(Game.flags.grdPt1);
	    }
	    if( creep.memory.task == '2' ) {
	        creep.moveTo(Game.flags.grdPt2);
	    }
	    if( creep.memory.task == '3' ) {
	        creep.moveTo(Game.flags.grdPt3);
	    }
	    if( creep.memory.task == '4' ) {
	        creep.moveTo(Game.flags.grdPt4);
	    }
	    if( creep.memory.task == '5' ) {
	        creep.moveTo(Game.flags.grdPt5);
	    }
	    if( creep.memory.task == '6' ) {
	        creep.moveTo(Game.flags.grdPt6);
	    }
    }
}