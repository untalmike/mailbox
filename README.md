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
        graph TD;
            buzonQuejas[(buzon_quejas)]
            id1([Ingreso al buzón de quejas])-->B;
            B[Bienvenida]-->C;
                flowchart RL
                C{Efectuar}-->|No|D;
            C{Efectuar}-->|Sí|E;
            D(Proceso sin acción);
            E
    ```
    <br>
    <br>
    <br>
    <br>
    <hr>
    
    ###### Powered By: Miguel Ángel González López
    ###### Shared under free license, doesn't can reproduce or sell how a self creation
    ###### Every time than the software has cloned, emit a notification to creator