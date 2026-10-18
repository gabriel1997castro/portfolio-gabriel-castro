import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gabriel-castro-portfolio.vercel.app"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Política de Privacidade — MindRack",
  description:
    "Como o aplicativo MindRack trata os dados dos usuários. Versões em português e inglês.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Política de Privacidade — MindRack",
    description:
      "Como o aplicativo MindRack trata os dados dos usuários. Versões em português e inglês.",
    siteName: "Gabriel Castro",
    url: `${baseUrl}/mindrack/privacidade`,
  },
  alternates: {
    canonical: `${baseUrl}/mindrack/privacidade`,
  },
};

/* Typography primitives — the project has no @tailwindcss/typography plugin,
   so `prose` classes are inert here and styles are applied explicitly. */

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

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

/* Horizontally scrollable on small screens so tables never widen the page. */
function DataTable({
  rows,
  dataHeader = "Dado",
}: {
  rows: [React.ReactNode, string][];
  dataHeader?: string;
}) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold">{dataHeader}</th>
            <th className="px-4 py-3 text-left font-semibold">Finalidade</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([dado, finalidade], i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3 align-top text-muted-foreground">
                {dado}
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {finalidade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const subscriptionRows: [React.ReactNode, string][] = [
  [
    <span key="recibo">
      <B>Recibo da compra</B> (produto, datas, status), enviado pela loja
    </span>,
    "Reconhecer a assinatura e liberar o conteúdo",
  ],
  [
    <span key="anon">
      <B>Identificador anônimo de usuário</B> gerado pelo RevenueCat
    </span>,
    "Ligar a assinatura ao aparelho e permitir restaurar a compra",
  ],
  [
    <span key="conta">
      <B>Id da sua conta MindRack</B>, se você tiver criado uma
    </span>,
    "Fazer a assinatura acompanhar você na troca de aparelho",
  ],
  [
    <span key="inst">
      <B>Identificador de instalação</B> (o mesmo da medição de uso, abaixo)
    </span>,
    "Saber quanto cada canal de divulgação rende, somando receita por origem",
  ],
  [
    <span key="origem">
      <B>Origem da instalação</B> informada pela loja: na App Store, a campanha
      da Apple Ads (via AdServices, sem pedir permissão de rastreamento e sem o
      identificador de publicidade); no Google Play, os parâmetros do link de
      divulgação
    </span>,
    "Saber de onde vêm as instalações e as assinaturas",
  ],
];

const usageRows: [React.ReactNode, string][] = [
  [
    <span key="nome">
      <B>Nome do evento</B> e categoria fixa (ex.: etapa <code>goal</code>,
      gatilho <code>onboarding</code>)
    </span>,
    "Medir o funil do produto",
  ],
  [
    <span key="inst">
      <B>Identificador de instalação</B> — número aleatório criado pelo app,
      guardado só no aparelho
    </span>,
    "Contar etapas por instalação, sem saber quem é a pessoa",
  ],
  [
    <B key="plat">Plataforma, versão do app e idioma</B>,
    "Separar os resultados por versão e idioma",
  ],
  [
    <span key="ref">
      <B>Origem da instalação</B> (só Android): os parâmetros do link do Google
      Play pelo qual o app foi instalado, como <code>utm_source=tiktok</code>
    </span>,
    "Saber qual divulgação traz quem fica e quem assina",
  ],
];

const accountRows: [React.ReactNode, string][] = [
  [<B key="e">E-mail</B>, "Criar conta, login, recuperação de senha"],
  [
    <span key="s">
      <B>Senha</B> (armazenada como hash pelo Supabase; nunca em texto)
    </span>,
    "Autenticação",
  ],
  [
    <span key="a">
      <B>Apelido</B> (escolhido por você)
    </span>,
    "Exibido no ranking",
  ],
  [
    <span key="em">
      <B>Emoji</B> (escolhido por você)
    </span>,
    "Avatar no ranking",
  ],
  [
    <span key="p">
      <B>Pontuações do Desafio do Dia</B> (estrelas + tempo)
    </span>,
    "Ranking diário e semanal",
  ],
  [
    <span key="st">
      <B>Estatísticas</B> (total de estrelas e fases concluídas)
    </span>,
    "Ranking geral",
  ],
  [
    <B key="bk">Backup do progresso e do histórico de partidas</B>,
    "Restaurar em outro aparelho",
  ],
  [
    <span key="dt">
      <B>Data do último acesso</B> (apenas a data, máx. 1×/dia)
    </span>,
    "Métrica interna de retenção",
  ],
];

export default function MindRackPrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mx-auto max-w-3xl">
        {/* Portuguese version */}
        <article lang="pt-BR">
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display leading-tight">
              Política de Privacidade — MindRack
            </h1>
            <p className="text-sm text-muted-foreground">
              <B>Última atualização:</B> 17 de outubro de 2026
            </p>
          </header>

          <P className="text-lg">
            Esta política descreve como o aplicativo <B>MindRack</B> (&quot;nós&quot;,
            &quot;o app&quot;) trata as informações dos usuários.
          </P>

          <Section id="resumo">
            <H2>Resumo</H2>
            <P>
              O MindRack funciona totalmente <B>sem conta</B> — todos os jogos,
              fases, conquistas e o Desafio do Dia rodam offline, sem cadastro. A
              conta é <B>opcional</B> e existe para quem quiser participar do
              ranking e ter backup automático na nuvem.
            </P>
          </Section>

          <Section id="sem-conta">
            <H2>Sem conta (padrão)</H2>
            <P>Sem conta, o app:</P>
            <UL>
              <li>
                <B>não coleta, não armazena e não compartilha nenhum dado
                pessoal</B>;
              </li>
              <li>
                salva o progresso e o <B>histórico de partidas</B> (data, jogo,
                fase, duração, estrelas, erros, jogadas e dicas){" "}
                <B>apenas no seu aparelho</B> (AsyncStorage);
              </li>
              <li>
                pode ser apagado a qualquer momento em{" "}
                <B>Ajustes → Apagar todo o progresso</B> ou desinstalando o app.
              </li>
            </UL>
          </Section>

          <Section id="assinatura-premium">
            <H2>Assinatura MindRack Premium</H2>
            <P>
              A assinatura é <B>opcional</B>: as fases 1–10 de cada jogo, o
              Desafio do Dia, o ranking, a conta e o backup continuam gratuitos.
            </P>

            <P>
              Quando você assina, a{" "}
              <B>cobrança é feita pela App Store ou pelo Google Play</B> — o
              MindRack <B>nunca vê nem armazena</B> dados de pagamento, número de
              cartão ou endereço de cobrança.
            </P>

            <P>
              Para saber se a sua assinatura está ativa, usamos o{" "}
              <B>RevenueCat</B> (
              <ExtLink href="https://www.revenuecat.com/privacy">
                política deles
              </ExtLink>
              ), que trata os recibos das lojas em nosso nome:
            </P>

            <DataTable rows={subscriptionRows} />

            <P>
              Não enviamos ao RevenueCat o seu e-mail, o seu apelido nem o seu
              progresso.
            </P>

            <P>
              O RevenueCat nos devolve os eventos da assinatura (compra,
              renovação, reembolso, com valor, imposto e comissão da loja) junto
              com a origem da instalação. Guardamos isso no nosso servidor
              (Supabase) <B>sem</B> o id da sua conta: o cliente do RevenueCat
              vira um código embaralhado, que só serve para contar assinantes
              distintos.
            </P>

            <P>
              O último estado conhecido da assinatura fica guardado{" "}
              <B>no aparelho</B> para o app continuar funcionando sem internet.
            </P>

            <P>
              <B>Base legal (LGPD):</B> execução de contrato.
            </P>
          </Section>

          <Section id="medicao-de-uso">
            <H2>Medição de uso</H2>
            <P>
              O app registra quando certas coisas acontecem — abrir o app, passar
              por uma etapa das boas-vindas (e a resposta escolhida: objetivo,
              tempo por dia, tipos de jogo), concluir uma fase, ver a oferta do
              Premium, iniciar um teste, comprar, restaurar. Esses eventos são
              guardados no aparelho e <B>enviados ao nosso servidor (Supabase)</B>{" "}
              para medirmos, em conjunto, onde as pessoas desistem e o que
              funciona.
            </P>

            <DataTable rows={usageRows} dataHeader="Dado enviado" />

            <P>
              Não são enviados e-mail, apelido, id de conta, id de aparelho, id
              de publicidade nem nada que você digite — o envio é feito{" "}
              <B>sem a sua sessão</B>, mesmo que você tenha conta. O
              identificador de instalação some quando o app é desinstalado. Ele
              vai também ao RevenueCat (acima) para somar a receita por origem;
              nas nossas tabelas ele nunca fica junto do id da sua conta. O
              endereço IP pode constar temporariamente nos registros técnicos do
              provedor (Supabase), como em qualquer acesso à internet, mas não é
              guardado junto com os eventos.
            </P>

            <P>
              <B>Base legal (LGPD):</B> legítimo interesse (melhorar o app), com
              dados minimizados e sem identificação da pessoa.
            </P>

            <P>Não usamos SDK de publicidade, de rastreamento nem de perfil.</P>
          </Section>

          <Section id="com-conta">
            <H2>Com conta (opcional)</H2>
            <P>
              Se você criar uma conta, os seguintes dados são armazenados no
              servidor (Supabase):
            </P>

            <DataTable rows={accountRows} />

            <P>
              Login alternativo por código por e-mail (sem senha) está disponível
              para quem preferir, assim como <B>entrar com Google</B> e, no iOS,{" "}
              <B>entrar com Apple</B>. Nesses casos recebemos nome e e-mail do
              provedor; não postamos nada em seu nome. Se você usar o
              &quot;Ocultar meu e-mail&quot; da Apple, recebemos apenas o endereço
              de redirecionamento gerado por ela — nunca o seu e-mail real.
            </P>

            <P>
              <B>Base legal (LGPD):</B> execução de contrato — os dados são
              necessários para prestar o serviço que você solicitou (ranking e
              backup).
            </P>

            <P>
              <B>Retenção:</B> os dados ficam enquanto a conta existir. Ao apagar
              a conta, tudo é removido imediatamente do servidor (cascata). O
              progresso local no aparelho permanece.
            </P>

            <P>
              <B>E-mail nunca aparece no ranking.</B> O leaderboard exibe apenas
              apelido, emoji e números.
            </P>
          </Section>

          <Section id="o-que-o-app-nao-faz">
            <H2>O que o app NÃO faz</H2>
            <UL>
              <li>Não exibe anúncios;</li>
              <li>Não usa cookies, SDKs de rastreamento nem publicidade;</li>
              <li>
                Não vê nem armazena dados de pagamento — quem cobra é a loja;
              </li>
              <li>
                Não acessa câmera, microfone, fotos ou qualquer permissão
                sensível;
              </li>
              <li>
                Não vende dados nem os compartilha com terceiros para fins
                publicitários;
              </li>
              <li>Não apaga o seu progresso quando a assinatura termina;</li>
              <li>
                Não afirma que o app melhora memória, atenção, QI ou qualquer
                capacidade fora dele. As métricas de desempenho descrevem{" "}
                <B>os jogos do MindRack</B>.
              </li>
            </UL>
          </Section>

          <Section id="apagar-conta">
            <H2>Apagar conta</H2>
            <P>
              Você pode apagar sua conta a qualquer momento em{" "}
              <B>Ajustes → Conta → Apagar conta</B>. A exclusão é imediata e
              irreversível: remove o usuário, apelido, pontuações, backup e todos
              os dados associados no servidor. O progresso local permanece no
              aparelho.
            </P>
          </Section>

          <Section id="criancas">
            <H2>Crianças</H2>
            <P>
              O app não coleta dados pessoais de nenhum usuário sem conta,
              incluindo crianças. O conteúdo é adequado para todas as idades (classificação
              livre). A criação de conta (opcional) requer e-mail.
            </P>
          </Section>

          <Section id="alteracoes">
            <H2>Alterações nesta política</H2>
            <P>
              Se uma versão futura do app alterar o tratamento de dados, esta
              política será atualizada <B>antes</B> da publicação da versão, com
              destaque nas notas de atualização.
            </P>
          </Section>

          <Section id="contato">
            <H2>Contato</H2>
            <P>
              Dúvidas sobre esta política: <MailLink />
            </P>
          </Section>
        </article>

        {/* English version */}
        <div className="my-12 md:my-16 border-t" />

        <article lang="en">
          <header className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display leading-tight">
              Privacy Policy — MindRack (English)
            </h2>
            <p className="text-sm text-muted-foreground">
              <B>Last updated:</B> October 17, 2026
            </p>
          </header>

          <P>
            MindRack works fully <B>without an account</B> — all games, levels,
            achievements and the Daily Challenge run offline, with no sign-up
            required. An account is <B>optional</B>, for those who want to join
            the leaderboard and have automatic cloud backup.
          </P>

          <P>
            <B>Without an account:</B> the app does not collect, store, or share
            any personal data. Progress and your match history (date, game, level,
            duration, stars, mistakes, moves and hints) are stored locally on your
            device only.
          </P>

          <P>
            <B>MindRack Premium (optional subscription):</B> billing is handled
            entirely by the App Store or Google Play — we never see or store
            payment details. To know whether your subscription is active we use{" "}
            <B>RevenueCat</B>, which processes the store receipts on our behalf:
            it receives the purchase receipt and an anonymous user identifier
            (plus your MindRack account id, if you created one, so the
            subscription follows you across devices), the random installation
            identifier described below and where the install came from as
            reported by the store — on the App Store, the Apple Ads campaign
            (via AdServices, without asking for tracking permission and without
            the advertising identifier); on Google Play, the parameters of the
            promotional link. It never receives your email, nickname or
            progress. RevenueCat sends us back the subscription events (purchase,
            renewal, refund, with price, tax and store commission) and the
            install source; we store them on our server (Supabase){" "}
            <B>without</B> your account id. The last known subscription status is
            cached on your device so the app keeps working offline. Levels 1–10 of
            every game, the Daily Challenge, the leaderboard, your account and
            backup remain free, and no progress is ever deleted when a
            subscription ends.
          </P>

          <P>
            <B>Usage events:</B> the app records when certain things happen (app
            opens, each welcome step and the answer picked — goal, minutes per
            day, game types —, levels completed, Premium offer views, trials,
            purchases, restores) and sends them to our server (Supabase) to
            measure, in aggregate, where people drop off. Each event carries only
            its name, a fixed category, a random <B>installation identifier</B>{" "}
            created by the app and kept on the device (not linked to your
            account, deleted when you uninstall), the platform, the app version
            and the language — and, on Android only, the parameters of the
            Google Play link the app was installed from (such as{" "}
            <code>utm_source=tiktok</code>). No email, nickname, account id,
            device id or advertising id is sent, and events are sent without
            your session even if you have an account. Your IP address may appear
            temporarily in the provider&apos;s technical logs (Supabase), as with
            any internet request, but it is not stored with the events. Legal
            basis (LGPD): legitimate interest, with minimized, non-identifying
            data.
          </P>

          <P>
            <B>With an account (optional):</B> your email (required for sign-up),
            a hashed password (managed by Supabase, never stored in plain text),
            your chosen nickname, emoji, daily scores, stats, and a progress
            backup are stored on the server (Supabase). Alternative sign-in via
            email code (passwordless) is available. Your email is never shown on
            the leaderboard — only your nickname, emoji, and scores are visible to
            others. Sign in with Google and, on iOS, Sign in with Apple are also
            available; if you use Apple&apos;s &quot;Hide My Email&quot;, we only
            receive the relay address Apple generates, never your real one.
          </P>

          <P>
            You can delete your account at any time via{" "}
            <B>Settings → Account → Delete account</B>. Deletion is immediate and
            removes all server-side data. Local progress remains on your device.
          </P>

          <P>
            The app has no ads, no tracking SDKs and requests no sensitive
            permissions. It offers an optional in-app subscription. Content is
            suitable for all ages. Performance metrics describe how you do{" "}
            <B>inside MindRack games</B>; the app makes no claim about memory,
            attention, IQ or health.
          </P>

          <P>
            Contact: <MailLink />
          </P>
        </article>

        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              MindRack é um aplicativo de jogos de raciocínio desenvolvido por
              Gabriel Castro. Para outros assuntos, veja a{" "}
              <Link
                href="/contact"
                className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                página de contato
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
