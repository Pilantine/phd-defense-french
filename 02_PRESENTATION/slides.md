---
theme: seriph
colorSchema: dark
title: On the E_diamond exact structure
author: Sunny Roy
transition: slide-left
mdc: true
katex:
  macros:
    "\\rep": "\\operatorname{rep}"
    "\\Cat": "\\operatorname{Cat}"
    "\\Int": "\\operatorname{Int}"
    "\\GenJF": "\\operatorname{GenJF}"
    "\\GenRep": "\\operatorname{GenRep}"
    "\\JF": "\\operatorname{JF}"
    "\\add": "\\operatorname{add}"
    "\\Ker": "\\operatorname{Ker}"
    "\\Coker": "\\operatorname{Coker}"
    "\\Hom": "\\operatorname{Hom}"
    "\\Id": "\\operatorname{Id}"
    "\\ind": "\\operatorname{ind}"
    "\\NEnd": "\\operatorname{NEnd}"
    "\\End": "\\operatorname{End}"
    "\\Ext": "\\operatorname{Ext}"
    "\\supp": "\\operatorname{supp}"
    "\\Tilt": "\\operatorname{Tilt}"
    "\\Gen": "\\operatorname{Gen}"
    "\\Sub": "\\operatorname{Sub}"
    "\\GS": "\\operatorname{GS}"
    "\\SG": "\\operatorname{SG}"
    "\\Ind": "\\operatorname{Ind}"
    "\\Supp": "\\operatorname{Supp}"
    "\\GL": "\\operatorname{GL}"
    "\\pdim": "\\operatorname{pdim}"
    "\\proj": "\\operatorname{proj}"
    "\\inj": "\\operatorname{inj}"
    "\\Rad": "\\operatorname{Rad}"
    "\\AR": "\\operatorname{AR}"
    "\\Mult": "\\operatorname{Mult}"
    "\\Mat": "\\operatorname{Mat}"
    "\\llrr": "\\llbracket #1 \\rrbracket"
---

# Sur la structure exacte diamant <br/> $\mathcal{E}_\diamond$

<div style="font-size:1.1rem; margin-top:1.5rem; opacity:0.85">Sunny Roy</div>
<div style="margin-top:0.4rem; opacity:0.55; font-style:italic">
  Département de mathématiques, Université de Sherbrooke
</div>

<div style="margin-top:1.5rem; opacity:0.7; font-size:0.9rem">
  Soutenance de thèse — Université de Sherbrooke<br/>
  19 mai 2026
</div>


---

# Plan

<v-clicks>

1. **Motivation** &nbsp;: Modules presque rigides maximaux et retrouvabilité canonique de Jordan

2. **La structure exacte diamant** $\mathcal{E}_\diamond$

3. **Modules presque rigides et modules inclinants relatifs** &nbsp;<span style="color:white; opacity:0.55; font-size:0.85em">\[Brüstle–Hanson–R.–Schiffler, 2024\]</span>

4. **L'opérateur $\mathrm{GS}_\mathcal{E}$ et ses propriétés** &nbsp;*(Premier théorème principal)* &nbsp;<span style="color:white; opacity:0.55; font-size:0.85em">\[Dequêne–R., 2025\]</span>

5. **Mutations relatives et équivalence de module inclinant** &nbsp;*(Deuxième théorème principal)* &nbsp;<span style="color:white; opacity:0.55; font-size:0.85em">\[Dequêne–R., 2025\]</span>

6. **Nouveaux résultats** &nbsp;<span style="color:white; opacity:0.55; font-size:0.85em">\[R., 2026\]</span>

</v-clicks>

---

# Cadre

<v-clicks>

- $K$ est un corps algébriquement clos.

- $Q$ est un **carquois de Dynkin** sans relations.

- $\operatorname{rep}(Q)$ désigne la catégorie des $KQ$-modules à gauche de dimension finie.

- $\mathscr{A}$ désignera une **catégorie abélienne héréditaire avec suffisamment de projectifs**.

- Toutes les sous-catégories sont supposées **pleines**, closes par sommes directes finies et par facteurs directs.

</v-clicks>

---
layout: section
class: text-center
---

# I. Motivation

Modules presque rigides maximaux et retrouvabilité canonique de Jordan

---

# Modules presque rigides maximaux

Pour $Q$ de type $\mathbb{A}_n$, les représentations indécomposables de $\operatorname{rep}(Q)$ admettent une **réalisation géométrique** : chaque indécomposable correspond à une *diagonale orientée* ou une *arête orientée* d'un $(n+1)$-gone.

<v-clicks>

::div{class="callout-question mt-4"}
**Observation clé** &nbsp;— Sous cette réalisation, les *triangulations* du $(n+1)$-gone font naturellement ressortir une classe distinguée de modules.
::

<div class="mt-4" style="font-size:0.88rem; opacity:0.85">
<strong>Barnard–Gunawan–Meehan–Schiffler</strong> &#91;BGMS21&#93; ont introduit et étudié celles-ci comme représentations <em>presque rigides maximales (MAR)</em>.
</div>

</v-clicks>

---

# Modules presque rigides maximaux

::div{class="definition mt-2"}
**Définition** &nbsp;&#91;BGMS21&#93; &nbsp;Un module basique $M \in \operatorname{rep}(\mathbb{A}_n)$ est *presque rigide* si pour tout couple de facteurs directs indécomposables $X$, $Y$ de $M$, soit $\operatorname{Ext}^1(X, Y) = 0$, soit $\operatorname{Ext}^1(X, Y) \cong K$ est engendré par une suite exacte courte $0 \to Y \to E \to X \to 0$ avec $E$ indécomposable.
::

<v-clicks>

::div{class="definition mt-3"}
Il est *presque rigide maximal (MAR)* s'il est presque rigide et que l'ajout de tout facteur direct non nul brise la presque rigidité.
::

::div{class="theorem mt-4"}
**Théorème** &nbsp;&#91;BGMS21&#93; &nbsp;Pour $Q$ de type $\mathbb{A}_{n+2}$, il existe une bijection
$$\{\text{triangulations de } P(Q)\} \xrightarrow{\;\sim\;} \mathrm{mar}(Q).$$
En particulier, toute représentation MAR possède exactement $2n+3$ facteurs directs et $|\mathrm{mar}(Q)|$ est égal au nombre de Catalan $\dfrac{1}{n+2}\dbinom{2n+2}{n+1}$.
::

</v-clicks>

---

# Invariant de forme de Jordan

<div>En théorie des représentations, on cherche souvent des <strong>invariants</strong> qui classifient les objets à isomorphisme près.</div>

<v-clicks>

<div class="mt-3">
La <strong>forme de Jordan</strong> est l'un des invariants les plus simples et les plus classiques attachés aux endomorphismes. Elle encode des informations structurelles essentielles.
</div>

<div class="callout-question mt-4">
  <strong>Question</strong> &nbsp;— Peut-on retrouver une représentation à partir des formes de Jordan de ses endomorphismes nilpotents ?
</div>

<div class="mt-4" style="font-size:0.88rem; opacity:0.85">
Dans des travaux récents, <strong>Garver–Patrias–Thomas</strong> (2018–2022) ont introduit et développé les notions de <em>retrouvabilité de Jordan (JR)</em> et de <em>retrouvabilité canonique de Jordan (CJR)</em>. Ces idées ont ensuite été approfondies par <strong>Dequêne</strong> (2022–2024).
</div>

</v-clicks>

---

# Forme de Jordan pour les représentations

Soit $E = (E_q, E_\alpha) \in \operatorname{rep}(Q)$ et $N = (N_q)_{q \in Q_0} \in \operatorname{NEnd}(E)$. Chaque $N_q$ est un endomorphisme nilpotent de $E_q$.

<div class="definition mt-6" v-click>

**Définition**

