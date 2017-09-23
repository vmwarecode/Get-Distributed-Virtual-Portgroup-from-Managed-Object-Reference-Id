// Copyright 2016, VMware, Inc. All Rights Reserved
//
// VMware vRealize Orchestrator action sample
// 
// Given a Managed Object Reference Id of a DistributedVirtualPortgroup
// (ex: dvportgroup-714) return the VC:DistributedVirtualPortgroup object.
//
//Action Inputs:
// id  -  string
//
//Return type: VC:DistributedVirtualPortgroup


var moRef = new VcManagedObjectReference();
moRef.type = "DistributedVirtualPortgroup";
moRef.value = id;
var connections = VcPlugin.allSdkConnections;
var dvpg = null;
for (var i in connections) {
    try {
        System.log("connection: "+connections[i]);
        dvpg = VcPlugin.convertToVimManagedObject(connections[i], moRef);
        System.log("dvpg: "+dvpg);
        if(dvpg != null) {
            //found it
            break;
        }
    } catch (e) {
        System.error(e);
    }
}
return dvpg;