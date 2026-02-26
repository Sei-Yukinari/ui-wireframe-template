# AGENTS.md

## 現在のフェーズ

本プロジェクトは「ハイファイUI実装フェーズ」です。

ワイヤーフレームを元に、SaaSプロダクト品質のハイファイUIを実装します。

---

## 絶対ルール

以下を厳守してください。

- 外部UIライブラリを使わない
- API通信を書かない
- Server Actionsを使わない
- データベース処理を書かない
- 外部依存追加を最小限にする

---

## 許可事項

- useState, useEffect（UI制御のみ）
- onClick等のイベントハンドラ
- 簡易バリデーション（UIレベル）
- デザイントークンに基づく色・シャドウ・アニメーション
- アイコン（インラインSVG）
- ホバーエフェクト・トランジション

---

## 技術スタック

- TypeScript
- Next.js（App Router）
- TailwindCSS

### ディレクトリ構造

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # ルートレイアウト
│   ├── page.tsx              # ログインページ
│   ├── loading.tsx           # ローディングUI
│   ├── error.tsx             # エラーUI
│   ├── not-found.tsx         # 404ページ
│   ├── dashboard/            # ダッシュボード
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── task/[id]/            # タスク詳細
│   │   └── page.tsx
│   └── settings/             # 設定
│       └── page.tsx
├── components/               # Reactコンポーネント
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   ├── CreateTaskModal.tsx
│   └── BackButton.tsx
```

これ以外は使用しない。

---

## デザイン方針

- モダンかつミニマルでSaaS製品感のある仕上がり
- 余白を重視し、要素間のリズムを統一
- 明確な階層（色・タイポグラフィ・シャドウ）で情報を分離
- アクセシビリティ（キーボード操作、コントラスト）を考慮
- デザイントークン（globals.css のCSS変数）に準拠

---

## 禁止事項（重要）

以下を生成した場合は失敗とみなす。

- 実際のCRUD処理
- 外部依存追加（UIライブラリ等）
- 実ネットワーク/APIコール
- DB/Server Actionsの実装
- 外部状態管理（Redux等）
- 認証フローの実装

---

## ダミーデータについて

- 静的な配列のみ使用する
- 仮データで十分
- 永続化は不要

---

## このフェーズのゴール

- 見た目がSaaSプロダクトとして違和感ないこと
- md以上で2カラムを維持するレスポンシブ実装
- UIの主要コンポーネント（Header, Sidebar, TaskList, TaskItem, CreateTaskModal）が実装され、相互動作する
