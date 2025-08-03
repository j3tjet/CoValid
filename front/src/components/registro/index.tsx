import React, { useState } from 'react';
import './style.css';

const Registro: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    tipoUsuario: 'exportador',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="registro-container">
      <h2>Regístrate primero</h2>

      <form onSubmit={handleSubmit} className="formulario-registro">
        <label htmlFor="tipoUsuario">Tipo de usuario:</label>
        <select
          id="tipoUsuario"
          name="tipoUsuario"
          value={formData.tipoUsuario}
          onChange={handleChange}
          required
        >
          <option value="exportador">Exportador</option>
          <option value="importador">Importador</option>
        </select>

        {/* Campos para Exportador */}
        {formData.tipoUsuario === 'exportador' && (
          <>
            <label htmlFor="nombreComercial">Nombre comercial:</label>
            <input type="text" id="nombreComercial" name="nombreComercial" onChange={handleChange} required />

            <label htmlFor="codigoDeComercio">Código de comercio:</label>
            <input type="text" id="codigoDeComercio" name="codigoDeComercio" onChange={handleChange} required />

            <label htmlFor="nombreRepresentante">Nombre del representante:</label>
            <input type="text" id="nombreRepresentante" name="nombreRepresentante" onChange={handleChange} required />

            <label htmlFor="producto">Producto:</label>
            <input type="text" id="producto" name="producto" onChange={handleChange} required />

            <label htmlFor="tipoE">Tipo de exportador:</label>
            <select id="tipoE" name="tipoE" onChange={handleChange} required>
              <option value="">Seleccionar</option>
              <option value="intermediario">Intermediario</option>
              <option value="productor">Productor</option>
            </select>
          </>
        )}

        {/* Campos para Importador */}
        {formData.tipoUsuario === 'importador' && (
          <>
            <label htmlFor="nombreEmpresa">Nombre de la empresa:</label>
            <input type="text" id="nombreEmpresa" name="nombreEmpresa" onChange={handleChange} required />

            <label htmlFor="nombreRepresentante">Nombre del representante:</label>
            <input type="text" id="nombreRepresentante" name="nombreRepresentante" onChange={handleChange} required />
          </>
        )}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
