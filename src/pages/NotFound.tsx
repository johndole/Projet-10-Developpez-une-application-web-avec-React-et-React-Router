

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", margin: "100px 0" }}>
      <h1 style={{ fontSize: "288px", fontWeight: "700", color: "#FF6060", margin: "100px 0" }}>404</h1>
      <p style={{ fontSize: "36px", fontWeight: "500", color: "#FF6060", margin: "100px 0" }}>Oups! La page que vous demandez n'existe pas.</p>
      <a style={{ fontSize: "18px", fontWeight: "500", color: "black", margin: "100px 0" }} href="/">Retourner sur la page d’accueil</a>
    </div>
  );
};

export default NotFound;
