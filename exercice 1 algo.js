m1= " je m'appelle dawie "
m2= " comment vous appelez vous "
m3= " ou sont les toilettes "
m4= " je ne parle pas binaire "
m5= " est ce que le micro fonctionne "

for(i=1;i<=100;i++)
{
    ardoise = m1 +i

    if(i<=2)
    {
        ardoise += m5
    }

    if(i%2==0)
    {
        ardoise += m2
    }
    else
    {
        ardoise += m3
    }

    if(i%3 ==0)
    {
        ardoise += m4
    }
    
    console.log(ardoise)

    
    
}
  
    
       

