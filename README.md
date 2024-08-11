# 2024vol.5
サポーターズマンスリーハッカソンvol.5のレポジトリです

# 開発者
井上健人

# 開発環境準備（バックエンド）
基本的にバックエンドの開発はDBコンテナとbackendコンテナを使用して開発を行なってください<br />
composeファイルは本番環境でのビルド用なので使用しないでください<br />

`SQLite`と`express`を使用しています

### db環境を準備
1. `db`のディレクトリに移動
1. `docker build -t keyguardian-db .`でdbのコンテナをビルド
1. `docker run --name keyguardian-db -p 3002:3002 keyguardian-db`でコンテナを起動（ポートはご自由に）
1. 任意のツールでコンテナに入り、sqlite3が起動しており、database.sqlite3ファイルがしっかりマウントされていれば成功です

### バックエンド環境を準備
1. `backend`のディレクトリに移動
1. `docker build -t keyguardian-backend .`でbackendのコンテナをビルド
1. `docker run --name keyguardian-backend -p 3001:3001 keyguardian-backend`でコンテナを起動（ポートはご自由に）
1. ブラウザ、curlコマンド、postmanでルートにアクセスして`hello world`がgetできたら成功です

# 開発環境準備（フロントエンド）
基本的にフロントエンドは各自のnode環境で開発してください<br />
composeファイルは本番環境でのビルド用なので使用しないでください<br />

`React`を使用しています

1. フロントエンドは特に準備は要りません nodeとnpmモジュールを各自でインストールしておいてください

# 開発環境開始（バックエンド）
開発環境を準備してない人は上を終わらせてから開始してください

1. `db`ディレクトリに移動する
1. `docker run --name keyguardian-db -p 3002:3002 keyguardian-db`でDBを起動（ポートはご自由に）
1. `backend`ディレクトリに移動する
1. `docker run --name keyguardian-backend -p 3001:3001 keyguardian-backend`でバックエンドを起動（ポートはご自由に）

# 開発環境開始（フロントエンド）
1. `frontend`ディレクトリに移動する
1. `npm run dev`で起動