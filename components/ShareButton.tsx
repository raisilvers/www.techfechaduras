"use client";

export default function ShareButton() {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      // Se o navegador suportar share nativo
      if (navigator.share) {
        await navigator.share({
          title: "Tech Fechaduras Digitais",
          text: "Conheça a Tech Fechaduras Digitais!",
          url,
        });
      } else {
        // fallback: copiar link
        await navigator.clipboard.writeText(url);
        alert("Link copiado!");
      }
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  };

  return (
    <button
      onClick={handleShare}
      style={{
        display: "block",
        width: "100%",
        background: "#1a1a1a",
        color: "#d4af37",
        padding: "14px",
        borderRadius: "14px",
        border: "1px solid #d4af37",
        cursor: "pointer",
        fontWeight: "bold",
        marginBottom: "12px",
      }}
    >
      📤 Compartilhar
    </button>
  );
}
