import Image from "next/image";
import ShareButton from "@/components/ShareButton";

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>

        <video autoPlay muted loop playsInline style={styles.cardVideo}>
          <source src="/fundo.mp4" type="video/mp4" />
        </video>

        <div style={styles.overlay} />

        <div style={styles.content}>

          
        <Image
          src="/logo.png"
          alt="Tech Fechaduras Digitais"
          width={120}
          height={120}
          priority
          style={styles.logo}
        />
          
          <h1 style={styles.companyName}>
            Instalação de Fechaduras Digitais em São Paulo | Tech Fechaduras
          </h1>

          <p>
            Instalamos sistemas de controle de acesso, fechaduras biométricas,
            senhas digitais, tags e integração com aplicativos móveis.
          </p>

          <p style={styles.slogan}>
            Instalação e Configuração de Fechaduras Digitais com Garantia e Segurança.
          </p>

          <div style={styles.divider} />

          <a
            href="https://wa.me/5511962209588?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonPrimary}
          >
            🛠️ Solicitar Orçamento
          </a>

          <a
            href="/sorteio"
            style={styles.buttonPromo}
          >
            🎁 Participar do Sorteio
          </a>

          <ShareButton />

          <a
            href="https://g.page/r/Cbw41K2JnAevEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonSecondary}
          >
            ⭐ Avaliar Empresa no Google ⭐
          </a>

          <section style={styles.seoSection}>

            <h2 style={{ color: "#d4af37" }}>
              Instalação de Fechaduras Digitais em São Paulo
            </h2>

          <p style={styles.description}>
            A Tech Fechaduras é especializada na instalação de fechaduras digitais em residências, apartamentos e empresas em São Paulo. Trabalhamos com Intelbras, Yale, Papaiz e Elsys, com instalação profissional e suporte técnico. Configuração de senhas, biometria, tags e integração com aplicativos. Atendimento em toda São Paulo com rapidez e segurança.
          </p>
          
          </section>

          <div style={styles.footer}>
            Protegendo o que é importante para você!
          </div>

        </div>
      </div>
    </main>
  );
}

const styles: any = {
  container: { minHeight: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "#000", margin: 0, padding: 0, overflow: "hidden" },
  card: { position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" },
  cardVideo: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: 0 },
  overlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.78)", zIndex: 1 },
  content: { position: "relative", zIndex: 2, padding: 20 },
  logo: { width: 120, height: 120, objectFit: "contain", margin: "0 auto" },
  companyName: { fontSize: 28, fontWeight: 700, color: "#d4af37" },
  slogan: { color: "#f5d98b", fontSize: 15 },
  divider: { width: "80%", height: 1, background: "#d4af37", margin: "20px auto", opacity: 0.5 },
  description: { color: "#e5e5e5", lineHeight: 1.1 },
  buttonPrimary: { display: "block", background: "#d4af37", color: "#000", padding: 14, borderRadius: 14, marginBottom: 12, fontWeight: "bold" },
  buttonPromo: { display: "block", background: "#111", color: "#d4af37", padding: 14, borderRadius: 14, border: "1px solid #d4af37", marginBottom: 12 },
  buttonSecondary: { display: "block", color: "#d4af37", border: "1px solid #d4af37", padding: 14, borderRadius: 14, marginBottom: 20 },
  services: { textAlign: "left", marginTop: 20 },
  seoSection: { marginTop: 30, textAlign: "left", maxWidth: 800 },
  footer: { color: "#d4af37", marginTop: 25, fontWeight: "bold" }
};