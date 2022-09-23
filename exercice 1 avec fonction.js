jeMp(5," dawie ")
jeMp(10," paul ")

function jeMp(nIteration, nom)
{
    for(i=0;i<=nIteration;i++)
    {
        message = " je m'appelle " + nom + testMultiple(i)
        console.log( message)

    }
}

function testMultiple(i)
{
    newMessage = ""
        if(i%3==0)
            newMessage += "Fizz"
        if(i%5==0)
            newMessage += "Buzz"
        if(newMessage == "")
            newMessage += i 

        return(newMessage)

}