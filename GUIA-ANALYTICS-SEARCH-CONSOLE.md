# Google Analytics + Search Console — Guia de Configuração

O código já está feito. Só precisas de ir buscar os IDs e colá-los em dois sítios: no `.env` local e nas variáveis de ambiente do Vercel.

---

## Parte 1 — Google Analytics 4

### 1.1 Criar a propriedade GA4

1. Vai a [analytics.google.com](https://analytics.google.com)
2. Clica em **Administrador** (ícone de engrenagem, canto inferior esquerdo)
3. Na coluna "Conta", clica em **Criar conta** (ou usa uma conta existente)
4. Na coluna "Propriedade", clica em **Criar propriedade**
5. Dá o nome `WAC Podcast`, fuso horário `Lisboa`, moeda `EUR`
6. Escolhe **Web** como plataforma
7. Coloca `https://thewacpodcast.com` como URL e dá o nome que quiseres ao stream
8. Clica em **Criar stream**

### 1.2 Copiar o Measurement ID

Depois de criado, vês uma janela com o **Measurement ID** — tem sempre este formato:

```
G-XXXXXXXXXX
```

Copia esse valor.

### 1.3 Colar o ID

**No `.env` local** (para testar em desenvolvimento):
```
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

**No Vercel** (para produção — obrigatório):
1. Vai a [vercel.com](https://vercel.com) → abre o projecto WAC
2. **Settings** → **Environment Variables**
3. Adiciona:
   - **Key:** `PUBLIC_GA4_ID`
   - **Value:** `G-XXXXXXXXXX`
   - Marca os ambientes: **Production**, **Preview**, **Development**
4. Clica em **Save**
5. Faz um novo deploy (ou o próximo deploy automático já vai usar a variável)

---

## Parte 2 — Google Search Console

### 2.1 Adicionar a propriedade

1. Vai a [search.google.com/search-console](https://search.google.com/search-console)
2. Clica em **Adicionar propriedade**
3. Escolhe **Prefixo de URL** e escreve `https://thewacpodcast.com`
4. Clica em **Continuar**

### 2.2 Verificar a propriedade

O Google oferece vários métodos. O mais simples para este site:

1. Escolhe a tab **Tag HTML**
2. Vês algo assim:
   ```html
   <meta name="google-site-verification" content="AbCdEfGhIjKlMn123456789" />
   ```
3. **Copia apenas o valor do `content=`**, ou seja, a parte `AbCdEfGhIjKlMn123456789`

### 2.3 Colar o código de verificação

**No `.env` local:**
```
PUBLIC_GSC_VERIFICATION=AbCdEfGhIjKlMn123456789
```

**No Vercel:**
1. **Settings** → **Environment Variables**
2. Adiciona:
   - **Key:** `PUBLIC_GSC_VERIFICATION`
   - **Value:** `AbCdEfGhIjKlMn123456789`
   - Ambientes: **Production** (é o único que importa para verificação)
3. **Save** → faz deploy

### 2.4 Confirmar a verificação no Search Console

1. Depois do deploy estar feito, volta ao Search Console
2. Na janela de verificação da tag HTML, clica em **Verificar**
3. Se o deploy já estiver activo, a verificação passa em segundos

---

## Parte 3 — Submeter o Sitemap

O sitemap já é gerado automaticamente pelo site. Depois de verificares a propriedade:

1. No Search Console, no menu lateral vai a **Sitemaps**
2. Em "Adicionar um novo sitemap", escreve:
   ```
   sitemap-index.xml
   ```
3. Clica em **Enviar**

O Google começa a rastrear as páginas nas horas/dias seguintes.

---

## Parte 4 — Confirmar que as páginas estão indexadas

### Verificação rápida (a qualquer altura)

Faz esta pesquisa no Google:
```
site:thewacpodcast.com
```

Isto mostra todas as páginas indexadas. No início pode não aparecer nada — é normal, o Google demora alguns dias.

### Verificação detalhada no Search Console

- **Cobertura** (menu lateral) → mostra páginas indexadas, excluídas e com erros
- **Inspecção de URL** → cola um URL específico para ver se está indexado e, se não estiver, pedires indexação manual
- **Sitemaps** → confirmas que o sitemap foi processado e quantas URLs foram descobertas

### O que é normal esperar

| Timeline | O que acontece |
|----------|---------------|
| 0–24h depois do deploy | Google começa a rastrear |
| 1–7 dias | Primeiras páginas aparecem indexadas |
| 2–4 semanas | Cobertura estabiliza |

Se ao fim de 2 semanas houver páginas importantes não indexadas, usa a **Inspecção de URL** no Search Console e clica em "Solicitar indexação" para cada uma.

---

## Resumo dos valores a configurar

| Variável | Onde ir buscar | Exemplo |
|----------|---------------|---------|
| `PUBLIC_GA4_ID` | Google Analytics → Administrador → Streams de dados | `G-A1B2C3D4E5` |
| `PUBLIC_GSC_VERIFICATION` | Search Console → Verificação → Tag HTML → valor do `content=` | `AbCdEfGhIjKlMn` |

Ambas têm de estar no Vercel (Environment Variables) para funcionar em produção.
