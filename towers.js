module.exports = function (tower) {
    
    var targetHits = Memory.targetHits;  // target hitpoints for ramparts and walls
    
    if(tower.energy >= 10) {
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    	if(target != null) {
    	    tower.attack(target);
    	    console.log(tower + ' is attacking Hostile Creep' + target[0].name + ' at ' + target[0].pos + '.');
        }
        else {
            var target = tower.room.find(FIND_MY_CREEPS, {
    	            filter: function(object) {
                        return object.hits < object.hitsMax ;
            }});
            if(target != '') {
                target = _.sortBy(target, function(object) {
    	            return object.hits
                });
                console.log(tower + ' is healing ' + target[0].name + ' at ' + target[0].pos + '.');
                tower.heal(target[0]);
            }
            else {
                var target = tower.room.find(FIND_STRUCTURES, {
    	            filter: function(object) {
                        return object.hits < targetHits && object.hits < object.hitsMax && object.structureType != STRUCTURE_ROAD;
                }});
                if(target != '') {
                    target = _.sortBy(target, function(object) {
    	                return object.hits
                    });
                    //console.log(tower + ' is repairing ' + target[0].structureType + ' at ' + target[0].pos + '.');
                    tower.repair(target[0]);
                }
            }
        }
    }
}