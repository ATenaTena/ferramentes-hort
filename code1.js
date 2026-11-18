gdjs.iniciCode = {};
gdjs.iniciCode.localVariables = [];
gdjs.iniciCode.idToCallbackMap = new Map();
gdjs.iniciCode.GDfondoObjects1= [];
gdjs.iniciCode.GDfondoObjects2= [];


gdjs.iniciCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pantalla principal", false);
}
}

}


};

gdjs.iniciCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.iniciCode.GDfondoObjects1.length = 0;
gdjs.iniciCode.GDfondoObjects2.length = 0;

gdjs.iniciCode.eventsList0(runtimeScene);
gdjs.iniciCode.GDfondoObjects1.length = 0;
gdjs.iniciCode.GDfondoObjects2.length = 0;


return;

}

gdjs['iniciCode'] = gdjs.iniciCode;
