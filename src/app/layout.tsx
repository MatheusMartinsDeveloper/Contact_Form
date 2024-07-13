import "./styles/globals.css";
import Favicon from "../../public/icons/favicon-32x32.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Form</title>
        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}