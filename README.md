> Tests du TDD avec Claude Code.

![Claude Code](./ClaudeCode.png)

# Objectifs

Tester la façon dont un assistant IA propose de faire du TDD,
et voir si cela peut aider un novice à découvrir le TDD.

# Article LinkedIn

Mon analyse et mes commentaires sont à retrouver dans un article 
sur LinkedIn : [mes articles](https://www.linkedin.com/in/xnopre/recent-activity/articles/).

# Contenu du repo

## Tests 1 à 3

- Chaque test est dans un dossier test<n>
- Les consignes sont dans des fichiers `Consignes.md`
- Prompt donné à `Claude Code` : 

> Suit les instructions dans le fichier Consignes.md 

- La plupart du temps, les étapes ont été consignés 1 par 1 dans des commits
  (parfois plusieurs étapes regroupées dans un seul commit en fin de test)
- Les messages des commits reprennent les réponses de `Claude Code`

## Test 4

L'idée dans ce test est de partir sur un sujet (kata) potentiellement moins (ou pas) connu
par l'IA, en donnant les contraintes les unes après les autres, pour voir
comment Claude Code s'y prend.

Le fichier [Claude.md](./test4/CLAUDE.md) dit simplement qu'on veut faire du TDD : 

> Tu travailles toujours en TDD, en écrivant un test à la fois, et en écrivant le moins de code possible
> pour faire passer ce test.

Le fichier [SPEC.md](./test4/SPEC.md) contient les prompts successifs donnés à Claude Code
et les résultats qu'il a donnés.