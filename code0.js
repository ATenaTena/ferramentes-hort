gdjs.pantalla_32principalCode = {};
gdjs.pantalla_32principalCode.localVariables = [];
gdjs.pantalla_32principalCode.idToCallbackMap = new Map();
gdjs.pantalla_32principalCode.GDfondoObjects1= [];
gdjs.pantalla_32principalCode.GDfondoObjects2= [];
gdjs.pantalla_32principalCode.GDbloqueoObjects1= [];
gdjs.pantalla_32principalCode.GDbloqueoObjects2= [];
gdjs.pantalla_32principalCode.GDjoanotObjects1= [];
gdjs.pantalla_32principalCode.GDjoanotObjects2= [];
gdjs.pantalla_32principalCode.GDferramentaObjects1= [];
gdjs.pantalla_32principalCode.GDferramentaObjects2= [];
gdjs.pantalla_32principalCode.GDnomEinaObjects1= [];
gdjs.pantalla_32principalCode.GDnomEinaObjects2= [];
gdjs.pantalla_32principalCode.GDmarcTextObjects1= [];
gdjs.pantalla_32principalCode.GDmarcTextObjects2= [];
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects1= [];
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects2= [];
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects1= [];
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects2= [];
gdjs.pantalla_32principalCode.GDTextEinesObjects1= [];
gdjs.pantalla_32principalCode.GDTextEinesObjects2= [];
gdjs.pantalla_32principalCode.GDtextPuntsObjects1= [];
gdjs.pantalla_32principalCode.GDtextPuntsObjects2= [];


gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDjoanotObjects1Objects = Hashtable.newFrom({"joanot": gdjs.pantalla_32principalCode.GDjoanotObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects = Hashtable.newFrom({"ferramenta": gdjs.pantalla_32principalCode.GDferramentaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects = Hashtable.newFrom({"ferramenta": gdjs.pantalla_32principalCode.GDferramentaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects = Hashtable.newFrom({"nomEina": gdjs.pantalla_32principalCode.GDnomEinaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects = Hashtable.newFrom({"ferramenta": gdjs.pantalla_32principalCode.GDferramentaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects = Hashtable.newFrom({"nomEina": gdjs.pantalla_32principalCode.GDnomEinaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects = Hashtable.newFrom({"ferramenta": gdjs.pantalla_32principalCode.GDferramentaObjects1});
gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects = Hashtable.newFrom({"nomEina": gdjs.pantalla_32principalCode.GDnomEinaObjects1});
gdjs.pantalla_32principalCode.asyncCallback10209484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.pantalla_32principalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("nomEina"), gdjs.pantalla_32principalCode.GDnomEinaObjects2);

{for(var i = 0, len = gdjs.pantalla_32principalCode.GDnomEinaObjects2.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDnomEinaObjects2[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects2.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects2[i].getBehavior("Scale").setScale(0.5);
}
}
gdjs.pantalla_32principalCode.localVariables.length = 0;
}
gdjs.pantalla_32principalCode.idToCallbackMap.set(10209484, gdjs.pantalla_32principalCode.asyncCallback10209484);
gdjs.pantalla_32principalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.pantalla_32principalCode.localVariables);
for (const obj of gdjs.pantalla_32principalCode.GDferramentaObjects1) asyncObjectsList.addObject("ferramenta", obj);
for (const obj of gdjs.pantalla_32principalCode.GDnomEinaObjects1) asyncObjectsList.addObject("nomEina", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.pantalla_32principalCode.asyncCallback10209484(runtimeScene, asyncObjectsList)), 10209484, asyncObjectsList);
}
}

}


};gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDbloqueoObjects1Objects = Hashtable.newFrom({"bloqueo": gdjs.pantalla_32principalCode.GDbloqueoObjects1});
gdjs.pantalla_32principalCode.asyncCallback10212388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.pantalla_32principalCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fi", false);
}
gdjs.pantalla_32principalCode.localVariables.length = 0;
}
gdjs.pantalla_32principalCode.idToCallbackMap.set(10212388, gdjs.pantalla_32principalCode.asyncCallback10212388);
gdjs.pantalla_32principalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.pantalla_32principalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.pantalla_32principalCode.asyncCallback10212388(runtimeScene, asyncObjectsList)), 10212388, asyncObjectsList);
}
}

}


};gdjs.pantalla_32principalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("walk-right");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("walk-right");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("walk-up");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)).setString("up");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("walk_down");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( !(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariableString(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)) == "down" ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDjoanotObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("idle_down");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( !(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariableString(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDjoanotObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("idle_right");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( !(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariableString(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDjoanotObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("idle_right");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( !(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDjoanotObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariableString(gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getVariables().getFromIndex(0)) == "up" ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDjoanotObjects1[k] = gdjs.pantalla_32principalCode.GDjoanotObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDjoanotObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Animation").setAnimationName("idle_up");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDjoanotObjects1Objects, gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariableNumber(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10197108);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDferramentaObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariableNumber(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDferramentaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].setX((( gdjs.pantalla_32principalCode.GDjoanotObjects1.length === 0 ) ? 0 :gdjs.pantalla_32principalCode.GDjoanotObjects1[0].getPointX("")) + 20);
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].setY((( gdjs.pantalla_32principalCode.GDjoanotObjects1.length === 0 ) ? 0 :gdjs.pantalla_32principalCode.GDjoanotObjects1[0].getPointY("")) + 20);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bloqueo"), gdjs.pantalla_32principalCode.GDbloqueoObjects1);
gdjs.copyArray(runtimeScene.getObjects("nomEina"), gdjs.pantalla_32principalCode.GDnomEinaObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDbloqueoObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDbloqueoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDnomEinaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDnomEinaObjects1[i].getBehavior("Text").setText(gdjs.pantalla_32principalCode.GDnomEinaObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/flowerbed_fields.ogg", true, 20, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nomEina"), gdjs.pantalla_32principalCode.GDnomEinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariableNumber(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects, gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nomEina"), gdjs.pantalla_32principalCode.GDnomEinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariableNumber(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects, gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getBehavior("Animation").getAnimationIndex() == ((gdjs.pantalla_32principalCode.GDnomEinaObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.pantalla_32principalCode.GDnomEinaObjects1[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDferramentaObjects1 */
/* Reuse gdjs.pantalla_32principalCode.GDnomEinaObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDnomEinaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDnomEinaObjects1[i].setColor("65;117;5");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/confirmation_001.ogg", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ferramenta"), gdjs.pantalla_32principalCode.GDferramentaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nomEina"), gdjs.pantalla_32principalCode.GDnomEinaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariableNumber(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDferramentaObjects1Objects, gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDnomEinaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.pantalla_32principalCode.GDferramentaObjects1.length;i<l;++i) {
    if ( gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getBehavior("Animation").getAnimationIndex() != ((gdjs.pantalla_32principalCode.GDnomEinaObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.pantalla_32principalCode.GDnomEinaObjects1[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.pantalla_32principalCode.GDferramentaObjects1[k] = gdjs.pantalla_32principalCode.GDferramentaObjects1[i];
        ++k;
    }
}
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.pantalla_32principalCode.GDferramentaObjects1 */
/* Reuse gdjs.pantalla_32principalCode.GDnomEinaObjects1 */
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].returnVariable(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(10);
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].setX(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDferramentaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDferramentaObjects1[i].setY(gdjs.pantalla_32principalCode.GDferramentaObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDnomEinaObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDnomEinaObjects1[i].setColor("208;2;27");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/sounds/error_003.ogg", false, 100, 1);
}

{ //Subevents
gdjs.pantalla_32principalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextEines"), gdjs.pantalla_32principalCode.GDTextEinesObjects1);
gdjs.copyArray(runtimeScene.getObjects("bloqueo"), gdjs.pantalla_32principalCode.GDbloqueoObjects1);
gdjs.copyArray(runtimeScene.getObjects("joanot"), gdjs.pantalla_32principalCode.GDjoanotObjects1);
gdjs.copyArray(runtimeScene.getObjects("textPunts"), gdjs.pantalla_32principalCode.GDtextPuntsObjects1);
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDTextEinesObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDTextEinesObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/10");
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDtextPuntsObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDtextPuntsObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.pantalla_32principalCode.GDjoanotObjects1.length ;i < len;++i) {
    gdjs.pantalla_32principalCode.GDjoanotObjects1[i].separateFromObjectsList(gdjs.pantalla_32principalCode.mapOfGDgdjs_9546pantalla_959532principalCode_9546GDbloqueoObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 10);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.pantalla_32principalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.pantalla_32principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pantalla_32principalCode.GDfondoObjects1.length = 0;
gdjs.pantalla_32principalCode.GDfondoObjects2.length = 0;
gdjs.pantalla_32principalCode.GDbloqueoObjects1.length = 0;
gdjs.pantalla_32principalCode.GDbloqueoObjects2.length = 0;
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = 0;
gdjs.pantalla_32principalCode.GDjoanotObjects2.length = 0;
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = 0;
gdjs.pantalla_32principalCode.GDferramentaObjects2.length = 0;
gdjs.pantalla_32principalCode.GDnomEinaObjects1.length = 0;
gdjs.pantalla_32principalCode.GDnomEinaObjects2.length = 0;
gdjs.pantalla_32principalCode.GDmarcTextObjects1.length = 0;
gdjs.pantalla_32principalCode.GDmarcTextObjects2.length = 0;
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects1.length = 0;
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects2.length = 0;
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects1.length = 0;
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects2.length = 0;
gdjs.pantalla_32principalCode.GDTextEinesObjects1.length = 0;
gdjs.pantalla_32principalCode.GDTextEinesObjects2.length = 0;
gdjs.pantalla_32principalCode.GDtextPuntsObjects1.length = 0;
gdjs.pantalla_32principalCode.GDtextPuntsObjects2.length = 0;

gdjs.pantalla_32principalCode.eventsList2(runtimeScene);
gdjs.pantalla_32principalCode.GDfondoObjects1.length = 0;
gdjs.pantalla_32principalCode.GDfondoObjects2.length = 0;
gdjs.pantalla_32principalCode.GDbloqueoObjects1.length = 0;
gdjs.pantalla_32principalCode.GDbloqueoObjects2.length = 0;
gdjs.pantalla_32principalCode.GDjoanotObjects1.length = 0;
gdjs.pantalla_32principalCode.GDjoanotObjects2.length = 0;
gdjs.pantalla_32principalCode.GDferramentaObjects1.length = 0;
gdjs.pantalla_32principalCode.GDferramentaObjects2.length = 0;
gdjs.pantalla_32principalCode.GDnomEinaObjects1.length = 0;
gdjs.pantalla_32principalCode.GDnomEinaObjects2.length = 0;
gdjs.pantalla_32principalCode.GDmarcTextObjects1.length = 0;
gdjs.pantalla_32principalCode.GDmarcTextObjects2.length = 0;
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects1.length = 0;
gdjs.pantalla_32principalCode.GDEinesGurdadesObjects2.length = 0;
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects1.length = 0;
gdjs.pantalla_32principalCode.GDmarcadoPuntsObjects2.length = 0;
gdjs.pantalla_32principalCode.GDTextEinesObjects1.length = 0;
gdjs.pantalla_32principalCode.GDTextEinesObjects2.length = 0;
gdjs.pantalla_32principalCode.GDtextPuntsObjects1.length = 0;
gdjs.pantalla_32principalCode.GDtextPuntsObjects2.length = 0;


return;

}

gdjs['pantalla_32principalCode'] = gdjs.pantalla_32principalCode;
