export  class  PostModel {


    constructor(public title: string,public content: string,public loveIts: number,public created_at: Date,public id?: number) {}

    addLoveIts(){
      this.loveIts ++;
      console.log("add : ",this.loveIts)
    }

   removeLoveIts(){
     this.loveIts --;
     console.log("remove : ",this.loveIts)
   }
}
