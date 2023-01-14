# Buzón de quejas

## Description
* This project was made for the Experience department, is a mailbox to make a complaints, suggestions, felicitations or claims.
* Was made with Vuejs, follow the steps to it run, deploy o develop

    - Download through compressed file (ZIP) or cloning the repo
    - We can't put both options, but, we will leavethe commands in case you want to clone the repository
    ```
        git clone https://github.com/untalmike/mailbox.git
    ``` 
    - You could open the folder within VS Code through the next commands
    ```
        cd /your/path/mailbox

        code .
    ```

    - Now you run the command and install the complements and dependencies
    ```
        npm install
    ```

    - and you could run the project with this command
    ```
        npm run dev
    ```

    - You can make the deploy with the command:
    ```
        npm run build
    ```

    - if do you want use "yarn" could made a project with your specifications and implement the code included here, is portable
    - I add a connection example located on /src/server/helpers/poo-example, and rename for poo.php
    - You need change the file named utils.jsx, and charge your database on your local service, the file is named template_quejas.sql

    - El flujo respeta el siguiente proceso:

    ```mermaid
        graph LR;
            buzonQuejas[(buzon_quejas)]
            inicio([Ingreso al buzón de quejas])
            bienvenida[Bienvenida]
            efectuar{Efectuar}
            procesoFijo([Proceso Fijo, no se realiza nada])
            denuncia[Denuncia]
            queja[Queja]
            sugerencia[Sugerencia]
            felicitacion[Felicitación]
            anonimato{Definir anonimato}
            nombreUsuario[/Nombre de usuario/]
            numeroUsuario[/Número de empleado/]
            datos{Existen datos}
            plazas[Elegir plaza]
            plaza{Existe plaza}
            experiences[Elegir experience]
            experience{Existe experience}
            mQueja[/Registrar queja/]
            mSugerencia[/Registrar sugerencia/]
            mDenuncia[/Registrar denuncia/]
            mFelicitacion[/Registrar felicitación/]
            registro{Existe registro}
            comentario[/Registrar Comentario final/]
            registrar[Registrar]
            id[/id Actual/]
            notificacion[Notificación correctas e id correcto]
            aviso{Cerrar aviso}
            error([No se registra proceso])
            inicio-->bienvenida;
            bienvenida-->buzonQuejas;
            bienvenida-->efectuar;
            efectuar-->|No|procesoFijo;
            efectuar-->denuncia;
            efectuar-->queja;
            efectuar-->felicitacion;
            efectuar-->sugerencia;
            denuncia-->anonimato;
            queja-->anonimato;
            felicitacion-->anonimato;
            sugerencia-->anonimato;
            anonimato-->|No|nombreUsuario;
            anonimato-->|No|numeroUsuario;
            anonimato-->|Sí|plazas;
            nombreUsuario-->datos;
            numeroUsuario-->datos;
            datos-->|Sí|plazas;
            plazas-->plaza;
            plaza-->|Sí|experiences;
            experiences-->experience;
            experience-->mQueja;
            experience-->mSugerencia;
            experience-->mDenuncia;
            experience-->mFelicitacion;
            mQueja-->registro;
            mSugerencia-->registro;
            mDenuncia-->registro;
            mFelicitacion-->registro;
            registro-->|Sí|comentario;
            comentario-->registrar;
            registrar-->buzonQuejas;
            buzonQuejas-->id;
            buzonQuejas-->notificacion;
            notificacion-->|Sí|aviso;
            notificacion-->|No|aviso;
            aviso-->cierre;
            aviso-->error;
    ```
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    ###### Powered By: Miguel Ángel González López
    ###### Shared under free license, doesn't can reproduce or sell how a self creation
    ###### Every time than the software has cloned, emit a notification to creator