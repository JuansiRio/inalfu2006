## Technical Brief


### 1. Título de la tarea

Servicio Desacoplado de Cálculo de Impuestos

---

### 2. Contexto

El sistema actual de e-commerce calcula los impuestos directamente dentro del módulo del carrito de compras.
Las reglas fiscales están **hardcodeadas en el código del carrito**, lo que genera fuerte acoplamiento entre la lógica de negocio y la lógica fiscal.

Esto provoca tres problemas principales:

- Dificultad para **agregar nuevos países o reglas fiscales**
- Alto riesgo de **romper el carrito al modificar impuestos**
- Falta de **testabilidad y reutilización**

El objetivo es **extraer la lógica de impuestos a un servicio independiente y stateless**, que pueda calcular impuestos dinámicos según el país o región del cliente, manteniendo el carrito desacoplado de la lógica fiscal.

---

### 3. Requerimientos técnicos

**Lenguaje**

Python 3.9+

**Arquitectura**

- Implementar el **Strategy Pattern** para manejar reglas de impuestos por país.
- El servicio debe ser **stateless** (sin almacenamiento interno de estado).
- Las reglas de impuestos deben ser **extensibles sin modificar el core del servicio**.

**Modelo de datos**

Input:

```python
Cart
- items: List[CartItem]
- country: str
- currency: str
```

```python
CartItem
- name: str
- base_price: float
- quantity: int
```

Output:

```python
TaxResult
- total_tax: float
- breakdown: Dict[str, float]
```

Ejemplo de breakdown:

```
{
  "VAT": 21.00,
  "RegionalTax": 3.00
}
```

**Comportamiento esperado**

El servicio debe:

- Recibir un objeto `Cart`
- Identificar el país
- Seleccionar la estrategia de cálculo correspondiente
- Retornar un `TaxResult`

---

### 4. Constraints (Restricciones)

- No usar librerías externas para la lógica de cálculo
- Todo el código debe tener **type hints**
- Seguir principios **SOLID**
- Separar claramente:
  - dominio
  - estrategias fiscales
  - servicio principal

- Manejar los siguientes **casos borde**:
  - carrito vacío
  - precio 0
  - país no soportado

- Si el país no es soportado debe lanzar una excepción controlada

```
UnsupportedCountryError
```

---

### 5. Definition of Done (DoD)

El trabajo se considera terminado cuando:

- El código pasa **flake8**
- La cobertura de tests es **> 90%**
- Existen tests unitarios usando **pytest**
- Los tests incluyen:
  - cálculo normal
  - carrito vacío
  - país no soportado
  - múltiples items

- Todas las interfaces públicas tienen **docstrings**
- El servicio puede extenderse agregando nuevas estrategias sin modificar el servicio principal
