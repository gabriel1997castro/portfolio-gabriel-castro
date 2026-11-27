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

const title = "Política de Privacidade — MemoVerse";
const description =
  "Como o aplicativo MemoVerse trata os seus dados: ele não coleta nada. Versões em português e inglês.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title,
    description,
    siteName: "Gabriel Castro",
    url: siteUrl("/memoverse/privacidade"),
  },
  alternates: { canonical: siteUrl("/memoverse/privacidade") },
};

export default function MemoVersePrivacyPage() {
  return (
    <Page>
      {/* Portuguese version */}
      <article lang="pt-BR">
        <H1>Política de Privacidade do MemoVerse</H1>

        <P>Última atualização: 27 de novembro de 2026.</P>

        <P className="text-lg">
          O <B>MemoVerse</B> é um app para memorizar versículos da Bíblia,
          feito por Gabriel Guimarães Almeida de Castro, desenvolvedor
          independente.
        </P>

        <Section id="o-que-coleta">
          <H2>O que o app coleta: nada</H2>
          <P>
            O MemoVerse não tem conta, não tem servidor, não usa anúncios, não
            usa análise de uso (analytics) nem relatórios de falha de
            terceiros, e não rastreia você.
          </P>
        </Section>

        <Section id="onde-ficam">
          <H2>Onde ficam seus dados</H2>
          <P>
            Os versículos que você escolhe, seu progresso, suas revisões e os
            perfis da família ficam no banco de dados do app,{" "}
            <B>dentro do seu aparelho</B>. Eles entram no backup do iPhone
            (iCloud ou computador) como qualquer outro app, segundo as suas
            configurações do sistema.
          </P>
        </Section>

        <Section id="o-que-sai">
          <H2>O que sai do aparelho, e só quando você pede</H2>
          <UL>
            <li>
              <B>Backup automático no iCloud</B> (desligado até você ligar):
              guarda uma cópia dos seus dados na <B>sua própria conta do
              iCloud</B>, pela Apple. Nada passa por servidor nosso, e eu não
              tenho acesso a essa cópia. Dá para desligar e apagar as cópias
              no próprio app.
            </li>
            <li>
              <B>Backup em arquivo:</B> ao fazer um backup, o app gera um
              arquivo e você escolhe onde guardar ou para qual app enviar. Ao
              restaurar, ele lê o arquivo que você escolher.
            </li>
            <li>
              <B>Compartilhar:</B> ao compartilhar um versículo ou o Meu
              resumo, o app gera uma imagem ou um texto e abre a folha de
              compartilhamento do sistema; você escolhe o destino.
            </li>
            <li>
              <B>Reportar erro:</B> abre o seu app de e-mail com uma mensagem
              para <MailLink />; nada é enviado sem você tocar em Enviar.
            </li>
          </UL>
        </Section>

        <Section id="tempo-de-uso">
          <H2>Palavra primeiro (Tempo de Uso)</H2>
          <P>
            Se você ligar o recurso que deixa alguns apps fechados até a
            prática do dia, o MemoVerse pede acesso ao <B>Tempo de Uso</B> da
            Apple. A escolha dos apps é feita numa tela da própria Apple, e o
            MemoVerse <B>não fica sabendo quais apps são</B>: ele recebe só
            uma referência que o iOS usa para fechá-los. Nada disso sai do
            aparelho. Para desligar, basta o botão nos Ajustes do app.
          </P>
        </Section>

        <Section id="microfone">
          <H2>Microfone e fala</H2>
          <P>
            &quot;Conferir falando&quot; usa o microfone só enquanto você
            recita, e transcreve a fala <B>no próprio aparelho</B>, com o
            reconhecimento de voz do iOS em modo local. O áudio não é gravado
            nem enviado.
          </P>
        </Section>

        <Section id="fotos">
          <H2>Fotos</H2>
          <P>
            Ao salvar a imagem do Meu resumo, o app só adiciona a imagem à sua
            biblioteca; ele não lê suas fotos.
          </P>
        </Section>

        <Section id="notificacoes">
          <H2>Notificações</H2>
          <P>
            O lembrete diário é uma notificação local, agendada no aparelho. O
            app não usa notificações remotas (push).
          </P>
        </Section>

        <Section id="compra">
          <H2>Compra</H2>
          <P>
            &quot;Liberar tudo&quot; é uma compra única feita pela App Store. A
            Apple processa o pagamento; o app só recebe a confirmação de que a
            compra existe. Veja a política de privacidade da Apple para os
            dados da compra.
          </P>
        </Section>

        <Section id="texto-biblico">
          <H2>Texto bíblico</H2>
          <P>
            As traduções vêm incluídas no app: Bíblia Livre (CC BY 4.0),
            Biblica® Open Nova Bíblia Viva™ (CC BY-SA 4.0) e Berean Standard
            Bible (domínio público). Nenhuma consulta é feita à internet para
            ler a Bíblia.
          </P>
        </Section>

        <Section id="criancas">
          <H2>Crianças</H2>
          <P>O app não coleta dados de ninguém, inclusive de crianças.</P>
        </Section>

        <Section id="mudancas">
          <H2>Mudanças</H2>
          <P>
            Se esta política mudar, a data acima muda e a versão nova fica
            nesta página.
          </P>
        </Section>

        <P>
          Contato: <MailLink />
        </P>
      </article>

      {/* English version */}
      <article lang="en">
        <LangTitle>MemoVerse Privacy Policy (English)</LangTitle>

        <P>Last updated: November 27, 2026.</P>

        <P className="text-lg">
          <B>MemoVerse</B> is an app for memorizing Bible verses, made by
          Gabriel Guimarães Almeida de Castro, an independent developer.
        </P>

        <Section id="what-it-collects">
          <H2>What the app collects: nothing</H2>
          <P>
            MemoVerse has no account, no server, no ads, no analytics and no
            third-party crash reporting, and it does not track you.
          </P>
        </Section>

        <Section id="where-data-lives">
          <H2>Where your data lives</H2>
          <P>
            The verses you choose, your progress, your reviews and your
            family&apos;s profiles live in the app&apos;s database{" "}
            <B>on your device</B>. They are included in your iPhone backup
            (iCloud or computer) like any other app, according to your system
            settings.
          </P>
        </Section>

        <Section id="what-leaves">
          <H2>What leaves the device, and only when you ask</H2>
          <UL>
            <li>
              <B>Automatic iCloud backup</B> (off until you turn it on): keeps
              a copy of your data in <B>your own iCloud account</B>, through
              Apple. Nothing goes through a server of mine, and I have no
              access to that copy. You can turn it off and delete the copies
              inside the app.
            </li>
            <li>
              <B>File backup:</B> making a backup creates a file and you choose
              where to save it or which app to send it to. Restoring reads the
              file you pick.
            </li>
            <li>
              <B>Share:</B> sharing a verse or My summary creates an image or
              text and opens the system share sheet; you choose the
              destination.
            </li>
            <li>
              <B>Report an error:</B> opens your mail app with a message to{" "}
              <MailLink />; nothing is sent until you tap Send.
            </li>
          </UL>
        </Section>

        <Section id="screen-time">
          <H2>Scripture First (Screen Time)</H2>
          <P>
            If you turn on the feature that keeps some apps closed until the
            day&apos;s practice, MemoVerse asks for access to Apple&apos;s{" "}
            <B>Screen Time</B>. You pick the apps on a screen made by Apple, and
            MemoVerse <B>never learns which apps they are</B>: it only receives
            a reference that iOS uses to close them. None of this leaves the
            device. To turn it off, use the switch in the app&apos;s Settings.
          </P>
        </Section>

        <Section id="microphone">
          <H2>Microphone and speech</H2>
          <P>
            &quot;Speak to check&quot; uses the microphone only while you
            recite, and transcribes <B>on the device</B> with iOS on-device
            speech recognition. Audio is not recorded or uploaded.
          </P>
        </Section>

        <Section id="photos">
          <H2>Photos</H2>
          <P>
            Saving the My summary image only adds the image to your library;
            the app does not read your photos.
          </P>
        </Section>

        <Section id="notifications">
          <H2>Notifications</H2>
          <P>
            The daily reminder is a local notification scheduled on the
            device. The app does not use remote (push) notifications.
          </P>
        </Section>

        <Section id="purchase">
          <H2>Purchase</H2>
          <P>
            &quot;Unlock everything&quot; is a one-time purchase made through
            the App Store. Apple processes the payment; the app only receives
            confirmation that the purchase exists. See Apple&apos;s privacy
            policy for purchase data.
          </P>
        </Section>

        <Section id="bible-text">
          <H2>Bible text</H2>
          <P>
            Translations are bundled with the app: Bíblia Livre (CC BY 4.0),
            Biblica® Open Nova Bíblia Viva™ (CC BY-SA 4.0) and the Berean
            Standard Bible (public domain). No internet request is made to read
            the Bible.
          </P>
        </Section>

        <Section id="children">
          <H2>Children</H2>
          <P>The app collects no data from anyone, including children.</P>
        </Section>

        <Section id="changes">
          <H2>Changes</H2>
          <P>
            If this policy changes, the date above changes and the new version
            appears on this page.
          </P>
        </Section>

        <P>
          Contact: <MailLink />
        </P>
      </article>

      <FooterCard>
        MemoVerse é um aplicativo para memorizar versículos da Bíblia,
        desenvolvido por Gabriel Castro. Precisa de ajuda? Veja a{" "}
        <InLink href="/memoverse/suporte">página de suporte</InLink>.
      </FooterCard>
    </Page>
  );
}
