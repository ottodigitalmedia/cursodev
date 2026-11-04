import { ContactForm } from "./contact-form";

const links = [
  { href: "#escritorio", label: "O escritório" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#socios", label: "Sócios" },
  { href: "#metodo", label: "Como trabalhamos" },
  { href: "#contato", label: "Contato" },
];

const areas = [
  {
    titulo: "Empresarial e societário",
    texto: "Constituição e reorganização de sociedades, acordos de sócios, contratos comerciais e operações de compra e venda.",
  },
  {
    titulo: "Civil e contratos",
    texto: "Negociação, revisão e disputas contratuais, responsabilidade civil e cobranças, nas esferas judicial e extrajudicial.",
  },
  {
    titulo: "Trabalhista",
    texto: "Consultoria preventiva, políticas internas, negociações coletivas e defesa em reclamações trabalhistas.",
  },
  {
    titulo: "Tributário",
    texto: "Planejamento tributário, defesas administrativas, recuperação de créditos e contencioso fiscal.",
  },
  {
    titulo: "Família e sucessões",
    texto: "Inventários, testamentos, divórcios, planejamento sucessório e organização de patrimônio familiar.",
  },
  {
    titulo: "Privacidade e dados",
    texto: "Adequação à LGPD, revisão de contratos com fornecedores e resposta a incidentes de segurança.",
  },
];

const socios = [
  {
    nome: "Helena Vilela",
    oab: "OAB/SP 000.001",
    bio: "Sócia fundadora, dedicada ao direito empresarial e societário. Mestre em Direito Comercial, conduz a área de contratos e reorganizações.",
  },
  {
    nome: "Rafael Arantes",
    oab: "OAB/SP 000.002",
    bio: "Sócio fundador, responsável pelas áreas tributária e de contencioso fiscal. Especialista em Direito Tributário, com formação em contabilidade.",
  },
  {
    nome: "Marina Prado",
    oab: "OAB/SP 000.003",
    bio: "Sócia fundadora, atua em direito civil, trabalhista e sucessório. Mediadora certificada, coordena as negociações e os acordos do escritório.",
  },
];

const etapas = [
  {
    num: "I",
    titulo: "Escuta",
    texto: "Uma primeira conversa para entender a situação e os documentos disponíveis.",
  },
  {
    num: "II",
    titulo: "Diagnóstico",
    texto: "Apresentamos por escrito os caminhos possíveis, com riscos e prazos de cada um.",
  },
  {
    num: "III",
    titulo: "Proposta",
    texto: "Honorários definidos em contrato, antes do início do trabalho, sem surpresas.",
  },
  {
    num: "IV",
    titulo: "Acompanhamento",
    texto: "Um advogado de referência e atualizações periódicas até a conclusão do caso.",
  },
];

export default function Home() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="capa">
        <nav className="topo" aria-label="Principal">
          <a className="marca" href="#">
            Vilela Arantes &amp; Prado
          </a>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="abertura">
          <div>
            <p className="rotulo entra">Advocacia em São Paulo desde 1998</p>
            <h1 className="entra entra-2">
              O direito,
              <br />
              escrito <em>com clareza.</em>
            </h1>
            <p className="resumo entra entra-3">
              Assessoramos empresas e famílias em questões empresariais, civis, trabalhistas e
              tributárias, com orientação direta e linguagem que o cliente entende.
            </p>
            <a className="botao entra entra-4" href="#contato">
              Agendar uma conversa
            </a>
          </div>
          <svg
            className="selo"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Selo do escritório: Vilela Arantes e Prado Advogados, fundado em 1998"
          >
            <defs>
              <path id="circulo" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
            </defs>
            <circle className="anel" cx="100" cy="100" r="97" strokeWidth="2" />
            <circle className="anel" cx="100" cy="100" r="62" strokeWidth="1" />
            <text className="selo-legenda" fontSize="14.5" fontWeight="600" letterSpacing="2.6">
              <textPath href="#circulo">VILELA ARANTES &amp; PRADO · ADVOGADOS · 1998 ·</textPath>
            </text>
            <text className="selo-simbolo" x="100" y="124" textAnchor="middle" fontSize="72">
              §
            </text>
          </svg>
        </div>
      </header>

      <main id="conteudo">
        <section className="artigo" id="escritorio" aria-labelledby="t-escritorio">
          <p className="rotulo">Art. 1º</p>
          <div>
            <h2 id="t-escritorio">Porte médio, atenção integral.</h2>
            <div className="colunas">
              <p>
                Fundado em 1998 por três colegas de faculdade, o escritório cresceu sem perder o
                hábito que o originou: quem atende o cliente é quem conhece o caso. Hoje somos 22
                profissionais, entre advogados, paralegais e equipe de apoio.
              </p>
              <p>
                Acreditamos que um bom parecer cabe em poucas páginas e que uma boa orientação vem
                acompanhada dos riscos, dos custos e das alternativas. A decisão é sempre do
                cliente; nosso trabalho é permitir que ele a tome bem informado.
              </p>
            </div>
          </div>
        </section>

        <section className="artigo" id="areas" aria-labelledby="t-areas">
          <p className="rotulo">Art. 2º</p>
          <div>
            <h2 id="t-areas">Áreas de atuação</h2>
            <ol className="paragrafos">
              {areas.map((area, indice) => (
                <li key={area.titulo}>
                  <span className="num">§ {indice + 1}º</span>
                  <h3>{area.titulo}</h3>
                  <p>{area.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="artigo" id="socios" aria-labelledby="t-socios">
          <p className="rotulo">Art. 3º</p>
          <div>
            <h2 id="t-socios">Os sócios</h2>
            <div className="socios">
              {socios.map((socio) => (
                <article className="socio" key={socio.nome}>
                  <h3>{socio.nome}</h3>
                  <p className="oab">{socio.oab}</p>
                  <p>{socio.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="artigo fundo-escuro" id="metodo" aria-labelledby="t-metodo">
          <p className="rotulo">Art. 4º</p>
          <div>
            <h2 id="t-metodo">Como trabalhamos</h2>
            <ol className="incisos">
              {etapas.map((etapa) => (
                <li key={etapa.num}>
                  <span className="num">{etapa.num}</span>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="artigo contato" id="contato" aria-labelledby="t-contato">
          <p className="rotulo">Art. 5º</p>
          <div>
            <h2 id="t-contato">Fale com o escritório</h2>
            <div className="contato-grade">
              <dl className="dados">
                <dt className="rotulo">Endereço</dt>
                <dd>
                  Rua das Acácias, 1200, conj. 81
                  <br />
                  Bela Vista, São Paulo/SP
                  <br />
                  CEP 00000-000
                </dd>
                <dt className="rotulo">Telefone</dt>
                <dd>(11) 0000-0100</dd>
                <dt className="rotulo">E-mail</dt>
                <dd>
                  <a href="mailto:contato@vilelaarantes.example">contato@vilelaarantes.example</a>
                </dd>
                <dt className="rotulo">Horário</dt>
                <dd>Segunda a sexta, das 9h às 18h</dd>
              </dl>

              <ContactForm assuntos={areas.map((area) => area.titulo)} />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Vilela Arantes &amp; Prado Advogados · OAB/SP 00.000 · CNPJ 00.000.000/0001-00</p>
        <p>Site demonstrativo: escritório, pessoas e dados são fictícios.</p>
      </footer>
    </>
  );
}
