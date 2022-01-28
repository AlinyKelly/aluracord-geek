// Next.js usa o componente App para inicializar páginas. Você pode substituí-lo e controlar a inicialização da página. O que permite que você faça coisas incríveis como:
// Layout persistente entre alterações de página
// Manter o estado ao navegar páginas
// Manipulação de erros personalizados usando componentDidCatch
// Injete dados adicionais em páginas
// Adicionar CSS global

function GlobalStyle() {
    return (
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
    );
}


export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    );
  }