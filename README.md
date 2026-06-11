# Descubra Jovem (Aplicativo Mobile)

Este é o aplicativo mobile do **Programa Descubra**, voltado para os jovens participantes do programa. O objetivo do app é facilitar a comunicação com os assistentes sociais, permitir que o jovem mantenha seu cadastro socioeconômico atualizado e visualize vagas de emprego e cursos recomendados especificamente para o seu perfil.

O aplicativo se conecta ao mesmo banco de dados da plataforma administrativa, permitindo um acompanhamento em tempo real pelas equipes técnicas.

## 👥 Realização, Parcerias e Equipe

Este projeto foi idealizado e construído como solução para o desafio do **Programa Descubra**, contando com o apoio e colaboração das seguintes instituições:

* **Ministério Público do Estado de Minas Gerais (MPMG)**
* **SEBRAE**
* **Instituto Federal do Norte de Minas Gerais (IFNMG) - Campus Pirapora**
* **Programa Descubra** (Programa de Incentivo à Aprendizagem de Minas Gerais)

### 🚀 Equipe de Desenvolvimento
* **Kauan Gabriel** - [Seu Cargo/Papel no grupo, ex: Desenvolvedor Full Stack]
* [Nome do Integrante 2] - [Papel no grupo]
* [Nome do Integrante 3] - [Papel no grupo]

---

## 🚀 Principais Funcionalidades

* **Cadastro Socioeconômico:** Formulário interativo para o jovem preencher e atualizar suas informações de escolaridade, dados familiares, moradia e renda.
* **Vagas e Cursos Recomendados:** Visualização direta das oportunidades de trabalho e cursos de capacitação recomendados para o perfil do jovem após o matching realizado no painel técnico.
* **Acompanhamento de Processos:** Tela para o jovem verificar o status das suas candidaturas e encaminhamentos.
* **Canal de Comunicação:** Canal direto para dúvidas ou solicitações com a equipe técnica do Programa Descubra.

## 🛠️ Tecnologias Utilizadas

* **Framework Mobile:** React Native / Expo (com Expo Router para navegação baseada em arquivos)
* **Linguagem:** TypeScript
* **Banco de Dados & Auth:** Supabase Client SDK
* **Estilização:** NativeWind / Tailwind CSS ou estilos nativos

## 📦 Como Executar o Projeto

### Pré-requisitos
* Node.js (v18 ou superior)
* Expo Go instalado no celular (Android ou iOS) para testes rápidos ou emulador configurado.

### Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/KauanGDSR/Web_Descubra_app_jovem.git
   cd Web_Descubra_app_jovem
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente. Você pode criar um arquivo `.env` ou configurar no `app.json` / `expo-env.d.ts` dependendo do seu setup de variáveis de ambiente do Expo (por exemplo, usando `EXPO_PUBLIC_`):
   ```env
   EXPO_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   EXPO_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

4. Inicie o Expo:
   ```bash
   npx expo start
   ```

5. Leia o QR Code exibido no terminal/navegador usando o aplicativo Expo Go no seu celular, ou pressione `a` para abrir no emulador Android ou `i` para o simulador iOS.

---

## 🔒 Direitos Autorais e Licença

Este projeto foi desenvolvido como parte de um portfólio pessoal e trabalho em equipe acadêmico/hackathon. O código-fonte está disponível publicamente apenas para fins de demonstração técnica e avaliação de habilidades.

**Não é permitida a redistribuição, cópia integral ou uso comercial deste código sem autorização prévia.**
