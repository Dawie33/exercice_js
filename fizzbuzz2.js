pointDeDepartX=10
pointDeDepartY=10
grandeurX=10
grandeurY=10


tresorsPosX=10
tresorsPosY=11

asFoundTresure= false


for(y=0;y <= grandeurY;y++)
{
    for(x=0;x<=grandeurX;x++)
    {
        currentPointX= x + pointDeDepartX
        currentPointY= y + pointDeDepartY

        console.log("je visite:" +currentPointX +"/"+ currentPointY)
    
        if(currentPointY == tresorsPosY && currentPointX== tresorsPosX)
        {
            console.log("J'ai trouvé le tresor")
            asFoundTresure = true
            break
        } 
    } 
    if(asFoundTresure)
        break
   

}


