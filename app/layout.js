export const metadata = {
  title: "Sistema de Reservas",
  description: "Reservas simples e gratuitas"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
