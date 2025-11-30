# 🔌 Plugins para Sincronizar WordPress com GitHub

## Opções Disponíveis

### 1. **WP Pusher** ⭐ (Recomendado)
**URL**: https://wppusher.com/

**Vantagens**:
- ✅ Deploy automático de temas e plugins do GitHub
- ✅ Atualização automática quando você faz push
- ✅ Suporta repositórios privados
- ✅ Interface simples no WordPress admin
- ✅ Muito popular e bem mantido

**Como usar**:
1. Instale o plugin WP Pusher no WordPress
2. Vá em **WP Pusher → GitHub** e conecte sua conta
3. Vá em **WP Pusher → Install Theme**
4. Cole a URL: `NoctuaCoder/drpires-theme`
5. Clique em **Install Theme**
6. Sempre que você fizer `git push`, o tema será atualizado automaticamente!

**Preço**: Gratuito para repositórios públicos, pago para privados

---

### 2. **Git Updater** (Gratuito e Open Source)
**URL**: https://git-updater.com/

**Vantagens**:
- ✅ Totalmente gratuito
- ✅ Suporta GitHub, GitLab, Bitbucket
- ✅ Funciona com repositórios públicos e privados
- ✅ Open source e bem mantido
- ✅ Sem limitações

**Como usar**:
1. Baixe o plugin: https://github.com/afragen/git-updater/releases
2. Instale via **Plugins → Adicionar Novo → Enviar Plugin**
3. Ative o plugin
4. Vá em **Configurações → Git Updater**
5. Configure o repositório: `https://github.com/NoctuaCoder/drpires-theme`
6. O tema aparecerá nas atualizações do WordPress!

---

### 3. **GitHub Updater**
**URL**: https://github.com/afragen/github-updater

**Vantagens**:
- ✅ Específico para GitHub
- ✅ Leve e simples
- ✅ Gratuito
- ✅ Atualização automática

**Como usar**:
1. Baixe: https://github.com/afragen/github-updater/releases
2. Instale e ative
3. Configure o repositório do tema
4. Pronto!

---

### 4. **Solução Integrada** (Sem Plugin) ✨

**Já incluído no tema!** Adicionei um sistema de atualização automática que busca releases do GitHub.

**Arquivo**: `updater.php`

**Como funciona**:
1. Você cria uma **release** no GitHub (ex: v1.0.1)
2. O WordPress verifica automaticamente se há novas versões
3. Aparece notificação de atualização em **Aparência → Temas**
4. Você clica em "Atualizar" e pronto!

**Para criar uma release no GitHub**:
```bash
# Após fazer suas alterações
git add .
git commit -m "Descrição das mudanças"
git tag v1.0.1
git push origin main --tags
```

Depois no GitHub:
1. Vá em **Releases → Create a new release**
2. Escolha a tag `v1.0.1`
3. Adicione descrição das mudanças
4. Clique em **Publish release**

---

## 📊 Comparação Rápida

| Plugin | Gratuito | Auto-Update | Privado | Facilidade |
|--------|----------|-------------|---------|------------|
| **WP Pusher** | Parcial | ✅ | Pago | ⭐⭐⭐⭐⭐ |
| **Git Updater** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐ |
| **GitHub Updater** | ✅ | ✅ | ✅ | ⭐⭐⭐ |
| **Updater.php** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐ |

---

## 🎯 Minha Recomendação

### Para Repositório Público:
**Use o updater.php integrado** (já incluído no tema) + criar releases no GitHub

**Vantagens**:
- Sem dependência de plugins externos
- Totalmente gratuito
- Controle total sobre as versões
- Mais leve e rápido

### Para Repositório Privado:
**Use Git Updater** (gratuito e open source)

**Vantagens**:
- Funciona com repos privados
- Gratuito
- Muito confiável

---

## 🚀 Como Usar o Updater Integrado

### 1. Fazer Alterações no Tema
```bash
cd /home/alana/.gemini/antigravity/scratch/drpires-theme
# Edite os arquivos que quiser
git add .
git commit -m "Melhorias no design"
```

### 2. Criar Nova Versão
```bash
# Atualizar versão no style.css (linha 10)
# De: Version: 1.0.0
# Para: Version: 1.0.1

git add style.css
git commit -m "Bump version to 1.0.1"
git tag v1.0.1
git push origin main --tags
```

### 3. Criar Release no GitHub
1. Acesse: https://github.com/NoctuaCoder/drpires-theme/releases/new
2. Tag: `v1.0.1`
3. Título: `Versão 1.0.1`
4. Descrição: Liste as mudanças
5. Clique em **Publish release**

### 4. No WordPress
1. Vá em **Painel → Atualizações**
2. O tema aparecerá na lista de atualizações disponíveis
3. Clique em **Atualizar Agora**
4. Pronto! ✨

---

## 📝 Notas Importantes

- O `updater.php` já está incluído e ativo no tema
- Funciona automaticamente, sem configuração adicional
- Verifica atualizações a cada 12 horas
- Usa a API pública do GitHub (sem autenticação necessária)
- Para repos privados, você precisaria adicionar um token de acesso

---

**Desenvolvido com ❤️ por NoctuaCoder**
