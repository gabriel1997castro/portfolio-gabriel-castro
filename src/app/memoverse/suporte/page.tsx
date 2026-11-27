import { Metadata } from "next";
import {
  B,
  FooterCard,
  H1,
  H2,
  InLink,
  LangTitle,
  MailLink,
  Page,
  P,
  Section,
  UL,
  siteUrl,
} from "../_components/text";

const title = "Suporte — MemoVerse";
const description =
  "Página de suporte do aplicativo MemoVerse: teste grátis, compra, backup, troca de celular e contato. Em português e inglês.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title,
    description,
    siteName: "Gabriel Castro",
    url: siteUrl("/memoverse/suporte"),
  },
  alternates: { canonical: siteUrl("/memoverse/suporte") },
};

export default function MemoVerseSupportPage() {
  return (
    <Page>
      {/* Portuguese version */}
      <article lang="pt-BR">
        <H1>Suporte do MemoVerse</H1>

        <P className="text-lg">
          Esta é a página de ajuda do <B>MemoVerse</B>, um app para memorizar
          versículos da Bíblia. Dúvidas, erros e sugestões: escreva para{" "}
          <MailLink />. Normalmente respondo em alguns dias.
        </P>

        <Section id="teste-gratis">
          <H2>Teste grátis e compra</H2>
          <P>
            Você usa <B>tudo do app de graça por três dias</B>, sem criar
            conta. O teste é confirmado pela App Store, sem custo, e nada é
            cobrado sozinho quando ele acaba.
          </P>
          <P>
            Depois dos três dias, o app fica fechado até você tocar em{" "}
            <B>Liberar tudo</B>, uma <B>compra única</B>, não uma assinatura,
            que vale para a família (Compartilhamento Familiar). Seus
            versículos e seu progresso continuam guardados. Se você não puder
            pagar, a tela da compra tem <B>Não consigo pagar agora</B>, que
            libera o mesmo sem custo.
          </P>
        </Section>

        <Section id="restaurar-compra">
          <H2>Como restaurar a compra</H2>
          <P>
            Em <B>Ajustes → Restaurar compra</B>. A compra pertence à sua
            conta da App Store: reinstalar o app ou trocar de iPhone não faz
            você perdê-la, basta usar a mesma conta Apple. Pedidos de{" "}
            <B>reembolso são decididos pela Apple</B> e feitos em
            reportaproblem.apple.com.
          </P>
        </Section>

        <Section id="trocar-de-celular">
          <H2>Troquei de celular / quero um backup</H2>
          <P>
            Seu progresso fica no iPhone, sem conta. Em{" "}
            <B>Ajustes → Seus dados</B> há dois caminhos:
          </P>
          <UL>
            <li>
              <B>Backup automático no iCloud:</B> guarda uma cópia na sua
              própria conta do iCloud. No celular novo, use{" "}
              <B>Restaurar do iCloud</B>.
            </li>
            <li>
              <B>Fazer backup agora:</B> gera um arquivo que você guarda numa
              pasta ou envia para um app. No celular novo, use{" "}
              <B>Restaurar de um arquivo</B>.
            </li>
          </UL>
        </Section>

        <Section id="erro-no-texto">
          <H2>Encontrei um erro no app ou no texto</H2>
          <P>
            Na tela de contexto de um versículo há <B>Reportar erro</B>, que
            abre um e-mail já com a referência e a versão do app. Para outros
            problemas, escreva para <MailLink /> dizendo qual iPhone e qual
            versão do iOS você usa e o que aconteceu.
          </P>
        </Section>

        <Section id="privacidade">
          <H2>Privacidade</H2>
          <P>
            O MemoVerse não coleta nenhum dado. Os detalhes estão na{" "}
            <InLink href="/memoverse/privacidade">
              política de privacidade
            </InLink>
            .
          </P>
        </Section>
      </article>

      {/* English version */}
      <article lang="en">
        <LangTitle>MemoVerse Support (English)</LangTitle>

        <P className="text-lg">
          This is the help page for <B>MemoVerse</B>, an app for memorizing
          Bible verses. Questions, bugs and ideas: write to <MailLink />. I
          usually reply within a few days.
        </P>

        <Section id="free-trial">
          <H2>Free trial and purchase</H2>
          <P>
            You use <B>the whole app free for three days</B>, with no account.
            The App Store confirms the trial at no cost, and nothing is charged
            when it ends.
          </P>
          <P>
            After the three days, the app stays closed until you tap{" "}
            <B>Unlock everything</B>, a <B>one-time purchase</B>, not a
            subscription, shared with your family (Family Sharing). Your verses
            and progress stay saved. If you cannot pay, the purchase screen has{" "}
            <B>I can&apos;t pay right now</B>, which unlocks the same at no
            charge.
          </P>
        </Section>

        <Section id="restore-purchase">
          <H2>How to restore the purchase</H2>
          <P>
            In <B>Settings → Restore purchase</B>. The purchase belongs to your
            App Store account: reinstalling the app or switching iPhones does
            not lose it, as long as you use the same Apple Account.{" "}
            <B>Refunds are decided by Apple</B> and requested at
            reportaproblem.apple.com.
          </P>
        </Section>

        <Section id="new-phone">
          <H2>I changed phones / I want a backup</H2>
          <P>
            Your progress lives on your iPhone, with no account. In{" "}
            <B>Settings → Your data</B> there are two ways:
          </P>
          <UL>
            <li>
              <B>Automatic iCloud backup:</B> keeps a copy in your own iCloud
              account. On the new phone, use <B>Restore from iCloud</B>.
            </li>
            <li>
              <B>Back up now:</B> creates a file you save to a folder or send
              to an app. On the new phone, use <B>Restore from a file</B>.
            </li>
          </UL>
        </Section>

        <Section id="report-error">
          <H2>I found an error in the app or in the text</H2>
          <P>
            A verse&apos;s context screen has <B>Report an error</B>, which
            opens an e-mail with the reference and the app version already
            filled in. For anything else, write to <MailLink /> with your
            iPhone model, iOS version and what happened.
          </P>
        </Section>

        <Section id="privacy">
          <H2>Privacy</H2>
          <P>
            MemoVerse collects no data. The details are in the{" "}
            <InLink href="/memoverse/privacidade">privacy policy</InLink>.
          </P>
        </Section>
      </article>

      <FooterCard>
        MemoVerse é um aplicativo para memorizar versículos da Bíblia,
        desenvolvido por Gabriel Castro. Veja também a{" "}
        <InLink href="/memoverse/privacidade">política de privacidade</InLink>{" "}
        ou escreva para <MailLink />.
      </FooterCard>
    </Page>
  );
}
