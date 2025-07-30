export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', background: 'white', color: '#111', padding: '2rem' }}>
      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>VITRALIUM</h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Soluciones innovadoras en vidrios y aluminio. Cotiza tu proyecto con nosotros de forma rápida, profesional y sin complicaciones.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <button style={{ background: 'black', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '0.375rem' }}>
            Solicitar Cotización
          </button>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', padding: '2rem 0' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Ventanas</h2>
          <p>Fijas, proyectantes, corredizas, con termopanel y aluminio personalizado.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Showers</h2>
          <p>Rectos y en L, con vidrio templado y accesorios inoxidables.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Espejos</h2>
          <p>De muro, con marco, especiales y personalizados con luz LED.</p>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>¿Por qué elegirnos?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Asesoría experta, variedad en perfiles y vidrios, instalación profesional, y atención cercana.
        </p>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #ccc', marginTop: '2rem' }}>
        <p>© 2025 Vitralium. Todos los derechos reservados.</p>
        <p>Contacto: <a href="mailto:vidreriavitralium@gmail.com" style={{ color: '#2563eb' }}>vidreriavitralium@gmail.com</a></p>
      </footer>
    </main>
  );
}