class Test01{
    verifyNumber(num){
        if(num%2===0){
            return num*2
        }
        else if(num%3===0){
            return num*3
        }
        else
            return num*5
    }
}
export default Test01;