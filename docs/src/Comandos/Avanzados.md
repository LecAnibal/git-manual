
# Comandos avanzados

Vistos estos comandos básicos de git toca ver algo más complejo. No son comandos muy complicados pero no son recomendables si no controlas del todo git. Para ciertas situaciones estos comandos de git son muy útiles.

## Cómo crear alias en git
Para no tener que estar escribiendo todo el rato “commit” o “checkout” podemos crear alias, los alias de git sirven para decirle a git que comando tiene que ejecutar para el alias que le hemos indicado, estos son los alias más comunes, aunque puedes crear y configurar más. Personalmente considero los alias imprescindibles.

``` 
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

De esta forma, al escribir git st, git ejecutará el comando git status ahorrándonos mucho tiempo.

## Descartar temporalmente cambios
Si estas trabajando en una rama y quieres cambiarte a otra, git no te dejará porque tienes cambios sin guardar, una forma de solucionar esto es haciendo un commit, pero si no queremos hacerlo lo que podemos hacer es descartar los cambios temporalmente, para ello:

```
git stash
```
Posteriormente si los quieres recuperar:

```
git stash pop
```
Este comando git es de los más útiles para no tener que estar guardando cosas momentáneamente en otros sitios si te quieras cambiar rápido de rama.

## Pull de un solo commit
Si por cualquier motivo, necesitas hacer un pull pero solo de un determinado commit lo que puedes hacer es usar este comando:

```
git cherry-pick <commitSHA>
```

## Git log avanzado
Hay veces en las que el comando git log ofrece demasiada información, pero esto se puede personalizar, por ejemplo:

```
git log --online
```
Se imprimirá en cada linea un commit, con su identificador y el texto del commit.

Otro parámetro bastante útil del log es el de git graph

```
git log --graph --oneline
```
Esto imprimira la lista de commits y mediante caracteres ASCII, representara el árbol con las ramas y los cambios entre ellas.

También podemos filtrar los commits, por ejemplo:

```
git log --author="John"
git log --after="2014-7-1"
git log -- foo.py bar.py
```

Estos comandos filtarán los commits por autor, por fecha y por los archivos que fueron modificados respectivamente.