enum Axis{
    //% block="左X轴"
    0，
    //% block="左Y轴"
    1，
    //% block="右X轴"
    2，
    //% block="右Y轴"
    3
}
enum BTN {
    //% block="LBtn"
    0,
    //% block="RBtn"
    1,
    //% block="C1"
    2,
    //% block="C2"
    3,
    //% block="C3"
    4,
    //% block="C4"
    5,
    //% block="C5"
    6,
    //% block="C6"
    7,
    //% block="C7"
    8,
    //% block="C8"
    9
}

//% color="#555555" iconWidth=50 iconHeight=40
namespace handle {
    //% block="获取按键数据" blockType="reporter"
    export function getBTNS(parameter: any, block: any) {
        Generator.addInclude('handle', '#include <Handle.h>',false);
        Generator.addObject('handlebtn','Handle','hle;');
        Generator.addCode("hle.getBTNS()");
    }
    //% block="按键[BUTTON]是否被按下" blockType="boolean"
    //% BUTTON.shadow="dropdown" BUTTON.options="BTN" BUTTON.defl="BTN.21"
    export function getBtnC(parameter: any, block: any) {
        let btn = parameter.BUTTON.code
        Generator.addInclude('handle', '#include <Handle.h>',false);
        Generator.addObject('handlebtn','Handle','hle;');
        Generator.addCode("hle.getBtnC("+btn+")");
    }
    //% block="获取摇杆数据" blockType="reporter"
    export function getLXLYRXRY(parameter: any, block: any) {
        Generator.addInclude('handle', '#include <Handle.h>',false);
        Generator.addObject('handlebtn','Handle','hle;');
        Generator.addCode("hle.getLXLYRXRY()");
    }
    //% block="获取摇杆[Axis]杆量" blockType="reporter"
    //% Axis.shadow="dropdown" Axis.options="Axis" BUTTON.defl="Axis.35"
    export function getrocker(parameter: any, block: any) {
        let Axis = parameter.Axis.code
        Generator.addInclude('handle', '#include <Handle.h>',false);
        Generator.addObject('handlebtn','Handle','hle;');
        Generator.addCode("hle.getrocker("+Axis+")");
    }
}
