export default class Command{

    constructor(id,title,image,price,quantite){
        this.id=id
        this.title=title
        this.image=image
        this.price=price
        this.quantite=quantite
    }

    reduction = (taux) => {
     this.price-=this.price*(taux/100)
    }
}