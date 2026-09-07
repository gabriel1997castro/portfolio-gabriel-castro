import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gabriel-castro-portfolio.vercel.app"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Suporte — MindRack",
  description:
    "Página de suporte do aplicativo MindRack: ajuda sobre assinatura, compras, conta e progresso. Em português, inglês e espanhol.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Suporte — MindRack",
    description:
      "Página de suporte do aplicativo MindRack: ajuda sobre assinatura, compras, conta e progresso. Em português, inglês e espanhol.",
    siteName: "Gabriel Castro",
    url: `${baseUrl}/mindrack/suporte`,
  },
  alternates: {
    canonical: `${baseUrl}/mindrack/suporte`,
  },
};

/* Typography primitives — the project has no @tailwindcss/typography plugin,
   so `prose` classes are inert here and styles are applied explicitly.
   Kept in sync with /mindrack/privacidade so both pages read as one set. */

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24" id={id}>
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-10 mb-3 font-display">
      {children}
    </h2>
  );
}

function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mb-4 leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 mb-4 space-y-2 leading-relaxed text-muted-foreground">
      {children}
    </ul>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

function MailLink() {
  return (
    <Link
      href="mailto:mindrackapp@gmail.com"
      className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
    >
      mindrackapp@gmail.com
    </Link>
  );
}

function PrivacyLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/mindrack/privacidade"
      className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

