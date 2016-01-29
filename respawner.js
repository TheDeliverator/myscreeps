module.exports = function () {
    
    /* Costs of body parts:
        MOVE = 50               ** Moves a creep 1 square per tick per 1 other body part
        CARRY = 50              ** Can contain up to 50 resource units.
        WORK = 100
    
        ATTACK = 80
        RANGED_ATTACK = 150
        HEAL = 250
        TOUGH = 10
    */
    
    var createFail = [];
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            
            if(Memory.creeps[i].role == 'upgrader') {
                if(Game.spawns.Spawn1.canCreateCreep( [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], i, { role: 'upgrader' });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'builder') {
                if(Game.spawns.Spawn1.canCreateCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE], i, { role: 'builder' });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'repairer') {
                if(Game.spawns.Spawn1.canCreateCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [WORK, WORK, WORK, CARRY, CARRY, MOVE], i, { role: 'repairer' , focus: Memory.creeps[i].focus });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'attacker') {
                if(Game.spawns.Spawn1.canCreateCreep( [ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE], i, { role: 'attacker' , task: Memory.creeps[i].task });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'patrol') {
                if(Game.spawns.Spawn1.canCreateCreep( [ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE], i, { role: 'patrol' , task: Memory.creeps[i].task });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'guard') {
                if(Game.spawns.Spawn1.canCreateCreep( [ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE], i, { role: 'guard' , task: Memory.creeps[i].task });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'recharger') {
                if(Game.spawns.Spawn1.canCreateCreep( [CARRY, CARRY, MOVE, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [CARRY, CARRY, MOVE, MOVE], i, { role: 'recharger' });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'harvester') {
                if(Game.spawns.Spawn1.canCreateCreep( [CARRY, CARRY, MOVE, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [CARRY, CARRY, MOVE, MOVE], i, { role: 'harvester' });
                }
                else {
                    createFail.push(i);
                }
            }
            if(Memory.creeps[i].role == 'miner') {
                if(Game.spawns.Spawn1.canCreateCreep( [WORK, WORK, WORK, MOVE], i) == OK ) {
                    console.log('Respawning '+i+'.');
                    Game.spawns.Spawn1.createCreep( [WORK, WORK, WORK, MOVE], i, { role: 'miner' , index: Memory.creeps[i].index});
                }
                else {
                    createFail.push(i);
                }
            }
            
        }
    }
    if(createFail[0] != null) {
        var failList = [];
        for(var i in createFail) {
            failList = failList + createFail[i] + ', ';
        }
        console.log('Unable to spawn following creeps: ' + failList );
    }
}