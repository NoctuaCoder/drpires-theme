# 🚀 Como Fazer Upload do Tema para o GitHub

O tema WordPress **Dr. Pires** está pronto e commitado localmente! Agora você precisa criar o repositório no GitHub e fazer o upload.

## Passo a Passo

### 1. Criar o Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito e selecione **"New repository"**
3. Configure o repositório:
   - **Repository name**: `drpires-theme`
   - **Description**: `Tema WordPress elegante para psicólogos clínicos`
   - **Visibility**: Public ou Private (sua escolha)
   - **NÃO** marque "Initialize this repository with a README" (já temos um README local)
4. Clique em **"Create repository"**

### 2. Fazer Upload do Tema

Após criar o repositório, execute os seguintes comandos no terminal:

```bash
cd /home/alana/.gemini/antigravity/scratch/drpires-theme
git push -u origin main
```

Se você tiver problemas de autenticação, pode ser necessário configurar suas credenciais do GitHub:

```bash
# Configurar nome e email (se ainda não configurou)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"

# Usar token de acesso pessoal (se necessário)
# Crie um token em: https://github.com/settings/tokens
```

### 3. Verificar o Upload

Após o push bem-sucedido, acesse:
```
https://github.com/NoctuaCoder/drpires-theme
```

Você deverá ver todos os arquivos do tema no repositório!

## 📦 Arquivos Incluídos no Tema

- ✅ `style.css` - Estilos principais + cabeçalho WordPress
- ✅ `functions.php` - Configurações e funcionalidades do tema
- ✅ `header.php` - Cabeçalho do site
- ✅ `footer.php` - Rodapé do site
- ✅ `front-page.php` - Template da landing page
- ✅ `index.php` - Template principal
- ✅ `page.php` - Template para páginas
- ✅ `single.php` - Template para posts individuais
- ✅ `screenshot.png` - Screenshot do tema (1200x900px)
- ✅ `README.md` - Documentação completa
- ✅ `.gitignore` - Arquivos ignorados pelo Git

## 🎯 Próximos Passos Após Upload

### Instalar o Tema no WordPress

1. **Baixar do GitHub**:
   - Vá para `https://github.com/NoctuaCoder/drpires-theme`
   - Clique em **Code → Download ZIP**

2. **Instalar no WordPress**:
   - Acesse o painel do WordPress
   - Vá em **Aparência → Temas → Adicionar Novo**
   - Clique em **Enviar Tema**
   - Selecione o arquivo ZIP baixado
   - Clique em **Instalar Agora** e depois **Ativar**

3. **Configurar o Tema**:
   - Vá em **Aparência → Personalizar → Informações de Contato**
   - Configure: WhatsApp, E-mail, CRP, Endereço
   - Crie uma página "Início" e defina como página inicial em **Configurações → Leitura**

### Adicionar Conteúdo

1. **Criar Artigos**:
   - Vá em **Artigos → Adicionar Novo**
   - Crie artigos sobre saúde mental
   - Adicione imagens destacadas
   - Os 3 mais recentes aparecerão na página inicial

2. **Configurar Menus**:
   - Vá em **Aparência → Menus**
   - Crie um menu e atribua à localização "Primary Menu"

## 📁 Localização do Tema

O tema está localizado em:
```
/home/alana/.gemini/antigravity/scratch/drpires-theme/
```

## ✨ Recursos do Tema

- ✅ Design elegante com paleta de cores quentes
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Landing page otimizada para conversão
- ✅ Custom post type para artigos de blog
- ✅ Integração com WhatsApp
- ✅ Customizador WordPress para fácil edição
- ✅ SEO friendly
- ✅ Performance otimizada

---

**Desenvolvido com ❤️ por NoctuaCoder**