export default function MindRackSupportPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mx-auto max-w-3xl">
        {/* Portuguese version */}
        <article lang="pt-BR">
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display leading-tight">
              Suporte do MindRack
            </h1>
          </header>

          <P className="text-lg">
            Esta é a página de ajuda do <B>MindRack</B>, uma coleção de{" "}
            <B>11 jogos de raciocínio</B> com <B>660 fases</B>. Para falar
            comigo, escreva para <MailLink /> — normalmente respondo em alguns
            dias úteis.
          </P>

          <Section id="restaurar-compra">
            <H2>Como restaurar uma compra</H2>
            <P>
              O botão <B>Restaurar compras</B> fica em dois lugares: dentro da
              tela do <B>MindRack Premium</B> e em{" "}
              <B>Ajustes → MindRack Premium</B>.
            </P>
            <P>
              A compra pertence à sua <B>conta da loja</B> (Apple ou Google), e
              não à conta do app. Reinstalar o MindRack ou trocar de aparelho não
              faz você perder a assinatura: basta entrar na loja com a mesma
              conta que fez a compra e tocar em Restaurar compras.
            </P>
          </Section>

          <Section id="cancelar-assinatura">
            <H2>Como cancelar a assinatura</H2>
            <P>
              O cancelamento é feito <B>na loja</B>, não dentro do app:
            </P>
            <UL>
              <li>
                <B>iPhone / iPad:</B> Ajustes → [seu nome] → Assinaturas →
                MindRack → Cancelar assinatura;
              </li>
              <li>
                <B>Android:</B> app Google Play → Pagamentos e assinaturas →
                Assinaturas → MindRack → Cancelar assinatura.
              </li>
            </UL>
            <P>
              Cancelar não interrompe o acesso na hora: você continua com o
              Premium até o fim do período já pago. Pedidos de{" "}
              <B>reembolso são decididos pela Apple ou pelo Google</B>, não por
              mim — eles precisam ser feitos diretamente na loja onde a compra
              foi realizada.
            </P>
          </Section>

          <Section id="o-que-e-gratis">
            <H2>O que é grátis</H2>
            <P>Sem pagar nada, você tem:</P>
            <UL>
              <li>
                as <B>fases 1 a 10</B> de cada um dos <B>11 jogos</B>;
              </li>
              <li>
                o <B>Desafio do Dia</B>;
              </li>
              <li>
                o <B>ranking</B>.
              </li>
            </UL>
            <P>Não é preciso criar conta para jogar.</P>
            <P>
              O <B>MindRack Premium</B> libera as <B>fases 11 a 60</B> dos 11
              jogos, temas extras, o <B>Treino do Dia</B> completo e o histórico
              longo de desempenho — sempre desempenho{" "}
              <B>dentro dos jogos do MindRack</B>.
            </P>
          </Section>

          <Section id="conta-e-internet">
            <H2>Preciso de conta? E de internet?</H2>
            <P>
              <B>Não para nenhum dos dois.</B> O MindRack funciona offline e sem
              login.
            </P>
            <P>
              A conta é opcional e serve para <B>guardar o progresso entre
              aparelhos</B> e para <B>aparecer no ranking</B>. Ela pode ser
              criada com e-mail e senha, com código enviado por e-mail, com{" "}
              <B>Sign in with Apple</B> ou com <B>Google</B>.
            </P>
          </Section>

          <Section id="apagar-conta">
            <H2>Como apagar minha conta e meus dados</H2>
            <P>
              Dá para apagar tudo <B>de dentro do próprio app</B>, sem precisar
              pedir por e-mail: <B>Ajustes → Conta → Apagar conta</B>. A exclusão
              é imediata e irreversível e remove os seus dados do servidor.
            </P>
            <P>
              Os detalhes estão na{" "}
              <PrivacyLink>política de privacidade</PrivacyLink>.
            </P>
          </Section>

          <Section id="progresso">
            <H2>Perdi meu progresso / troquei de celular</H2>
            <P>
              Quando não há conta, o progresso fica <B>guardado no aparelho</B>.
              Com conta, ele sincroniza e volta ao entrar no novo aparelho com o
              mesmo login.
            </P>
            <P>
              Se algo sumiu, escreva para <MailLink /> contando o que aconteceu.
            </P>
          </Section>

          <Section id="erro-ou-sugestao">
            <H2>Encontrei um erro ou tenho uma sugestão</H2>
            <P>
              Escreva para <MailLink /> dizendo <B>qual aparelho</B> você usa
              (modelo e sistema) e <B>qual jogo e fase</B> em que o problema
              aconteceu. Isso ajuda muito a reproduzir e corrigir.
            </P>
          </Section>
        </article>

        {/* English version */}
        <div className="my-12 md:my-16 border-t" />

        <article lang="en">
          <header className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display leading-tight">
              MindRack Support (English)
            </h2>
          </header>

          <P className="text-lg">
            This is the help page for <B>MindRack</B>, a collection of{" "}
            <B>11 reasoning games</B> with <B>660 levels</B>. To reach me, write
            to <MailLink /> — I usually reply within a few business days.
          </P>

          <Section id="restore-purchase">
            <H2>How to restore a purchase</H2>
            <P>
              The <B>Restore purchases</B> button is in two places: inside the{" "}
              <B>MindRack Premium</B> screen and in{" "}
              <B>Settings → MindRack Premium</B>.
            </P>
            <P>
              The purchase belongs to your <B>store account</B> (Apple or
              Google), not to your MindRack account. Reinstalling the app or
              switching devices does not lose your subscription: sign in to the
              store with the same account that made the purchase and tap Restore
              purchases.
            </P>
          </Section>

          <Section id="cancel-subscription">
            <H2>How to cancel the subscription</H2>
            <P>
              Cancelling is done <B>in the store</B>, not inside the app:
            </P>
            <UL>
              <li>
                <B>iPhone / iPad:</B> Settings → [your name] → Subscriptions →
                MindRack → Cancel subscription;
              </li>
              <li>
                <B>Android:</B> Google Play app → Payments and subscriptions →
                Subscriptions → MindRack → Cancel subscription.
              </li>
            </UL>
            <P>
              Cancelling keeps your access until the end of the period you have
              already paid for. <B>Refunds are decided by Apple or Google</B>,
              not by me — they must be requested directly from the store where
              the purchase was made.
            </P>
          </Section>

          <Section id="whats-free">
            <H2>What is free</H2>
            <P>At no cost you get:</P>
            <UL>
              <li>
                <B>levels 1 to 10</B> of each of the <B>11 games</B>;
              </li>
              <li>
                the <B>Daily Challenge</B>;
              </li>
              <li>
                the <B>leaderboard</B>.
              </li>
            </UL>
            <P>No account is required to play.</P>
            <P>
              <B>MindRack Premium</B> unlocks <B>levels 11 to 60</B> of the 11
              games, extra themes, the full <B>Daily Training</B> and the long
              performance history — always performance{" "}
              <B>inside MindRack games</B>.
            </P>
          </Section>

          <Section id="account-and-internet">
            <H2>Do I need an account? And internet?</H2>
            <P>
              <B>Neither one.</B> MindRack works offline and without signing in.
            </P>
            <P>
              An account is optional: it <B>keeps your progress across
              devices</B> and lets you <B>appear on the leaderboard</B>. You can
              create one with email and password, with a code sent by email, with{" "}
              <B>Sign in with Apple</B> or with <B>Google</B>.
            </P>
          </Section>

          <Section id="delete-account">
            <H2>How to delete my account and my data</H2>
            <P>
              You can delete everything <B>from inside the app</B>, with no need
              to ask by email: <B>Settings → Account → Delete account</B>.
              Deletion is immediate and irreversible, and removes your data from
              the server.
            </P>
            <P>
              The details are in the{" "}
              <PrivacyLink>privacy policy</PrivacyLink>.
            </P>
          </Section>

          <Section id="lost-progress">
            <H2>I lost my progress / I changed phones</H2>
            <P>
              Without an account, progress is <B>stored on the device</B>. With
              an account it syncs and comes back when you sign in on the new
              device.
            </P>
            <P>
              If something disappeared, write to <MailLink /> and tell me what
              happened.
            </P>
          </Section>

          <Section id="bug-or-suggestion">
            <H2>I found a bug or have a suggestion</H2>
            <P>
              Write to <MailLink /> telling me <B>which device</B> you use (model
              and OS) and <B>which game and level</B> the problem happened in.
              That makes it much easier to reproduce and fix.
            </P>
          </Section>
        </article>

        {/* Spanish version */}
        <div className="my-12 md:my-16 border-t" />

        <article lang="es">
          <header className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display leading-tight">
              Soporte de MindRack (Español)
            </h2>
          </header>

          <P className="text-lg">
            Esta es la página de ayuda de <B>MindRack</B>, una colección de{" "}
            <B>11 juegos de razonamiento</B> con <B>660 niveles</B>. Para
            contactarme, escribe a <MailLink /> — normalmente respondo en unos
            días hábiles.
          </P>

          <Section id="restaurar-compra-es">
            <H2>Cómo restaurar una compra</H2>
            <P>
              El botón <B>Restaurar compras</B> está en dos lugares: dentro de la
              pantalla de <B>MindRack Premium</B> y en{" "}
              <B>Ajustes → MindRack Premium</B>.
            </P>
            <P>
              La compra pertenece a tu <B>cuenta de la tienda</B> (Apple o
              Google), no a la cuenta de la app. Reinstalar MindRack o cambiar de
              dispositivo no hace que pierdas la suscripción: inicia sesión en la
              tienda con la misma cuenta con la que compraste y toca Restaurar
              compras.
            </P>
          </Section>

          <Section id="cancelar-suscripcion">
            <H2>Cómo cancelar la suscripción</H2>
            <P>
              La cancelación se hace <B>en la tienda</B>, no dentro de la app:
            </P>
            <UL>
              <li>
                <B>iPhone / iPad:</B> Ajustes → [tu nombre] → Suscripciones →
                MindRack → Cancelar suscripción;
              </li>
              <li>
                <B>Android:</B> app de Google Play → Pagos y suscripciones →
                Suscripciones → MindRack → Cancelar suscripción.
              </li>
            </UL>
            <P>
              Cancelar mantiene tu acceso hasta el final del período que ya
              pagaste. Los <B>reembolsos los deciden Apple o Google</B>, no yo —
              deben solicitarse directamente en la tienda donde se hizo la
              compra.
            </P>
          </Section>

          <Section id="que-es-gratis">
            <H2>Qué es gratis</H2>
            <P>Sin pagar nada tienes:</P>
            <UL>
              <li>
                los <B>niveles 1 a 10</B> de cada uno de los <B>11 juegos</B>;
              </li>
              <li>
                el <B>Desafío del Día</B>;
              </li>
              <li>
                la <B>clasificación</B>.
              </li>
            </UL>
            <P>No hace falta crear una cuenta para jugar.</P>
            <P>
              <B>MindRack Premium</B> desbloquea los <B>niveles 11 a 60</B> de
              los 11 juegos, temas adicionales, el <B>Entrenamiento del Día</B>{" "}
              completo y el historial largo de rendimiento — siempre rendimiento{" "}
              <B>dentro de los juegos de MindRack</B>.
            </P>
          </Section>

          <Section id="cuenta-e-internet">
            <H2>¿Necesito cuenta? ¿Y internet?</H2>
            <P>
              <B>Ninguna de las dos.</B> MindRack funciona sin conexión y sin
              iniciar sesión.
            </P>
            <P>
              La cuenta es opcional: sirve para <B>guardar el progreso entre
              dispositivos</B> y para <B>aparecer en la clasificación</B>. Puedes
              crearla con correo y contraseña, con un código enviado por correo,
              con <B>Sign in with Apple</B> o con <B>Google</B>.
            </P>
          </Section>

          <Section id="borrar-cuenta">
            <H2>Cómo borrar mi cuenta y mis datos</H2>
            <P>
              Puedes borrarlo todo <B>desde la propia app</B>, sin pedirlo por
              correo: <B>Ajustes → Cuenta → Borrar cuenta</B>. La eliminación es
              inmediata e irreversible y quita tus datos del servidor.
            </P>
            <P>
              Los detalles están en la{" "}
              <PrivacyLink>política de privacidad</PrivacyLink>.
            </P>
          </Section>

          <Section id="progreso-perdido">
            <H2>Perdí mi progreso / cambié de teléfono</H2>
            <P>
              Sin cuenta, el progreso queda <B>guardado en el dispositivo</B>.
              Con cuenta se sincroniza y vuelve al iniciar sesión en el
              dispositivo nuevo.
            </P>
            <P>
              Si algo desapareció, escribe a <MailLink /> contándome qué pasó.
            </P>
          </Section>

          <Section id="error-o-sugerencia">
            <H2>Encontré un error o tengo una sugerencia</H2>
            <P>
              Escribe a <MailLink /> indicando <B>qué dispositivo</B> usas
              (modelo y sistema) y <B>qué juego y nivel</B> donde ocurrió el
              problema. Eso ayuda mucho a reproducirlo y corregirlo.
            </P>
          </Section>
        </article>

        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              MindRack é um aplicativo de jogos de raciocínio desenvolvido por
              Gabriel Castro. Veja também a{" "}
              <PrivacyLink>política de privacidade</PrivacyLink> ou escreva para{" "}
              <MailLink />.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
