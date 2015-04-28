# drag-and-drop-con-angular
Un ejemplo de como hacer drag and drop en angular.

### Objetivo
Con este ejemplo se desea ilustrar cómo en angular se puede tener dentro del <code>$scope</code> dos arreglos distintos (en este caso llamados <code>resultado</code> y <code>disponible</code>) y arrastrar los elementos de un arreglo a otro.

### Ventajas
 * Para hacerlo ilustrativo se colocaron imagenes que el usuario puede arrastrar, pero en su lugar se puede colocar cualquier otra cosa: un botón, div, span, etc.
 * Se pueden crear más de dos arreglos e interconectarlos.
 * En el <code>HTML</code> quedaron pocas líneas, todo la funcionalidad se hace a través de las directivas y controllers de angular.
 * Todos los cambios que el usuario realiza arrastrando los elementos pueden ser recuperados a través de <code>$scope.disponible</code> y <code>$scope.resultado</code>.

### Demo
Se puede ver la demostración en vivo desde aquí: <a href='http://codepen.io/wanderlp/pen/RPNOLW'>http://codepen.io/wanderlp/pen/RPNOLW</a>
