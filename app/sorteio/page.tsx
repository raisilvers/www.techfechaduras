export const metadata = {
  title: "🎄 Sorteio de Natal 2026 | Tech Fechaduras",
  description:
    "Participe do sorteio de uma Fechadura Digital instalada. Avalie no Google, siga no Instagram e concorra!",
};

export default function SorteioPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#fff",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          🎄 Sorteio de Natal 2026
        </h1>

        <h2>Ganhe uma Fechadura Digital Instalada</h2>

        <p>
          A Tech Fechaduras vai sortear uma Fechadura Digital de Sobrepor com
          instalação inclusa.
        </p>

        <h2>Como Participar</h2>

        <ul>
          <li>⭐ Avalie a Tech Fechaduras no Google</li>
          <li>📸 Siga nossa página no Instagram</li>
          <li>📤 Compartilhe nosso cartão digital para 3 pessoas ou grupos</li>
          <li>📱 Envie os comprovantes pelo WhatsApp</li>
        </ul>

        <h2>Recompensa</h2>

        <p>
          🎟️ Receba <strong>10 números</strong> para participar do sorteio.
        </p>

        <h2>Prêmio</h2>

        <ul>
          <li>🔒 Fechadura Digital de Sobrepor</li>
          <li>✅ Instalação Inclusa</li>
          <li>✅ Configuração Completa</li>
        </ul>

        <h2>Regras</h2>

        <ul>
          <li>Sorteio em dezembro de 2026</li>
          <li>Válido para participantes de São Paulo</li>
          <li>Capital e Grande SP: instalação gratuita</li>
          <li>Outras regiões: apenas taxa de deslocamento</li>
        </ul>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          style={{
            display: "block",
            textAlign: "center",
            background: "#25D366",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px",
            marginTop: "30px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Participar pelo WhatsApp
        </a>
      </div>
    </main>
  );
}