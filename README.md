# Landing Page - Bruna Sambati

Landing page profissional para psicóloga especializada em Análise do Comportamento.

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- pnpm (recomendado) ou npm

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/psicologa-landing-page.git
cd psicologa-landing-page
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 📦 Build para Produção

Para gerar o build otimizado:

```bash
pnpm build
# ou
npm run build
```

## 🌐 Deploy no GitHub Pages

### Opção 1: Usando GitHub Actions (Recomendado)

1. Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Faça push para a branch `main`
3. O GitHub Actions fará o build e deploy automaticamente

### Opção 2: Deploy Manual

1. Faça o build:
```bash
pnpm build
```

2. O conteúdo estará em `dist/`

3. Suba o conteúdo de `dist/` para a branch `gh-pages` do seu repositório

4. Nas configurações do repositório, configure GitHub Pages para usar a branch `gh-pages`

## 📁 Estrutura do Projeto

```
client/
  public/
    images/          # Imagens estáticas
  src/
    pages/          # Componentes de página
    components/     # Componentes reutilizáveis
    index.css       # Estilos globais
    App.tsx         # Roteamento
    main.tsx        # Entrada React
package.json
README.md
```

## 🎨 Personalizações

### Alterar Informações da Psicóloga

Edite `client/src/pages/Home.tsx`:
- Nome
- CRP
- Contatos
- Descrição
- Foto (em `client/public/images/`)

### Alterar Cores

Edite `client/src/index.css` - seção `:root`:
- `--primary`: Cor primária (acentos)
- `--background`: Cor de fundo
- `--foreground`: Cor de texto

### Alterar Fontes

Edite `client/index.html` - seção de Google Fonts

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## ✅ Checklist antes do Deploy

- [ ] Foto profissional adicionada
- [ ] Informações de contato atualizadas
- [ ] CRP verificado
- [ ] Links de agendamento funcionando
- [ ] Teste em mobile
- [ ] Teste em diferentes navegadores

## 📞 Contato

Para dúvidas ou sugestões, entre em contato com Bruna Sambati:
- Email: sambatibruna@gmail.com
- Telefone: (43) 99661-6184

## 📄 Licença

Este projeto é propriedade de Bruna Sambati.
