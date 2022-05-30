# TODO

- [ ] $5 + 10CHF = $10 (2:1 の場合)
- [ ] $5 + $5 = $10
- [ ] $5 + $5 が Money を返す
- [x] 実行時エラーの解決
  - AssertionError: expected Money{ amount: 5, currency: 'USD' } to be undefined // Object.is equality
- [x] Bank の reduce を実装する
- [x] Sum の reduce を実装する
- [x] Money クラスの amount のスコープを正しくする
  - TypeScript での getter, setter
  - https://qiita.com/kuropp/items/ebefeec110ea6a2beb62
- [x] tobe, toEqual の違いはなに？
- [x] Java の Interface に該当すると思って、TypeScript の Interface を使ってるけど同等の機能なのか？
- [x] TypeScript のクラスメソッドのスコープはデフォルト public？ → public
- [ ] currency のとり得る値をを型定義する