La **forme de Jordan** de $N_q$ est la partition $\operatorname{JF}(N_q) \vdash \dim(E_q)$ enregistrant les tailles de ses blocs de Jordan. On définit le tuple

$$\operatorname{JF}(N) = \bigl(\operatorname{JF}(N_q)\bigr)_{q \in Q_0},$$

qui décrit la structure en blocs de $N$ à chaque sommet.

</div>

---

# L'invariant de forme de Jordan générique

Fixons $E \in \operatorname{rep}(Q)$. Pour $N = (N_q)_{q \in Q_0} \in \operatorname{NEnd}(E)$, on pose $\operatorname{JF}(N) = (\operatorname{JF}(N_q))_{q \in Q_0}$.

<div class="definition mt-5" v-click>

**Définition \[GPT23\]**

La **forme de Jordan générique** de $E$ est la valeur maximale par rapport à l'ordre de dominance :

$$\operatorname{GenJF}(E) \;=\; \max_{N \,\in\, \operatorname{NEnd}(E)} \operatorname{JF}(N).$$

</div>

<div class="callout-question mt-5" v-click>

**Question** &nbsp;— Cet invariant est-il complet ?

</div>

---

# Retrouvabilité de Jordan

<div class="definition mt-2">

**Définition \[GPT23\]**

Soit $\mathscr{C} \subseteq \operatorname{rep}(Q)$ une sous-catégorie pleine. On dit que $\mathscr{C}$ est **retrouvable de Jordan (JR)** si

$$E \simeq F \;\iff\; \operatorname{GenJF}(E) = \operatorname{GenJF}(F) \qquad \text{pour tout } E, F \in \mathscr{C}.$$

</div>

<div class="remark mt-5" v-click>

**Remarque**

La forme de Jordan générique $\operatorname{GenJF}$ est un **invariant complet** sur $\mathscr{C}$.

</div>

---

# Retrouvabilité canonique de Jordan (CJR)

<div class="definition">

**Définition \[GPT23\]**

Soit $\mathscr{C} \subseteq \operatorname{rep}(Q)$. On dit que $\mathscr{C}$ est **canoniquement retrouvable de Jordan (CJR)** si pour tout $X \in \mathscr{C}$ il existe un ouvert dense (Zariski) $\Omega \subseteq \operatorname{rep}_K\bigl(\operatorname{GenJF}(X)\bigr)$ tel que pour tout $Y \in \Omega$, $Y \simeq X$.

</div>

<div class="definition mt-5" v-click>

**Sous-catégorie CJR maximale**

Une sous-catégorie CJR $\mathscr{C}$ est **maximale** si elle n'est pas proprement contenue dans une plus grande sous-catégorie CJR de $\operatorname{rep}(Q)$ :

