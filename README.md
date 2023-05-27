# JS_3BWS_2023_ToDoList
Simple To Do List

Si vuole realizzare una To Do List web based. L’applicazione consiste in una pagina web suddivisa in tre colonne.

Colonna 1: cose da fare
Colonna 2: cose che stiamo facendo
Colonna 3: cose fatte

Ogni colonna contiene una lista di elementi.
Esistono i seguenti pulsanti:
Crea task: aggiunge il task a “Cose da fare”. Un task contiene un nome e una descrizione
Inizia task: sposta un task da “Cose da fare” a “Cose che stiamo facendo”
Termina task: sposta un task da “Cose che stiamo facendo” a “Cose fatte”
Elimina task: elimina un task da “Cose da fare”
Salva tutto: salva le 3 liste di task

Creare:
Una pagina web index.html che contiene le 3 colonne
Uno script JS script.js che contiene le funzioni che implementano le operazioni sopra descritte

NOTA BENE:
Le 3 liste di task devono essere salvate in 3 file json:
todo.json
doing.json
done.json
Per leggere i file al caricamento della pagina e per salvarli premendo il pulsante inviare una richiesta http a un server utilizzando i metodi GET e POST e gli url:
http://172.17.0.99:3456/todo
http://172.17.0.99:3456/doing
http://172.17.0.99:3456/done
