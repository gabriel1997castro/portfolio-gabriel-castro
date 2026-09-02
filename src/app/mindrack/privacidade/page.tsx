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

/* Horizontally scrollable on small screens so tables never widen the page. */
function DataTable({ rows }: { rows: [React.ReactNode, string][] }) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold">Dado</th>
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
              <B>Última atualização:</B> 12 de agosto de 2026
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
              <Link
                href="https://www.revenuecat.com/privacy"
                className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                política deles
              </Link>
              ), que trata os recibos das lojas em nosso nome:
            </P>

            <DataTable rows={subscriptionRows} />

            <P>
              Não enviamos ao RevenueCat o seu e-mail, o seu apelido nem o seu
              progresso.
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
              O app conta, <B>apenas no seu aparelho</B>, quantas vezes certas
              coisas aconteceram — abrir o app, concluir uma fase, ver o paywall,
              iniciar um teste, comprar, restaurar. São{" "}
              <B>contadores anônimos</B>: não há e-mail, apelido, identificador de
              usuário nem de aparelho, e <B>nada é enviado pela internet</B>.
              Servem para entender o produto e podem ser apagados junto com o
              progresso.
            </P>

            <P>
              Não usamos SDK de publicidade, de rastreamento nem de perfil.
            </P>
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
              <li>Não compartilha dados com terceiros para fins publicitários;</li>
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
              O app não coleta dados de nenhum usuário sem conta, incluindo
              crianças. O conteúdo é adequado para todas as idades (classificação
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
              <B>Last updated:</B> August 12, 2026
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
            subscription follows you across devices). It never receives your
            email, nickname or progress. The last known subscription status is
            cached on your device so the app keeps working offline. Levels 1–10 of
            every game, the Daily Challenge, the leaderboard, your account and
            backup remain free, and no progress is ever deleted when a
            subscription ends.
          </P>

          <P>
            <B>Usage counters:</B> the app keeps anonymous counters on your device
            (app opens, levels completed, paywall views, purchases, restores).
            They contain no identifiers of any kind and are never sent over the
            network.
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
