function getRandom(min ,max){
	return Math.floor(Math.random()*(max-min)+min);
}


function game(){

    var empty = new Boolean;
	n = 10;
	

	for(var i = 0; i < 999; i++)

	{
        joueur = getRandom(1,3);

		if( joueur > n )
			{
				while( joueur > n )
                    {
                        console.log("too much for joueur");
                        joueur = getRandom(1,3);
                        console.log(`le joueur prends ${joueur} allumettes`);
                    }
			}

		else 
			{
                console.log(`le joueur prends ${joueur} allumettes`)
				n = n - joueur;
                console.log(`Il reste désormais ${n} allumettes`)

				if ( n == 0 )
					{
						empty = true;
						console.log('game over for joueur');
                        i = 1000;
					}
				else 
					{
                        console.log("au tour de l'ia");
						ia = getRandom(1,3);
                        console.log(`l'ia prends ${ia} allumettes`);

						if( ia > n )
							{
                                while( ia > n )
                                    {
                                        console.log("too much for ia");
                                        ia = getRandom(1,3);
                                        console.log(`l'ia prends ${ia} allumettes`);
                                    }
								
							}
						else 
							{
								n = n - ia;
                                console.log(`Il reste désormais ${n} allumettes`)

								if ( n == 0 )
									{
										empty = true;
										console.log("game over for ia")
										i = 1000;
									}
								else 
									{
										i++;
									}
							}
					}
			}
	}

}

game();
