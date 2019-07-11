class Sejour{
   private _nom: string;
   private _prix: number;

   constructor(nom:string,prix:number){
       this._nom = nom;
       this._prix = prix;
   }
   get nom(){
       return this._nom;
   }
   get prix(){
       return this._prix;
   }
}

class SejourService{
    private _sej:Sejour[];

    constructor(){
        this._sej = [new Sejour('saint herblain', 500), new Sejour('ORVAULT', 50), new Sejour('Nantes', 100)];
  }

 rechercheSejourParNom(nom:string):Sejour|void {
    let unSej = this._sej.filter(sej=>{
        return sej.nom === nom;
    })
    if(unSej.length === 1)return unSej[0];
  }
}
var nss = new SejourService();
console.log(nss.rechercheSejourParNom('Nantes'));


