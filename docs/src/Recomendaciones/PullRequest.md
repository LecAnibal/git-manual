# Contribuir(Pull Request)

* Antes de comenzar a trabajar asegurate que la tarea existe en JIRA.
* Asegurate que la tarea esta asignada a ti y que el estatus de la tarea esta en DEV.
* Verifica que el tipo de tarea(issue type) es el correcto; Sumario es claro y consiso; y que la descripcion contiene los requerimientos o pasos para reproducir.
* Asegurate que existan requerimientos de aceptacion y que estos no sean ambiguos.

* Genera un branch desde Master al menos que se indique lo contrario.
* Todos los branch deben de estar prefijados con feature/ o /bug, el numero de tarea y una descripcion breve, ejemplos;
  * feauture/SCT-12-optimizar-sql
  * bug/PET-2-seed-project

* Los mensajes de commit debe de seguir estar reglas [como escribir mensajes de commit](/commit.html)
* Si los mensajes de commit estan escritos correctamente el titulo del PR sera autocompletado de manera automatica, y este tendra a ser correcto.
* Si los mensajes de commit no tienen en el cuerpo la referencia a la tarea asignada, sera necesario agregarlor al cuerpo del Pull request.

* Una vez que el desarrollo este listo, crea un Pull Request, con el numero de tarea de JIRA y una breve descripcion en el titulo. Ejemplo: SCT-12 Optimizar sql, asegurate  que el PR esta asociado a una etiqueta Bug/Feature asi como tambien a un milestone: La razon para esto es para cuando se revise el PRp se sepa con claridad cuantos features/bugs son corregidos por sprint.