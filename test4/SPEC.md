# Step 1

Nous avons 2 tableaux ordonnés contenant des nombres :
const a = [1, 7, 8, 12, 23, 55, 67, 89]
const b = [7, 12, 23, 105, 112, 130, 141]
Ecris une fonction qui permet d'obtenir la liste des nombres communs à ces 2 tableaux.
Exemple :
const result = [7, 12, 23]

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