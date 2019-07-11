# devoir_js
dev
Etudiants: 
    Mary Kate LATAYAN
    Guénolé CHERUBIN




besoin:
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
                    )
       




    extensions:
        mongoose
        expess
        bodyParser?
