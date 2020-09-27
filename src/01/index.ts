class Questao01{
    public a(xxr: string):boolean{
      let symbol: string[] = ['a', 'b']
      
      for(var i = 0; i < xxr.length; i++ ){
        let item:string = xxr.charAt(i)
        if( symbol.indexOf(item) < 0  ){
          console.log(` -> A string ${xxr} não é compativel com o simbolo da linguaguem!`)
          return false
        }
      }
      
      if(xxr.length % 2 === 0){
        let x = xxr.substring(0, xxr.length/2)
        let xr= xxr.substring(xxr.length/2, xxr.length).split('')
        let reverse = xr.reverse().join('')

        if(x === reverse ){
          console.log(` -> A string ${xxr} pertence a linguaguem!`)
          return true
        }
        return false
      }else{
        console.log(` -> A string ${xxr} não tem tamanho par para poder pertencer a linguaguem!`)
        return false
      }
      
    }
}

export default new Questao01()