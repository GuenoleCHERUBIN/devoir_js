# devoir_js
dev
Etudiants: 
    Mary Kate LATAYAN
    Guénolé CHERUBIN




database :
    tables : 
        projet(
                ID[int],
                nom_projet[varchar],
                text_projet[varchar],
                Id_createur[int]{ID table participants},
                Id_colab[int]{Id table participants et Id-createur != Id_colab}
                )
        participants(
                    ID[int],
                    nom[varchar],
                    prenom[varchar],
                    mail[varchar],
                    admin[boulean]
                    )
       




    extensions:
       express,
       http,
       body-parser,
       mysql


    commande for dependencies :
        npm install


