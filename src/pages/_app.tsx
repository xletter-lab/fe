import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id={"beusable_script"} strategy="afterInteractive">
        {`
          
          (function(w, d, a){
              w.__beusablerumclient__ = {
                  load : function(src){
                      var b = d.createElement("script");
                      b.src = src; b.async=true; b.type = "text/javascript";
                      d.getElementsByTagName("head")[0].appendChild(b);
                  }
              };
              w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
          })(window, document, "//rum.beusable.net/load/b230503e181523u574");
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
