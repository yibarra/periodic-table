/**
 * element model
 * 
 * @export
 * @class Element
 */
export class Element {
    public atomicNumber: number;
    public symbol: string;
    public name: string;
    public atomicMass: string;
    public cpkHexColor: string;
    public electronicConfiguration: string;
    public electronegativity: number;
    public atomicRadius: number;
    public ionRadius: number;
    public vanDelWaalsRadius: number;
    public ionizationEnergy: number;
    public electronAffinity: number;
    public oxidationStates: string;
    public standardState: number;
    public bondingType: string;
    public meltingPoint: number;
    public boilingPoint: number;
    public density: number;
    public groupBlock: string;
    public yearDiscovered: number;
    public period: number;
    public source: string;
    public spectral_img: string;
    public summary: string;
    public xpos: number;
    public ypos: number;
    public shells: Array<number>;
}