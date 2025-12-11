# Step 1

> Nous avons 2 tableaux ordonnés contenant des nombres :
> const a = [1, 7, 8, 12, 23, 55, 67, 89]
> const b = [7, 12, 23, 105, 112, 130, 141]
> Ecris une fonction qui permet d'obtenir la liste des nombres communs à ces 2 tableaux.
> Exemple :
> const result = [7, 12, 23]

## Output Claude Code

```text
⏺ Parfait ! J'ai implémenté la fonction en suivant la méthode TDD :

  Test créé : src/commonNumbers.test.ts:3-11
  Le test vérifie que la fonction retourne bien [7, 12, 23] pour les tableaux donnés.

  Implémentation : src/commonNumbers.ts:1-17
  La fonction utilise l'algorithme des deux pointeurs qui profite du fait que les tableaux sont ordonnés :
  - Complexité temporelle : O(n + m) où n et m sont les tailles des deux tableaux
  - Complexité spatiale : O(min(n, m)) pour stocker le résultat

  Résultat des tests : ✅ Tous les tests passent

  La fonction est maintenant prête à l'emploi. L'algorithme compare les éléments aux deux positions courantes et avance le pointeur approprié selon que l'élément est plus petit, égal, ou plus grand.
```

# Step 2

> Dans le résultat final, je ne veux pas les doublons

## Output Claude Code

```text
⏺ Parfait ! J'ai modifié la fonction en TDD pour éviter les doublons :

  Nouveau test ajouté : src/commonNumbers.test.ts:13-20
  Le test vérifie que les doublons sont éliminés du résultat avec des tableaux contenant [5, 5] et [10, 10].

  Modification du code : src/commonNumbers.ts:8-10
  Avant d'ajouter un nombre au résultat, on vérifie maintenant qu'il est différent du dernier nombre déjà ajouté. Cela garantit qu'il n'y a pas de doublons dans le résultat final.

  Résultat des tests : ✅ Les 2 tests passent
  - Test initial : [7, 12, 23]
  - Test doublons : [5, 7, 10, 12] (pas de doublons)

  La fonction retourne maintenant uniquement les nombres communs uniques entre les deux tableaux.
```

# Step 3

> Par contre, si un nombre est 2 fois dans une liste et 3 fois dans l'autre, il faut que le résultat 
> final contienne ces 2 nombres

## Output Claude Code

```text
⏺ Parfait ! La fonction fonctionne maintenant correctement avec le comportement souhaité.

  Modification apportée : src/commonNumbers.test.ts:13-20
  Le test vérifie maintenant que la fonction garde le minimum des occurrences communes :
  - a = [1, 5, 5, 7, 10, 10, 12] : 5×2, 10×2
  - b = [5, 5, 7, 10, 12, 12, 15] : 5×2, 10×1, 12×2
  - Résultat : [5, 5, 7, 10, 12] → 5 apparaît min(2,2)=2 fois, 10 apparaît min(2,1)=1 fois

  Code final : src/commonNumbers.ts:7-10
  L'algorithme des deux pointeurs garde naturellement le bon nombre d'occurrences. Quand on trouve un nombre commun, on l'ajoute et on avance les deux pointeurs, garantissant ainsi le minimum d'occurrences.

  Résultat des tests : ✅ Les 2 tests passent
  - Premier cas : nombres sans doublons [7, 12, 23]
  - Second cas : avec occurrences multiples [5, 5, 7, 10, 12]
```
