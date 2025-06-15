# TODO アプリ

シンプルで美しい日本語のTODOアプリケーション。バニラHTML、CSS、JavaScriptで構築されており、ローカルストレージを使用してデータを永続化します。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![UI Language](https://img.shields.io/badge/UI-日本語-red.svg)

## ✨ 特徴

- 📝 **シンプルなTODO管理**: タスクの追加、完了、削除
- 🎌 **日本語インターフェース**: 完全な日本語UI
- 💾 **データ永続化**: ローカルストレージによる自動保存
- 📱 **レスポンシブデザイン**: モバイル・デスクトップ対応
- 🚀 **軽量**: 外部依存関係なし、即座に動作
- ✅ **テスト済み**: Jest による包括的なテスト

## 🚀 クイックスタート

### 基本的な使用方法

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/kosei-s/todo_app.git
   cd todo_app
   ```

2. **アプリケーションを開く**
   ```bash
   # ブラウザでindex.htmlを開く
   open index.html  # macOS
   # または直接ブラウザにドラッグ&ドロップ
   ```

3. **使用開始**
   - 新しいタスクを入力欄に入力
   - 「追加」ボタンをクリックまたはEnterキーを押す
   - 完了ボタンでタスクを完了状態に切り替え
   - 削除ボタンでタスクを削除

### 開発者向けセットアップ

開発やテストを行う場合:

```bash
# 依存関係のインストール
npm install

# テストの実行
npm test

# テストをウォッチモードで実行
npm run test:watch

# カバレッジレポートの生成
npm run test:coverage
```

## 📋 使用方法

### 基本操作

1. **タスクの追加**
   - 入力欄にタスクを入力
   - 「追加」ボタンまたはEnterキーで追加

2. **タスクの完了**
   - 「完了」ボタンをクリック
   - 完了済みタスクは取り消し線で表示

3. **タスクの削除**
   - 「削除」ボタンをクリック
   - 確認ダイアログで削除を確認

### データの保存

- すべてのタスクは自動的にブラウザのローカルストレージに保存
- ブラウザを閉じても、再度開くとタスクが復元される
- プライベートブラウジングモードでは保存されません

## 🛠️ 技術仕様

### 使用技術

- **HTML5**: セマンティックなマークアップ
- **CSS3**: Flexbox、アニメーション、レスポンシブデザイン
- **JavaScript (ES6+)**: バニラJS、DOM操作、ローカルストレージ
- **Jest**: ユニットテスト
- **Babel**: ES6トランスパイル（テスト用）

### ブラウザ対応

| ブラウザ | バージョン |
|---------|-----------|
| Chrome  | 60+       |
| Firefox | 55+       |
| Safari  | 12+       |
| Edge    | 79+       |

### ファイル構成

```
todo_app/
├── index.html          # メインHTML
├── script.js           # アプリケーションロジック
├── style.css           # スタイリング
├── package.json        # 開発依存関係
├── jest.config.js      # テスト設定
├── tests/              # テストファイル
└── README.md           # このファイル
```

## 🧪 テスト

このプロジェクトには包括的なテストスイートが含まれています:

```bash
# すべてのテストを実行
npm test

# 特定のテストファイルを実行
npm test todo.test.js

# カバレッジレポートを生成
npm run test:coverage
```

### テストカバレッジ

- ✅ ローカルストレージ操作
- ✅ TODOデータ構造の検証
- ✅ 入力バリデーション
- ✅ 配列操作（追加・削除）

## 🤝 貢献

プロジェクトへの貢献を歓迎します！

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### 開発ガイドライン

- 既存のコードスタイルに従ってください
- 新機能にはテストを追加してください
- 日本語UIを維持してください
- コミット前にテストを実行してください

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

## 🔧 トラブルシューティング

### よくある問題

**Q: アプリケーションが動作しない**
- ブラウザがJavaScriptを有効にしているか確認
- 開発者ツールでエラーを確認
- 対応ブラウザを使用しているか確認

**Q: データが保存されない**
- プライベートブラウジングモードではないか確認
- ローカルストレージが有効か確認
- ブラウザの容量制限に達していないか確認

**Q: テストが失敗する**
- `npm install`を実行して依存関係を再インストール
- Node.js 16+を使用しているか確認

## 📞 サポート

問題や質問がある場合は、[GitHub Issues](https://github.com/kosei-s/todo_app/issues)で報告してください。

---

**Made with ❤️ for Japanese TODO management**