---
name: create-issue
description: GitHub CLIを使ってIssueを作成する
disable-model-invocation: true
allowed-tools: 'Read, Bash, Grep, Glob'
---

# /create-issue - Issue作成

GitHub CLIを使ってIssueを作成します。Issue templateがあれば選択して利用できます。

## 実行手順

### 1. Issue templateの確認

```bash
ls .github/ISSUE_TEMPLATE/ 2>/dev/null
```

- テンプレートが存在する場合 → 一覧を表示し、ユーザーに選択させる
- テンプレートが存在しない場合 → フリーフォームで作成

### 2. リポジトリのラベル確認

```bash
gh label list
```

- 既存ラベルを一覧表示し、ユーザーに適切なラベルを選択させる

### 3. Issue情報の決定

ユーザーと対話して以下を決定する:

- **タイトル**（必須）: 簡潔で内容が伝わるもの
- **本文**（必須）: テンプレート使用時はテンプレートの項目を埋める
- **ラベル**（任意）: リポジトリの既存ラベルから選択

### 4. Issue作成

テンプレートなしの場合:

```bash
gh issue create --title "タイトル" --body "本文" --label "ラベル"
```

テンプレート使用時:

```bash
gh issue create --template "テンプレート名.md"
```

### 5. ブラウザで開く

Issue作成後、必ずブラウザでIssueを開く:

```bash
gh issue view <number> --web
```

## 出力形式

```
## Issue作成完了

- URL: https://github.com/...
- タイトル: ...
- 番号: #N
- ラベル: ...
```

## 注意事項

- `disable-model-invocation: true` により、ユーザーが `/create-issue` で明示的に実行した場合のみ動作
- AIが自動的にIssueを作成することはない
