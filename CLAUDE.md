# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## やりとりの言語

このプロジェクトでのやりとりはすべて日本語で行うこと。

## プロジェクト概要

敷き紙 (Shikigami) の個人サイト "Over The Coffee" (https://overthecoffee.net/) のソースコード。音楽アーカイブの一覧・詳細表示と試聴機能を持つ静的サイト。

## コマンド

```bash
pnpm dev              # 開発サーバー起動 (http://localhost:3000)
pnpm build            # 静的ファイル出力 (./out/ に生成)
pnpm lint             # ESLint
pnpm format           # Prettier (src/ 配下)
pnpm storybook        # Storybook 起動 (http://localhost:6006)
pnpm tsm              # SCSS Modules の型定義ファイル (.d.ts) をウォッチ生成
pnpm cm               # git-cz でコミット (Conventional Commits)
```

`pnpm tsm` は `.module.scss` を編集する際にウォッチモードで起動しておくこと。`.scss.d.ts` ファイルはこのコマンドで自動生成される。

## アーキテクチャ

### 静的エクスポート

`next.config.js` で `output: 'export'` を設定しており、`pnpm build` で `./out/` ディレクトリに静的 HTML/CSS/JS が出力される。GitHub Actions がビルド後に FTP で本番サーバーへデプロイする。サーバーサイドの機能（API Routes、ISR 等）は使用不可。

### アーカイブデータ

すべての楽曲アーカイブデータは `src/assets/archiveList.ts` に `Record<number, archiveListType>` として静的に定義されている。キーはアルバム ID（数値）。型定義は `src/types/archiveList.ts`。

新しいアルバムを追加する際は以下の3点が必要:
1. `src/assets/archiveList.ts` に `archiveListData` エントリを追加
2. `/public/audio/XXXX.m4a` — ID を4桁ゼロ埋めしたファイル名で音声ファイルを配置
3. `/public/image/artwork/XXXX.webp` — 同様のファイル名でアートワーク画像を配置

`isListen: false` のエントリは詳細ページで Player コンポーネントが非表示になる（試聴不可作品）。

### スタイリング

- **SCSS Modules** (`styles.module.scss`) を各コンポーネントに配置。Prettier + Stylelint (recess-order) で整形。
- **Tailwind CSS** も併用しているが、主要なスタイリングは SCSS Modules で行っている。
- **CSS カスタムプロパティ** (`--gray`, `--brown`, `--black`) が `src/styles/globals.scss` で定義されており、各コンポーネントから参照可。
- フォントは LINESeedJP (woff2) を `/public/fonts/` に自己ホストし、`globals.scss` で `@font-face` 定義。

### パスエイリアス

`@/` は `src/` にマップされる (`tsconfig.json` の `paths` 設定)。

### コンポーネント構造

各コンポーネントは専用ディレクトリに以下のファイルをセットで持つ:
- `index.tsx` — コンポーネント本体
- `styles.module.scss` + `styles.module.scss.d.ts` — スタイルと型
- `stories.ts` — Storybook ストーリー

`'use client'` が必要なのは `Player` コンポーネントのみ（react-h5-audio-player を使用）。それ以外は Server Components。

### ページ構成

| パス | 内容 |
|------|------|
| `/` | メインビジュアルのみ |
| `/about` | プロフィールページ |
| `/archive` | アルバム一覧 |
| `/archive/[id]` | アルバム詳細・試聴 |
