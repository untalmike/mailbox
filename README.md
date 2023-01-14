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
            nombreUsuario[/Nombre de usuario]
            numeroUsuario[/Número de empleado]
            datos{Existen datos}
            plazas[Elegir plaza]

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
            anonimato-->|Sí|plaza;
            nombreUsuario-->datos;
            numeroUsuario-->datos;
            datos-->plazas:
    ```
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    ###### Powered By: Miguel Ángel González López
    ###### Shared under free license, doesn't can reproduce or sell how a self creation
    ###### Every time than the software has cloned, emit a notification to creator