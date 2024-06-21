/*
 * @author: hugleMr
 */

import MaskPlus from "./MaskPlus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Mesh extends cc.Component {
    @property(MaskPlus)
    mask: MaskPlus = null;

    @property(cc.Node)
    nodes: cc.Node[] = [];

    protected start(): void {
        let points: cc.Vec2[] = [];
        for (let node of this.nodes) {
            let pos = node.getPosition();
            points.push(pos);
        }
        this.mask.updatePoints(points);
    }
}
