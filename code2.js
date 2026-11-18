gdjs.FiCode = {};
gdjs.FiCode.localVariables = [];
gdjs.FiCode.idToCallbackMap = new Map();
gdjs.FiCode.GDpergaminoObjects1= [];
gdjs.FiCode.GDpergaminoObjects2= [];
gdjs.FiCode.GDtitolObjects1= [];
gdjs.FiCode.GDtitolObjects2= [];
gdjs.FiCode.GDtitol2Objects1= [];
gdjs.FiCode.GDtitol2Objects2= [];
gdjs.FiCode.GDNewSpriteObjects1= [];
gdjs.FiCode.GDNewSpriteObjects2= [];
gdjs.FiCode.GDpuntuacioObjects1= [];
gdjs.FiCode.GDpuntuacioObjects2= [];
gdjs.FiCode.GDfondo_9595botonObjects1= [];
gdjs.FiCode.GDfondo_9595botonObjects2= [];
gdjs.FiCode.GDreturnObjects1= [];
gdjs.FiCode.GDreturnObjects2= [];


gdjs.FiCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pantalla principal", false);
}
}

}


};

gdjs.FiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FiCode.GDpergaminoObjects1.length = 0;
gdjs.FiCode.GDpergaminoObjects2.length = 0;
gdjs.FiCode.GDtitolObjects1.length = 0;
gdjs.FiCode.GDtitolObjects2.length = 0;
gdjs.FiCode.GDtitol2Objects1.length = 0;
gdjs.FiCode.GDtitol2Objects2.length = 0;
gdjs.FiCode.GDNewSpriteObjects1.length = 0;
gdjs.FiCode.GDNewSpriteObjects2.length = 0;
gdjs.FiCode.GDpuntuacioObjects1.length = 0;
gdjs.FiCode.GDpuntuacioObjects2.length = 0;
gdjs.FiCode.GDfondo_9595botonObjects1.length = 0;
gdjs.FiCode.GDfondo_9595botonObjects2.length = 0;
gdjs.FiCode.GDreturnObjects1.length = 0;
gdjs.FiCode.GDreturnObjects2.length = 0;

gdjs.FiCode.eventsList0(runtimeScene);
gdjs.FiCode.GDpergaminoObjects1.length = 0;
gdjs.FiCode.GDpergaminoObjects2.length = 0;
gdjs.FiCode.GDtitolObjects1.length = 0;
gdjs.FiCode.GDtitolObjects2.length = 0;
gdjs.FiCode.GDtitol2Objects1.length = 0;
gdjs.FiCode.GDtitol2Objects2.length = 0;
gdjs.FiCode.GDNewSpriteObjects1.length = 0;
gdjs.FiCode.GDNewSpriteObjects2.length = 0;
gdjs.FiCode.GDpuntuacioObjects1.length = 0;
gdjs.FiCode.GDpuntuacioObjects2.length = 0;
gdjs.FiCode.GDfondo_9595botonObjects1.length = 0;
gdjs.FiCode.GDfondo_9595botonObjects2.length = 0;
gdjs.FiCode.GDreturnObjects1.length = 0;
gdjs.FiCode.GDreturnObjects2.length = 0;


return;

}

gdjs['FiCode'] = gdjs.FiCode;
