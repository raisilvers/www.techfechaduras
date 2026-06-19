"use client";

export default function Sorteio() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <video autoPlay muted loop playsInline style={styles.cardVideo}>
          <source src="/fundo.mp4" type="video/mp4" />
        </video>

        <div style={styles.overlay} />

        <div style={styles.content}>
          <img
            src="/logo.png"
            alt="Tech Fechaduras"
            style={styles.logo}
          />

          <h1 style={styles.companyName}>
            🎄 Sorteio de Natal 2026
          </h1>

          <p style={styles.slogan}>
            Concorra a uma Fechadura Digital de Sobrepor com instalação inclusa.
          </p>

          <div style={styles.promoBox}>
            🎁 Sorteio Exclusivo Tech Fechaduras
            <br />
            🔒 Produto + Instalação Inclusa
          </div>

          <div style={styles.divider} />

          <h2 style={styles.sectionTitle}>
            Como Participar
          </h2>

          <div style={styles.infoBox}>
            <p>⭐ Avalie nossa empresa no Google</p>
            <p>📸 Siga nosso Instagram</p>
            <p>📤 Compartilhe nosso cartão digital para 3 pessoas ou grupos</p>
            <p>📱 Envie os 3 prints pelo WhatsApp</p>
          </div>

          <a
            href="https://g.page/r/Cbw41K2JnAevEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonSecondary}
          >
            ⭐ Avaliar no Google
          </a>

          <a
            href="https://instagram.com/techfechaduras"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonSecondary}
          >
            📸 Seguir no Instagram
          </a>

          <div style={styles.divider} />

          <h2 style={styles.sectionTitle}>
            🎟️ Sua Recompensa
          </h2>

          <div style={styles.rewardBox}>
            Receba <strong>10 números</strong> para participar do sorteio após
            a validação dos comprovantes.
          </div>

          <div style={styles.divider} />

          <h2 style={styles.sectionTitle}>
            🎁 O Prêmio
          </h2>

          <div style={styles.prizeBox}>
            🔒 Fechadura Digital de Sobrepor
            <br />
            ✅ Produto Novo
            <br />
            ✅ Instalação Inclusa
            <br />
            ✅ Configuração Completa
            <br />
            ✅ Orientação de Uso
          </div>

          {/* Foto do prêmio */}
          <img
            src="/premio.jpg"
            alt="Fechadura Digital"
            style={styles.prizeImage}
          />

          <div style={styles.divider} />

          <h2 style={styles.sectionTitle}>
            📍 Regras
          </h2>

          <div style={styles.rulesBox}>
            • Sorteio realizado em Dezembro de 2026
            <br />
            • Instalação gratuita na Capital e Grande São Paulo
            <br />
            • Demais cidades: apenas taxa de deslocamento
            <br />
            • O vencedor será divulgado nas redes sociais
            <br />
            • Os números serão enviados após a conferência dos comprovantes
          </div>

          <a
            href="https://wa.me/5511971204826?text=Olá,%20quero%20participar%20do%20sorteio%20de%20Natal%202026."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonPrimary}
          >
            🎟️ Enviar Comprovantes e Garantir Meus Números
          </a>

          <div style={styles.socialProof}>
            ⭐⭐⭐⭐⭐
            <br />
            Clientes satisfeitos em toda São Paulo
          </div>

          <div style={styles.footer}>
            🍀 Boa Sorte!
            <br />
            Protegendo o que é importante para você.
          </div>
        </div>
      </div>
    </main>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000",
  },

  card: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    color: "#fff",
  },

  cardVideo: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.80)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px 20px",
    textAlign: "center",
  },

  logo: {
    width: 120,
    height: 120,
    objectFit: "contain",
    margin: "0 auto",
  },

  companyName: {
    color: "#d4af37",
    fontSize: 32,
    fontWeight: 700,
  },

  slogan: {
    color: "#f5d98b",
    marginBottom: 20,
  },

  promoBox: {
    background: "rgba(212,175,55,0.15)",
    border: "1px solid #d4af37",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    fontWeight: "bold",
  },

  divider: {
    width: "80%",
    height: 1,
    background: "#d4af37",
    margin: "25px auto",
    opacity: 0.5,
  },

  sectionTitle: {
    color: "#d4af37",
    marginBottom: 15,
  },

  infoBox: {
    lineHeight: 2,
    marginBottom: 20,
  },

  rewardBox: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 15,
  },

  prizeBox: {
    lineHeight: 2,
    marginBottom: 20,
  },

  prizeImage: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 15,
    margin: "20px auto",
  },

  rulesBox: {
    textAlign: "left",
    lineHeight: 2,
    maxWidth: 600,
    margin: "0 auto 25px",
  },

  buttonPrimary: {
    display: "block",
    background: "#d4af37",
    color: "#000",
    padding: 16,
    borderRadius: 14,
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: 15,
  },

  buttonSecondary: {
    display: "block",
    color: "#d4af37",
    border: "1px solid #d4af37",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    textDecoration: "none",
  },

  socialProof: {
    marginTop: 25,
    color: "#fff",
    opacity: 0.9,
  },

  footer: {
    color: "#d4af37",
    marginTop: 30,
    fontWeight: "bold",
  },
};