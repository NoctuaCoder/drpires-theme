# Dr. Pires - Tema WordPress para Psicologia Clínica

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![WordPress](https://img.shields.io/badge/WordPress-5.0+-green.svg)
![License](https://img.shields.io/badge/license-GPL--2.0-red.svg)

Tema WordPress elegante e profissional desenvolvido especialmente para psicólogos clínicos. Design minimalista com paleta de cores quentes e acolhedoras, ideal para profissionais de saúde mental.

## 🎨 Características

- **Design Elegante**: Paleta de cores quentes e acolhedoras (tons terrosos e dourados)
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Landing Page Profissional**: Template de página inicial otimizado para conversão
- **Blog Integrado**: Sistema de artigos com custom post type
- **Customizador WordPress**: Edite facilmente informações de contato, imagens e textos
- **Integração WhatsApp**: Botões de call-to-action conectados ao WhatsApp
- **SEO Friendly**: Código otimizado para mecanismos de busca
- **Performance**: Código limpo e otimizado para carregamento rápido

## 📋 Requisitos

- WordPress 5.0 ou superior
- PHP 7.4 ou superior
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🚀 Instalação

### Método 1: Via Admin do WordPress (Recomendado)

1. Baixe o tema como arquivo ZIP do GitHub
2. No painel do WordPress, vá em **Aparência → Temas → Adicionar Novo**
3. Clique em **Enviar Tema**
4. Selecione o arquivo ZIP baixado
5. Clique em **Instalar Agora**
6. Após a instalação, clique em **Ativar**

### Método 2: Via FTP

1. Baixe e extraia o arquivo ZIP do tema
2. Conecte-se ao seu servidor via FTP
3. Navegue até `/wp-content/themes/`
4. Faça upload da pasta `drpires-theme`
5. No painel do WordPress, vá em **Aparência → Temas**
6. Ative o tema "Dr. Pires - Psicologia Clínica"

## ⚙️ Configuração

### 1. Configurar Informações de Contato

Vá em **Aparência → Personalizar → Informações de Contato** e configure:

- **Número do WhatsApp**: Formato `5511999999999` (código do país + DDD + número)
- **E-mail de Contato**: Seu e-mail profissional
- **Número do CRP**: Seu registro no Conselho Regional de Psicologia
- **Endereço**: Endereço do consultório

### 2. Configurar a Página Inicial

1. Crie uma nova página chamada "Início" ou "Home"
2. Vá em **Configurações → Leitura**
3. Selecione "Uma página estática" em **Sua página inicial exibe**
4. Escolha a página criada como **Página inicial**

### 3. Adicionar Artigos ao Blog

1. No painel do WordPress, vá em **Artigos → Adicionar Novo**
2. Crie seus artigos sobre saúde mental
3. Adicione uma imagem destacada para cada artigo
4. Os 3 artigos mais recentes aparecerão automaticamente na página inicial

### 4. Configurar Menus

1. Vá em **Aparência → Menus**
2. Crie um novo menu
3. Adicione as páginas desejadas
4. Atribua o menu à localização **Primary Menu** (menu principal)

### 5. Personalizar Imagens da Landing Page

No **Personalizador do WordPress**, você pode adicionar configurações personalizadas para:
- Imagem do Hero (seção principal)
- Imagem da seção de Métodos
- Depoimentos de pacientes

## 📁 Estrutura de Arquivos

```
drpires-theme/
├── style.css           # Estilos principais + cabeçalho do tema
├── functions.php       # Funções e configurações do tema
├── header.php          # Cabeçalho do site
├── footer.php          # Rodapé do site
├── front-page.php      # Template da landing page
├── index.php           # Template principal (lista de posts)
├── page.php            # Template para páginas
├── single.php          # Template para posts individuais
├── screenshot.png      # Screenshot do tema (1200x900px)
└── README.md           # Este arquivo
```

## 🎯 Custom Post Types

### Artigos

O tema inclui um custom post type chamado **Artigos** para gerenciar o conteúdo do blog:

- **Slug**: `artigos`
- **Taxonomia**: `categoria_artigo`
- **Suporte**: Título, Editor, Resumo, Imagem Destacada
- **Gutenberg**: Habilitado

## 🎨 Paleta de Cores

```css
--primary-color: #4a3f35;      /* Marrom escuro - Textos e títulos */
--secondary-color: #8c7b6c;    /* Tom terroso */
--accent-color: #d3c2a9;       /* Dourado suave - Botões */
--accent-hover: #c4b095;       /* Dourado hover */
--background-light: #fcfaf8;   /* Off-white quente */
--background-alt: #f4f1ed;     /* Cinza quente */
```

## 🔧 Customização Avançada

### Modificar Estilos

Edite o arquivo `style.css` para personalizar:
- Cores (variáveis CSS no `:root`)
- Tipografia
- Espaçamentos
- Layouts

### Adicionar Funcionalidades

Edite o arquivo `functions.php` para:
- Registrar novos custom post types
- Adicionar widget areas
- Criar shortcodes personalizados
- Integrar plugins

## 📱 Responsividade

O tema é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px

## 🔒 Segurança

- Sanitização de dados do usuário
- Escape de output
- Proteção contra acesso direto a arquivos
- Seguindo WordPress Coding Standards

## 📄 Licença

Este tema é licenciado sob a [GNU General Public License v2.0](http://www.gnu.org/licenses/gpl-2.0.html).

## 👨‍💻 Desenvolvedor

**NoctuaCoder**
- GitHub: [@NoctuaCoder](https://github.com/NoctuaCoder)
- Repositório: [drpires-theme](https://github.com/NoctuaCoder/drpires-theme)

## 🆘 Suporte

Para reportar bugs ou solicitar recursos:
1. Abra uma [issue no GitHub](https://github.com/NoctuaCoder/drpires-theme/issues)
2. Descreva o problema detalhadamente
3. Inclua screenshots se possível

## 📝 Changelog

### Versão 1.0.0 (2025-11-27)
- Lançamento inicial
- Landing page profissional para psicólogos
- Custom post type para artigos
- Integração com WhatsApp
- Customizador para informações de contato
- Design responsivo e elegante

---

**Desenvolvido com ❤️ para profissionais de saúde mental**
