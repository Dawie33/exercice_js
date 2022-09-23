pointDeDepartX= 10
pointDeDepartY=10

distanceAParcourirX = 10
distanceAParcourirY=10

tresorposX=10
tresorposY=11

jaiTrouveLeTresor= false 

for(x=0;x<=20;x++)
    {
        for(y=0;y<=20;y++)
        {
            distanceAParcourirY = y + pointDeDepartY
            distanceAParcourirX = x + pointDeDepartX

            console.log("Je visite X:"+ distanceAParcourirX + "Y:"+ distanceAParcourirY)

            if ((distanceAParcourirX == tresorposX) && (distanceAParcourirY == tresorposY))
                {
                    console.log("j'ai trouvé le tresor")
                    jaiTrouveLeTresor = true
                    break
                } 
         } 
      if(jaiTrouveLeTresor)
            break
            
    }