$$\forall\, \mathscr{D} \supsetneq \mathscr{C}, \quad \mathscr{D} \text{ n'est pas CJR.}$$

</div>

---
layout: two-cols
---

# Exemple sur $A_2$ : JR mais pas CJR

Supposons $Q : 1 \to 2$ et posons $\mathscr{C} = \operatorname{add}(S_1, S_2)$.

<v-clicks>

Tout $E \in \mathscr{C}$ est de la forme $\;E = K^a \xrightarrow{\;0\;} K^b$.

**Forme de Jordan générique :** $\;\operatorname{GenJF}(E) = \bigl((a),\,(b)\bigr).$

Donc $\mathscr{C}$ est **JR**.

</v-clicks>

::right::

<div class="mt-16" v-click>

**Mais $\mathscr{C}$ n'est pas CJR.**

Considérons $S_1 \oplus S_2 \cong K \xrightarrow{0} K$. Tout ouvert dense $U \subseteq \operatorname{rep}_K(Q,\,(1,1))$ contient $P_1 = K \xrightarrow{\lambda} K$ avec $\lambda \neq 0$.

$$\operatorname{GenJF}(S_1 \oplus S_2) = \bigl((1),(1)\bigr) = \operatorname{GenJF}(P_1)$$

mais $S_1 \oplus S_2 \not\simeq P_1$.

</div>

---

# Sous-catégories CJR maximales de type $A_n$

Soit $Q$ un carquois de type $A_n$.

<div class="proposition mt-4">

**Proposition**

Si $\mathscr{C} \subseteq \operatorname{rep}(Q)$ est une sous-catégorie canoniquement retrouvable de Jordan maximale, alors :

<v-clicks>

<em>(a)</em> $\mathscr{C}$ est close par extensions ;

<em>(b)</em> $\mathscr{C}$ contient toujours une représentation inclinante.

</v-clicks>

</div>

<div class="theorem mt-4" v-click>

**Théorème \[Deq23a\]**

Une sous-catégorie $\mathscr{C} \subseteq \operatorname{rep}(Q)$ est canoniquement retrouvable de Jordan si et seulement si toute suite exacte courte non scindée

$$0 \longrightarrow X \longrightarrow Y \longrightarrow Z \longrightarrow 0$$

avec $X, Z \in \mathscr{C}$ vérifie $Y \notin \operatorname{ind}\bigl(\operatorname{rep}(Q)\bigr)$.

</div>

---

# MAR et CJR maximale

::div{class="definition mt-2"}
**Définition** &nbsp;&#91;BGMS21&#93; &nbsp;Un module basique $M \in \operatorname{rep}(A_n)$ est *presque rigide* si pour tout couple de facteurs directs indécomposables $X$, $Y$ de $M$, soit $\operatorname{Ext}^1(X, Y) = 0$, soit $\operatorname{Ext}^1(X, Y) \cong K$ est engendré par une suite exacte courte $0 \to Y \to E \to X \to 0$ avec $E$ indécomposable. Il est *presque rigide maximal (MAR)* si l'ajout de tout facteur direct non nul brise la presque rigidité.
::

<v-clicks>

::div{class="theorem mt-4"}
**Théorème** &nbsp;&#91;Deq23a&#93; &nbsp;Une sous-catégorie $\mathscr{C} \subseteq \operatorname{rep}(A_n)$ est <span style="color:#63b3ed">canoniquement retrouvable de Jordan</span> si et seulement si toute suite exacte courte non scindée
$$0 \longrightarrow X \longrightarrow Y \longrightarrow Z \longrightarrow 0$$
avec $X, Z \in \mathscr{C}$ vérifie $Y \notin \operatorname{ind}\bigl(\operatorname{rep}(A_n)\bigr)$.
::

<div class="flex justify-center mt-4">
  <video :src="'/ediam_thinking.webm'" autoplay muted playsinline style="max-height:200px; border-radius:8px;" />
</div>

</v-clicks>

---
layout: section
class: text-center
---

# II. La structure exacte diamant

$\mathcal{E}_\diamond$

---

# Structures exactes

<div class="definition">

**Définition**

Une collection $\mathcal{E}$ de suites exactes courtes dans $\mathscr{A}$ est une **structure exacte** sur $\mathscr{A}$ lorsque $\mathcal{E}$ vérifie :

</div>

<v-clicks>

<div class="axiom mt-3">

<strong>(ES1)</strong> &nbsp; Toutes les suites exactes courtes scindées sont dans $\mathcal{E}$.

</div>

<div class="axiom">

<strong>(ES2)</strong> &nbsp; La collection des $\mathcal{E}$-monomorphismes et celle des $\mathcal{E}$-épimorphismes sont toutes deux closes par composition.

</div>

<div class="axiom">

<strong>(ES3)</strong> &nbsp; $\mathcal{E}$ est close par sommes amalgamées et produits fibrés le long de tout morphisme.

</div>

</v-clicks>

<div style="display:flex; justify-content:center; gap:3rem; margin-top:0.8rem;">
  <div v-click style="display:flex; flex-direction:column; align-items:center; gap:0.4rem;">
    <AnimatedSVG :src="'/es3_pushout.svg'" viewBox="22 180 146 43" />
    <span><strong>(ES3-I)</strong> Sommes amalgamées</span>

$\mathcal{E}$ est close par sommes amalgamées.

  </div>
  <div v-click style="display:flex; flex-direction:column; align-items:center; gap:0.4rem;">
    <AnimatedSVG :src="'/es3_pullback.svg'" viewBox="191 178 146 43" />
    <span><strong>(ES3-II)</strong> Produits fibrés</span>

$\mathcal{E}$ est close par produits fibrés.

  </div>
</div>

---

# Catégories exactes

<div class="definition">

**Définition**

Soit $\mathcal{E}$ une structure exacte sur $\mathscr{A}$. La paire $(\mathscr{A},\,\mathcal{E})$ est appelée une **catégorie exacte**.

</div>

<div class="mt-5" v-click><strong>Exemples de structures exactes</strong></div>

<v-clicks>

<div class="example">

$\mathcal{E}_{\max}$ &nbsp;— la <strong>structure exacte maximale</strong>, contenant toutes les suites exactes courtes.

</div>

<div class="example">

$\mathcal{E}_{\min}$ &nbsp;— la <strong>structure exacte minimale</strong>, contenant uniquement les suites exactes courtes scindées.

</div>

</v-clicks>

---

# Suites exactes courtes de type $A_n$

<div class="theorem mt-4">

**Théorème**

Soit $Q$ un carquois de type $A_n$. Pour une suite exacte non scindée

$$0 \longrightarrow D \longrightarrow E \longrightarrow F \longrightarrow 0, \qquad D, F \in \operatorname{ind}(\operatorname{rep}(Q)),$$

exactement l'un des cas suivants se produit :

</div>

<v-clicks>

<div class="mt-3 ml-6">

<em>(a)</em> $E \in \operatorname{ind}(\operatorname{rep}(Q))$,

</div>

<div class="ml-6">

<em>(b)</em> $E \cong E_1 \oplus E_2$ avec $E_1, E_2 \in \operatorname{ind}(\operatorname{rep}(Q))$.

</div>

<div class="mt-4">

Dans le cas (b), on l'appelle une <strong>suite exacte diamant</strong>.

</div>

</v-clicks>

---

# La structure exacte diamant $\mathcal{E}_\diamond$

<div class="definition mt-4">

**Définition**

Soit $Q$ un carquois de type $A_n$. On définit la collection de suites exactes courtes $\mathcal{E}_{\diamond}$ donnée par le bifoncteur additif $\mathcal{E}_\diamond(-,-)$, uniquement déterminé par

$$\mathcal{E}_\diamond(N,M) = \bigl\{\, \eta \in \operatorname{Ext}^1(N,M) \;\big|\; \eta \text{ est scindée ou une suite exacte diamant}\,\bigr\}$$

pour $M, N \in \operatorname{ind}(\operatorname{rep}(Q))$ indécomposables.

</div>

<div class="proposition mt-5" v-click>

**Proposition \[Brüstle–Hanson–R.–Schiffler, 2024\]**

Soit $n \in \mathbb{N}^*$ et $Q$ un carquois de type $A_n$. Alors $\mathcal{E}_{\diamond}$ est une structure exacte sur $\mathscr{A} = \operatorname{rep}(Q)$.

</div>

---
layout: section
class: text-center
---

# III. Modules presque rigides et modules inclinants relatifs

---

# Modules MAR via $\mathcal{E}_\diamond$

::div{class="definition mt-2"}
**Rappel** &nbsp;Un module basique $M \in \operatorname{rep}(A_n)$ est *presque rigide* si pour tout couple de facteurs directs indécomposables $X$, $Y$ de $M$, soit $\operatorname{Ext}^1(X, Y) = 0$, soit $\operatorname{Ext}^1(X, Y) \cong K$ est engendré par une suite exacte courte $0 \to Y \to E \to X \to 0$ avec $E$ indécomposable.
::

<v-clicks>

::div{class="definition mt-8"}
**Définition** &nbsp;&#91;BHRS24&#93; &nbsp;Un module basique $M \in \operatorname{rep}(A_n)$ est *presque rigide* s'il est $\mathcal{E}_\diamond$-rigide, c'est-à-dire $\mathcal{E}_\diamond(M, M) = 0$.
::

::div{class="remark mt-3"}
**Remarque** &nbsp;$M$ est *presque rigide maximal (MAR)* s'il est $\mathcal{E}_\diamond$-rigide et que l'ajout de tout facteur direct non nul brise la $\mathcal{E}_\diamond$-rigidité.
::

::div{class="callout-question mt-6"}
**Question** &nbsp;— Cette reformulation relative est-elle utile pour décrire les modules MAR ?
::

</v-clicks>

---

# Module inclinant classique et relatif

Soit $\mathscr{A}$ une catégorie abélienne avec suffisamment de projectifs.

<v-clicks>

::div{class="definition mt-4"}
**Définition** &nbsp;Un objet basique $T \in \mathscr{A}$ est *inclinant* si :

1. $\operatorname{pd}(T) \leq 1$

2. $T$ est rigide, c'est-à-dire $\operatorname{Ext}^1(T, T) = 0$

3. Pour tout $P \in \operatorname{proj}(\mathscr{A})$, il existe une suite exacte courte $0 \to P \to T_0 \to T_1 \to 0$ avec $T_0, T_1 \in \operatorname{add}(T)$.
::

::div{class="mt-6"}
Soit $(\mathscr{A}, \textcolor{#63b3ed}{\mathcal{E}})$ une catégorie exacte avec suffisamment de projectifs.
::

::div{class="definition mt-4"}
**Définition** &nbsp;Un objet basique $T \in \mathscr{A}$ est <span style="color:#63b3ed">*$\mathcal{E}$-inclinant*</span> si :

1. $\operatorname{pd}_{\textcolor{#63b3ed}{\mathcal{E}}}(T) \leq 1$

2. $T$ est $\textcolor{#63b3ed}{\mathcal{E}}$-rigide, c'est-à-dire $\textcolor{#63b3ed}{\mathcal{E}}(T, T) = 0$

3. Pour tout $P \in \operatorname{proj}_{\textcolor{#63b3ed}{\mathcal{E}}}(\mathscr{A})$, il existe une suite exacte courte $0 \to P \to T_0 \to T_1 \to 0\, \textcolor{#63b3ed}{\in \mathcal{E}}$ avec $T_0, T_1 \in \operatorname{add}(T)$.
::

</v-clicks>

---

# Exemple : $Q = 1 \to 2 \to 3 \leftarrow 4$

<div style="position:absolute; top:6.5rem; left:2rem; right:2rem; bottom:2rem;">
  <iframe src="https://ar-quiver-simulator.vercel.app" style="width:154%; height:154%; border:none; transform:scale(0.65); transform-origin:top left;" />
</div>

---

# Catégories 0-Auslander

Soit $(\operatorname{rep}(Q), \mathcal{E})$ une catégorie exacte avec suffisamment de projectifs.

::div{class="definition mt-4"}
**Définition** &nbsp;&#91;GNP23&#93; &nbsp;$(\operatorname{rep}(Q), \mathcal{E})$ est une **catégorie 0-Auslander** si :

<div v-click>

1. $\mathcal{E}\text{-gl.dim}(\operatorname{rep}(Q)) \leq 1$

</div>

<div v-click>

2. Pour tout $P \in \operatorname{proj}_\mathcal{E}(\operatorname{rep}(Q))$, il existe une suite exacte courte $0 \to P \to Q \to I \to 0 \in \mathcal{E}$ avec $Q \in \operatorname{proj}_\mathcal{E}(\operatorname{rep}(Q)) \cap \operatorname{inj}_\mathcal{E}(\operatorname{rep}(Q))$ et $I \in \operatorname{inj}_\mathcal{E}(\operatorname{rep}(Q))$. C'est-à-dire que la $\mathcal{E}$-dimension dominante de $\operatorname{rep}(Q)$ est au moins $1$.

</div>
::

<div v-click>

::div{class="theorem mt-5"}
**Théorème** &nbsp;&#91;GNP23&#93; &nbsp;Supposons que $(\operatorname{rep}(Q), \mathcal{E})$ est 0-Auslander. Les énoncés suivants sont équivalents pour $T \in \operatorname{rep}(Q)$ :

1. $T$ est $\mathcal{E}$-inclinant.

2. $T$ est maximal $\mathcal{E}$-rigide.
::

</div>

<div v-click>

::div{class="remark mt-4"}
**Remarque** &nbsp;Le nombre de facteurs directs indécomposables de $T$ est égal au nombre de $P \in \operatorname{proj}_\mathcal{E}(\operatorname{rep}(Q))$ indécomposables non isomorphes.
::

</div>

---

# MAR et module inclinant relatif

::div{class="proposition mt-4"}
**Proposition** &nbsp;&#91;BHRS24&#93; &nbsp;$(\operatorname{rep}(A_n), \mathcal{E}_\diamond)$ est une catégorie 0-Auslander.
::

<v-clicks>

::div{class="definition mt-4"}
**Rappel** &nbsp;Un module basique $M \in \operatorname{rep}(A_n)$ est *presque rigide* s'il est $\mathcal{E}_\diamond$-rigide, c'est-à-dire $\mathcal{E}_\diamond(M, M) = 0$. Il est *presque rigide maximal (MAR)* s'il est maximal $\mathcal{E}_\diamond$-rigide.
::

::div{class="theorem mt-10"}
**Théorème** &nbsp;&#91;BHRS24&#93; &nbsp;Un module basique $M \in \operatorname{rep}(A_n)$ est MAR si et seulement s'il est $\mathcal{E}_\diamond$-inclinant.
::

</v-clicks>

---
layout: section
class: text-center
---

# IV. L'opérateur $\mathrm{GS}_\mathcal{E}$ et ses propriétés

Premier théorème principal

---

# CJR via $\mathcal{E}_\diamond$

<v-clicks>

::div{class="theorem mt-2"}
**Rappel** &nbsp;&#91;Deq23a&#93; &nbsp;Une sous-catégorie $\mathscr{C} \subseteq \operatorname{rep}(A_n)$ est <span style="color:#63b3ed">canoniquement retrouvable de Jordan</span> si et seulement si toute suite exacte courte non scindée $0 \to X \to Y \to Z \to 0$ avec $X, Z \in \mathscr{C}$ vérifie $Y \notin \operatorname{ind}(\operatorname{rep}(A_n))$.
::

::div{class="definition mt-5"}
**Définition** &nbsp;Soit $(\mathscr{A}, \mathcal{E})$ une catégorie exacte.

Une sous-catégorie $\mathscr{C} \subseteq \mathscr{A}$ est **$\mathcal{E}$-adaptée** si pour tout $X, Y \in \mathscr{C}$, $\operatorname{Ext}^1(X, Y) \subseteq \mathcal{E}$.
::

::div{class="theorem mt-5"}
**Théorème** &nbsp;&#91;BR25&#93; &nbsp;Une sous-catégorie $\mathscr{C} \subseteq \operatorname{rep}(A_n)$ est <span style="color:#63b3ed">canoniquement retrouvable de Jordan</span> si et seulement si $\mathscr{C}$ est $\mathcal{E}_\diamond$-adaptée.
::

::div{class="remark mt-4"}
**Remarque** &nbsp;$\mathscr{C}$ est <span style="color:#63b3ed">maximalement canoniquement retrouvable de Jordan</span> si et seulement si toute sous-catégorie $\mathscr{D} \supset \mathscr{C}$ n'est pas $\mathcal{E}_\diamond$-adaptée.
::

</v-clicks>

---
clicks: 16
---

# L'intuition principale

::div{class="theorem mt-4"}
**Rappel** &nbsp;Supposons que $\mathscr{C} \subseteq \operatorname{rep}(A_n)$ est une sous-catégorie CJR maximale. Alors :

<div v-click>

a) $\mathscr{C}$ est maximalement $\mathcal{E}_\diamond$-adaptée.

</div>

<div v-click>

b) $\mathscr{C}$ est close par extensions.

</div>

<div v-click>

c) $\mathscr{C}$ contient un module inclinant $T$.

</div>
::

<div class="mt-6">
  <FloatingBalls :visible="Math.max(0, $clicks - 3)" :seq-visible="Math.max(0, $clicks - 8)" :sec-visible="Math.max(0, $clicks - 13)" :highlight="$clicks >= 16" />
</div>

::div{v-click="8" style="position:absolute; bottom:2rem; left:calc(8rem - 30px); font-style:italic; font-size:1rem; color:#fc8181; display:flex; align-items:center; height:34px;"}
$T_i \in \operatorname{add}(T)$
::

::div{style="position:absolute; bottom:2rem; left:calc(18rem - 30px); display:flex; align-items:center; height:34px; gap:6px; font-size:0.9rem;"}
<span :style="{ opacity: $clicks >= 13 ? 1 : 0, transition: 'opacity 0.6s ease' }">$0 \to$ <SeqCircles /> $\to 0$</span><span :style="{ opacity: $clicks >= 15 ? 0 : ($clicks >= 13 ? 1 : 0), transition: $clicks >= 15 ? 'none' : 'opacity 0.6s ease', pointerEvents: 'none', width: $clicks >= 15 ? '0' : 'auto', overflow: 'hidden', display: 'inline-block' }">$\ \in \mathcal{E}_\diamond$</span><span :style="{ opacity: $clicks >= 15 ? 1 : 0, transition: 'opacity 0.6s ease 0.05s', marginLeft: '-6px' }">$,\quad 0 \to$ <SeqCircles left="K'₂" mid="C₂" right="C'₂" left-color="#63b3ed" mid-color="#68d391" right-color="#63b3ed" /> $\to 0\,,\quad 0 \to$ <SeqCircles left="K'₄" mid="K₄" right="C'₄" left-color="#63b3ed" mid-color="#68d391" right-color="#63b3ed" /> $\to 0\ \in \mathcal{E}_\diamond$</span>
::

---

# Les opérateurs $\operatorname{Gen}_\mathcal{E}$ et $\operatorname{Sub}_\mathcal{E}$

Soit $(\mathscr{A}, \mathcal{E})$ une catégorie exacte.

<div class="definition mt-4">

**Définition**

Pour une sous-catégorie $\mathscr{C} \subseteq \mathscr{A}$, on définit :

<v-clicks>

<div class="mt-3">

<em>(a)</em> &nbsp; $\operatorname{Gen}_{\mathcal{E}}(\mathscr{C}) = \{ C \in \mathscr{A} \mid \exists\, g : Y \twoheadrightarrow C,\; Y \in \mathscr{C},\; g\ \mathcal{E}\text{-épi} \}$

</div>

<div class="mt-2">

<em>(b)</em> &nbsp; $\operatorname{Sub}_{\mathcal{E}}(\mathscr{C}) = \{ K \in \mathscr{A} \mid \exists\, f : K \rightarrowtail Y,\; Y \in \mathscr{C},\; f\ \mathcal{E}\text{-mono} \}$

</div>

</v-clicks>

</div>

<div class="mt-4 opacity-80" v-click>

Pour un objet $M \in \mathscr{A}$, on pose $\operatorname{Gen}_\mathcal{E}(M) = \operatorname{Gen}_\mathcal{E}(\operatorname{add}(M))$ et $\operatorname{Sub}_\mathcal{E}(M) = \operatorname{Sub}_\mathcal{E}(\operatorname{add}(M))$.

</div>

---

# La construction $\operatorname{GS}_\mathcal{E}$

<div class="definition mt-4">

**Définition**

Soit $\mathscr{C} \subseteq \mathscr{A}$ une sous-catégorie.

<v-clicks>

<div class="mt-3">

<em>(a)</em> &nbsp; On pose $\operatorname{GS}_{\mathcal{E}}^0(\mathscr{C}) = \mathscr{C}$.

</div>

<div class="mt-2">

<em>(b)</em> &nbsp; Pour $i \geq 1$, on définit

$$\operatorname{GS}_\mathcal{E}^i(\mathscr{C}) = \operatorname{add}\!\Bigl(\operatorname{Gen}_\mathcal{E}(\operatorname{GS}_\mathcal{E}^{i-1}(\mathscr{C})),\; \operatorname{Sub}_\mathcal{E}(\operatorname{GS}_\mathcal{E}^{i-1}(\mathscr{C}))\Bigr).$$

</div>

</v-clicks>

</div>

<div class="remark mt-4" v-click>

<strong>Remarque.</strong> $(\operatorname{GS}_\mathcal{E}^i(\mathscr{C}))_{i \in \mathbb{N}}$ est une suite croissante de sous-catégories de $\mathscr{A}$.

</div>

---

# L'opérateur $\operatorname{GS}_\mathcal{E}$

<div class="definition mt-4">

**Définition**

L'opérateur $\operatorname{GS}_\mathcal{E}$ est défini par

$$\operatorname{GS}_\mathcal{E}(\mathscr{C}) = \varinjlim_{i \in \mathbb{N}} \operatorname{GS}_\mathcal{E}^i(\mathscr{C}) = \bigcup_{i \in \mathbb{N}} \operatorname{GS}_\mathcal{E}^i(\mathscr{C}).$$

</div>

<div class="mt-4" v-click>

De manière équivalente, $\operatorname{GS}_\mathcal{E}(\mathscr{C})$ est la <strong>plus petite sous-catégorie</strong> de $\mathscr{A}$ contenant $\mathscr{C}$ et close par $\operatorname{Gen}_\mathcal{E}$ et $\operatorname{Sub}_\mathcal{E}$.

</div>

<div class="mt-4 opacity-80" v-click>

Pour un objet $M \in \mathscr{A}$, on pose $\operatorname{GS}_\mathcal{E}(M) = \operatorname{GS}_\mathcal{E}(\operatorname{add}(M))$.

</div>

---

# Exemple : $\operatorname{GS}_{\mathcal{E}_\diamond}$ sur $A_7$

<div style="position:relative; margin-left:-16rem; width:calc(100% + 16rem);">
  <PausableVideo src="/poset_full_anim.webm" :pausePoints="[2.5, 6.7, 13.1, 17.3, 23.8, 28.0, 34.5, 38.7, 45.2, 49.4, 55.9, 60.1, 66.6, 70.8, 77.3, 81.5, 88.0]" :playbackRate="1.5" />

</div>

<span v-click="1" data-video-trigger />
<span v-click="2" data-video-trigger />
<span v-click="3" data-video-trigger />
<span v-click="4" data-video-trigger />
<span v-click="5" data-video-trigger />
<span v-click="6" data-video-trigger />
<span v-click="7" data-video-trigger />
<span v-click="8" data-video-trigger />
<span v-click="9" data-video-trigger />
<span v-click="10" data-video-trigger />
<span v-click="11" data-video-trigger />
<span v-click="12" data-video-trigger />
<span v-click="13" data-video-trigger />
<span v-click="14" data-video-trigger />
<span v-click="15" data-video-trigger />
<span v-click="16" data-video-trigger />
<span v-click="17" data-video-trigger />
<span v-click="18" />
<span v-click="19" />
<span v-click="20" />

<GsFormulas :step="Math.max(0, $clicks - 17)" style="position:absolute; top:38%; right:2rem;" />

---

# Propriétés de $\operatorname{GS}_\mathcal{E}$

<div class="proposition mt-4">

**Proposition**

Soit $\mathscr{C} \subseteq \mathscr{A}$ une sous-catégorie.

<v-clicks>

1. Si $\mathscr{C}$ est $\mathcal{E}$-adaptée, alors $\operatorname{GS}_\mathcal{E}(\mathscr{C})$ est aussi $\mathcal{E}$-adaptée.

2. Si $\mathscr{C}$ est $\mathcal{E}$-adaptée et close par extensions, alors $\operatorname{GS}_\mathcal{E}(\mathscr{C})$ est aussi close par extensions.

</v-clicks>

</div>

<v-clicks>

<div class="corollary mt-5">

<strong>Corollaire 1.</strong> Soit $T \in \mathscr{A}$ un objet inclinant. Alors $\operatorname{GS}_\mathcal{E}(T)$ est $\mathcal{E}$-adapté et clos par extensions.

</div>

<div class="corollary mt-3">

<strong>Corollaire 2.</strong> Soit $T \in \operatorname{rep}(A_n)$ un objet inclinant. Alors $\operatorname{GS}_{\mathcal{E}_\diamond}(T)$ est canoniquement retrouvable de Jordan.

</div>

<div class="callout-question mt-4">

<strong>Question :</strong> $\operatorname{GS}_{\mathcal{E}_\diamond}(T)$ est-il maximalement canoniquement retrouvable de Jordan ?

</div>

</v-clicks>

---

# Premier théorème principal

<div class="theorem mt-4">

**Théorème \[DR25\]**

Soit $T \in \mathscr{A}$ un objet inclinant. Alors $\operatorname{GS}_\mathcal{E}(T)$ est une sous-catégorie **maximalement** $\mathcal{E}$-adaptée, close par extensions, de $\mathscr{A}$ contenant $T$.

</div>

<div class="mt-5" v-click>

*En particulier, toute sous-catégorie maximalement canoniquement retrouvable de Jordan est de la forme $\operatorname{GS}_{\mathcal{E}_\diamond}(T)$ pour un certain objet inclinant $T$.*

</div>

<div class="corollary mt-5" v-click>

**Corollaire**

Pour tout objet inclinant $T \in \mathscr{A}$,

$$\operatorname{GS}_{\mathcal{E}}(T) \;=\; \operatorname{GS}_{\mathcal{E}}^2(T).$$

</div>

<div class="callout-question mt-4" v-click>

Comment décrire la relation d'équivalence $\;T \sim_\mathcal{E} T' \iff \operatorname{GS}_{\mathcal{E}}(T) = \operatorname{GS}_{\mathcal{E}}(T')$ ?

</div>

---
layout: section
class: text-center
---

# V. Mutations relatives et équivalence de module inclinant

Deuxième théorème principal

---

# Mutation classique <span :style="{ color:'#60a5fa', opacity: $clicks >= 2 ? 1 : 0, transition:'opacity 0.4s' }">($\mathcal{E}$-mutation)</span>

<div class="definition mt-4">

**Définition**

Soit $T = U \oplus \overline{T}$ un objet inclinant avec $U$ indécomposable.

Une <span :style="{ fontSize: $clicks >= 2 ? '1em' : '0', opacity: $clicks >= 2 ? 1 : 0, transition:'font-size 0.3s, opacity 0.3s', color:'#60a5fa' }">$\mathcal{E}$-</span>**mutation** de $T$ en $U$ est un objet inclinant $\mu_U(T) = U' \oplus \overline{T}$, où $U'$ est obtenu de $U$ par une <span style="font-style:italic;"><span :style="{ fontSize: $clicks >= 2 ? '1em' : '0', opacity: $clicks >= 2 ? 1 : 0, transition:'font-size 0.3s, opacity 0.3s', color:'#60a5fa' }">$\mathcal{E}$-</span><span style="color:#e2b96f;">suite d'échange</span></span>

<div style="position:relative; min-height:3.2em;">
<div :style="{ position:'absolute', width:'100%', opacity: $clicks < 2 ? 1 : 0, transition:'opacity 0.4s' }">

$$\xi:\; 0 \rightarrow U \xrightarrow{f} B \xrightarrow{g} U' \rightarrow 0, \qquad B \in \operatorname{add}(\overline{T}),$$

</div>
<div :style="{ position:'absolute', width:'100%', opacity: $clicks >= 2 ? 1 : 0, transition:'opacity 0.4s' }">

$$\xi:\; 0 \rightarrow U \xrightarrow{f} B \xrightarrow{g} U' \rightarrow 0\,\textcolor{#60a5fa}{\in \mathcal{E}}, \qquad B \in \operatorname{add}(\overline{T}),$$

</div>
</div>

où $f$ est une approximation minimale à gauche de $U$ par $\operatorname{add}(\overline{T})$, et $g$ est une approximation minimale à droite de $U'$ par $\operatorname{add}(\overline{T})$.

</div>

<div class="mt-4 opacity-80" v-click>
<div style="position:relative; min-height:1.6em;">
<div :style="{ position:'absolute', width:'100%', opacity: $clicks < 2 ? 1 : 0, transition:'opacity 0.4s' }">

On note $\textcolor{#e2b96f}{\mu_U^+(T)}$ (resp. $\textcolor{#e2b96f}{\mu_U^-(T)}$) la mutation <span style="color:#e2b96f; font-style:italic;">droite</span> (resp. <span style="color:#e2b96f; font-style:italic;">gauche</span>).

</div>
<div :style="{ position:'absolute', width:'100%', opacity: $clicks >= 2 ? 1 : 0, transition:'opacity 0.4s' }">

On note $\textcolor{#e2b96f}{\mu_{U,\textcolor{#60a5fa}{\mathcal{E}}}^+(T)}$ (resp. $\textcolor{#e2b96f}{\mu_{U,\textcolor{#60a5fa}{\mathcal{E}}}^-(T)}$) la <span style="color:#60a5fa;">$\mathcal{E}$-</span>mutation <span style="color:#e2b96f; font-style:italic;">droite</span> (resp. <span style="color:#e2b96f; font-style:italic;">gauche</span>).

</div>
</div>
</div>

<span v-click />

---

# Exemple : $Q = 1 \to 2 \leftarrow 3 \to 4$ avec $\mathcal{E} = \mathcal{E}_{\max}$

<div style="position:absolute; top:6.5rem; left:2rem; right:2rem; bottom:2rem;">
  <iframe src="https://ar-quiver-simulator.vercel.app" style="width:154%; height:154%; border:none; transform:scale(0.65); transform-origin:top left;" />
</div>

---

# $\mathcal{E}$-Atteignabilité

<div class="definition mt-4">

**Définition**

Soient $T, T' \in \operatorname{Tilt}(Q)$.

$T'$ est **$\mathcal{E}$-atteignable** depuis $T$ s'il existe des indécomposables $(U_1, \dots, U_m)$ tels que

$$T' \cong \mu_{U_m,\mathcal{E}} \circ \cdots \circ \mu_{U_1,\mathcal{E}}(T).$$

</div>

<div class="mt-5" v-click>

**La $\mathcal{E}$-atteignabilité** $T \approx_{\mathcal{E}} T'$ est une relation d'équivalence. On note $[T]_{\approx_\mathcal{E}}$ la classe d'équivalence de $T$.

</div>

---

# Exemple : $Q = 1 \to 2 \leftarrow 3 \to 4$ avec $\mathcal{E} = \mathcal{E}_\diamond$

<div style="position:absolute; top:6.5rem; left:2rem; right:2rem; bottom:2rem;">
  <iframe src="https://ar-quiver-simulator.vercel.app" style="width:154%; height:154%; border:none; transform:scale(0.65); transform-origin:top left;" />
</div>

---

# Équivalence de modules inclinants

<div class="callout-question mt-4">

**Question précédente** &nbsp;— Comment décrire $T \sim_\mathcal{E} T' \iff \operatorname{GS}_{\mathcal{E}}(T) = \operatorname{GS}_{\mathcal{E}}(T')$ ?

</div>

<div class="proposition mt-4" v-click>

**Proposition**

Soient $T, T' \in \operatorname{Tilt}(Q)$. Alors

$$T \sim_{\mathcal{E}} T' \quad \Longleftrightarrow \quad T \approx_{\mathcal{E}} T'.$$

</div>

---

# Équivalence de modules inclinants

<div style="opacity: 1 !important;">

**Exemple.** Supposons $Q = 1 \to 2 \leftarrow 3 \to 4$ et $\mathcal{E} = \mathcal{E}_\diamond$.

</div>

<div class="mt-2" style="width: 100%; aspect-ratio: 22/10; position: relative;">
  <img src="./public/poset_left.png" class="fade-out-left"
       style="position: absolute; height: 92%; top: 4%; left: 5%;" />
  <img src="./public/poset_right_circle.png" v-click="1" class="grow-from-node"
       style="position: absolute; height: 85%; top: 7%; right: 2%;" />
  <img src="./public/poset_right_labels.png" v-click="1" class="labels-delayed"
       style="position: absolute; height: 85%; top: 7%; right: 2%;" />
  <!-- v-click 2 : quivers travel from circle to left stack -->
  <img src="./public/t1_quiver.png" v-click="2" class="quiver-travel quiver-t1 quiver-plain" />
  <img src="./public/t2_quiver.png" v-click="2" class="quiver-travel quiver-t2 quiver-plain" />
  <img src="./public/t3_quiver.png" v-click="2" class="quiver-travel quiver-t3 quiver-plain" />
  <!-- v-click 3 : swap to highlighted versions -->
  <img src="./public/t1_hl.png" v-click="3" class="quiver-hl quiver-t1" />
  <img src="./public/t2_hl.png" v-click="3" class="quiver-hl quiver-t2" />
  <img src="./public/t3_hl.png" v-click="3" class="quiver-hl quiver-t3" />
  <!-- formula fades in after highlights, no extra vclick -->
  <div v-click="3" class="gs-formula">

$\mathrm{GS}_{\mathcal{E}_\diamond}(T_1) = \mathrm{GS}_{\mathcal{E}_\diamond}(T_2) = \mathrm{GS}_{\mathcal{E}_\diamond}(T_3)$

  </div>
</div>

<style>
.grow-from-node {
  transform: scale(0);
  transform-origin: -95% 72%;
  transition: transform 2.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.grow-from-node:not(.slidev-vclick-hidden) {
  transform: scale(1);
}
.labels-delayed:not(.slidev-vclick-hidden) {
  animation: fadeInLabels 0.5s ease both;
  animation-delay: 2.1s;
}
@keyframes fadeInLabels {
  from { opacity: 0; }
  to   { opacity: 1; }
}
div:has(.grow-from-node:not(.slidev-vclick-hidden)) .fade-out-left {
  animation: fadeOutLeft 0.8s ease forwards;
  animation-delay: 2.7s;
}
@keyframes fadeOutLeft {
  from { opacity: 1; }
  to   { opacity: 0; }
}
/* v-click 2 : quivers travel from circle positions to left stack */
.quiver-travel {
  position: absolute;
  height: 32%;
  transition: left 2.0s cubic-bezier(0.22, 1, 0.36, 1),
              top  2.0s cubic-bezier(0.22, 1, 0.36, 1);
}
/* Starting positions — matching T1/T2/T3 in the right circle */
.quiver-t1 { left: 64%; top: 37%; }
.quiver-t2 { left: 79%; top: 52%; }
.quiver-t3 { left: 64%; top: 67%; }
/* Final positions — horizontal stack on the left */
.quiver-t1:not(.slidev-vclick-hidden) { left: 2%;  top: 20%; }
.quiver-t2:not(.slidev-vclick-hidden) { left: 20%; top: 20%; }
.quiver-t3:not(.slidev-vclick-hidden) { left: 38%; top: 20%; }
/* v-click 3 : highlighted versions overlay at same positions, plain fade out */
.quiver-hl {
  position: absolute;
  height: 32%;
  transition: opacity 1.8s ease;
}
.quiver-hl.quiver-t1 { left: 2%;  top: 20%; }
.quiver-hl.quiver-t2 { left: 20%; top: 20%; }
.quiver-hl.quiver-t3 { left: 38%; top: 20%; }
div:has(.quiver-hl:not(.slidev-vclick-hidden)) .quiver-plain {
  opacity: 0;
  transition: opacity 1.8s ease;
}
.gs-formula {
  position: absolute;
  left: 8%; bottom: 28%;
  color: white;
  font-size: 1.1em;
  opacity: 0;
}
.gs-formula:not(.slidev-vclick-hidden) {
  animation: fadeInFormula 1.5s ease both;
  animation-delay: 1.8s;
}
@keyframes fadeInFormula {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>

---

# Deuxième théorème principal

<div class="theorem mt-4">

**Théorème \[DR25\]**

Soit $T \in \operatorname{Tilt}(Q)$. Alors

$$\operatorname{GS}_{\mathcal{E}}(T) \;=\; \operatorname{add}\!\left( \bigoplus_{T' \in [T]_{\approx_{\mathcal{E}}}} T' \right).$$

</div>

<div class="mt-5" v-click>

**Exemple.** Supposons $Q = 1 \to 2 \leftarrow 3 \to 4$ et $\mathcal{E} = \mathcal{E}_\diamond$.

</div>

<div class="flex items-start gap-28 mt-2" style="position: relative; overflow: visible;">

<div v-click style="display: inline-block;">
  <div class="flex gap-4">
    <img src="./public/t1_quiver.png" style="height: 140px; object-fit: contain;" />
    <img src="./public/t2_quiver.png" style="height: 140px; object-fit: contain;" />
    <img src="./public/t3_quiver.png" style="height: 140px; object-fit: contain;" />
  </div>
  <div class="text-center mt-6">

$[T_1]_{\approx_{\mathcal{E}_\diamond}}=[T_2]_{\approx_{\mathcal{E}_\diamond}}=[T_3]_{\approx_{\mathcal{E}_\diamond}}$

  </div>
</div>

<div v-click style="margin-top: 20px;">
  <img src="./public/t_plain.png" style="height: 120px; object-fit: contain;" />
</div>

<!-- v-click 4: 4 boxes from T1 travel to plain quiver -->
<img src="./public/box_2.png"  v-click="4" class="tbox tb-2"  style="height:22px;" />
<img src="./public/box_12.png" v-click="4" class="tbox tb-12" style="height:22px;" />
<img src="./public/box_24.png" v-click="4" class="tbox tb-24" style="height:22px;" />
<img src="./public/box_23.png" v-click="4" class="tbox tb-23" style="height:22px;" />
<!-- v-click 5: 4 boxes from T2 travel to plain quiver -->
<img src="./public/box_12.png" v-click="5" class="tbox tb2-12" style="height:22px;" />
<img src="./public/box_24.png" v-click="5" class="tbox tb2-24" style="height:22px;" />
<img src="./public/box_14.png" v-click="5" class="tbox tb2-14" style="height:22px;" />
<img src="./public/box_23.png" v-click="5" class="tbox tb2-23" style="height:22px;" />
<!-- v-click 6: 4 boxes from T3 travel to plain quiver -->
<img src="./public/box_12.png" v-click="6" class="tbox tb3-12" style="height:22px;" />
<img src="./public/box_14.png" v-click="6" class="tbox tb3-14" style="height:22px;" />
<img src="./public/box_23.png" v-click="6" class="tbox tb3-23" style="height:22px;" />
<img src="./public/box_13.png" v-click="6" class="tbox tb3-13" style="height:22px;" />

<!-- v-click 7: GS formula result -->
<div v-click="7" class="gs-result">

$\operatorname{GS}_{\mathcal{E}_\diamond}(T_1) = \operatorname{add}(T_1 \oplus T_2 \oplus T_3)$

</div>

</div>

<style>
.tbox {
  position: absolute;
  z-index: 10;
}
.gs-result {
  position: absolute;
  left: 540px;
  top: 160px;
}
.tb-2:not(.slidev-vclick-hidden)  { animation: travel-2  2.2s cubic-bezier(0.22,1,0.36,1) both; left: 595px; top: 54px;  }
.tb-12:not(.slidev-vclick-hidden) { animation: travel-12 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 621px; top: 25px;  }
.tb-24:not(.slidev-vclick-hidden) { animation: travel-24 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 622px; top: 83px;  }
.tb-23:not(.slidev-vclick-hidden) { animation: travel-23 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 651px; top: 114px; }

@keyframes travel-2  { from { left: 6px;  top: 59px;  } to { left: 595px; top: 54px;  } }
@keyframes travel-12 { from { left: 36px; top: 30px;  } to { left: 621px; top: 25px;  } }
@keyframes travel-24 { from { left: 36px; top: 88px;  } to { left: 622px; top: 83px;  } }
@keyframes travel-23 { from { left: 65px; top: 118px; } to { left: 651px; top: 114px; } }
/* T2 source: starts at x≈262px in flex container */
.tb2-12:not(.slidev-vclick-hidden) { animation: travel2-12 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 621px; top: 25px;  }
.tb2-24:not(.slidev-vclick-hidden) { animation: travel2-24 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 622px; top: 83px;  }
.tb2-14:not(.slidev-vclick-hidden) { animation: travel2-14 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 649px; top: 54px;  }
.tb2-23:not(.slidev-vclick-hidden) { animation: travel2-23 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 651px; top: 114px; }

@keyframes travel2-12 { from { left: 267px; top: 26px;  } to { left: 621px; top: 25px;  } }
@keyframes travel2-24 { from { left: 267px; top: 84px;  } to { left: 622px; top: 83px;  } }
@keyframes travel2-14 { from { left: 294px; top: 55px;  } to { left: 649px; top: 54px;  } }
@keyframes travel2-23 { from { left: 296px; top: 114px; } to { left: 651px; top: 114px; } }
/* T3 source: starts at x≈523px in flex container */
.tb3-12:not(.slidev-vclick-hidden) { animation: travel3-12 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 621px; top: 25px;  }
.tb3-14:not(.slidev-vclick-hidden) { animation: travel3-14 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 649px; top: 54px;  }
.tb3-23:not(.slidev-vclick-hidden) { animation: travel3-23 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 651px; top: 114px; }
.tb3-13:not(.slidev-vclick-hidden) { animation: travel3-13 2.2s cubic-bezier(0.22,1,0.36,1) both; left: 682px; top: 84px;  }

@keyframes travel3-12 { from { left: 403px; top: 26px;  } to { left: 621px; top: 25px;  } }
@keyframes travel3-14 { from { left: 430px; top: 55px;  } to { left: 649px; top: 54px;  } }
@keyframes travel3-23 { from { left: 432px; top: 114px; } to { left: 651px; top: 114px; } }
@keyframes travel3-13 { from { left: 463px; top: 84px;  } to { left: 682px; top: 84px;  } }
</style>

---

# Conséquences du deuxième théorème principal

<div class="corollary mt-4">

**Corollaire**

Soit $Q$ un carquois de type $A_n$.

<v-clicks>

<div class="mt-4">

<em>(a)</em> Il existe une bijection

$$\operatorname{Tilt}(Q) / {\approx_{\mathcal{E}_\diamond}} \;\longleftrightarrow\; \bigl\{\text{sous-catégories CJR maximales de } \operatorname{rep}(Q)\bigr\}.$$

</div>

<div class="mt-4">

<em>(b)</em> Soit $\mathscr{C} \subseteq \operatorname{rep}(Q)$ une sous-catégorie maximalement canoniquement retrouvable de Jordan. Alors il existe $T \in \operatorname{Tilt}(Q)$ tel que

$$\mathscr{C} = \operatorname{add}\!\left( \bigoplus_{T' \in [T]_{\approx_{\mathcal{E}_\diamond}}} T' \right).$$

</div>

</v-clicks>

</div>

---

# Synthèse et perspectives

**Une vision unifiée des structures exactes, modules MAR et retrouvabilité de Jordan**

<v-clicks>

- La **structure exacte diamant** $\mathcal{E}_\diamond$ fournit un cadre naturel reliant la théorie des modules inclinants, les modules presque rigides maximaux et la retrouvabilité de Jordan.

- Les modules MAR sont exactement les modules $\mathcal{E}_\diamond$-inclinants.

- Toute sous-catégorie maximalement canoniquement retrouvable de Jordan est de la forme $\operatorname{GS}_{\mathcal{E}_\diamond}(T)$ pour un certain objet inclinant $T$.

- Deux objets inclinants $T, T'$ vérifient $\operatorname{GS}_{\mathcal{E}}(T) = \operatorname{GS}_{\mathcal{E}}(T')$ si et seulement s'ils sont reliés par une suite de **$\mathcal{E}$-mutations**.

- Il existe une bijection
$$\operatorname{Tilt}(Q)/{\approx_{\mathcal{E}_\diamond}} \;\longleftrightarrow\; \{\text{sous-catégories CJR maximales de }\operatorname{rep}(Q)\},$$
donnée par $[T]_{\approx_{\mathcal{E}_\diamond}} \;\longmapsto\; \operatorname{add}\!\Bigl(\bigoplus_{T' \in [T]_{\approx_{\mathcal{E}_\diamond}}} T'\Bigr)$.

</v-clicks>

---
layout: section
class: text-center
---

# VI. Nouveaux résultats

<span style="opacity:0.6; font-size:0.85em">\[R., 2026\]</span>

---

# Paire de réalisation inclinante

<div class="definition mt-4">

**Définition \[R., 2026\]**

Soit $(\mathscr{A}, \mathcal{E})$ une catégorie exacte. Soient $\mathfrak{R}$ et $\mathfrak{G}$ deux familles de sous-catégories additives pleines de $\mathscr{A}$. On suppose que tout élément de $\mathfrak{R}$ est $\mathcal{E}$-rigide et que tout élément de $\mathfrak{G}$ est $\mathcal{E}$-adapté.

<div class="mt-4" v-click>

On dit que $(\mathfrak{R}, \mathfrak{G})$ est une **paire de réalisation inclinante** si

$$\operatorname{Tilt}(\mathscr{A}) \subseteq \bigl\{\, \mathcal{R} \cap \mathcal{G} \;\big|\; \mathcal{R} \in \mathfrak{R},\, \mathcal{G} \in \mathfrak{G} \,\bigr\}.$$

</div>

</div>

<div class="remark mt-4" v-click>

**Remarque.** On dit que $(\mathfrak{R}, \mathfrak{G})$ est une **paire de réalisation inclinante maximale** si de plus tout $\mathcal{R} \in \mathfrak{R}$ est maximalement $\mathcal{E}$-rigide et tout $\mathcal{G} \in \mathfrak{G}$ est maximalement $\mathcal{E}$-adapté.

</div>

---

# Exemples de paires de réalisation inclinante

<div class="proposition mt-4">

**Proposition \[R., 2026\]**

Soit $Q$ un carquois de Dynkin et $(\operatorname{rep}(Q), \mathcal{E})$ une catégorie exacte 0-Auslander. Alors

<div class="mt-4" v-click>

$$\Bigl(\operatorname{Tilt}_\mathcal{E}(Q),\; \bigl\{\operatorname{GS}_\mathcal{E}(T) \mid T \in \operatorname{Tilt}(Q)\bigr\}\Bigr)$$

est une **paire de réalisation inclinante maximale**.

</div>

</div>


<div class="mt-5">

<v-clicks>

<div>

*Idée de la preuve.* &nbsp;Soit $T \in \operatorname{Tilt}(Q)$.

</div>

<div class="mt-2">

Puisque $(\operatorname{rep}(Q), \mathcal{E})$ est 0-Auslander, $\mathcal{E}$-inclinant $\Leftrightarrow$ maximal $\mathcal{E}$-rigide. On construit $T_\mathcal{E} \in \operatorname{Tilt}_\mathcal{E}(Q)$ en complétant $T$ en un objet maximal $\mathcal{E}$-rigide.

</div>

<div class="mt-2">

On a que $\operatorname{add}(T) \subseteq \operatorname{add}(T_\mathcal{E}) \cap \operatorname{GS}_\mathcal{E}(T)$.

</div>

<div class="mt-2">

D'autre part, $\operatorname{add}(T_\mathcal{E}) \cap \operatorname{GS}_\mathcal{E}(T)$ est $\mathcal{E}$-rigide et $\mathcal{E}$-adapté, donc rigide. Ainsi $\operatorname{add}(T) = \operatorname{add}(T_\mathcal{E}) \cap \operatorname{GS}_\mathcal{E}(T)$. $\square$

</div>


</v-clicks>

</div>

---

# Exemples de paires de réalisation inclinante

<div class="corollary mt-4">

**Corollaire \[R., 2026\]**

Soit $Q$ un carquois de Dynkin. Les paires suivantes sont des paires de réalisation inclinante **maximales** :

<v-clicks>

<div class="mt-3">

<span style="color:#63b3ed; font-style:italic">(a)</span> $\displaystyle\bigl(\operatorname{Tilt}_{\mathcal{E}_{\min}}(Q),\; \{\operatorname{GS}_{\mathcal{E}_{\min}}(T) \mid T \in \operatorname{Tilt}(Q)\}\bigr) = \bigl(\operatorname{rep}(Q),\; \operatorname{Tilt}(Q)\bigr)$

</div>

<div class="mt-3">

<span style="color:#63b3ed; font-style:italic">(b)</span> $\displaystyle\bigl(\operatorname{Tilt}_{\mathcal{E}_{\max}}(Q),\; \{\operatorname{GS}_{\mathcal{E}_{\max}}(T) \mid T \in \operatorname{Tilt}(Q)\}\bigr) = \bigl(\operatorname{Tilt}(Q),\; \operatorname{rep}(Q)\bigr)$

</div>

<div class="mt-3">

<span style="font-size:0.85em; opacity:0.7">*Dans le cas où $Q$ est de type $A_n$ :*</span>

<span style="color:#63b3ed; font-style:italic">&#40;c&#41;</span> $\displaystyle\bigl(\operatorname{Tilt}_{\mathcal{E}_\diamond}(Q),\; \{\operatorname{GS}_{\mathcal{E}_\diamond}(T) \mid T \in \operatorname{Tilt}(Q)\}\bigr) = \bigl(\operatorname{MAR}(Q),\; \operatorname{CJR}(Q)\bigr)$

</div>

</v-clicks>

</div>

---
layout: center
---

<div style="text-align:center">

# Merci de votre attention !

<div style="font-size:1.2rem; opacity:0.65; margin-top:1rem; font-style:italic">Questions ?</div>


<div style="margin-top:2rem">
  <img src="./public/frq_logo_blanc.png" style="max-height: 120px; margin: 0 auto;" />
</div>

<div style="margin-top:1.5rem; font-size:0.8rem; opacity:0.4">
  Sunny Roy &nbsp;·&nbsp; Université de Sherbrooke &nbsp;·&nbsp; Soutenance de thèse
</div>

</div>
